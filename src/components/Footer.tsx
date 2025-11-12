import { Facebook, Twitter, Youtube, FileCheck, Shield, DollarSign } from 'lucide-react';

const quickLinks = [
  'Home',
  'About Us',
  'Career',
  'Contact Us',
  'Privacy Policy',
  'Terms & Conditions',
  'Franchise',
  'Statutory Compliance',
];

const popularPackages = [
  'Molecular Diagnostics',
  'Molecular Hematology',
  'Microbiology',
  'Transfusion Medicine',
  'Molecular Diagnostics',
  'Molecular Hematology',
  'Microbiology',
];

const citiesColumn1 = ['Mumbai', 'Delhi', 'Agra', 'Ahmedabad', 'Ambala', 'Kolkata', 'Pune'];
const citiesColumn2 = ['Mumbai', 'Delhi', 'Agra', 'Ahmedabad', 'Ambala', 'Kolkata', 'Pune'];
const citiesColumn3 = ['Mumbai', 'Delhi', 'Agra', 'Ahmedabad', 'Ambala', 'Kolkata', 'Pune'];

export function Footer() {
  return (
    <footer className="bg-[#377A97] text-white">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-3xl">
                <span className="text-white">Book</span>
                <span className="text-[#63D8A5]">Your</span>
                <span className="text-white">Lab</span>
              </h2>
            </div>
            <p className="text-white/80 text-sm mb-6 max-w-xs leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#63D8A5] flex items-center justify-center hover:bg-[#4dc490] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" fill="white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#63D8A5] flex items-center justify-center hover:bg-[#4dc490] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" fill="white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#63D8A5] flex items-center justify-center hover:bg-[#4dc490] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" fill="white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#63D8A5] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h3 className="text-[#63D8A5] mb-4">Popular Packages</h3>
            <ul className="space-y-2">
              {popularPackages.map((pkg, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {pkg}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Presence - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-[#63D8A5] mb-4">Our Presence</h3>
            <div className="grid grid-cols-3 gap-6">
              <ul className="space-y-2">
                {citiesColumn1.map((city, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {citiesColumn2.map((city, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {citiesColumn3.map((city, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-[#4a93b5] to-[#377A97] py-8 -mx-4 px-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Reliable */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white mb-2">Reliable</h4>
              <p className="text-white/70 text-sm">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
            </div>

            {/* Secure */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white mb-2">Secure</h4>
              <p className="text-white/70 text-sm">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
            </div>

            {/* Affordable */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white mb-2">Affordable</h4>
              <p className="text-white/70 text-sm">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/80 text-sm">
            © 2020 All Rights Reserved by Intermedia Tech Health Services Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
}