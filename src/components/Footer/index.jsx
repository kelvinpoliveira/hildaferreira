// @ts-nocheck
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import logo from '../../assets/images/logo.webp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/InstitutoHildaFerreira/", color: "hover:text-blue-600" },
    { icon: Instagram, href: "https://www.instagram.com/institutohildaferreira/", color: "hover:text-pink-500" },
    { icon: Youtube, href: "https://www.youtube.com/c/videosihf", color: "hover:text-red-500" },
    { icon: Mail, href: "mailto:contato@escolahildaferreira.com.br", color: "hover:text-[#145CAB]" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 mb-12 items-center justify-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
              <img 
              src={logo}
              alt="logo"
              />
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

          {/* <div>
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
          </div> */}

          <div>
            <h4 className="font-bold text-lg mb-6 text-[#FBB03B]">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <p>Rua Carabuçu, Nº 67 - Novo Aleixo (Antigo Núcleo 15)</p>
              <p>Cidade Nova 3, MA - 1234-567</p>
              <p>(92) 98827-4517</p>
              <p>(92) 3646-5096</p>
              <p>faleconosco@hildaferreira.com.br</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-[#ED1C24]">Horário de Funcionamento</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium">Segunda à Sexta</p>
                <p>7h às 17h</p>
              </div>
              <div>
                <p className="font-medium">Sábado</p>
                <p>8h às 11:30h</p>
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
          </div>
        </div>
      </div>
    </footer>
  );
}