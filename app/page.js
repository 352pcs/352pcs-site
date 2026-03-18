"use client";
import React, { useState } from "react";
import Image from "next/image";

const content = {
  en: {
    nav: ["Home", "Services", "About", "Pricing", "Contact"],
    heroBadge: "Luxembourg's Premier Tech Service",
    heroTitle: "High-Performance Builds. Professional Repairs.",
    heroDesc: "Recent GIN graduate providing expert PC solutions in Luxembourg. From custom gaming monsters to precision laptop repairs.",
    status: "Accepting Repairs & Builds",
    aboutTitle: "Meet the Founder",
    aboutText: "I'm a recent high school graduate in General Informatics (GIN). This September, I will be heading to Belval to pursue my informatics studies. For over 3 years, I've built and repaired PCs for the local community. 352pcs is where technical precision meets a passion for hardware.",
    belvalStatus: "Future Student @ Belval (Sept 2026)",
    servicesTitle: "Our Expertise",
    services: [
      { title: "Custom PC Builds", desc: "Crafting unique gaming and workstation rigs optimized for your specific budget.", icon: "⚡" },
      { title: "Hardware Repair", desc: "Expert diagnostics and component replacement for laptops and desktops.", icon: "🛠️" },
      { title: "Performance Upgrades", desc: "Boosting speed with high-end SSDs, RAM, and GPU installations.", icon: "🚀" },
      { title: "IT Consulting", desc: "Software troubleshooting and personalized tech advice for home or office.", icon: "🧠" }
    ],
    pricingTitle: "Fair Pricing",
    prices: [
      { label: "Diagnostics", cost: "30€", detail: "Full Tech Check" },
      { label: "Repair Labor", cost: "50€", detail: "Service + Parts" },
      { label: "Build Service", cost: "70€", detail: "Assembly + Setup" }
    ],
    fromText: "from",
    disclaimer: "* Part costs depend on client budget. Final quotes provided after diagnostic.",
    qrPrompt: "Click to follow",
    mapPrompt: "Open in Maps",
    contactTitle: "Ready to Start?",
    phoneLabel: "Professional Phone Support",
    emailLabel: "Email Inquiry",
    locationLabel: "Our Office",
    footer: "Built with passion in Luxembourg."
  },
  fr: {
    nav: ["Accueil", "Services", "À propos", "Tarifs", "Contact"],
    heroBadge: "Le service tech numéro 1 au Luxembourg",
    heroTitle: "Montages Haute Performance. Réparations d'Experts.",
    heroDesc: "Jeune diplômé GIN offrant des solutions informatiques au Luxembourg. Des PC gaming sur mesure aux réparations de précision.",
    status: "Disponible pour Réparations & Montages",
    aboutTitle: "À Propos",
    aboutText: "Diplômé en Informatique Générale (GIN), je commencerai mes études à Belval en septembre. Depuis 3 ans, je monte et répare des PC pour la communauté locale. 352pcs allie précision technique et passion du hardware.",
    belvalStatus: "Futur Étudiant @ Belval (Sept 2026)",
    servicesTitle: "Notre Expertise",
    services: [
      { title: "PC sur Mesure", desc: "Création de PC gaming et stations de travail optimisés selon votre budget.", icon: "⚡" },
      { title: "Réparation Hardware", desc: "Diagnostics experts et remplacement de composants pour portables et fixes.", icon: "🛠️" },
      { title: "Améliorations", desc: "Boostez vos performances avec les derniers SSD, RAM et GPU.", icon: "🚀" },
      { title: "Conseil IT", desc: "Dépannage logiciel et conseils personnalisés pour la maison ou le bureau.", icon: "🧠" }
    ],
    pricingTitle: "Tarifs Transparents",
    prices: [
      { label: "Diagnostic", cost: "30€", detail: "Check-up Complet" },
      { label: "Main d'œuvre", cost: "50€", detail: "Service + Pièces" },
      { label: "Montage PC", cost: "70€", detail: "Assemblage + Setup" }
    ],
    fromText: "à partir de",
    disclaimer: "* Le coût des pièces dépend du budget du client. Devis final après diagnostic.",
    qrPrompt: "Cliquez ici",
    mapPrompt: "Ouvrir Maps",
    contactTitle: "Prêt à commencer ?",
    phoneLabel: "Support Téléphonique",
    emailLabel: "Demande par E-mail",
    locationLabel: "Notre Siège",
    footer: "Créé avec passion au Luxembourg."
  },
  // ... (Other languages follow the same pattern)
  de: { nav: ["Start", "Services", "Über mich", "Preise", "Kontakt"], heroBadge: "Luxemburgs erstklassiger Tech-Service", heroTitle: "High-Performance Builds. Profi-Reparatur.", heroDesc: "GIN-Absolvent bietet Experten-IT-Lösungen in Luxemburg an.", status: "Verfügbar für Reparaturen & Bau", aboutTitle: "Über Mich", aboutText: "Ich habe vor kurzem meinen Abschluss in Allgemeiner Informatik (GIN) gemacht. Ab diesem September studiere ich Informatik in Belval. Seit über 3 Jahren baue und repariere ich PCs für die Region. 352pcs vereint Präzision mit Leidenschaft für Hardware.", belvalStatus: "Zukünftiger Student @ Belval (Sept 2026)", servicesTitle: "Expertise", services: [{ title: "Custom PC Bau", desc: "Einzigartige Gaming-Setups.", icon: "⚡" }, { title: "Hardware Reparatur", desc: "Fachmännische Diagnose.", icon: "🛠️" }, { title: "Upgrades", desc: "Maximale Geschwindigkeit.", icon: "🚀" }, { title: "IT-Beratung", desc: "Fehlersuche.", icon: "🧠" }], pricingTitle: "Faire Preise", prices: [{ label: "Diagnose", cost: "30€", detail: "Check" }, { label: "Reparatur", cost: "50€", detail: "Service" }, { label: "PC Montage", cost: "70€", detail: "Bau" }], fromText: "ab", disclaimer: "* Teilkosten hängen vom Budget ab.", qrPrompt: "Hier klicken", mapPrompt: "In Maps öffnen", contactTitle: "Bereit?", phoneLabel: "Support", emailLabel: "Anfrage", locationLabel: "Standort", footer: "In Luxemburg gebaut." },
  pt: { nav: ["Início", "Serviços", "Sobre", "Preços", "Contacto"], heroBadge: "O melhor serviço técnico do Luxemburgo", heroTitle: "Builds de Alta Performance. Reparações Profissionais.", heroDesc: "Recém-formado em GIN oferecendo soluções de informática no Luxemburgo.", status: "Disponível para Reparações", aboutTitle: "Sobre Mim", aboutText: "Sou recém-graduado em Informática Geral (GIN). Em setembro, irei para Belval continuar os meus estudos em informática. Há mais de 3 anos que monto e reparo PCs para a comunidade local. 352pcs é onde a precisão técnica encontra a paixão pelo hardware.", belvalStatus: "Futuro Estudante @ Belval (Sept 2026)", servicesTitle: "Especialidade", services: [{ title: "Montagem de PCs", desc: "PCs gaming e workstations.", icon: "⚡" }, { title: "Reparação Hardware", desc: "Diagnóstico especializado.", icon: "🛠️" }, { title: "Upgrades", desc: "Aumente a velocidade.", icon: "🚀" }, { title: "Consultoria TI", desc: "Resolução de problemas.", icon: "🧠" }], pricingTitle: "Preços Justos", prices: [{ label: "Diagnóstico", cost: "30€", detail: "Verificação" }, { label: "Mão de obra", cost: "50€", detail: "Serviço" }, { label: "Montagem PC", cost: "70€", detail: "Setup" }], fromText: "a partir de", disclaimer: "* O custo depende do orçamento.", qrPrompt: "Clique aqui", mapPrompt: "Abrir no Maps", contactTitle: "Vamos começar?", phoneLabel: "Suporte", emailLabel: "E-mail", locationLabel: "Localização", footer: "Criado no Luxemburgo." },
  lu: { nav: ["Home", "Servicer", "Iwwer mech", "Präisser", "Kontakt"], heroBadge: "Lëtzebuerger Tech-Service vum Fachmann", heroTitle: "High-Performance Builds. Profi-Reparaturen.", heroDesc: "GIN-Absolvent mat Experten-IT-Léisungen zu Lëtzebuerg.", status: "Bereet fir Reparaturen & Bau", aboutTitle: "Iwwer Mech", aboutText: "Ech hunn viru kuerzem mäin Ofschloss an der Allgemenger Informatik (GIN) gemaach. Dëse September fänken ech mäi Studium an der Informatik op der Belval un. Zënter iwwer 3 Joer bauen a reparéieren ech PCen fir d'Leit aus der Géigend. Bei 352pcs trefft technesch Präzisioun op Leidenschaft fir Hardware.", belvalStatus: "Zukünftege Student @ Belval (Sept 2026)", servicesTitle: "Expertise", services: [{ title: "Custom PC Bau", desc: "Eenzegaarteg Setups.", icon: "⚡" }, { title: "Hardware Reparatur", desc: "Experten-Diagnos.", icon: "🛠️" }, { title: "Performance Upgrades", desc: "Méi Speed.", icon: "🚀" }, { title: "IT Berodung", desc: "Tech-Conseil.", icon: "🧠" }], pricingTitle: "Transparent Präisser", prices: [{ label: "Diagnos", cost: "30€", detail: "Check" }, { label: "Aarbechtszäit", cost: "50€", detail: "Service" }, { label: "PC Montage", cost: "70€", detail: "Bau" }], fromText: "vun", disclaimer: "* Käschte hänke vum Budget of.", qrPrompt: "Hei klicken", mapPrompt: "An Maps opmaachen", contactTitle: "Bereet?", phoneLabel: "Support", emailLabel: "Ufro", locationLabel: "Büro", footer: "Zu Lëtzebuerg gebaut." }
};

