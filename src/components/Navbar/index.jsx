// @ts-nocheck
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import { Button } from '../../components/ui/button';


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
    { name: "Ouvidoria", href: "#ouvidoria" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const createPageUrl = () => {
    navigate("/")
  }

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
            <Link
            to={createPageUrl}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <img 
                  src={logo}
                  alt="logo"
                  />
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
            </Link>

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
                    item.name === "Ouvidoria" ? navigate("#ouvidoria") : scrollToSection(item.href)
                  }}
                  className="text-left font-medium text-gray-700 hover:text-[#145CAB] transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}