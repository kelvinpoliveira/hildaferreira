// @ts-nocheck
import React from "react";
import { GraduationCap, Facebook, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
    { icon: Mail, href: "mailto:contato@escolahildaferreira.com.br", color: "hover:text-[#145CAB]" }
  ];

  const quickLinks = [
    "Sobre Nós",
    "Programas",
    "Admissões",
    "Contato",
    "Blog"
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#145CAB] to-[#1e6bc4] rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Escola Hilda Ferreira</h3>
                <p className="text-gray-400 text-sm">Excelência em Educação</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Há mais de 30 anos formando cidadãos preparados para os desafios do futuro através de uma educação inovadora e humanizada.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-[#F4EC09]">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-[#FBB03B]">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <p>Rua das Flores, 123 - Centro</p>
              <p>São Paulo, SP - 01234-567</p>
              <p>(11) 3456-7890</p>
              <p>contato@escolahildaferreira.com.br</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-[#ED1C24]">Horário de Funcionamento</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium">Segunda à Sexta</p>
                <p>7h às 18h</p>
              </div>
              <div>
                <p className="font-medium">Sábado</p>
                <p>8h às 12h</p>
              </div>
              <div>
                <p className="font-medium">Domingo</p>
                <p>Fechado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} Escola Hilda Ferreira. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}