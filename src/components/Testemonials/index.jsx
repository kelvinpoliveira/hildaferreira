import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "components/Carousel";
// import { Carousel } from "@material-tailwind/react";
import { Star, Quote } from "lucide-react";
import depoimento1 from '../../assets/images/testimonials/familiaNobre.png'
import depoimento2 from '../../assets/images/testimonials/depoimento2.png'
import depoimento3 from '../../assets/images/testimonials/depoimento3.png'
import depoimento4 from '../../assets/images/testimonials/depoimento4.png'

export default function Testimonials() {
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

  const testimonials = [
    {
      name: "Dayse Nobre e Daniel Nobre",
      role: "Pais de aluno",
      image: depoimento1,
      content: "Do serelepe aos 2 anos ao terceirão de hoje... que orgulho dessa trajetória no Instituto Hilda Ferreira!",
      rating: 5
    },
    {
      name: "Anderson e Alinne",
      role: "Pais de Ayla e Agnes",
      image: depoimento2,
      content: "Orgulho define! Ver Ayla e Agnes crescendo, aprendendo e conquistando no Instituto Hilda Ferreira nos mostra que fizemos a escolha certa. Cada medalha, cada prêmio e cada conquista das nossas filhas confirma: educação de qualidade e valores a gente encontra aqui.",
      rating: 5
    },
    {
      name: "Jamille Siqueira",
      role: "Mãe de aluna",
      image: depoimento3,
      content: "Desde 2023 no Instituto Hilda Ferreira, minha filha cresceu, aprendeu e se desenvolveu com valores que levamos para a vida!",
      rating: 5
    },
    {
      name: "Mayara Salerno",
      role: "Mãe de aluna",
      image: depoimento4,
      content: "Orgulho em ver nossa filha crescer, aprender e amar cada momento no Instituto Hilda Ferreira. Que essa jornada siga firme!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-[#145CAB] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#F4EC09] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#FBB03B] opacity-5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            O que dizem nossas{" "}
            <span className="bg-[#FBB03B] bg-clip-text text-transparent">
              Famílias
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A confiança das famílias é nossa maior recompensa. Veja o que pais e alunos falam sobre nossa escola.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto scroll-fade"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="border-none shadow-xl bg-white/95 backdrop-blur-sm h-full flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="relative mb-6 flex-grow">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#F4EC09] opacity-20" />
                      <p className="text-gray-700 text-lg leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="flex items-center gap-1 mb-4 mt-auto">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#F4EC09] text-[#F4EC09]" />
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white bg-white/10 hover:bg-white/20 border-none" />
          <CarouselNext className="text-white bg-white/10 hover:bg-white/20 border-none" />
        </Carousel>
      </div>
    </section>
  );
}