export default function App() {
  const [lang, setLang] = useState("fr");
  const t = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 font-sans selection:bg-[#427b9d] selection:text-white">
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[rgb(15,52,92)]/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[rgb(8,47,114)]/20 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center bg-[#080c14]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="352pcs" width={45} height={45} className="object-contain" />
          <span className="text-xl font-black tracking-tighter uppercase italic">352<span className="text-[rgb(66,123,157)]">pcs</span></span>
        </div>
        
        <div className="flex gap-4 sm:gap-8 items-center">
          <nav className="space-x-8 text-[10px] font-black uppercase tracking-widest hidden lg:block">
             {t.nav.slice(0, 4).map((item, i) => (
              <a key={i} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[rgb(66,123,157)] transition-all opacity-70 hover:opacity-100">{item}</a>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <select
              name="language-picker"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-white py-1.5 px-3 rounded-lg focus:outline-none transition-all text-xs font-bold appearance-none cursor-pointer border border-white/10"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
              <option value="pt">PT</option>
              <option value="lu">LU</option>
            </select>

            <a href="#contact" className="bg-gradient-to-r from-[rgb(15,52,92)] to-[rgb(66,123,157)] hover:brightness-110 text-white px-6 py-2 rounded-lg text-xs font-extrabold uppercase tracking-tighter transition-all">
              {t.nav[4]}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-28 md:py-44 flex flex-col items-center justify-center text-center">
        {/* Pulsing Status Indicator */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 mb-6 transition-all hover:bg-emerald-500/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">
            {t.status}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(66,123,157)]/10 border border-[rgb(66,123,157)]/20 text-[rgb(66,123,157)] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
          {t.heroBadge}
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 max-w-5xl tracking-[-0.04em] leading-[0.9] text-white">
          {t.heroTitle.split('.').map((part, i) => (
            <span key={i} className={i === 1 ? "text-[rgb(66,123,157)] block md:inline" : "block md:inline"}>
              {part}{part && i < 2 ? "." : ""}
            </span>
          ))}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl font-medium leading-relaxed">
          {t.heroDesc}
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <a href="#contact" className="px-10 py-4 bg-white text-black rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[rgb(66,123,157)] hover:text-white transition-all transform hover:-translate-y-1 shadow-xl">
            {t.nav[4]}
          </a>
          <a href="#services" className="px-10 py-4 bg-white/5 border border-white/10 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
            {t.nav[1]}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-24 border-y border-white/5 bg-[#18293c]/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square bg-[#080c14] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center p-12">
            <Image src="/logo.png" alt="352pcs Logo" width={300} height={300} className="object-contain" />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(15,52,92)]/20 to-transparent"></div>
          </div>
          <div>
            <h3 className="text-4xl font-black mb-8 tracking-tighter uppercase">{t.aboutTitle}</h3>
            <p className="text-xl text-slate-400 leading-relaxed font-medium mb-8 italic border-l-4 border-[rgb(66,123,157)] pl-6">
              "{t.aboutText}"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[rgb(66,123,157)] text-right">{t.belvalStatus}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="px-6 py-32 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-black mb-4 tracking-tighter uppercase">{t.servicesTitle}</h3>
          <div className="w-24 h-1.5 bg-[rgb(66,123,157)] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.map((s, i) => (
            <div key={i} className="group p-8 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl hover:border-[rgb(66,123,157)]/50 transition-all duration-500 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform tracking-normal">{s.icon}</div>
                <h4 className="text-xl font-black mb-3 text-white uppercase tracking-tight">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24">
        <div className="max-w-5xl mx-auto bg-white/[0.02] backdrop-blur-sm p-12 rounded-[2rem] border border-[rgb(66,123,157)]/30 relative overflow-hidden">
          <h3 className="text-4xl font-black mb-12 tracking-tight uppercase text-center">{t.pricingTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {t.prices.map((p, i) => (
              <div key={i} className="flex flex-col items-center group">
                <span className="text-[rgb(66,123,157)] text-xs font-black uppercase tracking-[0.2em] mb-2">{p.label}</span>
                <span className="text-4xl font-black tracking-tighter italic mb-2 group-hover:scale-110 transition-transform">
                  {t.fromText} {p.cost}
                </span>
                <span className="text-slate-500 text-[10px] font-black uppercase bg-white/5 px-3 py-1 rounded-full">
                  {p.detail}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-[10px] font-bold uppercase mt-12 tracking-widest opacity-60">
            {t.disclaimer}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-6xl font-black mb-8 tracking-tighter text-white uppercase italic">{t.contactTitle}</h3>
              <div className="space-y-12">
                <div className="group flex flex-col">
                  <span className="text-[10px] font-black text-[rgb(66,123,157)] uppercase mb-2 tracking-[0.2em]">{t.phoneLabel}</span>
                  <a href="tel:+352691393559" className="text-4xl md:text-5xl font-black hover:text-[rgb(66,123,157)] transition-colors tracking-tighter">
                    +352 691 393 559
                  </a>
                </div>
                <div className="group flex flex-col">
                  <span className="text-[10px] font-black text-[rgb(66,123,157)] uppercase mb-2 tracking-[0.2em]">{t.emailLabel}</span>
                  <a href="mailto:tech352pcs@outlook.com" className="text-2xl md:text-3xl font-bold text-slate-300 hover:text-[rgb(66,123,157)] transition-colors">
                    tech352pcs@outlook.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/5 flex flex-col items-center group/card transition-all hover:border-[rgb(66,123,157)]/50">
                <span className="text-[10px] font-black text-[rgb(66,123,157)] uppercase block mb-4 tracking-widest">Instagram</span>
                <a 
                  href="https://instagram.com/352pcs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-[140px] h-[140px]"
                >
                  <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl group-hover:scale-105 transition-all">
                    <Image 
                      src="/352pcs_qr.png" 
                      alt="Instagram QR" 
                      fill
                      className="object-cover p-2" 
                      priority
                      unoptimized 
                    />
                  </div>
                </a>
                <span className="mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">@352pcs</span>
              </div>

              <a 
                href="https://maps.google.com/?q=149+rue+Pierre+Gansen+Niederkorn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-8 rounded-3xl border border-white/5 flex flex-col justify-center relative group/loc transition-all hover:border-[rgb(66,123,157)]/50 hover:bg-white/[0.07] min-h-[140px]"
              >
                <span className="text-[10px] font-black text-[rgb(66,123,157)] uppercase block mb-4 tracking-widest">
                  {t.locationLabel}
                </span>
                <p className="text-sm font-bold leading-relaxed text-slate-300 uppercase tracking-tight group-hover/loc:text-white transition-colors">
                  149, rue Pierre Gansen<br/>
                  Niederkorn<br/>
                  L-4570 Luxembourg
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-8 h-1 bg-[rgb(66,123,157)]/30 rounded-full group-hover/loc:w-12 group-hover/loc:bg-[rgb(66,123,157)] transition-all"></div>
                  <span className="text-[10px] font-black text-[rgb(66,123,157)] uppercase opacity-70 group-hover/loc:opacity-100 transition-opacity tracking-widest">
                    {t.mapPrompt}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
          {t.footer} © 2026 352PCS
        </p>
      </footer>
    </div>
  );
} 
