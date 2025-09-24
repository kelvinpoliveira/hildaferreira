// @ts-nocheck
import { Globe, Heart, Lightbulb, Target } from "lucide-react";
import { useEffect, useRef } from "react";
import { Card } from "../../components/ui/card";
import escolaFrente from "../../assets/images/escola.JPG"

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
            Sobre o{" "}
            <span className="bg-[#145CAB] bg-clip-text text-transparent">
              Instituto Hilda Ferreira
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Muito mais que uma escola, uma grande família!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="scroll-fade">
            <img
              src={escolaFrente}
              alt="Ambiente escolar moderno"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6 scroll-fade">
            <h3 className="text-3xl font-bold text-gray-900">Nossa História</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
            O Instituto Hilda Ferreira iniciou suas atividades no dia 17 de fevereiro de 1992, com o nome inicial de Centro Educacional SERELEPE. SERELEPE é um animalzinho mais conhecido na nossa região como esquilo e que também significa criança esperta e viva.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            Em 1993, a fim de darmos prosseguimento para as séries do ensino fundamental e médio a SEDUC nos orientou a mudarmos de nome passando a instituição a chamar-se oficialmente de Instituto Hilda Ferreira. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            <p className="text-lg text-gray-600 leading-relaxed">
             - Educação Infantil (2 a 5 anos)
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
             - Ensino Fundamental Anos Iniciais (1º ao 5º ano)
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
             - Ensino Fundamental Anos Finais (6ª ao 9º ano)
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
             - Ensino Médio (1ª a 3ª séries)
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