// @ts-nocheck
import { CheckCircle, Clock, Mail, MapPin, Phone, Send, MessageCircleMore } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
// import { Contact } from "@/entities/Contact";
import emailjs from '@emailjs/browser';
import Input from "components/Input/index";
import Textarea from "components/Textarea/index";
import ReactGA from 'react-ga4';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import {AnalyticsContext} from 'services/ga/AnalyticsContext'
import { trackEvent } from '../../services/ga/AnalyticsContext';

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    form_name: "",
    form_email: "",
    form_phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useRef();
  const ini = useContext(AnalyticsContext);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    try {
      trackEvent("working_lead", "/contact_form", 'click_send_contact_form', "Formulário de contato");

      ReactGA.event({category: 'Social Links', action: 'ClickTeste',label: "Formulário de contato",});
      // emailjs
      // .sendForm('service_7ointbt', 'template_418fct9', form.current, {
      //   publicKey: 'tr_-jraGt4mDWXjtn',
      // })
      // .then(
      //   () => {
      //     toast.success('Formulário enviado!', {
      //       position: 'top-right',
      //     });
      //   },
      //   (error) => {},
      // );
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setIsSubmitting(false);
  };

  const handleWhatsAppMessage = () => {
    const phoneNumber = '5581999989897'
    const message = 'Olá, gostaria de saber algumas informações da escola !'

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Carabuçu, Nº 67 - Novo Aleixo (Antigo Núcleo 15)",
      color: "text-[#145CAB]"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(92) 3646-5096\n(92) 98827-4517",
      color: "text-[#FBB03B]"
    },
    {
      icon: Mail,
      title: "Email",
      content: "faleconosco@hildaferreira.com.br",
      color: "text-[#ED1C24]"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda à Sexta: 7h às 17h\nSábado: 8h às 11:30h",
      color: "text-[#145CAB]"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-[#FAFAF9]">
      <div className="container pt-8 mx-auto px-4">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-[#145CAB] to-[#F4EC09] bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para receber sua família. Entre em contato conosco e tire todas as suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="scroll-fade">
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <Send className="w-6 h-6 text-[#145CAB]" />
                  Fale Conosco
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-600">Entraremos em contato em breve. Obrigado!</p>
                  </div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                        <Input
                          name="form_name"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("form_name", e.target.value)}
                          placeholder="Seu nome"
                          className="border-gray-200 focus:border-[#145CAB]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <Input
                          required
                          name="form_email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="seu@email.com"
                          className="border-gray-200 focus:border-[#145CAB]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Telefone</label>
                        <Input
                          required
                          name="form_phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(11) 99999-9999"
                          className="border-gray-200 focus:border-[#145CAB]"
                        />
                      </div>

                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Mensagem</label>
                      <Textarea
                        required
                        name="form_message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Como podemos ajudá-lo?"
                        rows={5}
                        className="border-gray-200 focus:border-[#145CAB] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#145CAB] hover:bg-[#123f7a] text-white py-6 text-lg font-semibold rounded-xl"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                      {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 scroll-fade">
                          {/* WhatsApp Button */}
                          <Card className="border-none shadow-xl bg-gradient-to-r from-green-500 to-green-600 text-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                      <MessageCircleMore className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">WhatsApp</h4>
                      <p className="text-white/90 text-sm">Fale conosco agora mesmo</p>
                    </div>
                  </div>
                  {/* <Button
                    onClick={handleWhatsAppClick}
                    className="bg-white hover:bg-gray-100 text-green-600 font-semibold px-6"
                  >
                    Conversar
                  </Button> */}
                  <a
                    href={handleWhatsAppMessage()}
                    target="_blank"
                    crel="noopener noreferrer" rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors duration-200"
                  >
                    Conversar
                  </a>
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{info.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    <ToastContainer />
    </section>
  );
}