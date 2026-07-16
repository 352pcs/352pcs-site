"use client";
import React, { useState } from "react";
import Image from "next/image";

const PHONE = "+352691393559";
const PHONE_DISPLAY = "+352 691 393 559";
const EMAIL = "tech352pcs@outlook.com";
const WHATSAPP_URL = "https://wa.me/352691393559";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=149+rue+Pierre+Gansen+Niederkorn";
const MAPS_EMBED = "https://maps.google.com/maps?q=149+rue+Pierre+Gansen+Niederkorn+Luxembourg&t=&z=15&ie=UTF8&iwloc=&output=embed";

function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function FloatingWhatsApp({ label }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white pl-4 pr-5 py-3.5 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.45)] font-black text-sm uppercase tracking-tight transition-all hover:-translate-y-0.5"
    >
      <span className="relative flex h-6 w-6">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white/40 animate-ping" />
        <WhatsAppIcon className="relative w-6 h-6" />
      </span>
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

const content = {
  en: {
    navLinks: [
      { href: "#home", label: "Home" },
      { href: "#services", label: "Services" },
      { href: "#about", label: "About" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
    contactCta: "Contact",
    heroBadge: "Local PC Builds & Repairs in Luxembourg",
    heroTitle: "High-Performance Builds. Professional Repairs.",
    heroDesc: "Fresh high school graduate in Informatics (GIN), providing expert PC solutions in Niederkorn. From custom gaming builds to precision laptop repairs.",
    status: "Open Mon–Sat · 10:00–18:00",
    apptBadge: "Appointment Needed · Drop-Off Only · Niederkorn",
    whatsappCta: "Chat on WhatsApp",
    whatsappFast: "Fastest reply",
    faqButton: "Common Questions",
    aboutName: "Oliveira Moutinho Daniel",
    aboutTitle2: "Hardware Specialist & Founder",
    aboutBio: "I'm a recent high school graduate in Informatics (GIN). This September, I will be heading to Belval to pursue my informatics studies. For over 3 years, I've built and repaired PCs for the local community. 352pcs is where technical precision meets a passion for hardware.",
    belvalStatus: "Future Student @ Belval (Sept 2026)",
    servicesTitle: "Our Expertise",
    services: [
      { title: "Custom PC Builds", desc: "Crafting unique gaming and workstation rigs optimized for your specific budget.", icon: "⚡" },
      { title: "Hardware Repair", desc: "Expert diagnostics and component replacement for laptops and desktops.", icon: "🛠️" },
      { title: "Performance Upgrades", desc: "Boosting speed with high-end SSDs, RAM, and GPU installations.", icon: "🚀" },
      { title: "Deep PC Cleaning", desc: "Detailed internal cleaning, fan cleaning, CPU thermal-paste replacement where required, reassembly and temperature testing.", icon: "✨" },
      { title: "IT Consulting", desc: "Software troubleshooting and personalized tech advice for home or office.", icon: "🧠" },
    ],
    pricingTitle: "Simple Pricing",
    pricingIntro: "Prices cover labour only. Any required parts are quoted separately and approved before work begins.",
    prices: [
      {
        label: "PC Check",
        cost: "49€",
        desc: "Hardware testing and a clear diagnosis of the issue. If you approve the repair, this 49€ comes off your bill.",
        fixed: true,
      },
      {
        label: "Simple Upgrades",
        cost: "39€",
        desc: "RAM, SSD, GPU and other component installation. Final price depends on accessibility, configuration and testing required.",
        fixed: false,
      },
      {
        label: "PC Repairs",
        cost: "89€",
        desc: "Repair labour starts at 89€, including the diagnosis when the repair is approved. Final price confirmed before work begins.",
        fixed: false,
      },
      {
        label: "Custom PC Build",
        cost: "149€",
        desc: "I assemble, set up, and test your PC. Parts cost extra (yours, or ordered for you).",
        fixed: false,
      },
    ],
    extraPrice: {
      label: "Deep PC Cleaning",
      cost: "99€",
      desc: "Detailed internal cleaning, fan cleaning, CPU thermal-paste replacement where required, reassembly and temperature testing. Heavily soiled PCs or jobs requiring extensive disassembly are quoted after inspection.",
    },
    fromText: "from",
    disclaimer: "Clear pricing, no surprise charges. Any additional work is discussed and approved first.",
    businessTitle: "How It Works",
    businessItems: [
      { label: "Opening Hours", value: "Monday to Saturday, 10:00 – 18:00 (closed Sunday)." },
      { label: "Response Time", value: "I reply within 24 hours." },
      { label: "Repair Turnaround", value: "Typically 2–7 days, depending on parts and complexity." },
      { label: "Service Area", value: "Niederkorn only — drop-off at my address." },
      { label: "Appointments", value: "Appointment needed — please book before you drop off your device." },
      { label: "In-Person Only", value: "Drop-off only. No remote software support and no home visits." },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "When are you open?", a: "I'm open Monday through Saturday, 10:00–18:00, and closed on Sundays. Book an appointment, then drop by during those hours and I'll be at the workshop ready to help." },
      { q: "Do you offer pickup?", a: "It's drop-off only at my workshop in Niederkorn — no pickups or deliveries. Just bring your machine to me and I'll take great care of it." },
      { q: "Do I need an appointment?", a: "Yes, always book before you drop off! A quick WhatsApp message or a call locks in your slot, so I'm ready for you and your device gets looked at fast." },
      { q: "What payment methods do you accept?", a: "Nice and easy — I take cash or Digicash (SNET instant bank transfer). Whatever's most convenient for you works for me." },
      { q: "Which brands do you work on?", a: "All of them! Dell, HP, Lenovo, Asus, Acer, Apple, MSI, and fully custom builds — laptops and desktops alike. If it's a computer, I can work on it." },
      { q: "How do custom builds work?", a: "Two easy options: tell me your budget and goals and I'll source every compatible part for you, or supply your own parts and I'll handle the assembly, cable management, and tuning — as long as the components are compatible." },
      { q: "What should I bring?", a: "Keep it simple — bring your PC or laptop and its power cable or charger. That's everything I need to start the diagnostic." },
      { q: "Can you fix my software issues remotely?", a: "No remote support, sorry — every repair, including software issues, is done in person at the workshop so I can properly diagnose and fix it." },
      { q: "What is your service area?", a: "Niederkorn only. I'm a local, drop-off-based workshop, so all the work happens right here at my address." },
    ],
    contactTitle: "Ready to Start?",
    contactIntro: "Call, text, email, or message me on WhatsApp — whatever works best for you.",
    whatsappLabel: "WhatsApp",
    phoneLabel: "Phone & Text",
    emailLabel: "Email",
    formTitle: "Send a Message",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message",
    formSubmit: "Send Message",
    formSending: "Sending…",
    formSuccess: "Message sent! I'll get back to you within 24 hours.",
    formError: "Something went wrong. Please try again or contact me directly.",
    formPrivacy: "Your details will only be used to reply to your request.",
    locationLabel: "Drop-Off Location",
    mapPrompt: "Open in Maps",
    footer: "Built with passion in Luxembourg.",
  },
  fr: {
    navLinks: [
      { href: "#home", label: "Accueil" },
      { href: "#services", label: "Services" },
      { href: "#about", label: "À propos" },
      { href: "#pricing", label: "Tarifs" },
      { href: "#faq", label: "FAQ" },
    ],
    contactCta: "Contact",
    heroBadge: "Montage & réparation PC à Niederkorn",
    heroTitle: "Montages Haute Performance. Réparations d'Experts.",
    heroDesc: "Jeune diplômé en informatique (GIN) offrant des solutions informatiques à Niederkorn. Des PC gaming sur mesure aux réparations de précision.",
    status: "Ouvert lun–sam · 10h00–18h00",
    apptBadge: "Sur rendez-vous · Dépôt uniquement · Niederkorn",
    whatsappCta: "Discuter sur WhatsApp",
    whatsappFast: "Réponse la plus rapide",
    faqButton: "Questions fréquentes",
    aboutName: "Oliveira Moutinho Daniel",
    aboutTitle2: "Fondateur & Technicien PC",
    aboutBio: "Jeune diplômé en informatique (GIN), je commencerai mes études à Belval en septembre. Depuis 3 ans, je monte et répare des PC pour la communauté locale. 352pcs allie précision technique et passion du hardware.",
    belvalStatus: "Futur Étudiant @ Belval (Sept 2026)",
    servicesTitle: "Notre Expertise",
    services: [
      { title: "PC sur Mesure", desc: "Création de PC gaming et stations de travail optimisés selon votre budget.", icon: "⚡" },
      { title: "Réparation Hardware", desc: "Diagnostics experts et remplacement de composants pour portables et fixes.", icon: "🛠️" },
      { title: "Améliorations", desc: "Boostez vos performances avec les derniers SSD, RAM et GPU.", icon: "🚀" },
      { title: "Nettoyage en profondeur", desc: "Nettoyage interne détaillé, ventilateurs, pâte thermique CPU si nécessaire, remontage et test des températures.", icon: "✨" },
      { title: "Conseil IT", desc: "Dépannage logiciel et conseils personnalisés pour la maison ou le bureau.", icon: "🧠" },
    ],
    pricingTitle: "Tarifs Simples",
    pricingIntro: "Les prix couvrent uniquement la main-d'œuvre. Toute pièce nécessaire est devisée à part et validée avant intervention.",
    prices: [
      {
        label: "Check PC",
        cost: "49€",
        desc: "Tests hardware et un diagnostic clair du problème. Si vous validez la réparation, ces 49€ sont déduits de la facture.",
        fixed: true,
      },
      {
        label: "Upgrades simples",
        cost: "39€",
        desc: "Installation de RAM, SSD, GPU et autres composants. Le prix final dépend de l'accès, de la configuration et des tests nécessaires.",
        fixed: false,
      },
      {
        label: "Réparations PC",
        cost: "89€",
        desc: "La main-d'œuvre de réparation commence à 89€, diagnostic inclus si la réparation est validée. Prix final confirmé avant le début des travaux.",
        fixed: false,
      },
      {
        label: "Montage PC sur mesure",
        cost: "149€",
        desc: "J'assemble, configure et teste votre PC. Les pièces sont en plus (les vôtres, ou commandées pour vous).",
        fixed: false,
      },
    ],
    extraPrice: {
      label: "Nettoyage en profondeur",
      cost: "99€",
      desc: "Nettoyage interne détaillé, nettoyage des ventilateurs, remplacement de la pâte thermique du CPU si nécessaire, remontage et test des températures. PC très encrassés ou démontage important : devis après inspection.",
    },
    fromText: "à partir de",
    disclaimer: "Tarifs clairs, pas de frais surprises. Tout travail supplémentaire est discuté et validé au préalable.",
    businessTitle: "Comment ça marche",
    businessItems: [
      { label: "Horaires", value: "Lundi au samedi, 10h00 – 18h00 (fermé le dimanche)." },
      { label: "Délai de réponse", value: "Je réponds sous 24 heures." },
      { label: "Délai de réparation", value: "Généralement 2 à 7 jours, selon les pièces et la complexité." },
      { label: "Zone de service", value: "Niederkorn uniquement — dépôt à mon adresse." },
      { label: "Rendez-vous", value: "Sur rendez-vous — réservez avant de déposer votre appareil." },
      { label: "Sur place uniquement", value: "Dépôt uniquement. Pas de support logiciel à distance ni de visites à domicile." },
    ],
    faqTitle: "Questions Fréquentes",
    faqs: [
      { q: "Quels sont vos horaires ?", a: "Je suis ouvert du lundi au samedi, de 10h00 à 18h00, et fermé le dimanche. Prenez rendez-vous, puis passez pendant ces horaires : je serai à l'atelier, prêt à vous aider." },
      { q: "Proposez-vous un enlèvement ?", a: "C'est uniquement en dépôt à mon atelier à Niederkorn — ni enlèvement ni livraison. Apportez-moi votre machine et j'en prendrai grand soin." },
      { q: "Faut-il prendre rendez-vous ?", a: "Oui, réservez toujours avant de venir ! Un petit message WhatsApp ou un appel suffit à bloquer votre créneau, pour que votre appareil soit pris en charge rapidement." },
      { q: "Quels moyens de paiement acceptez-vous ?", a: "Tout simple — j'accepte les espèces ou Digicash (virement bancaire instantané SNET). Choisissez ce qui vous arrange le plus." },
      { q: "Sur quelles marques travaillez-vous ?", a: "Toutes ! Dell, HP, Lenovo, Asus, Acer, Apple, MSI et montages 100 % sur mesure — portables comme fixes. Si c'est un ordinateur, je peux m'en occuper." },
      { q: "Comment fonctionnent les montages sur mesure ?", a: "Deux options simples : donnez-moi votre budget et vos objectifs et je commande toutes les pièces compatibles pour vous, ou fournissez vos propres pièces et je m'occupe du montage, du câblage et des réglages — tant que les composants sont compatibles." },
      { q: "Que dois-je apporter ?", a: "Faites simple — apportez votre PC ou portable et son câble d'alimentation ou chargeur. C'est tout ce qu'il me faut pour lancer le diagnostic." },
      { q: "Pouvez-vous régler mes problèmes logiciels à distance ?", a: "Pas de support à distance, désolé — chaque réparation, y compris les problèmes logiciels, se fait en personne à l'atelier pour un diagnostic et une réparation corrects." },
      { q: "Quelle est votre zone de service ?", a: "Uniquement Niederkorn. Je suis un atelier local en dépôt, donc tout se passe directement à mon adresse." },
    ],
    contactTitle: "Prêt à commencer ?",
    contactIntro: "Appelez, envoyez un SMS, un e-mail ou un message WhatsApp — comme vous préférez.",
    whatsappLabel: "WhatsApp",
    phoneLabel: "Téléphone & SMS",
    emailLabel: "E-mail",
    formTitle: "Envoyer un message",
    formName: "Votre nom",
    formEmail: "Votre e-mail",
    formMessage: "Votre message",
    formSubmit: "Envoyer",
    formSending: "Envoi…",
    formSuccess: "Message envoyé ! Je vous réponds sous 24 heures.",
    formError: "Une erreur s'est produite. Réessayez ou contactez-moi directement.",
    formPrivacy: "Vos informations seront utilisées uniquement pour répondre à votre demande.",
    locationLabel: "Lieu de dépôt",
    mapPrompt: "Ouvrir Maps",
    footer: "Créé avec passion au Luxembourg.",
  },
  de: {
    navLinks: [
      { href: "#home", label: "Start" },
      { href: "#services", label: "Services" },
      { href: "#about", label: "Über mich" },
      { href: "#pricing", label: "Preise" },
      { href: "#faq", label: "FAQ" },
    ],
    contactCta: "Kontakt",
    heroBadge: "PC-Bau & Reparatur in Niederkorn",
    heroTitle: "High-Performance Builds. Profi-Reparatur.",
    heroDesc: "Frischgebackener Informatik-Abiturient (GIN) mit Fokus auf IT-Lösungen in Niederkorn. Von maßgeschneiderten Gaming-PCs bis hin zu Präzisionsreparaturen.",
    status: "Geöffnet Mo–Sa · 10:00–18:00",
    apptBadge: "Nur mit Termin · Nur Abgabe · Niederkorn",
    whatsappCta: "Per WhatsApp schreiben",
    whatsappFast: "Schnellste Antwort",
    faqButton: "Häufige Fragen",
    aboutName: "Oliveira Moutinho Daniel",
    aboutTitle2: "Gründer & PC-Techniker",
    aboutBio: "Ich habe vor kurzem meinen Abschluss in Informatik (GIN) gemacht. Ab diesem September studiere ich Informatik in Belval. Seit über 3 Jahren baue und repariere ich PCs für die Region. 352pcs vereint Präzision mit Leidenschaft für Hardware.",
    belvalStatus: "Zukünftiger Student @ Belval (Sept 2026)",
    servicesTitle: "Expertise",
    services: [
      { title: "Custom PC Bau", desc: "Maßgeschneiderte Gaming-PCs und Workstations, optimal auf Ihr Budget abgestimmt.", icon: "⚡" },
      { title: "Hardware Reparatur", desc: "Fachmännische Diagnosen und Komponentenaustausch für Laptops und Desktop-PCs.", icon: "🛠️" },
      { title: "Upgrades", desc: "Maximale Geschwindigkeit durch Installation von High-End-SSDs, RAM und Grafikkarten.", icon: "🚀" },
      { title: "Tiefenreinigung", desc: "Gründliche Innenreinigung, Lüfterreinigung, CPU-Wärmeleitpaste bei Bedarf, Zusammenbau und Temperaturtests.", icon: "✨" },
      { title: "IT-Beratung", desc: "Software-Fehlerbehebung und persönliche IT-Beratung für Privatpersonen oder Büros.", icon: "🧠" },
    ],
    pricingTitle: "Einfache Preise",
    pricingIntro: "Die Preise gelten nur für die Arbeit. Benötigte Teile werden separat angeboten und vor Beginn freigegeben.",
    prices: [
      {
        label: "PC-Check",
        cost: "49€",
        desc: "Hardware-Tests und eine klare Diagnose des Problems. Wenn Sie die Reparatur freigeben, werden diese 49€ von der Rechnung abgezogen.",
        fixed: true,
      },
      {
        label: "Einfache Upgrades",
        cost: "39€",
        desc: "Installation von RAM, SSD, GPU und anderen Komponenten. Der Endpreis hängt von Zugänglichkeit, Konfiguration und Tests ab.",
        fixed: false,
      },
      {
        label: "PC-Reparaturen",
        cost: "89€",
        desc: "Reparaturarbeit ab 89€, Diagnose inklusive wenn die Reparatur freigegeben wird. Endpreis vor Arbeitsbeginn bestätigt.",
        fixed: false,
      },
      {
        label: "Custom PC-Bau",
        cost: "149€",
        desc: "Ich baue, richte ein und teste Ihren PC. Teile kosten extra (Ihre eigenen oder von mir bestellt).",
        fixed: false,
      },
    ],
    extraPrice: {
      label: "Tiefenreinigung",
      cost: "99€",
      desc: "Gründliche Innenreinigung, Lüfterreinigung, CPU-Wärmeleitpasten-Wechsel bei Bedarf, Zusammenbau und Temperaturtests. Stark verschmutzte PCs oder aufwendige Demontage nach Inspektion angeboten.",
    },
    fromText: "ab",
    disclaimer: "Klare Preise, keine Überraschungskosten. Zusätzliche Arbeiten werden vorher besprochen und freigegeben.",
    businessTitle: "So funktioniert's",
    businessItems: [
      { label: "Öffnungszeiten", value: "Montag bis Samstag, 10:00 – 18:00 (Sonntag geschlossen)." },
      { label: "Antwortzeit", value: "Ich antworte innerhalb von 24 Stunden." },
      { label: "Reparaturdauer", value: "In der Regel 2–7 Tage, je nach Teilen und Komplexität." },
      { label: "Servicegebiet", value: "Nur Niederkorn — Abgabe an meiner Adresse." },
      { label: "Termine", value: "Nur mit Termin — bitte vor der Abgabe Ihres Geräts buchen." },
      { label: "Nur vor Ort", value: "Nur Abgabe. Kein Remote-Software-Support und keine Hausbesuche." },
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqs: [
      { q: "Wann haben Sie geöffnet?", a: "Ich habe Montag bis Samstag von 10:00 bis 18:00 Uhr geöffnet, sonntags geschlossen. Buchen Sie einen Termin und kommen Sie in diesen Zeiten vorbei — ich bin in der Werkstatt und helfe Ihnen gerne." },
      { q: "Bieten Sie Abholung an?", a: "Nur Abgabe in meiner Werkstatt in Niederkorn — keine Abholung, keine Lieferung. Bringen Sie mir einfach Ihr Gerät, ich kümmere mich bestens darum." },
      { q: "Brauche ich einen Termin?", a: "Ja, bitte immer vorher buchen! Eine kurze WhatsApp-Nachricht oder ein Anruf sichert Ihren Termin, damit Ihr Gerät schnell drankommt." },
      { q: "Welche Zahlungsmethoden akzeptieren Sie?", a: "Ganz einfach — ich nehme Bargeld oder Digicash (sofortige SNET-Banküberweisung). Wählen Sie, was für Sie am bequemsten ist." },
      { q: "An welchen Marken arbeiten Sie?", a: "An allen! Dell, HP, Lenovo, Asus, Acer, Apple, MSI und komplett individuelle Builds — Laptops wie Desktops. Wenn es ein Computer ist, kann ich daran arbeiten." },
      { q: "Wie funktionieren Custom Builds?", a: "Zwei einfache Optionen: Nennen Sie mir Budget und Ziele und ich beschaffe alle kompatiblen Teile für Sie, oder Sie liefern Ihre eigenen Teile und ich übernehme Zusammenbau, Kabelmanagement und Feintuning — solange die Komponenten kompatibel sind." },
      { q: "Was soll ich mitbringen?", a: "Halten Sie es einfach — bringen Sie Ihren PC oder Laptop und das Netzkabel bzw. Ladegerät mit. Mehr brauche ich nicht, um mit der Diagnose zu starten." },
      { q: "Können Sie meine Softwareprobleme aus der Ferne lösen?", a: "Kein Remote-Support, sorry — jede Reparatur, auch Softwareprobleme, erfolgt persönlich in der Werkstatt, damit ich richtig diagnostizieren und reparieren kann." },
      { q: "Was ist Ihr Servicegebiet?", a: "Nur Niederkorn. Ich bin eine lokale Werkstatt mit Abgabe vor Ort, also passiert alles direkt an meiner Adresse." },
    ],
    contactTitle: "Bereit?",
    contactIntro: "Rufen Sie an, schreiben Sie eine SMS, E-Mail oder WhatsApp — wie es Ihnen am besten passt.",
    whatsappLabel: "WhatsApp",
    phoneLabel: "Telefon & SMS",
    emailLabel: "E-Mail",
    formTitle: "Nachricht senden",
    formName: "Ihr Name",
    formEmail: "Ihre E-Mail",
    formMessage: "Ihre Nachricht",
    formSubmit: "Senden",
    formSending: "Wird gesendet…",
    formSuccess: "Nachricht gesendet! Ich antworte innerhalb von 24 Stunden.",
    formError: "Etwas ist schiefgelaufen. Bitte erneut versuchen oder mich direkt kontaktieren.",
    formPrivacy: "Ihre Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet.",
    locationLabel: "Abgabestelle",
    mapPrompt: "In Maps öffnen",
    footer: "In Luxemburg gebaut.",
  },
  pt: {
    navLinks: [
      { href: "#home", label: "Início" },
      { href: "#services", label: "Serviços" },
      { href: "#about", label: "Sobre" },
      { href: "#pricing", label: "Preços" },
      { href: "#faq", label: "FAQ" },
    ],
    contactCta: "Contacto",
    heroBadge: "Montagem & reparação de PC em Niederkorn",
    heroTitle: "Builds de Alta Performance. Reparações Profissionais.",
    heroDesc: "Recém-graduado em Informática (GIN) no Luxemburgo. De PCs de gaming por medida a reparações de precisão em Niederkorn.",
    status: "Aberto seg–sáb · 10:00–18:00",
    apptBadge: "Com marcação · Só entrega · Niederkorn",
    whatsappCta: "Falar no WhatsApp",
    whatsappFast: "Resposta mais rápida",
    faqButton: "Perguntas frequentes",
    aboutName: "Oliveira Moutinho Daniel",
    aboutTitle2: "Fundador & Técnico de Hardware",
    aboutBio: "Sou recém-graduado em Informática (GIN). Em setembro, irei para Belval continuar os meus estudos em informática. Há mais de 3 anos que monto e reparo PCs para a comunidade local. 352pcs é onde a precisão técnica encontra a paixão pelo hardware.",
    belvalStatus: "Futuro Estudante @ Belval (Sept 2026)",
    servicesTitle: "Especialidade",
    services: [
      { title: "Montagem de PCs", desc: "Criação de PCs gaming e estações de trabalho exclusivas, otimizadas para o seu orçamento.", icon: "⚡" },
      { title: "Reparação Hardware", desc: "Diagnóstico especializado e substituição de componentes para portáteis e computadores fixos.", icon: "🛠️" },
      { title: "Upgrades", desc: "Aumento de velocidade com instalações de SSDs, RAM e GPUs de alta gama.", icon: "🚀" },
      { title: "Limpeza profunda", desc: "Limpeza interna detalhada, ventoinhas, pasta térmica do CPU quando necessário, remontagem e testes de temperatura.", icon: "✨" },
      { title: "Consultoria TI", desc: "Resolução de problemas de software e consultoria técnica personalizada para casa ou escritório.", icon: "🧠" },
    ],
    pricingTitle: "Preços Simples",
    pricingIntro: "Os preços cobrem apenas a mão de obra. Quaisquer peças necessárias são orçamentadas à parte e aprovadas antes do trabalho.",
    prices: [
      {
        label: "Check do PC",
        cost: "49€",
        desc: "Testes de hardware e um diagnóstico claro do problema. Se aprovar a reparação, estes 49€ são descontados na fatura.",
        fixed: true,
      },
      {
        label: "Upgrades simples",
        cost: "39€",
        desc: "Instalação de RAM, SSD, GPU e outros componentes. O preço final depende do acesso, da configuração e dos testes necessários.",
        fixed: false,
      },
      {
        label: "Reparações PC",
        cost: "89€",
        desc: "A mão de obra de reparação começa nos 89€, com diagnóstico incluído quando a reparação é aprovada. Preço final confirmado antes do início do trabalho.",
        fixed: false,
      },
      {
        label: "Montagem de PC",
        cost: "149€",
        desc: "Monto, configuro e testo o seu PC. As peças custam à parte (suas, ou encomendadas por mim).",
        fixed: false,
      },
    ],
    extraPrice: {
      label: "Limpeza profunda",
      cost: "99€",
      desc: "Limpeza interna detalhada, limpeza das ventoinhas, substituição da pasta térmica do CPU quando necessário, remontagem e testes de temperatura. PCs muito sujos ou com desmontagem extensa: orçamento após inspeção.",
    },
    fromText: "a partir de",
    disclaimer: "Preços claros, sem cobranças surpresa. Qualquer trabalho adicional é discutido e aprovado primeiro.",
    businessTitle: "Como funciona",
    businessItems: [
      { label: "Horário", value: "Segunda a sábado, 10:00 – 18:00 (domingo fechado)." },
      { label: "Tempo de resposta", value: "Respondo em 24 horas." },
      { label: "Prazo de reparação", value: "Normalmente 2–7 dias, consoante peças e complexidade." },
      { label: "Área de serviço", value: "Apenas Niederkorn — entrega na minha morada." },
      { label: "Marcações", value: "Com marcação — reserve antes de entregar o seu equipamento." },
      { label: "Apenas presencial", value: "Apenas entrega. Sem suporte remoto de software nem visitas ao domicílio." },
    ],
    faqTitle: "Perguntas Frequentes",
    faqs: [
      { q: "Qual é o horário de funcionamento?", a: "Estou aberto de segunda a sábado, das 10:00 às 18:00, e fechado ao domingo. Marque e apareça nesse horário: estarei na oficina, pronto para ajudar." },
      { q: "Faz recolha?", a: "É só entrega na minha oficina em Niederkorn — não faço recolha nem entrega. Traga-me a sua máquina e eu trato dela com todo o cuidado." },
      { q: "Preciso de marcação?", a: "Sim, marque sempre antes de aparecer! Uma mensagem rápida no WhatsApp ou uma chamada garante o seu horário, para o seu equipamento ser visto rapidamente." },
      { q: "Que métodos de pagamento aceita?", a: "É simples — aceito dinheiro ou Digicash (transferência bancária instantânea SNET). Escolha o que for mais cómodo para si." },
      { q: "Com que marcas trabalha?", a: "Todas! Dell, HP, Lenovo, Asus, Acer, Apple, MSI e builds totalmente personalizados — portáteis e desktops. Se for um computador, eu trato dele." },
      { q: "Como funcionam os builds personalizados?", a: "Duas opções simples: diga-me o orçamento e os objetivos e eu encomendo todas as peças compatíveis por si, ou forneça as suas próprias peças e eu faço a montagem, a gestão de cabos e a afinação — desde que os componentes sejam compatíveis." },
      { q: "O que devo trazer?", a: "Simples — traga o seu PC ou portátil e o cabo de alimentação ou carregador. É tudo o que preciso para começar o diagnóstico." },
      { q: "Pode resolver os meus problemas de software remotamente?", a: "Sem suporte remoto, lamento — todas as reparações, incluindo problemas de software, são feitas presencialmente na oficina para um diagnóstico e reparação corretos." },
      { q: "Qual é a sua área de serviço?", a: "Apenas Niederkorn. Sou uma oficina local com entrega no local, por isso tudo acontece diretamente na minha morada." },
    ],
    contactTitle: "Vamos começar?",
    contactIntro: "Ligue, envie SMS, e-mail ou WhatsApp — como preferir.",
    whatsappLabel: "WhatsApp",
    phoneLabel: "Telefone & SMS",
    emailLabel: "E-mail",
    formTitle: "Enviar mensagem",
    formName: "O seu nome",
    formEmail: "O seu e-mail",
    formMessage: "A sua mensagem",
    formSubmit: "Enviar",
    formSending: "A enviar…",
    formSuccess: "Mensagem enviada! Respondo em 24 horas.",
    formError: "Algo correu mal. Tente novamente ou contacte-me diretamente.",
    formPrivacy: "Os seus dados serão utilizados apenas para responder ao seu pedido.",
    locationLabel: "Local de entrega",
    mapPrompt: "Abrir no Maps",
    footer: "Criado no Luxemburgo.",
  },
  lu: {
    navLinks: [
      { href: "#home", label: "Home" },
      { href: "#services", label: "Servicer" },
      { href: "#about", label: "Iwwer mech" },
      { href: "#pricing", label: "Präisser" },
      { href: "#faq", label: "FAQ" },
    ],
    contactCta: "Kontakt",
    heroBadge: "PC-Bau & Reparatur zu Niederkorn",
    heroTitle: "High-Performance Builds. Profi-Reparaturen.",
    heroDesc: "Frësche Informatik-Absolvent (GIN) bitt Informatik-Léisungen zu Niederkorn un. Vu personaliséierte Gaming-Maschinnen bis zu präzise Laptop-Reparaturen.",
    status: "Op Méi–Sams · 10:00–18:00",
    apptBadge: "Nëmme mat Termin · Nëmmen Ofginn · Niederkorn",
    whatsappCta: "Op WhatsApp schreiwen",
    whatsappFast: "Séierst Äntwert",
    faqButton: "Heefeg Froen",
    aboutName: "Oliveira Moutinho Daniel",
    aboutTitle2: "Grënner & Hardware-Techniker",
    aboutBio: "Ech hunn viru kuerzem mäin Ofschloss an der Informatik (GIN) gemaach. Dëse September fänken ech mäi Studium an der Informatik um Belval un. Zënter iwwer 3 Joer bauen a reparéieren ech PCen fir d'Leit aus der Géigend. Bei 352pcs trefft technesch Präzisioun op Leidenschaft fir Hardware.",
    belvalStatus: "Zukünftege Student @ Belval (Sept 2026)",
    servicesTitle: "Expertise",
    services: [
      { title: "Custom PC Bau", desc: "Moossgeschneidert Gaming- a Workstation-Systemer, optimal op Äre Budget ugepasst.", icon: "⚡" },
      { title: "Hardware Reparatur", desc: "Experten-Diagnos a Komponentenaustausch fir Laptop an Desktop-PCen.", icon: "🛠️" },
      { title: "Performance Upgrades", desc: "Méi Speed duerch d'Installatioun vun High-End SSDen, RAM a Grafikkarten.", icon: "🚀" },
      { title: "Déif Reinigung", desc: "Detailléiert intern Reinigung, Ventilateur botzen, CPU-Wärmeleetpaste wann néideg, Remontage an Temperaturtester.", icon: "✨" },
      { title: "IT Berodung", desc: "Software-Troubleshooting a perséinlech Tech-Berodung fir doheem oder am Büro.", icon: "🧠" },
    ],
    pricingTitle: "Einfach Präisser",
    pricingIntro: "D'Präisser gëllen nëmmen fir d'Aarbecht. Néideg Deeler ginn separat ugebueden a virum Ufank validéiert.",
    prices: [
      {
        label: "PC-Check",
        cost: "49€",
        desc: "Hardware-Tester an eng kloer Diagnos vum Problem. Wann Dir d'Reparatur validéiert, ginn dës 49€ vun der Rechnung ofgezunn.",
        fixed: true,
      },
      {
        label: "Einfach Upgrades",
        cost: "39€",
        desc: "Installatioun vu RAM, SSD, GPU an anere Komponenten. De Schlusspräis hänkt vum Zougang, der Konfiguratioun an den Tester of.",
        fixed: false,
      },
      {
        label: "PC-Reparaturen",
        cost: "89€",
        desc: "Reparatur-Aarbecht fänkt bei 89€ un, Diagnos abegraff wann d'Reparatur validéiert gëtt. Schlusspräis virum Ufank confirméiert.",
        fixed: false,
      },
      {
        label: "Custom PC-Bau",
        cost: "149€",
        desc: "Ech bauen, riichten an an testen Äre PC. Deeler kaschten extra (Är eegen, oder vu mir bestallt).",
        fixed: false,
      },
    ],
    extraPrice: {
      label: "Déif Reinigung",
      cost: "99€",
      desc: "Detailléiert intern Reinigung, Ventilateur botzen, CPU-Wärmeleetpaste wiesselen wann néideg, Remontage an Temperaturtester. Staark verschmotzt PCen oder opwänneg Demontage: Präis no Inspektioun.",
    },
    fromText: "vun",
    disclaimer: "Kloer Präisser, keng Iwwerraschungs-Käschten. All zousätzlech Aarbecht gëtt virdru diskutéiert a validéiert.",
    businessTitle: "Sou funktionéiert et",
    businessItems: [
      { label: "Ouvertureszäiten", value: "Méindeg bis Samschdeg, 10:00 – 18:00 (Sonndeg zou)." },
      { label: "Äntwertzäit", value: "Ech äntweren an 24 Stonnen." },
      { label: "Reparatiounsdauer", value: "Normalerweis 2–7 Deeg, jee no Deeler a Komplexitéit." },
      { label: "Servicegebitt", value: "Nëmmen Niederkorn — Ofginn op meng Adress." },
      { label: "Rendez-vous", value: "Nëmme mat Termin — reservéiert ier Dir Äert Gerät ofgitt." },
      { label: "Nëmmen op der Plaz", value: "Nëmmen Ofginn. Kee Remote-Software-Support a keng Hausbesuch." },
    ],
    faqTitle: "Heefeg gestallte Froen",
    faqs: [
      { q: "Wéini sidd Dir op?", a: "Ech hunn Méindeg bis Samschdeg vu 10:00 bis 18:00 Auer op, sonndes zou. Reservéiert en Termin a kommt an dësen Zäiten laanscht — ech sinn an der Atelier a hëllefen Iech gär." },
      { q: "Bitt Dir Ofhuelung un?", a: "Et ass nëmmen Ofginn an menger Atelier zu Niederkorn — keng Ofhuelung, keng Liwwerung. Bréngt mir einfach Är Maschinn, ech këmmere mech gutt drëm." },
      { q: "Brauch ech en Termin?", a: "Jo, reservéiert ëmmer ier Dir laanscht kommt! Eng kuerz WhatsApp-Noriicht oder en Uruff séchert Äre Slot, sou datt Äert Gerät séier drukënnt." },
      { q: "Wéi Bezuelmethoden akzeptéiert Dir?", a: "Ganz einfach — ech huelen Bargeld oder Digicash (direkten SNET-Banktransfer) un. Wielt wat fir Iech am bequemsten ass." },
      { q: "Mat wéi enge Marken schafft Dir?", a: "All Marken! Dell, HP, Lenovo, Asus, Acer, Apple, MSI a komplett personaliséiert Builds — Laptoppen a Desktoppen. Wann et en Computer ass, kann ech drun schaffen." },
      { q: "Wéi funktionéieren d'Custom Builds?", a: "Zwou einfach Optiounen: sot mir Äre Budget an Är Ziler an ech bestellen all kompatibel Deeler fir Iech, oder liwwert Är eege Deeler an ech maachen den Zesummebau, d'Kabelmanagement an d'Feintuning — soulaang d'Komponenten kompatibel sinn." },
      { q: "Wat soll ech matbréngen?", a: "Maacht et einfach — bréngt Äre PC oder Laptop an d'Stroumkabel oder Luedgerät mat. Méi brauch ech net fir mat der Diagnos unzefänken." },
      { q: "Kënnt Dir meng Softwareproblemer aus der Distanz léisen?", a: "Kee Remote-Support, pardon — all Reparatur, och Softwareproblemer, gëtt perséinlech an der Atelier gemaach, fir datt ech richteg diagnostizéiere a reparéiere kann." },
      { q: "Wat ass Äert Servicegebitt?", a: "Nëmmen Niederkorn. Ech sinn eng lokal Atelier mat Ofginn op der Plaz, also geschitt alles direkt op menger Adress." },
    ],
    contactTitle: "Bereet?",
    contactIntro: "Rufft un, schreift SMS, E-Mail oder WhatsApp — wéi et Iech am beschten passt.",
    whatsappLabel: "WhatsApp",
    phoneLabel: "Telefon & SMS",
    emailLabel: "E-Mail",
    formTitle: "Message schécken",
    formName: "Ären Numm",
    formEmail: "Är E-Mail",
    formMessage: "Äre Message",
    formSubmit: "Schécken",
    formSending: "Gëtt geschéckt…",
    formSuccess: "Message geschéckt! Ech äntweren an 24 Stonnen.",
    formError: "Eppes ass schif gelaf. Probéiert nach eng Kéier oder kontaktéiert mech direkt.",
    formPrivacy: "Är Donnéeë gi nëmme benotzt fir op Är Ufro ze äntweren.",
    locationLabel: "Ofginn-Plaz",
    mapPrompt: "An Maps opmaachen",
    footer: "Zu Lëtzebuerg gebaut.",
  },
};

function ContactForm({ t }) {
  const [form, setForm] = useState({ name: "", email: "", message: "", botcheck: "" });
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.botcheck) {
      setStatus("success");
      setForm({ name: "", email: "", message: "", botcheck: "" });
      return;
    }
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "your_access_key_here") {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: "352pcs Website Contact",
          botcheck: form.botcheck,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", botcheck: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        required
        aria-label={t.formName}
        placeholder={t.formName}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[rgb(66,123,157)]/50 transition-colors"
      />
      <input
        type="email"
        name="email"
        required
        aria-label={t.formEmail}
        placeholder={t.formEmail}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[rgb(66,123,157)]/50 transition-colors"
      />
      <textarea
        name="message"
        required
        rows={4}
        aria-label={t.formMessage}
        placeholder={t.formMessage}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[rgb(66,123,157)]/50 transition-colors resize-none"
      />
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.botcheck}
        onChange={(e) => setForm({ ...form, botcheck: e.target.value })}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gradient-to-r from-[rgb(15,52,92)] to-[rgb(66,123,157)] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all"
      >
        {status === "sending" ? t.formSending : t.formSubmit}
      </button>
      <p aria-live="polite" className="min-h-[1rem]">
        {status === "success" && (
          <span className="text-emerald-400 text-xs font-medium">{t.formSuccess}</span>
        )}
        {status === "error" && (
          <span className="text-red-400 text-xs font-medium">{t.formError}</span>
        )}
      </p>
      <p className="text-slate-600 text-[10px] leading-relaxed">{t.formPrivacy}</p>
    </form>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  React.useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    if (content[browserLang]) {
      setLang(browserLang);
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang === "lu" ? "lb" : lang;
  }, [lang]);

  const t = content[lang] || content.en;

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 font-sans selection:bg-[#427b9d] selection:text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[rgb(15,52,92)]/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[rgb(8,47,114)]/20 blur-[120px] rounded-full" />
      </div>

      <header className="px-6 py-4 flex justify-between items-center bg-[#080c14]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5">
        <a href="#home" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="352pcs"
            width={45}
            height={45}
            className="object-contain drop-shadow-[0_0_8px_rgba(66,123,157,0.5)]"
          />
          <span className="text-xl font-black tracking-tighter uppercase italic">
            352<span className="text-[rgb(66,123,157)]">pcs</span>
          </span>
        </a>

        <div className="flex gap-3 sm:gap-6 items-center">
          <nav className="space-x-6 text-[10px] font-black uppercase tracking-widest hidden lg:block">
            {t.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[rgb(66,123,157)] transition-all opacity-70 hover:opacity-100"
              >
                {link.label}
              </a>
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

            <a
              href="#contact"
              className="hidden sm:inline-block bg-gradient-to-r from-[rgb(15,52,92)] to-[rgb(66,123,157)] hover:brightness-110 text-white px-6 py-2 rounded-lg text-xs font-extrabold uppercase tracking-tighter transition-all"
            >
              {t.contactCta}
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 hover:border-[rgb(66,123,157)]/50 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden fixed inset-0 top-[73px] z-40 bg-[#080c14]/95 backdrop-blur-xl">
          <nav className="flex flex-col p-6 gap-1">
            {t.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="py-3 px-4 text-sm font-black uppercase tracking-widest hover:text-[rgb(66,123,157)] hover:bg-white/5 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobile}
              className="mt-4 py-3 px-4 text-center bg-gradient-to-r from-[rgb(15,52,92)] to-[rgb(66,123,157)] rounded-lg text-sm font-extrabold uppercase tracking-widest"
            >
              {t.contactCta}
            </a>
          </nav>
        </div>
      )}

      <section id="home" className="relative px-6 py-28 md:py-44 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">{t.status}</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(66,123,157)]/10 border border-[rgb(66,123,157)]/20 text-[rgb(66,123,157)] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          {t.heroBadge}
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-[0.15em] mb-8">
          <svg className="w-3.5 h-3.5 text-[rgb(66,123,157)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          {t.apptBadge}
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-8 max-w-5xl tracking-[-0.04em] leading-[0.9] text-white">
          {t.heroTitle.split(".").map((part, i) => (
            <span key={i} className={i === 1 ? "text-[rgb(66,123,157)] block md:inline" : "block md:inline"}>
              {part}
              {part && i < 2 ? "." : ""}
            </span>
          ))}
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl font-medium leading-relaxed">{t.heroDesc}</p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_24px_rgba(37,211,102,0.35)]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            {t.whatsappCta}
          </a>
          <a
            href="#contact"
            className="px-9 py-4 bg-white text-black rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[rgb(66,123,157)] hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-[0_10px_20px_rgba(66,123,157,0.3)]"
          >
            {t.contactCta}
          </a>
          <a
            href="#services"
            className="px-9 py-4 bg-white/5 border border-white/10 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white/10 hover:border-[rgb(66,123,157)]/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            {t.navLinks[1].label}
          </a>
          <a
            href="#faq"
            className="px-9 py-4 bg-white/5 border border-white/10 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white/10 hover:border-[rgb(66,123,157)]/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            {t.faqButton}
          </a>
        </div>
      </section>

      <section id="about" className="py-20 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/founder-pro.png"
              alt={t.aboutName}
              className="w-48 h-48 rounded-2xl border-2 border-[rgb(66,123,157)]/20 object-cover shadow-2xl"
            />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">{t.aboutName}</h2>
          <p className="text-[rgb(66,123,157)] font-medium mb-1 uppercase tracking-widest text-sm">{t.aboutTitle2}</p>
          <p className="text-slate-500 font-bold mb-6 uppercase tracking-widest text-[10px] opacity-70">{t.belvalStatus}</p>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">{t.aboutBio}</p>
        </div>
      </section>

      <section id="services" className="px-6 py-32 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-black mb-4 tracking-tighter uppercase">{t.servicesTitle}</h3>
          <div className="w-24 h-1.5 bg-[rgb(66,123,157)] mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((s, i) => (
            <div
              key={i}
              className="group p-8 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl hover:border-[rgb(66,123,157)]/50 transition-all duration-500 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{s.icon}</div>
                <h4 className="text-xl font-black mb-3 text-white uppercase tracking-tight">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="px-6 py-24">
        <div className="max-w-5xl mx-auto bg-white/[0.02] backdrop-blur-sm p-10 md:p-12 rounded-[2rem] border border-[rgb(66,123,157)]/30">
          <h3 className="text-4xl font-black mb-4 tracking-tight uppercase text-center">{t.pricingTitle}</h3>
          <p className="text-center text-slate-400 text-sm font-medium max-w-xl mx-auto mb-12 leading-relaxed">{t.pricingIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.prices.map((p, i) => (
              <div key={i} className="flex flex-col text-center md:text-left p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                <span className="text-[rgb(66,123,157)] text-xs font-black uppercase tracking-[0.2em] mb-3">{p.label}</span>
                <span className="text-4xl font-black tracking-tighter italic mb-4">
                  {p.fixed ? p.cost : `${t.fromText} ${p.cost}`}
                </span>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          {t.extraPrice && (
            <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
              <div>
                <span className="text-[rgb(66,123,157)] text-xs font-black uppercase tracking-[0.2em] block mb-2">{t.extraPrice.label}</span>
                <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-2xl">{t.extraPrice.desc}</p>
              </div>
              <span className="text-3xl font-black tracking-tighter italic shrink-0">
                {t.fromText} {t.extraPrice.cost}
              </span>
            </div>
          )}
          <p className="text-center text-slate-400 text-xs font-medium mt-10">{t.disclaimer}</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto bg-white/[0.02] backdrop-blur-sm p-10 md:p-12 rounded-[2rem] border border-white/10">
          <h3 className="text-3xl font-black mb-10 tracking-tight uppercase text-center">{t.businessTitle}</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {t.businessItems.map((item, i) => (
              <div key={i} className="p-6 bg-white/[0.03] rounded-2xl border border-white/5">
                <span className="text-[10px] font-black text-[rgb(66,123,157)] uppercase tracking-[0.2em] block mb-2">{item.label}</span>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase">{t.faqTitle}</h3>
            <div className="w-24 h-1.5 bg-[rgb(66,123,157)] mx-auto rounded-full" />
          </div>
          <div className="space-y-3">
            {t.faqs.map((faq, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-white/[0.02] transition-colors"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-sm font-bold text-white pr-4">{faq.q}</span>
                  <span aria-hidden="true" className="text-[rgb(66,123,157)] text-xl flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div id={`faq-answer-${i}`} className="px-5 pb-5">
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase italic">{t.contactTitle}</h3>
            <p className="text-slate-400 text-lg max-w-2xl">{t.contactIntro}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-[#25D366]/10 border border-[#25D366]/40 rounded-2xl hover:border-[#25D366] hover:bg-[#25D366]/15 transition-all group"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#25D366] text-white flex-shrink-0">
                  <WhatsAppIcon className="w-7 h-7" />
                </span>
                <div>
                  <span className="text-[10px] font-black text-[#25D366] uppercase tracking-[0.2em] block mb-1">
                    {t.whatsappLabel} · {t.whatsappFast}
                  </span>
                  <span className="text-xl font-black group-hover:text-[#25D366] transition-colors">{PHONE_DISPLAY}</span>
                </div>
              </a>

              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-[rgb(66,123,157)]/50 transition-all group"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <span className="text-[10px] font-black text-[rgb(66,123,157)] uppercase tracking-[0.2em] block mb-1">{t.phoneLabel}</span>
                  <span className="text-xl font-black group-hover:text-[rgb(66,123,157)] transition-colors">{PHONE_DISPLAY}</span>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-[rgb(66,123,157)]/50 transition-all group"
              >
                <span className="text-2xl">✉️</span>
                <div>
                  <span className="text-[10px] font-black text-[rgb(66,123,157)] uppercase tracking-[0.2em] block mb-1">{t.emailLabel}</span>
                  <span className="text-lg font-bold text-slate-300 group-hover:text-[rgb(66,123,157)] transition-colors break-all">{EMAIL}</span>
                </div>
              </a>

              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                <span className="text-[10px] font-black text-[rgb(66,123,157)] uppercase tracking-[0.2em] block mb-4">{t.formTitle}</span>
                <ContactForm t={t} />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                <span className="text-[10px] font-black text-[rgb(66,123,157)] uppercase block mb-4 tracking-widest">{t.locationLabel}</span>
                <p className="text-sm font-bold leading-relaxed text-slate-300 uppercase tracking-tight mb-4">
                  149, rue Pierre Gansen
                  <br />
                  Niederkorn
                  <br />
                  L-4570 Luxembourg
                </p>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    src={MAPS_EMBED}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="352pcs location"
                  />
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[10px] font-black text-[rgb(66,123,157)] uppercase tracking-widest hover:opacity-100 opacity-70 transition-opacity"
                >
                  {t.mapPrompt} →
                </a>
              </div>

              <div className="bg-white/5 p-8 rounded-3xl border border-white/5 flex flex-col items-center">
                <span className="text-[10px] font-black text-[rgb(66,123,157)] uppercase block mb-4 tracking-widest">Instagram</span>
                <a
                  href="https://instagram.com/352pcs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-[140px] h-[140px]"
                >
                  <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all">
                    <Image src="/352pcs_qr.png" alt="Instagram QR" fill className="object-cover p-2" priority unoptimized />
                  </div>
                </a>
                <span className="mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">@352pcs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
          {t.footer} © 2026 352PCS
        </p>
      </footer>

      <FloatingWhatsApp label={t.whatsappCta} />
    </div>
  );
}
