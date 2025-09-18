// @ts-nocheck
import { Globe, Heart, Lightbulb, Target } from "lucide-react";
import { useEffect, useRef } from "react";
import { Card } from "../../components/ui/card";

export default function About() {
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

  const values = [
    {
      icon: Heart,
      title: "Educação Cristã",
      description: "Valorizamos o desenvolvimento integral de cada aluno, respeitando suas individualidades e potencialidades."
    },
    {
      icon: Globe,
      title: "Visão Global",
      description: "Preparamos nossos estudantes para serem cidadãos do mundo, com consciência social e ambiental."
    },
    {
      icon: Lightbulb,
      title: "Inovação Pedagógica",
      description: "Utilizamos metodologias modernas e tecnologia educacional para tornar o aprendizado mais efetivo."
    },
    {
      icon: Target,
      title: "Excelência Acadêmica",
      description: "Buscamos sempre os melhores resultados através de um ensino de qualidade e dedicação."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-[#FAFAF9]">
      <div className="container mx-auto pt-8 px-4">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sobre a{" "}
            <span className="bg-gradient-to-r from-[#145CAB] to-[#F4EC09] bg-clip-text text-transparent">
              Escola Hilda Ferreira
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Muito mais que uma escola, uma grande família!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="scroll-fade">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&crop=center"
              alt="Ambiente escolar moderno"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6 scroll-fade">
            <h3 className="text-3xl font-bold text-gray-900">Nossa História</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
            Fundado em 17 de fevereiro de 1992, o IHF destina-se a atender alunos de Creche (a partir de 2 anos completos até 31/03), Educação Infantil (3 a 5 anos), Ensino Fundamental (1º ao 9º ano) e do Ensino Médio (1ª a 3ª séries).
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            A partir dos 2 anos, seu filho já pode fazer parte da Família Hilda Ferreira,
uma escola particular em Manaus que oferece educação infantil de
qualidade.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            <p className="text-lg text-gray-600 leading-relaxed">
            Cada experiência vivida pelas crianças desperta novas
habilidades, tornando o processo educacional envolvente, criativo e
transformador.
            </p>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="scroll-fade p-12 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#145CAB] to-[#1e6bc4] rounded-2xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-center text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 text-justify leading-relaxed">{value.description}</p>
              {/* <CardContent className="p-8 text-center">
              </CardContent> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}