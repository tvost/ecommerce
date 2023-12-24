// src/components/Footer.js
import React from 'react';

const Footer = ({ companyName, contactInfo }) => {
  return (
    <div className="footer">
      <p>{companyName}</p>
      <p>{contactInfo}</p>
    </div>
  );
};

export default Footer;