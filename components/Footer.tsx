import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-text-main text-white pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Logo variant="white" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Platform solusi olahraga terdepan di Jabodetabek. Booking lapangan, cari teman sparring, dan atur jadwal mainmu sekarang.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Perusahaan</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partner</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Bantuan</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
             <h4 className="font-bold text-lg mb-6">Tetap Terhubung</h4>
             <p className="text-gray-400 text-sm mb-4">Dapatkan info promo dan update terbaru.</p>
             <form className="flex flex-col gap-3">
               <input 
                 type="email" 
                 placeholder="Email Anda" 
                 className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
               />
               <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg text-sm transition-colors">
                 Berlangganan
               </button>
             </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2025 LapangIn! - PPD A7. All rights reserved.</p>
          {/* <div className="flex gap-6 mt-4 md:mt-0">
             <span>Made with ❤️ in Depok</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
};