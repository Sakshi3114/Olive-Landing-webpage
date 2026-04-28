import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-[#3f6f45] text-white rounded-[40px] px-8 md:px-16 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">
              Explore More Olive Tools
            </h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="hover:underline cursor-pointer">Explore Foods</li>
              <li className="hover:underline cursor-pointer">
                Allergy Scanner App
              </li>
              <li className="hover:underline cursor-pointer">
                Gluten Free Scanner
              </li>
              <li className="hover:underline cursor-pointer">Dairy Free App</li>
              <li className="hover:underline cursor-pointer">
                Food Ingredient Checker
              </li>
            </ul>
          </div>

          {/* Middle Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">About</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">Email us</li>
              <li className="hover:underline cursor-pointer">Contact us</li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-lime-300 rounded-full flex items-center justify-center text-green-900 font-bold">
                o
              </div>
              <span className="text-2xl font-bold text-lime-300">live</span>
            </div>

            <p className="text-sm text-white/90 mb-6 max-w-xs">
              Get the latest lab testing data sent directly to your inbox.
            </p>

            {/* Input + Button */}
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter Email address"
                className="bg-white/10 placeholder-white/70 text-white px-4 py-3 rounded-full outline-none w-full max-w-xs"
              />
              <button className="bg-white text-gray-900 px-5 py-3 rounded-full font-medium hover:scale-105 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80 gap-4">
          <div className="flex flex-wrap gap-6">
            <span className="hover:underline cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:underline cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:underline cursor-pointer">
              Refund Policy
            </span>
            <span className="hover:underline cursor-pointer">
              Medical Consent
            </span>
            <span className="hover:underline cursor-pointer">Sign in</span>
          </div>

          <div>© 2026 Olive Inc.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
