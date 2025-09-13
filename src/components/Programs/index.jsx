import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { BookOpen, Palette, Calculator, Globe, Microscope, Music } from "lucide-react";

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
      description: "Desenvolvimento integral através de brincadeiras, jogos e atividades lúdicas que estimulam a criatividade e o aprendizado.",
      features: ["Alfabetização lúdica", "Desenvolvimento motor", "Socialização", "Arte e música"],
      color: "from-[#F4EC09] to-[#FBB03B]"
    },
    {
      icon: Calculator,
      title: "Ensino Fundamental I",
      age: "6 a 10 anos",
      description: "Base sólida em português, matemática e ciências, com metodologias ativas que tornam o aprendizado mais significativo.",
      features: ["Alfabetização completa", "Raciocínio lógico", "Projetos interdisciplinares", "Inglês desde o 1º ano"],
      color: "from-[#145CAB] to-[#1e6bc4]"
    },
    {
      icon: Microscope,
      title: "Ensino Fundamental II",
      age: "11 a 14 anos",
      description: "Aprofundamento das disciplinas com foco no desenvolvimento do pensamento crítico e na preparação para o ensino médio.",
      features: ["Laboratório de ciências", "Robótica educacional", "Projeto de vida", "Simulados preparatórios"],
      color: "from-[#FBB03B] to-[#ED1C24]"
    }
  ];

  const extracurricular = [
    { icon: Palette, name: "Artes Visuais", color: "bg-[#F4EC09]" },
    { icon: Music, name: "Música", color: "bg-[#FBB03B]" },
    { icon: Globe, name: "Inglês Avançado", color: "bg-[#145CAB]" },
    { icon: Calculator, name: "Robótica", color: "bg-[#ED1C24]" }
  ];

  return (
    <section id="programs" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos{" "}
            <span className="bg-gradient-to-r from-[#145CAB] to-[#ED1C24] bg-clip-text text-transparent">
              Programas Educacionais
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma educação completa e diversificada, adaptada para cada fase do desenvolvimento dos nossos alunos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="scroll-fade border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center`}>
                    <program.icon className="w-6 h-6 text-white" />
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
        </div>
      </div>
    </section>
  );
}