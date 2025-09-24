
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Footer from "../components/Footer/index";
import { 
  ArrowLeft, BookMarked, Users, Laptop, FileText, Bot, Heart, PersonStanding, Users2,
  Puzzle, Target, Clock, HandHelping, PenTool, Award, HeartHandshake, Calculator, FlaskConical,
  Bike, Dribbble, Paintbrush, CalendarDays, CheckSquare, Activity, CookingPot, BrainCircuit
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <div className="flex items-start gap-4">
    <div className={`w-12 h-12 flex-shrink-0 ${color} rounded-lg flex items-center justify-center`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="font-bold text-lg text-gray-900">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const IconCard = ({ icon: Icon, title, color }) => (
  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
    <CardContent className="p-6">
      <div className={`w-16 h-16 mx-auto mb-4 ${color} rounded-2xl flex items-center justify-center`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h4 className="font-bold text-gray-900">{title}</h4>
    </CardContent>
  </Card>
);

export default function EnsinoFundamentalAnosIniciaisPage() {
    const navigate = useNavigate();
//   const diferenciais = [
//     { icon: Users, title: "Turmas reduzidas com professora titular e auxiliar", description: "", color: "bg-[#145CAB]" },
//     { icon: Laptop, title: "Livros Digitais, aplicativos gamificados com exercícios de matemática (Catlearning), português e ciências (Ciclo Avaliativo)", description: "", color: "bg-[#1e6bc4]" },
//     { icon: FileText, title: "Simulados Semestrais EDROS.", description: "", color: "bg-[#145CAB]" },
//     { icon: Bot, title: "Robótica", description: "", color: "bg-[#1e6bc4]" },
//     { icon: Heart, title: "Educação Cristã", description: "", color: "bg-[#145CAB]" },
//     { icon: PersonStanding, title: "Judô, Balé e Dança Contemporânea.", description: "", color: "bg-[#1e6bc4]" },
//     { icon: Users2, title: "Serviço de apoio ao aluno em contraturno de português e matemática.", description: "", color: "bg-[#145CAB]" },
//   ];

const diferenciais = [
    { icon: Users, title: "Turmas Reduzidas", description: "Professora titular e auxiliar para atendimento próximo.", color: "bg-[#145CAB]" },
    { icon: Laptop, title: "Tecnologia e Gamificação", description:"Livros Digitais, aplicativos gamificados com exercícios de matemática (Catlearning), português e ciências (Ciclo Avaliativo)", color: "bg-[#1e6bc4]" },
    { icon: FileText, title: "Simulados EDROS", description: "Avaliações semestrais para acompanhamento do desempenho.", color: "bg-[#145CAB]" },
    { icon: Bot, title: "Robótica", description: "Estímulo ao raciocínio lógico e à criatividade.", color: "bg-[#1e6bc4]" },
    { icon: Heart, title: "Educação Cristã", description: "Formação de valores e princípios.", color: "bg-[#145CAB]" },
    { icon: PersonStanding, title: "Artes e Movimento", description: "Judô, Balé e Dança Contemporânea.", color: "bg-[#1e6bc4]" },
    { icon: Users2, title: "Apoio Pedagógico", description: "Serviço de apoio ao aluno em contraturno de português e matemática.", color: "bg-[#145CAB]" },
  ];
  
  const turmasEspeciais = [
    { icon: Puzzle, title: "Método Fônico", description: "Utilizamos o Método Fônico e o Método de Ensino Estruturado para garantir o melhor desenvolvimento.", color: "bg-[#FBB03B]" },
    { icon: Target, title: "PEI Individualizado", description: "Plano Educacional Individualizado, onde se estabelece metas, objetivos e avaliações adaptados.", color: "bg-[#FBB03B]" },
    { icon: Clock, title: "Grade de Horário Reduzida", description: "Horário de aulas adaptado para um aprendizado mais eficaz.", color: "bg-[#FBB03B]" },
    { icon: PenTool, title: "Sala Especial de Alfabetização", description: "Para alunos que ainda não conseguiram ser alfabetizados no tempo regular em contraturno.", color: "bg-[#FBB03B]" },
    { icon: HandHelping, title: "Profissional de Apoio", description: "Disponibilizamos profissional de apoio não exclusivo, conforme a necessidade do aluno.", color: "bg-[#FBB03B]" },
  ];

  const projetos = [
    { icon: Award, title: "Leitor Nota 10", description: "Empréstimo semanal de livros, incentivo à leitura e produções textuais.", color: "from-[#145CAB] to-[#1e6bc4]" },
    { icon: HeartHandshake, title: "Projeto Valores", description: "Desenvolve temas voltados para compreensão de valores como amor ao próximo, respeito, solidariedade, perdão e empatia.", color: "from-[#145CAB] to-[#1e6bc4]" },
    { icon: Calculator, title: "Projeto de Ábaco", description: "Proporcionar aos alunos a compreensão concreta das quatro operações fundamentais (adição, subtração, multiplicação e divisão), por meio da manipulação do ábaco.", color: "from-[#145CAB] to-[#1e6bc4]" },
    { icon: FlaskConical, title: "Olimpíadas Científicas", description: "Olimpíadas Científicas são competições de conhecimento para estudantes do Ensino Fundamental e Médio, que visam estimular o aprendizado, identificar talentos, aprimorar habilidades.", color: "from-[#145CAB] to-[#1e6bc4]" },
  ];
  
  const extracurricular = [
    { icon: Bike, title: "Funcional Kids", color: "bg-[#ED1C24]" },
    { icon: Dribbble, title: "Basquete", color: "bg-[#ED1C24]" },
    { icon: Paintbrush, title: "Curso de Desenho", color: "bg-[#ED1C24]" },
  ];

  const ensinoIntegral = [
    { icon: CheckSquare, title: "Hora da Tarefa", color: "bg-green-500" },
    { icon: Activity, title: "Corpo em Movimento", color: "bg-green-500" },
    { icon: Bot, title: "Clubinho de Robótica", color: "bg-green-500" },
    { icon: CookingPot, title: "Projeto Mão na Massa", color: "bg-green-500" },
    { icon: BrainCircuit, title: "Programa POSHILDA", color: "bg-green-500" },
    { icon: Calculator, title: "Projeto Ábaco", color: "bg-green-500" },
  ];

  const createPageUrl = () => {
    navigate("/")
  }

  return (
    <div className="bg-[#FAFAF9]">
      <header className="hero-gradient text-white relative overflow-hidden py-20">
        <div className="container mx-auto px-4 relative z-10">
          <Link to={createPageUrl()} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Voltar para a página inicial
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <BookMarked className="w-12 h-12" />
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">Ensino Fundamental</h1>
              <p className="text-xl text-white/90">Anos Iniciais (1º ao 5º ano)</p>
            </div>
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          
          <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diferenciais.map(item => <FeatureCard key={item.title} {...item} />)}
            </div>
          </section>

          <section className="bg-white p-12 rounded-2xl shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-[#FBB03B] to-[#f8a01d] p-4 rounded-full mb-6">
                <Puzzle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Apoio e Inclusão</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Programas dedicados para um desenvolvimento completo e inclusivo de cada aluno.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {turmasEspeciais.map(item => <FeatureCard key={item.title} {...item} />)}
            </div>
          </section>
          
          <section>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Projetos Pedagógicos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projetos.map(projeto => (
                <Card key={projeto.title} className="border-none shadow-xl hover:shadow-2xl transition-shadow overflow-hidden">
                   <CardContent className="p-8 flex flex-col items-center text-center">
                     <div className={`w-16 h-16 flex-shrink-0 bg-gradient-to-r ${projeto.color} rounded-xl flex items-center justify-center mb-4`}>
                       <projeto.icon className="w-8 h-8 text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">{projeto.title}</h3>
                     <p className="text-gray-600 leading-relaxed">{projeto.description}</p>
                   </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Extracurriculares</h2>
              <div className="grid grid-cols-3 gap-6">
                {extracurricular.map(item => <IconCard key={item.title} {...item} />)}
              </div>
            </section>
            
            <section className="bg-green-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-green-800 text-center mb-8 flex items-center justify-center gap-3"><CalendarDays/> Ensino Integral</h2>
              <p className="text-center text-green-700 mb-8">Disponível das 11h30 às 17h, com atividades diversificadas.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ensinoIntegral.map(item => (
                   <div key={item.title} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow">
                     <div className={`w-8 h-8 flex-shrink-0 ${item.color} rounded-md flex items-center justify-center`}>
                        <item.icon className="w-5 h-5 text-white" />
                     </div>
                     <span className="text-sm font-medium text-gray-800">{item.title}</span>
                   </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
