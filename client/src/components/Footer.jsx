import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink text-black py-6">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="https://www.instagram.com/16.nailbar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row text-black hover:text-gray-400"
        >
          <span>Follow us</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
          </svg>
        </a>
        <div>
          <p className="text-black">Phone: 0433 020 223</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
