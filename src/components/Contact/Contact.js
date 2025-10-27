import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaPhone, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';
import qrCode from '../../assets/Zalo_qr.jpg';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Only remove if the script still exists in the document
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic rate limiting - prevent submission within 30 seconds
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      setStatus('rate-limit');
      setTimeout(() => setStatus(''), 4000);
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    // Check reCAPTCHA
    const recaptchaResponse = window.grecaptcha?.getResponse();
    if (!recaptchaResponse) {
      setStatus('captcha-error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('g-recaptcha-response', recaptchaResponse);

      const response = await fetch('https://getform.io/f/bwnyopja', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setLastSubmitTime(now);
        window.grecaptcha?.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <h3>{t('contact.phone')}</h3>
              <p>(+84) 0983 0080 96</p>
              <div className="qr_code">
                <img src={qrCode} alt="QR Code" />
              </div>
            </div>

            <div className="info-card">
              <a href="https://www.linkedin.com/in/bentran-ph" target="_blank" rel="noopener noreferrer">
              <div className="info-icon">
                <FaLinkedin />
              </div>
              <h3>{t('contact.linkedin')}</h3>
                  https://www.linkedin.com/in/bentran-ph
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>{t('contact.email')}</h3>
              <p>bentranph@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>{t('contact.form.title')}</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name')}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message')}
                  rows="6"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* reCAPTCHA Widget */}
              <div className="recaptcha-container">
                <div 
                  className="g-recaptcha" 
                  data-sitekey="6LfiYe8rAAAAAHAA5WblX5jV5DvDRRLRDi_kjzzo"
                  data-theme="light"
                ></div>
              </div>

              {status === 'success' && (
                <div className="form-message success">
                  {t('contact.form.success')}
                </div>
              )}

              {status === 'error' && (
                <div className="form-message error">
                  {t('contact.form.error')}
                </div>
              )}

              {status === 'captcha-error' && (
                <div className="form-message error">
                  Please complete the reCAPTCHA verification
                </div>
              )}

              {status === 'rate-limit' && (
                <div className="form-message error">
                  Please wait 30 seconds before submitting another message
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                <FaPaperPlane /> {isSubmitting ? 'Sending...' : t('contact.form.send')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

