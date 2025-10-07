import {
  ArrowLeft,
  Bot,
  CalendarDays,
  Clock,
  Feather,
  Lightbulb,
  Map,
  Milestone,
  PenTool,
  Route,
  Scroll,
  Sparkles,
  Target,
  Trophy,
  Users2
} from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { trackPageView } from "services/ga/AnalyticsContext";
import ensinoMedioBackground from '../assets/images/backgroundPages/ensinoMedioBackground.jpg';
import Footer from "../components/Footer/index";

const FeatureCard = ({ icon: Icon, title, description, color, children }) => (
  <div className="flex items-start gap-4">
    <div className={`w-12 h-12 flex-shrink-0 ${color} rounded-lg flex items-center justify-center`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="font-bold text-lg text-gray-900">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      {children}
    </div>
  </div>
);

export default function EnsinoMedioPage() {
  const navigate = useNavigate();

  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  const cargasHorarias = [
    { icon: Clock, title: "1ª e 2ª séries", description: "30h semanais com todos os conteúdos essenciais do Ensino Médio para uma base sólida.", color: "bg-[#145CAB]" },
    { icon: Target, title: "3ª série (Terceirão)", description: "30h semanais com foco total em vestibulares e ENEM, maximizando a preparação.", color: "bg-[#1e6bc4]" }
  ];

  const preparacao = [
    { icon: Clock, title: "1ª e 2ª séries", description: "1ª e 2ª séries: 30h semanais, todos os conteúdos do EM", color: "bg-[#145CAB]" },
    { icon: Target, title: "3ª série (Terceirão)", description: "30h semanais, Foco em vestibulares e ENEM", color: "bg-[#1e6bc4]" },
    { icon: Users2, title: "Reforço escolar no contraturno", description: "Em matemática, física, química, biologia e português.", color: "bg-[#145CAB]" },
    { icon: Lightbulb, title: "Projeto de Vida", description: "Orientação profissional, organização de estudos, diálogos com profissionais.", color: "bg-[#1e6bc4]" },
    { icon: Route, title: "Itinerários Formativos", description: "Oficinas por área do conhecimento", color: "bg-[#145CAB]" },
    { icon: Trophy, title: "Olimpíadas Científicas", description: "São competições de conhecimento que visam estimular o aprendizado, além de preparar para o ingresso em universidades.", color: "bg-[#145CAB]" }
  ];

  const trilhas = [
    { icon: Bot, name: "Robótica" },
    { icon: Map, name: "Geografia Regional" },
    { icon: Scroll, name: "História Regional" },
    { icon: Feather, name: "Literatura Amazonense" },
    { icon: PenTool, name: "Redação Nota 1000" }
  ];

  const eventos = [
    { icon: Bot, name: "Olimphildas"},
    { icon: Bot, name: "Saídas Pedagógicas"},
    { icon: Bot, name: "Projeto Diálogos"},
    { icon: Bot, name: "Desfile Escolar"},
    { icon: Bot, name: "Projeto Brilho na Educação"}
  ];

  const createPageUrl = () => {
    navigate("/")
  }

  return (
    <div className="bg-[#FAFAF9]">
      <header 
        className="text-white relative overflow-hidden py-20 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(20, 90, 171, 0.7), rgba(20, 90, 171, 0.7)), url(${ensinoMedioBackground})`,
          minHeight: '400px'
        }}>
        <div className="container mx-auto px-4 relative z-10">
          <Link to={createPageUrl("Home")} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Voltar para a página inicial
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Milestone className="w-12 h-12" />
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">Ensino Médio</h1>
              <p className="text-xl text-white/90">Preparação para o futuro e os grandes vestibulares</p>
            </div>
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4 space-y-20">
{/*           
          <section>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Nossa Estrutura de Ensino</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {cargasHorarias.map(item => <FeatureCard key={item.title} {...item} />)}
            </div>
          </section> */}

          <section className="bg-white p-12 rounded-2xl shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Preparação Completa para o Sucesso</h2>
              <p className="text-lg text-gray-600 mx-auto justify-center">
              No Instituto Hilda Ferreira, o Ensino Médio é muito mais do que a etapa final da educação básica: é o momento de consolidar conhecimentos, descobrir talentos e definir caminhos para o futuro. Nossa proposta pedagógica alia
conteúdo de excelência a práticas inovadoras, tornando o aprendizado
significativo e preparando os alunos para os desafios do ENEM, vestibulares
e da vida acadêmica e profissional.

              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {preparacao.map(item => <FeatureCard key={item.title} {...item} />)}
            </div>
          </section>
          
          <section className="bg-white p-12 rounded-2xl shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-[#FBB03B] to-[#f8a01d] p-4 rounded-full mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Trilhas de Aprofundamento</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Caminhos de estudo personalizados para desenvolver habilidades específicas e explorar paixões.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {trilhas.map(item => (
                <div key={item.name} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-lg min-w-[220px] border border-gray-100">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#FBB03B]/10 text-[#f8a01d] rounded-md flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-md font-semibold text-gray-800">{item.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-12 rounded-2xl shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#ED1C24] p-4 rounded-full mb-6">
                <CalendarDays className="w-8 h-8 text-white" />  
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Eventos</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {eventos.map(item => (
                <div key={item.name} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-lg min-w-[220px] border border-gray-100">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#FBB03B]/10 text-[#f8a01d] rounded-md flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-md font-semibold text-gray-800">{item.name}</span>
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