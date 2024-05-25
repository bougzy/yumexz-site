import React from 'react';
import 'mdbootstrap/css/mdb.min.css';
import "@mdi/font/css/materialdesignicons.min.css";


const Footer = () => {
  return (
    <div>
      <footer className="text-center mt-2">
        <div className="container p-4"></div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
          <a className="text-body" href="https://mdbootstrap.com/"> YumexzPowerConsultancy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
