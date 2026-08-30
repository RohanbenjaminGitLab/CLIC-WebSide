import emailjs from '@emailjs/browser';

/**
 * Sends contact inquiry email to CLIC Campus info email (cliccampusinfo@gmail.com).
 * Uses EmailJS SDK with client-side field validation, sanitization, and fallback.
 *
 * @param {Object} formData
 * @param {string} formData.name - User's full name
 * @param {string} formData.email - User's email address
 * @param {string} formData.phone - User's phone number
 * @param {string} formData.course - Selected academic program/course
 * @param {string} formData.message - Inquiry message content
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendInquiryEmail(formData) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // 1. Basic validation checks
  const name = formData.name?.trim();
  const email = formData.email?.trim();
  const phone = formData.phone?.trim();
  const course = formData.course?.trim();
  const message = formData.message?.trim();

  if (!name || !email || !phone || !course || !message) {
    return { success: false, message: 'All form fields are required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  // 2. Fallback / mock mode if EmailJS environment variables are not yet configured
  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      'EmailJS credentials (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) are not configured in your .env file.'
    );
    
    // Simulate slight network delay for smooth UI feedback
    await new Promise((resolve) => setTimeout(resolve, 1200));

    return { 
      success: true, 
      message: 'Inquiry received! (Note: Please set your EmailJS credentials in .env to deliver real emails to cliccampusinfo@gmail.com)' 
    };
  }

  // 3. Dispatch email via EmailJS
  try {
    const templateParams = {
      to_email: 'cliccampusinfo@gmail.com',
      from_name: name,
      from_email: email,
      from_phone: phone,
      selected_course: course,
      message_content: message,
      reply_to: email,
      submitted_at: new Date().toLocaleString(),
    };

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    if (response.status === 200) {
      return { success: true, message: 'Your inquiry has been successfully sent to CLIC Campus!' };
    } else {
      throw new Error(`EmailJS responded with status: ${response.status}`);
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { 
      success: false, 
      message: error?.text || error?.message || 'Failed to submit inquiry. Please try again later.' 
    };
  }
}
