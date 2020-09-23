import React from 'react'

export default function Footer() {
  const mystyle = {
    "position": "absolute",
    "bottom": "0",
    "width": "100%", 
    "color": "#333",
  };
  return (
    <footer style={mystyle} className="page-footer font-small bg-ligth pt-2">
      <div className="footer-copyright text-center py-3">
        © 2019 Copyright: <span> ทำไรดีนะ</span>
      </div>
    </footer>
  );
}
