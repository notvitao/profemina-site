export default function Equipe() {
  const doctors = [
    {
      name: "Dr. Adalberto Fernandes",
      role: "Ginecologista e Obstetra",
      desc: "Fundador da Clínica Profemina, com décadas de dedicação à saúde da mulher. Especialista em ginecologia, obstetrícia e reprodução humana.",
      specialties: ["Ginecologia", "Obstetrícia", "Fertilização in Vitro", "Cirurgias Ginecológicas"],
    },
    {
      name: "Dra. Sandra Fernandes",
      role: "Ginecologista e Obstetra",
      desc: "Ginecologista e obstetra com vasta experiência em pré-natal, parto e saúde da mulher. Integra a equipe da Profemina ampliando o cuidado às pacientes.",
      specialties: ["Ginecologia", "Obstetrícia", "Pré-Natal", "Saúde da Mulher"],
    },
  ];

  const team = [
    { name: "Equipe de Neonatologia", role: "Neonatologia", desc: "Cuidado especializado com o recém-nascido." },
    { name: "Equipe de Pediatria", role: "Pediatria", desc: "Acompanhamento do crescimento e desenvolvimento infantil." },
    { name: "Nutricionista", role: "Nutrição", desc: "Orientação nutricional personalizada." },
    { name: "Psicóloga", role: "Psicologia", desc: "Suporte emocional para pacientes." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-profemina to-blue-profemina-dark text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
            Nossa Equipe
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-xl">
            Profissionais dedicados a cuidar de você em todas as fases da vida.
          </p>
        </div>
      </section>

      {/* Médicos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center">Corpo Clínico</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {doctors.map((doc) => (
              <div key={doc.name} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                <div className="bg-light-gray-profemina aspect-square flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-profemina" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{doc.name}</h3>
                  <p className="mt-1 text-blue-profemina font-medium">{doc.role}</p>
                  <p className="mt-3 text-gray-profemina">{doc.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {doc.specialties.map((s) => (
                      <span
                        key={s}
                        className="inline-block rounded-full bg-blue-profemina/10 px-3 py-1 text-xs font-medium text-blue-profemina"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe Multidisciplinar */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center">Equipe Multidisciplinar</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-profemina/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-profemina" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm text-blue-profemina">{member.role}</p>
                <p className="mt-2 text-sm text-gray-profemina">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-blue-profemina text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Agende com nossos especialistas</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Nossa equipe está pronta para cuidar de você. Entre em contato pelo WhatsApp.
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
