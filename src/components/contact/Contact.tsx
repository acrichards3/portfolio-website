import React from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import MainButton from '../common/buttons/MainButton';
import MessageSent from '../common/messages/MessageSent';
import styles from './Contact.module.scss';

import { env } from '../../env.mjs';

export default function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const SERVICE_ID = env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  console.log('SERVICE_ID', SERVICE_ID);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      const response: EmailJSResponseStatus = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        data,
        PUBLIC_KEY
      );
      setSent(true);
      console.log('SUCCESS!', response.status, response.text);
    } catch (error) {
      console.log('FAILED:', error);
    }

    setIsLoading(false);
    setName('');
    setEmail('');
    setMessage('');
    return undefined;
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        You can reach me through any of the links in the footer at the bottom of
        the page or by filling out this contact form. I check my email regularly
        so you can expect a reply within 1-2 days.
      </p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.inputSection}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your Name"
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your Email"
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label} htmlFor="message">
            Message:
          </label>
          <textarea
            className={styles.textArea}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Message..."
          />
        </div>
        {sent ? (
          <MessageSent />
        ) : (
          <MainButton
            text={isLoading ? 'Sending...' : 'Send Message'}
            type="submit"
          />
        )}
      </form>
    </div>
  );
}
