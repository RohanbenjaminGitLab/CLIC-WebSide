import emailjs from '@emailjs/browser';

/**
 * Sends contact inquiry email.
 * Supports EmailJS service or falls back to simulated response if keys are not present.
 * @param {Object} formData 
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendInquiryEmail(formData) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Simple validation checks
  if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.message) {
    return { success: false, message: 'All form fields are required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  // If EmailJS env credentials are not configured, simulate a premium, interactive mock delivery
  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      'EmailJS credentials (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) are not set. Simulating functional API delivery.'
    );
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Always succeed in mock mode
    return { 
      success: true, 
      message: 'Inquiry successfully processed (Simulated delivery). Please configure environment variables for real email integration.' 
    };
  }

  try {
    // Map form fields to template variables expected in your EmailJS Template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      selected_course: formData.course,
      message_content: formData.message,
      to_email: 'studentsupport@cliccampus.edu' // Fallback target
    };

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    if (response.status === 200) {
      return { success: true, message: 'Your inquiry has been successfully sent!' };
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
