// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from '../../components/ui/button';
import { Award, BookOpen, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Início", href: "#home" },
    { name: "Institucional", href: "#about" },
    { name: "Ensino", href: "#programs" },
    { name: "Contato", href: "#contact" },
    { name: "Ouvidoria", href: "#contact" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-[#145CAB]"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-[#145CAB] to-[#1e6bc4] rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className={`font-bold text-xl ${isScrolled ? "text-gray-900" : "text-white"}`}>
                Escola Hilda Ferreira
              </h1>
              <p className={`text-sm ${isScrolled ? "text-gray-600" : "text-white/80"}`}>
                Excelência em Educação
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  console.log("🚀 ~ item.name:", item.name)
                  item.name === "Ouvidoria" ? navigate("/Ouvidoria") : scrollToSection(item.href)
                }}
                className={`font-medium transition-colors hover:text-[#FBB03B] ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-[#FBB03B] hover:bg-[#e09d33] text-gray-900 font-semibold px-6"
            >
              Matricule-se
            </Button>

          </nav>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-xl shadow-xl p-4">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    console.log("🚀 ~ item.name:", item.name)
                    item.name === "Ouvidoria" ? navigate("/Ouvidoria") : scrollToSection(item.href)
                  }}
                  className="text-left font-medium text-gray-700 hover:text-[#145CAB] transition-colors"
                >
                  {item.name}
                </button>
              ))}
              {/* <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-[#FBB03B] hover:bg-[#e09d33] text-gray-900 font-semibold"
              >
                Matricule-se
              </Button> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}