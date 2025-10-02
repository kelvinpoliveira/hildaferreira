// @ts-nocheck
import { Menu as MenuIcon, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import { Button } from '../../components/ui/button';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileEnsinoOpen, setMobileEnsinoOpen] = useState(false);
  const [mobileAreaOpen, setMobileAreaOpen] = useState(false);

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
    { name: "Área Exclusiva", href: "#ouvidoria" },
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

  const callPageUrl = (page) => {
    navigate(`/${page}`)
  }

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-[#145CAB]"
      }`}
    >
      <div className="w-[80%] mx-auto px-4 py-4">
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
                    Instituto Hilda Ferreira
                  </h1>
                  <p className={`text-sm ${isScrolled ? "text-gray-600" : "text-white/80"}`}>
                    Muito mais do que uma escola, uma grande família
                  </p>
                </div>
              </div>
            </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              item.name === "Ensino" ? (
                  <Menu as="div" className="relative">
                    <MenuButton className={`font-medium transition-colors flex flex-row items-center gap-1 hover:text-[#FBB03B] ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}>
                      {item.name}
                      <ChevronDown aria-hidden="true" className={`size-5 ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`} />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                      data-[closed]:scale-95 data-[closed]:opacity-0
                      data-[enter]:duration-300 data-[leave]:duration-200
                      data-[enter]:ease-out data-[leave]:ease-in
                      transition-all"
                    >
                    <div className="py-1">
                      <MenuItem>
                        {({ active }) => (
                          <button onClick={() => callPageUrl("Infantil")} className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-sm text-gray-700`}>
                            Educação Infantil
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <button onClick={() => callPageUrl("AnosIniciais")} className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-sm text-gray-700`}>
                            Ensino Fundamental Anos Iniciais
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <button onClick={() => callPageUrl("AnosFinais")} className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-sm text-gray-700`}>
                            Ensino Fundamental Anos Finais
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <button onClick={() => callPageUrl("EnsinoMedio")} className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-sm text-gray-700`}>
                            Ensino Médio
                          </button>
                        )}
                      </MenuItem>
                    </div>
                    </MenuItems>
                  </Menu>
              ) : (
                item.name === "Área Exclusiva" ? (
                  <Menu as="div" className="relative">
                    <MenuButton className={`font-medium transition-colors flex flex-row items-center gap-1 hover:text-[#FBB03B] ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}>
                      {item.name}
                      <ChevronDown aria-hidden="true" className={`size-5 ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`} />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                      data-[closed]:scale-95 data-[closed]:opacity-0
                      data-[enter]:duration-300 data-[leave]:duration-200
                      data-[enter]:ease-out data-[leave]:ease-in
                      transition-all"
                    >
                    <div className="py-1">
                      <MenuItem>
                        {({ active }) => (
                          <a target="_blank" rel="noopener noreferrer" href="https://siga04.activesoft.com.br/login/?instituicao=HILDAFERREIRA" className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-sm text-gray-700`}>
                            Área do Aluno
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <a target="_blank" rel="noopener noreferrer" href="https://siga04.activesoft.com.br/login/?instituicao=HILDAFERREIRA" className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-sm text-gray-700`}>
                            Área do Professor
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <a target="_blank" rel="noopener noreferrer" href="https://pmais.p4ed.com/" className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-sm text-gray-700`}>
                            Portal Poliedro
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <button className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                          onClick={() => {
                            console.log(item)
                            navigate("/Ouvidoria")
                          }}>
                            Ouvidoria
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <button className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-sm text-gray-700`}>
                            Linha Ética
                          </button>
                        )}
                      </MenuItem>
                    </div>
                    </MenuItems>
                  </Menu>
                ) : (

                <button
                key={item.name}
                onClick={() => {
                  item.name === "Ouvidoria" ? navigate("/Ouvidoria") : scrollToSection(item.href)
                }}
                className={`font-medium transition-colors hover:text-[#FBB03B] ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}
              </button>
                )
              )
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
              <MenuIcon className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-xl shadow-xl p-4">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                item.name === "Ensino" ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setMobileEnsinoOpen(!mobileEnsinoOpen)}
                      className="w-full text-left font-medium text-gray-700 hover:text-[#145CAB] transition-colors flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileEnsinoOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileEnsinoOpen && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        <button
                          onClick={() => {
                            callPageUrl("Infantil");
                            setIsMobileMenuOpen(false);
                          }}
                          className="text-left text-sm text-gray-600 hover:text-[#145CAB] transition-colors"
                        >
                          Educação Infantil
                        </button>
                        <button
                          onClick={() => {
                            callPageUrl("AnosIniciais");
                            setIsMobileMenuOpen(false);
                          }}
                          className="text-left text-sm text-gray-600 hover:text-[#145CAB] transition-colors"
                        >
                          Ensino Fundamental Anos Iniciais
                        </button>
                        <button
                          onClick={() => {
                            callPageUrl("AnosFinais");
                            setIsMobileMenuOpen(false);
                          }}
                          className="text-left text-sm text-gray-600 hover:text-[#145CAB] transition-colors"
                        >
                          Ensino Fundamental Anos Finais
                        </button>
                        <button
                          onClick={() => {
                            callPageUrl("EnsinoMedio");
                            setIsMobileMenuOpen(false);
                          }}
                          className="text-left text-sm text-gray-600 hover:text-[#145CAB] transition-colors"
                        >
                          Ensino Médio
                        </button>
                      </div>
                    )}
                  </div>
                ) : item.name === "Área Exclusiva" ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setMobileAreaOpen(!mobileAreaOpen)}
                      className="w-full text-left font-medium text-gray-700 hover:text-[#145CAB] transition-colors flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileAreaOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileAreaOpen && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://siga04.activesoft.com.br/login/?instituicao=HILDAFERREIRA"
                          className="text-left text-sm text-gray-600 hover:text-[#145CAB] transition-colors"
                        >
                          Área do Aluno
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://siga04.activesoft.com.br/login/?instituicao=HILDAFERREIRA"
                          className="text-left text-sm text-gray-600 hover:text-[#145CAB] transition-colors"
                        >
                          Área do Professor
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://pmais.p4ed.com/"
                          className="text-left text-sm text-gray-600 hover:text-[#145CAB] transition-colors"
                        >
                          Portal Poliedro
                        </a>
                        <button
                          onClick={() => {
                            navigate("/Ouvidoria");
                            setIsMobileMenuOpen(false);
                          }}
                          className="text-left text-sm text-gray-600 hover:text-[#145CAB] transition-colors"
                        >
                          Ouvidoria
                        </button>
                        <button
                          className="text-left text-sm text-gray-600 hover:text-[#145CAB] transition-colors"
                        >
                          Linha Ética
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      item.name === "Ouvidoria" ? navigate("/Ouvidoria") : scrollToSection(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left font-medium text-gray-700 hover:text-[#145CAB] transition-colors"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}