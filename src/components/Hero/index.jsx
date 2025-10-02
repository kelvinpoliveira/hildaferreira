// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { BookOpen, Users, Award, ArrowRight, Heart, Laptop, Trophy, Bot, Target, Palette, Brain } from "lucide-react";
import image1 from "../../assets/images/carousel/image1.jpg";
import image2 from "../../assets/images/carousel/image2.png";
import image3 from "../../assets/images/carousel/image3.png";
import image4 from "../../assets/images/carousel/image4.png";
import image5 from "../../assets/images/carousel/image5.png";
import image6 from "../../assets/images/carousel/image6.png";
import { Carousel } from "@material-tailwind/react";

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

  const highlights = [
    {
      icon: Heart,
      title: "Educação Cristã",
    },
    {
      icon: Laptop,
      title: "Tecnologia Educacional",
    },
    {
      icon: Trophy,
      title: "+30 anos de Excelência",
    },
    {
      icon: Bot,
      title: "Robótica Educacional",
    },
    {
      icon: Target,
      title: "Projetos Educacionais",
    },
    {
      icon: Palette,
      title: "Escolinha Esportes e Artes",
    },
    {
      icon: Palette,
      title: "Programas Socioemocionais",
    },
  ];

  return (
    <section id="home" className="hero-gradient justify-center min-h-screen flex items-center relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-[#145CAB]">
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#F4EC09] opacity-10 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#FBB03B] opacity-10 rounded-full blur-2xl" style={{ animationDelay: "2s" }}></div>
    </div>

    <div className="w-[80%] mx-auto px-4 py-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
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
            No Instituto Hilda Ferreira, cada etapa da formação escolar é pensada para desenvolver o aluno de forma integral — emocional, cognitiva, social e espiritual — desde a Educação Infantil até o Ensino Médio.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-[#FBB03B] hover:bg-[#e09d33] text-gray-900 font-semibold px-8 py-6 text-lg rounded-xl glow-effect group"
            >
              Agende uma visita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection("#programs")}
              variant="outline"
              className="bg-[#145CAB] border-white/30 text-white hover:text-white/90 hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              Conheça nossos segmentos 
            </Button>
          </div>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <div className="relative z-10">
            <Carousel 
              loop
              autoplay
              autoplayDelay={4000}
              className="rounded-2xl overflow-hidden shadow-2xl"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-2 cursor-pointer rounded-full transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-2 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              <div className="relative w-full aspect-[16/9]">
                <img
                  src={image1}
                  alt="Estudantes em sala de aula"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full aspect-[16/9]">
                <img
                  src={image2}
                  alt="Atividades escolares"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full aspect-[16/9]">
                <img
                  src={image3}
                  alt="Ambiente escolar"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full aspect-[16/9]">
                <img
                  src={image4}
                  alt="Infraestrutura escolar"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full aspect-[16/9]">
                <img
                  src={image5}
                  alt="Infraestrutura escolar"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full aspect-[16/9]">
                <img
                  src={image6}
                  alt="Infraestrutura escolar"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </Carousel>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl">
              <div className="text-[#145CAB] font-bold text-2xl">30+</div>
              <div className="text-gray-600 font-medium">Anos de Tradição</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-[#F4EC09] rounded-2xl p-4 shadow-xl">
              <Award className="w-8 h-8 text-gray-900" />
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#145CAB]/20 to-transparent rounded-2xl"></div>
        </div>
      </div>

      <div className="pt-[5%] grid grid-cols-1 md:grid-cols-7 lg:grid-cols-1 xl:grid-cols-7 gap-4 pt-8">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start items-center gap-3 text-white/90 bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <highlight.icon className="w-6 h-6 text-[#F4EC09] flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-base mb-1">{highlight.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}