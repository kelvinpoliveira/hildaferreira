// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
// import { Contact } from "@/entities/Contact";
import Input from "components/Input/index";
import Textarea from "components/Textarea/index";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiry_type: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    console.log("teste disparo")
  }, []);

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
      // await Contact.create(formData);
      // setIsSuccess(true);
      // setFormData({
      //   name: "",
      //   email: "",
      //   phone: "",
      //   message: "",
      //   inquiry_type: "general"
      // });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua das Flores, 123 - Centro\nSão Paulo, SP - 01234-567",
      color: "text-[#145CAB]"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 3456-7890\n(11) 98765-4321",
      color: "text-[#FBB03B]"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@escolahildaferreira.com.br\nmatriculuas@escolahildaferreira.com.br",
      color: "text-[#ED1C24]"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda à Sexta: 7h às 18h\nSábado: 8h às 12h",
      color: "text-[#145CAB]"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-[#FAFAF9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-[#145CAB] to-[#ED1C24] bg-clip-text text-transparent">
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Seu nome"
                          className="border-gray-200 focus:border-[#145CAB]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="seu@email.com"
                          className="border-gray-200 focus:border-[#145CAB]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Telefone</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(11) 99999-9999"
                          className="border-gray-200 focus:border-[#145CAB]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Assunto</label>
                        <Select value={formData.inquiry_type} onValueChange={(value) => handleInputChange("inquiry_type", value)}>
                          <SelectTrigger className="border-gray-200 focus:border-[#145CAB]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admission">Matrícula</SelectItem>
                            <SelectItem value="academic">Informações Acadêmicas</SelectItem>
                            <SelectItem value="extracurricular">Atividades Extracurriculares</SelectItem>
                            <SelectItem value="general">Informações Gerais</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Mensagem</label>
                      <Textarea
                        required
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

            <Card className="border-none shadow-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-[#145CAB] to-[#1e6bc4] relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h4 className="text-2xl font-bold mb-2">Venha nos visitar!</h4>
                    <p className="text-white/90">Agende uma visita e conheça nossa estrutura</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}