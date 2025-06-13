import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="text-gray-600">
        If you have any questions or need assistance, feel free to contact us at:
      </p>
      <p className="text-gray-600">
        Email: <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a>
      </p>
      <p className="text-gray-600">
        Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+123-456-7890</a>
      </p>
    </div>
  );
};

export default Contact;