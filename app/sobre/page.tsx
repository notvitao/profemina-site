import Link from "next/link";

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-profemina to-blue-profemina-dark text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
            Sobre a Clínica Profemina
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-xl">
            Há 40 anos cuidando da saúde da mulher com dedicação, competência e acolhimento.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground">Nossa História</h2>
            <div className="mt-6 space-y-4 text-lg text-gray-profemina">
              <p>
                A Clínica Profemina nasceu do sonho do Dr. Adalberto Fernandes de oferecer 
                um atendimento ginecológico e obstétrico humanizado, centrado nas necessidades 
                reais das mulheres.
              </p>
              <p>
                Inicialmente um consultório focado na saúde da mulher, a clínica cresceu com 
                a chegada da Dra. Sandra Fernandes, ginecologista e obstetra, que trouxe uma 
                visão complementar e ampliou o leque de especialidades.
              </p>
              <p>
                Com o tempo, Victor, filho da Dra. Sandra, assumiu a gestão administrativa, 
                trazendo profissionalismo e organização para o dia a dia da clínica.
              </p>
              <p>
                Hoje, a Profemina é referência em saúde da mulher e fertilização no Rio de 
                Janeiro, com uma equipe multidisciplinar que inclui ginecologistas, 
                obstetras, neonatologistas, pediatras, nutricionistas e psicólogas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center">Nossos Diferenciais</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Atendimento Humanizado",
                desc: "Cada paciente é tratada de forma individual, com escuta ativa e acolhimento em todas as etapas.",
              },
              {
                title: "40 Anos de Experiência",
                desc: "Décadas de dedicação à saúde da mulher, com milhares de vidas impactadas positivamente.",
              },
              {
                title: "Equipe Multidisciplinar",
                desc: "Profissionais de diversas especialidades trabalhando juntos para um tratamento completo e integrado.",
              },
              {
                title: "Tecnologia de Ponta",
                desc: "Equipamentos modernos e técnicas atualizadas para diagnósticos precisos e tratamentos eficazes.",
              },
              {
                title: "Referência em Fertilização",
                desc: "Tratamento completo de fertilização in vitro, com acompanhamento emocional do início ao fim.",
              },
              {
                title: "Localização Acessível",
                desc: "Localizada na Taquara, Zona Oeste do Rio de Janeiro, com fácil acesso e estacionamento.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-gray-profemina">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-blue-profemina text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Venha nos conhecer</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Agende sua consulta e descubra por que somos referência em saúde da mulher há 40 anos.
          </p>
          <a
            href="https://wa.me/5521998096616?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-profemina hover:bg-gray-100 transition-colors"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
