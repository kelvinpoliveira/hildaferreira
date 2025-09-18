// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { BookOpen, Users, Award, ArrowRight } from "lucide-react";
import criancasSalaImg from "../../assets/images/criancas_sala.JPG";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-gradient justify-center min-h-screen flex items-center relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-[#145CAB]">
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#F4EC09] opacity-10 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#FBB03B] opacity-10 rounded-full blur-2xl" style={{ animationDelay: "2s" }}></div>
    </div>

    <div className="container mx-auto px-4 py-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
              <Award className="w-4 h-4" />
              Mais de 30 anos de tradição educacional
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Instituto{" "}
              <span className="bg-gradient-to-r from-[#F4EC09] to-[#FBB03B] bg-clip-text text-transparent">
                Hilda Ferreira
              </span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-lg">
              Formamos cidadãos preparados para os desafios do futuro através de uma educação inovadora, humanizada e de qualidade.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-[#FBB03B] hover:bg-[#e09d33] text-gray-900 font-semibold px-8 py-6 text-lg rounded-xl glow-effect group"
            >
              Matricule-se Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection("#about")}
              variant="outline"
              className="bg-[#145CAB] border-white/30 text-white hover:text-white/90 hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              Conheça a Escola
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 pt-8">
            <div className="flex items-center gap-3 text-white/90">
              <BookOpen className="w-6 h-6 text-[#F4EC09]" />
              <div>
                <div className="font-semibold text-2xl">500+</div>
                <div className="text-sm">Alunos Ativos</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white/90">
              <Users className="w-6 h-6 text-[#F4EC09]" />
              <div>
                <div className="font-semibold text-2xl">50+</div>
                <div className="text-sm">Professores</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white/90">
              <Award className="w-6 h-6 text-[#F4EC09]" />
              <div>
                <div className="font-semibold text-2xl">98%</div>
                <div className="text-sm">Aprovação</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <div className="relative z-10">
            {/* TODO: CARROSSEL AQUI */}
            <img
              src={criancasSalaImg}
              alt="Estudantes em sala de aula"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
              <div className="text-[#145CAB] font-bold text-3xl">30+</div>
              <div className="text-gray-600 font-medium">Anos de Tradição</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-[#F4EC09] rounded-2xl p-4 shadow-xl">
              <Award className="w-8 h-8 text-gray-900" />
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#145CAB]/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  </section>
  );
}