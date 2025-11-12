import { Search, Mic, Menu, ChevronDown, Upload, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    'Diagnostic Tests',
    'Preventive Health Check',
    'Health Scan',
    'Deal Of The Day',
    'Subscription',
    'COVID-19',
    'Customer Service',
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-[#377A97]">
              <h1 className="text-2xl">
                <span className="text-[#377A97]">Book Your</span>
                <span className="text-[#63D8A5]">Lab</span>
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative">
            <div className="relative flex items-center">
              <Search className="absolute left-3 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search For Diagnostic Tests / Health Checkup / Scan"
                className="pl-10 pr-12"
              />
              <button className="absolute right-2 p-2 bg-[#63D8A5] text-white">
                <Mic className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India"
                className="w-6 h-4"
              />
            </div>

            <button className="flex items-center gap-1 text-sm">
              <span className="text-gray-600">Hello,</span>
              <span className="text-[#377A97]">Sign In</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <button className="flex items-center gap-1 text-sm">
              <span className="text-[#377A97]">Location</span>
              <span>Mumbai</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <Button variant="outline" className="border-[#377A97] text-[#377A97]">
              <Upload className="w-4 h-4 mr-2" />
              Upload Prescription
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#377A97]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2"
            >
              <Menu className="w-5 h-5" />
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="px-4 py-3 text-white text-sm hover:bg-[#2a5f78] transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>

            <button className="flex items-center gap-2 bg-white text-[#377A97] px-4 py-2 my-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(+91) 9090 666 333</span>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden border-t border-teal-500">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-3 text-white text-sm hover:bg-[#2a5f78]"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}