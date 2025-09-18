// @ts-nocheck
import React, { useState, useRef } from "react";
import { Button } from "components/ui/button";
import Input from "components/Input/index";
import Textarea from "components/Textarea/index";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Send, CheckCircle, ChevronLeft } from "lucide-react";
import logo from '../assets/images/logo.webp'
import Footer from 'components/Footer/index';
import emailjs from '@emailjs/browser';
import { Link, useNavigate } from 'react-router-dom';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    form_name: "",
    form_email: "",
    form_phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const form = useRef();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const createPageUrl = () => {
    navigate("/")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs
      .sendForm('service_7ointbt', 'template_gtdxmwr', form.current, {
        publicKey: 'tr_-jraGt4mDWXjtn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <>
    <div id="#ouvidoria" className="min-h-screen bg-gradient-to-br from-[#FAFAF9] to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#145CAB] to-[#1e6bc4] text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link 
              to={createPageUrl("Home")}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
              <img 
              src={logo}
              alt="logo"
              />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Ouvidoria</h1>
                <p className="text-white/80">Escola Hilda Ferreira</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Aconteceu{" "}
              <span className="bg-gradient-to-r from-[#145CAB] to-[#FBB03B] bg-clip-text text-transparent">
                alguma coisa ?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Sua opinião é fundamental para melhorarmos continuamente. 
              Entre em contato conosco através do formulário abaixo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                    <Send className="w-6 h-6 text-[#145CAB]" />
                    Formulário de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSuccess ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                      <p className="text-gray-600">
                        Recebemos sua mensagem e entraremos em contato em breve. 
                        Obrigado por nos contactar!
                      </p>
                    </div>
                  ) : (
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                      {/* Nome e Email */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Nome Completo *</label>
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
                          <label className="text-sm font-medium text-gray-700">E-mail *</label>
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

                      {/* Telefone */}
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

                      {/* Mensagem */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Mensagem *</label>
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

                      <p className="text-xs text-gray-500 text-center">
                        * Campos obrigatórios. Suas informações serão tratadas com confidencialidade.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}