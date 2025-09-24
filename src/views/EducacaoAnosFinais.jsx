import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Footer from "../components/Footer/index";
import { 
  ArrowLeft, BookUp, Laptop, FileText, FlaskConical, Bot, Heart, BrainCircuit,
  Users2, PenSquare, BookUser, Palette, Trophy, CalendarDays, Paintbrush, Dribbble,
  Volleyball, CheckSquare, Activity, CookingPot
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

export default function EnsinoFundamentalAnosFinaisPage() {
  const navigate = useNavigate();
  const culturaEstudo = [
    { icon: Laptop, title: "Tecnologia e Gamificação", description:"Livros Digitais, aplicativos gamificados com exercícios de matemática (Catlearning), português e ciências (Ciclo Avaliativo)", color: "bg-[#1e6bc4]" },
    { icon: FileText, title: "Simulados EDROS", description: "Avaliações semestrais para acompanhamento do desempenho.", color: "bg-[#145CAB]" },
    { icon: FlaskConical, title: "Olimpíadas Científicas", description: "Olimpíadas Científicas são competições de conhecimento para estudantes do Ensino Fundamental e Médio, que visam estimular o aprendizado, identificar talentos, aprimorar habilidades.", color: "bg-[#145CAB]" },
    { icon: Bot, title: "Robótica", description: "Estímulo ao raciocínio lógico e à criatividade.", color: "bg-[#1e6bc4]" },
    { icon: Heart, title: "Educação Cristã", description: "Formação de valores e princípios.", color: "bg-[#145CAB]" },
    { icon: BrainCircuit, title: "Programa Socioemocional POSITIVANDO NO HILDA", description: "Fortalecimento das competências socioemocional para aprender a ser e a conviver.", color: "bg-[#1e6bc4]" }
  ];

  const apoioAluno = [
    { icon: Users2, title: "Revisão em contraturno de português e matemática.", color: "from-[#FBB03B] to-[#f8a01d]" },
    { icon: PenSquare, title: "Atendimento individualizado em Redação quinzenal.", color: "from-[#FBB03B] to-[#f8a01d]" }
  ];

  const projetos = [
    { icon: BookUser, title: "Projeto Aluno Leitor", description:"Promovido pela Biblioteca Escolar, com empréstimo semanal de livros, incentivo à produção textual e feedback às famílias.", color: "text-[#145CAB]" },
    { icon: Palette, title: "Projeto Arte e Cultura", description: "Com temática anual, os alunos desenvolvem trabalhos em diferentes linguagens: desenho, fotografia, vídeo, poemas, dobradura, escultura, dança e teatro.", color: "text-[#ED1C24]" },
    { icon: Trophy, title: "Olimphildas", description: "Projeto de dança, teatro e esportes, envolvendo alunos e famílias em dois dias de integração.", color: "text-[#FBB03B]" }
  ];

  const extracurricular = [
    { icon: Paintbrush, title: "Curso de Desenho", color: "bg-[#ED1C24]" },
    { icon: Dribbble, title: "Basquete", color: "bg-[#ED1C24]" },
    { icon: Volleyball, title: "Vôlei", color: "bg-[#ED1C24]" },
  ];

  const ensinoIntegral = [
    { icon: CheckSquare, title: "Hora da Tarefa" },
    { icon: Activity, title: "Corpo em Movimento" },
    { icon: Bot, title: "Clubinho de Robótica" },
    { icon: CookingPot, title: "Projeto Mão na Massa" },
    { icon: BrainCircuit, title: "Programa POSHILDA" },
    { icon: BrainCircuit, title: "Programa Ábaco" }
  ];

  const createPageUrl = () => {
    navigate("/")
  }

  return (
    <div className="bg-[#FAFAF9]">
      <header className="hero-gradient text-white relative overflow-hidden py-20">
        <div className="container mx-auto px-4 relative z-10">
          <Link to={createPageUrl("Home")} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Voltar para a página inicial
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <BookUp className="w-12 h-12" />
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">Ensino Fundamental</h1>
              <p className="text-xl text-white/90">Anos Finais (6º ao 9º ano)</p>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">Desenvolvendo a autonomia, o pensamento crítico e a preparação para os próximos desafios acadêmicos.</p>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          
          <section>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Cultura de Estudo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {culturaEstudo.map(item => <FeatureCard key={item.title} {...item} />)}
            </div>
          </section>

          <section className="bg-white p-12 rounded-2xl shadow-xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Serviço de Apoio ao Aluno</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">Acompanhamento próximo para garantir o sucesso de cada estudante.</p>
            </div>
            <div className="flex-row items-center jusitfy-center grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {apoioAluno.map(item => (
                <Card key={item.title} className="border-none shadow-xl hover:shadow-2xl transition-shadow overflow-hidden">
                   <CardContent className="p-8 flex items-start gap-6">
                     <div className={`w-16 h-16 flex-shrink-0 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center`}>
                       <item.icon className="w-8 h-8 text-white" />
                     </div>
                     <div>
                       <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                       <p className="text-gray-600 leading-relaxed">{item.description}</p>
                     </div>
                   </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Projetos Pedagógicos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projetos.map(item => (
                 <Card key={item.title} className="border-none shadow-lg text-center">
                    <CardHeader>
                        <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                        <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                 </Card>
              ))}
            </div>
          </section>

          <div className="flex grid lg:grid-cols-2 gap-8 items-center">
            <section className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Extracurriculares</h3>
              <div className="grid grid-cols-3 gap-6">
                {extracurricular.map(item => <IconCard key={item.title} {...item} />)}
              </div>
            </section>
          </div>

          <Card className="lg:col-span-1 border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <CalendarDays className="w-7 h-7 text-[#145CAB]" />
                    Eventos Escolares
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Semana da Mulher, Dia do PET, Campanha Hilda Solidária, Saídas Pedagógicas, Desfile Escolar, e muito mais para enriquecer a jornada escolar.
                  </p>
                </CardContent>
              </Card>
          
          <section className="bg-green-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-8 flex items-center justify-center gap-3"><CalendarDays/> Ensino Integral (6º ao 8º Ano)</h2>
            <p className="text-center text-green-700 mb-8">Disponível das 11h30 às 17h, com uma programação rica e diversificada.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {ensinoIntegral.map(item => (
                 <div key={item.title} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-md min-w-[200px]">
                   <div className="w-8 h-8 flex-shrink-0 bg-green-500 rounded-md flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                   </div>
                   <span className="text-sm font-medium text-gray-800">{item.title}</span>
                 </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}