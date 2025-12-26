import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);
// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map();

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid email address' 
      });
    }

    // Rate limiting (30 seconds between submissions from same email)
    const now = Date.now();
    const lastSubmit = rateLimitStore.get(email);
    if (lastSubmit && now - lastSubmit < 30000) {
      return res.status(429).json({ 
        success: false, 
        error: 'Please wait 30 seconds before submitting again' 
      });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Replace with your verified domain
      to: ['bentranph@gmail.com'], // Your email
      replyTo: email,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to send email' 
      });
    }

    // Update rate limit store
    rateLimitStore.set(email, now);

    res.json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data.id 
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});

export default app;
