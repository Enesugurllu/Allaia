import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-[#1B2434]">
      <div className="px-6 md:px-12 lg:px-24">
        <footer className="bg-[#1B2434] text-white text-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Quick Links */}
              <div>
                <h3 className="text-base font-bold mb-3">QUICK LINKS</h3>
                <ul className="space-y-1.5">
                  <li><Link href="/about" className="hover:text-gray-300">About us</Link></li>
                  <li><Link href="/faq" className="hover:text-gray-300">Faq</Link></li>
                  <li><Link href="/help" className="hover:text-gray-300">Help</Link></li>
                  <li><Link href="/account" className="hover:text-gray-300">My account</Link></li>
                  <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
                  <li><Link href="/contacts" className="hover:text-gray-300">Contacts</Link></li>
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-base font-bold mb-3">CATEGORIES</h3>
                <ul className="space-y-1.5">
                  <li><Link href="/clothes" className="hover:text-gray-300">Clothes</Link></li>
                  <li><Link href="/electronics" className="hover:text-gray-300">Electronics</Link></li>
                  <li><Link href="/furniture" className="hover:text-gray-300">Furniture</Link></li>
                  <li><Link href="/glasses" className="hover:text-gray-300">Glasses</Link></li>
                  <li><Link href="/shoes" className="hover:text-gray-300">Shoes</Link></li>
                  <li><Link href="/watches" className="hover:text-gray-300">Watches</Link></li>
                </ul>
              </div>

              {/* Contacts */}
              <div>
                <h3 className="text-base font-bold mb-3">CONTACTS</h3>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-1.5">
                    <i className="fas fa-home text-xs"></i>
                    97845 Baker st. 567<br />Los Angeles - US
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fas fa-phone text-xs"></i>
                    +94 423-23-221
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fas fa-envelope text-xs"></i>
                    info@allaia.com
                  </li>
                </ul>
              </div>

              {/* Keep in Touch */}
              <div>
                <h3 className="text-base font-bold mb-3">KEEP IN TOUCH</h3>
                <div className="mb-3">
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="p-1.5 text-sm flex-grow bg-[#2A3444] text-white"
                    />
                    <button className="bg-blue-600 p-1.5 hover:bg-blue-700">
                      <i className="fas fa-chevron-right text-xs"></i>
                    </button>
                  </div>
                </div>
                <h4 className="text-base mb-2">Follow Us</h4>
                <div className="flex gap-3">
                  <Link href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f text-xs"></i></Link>
                  <Link href="#" className="hover:text-gray-300"><i className="fab fa-twitter text-xs"></i></Link>
                  <Link href="#" className="hover:text-gray-300"><i className="fab fa-instagram text-xs"></i></Link>
                  <Link href="#" className="hover:text-gray-300"><i className="fab fa-tiktok text-xs"></i></Link>
                  <Link href="#" className="hover:text-gray-300"><i className="fab fa-whatsapp text-xs"></i></Link>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-6 pt-6 border-t border-gray-700 flex flex-wrap justify-between items-center text-xs">
              <div className="flex items-center gap-6">
                <select className="bg-transparent border-none text-xs cursor-pointer text-white">
                  <option className="bg-white text-black">English</option>
                  <option className="bg-white text-black">Français</option>
                  <option className="bg-white text-black">Español</option>
                  <option className="bg-white text-black">Русский</option>
                </select>
                <select className="bg-transparent border-none text-xs cursor-pointer text-white">
                  <option className="bg-white text-black">US Dollars</option>
                  <option className="bg-white text-black">Euro</option>
                  <option className="bg-white text-black">Gold</option>
                </select>
                <div className="flex gap-1.5">
                  <Image src="/image/visa.png" alt="Visa" width={32} height={20} />
                  <Image src="/image/mastercard.png" alt="Mastercard" width={32} height={20} />
                  <Image src="/image/paypal.png" alt="PayPal" width={32} height={20} />
                  <Image src="/image/amex.png" alt="American Express" width={32} height={20} />
                </div>
              </div>
              
              <div className="flex gap-3 text-xs">
                <Link href="/terms" className="hover:text-gray-300">Terms and conditions</Link>
                <Link href="/privacy" className="hover:text-gray-300">Privacy</Link>
                <span>© 2024 Allaia</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
