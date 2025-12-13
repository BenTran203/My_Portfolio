import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaPhone, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
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
    <section className="relative py-24 md:py-32 px-6 md:px-8 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800" id="contact">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-neutral-100 mb-4 heading">
            {t('contact.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-neutral-300 body-text">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 shadow-xl shadow-black/20 card-interactive">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
                <FaPhone />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-100 mb-2 heading">
                {t('contact.phone')}
              </h3>
              <p className="text-gray-700 dark:text-neutral-300 mb-4">(+84) 0983 0080 96</p>
              <div className="mt-4 flex justify-center">
                <img src={qrCode} alt="QR Code" className="max-w-[200px] h-auto rounded-xl shadow-lg" />
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/bentran-ph"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-3xl p-8 shadow-xl shadow-black/20 card-interactive focus-ring"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
                <FaLinkedin />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-100 mb-2 heading">
                {t('contact.linkedin')}
              </h3>
              <p className="text-gray-700 dark:text-neutral-300 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                https://www.linkedin.com/in/bentran-ph
              </p>
            </a>

            <div className="glass rounded-3xl p-8 shadow-xl shadow-black/20 card-interactive">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-100 mb-2 heading">
                {t('contact.email')}
              </h3>
              <p className="text-gray-700 dark:text-neutral-300">bentranph@gmail.com</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass rounded-3xl p-8 md:p-10 shadow-xl shadow-black/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-neutral-100 mb-8 heading">
              {t('contact.form.title')}
            </h3>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-800 dark:text-neutral-100 font-semibold">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name')}
                  required
                  disabled={isSubmitting}
                  className="p-4 glass-light rounded-2xl border-2 border-transparent text-gray-800 dark:text-neutral-100 transition-all duration-200 focus-ring focus:border-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-800 dark:text-neutral-100 font-semibold">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                  required
                  disabled={isSubmitting}
                  className="p-4 glass-light rounded-2xl border-2 border-transparent text-gray-800 dark:text-neutral-100 transition-all duration-200 focus-ring focus:border-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-800 dark:text-neutral-100 font-semibold">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message')}
                  rows="6"
                  required
                  disabled={isSubmitting}
                  className="p-4 glass-light rounded-2xl border-2 border-transparent text-gray-800 dark:text-neutral-100 resize-y min-h-[120px] transition-all duration-200 focus-ring focus:border-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              <div className="flex justify-center my-2">
                <div 
                  className="g-recaptcha" 
                  data-sitekey="6LfiYe8rAAAAAHAA5WblX5jV5DvDRRLRDi_kjzzo"
                  data-theme="light"
                ></div>
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-2 border-emerald-500 text-center font-medium">
                  {t('contact.form.success')}
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-2 border-red-500 text-center font-medium">
                  {t('contact.form.error')}
                </div>
              )}

              {status === 'captcha-error' && (
                <div className="p-4 rounded-2xl bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-2 border-red-500 text-center font-medium">
                  Please complete the reCAPTCHA verification
                </div>
              )}

              {status === 'rate-limit' && (
                <div className="p-4 rounded-2xl bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-2 border-red-500 text-center font-medium">
                  Please wait 30 seconds before submitting another message
                </div>
              )}

              <button 
                type="submit" 
                className="cta-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={isSubmitting}
              >
                <FaPaperPlane />
                <span>{isSubmitting ? 'Sending...' : t('contact.form.send')}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

