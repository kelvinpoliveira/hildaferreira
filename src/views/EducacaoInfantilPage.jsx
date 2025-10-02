
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Footer from "../components/Footer/index";
import { 
  ArrowLeft, BookOpen, Users, Globe, Heart, Dumbbell, BookCopy, PlayCircle, Puzzle, 
  Target, Clock, Users2, Star, Award, Calendar, Bike 
} from "lucide-react";
import educacaoInfantilBg from "../assets/images/backgroundPages/educacaoInfantilBackground.jpg";

const FeatureCard = ({ icon: Icon, title, description, color }) => {
    return (
  <div className={`flex ${description === "" ? "flex-col items-center justify-center text-center" : "items-start"} gap-4`}>
    <div className={`w-12 h-12 flex-shrink-0 ${color} rounded-lg flex items-center justify-center`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div className={description === "" ? "text-center" : ""}>
      <h4 className="font-bold text-lg text-gray-900">{title}</h4>
      {description && <p className="text-gray-600 leading-relaxed">{description}</p>}
    </div>
  </div>
)};

export default function EducacaoInfantilPage() {
    const navigate = useNavigate();
  const turmas = [
    {
      title: "Infantil II e III (2-3 anos)",
      description: "Adaptação escolar com acolhimento e apoio psicopedagógico.",
      color: "from-[#F4EC09] to-[#FBB03B]"
    },
    {
      title: "Infantil IV e V (4-5 anos)",
      description: "Início do letramento com método fônico, coordenação motora fina, linguagem matemática e ciências.",
      color: "from-[#FBB03B] to-[#ED1C24]"
    }
  ];

  const diferenciais = [
    { icon: Users, title: "Turmas Reduzidas com professora titular e auxiliar", description: "", color: "bg-[#145CAB]" },
    { icon: Globe, title: "Inglês Desde Cedo", description: "", color: "bg-[#FBB03B]" },
    { icon: Heart, title: "Educação Cristã", description: "", color: "bg-[#ED1C24]" },
    { icon: Dumbbell, title: "Judô (meninos) e Balé (meninas)", description: "", color: "bg-[#145CAB]" },
    { icon: BookCopy, title: "Sistema Poliedro com projetos trimestrais", description: "", color: "bg-[#FBB03B]" },
    { icon: PlayCircle, title: "Espaço recreativo orientado", description: "", color: "bg-[#ED1C24]" }
  ];

  const projetos = [
    { icon: Award, title: "Califhilda", description: "Projeto anual de reconhecimento auditivo e visual do alfabeto maiúsculo, minúsculo, na versão cursiva e de imprensa (Infantil IV) e das familias silábicas (Infantil V) e no desenvolvimento da coordenação motora fina.", color: "from-[#145CAB] to-[#1e6bc4]" },
    { icon: BookOpen, title: "Ciranda de Livros", description: "Desenvolvido na Biblioteca Escolar, promove o empréstimo semanal de livros para as crianças levarem para casa.", color: "from-[#F4EC09] to-[#FBB03B]" }
  ];

  const createPageUrl = () => {
    navigate("/")
  }

  return (
    <div className="bg-[#FAFAF9]">
      {/* Header Section */}
      <header 
        className="text-white relative overflow-hidden py-20 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(20, 90, 171, 0.7), rgba(20, 90, 171, 0.7)), url(${educacaoInfantilBg})`,
          minHeight: '400px'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <Link to={createPageUrl("Home")} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Voltar para a página inicial
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4">Educação Infantil</h1>
        </div>
      </header>

      <main className="py-20">
        <div className="container items-center mx-auto px-4 space-y-20">
          
          {/* Turmas */}
          <section className="bg-white p-12 rounded-2xl shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Nossas Turmas</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
            A partir dos 2 anos, seu filho já pode fazer parte da Família Hilda Ferreira. Mais do que diversão, o brincar é a porta de entrada para o conhecimento. Cada experiência vivida pelas crianças desperta novas habilidades, tornando o processo educacional envolvente, criativo e cheio de significado.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {turmas.map(turma => (
                <Card key={turma.title} className="border-none shadow-xl overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${turma.color}`} />
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{turma.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{turma.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Diferenciais */}
            <section className="p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {diferenciais.map(item => (
                  <FeatureCard key={item.title} {...item} />
                ))}
              </div>
            </section>
          </section>


          {/* Turmas Especiais */}
          <section className="bg-white p-12 rounded-2xl shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#145CAB] p-4 rounded-full mb-6">
                <Puzzle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Turmas Especiais</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Programas dedicados para alunos com TEA (Transtorno do Espectro Autista), verbais e não verbais.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <FeatureCard icon={Star} title="Método Fônico" description="Utilizamos o Método Fônico e o Método de Ensino Estruturado para garantir o melhor desenvolvimento." color="bg-[#FBB03B]" />
              <FeatureCard icon={Target} title="PEI Individualizado" description="Plano Educacional Individualizado, onde se estabelece metas, objetivos e avaliações adaptados." color="bg-[#FBB03B]" />
              <FeatureCard icon={Clock} title="Grade de Horário Reduzida" description="Horário de aulas adaptado às necessidades dos alunos para um aprendizado mais eficaz." color="bg-[#FBB03B]" />
              <FeatureCard icon={Users2} title="Sala Especial de Educação infantil (Infantil IV e V)" description="Turma mista em contraturno para alunos TEA verbal e não verbal que ainda possuem dificuldade de organização, de coordenação e de controle de impulsividade." color="bg-[#FBB03B]" />
              <FeatureCard icon={Heart} title="Profissional de Apoio" description="Disponibilizamos profissional de apoio não exclusivo, conforme a necessidade do aluno." color="bg-[#FBB03B]" />
            </div>
          </section>

          {/* Projetos */}
          <section className="bg-white p-12 rounded-2xl shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Projetos Pedagógicos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projetos.map(projeto => (
                <Card key={projeto.title} className="border-none shadow-xl hover:shadow-2xl transition-shadow overflow-hidden">
                   <CardContent className="p-8 flex items-start gap-6">
                     <div className={`w-16 h-16 flex-shrink-0 bg-gradient-to-r ${projeto.color} rounded-xl flex items-center justify-center`}>
                       <projeto.icon className="w-8 h-8 text-white" />
                     </div>
                     <div>
                       <h3 className="text-2xl font-bold text-gray-900 mb-2">{projeto.title}</h3>
                       <p className="text-gray-600 leading-relaxed">{projeto.description}</p>
                     </div>
                   </CardContent>
                </Card>
              ))}
            </div>
            {/* Eventos e Extracurricular */}
            <section className="pt-12">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-none shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Calendar className="w-7 h-7 text-[#ED1C24]" />
                      Eventos Escolares
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Páscoa, Dia das Mães, Dia dos Avós, Semana da Criança, Cantata Natalina, entre outros.</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Bike className="w-7 h-7 text-[#145CAB]" />
                      Atividade Extracurricular
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600"><span className="font-bold">Funcional Kids (Infantil V)</span></p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </section>
          

        </div>
      </main>
      <Footer />
    </div>
  );
}