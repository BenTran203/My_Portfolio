# Portfolio Website Guide 🌿

Welcome to your new portfolio website! This guide will help you customize it to match your personal information and style.

## 🎨 Design Features

- **Green & White Theme**: Friendly and modern color scheme
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion powered animations
- **Multilingual**: English and Vietnamese translations using react-i18next
- **Three Main Sections**:
  1. Introduction (About, Experience, Education)
  2. Project Showcase (Sliding animations)
  3. Contact Form (Email submission with fixed subject)

## 🚀 Getting Started

The development server should already be running at `http://localhost:3000`

If not, run:
```bash
npm start
```

## ✏️ Customization Guide

### 1. Personal Information

#### Update Your Name and Avatar
**File: `src/components/Introduction.js`**

Line 24: Replace "Your Name" with your actual name:
```javascript
<h2 className="intro-name">Your Name</h2>
```

The avatar currently shows a user icon. To use a photo:
- Replace the `FaUser` icon section (lines 17-19) with:
```javascript
<img src="/path-to-your-photo.jpg" alt="Your Name" />
```

#### Update Contact Information
**File: `src/components/Contact.js`**

Lines 74, 83, 92: Update your contact details:
```javascript
<p>+1 (555) 123-4567</p>  // Your phone
<a href="https://linkedin.com/in/yourprofile">  // Your LinkedIn
<p>your.email@example.com</p>  // Your email
```

Line 44: Update the email recipient:
```javascript
const mailtoLink = `mailto:your.email@example.com?subject=...`;
```

### 2. About Me Content

**File: `src/i18n.js`**

Update the translations for both English and Vietnamese:

**English (lines 14-21)**:
```javascript
"intro.about.description": "Your personal description...",
"intro.experience.years": "X+ Years",
"intro.experience.description": "Your experience description...",
"intro.education.degree": "Your Degree",
"intro.education.university": "Your University",
```

**Vietnamese (lines 60-67)**: Update corresponding Vietnamese translations

### 3. Projects

**File: `src/components/Projects.js`**

Lines 13-36: Update the projects array with your actual projects:

```javascript
const projects = [
  {
    id: 1,
    title: t('project1.title'),
    description: t('project1.description'),
    tools: t('project1.tools'),
    image: 'URL_TO_YOUR_PROJECT_IMAGE',  // Change this
    projectLink: 'https://your-project-url.com',  // Change this
    githubLink: 'https://github.com/yourusername/project'  // Change this
  },
  // Add more projects...
];
```

**Update Project Translations in `src/i18n.js`:**

Lines 28-36 (English) and 74-82 (Vietnamese):
```javascript
"project1.title": "Your Project Name",
"project1.description": "Your project description...",
"project1.tools": "React, Node.js, etc.",
```

### 4. Adding/Removing Projects

To add more projects:
1. Add the project object to the `projects` array in `Projects.js`
2. Add corresponding translations in `i18n.js` (both languages)

To have fewer projects:
1. Remove project objects from the `projects` array
2. Optionally remove unused translations

### 5. Color Customization

The portfolio uses green tones. To adjust colors:

**Primary Green**: `#22c55e`
**Dark Green**: `#166534`
**Green Background**: `#f0fdf4`

Files to modify for color changes:
- `src/components/Introduction.css`
- `src/components/Projects.css`
- `src/components/Contact.css`
- `src/components/Navigation.css`

Search and replace these hex codes with your preferred colors.

### 6. Email Form Subject

The email subject is fixed as "Worker reach out to you" as requested.

To change it, modify **`src/i18n.js`**:
```javascript
// English (line 48)
"contact.form.emailSubject": "Your New Subject",

// Vietnamese (line 94)
"contact.form.emailSubject": "Vietnamese Translation",
```

### 7. Adding Your Own Avatar Image

1. Add your image to `public/` folder (e.g., `public/avatar.jpg`)
2. Update `src/components/Introduction.js`:

Replace lines 12-21 with:
```javascript
<motion.div className="intro-avatar" ...>
  <div className="avatar-circle">
    <img 
      src="/avatar.jpg" 
      alt="Your Name"
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
    />
  </div>
</motion.div>
```

## 🌐 Language Switching

Users can switch between English and Vietnamese using the language selector in the navigation bar.

## 📱 Responsive Design

The portfolio is fully responsive:
- Desktop: Full layout with side-by-side sections
- Tablet: Adjusted layouts
- Mobile: Stacked sections with mobile menu

## 🎯 Project Images

For best results, use images with a 3:2 aspect ratio (600x400px or higher).

Free stock image sources:
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)

## 📦 Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🚀 Deployment

You can deploy to:
- **Vercel**: `npm i -g vercel` then `vercel`
- **Netlify**: Drag & drop the `build` folder
- **GitHub Pages**: Follow React deployment guide

## 💡 Tips

1. **Keep it concise**: Visitors prefer scannable content
2. **High-quality images**: Use professional project screenshots
3. **Update regularly**: Keep your projects current
4. **Test on mobile**: Most visitors will view on phones
5. **Proofread**: Check both English and Vietnamese content

## 🤝 Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Ensure all dependencies are installed: `npm install`
3. Clear cache: `npm start` with clear cache

## 📝 Quick Checklist

- [ ] Update personal name
- [ ] Add avatar/photo
- [ ] Update contact information (phone, LinkedIn, email)
- [ ] Customize about section
- [ ] Update experience and education
- [ ] Add your projects with images and links
- [ ] Translate content to Vietnamese
- [ ] Test language switching
- [ ] Test on mobile devices
- [ ] Test email form
- [ ] Build and deploy

Enjoy your new portfolio! 🎉💚

