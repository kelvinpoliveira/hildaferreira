// @ts-nocheck
import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { BookOpen, Palette, Calculator, Globe, Microscope, Music, BookOpenCheck, ClipboardList, HandHelping, Smartphone, MessageCircle, Stethoscope, Bot, Library, Dribbble, PersonStanding, FlaskConical } from "lucide-react";

export default function Programs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-fade");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      icon: BookOpen,
      title: "Educação Infantil",
      age: "3 a 5 anos",
      description: "Cada experiência vivida pelas crianças desperta novas habilidades, tornando o processo educacional envolvente, criativo e transformador.",
      features: ["Método Fônico", "Método de ensino estruturado", "Judô e Balé", "Inglês desde cedo", "Turmas reduzidas"],
   
    },
    {
      icon: Calculator,
      title: "Ensino Fundamental Anos Iniciais",
      age: "6 a 10 anos",
      description: "É o momento em que consolidam a alfabetização, ganham independência nos estudos e começam a desenvolver autonomia acadêmica e social.",
      features: ["Aplicativos Gamificados", "Robótica", "Ensino Integral", "Educação Cristã", " Simulados Semestrais"],
    },
    {
      icon: Microscope,
      title: "Ensino Fundamental Anos Finais",
      age: "11 a 14 anos",
      description: "Aprofundamento das disciplinas com foco no desenvolvimento do pensamento crítico e na preparação para o ensino médio.",
      features: ["Olimpíadas Científicas", "Robótica", "Ensino Integral", "Programa Socioemocional Positivando", "Serviço de Apoio ao Aluno"],
    },
    {
      icon: BookOpenCheck,
      title: "Ensino Médio",
      age: "14 a 16 anos",
      description: "Com uma proposta pedagógica inovadora, aliamos conteúdo de qualidade, práticas dinâmicas e foco em resultados para o ENEM e vestibulares.",
      features: ["Aplicação de Teste de Orientação Profissional", "Serviço de Apoio ao Aluno", "Robótica", "Simulados SIS, PSC e ENEM", "Projeto Redação Nota 1000"],
    }
  ];

  const extracurricular = [
    { icon: Globe, name: "Funcional Kids", color: "bg-[#145CAB]" },
    { icon: Music, name: "Basquete", color: "bg-[#FBB03B]" },
    { icon: Palette, name: "Curso de desenho", color: "bg-[#F4EC09]" },
    { icon: Calculator, name: "Ensino Integral", color: "bg-[#ED1C24]" }
  ];

  const servicosApoio = [
    { icon: ClipboardList, name: "Coordenação Pedagógica", color: "bg-[#145CAB]" },
    { icon: HandHelping, name: "Psicologia Escolar", color: "bg-[#FBB03B]" }, // Changed HeartHand to HandHelping
    { icon: Smartphone, name: "Agenda Digital", color: "bg-[#F4EC09]" },
    { icon: MessageCircle, name: "Canal de Ouvidoria", color: "bg-[#ED1C24]" },
    { icon: Stethoscope, name: "Enfermaria", color: "bg-[#145CAB]" }
  ];

  const nossaEstrutura = [
    { icon: Palette, name: "Sala de Artes", color: "bg-[#FBB03B]" },
    { icon: Bot, name: "Sala de Robótica", color: "bg-[#ED1C24]" },
    { icon: Library, name: "Biblioteca", color: "bg-[#145CAB]" },
    { icon: Dribbble, name: "Quadras Poliesportivas", color: "bg-[#F4EC09]" },
    { icon: PersonStanding, name: "Sala de Balé", color: "bg-[#145CAB]" },
    { icon: FlaskConical, name: "Laboratório de Ciências", color: "bg-[#FBB03B]" }
  ];

  return (
    <section id="programs" ref={sectionRef} className="py-20 bg-white">
      <div className="container pt-8 mx-auto px-4">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos{" "}
            <span className="bg-[#145CAB] bg-clip-text text-transparent">
              Programas Educacionais
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma educação completa e diversificada, adaptada para cada fase do desenvolvimento dos nossos alunos.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="scroll-fade border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`h-2 bg-[#145CAB]`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg- rounded-xl flex items-center justify-center`}>
                    <program.icon className="w-6 h-6 text-[#145CAB]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
                    {/* <Badge variant="secondary" className="mt-1">{program.age}</Badge> */}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Destaques:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#FBB03B] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="scroll-fade">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Atividades Extracurriculares</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extracurricular.map((activity, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 ${activity.color} rounded-2xl flex items-center justify-center`}>
                    <activity.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900">{activity.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-20 space-y-20">
          {/* Serviços de Apoio */}
          <div className="scroll-fade">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Serviços de Apoio</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
              {servicosApoio.map((service, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 ${service.color} rounded-2xl flex items-center justify-center`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900">{service.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Nossa Estrutura */}
          <div className="scroll-fade">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossa Estrutura</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {nossaEstrutura.map((item, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 ${item.color} rounded-2xl flex items-center justify-center`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}