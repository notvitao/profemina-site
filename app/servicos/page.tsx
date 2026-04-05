import Link from "next/link";

const services = [
  {
    name: "Ginecologia",
    desc: "Cuidado completo com a saúde ginecológica da mulher em todas as fases da vida, desde a adolescência até a menopausa.",
    items: ["Consulta ginecológica", "Preventivo (Papanicolau)", "Ultrassonografia transvaginal", "Tratamento de infecções", "Acompanhamento do climatério"],
  },
  {
    name: "Obstetrícia",
    desc: "Acompanhamento completo da gestação, do pré-natal ao pós-parto, com segurança e acolhimento.",
    items: ["Pré-natal completo", "Ultrassonografia obstétrica", "Planejamento do parto", "Pós-parto"],
  },
  {
    name: "Fertilização in Vitro (FIV)",
    desc: "Tratamento completo de reprodução assistida para casais que desejam engravidar.",
    items: ["Estimulação ovariana", "Punção folicular", "Fecundação de óvulos", "Transferência embrionária", "Confirmação da gravidez"],
  },
  {
    name: "Cirurgias Ginecológicas",
    desc: "Procedimentos cirúrgicos com técnicas modernas e minimamente invasivas.",
    items: ["Laparoscopia", "Histeroscopia", "Cirurgia de endometriose", "Miomectomia"],
  },
  {
    name: "Pré-Natal",
    desc: "Acompanhamento detalhado de toda a gestação para garantir a saúde da mãe e do bebê.",
    items: ["Consultas regulares", "Exames laboratoriais", "Ultrassonografias", "Orientação nutricional"],
  },
  {
    name: "Neonatologia",
    desc: "Cuidado especializado com o recém-nascido desde os primeiros minutos de vida.",
    items: ["Avaliação neonatal", "Teste do pezinho", "Acompanhamento do desenvolvimento"],
  },
  {
    name: "Pediatria",
    desc: "Acompanhamento do crescimento e desenvolvimento da criança com carinho e competência.",
    items: ["Consultas pediátricas", "Vacinação", "Acompanhamento do desenvolvimento", "Orientação aos pais"],
  },
  {
    name: "Nutricionista",
    desc: "Orientação nutricional personalizada para cada fase da vida da mulher.",
    items: ["Avaliação nutricional", "Plano alimentar", "Nutrição na gestação", "Nutrição na menopausa"],
  },
  {
    name: "Psicologia",
    desc: "Suporte emocional para pacientes em tratamento de fertilização e em momentos de transição.",
    items: ["Acompanhamento psicológico", "Suporte na fertilização", "Orientação para gestantes", "Acompanhamento pós-parto"],
  },
  {
    name: "Clínica Geral",
    desc: "Atendimento clínico geral para demandas diversas de saúde.",
    items: ["Consultas gerais", "Check-ups", "Encaminhamentos especializados"],
  },
];

export default function Servicos() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-profemina to-blue-profemina-dark text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
            Nossos Serviços
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-xl">
            Especialidades completas para cuidar da saúde da mulher em todas as fases da vida.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {service.name}
                  </h2>
                  <p className="mt-3 text-lg text-gray-profemina">{service.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-blue-profemina flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""} bg-light-gray-profemina rounded-2xl aspect-video flex items-center justify-center`}>
                  <svg className="w-12 h-12 text-gray-profemina" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Não encontrou o que procura?
          </h2>
          <p className="mt-4 text-lg text-gray-profemina max-w-2xl mx-auto">
            Entre em contato conosco pelo WhatsApp e tire suas dúvidas. Nossa equipe está pronta para ajudar.
          </p>
          <a
            href="https://wa.me/5521998096616?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Cl%C3%ADnica%20Profemina."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-profemina px-8 py-3 text-base font-semibold text-white hover:bg-blue-profemina-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fale Conosco
          </a>
        </div>
      </section>
    </>
  );
}
