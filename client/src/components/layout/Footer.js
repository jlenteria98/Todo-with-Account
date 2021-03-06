import React from "react";

function Footer() {
  return (
    <div>
      <footer className="p-2 text-center font-small footer">
        &copy; {new Date().getFullYear()} Copyright.
        <span className="ml-2">
          <a href="https://www.facebook.com/jlenteria98" target="_blank">
            Jonel Lenteria
          </a>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
