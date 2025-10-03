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
import { Link } from 'react-router-dom';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    form_name: "",
    form_email: "",
    form_phone: "",
    form_message: "",
    userType: "", // 'professor' or 'aluno'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const form = useRef();

  const handleInputChange = (field, value) => {
    // Apply phone mask
    if (field === "form_phone") {
      value = formatPhone(value);
      validatePhone(value);
    }
    
    // Validate email
    if (field === "form_email") {
      validateEmail(value);
    }
    
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatPhone = (value) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    
    // Apply mask (XX) XXXXX-XXXX
    if (digits.length <= 2) {
      return digits;
    } else if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length <= 11) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, '');
    if (digits.length > 0 && digits.length < 10) {
      setPhoneError("Telefone inválido. Use o formato (XX) XXXXX-XXXX");
    } else {
      setPhoneError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      setEmailError("E-mail inválido");
    } else {
      setEmailError("");
    }
  };

  const handleUserTypeChange = (type) => {
    setFormData(prev => ({ ...prev, userType: type }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate before submitting
    if (emailError || phoneError || !formData.userType) {
      alert("Por favor, corrija os erros no formulário");
      return;
    }
    
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
              to="/"
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
              <span className="bg-[#145CAB] bg-clip-text text-transparent">
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
                      {/* User Type Checkboxes */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Você é: *</label>
                        <div className="flex gap-6">
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="userType"
                              value="Aluno"
                              checked={formData.userType === "Aluno"}
                              onChange={() => handleUserTypeChange("Aluno")}
                              className="w-4 h-4 text-[#145CAB] border-gray-300 focus:ring-[#145CAB]"
                            />
                            <span className="ml-2 text-gray-700">Aluno</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="userType"
                              value="Responsável"
                              checked={formData.userType === "Responsável"}
                              onChange={() => handleUserTypeChange("Responsável")}
                              className="w-4 h-4 text-[#145CAB] border-gray-300 focus:ring-[#145CAB]"
                            />
                            <span className="ml-2 text-gray-700">Responsável</span>
                          </label>
                        </div>
                      </div>

                      {/* Nome e Email */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Nome Completo *</label>
                          <Input
                          name="form_name"
                          required
                          value={formData.form_name}
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
                          value={formData.form_email}
                          onChange={(e) => handleInputChange("form_email", e.target.value)}
                          placeholder="seu@email.com"
                          className={`border-gray-200 focus:border-[#145CAB] ${emailError ? 'border-red-500' : ''}`}
                        />
                        {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                        </div>
                      </div>

                      {/* Telefone */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Telefone *</label>
                        <Input
                          required
                          name="form_phone"
                          value={formData.form_phone}
                          onChange={(e) => handleInputChange("form_phone", e.target.value)}
                          placeholder="(11) 99999-9999"
                          maxLength="15"
                          className={`border-gray-200 focus:border-[#145CAB] ${phoneError ? 'border-red-500' : ''}`}
                        />
                        {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
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
                        disabled={isSubmitting || !!emailError || !!phoneError || !formData.userType}
                        className="w-full bg-[#145CAB] hover:bg-[#123f7a] text-white py-6 text-lg font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
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