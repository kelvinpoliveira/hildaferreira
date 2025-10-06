import React, { useState, useRef, useEffect } from "react";
import { Button } from "../components/ui/button";
import Input from "components/Input/index";
import Textarea from "components/Textarea/index";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { ArrowLeft, Send, CheckCircle, Shield, AlertTriangle, FileUp, Info } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.webp';
import emailjs from '@emailjs/browser';

export default function LinhaEticaPage() {
  const [formData, setFormData] = useState({
    form_name: "",
    form_email: "",
    form_phone: "",
    form_message: "",
    form_frequency: "",
  });
  const [file, setFile] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [base64, setBase64] = useState("");

  // @ts-ignore
  const form = useRef();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  useEffect(() => {

    if(formData.form_message.includes("LINHA ÉTICA: ")){

      console.log("FORM:", formData)
      emailjs
      .sendForm('service_7ointbt', 'template_gtdxmwr', form.current, {
        publicKey: 'tr_-jraGt4mDWXjtn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          handleInputChange("form_message", "")
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      
      setTimeout(() => setIsSuccess(false), 5000);
    }
  },[agreedToTerms && formData.form_message])

  const handleFileChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.target.files[0];
    if (file) {
      // Salvar o arquivo no state primeiro
      setFile(file);
      
      // Converter para base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        // Você pode salvar o base64 em outro state se necessário
        setBase64(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!agreedToTerms) {
      setError("Você precisa concordar com os termos de tratamento de dados para continuar.");
      return;
    }
    
    setIsSubmitting(true);

    try {
       handleInputChange("form_message", "LINHA ÉTICA: " + formData.form_message)
    } catch (err) {
      console.error("Erro ao enviar denúncia:", err);
      setError("Ocorreu um erro ao enviar sua denúncia. Tente novamente.");
    }

    setIsSubmitting(false);
  };

  const canSubmit = agreedToTerms && formData.details && formData.frequency;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center">
              <img 
                  src={logo}
                  alt="logo"
                  />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Linha de Ética</h1>
                <p className="text-white/80">Instituto Hilda Ferreira</p>
              </div>
            </div>
            <Link 
              to="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8 border-yellow-200 bg-yellow-50/50 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-bold text-yellow-800">
                <Info className="w-6 h-6" />
                Seja bem-vindo à Linha de Ética
              </CardTitle>
            </CardHeader>
            <CardContent className="text-yellow-800 space-y-4">
              <p>Este canal seguro e confidencial destina-se a apurar condutas que possam ferir nossas diretrizes institucionais. Todas as informações serão investigadas com o mais absoluto sigilo.</p>
              <p className="font-semibold">A denúncia pode ser anônima. A identificação é opcional.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <Send className="w-6 h-6 text-[#145CAB]" />
                Registrar Denúncia
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Denúncia Registrada!</h3>
                  <p className="text-gray-600">
                    Sua denúncia foi recebida e será tratada com a devida atenção e sigilo. Agradecemos sua colaboração.
                  </p>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-gray-800">Dados de Identificação (Opcional)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="form_name" value={formData.form_name} onChange={(e) => handleInputChange("form_name", e.target.value)} placeholder="Nome Completo" />
                      <Input name="form_email" type="email" value={formData.form_email} onChange={(e) => handleInputChange("form_email", e.target.value)} placeholder="E-mail" />
                    </div>
                    <Input name="form_phone" value={formData.form_phone} onChange={(e) => handleInputChange("form_phone", e.target.value)} placeholder="Telefone" />
                  </div>
                  
                  <div className="space-y-4">
                     <h3 className="font-semibold text-lg text-gray-800">Descreva com detalhes o que aconteceu. (Obrigatório)</h3>
                    <Textarea
                      required
                      name="form_message"
                      value={formData.form_message}
                      onChange={(e) => handleInputChange("form_message", e.target.value)}
                      placeholder="Descreva com o máximo de detalhes o que aconteceu, quando, como, e se havia testemunhas."
                      rows={8}
                      className="border-gray-200 focus:border-[#145CAB] resize-y"
                    />
                    <Select required value={formData.form_frequency} onValueChange={(value) => handleInputChange("form_frequency", value)}>
                      <SelectTrigger className="border-gray-200 focus:border-[#145CAB]">
                        <SelectValue placeholder="Com que frequência o evento ocorre?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once">Ocorreu Apenas Uma Vez</SelectItem>
                        <SelectItem value="infrequently">Com Pouca Frequência, Mas Continua Ocorrendo</SelectItem>
                        <SelectItem value="recurrently">Ocorre de Forma Recorrente</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-gray-800">Deseja enviar algum arquivo? (Opcional)</h3>
                    <div className="flex items-center gap-4 p-4 border border-dashed rounded-lg">
                      <FileUp className="w-6 h-6 text-gray-500" />
                      <input 
                        type="file" 
                        onChange={handleFileChange} 
                        className="border-none p-0 h-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      />
                    </div>
                    {file && <p className="text-sm text-gray-600">Arquivo selecionado: {file.name}</p>}
                  </div>

                  <div className="p-4 bg-gray-100 rounded-lg space-y-4">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2"><AlertTriangle className="text-gray-500 w-5 h-5"/>Como seus dados serão tratados?</h4>
                    <p className="text-sm text-gray-600">As informações aqui registradas serão recebidas e tratadas de forma sigilosa, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Os dados serão utilizados única e exclusivamente para a apuração da denúncia.</p>
                    <div className="flex items-start space-x-3">
                      {/* <Checkbox id="terms"  onCheckedChange={setAgreedToTerms} className="mt-1"/> */}
                        <input
                            type="radio"
                            id="terms"
                            checked={agreedToTerms}
                            onChange={() => setAgreedToTerms(!agreedToTerms)}
                            className="mt-1"
                        />
                      <label htmlFor="terms" className="text-sm font-medium text-gray-700 cursor-pointer">
                        Li e concordo com o fornecimento das informações para a finalidade descrita.
                      </label>
                    </div>
                  </div>
                  
                  {error && <p className="text-sm font-medium text-red-600 text-center">{error}</p>}

                  <Button
                    // onClick={sendForm}
                    type="submit"
                    disabled={!agreedToTerms}
                    className="w-full bg-[#145CAB] hover:bg-[#123f7a] text-white py-6 text-lg font-semibold rounded-xl"
                  >
                    {isSubmitting ? "Enviando Denúncia..." : "Enviar Denúncia"}
                    {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}