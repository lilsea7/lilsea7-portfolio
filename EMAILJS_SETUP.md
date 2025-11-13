# EmailJS Setup Guide

This guide will help you set up email sending for the contact form using EmailJS.

## Step 1: Install EmailJS Package

Run this command in your project root:

```bash
npm install @emailjs/browser
```

## Step 2: Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 3: Set Up Email Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** (left sidebar)
3. Click **Add New Service**
4. Choose an email provider (Gmail, Outlook, etc.)
   - For Gmail:
     - Enable 2-step verification
     - Create an **App Password** for Gmail (not your regular password)
     - Use this app password in EmailJS setup
4. Follow the setup wizard and name your service (e.g., "Gmail")
5. Copy your **Service ID** (you'll need this)

Example Service ID: `service_abc123xyz`

## Step 4: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - The message content

Example template:
```
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save your template and copy your **Template ID**

Example Template ID: `template_abc123xyz`

## Step 5: Get Your Public Key

1. Go to **Account** → **API Keys** in EmailJS
2. Copy your **Public Key**

Example Public Key: `abc123xyz_public_key`

## Step 6: Update Contact Form Code

In `src/page/Contact/Contact.jsx`, replace these three values:

```javascript
// Line 1: Initialize with your PUBLIC KEY
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')

// Line 2: Replace in handleSubmit with your Service ID
emailjs.send(
  'YOUR_EMAILJS_SERVICE_ID',  // ← Replace this
  'YOUR_EMAILJS_TEMPLATE_ID',  // ← Replace this
  templateParams
)

// Line 3: Replace the recipient email in templateParams
const templateParams = {
  to_email: 'your-email@example.com', // ← Replace with your actual email
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message
}
```

**Example with real values:**

```javascript
emailjs.init('pk_live_abc123xyz_public_key')

emailjs.send(
  'service_abc123xyz',
  'template_abc123xyz',
  templateParams
)
```

## Step 7: Test the Contact Form

1. Run your dev server: `npm run dev`
2. Navigate to the Contact page
3. Fill in the form with test data
4. Click "Send Message"
5. Check your email inbox for the test message

## Step 8: Customize (Optional)

You can customize:
- Email template design in EmailJS dashboard
- Form validation rules in React
- Success/error messages in the component
- Email recipient address

## Troubleshooting

**Issue: "Service not available" error**
- Check that your Service ID is correct
- Verify your email service is properly configured in EmailJS

**Issue: Email not sending**
- Check console for error messages
- Verify your Public Key is correct
- Make sure template variables match your code

**Issue: Emails going to spam**
- EmailJS provides SPF/DKIM setup instructions in the Email Services page
- Follow those for better email deliverability

## Security Note

Never commit your keys to version control. If you need environment variables:

1. Create a `.env.local` file in your project root:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

2. Update your code to use:
```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
```

Then add `.env.local` to your `.gitignore` file.
