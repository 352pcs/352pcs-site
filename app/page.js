"use client";
import React, { useState } from "react";
import Image from "next/image";

const PHONE = "+352691393559";
const PHONE_DISPLAY = "+352 691 393 559";
const EMAIL = "tech352pcs@outlook.com";
const WHATSAPP_URL = "https://wa.me/352691393559";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=149+rue+Pierre+Gansen+Niederkorn";
const MAPS_EMBED = "https://maps.google.com/maps?q=149+rue+Pierre+Gansen+Niederkorn+Luxembourg&t=&z=15&ie=UTF8&iwloc=&output=embed";
const BUSINESS_TIME_ZONE = "Europe/Luxembourg";
const REGULAR_SCHEDULE = {
  openDays: [1, 2, 3, 4, 5, 6],
  opens: { hour: 10, minute: 0 },
  closes: { hour: 18, minute: 0 },
};
const BUILDS_GALLERY = [
  ["/builds/alienware-angle-1.jpg", "/builds/alienware-angle-2.jpg"],
  ["/builds/white-rgb-full.jpg", "/builds/white-rgb-interior.jpg"],
];

function toMinutes(time) {
  return time.hour * 60 + time.minute;
}

function formatScheduleTime(time) {
  return `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}`;
}

function fillScheduleTemplate(template) {
  return template
    .replace("{opens}", formatScheduleTime(REGULAR_SCHEDULE.opens))
    .replace("{closes}", formatScheduleTime(REGULAR_SCHEDULE.closes))
    .replace("{time}", formatScheduleTime(REGULAR_SCHEDULE.closes));
}

function getLuxembourgTimeParts(date) {
  const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: BUSINESS_TIME_ZONE,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));

  return {
    weekday: weekdayMap[values.weekday],
    minutes: Number(values.hour) * 60 + Number(values.minute),
  };
}

function isWithinRegularHours(parts) {
  return (
    REGULAR_SCHEDULE.openDays.includes(parts.weekday) &&
    parts.minutes >= toMinutes(REGULAR_SCHEDULE.opens) &&
    parts.minutes < toMinutes(REGULAR_SCHEDULE.closes)
  );
}

function getCurrentOpeningStatus(now, t) {
  if (!now) {
    return {
      tone: "checking",
      label: t.statusChecking,
      detail: t.status,
    };
  }

  const parts = getLuxembourgTimeParts(now);
  const isOpen = isWithinRegularHours(parts);

  return {
    tone: isOpen ? "open" : "closed",
    label: isOpen ? t.statusOpenNow : t.statusClosedNow,
    detail: isOpen ? fillScheduleTemplate(t.statusOpenUntil) : t.status,
  };
}

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
      { href: "#builds", label: "Builds" },
      { href: "#about", label: "About" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
    contactCta: "Contact",
    heroBadge: "Local PC Builds & Repairs in Luxembourg",
    heroTitle: "High-Performance Builds. Professional Repairs.",
    heroDesc: "Student at the University of Luxembourg in Belval, pursuing a Bachelor's degree in Applied Information Technology, and providing expert PC solutions in Niederkorn. From custom gaming builds to precision laptop repairs.",
    status: "Open Mon–Sat · 10:00–18:00",
    statusOpenNow: "Open now",
    statusClosedNow: "Closed now",
    statusChecking: "Checking status",
    statusOpenUntil: "until {time}",
    apptBadge: "Appointment Needed · Drop-Off Only · Niederkorn",
    whatsappCta: "Chat on WhatsApp",
    whatsappFast: "Fastest reply",
    faqButton: "Common Questions",
    buildsTitle: "Recent Builds",
    buildsIntro: "Custom PCs built by 352pcs.",
    builds: [
      { title: "Alienware Gaming PC", description: "A black Alienware PC, shown from multiple angles." },
      { title: "White RGB Gaming PC", description: "A white showcase build with a coordinated RGB setup." },
    ],
    photoZoomLabel: "Zoom photo",
    photoCloseLabel: "Close photo",
    aboutName: "Oliveira Moutinho Daniel",
    aboutTitle2: "Hardware Specialist & Founder",
    aboutBio: "I am a student at the University of Luxembourg in Belval, pursuing a Bachelor's degree in Applied Information Technology. For over 3 years, I've built and repaired PCs for the local community. 352pcs is where technical precision meets a passion for hardware.",
    belvalStatus: "Student @ University of Luxembourg · Belval",
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
      { q: "When are you open?", a: "I'm open Monday through Saturday, 10:00–18:00, and closed on Sundays. Book an appointment, then drop by during opening hours and I'll be at the workshop ready to help." },
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
      { href: "#builds", label: "Réalisations" },
      { href: "#about", label: "À propos" },
      { href: "#pricing", label: "Tarifs" },
      { href: "#faq", label: "FAQ" },
    ],
    contactCta: "Contact",
    heroBadge: "Montage & réparation PC à Niederkorn",
    heroTitle: "Montages Haute Performance. Réparations d'Experts.",
    heroDesc: "Étudiant à l’Université du Luxembourg, sur le campus de Belval, où je prépare un bachelor en technologies de l’information appliquées. Je propose des solutions informatiques à Niederkorn, des PC gaming sur mesure aux réparations de précision.",
    status: "Ouvert lun–sam · 10h00–18h00",
    statusOpenNow: "Ouvert maintenant",
    statusClosedNow: "Fermé maintenant",
    statusChecking: "Vérification du statut",
    statusOpenUntil: "jusqu'à {time}",
    apptBadge: "Sur rendez-vous · Dépôt uniquement · Niederkorn",
    whatsappCta: "Discuter sur WhatsApp",
    whatsappFast: "Réponse la plus rapide",
    faqButton: "Questions fréquentes",
    buildsTitle: "Réalisations récentes",
    buildsIntro: "PC personnalisés assemblés par 352pcs.",
    builds: [
      { title: "PC gaming Alienware", description: "Un PC Alienware noir, présenté sous différents angles." },
      { title: "PC gaming blanc avec RGB", description: "Un PC vitrine blanc avec un éclairage RGB assorti." },
    ],
    photoZoomLabel: "Agrandir la photo",
    photoCloseLabel: "Fermer la photo",
    aboutName: "Oliveira Moutinho Daniel",
    aboutTitle2: "Fondateur & Technicien PC",
    aboutBio: "Je suis étudiant à l’Université du Luxembourg, sur le campus de Belval, où je prépare un bachelor en technologies de l’information appliquées. Depuis plus de 3 ans, je monte et répare des PC pour la communauté locale. 352pcs allie précision technique et passion du hardware.",
    belvalStatus: "Étudiant à l’Université du Luxembourg · Belval",
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
      { q: "Quels sont vos horaires ?", a: "Je suis ouvert du lundi au samedi, de 10h00 à 18h00, et fermé le dimanche. Prenez rendez-vous, puis passez pendant les horaires d'ouverture : je serai à l'atelier, prêt à vous aider." },
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
      { href: "#builds", label: "PC-Builds" },
      { href: "#about", label: "Über mich" },
      { href: "#pricing", label: "Preise" },
      { href: "#faq", label: "FAQ" },
    ],
    contactCta: "Kontakt",
    heroBadge: "PC-Bau & Reparatur in Niederkorn",
    heroTitle: "High-Performance Builds. Profi-Reparatur.",
    heroDesc: "Student an der Universität Luxemburg am Campus Belval. Ich studiere Angewandte Informationstechnologie und biete IT-Lösungen in Niederkorn an – von maßgeschneiderten Gaming-PCs bis zu präzisen Reparaturen.",
    status: "Geöffnet Mo–Sa · 10:00–18:00",
    statusOpenNow: "Jetzt geöffnet",
    statusClosedNow: "Jetzt geschlossen",
    statusChecking: "Status wird geprüft",
    statusOpenUntil: "bis {time}",
    apptBadge: "Nur mit Termin · Nur Abgabe · Niederkorn",
    whatsappCta: "Per WhatsApp schreiben",
    whatsappFast: "Schnellste Antwort",
    faqButton: "Häufige Fragen",
    buildsTitle: "Aktuelle Builds",
    buildsIntro: "Individuelle PC-Builds von 352pcs.",
    builds: [
      { title: "Alienware-Gaming-PC", description: "Ein schwarzer Alienware-PC aus mehreren Blickwinkeln." },
      { title: "Weißer RGB-Gaming-PC", description: "Ein weißer Showcase-PC mit abgestimmter RGB-Beleuchtung." },
    ],
    photoZoomLabel: "Foto vergrößern",
    photoCloseLabel: "Foto schließen",
    aboutName: "Oliveira Moutinho Daniel",
    aboutTitle2: "Gründer & PC-Techniker",
    aboutBio: "Ich absolviere einen Bachelor in Applied Information Technology an der Universität Luxemburg am Campus Belval. Seit über drei Jahren baue und repariere ich PCs für die Region. 352pcs verbindet technische Präzision mit Leidenschaft für Hardware.",
    belvalStatus: "Student an der Universität Luxemburg · Belval",
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
      { q: "Wann haben Sie geöffnet?", a: "Ich habe Montag bis Samstag von 10:00 bis 18:00 Uhr geöffnet, sonntags geschlossen. Buchen Sie einen Termin und kommen Sie während der Öffnungszeiten vorbei — ich bin in der Werkstatt und helfe Ihnen gerne." },
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
      { href: "#builds", label: "Montagens" },
      { href: "#about", label: "Sobre" },
      { href: "#pricing", label: "Preços" },
      { href: "#faq", label: "FAQ" },
    ],
    contactCta: "Contacto",
    heroBadge: "Montagem & reparação de PC em Niederkorn",
    heroTitle: "Builds de Alta Performance. Reparações Profissionais.",
    heroDesc: "Estudante na Universidade do Luxemburgo, no campus de Belval, onde frequento uma licenciatura em Tecnologias de Informação Aplicadas. Disponibilizo soluções informáticas em Niederkorn, desde PCs gaming por medida a reparações de precisão.",
    status: "Aberto seg–sáb · 10:00–18:00",
    statusOpenNow: "Aberto agora",
    statusClosedNow: "Fechado agora",
    statusChecking: "A verificar horário",
    statusOpenUntil: "até às {time}",
    apptBadge: "Com marcação · Só entrega · Niederkorn",
    whatsappCta: "Falar no WhatsApp",
    whatsappFast: "Resposta mais rápida",
    faqButton: "Perguntas frequentes",
    buildsTitle: "Montagens recentes",
    buildsIntro: "PCs personalizados montados pela 352pcs.",
    builds: [
      { title: "PC gaming Alienware", description: "Um PC Alienware preto, apresentado de vários ângulos." },
      { title: "PC gaming branco com RGB", description: "Um PC branco de exposição com iluminação RGB coordenada." },
    ],
    photoZoomLabel: "Ampliar foto",
    photoCloseLabel: "Fechar foto",
    aboutName: "Oliveira Moutinho Daniel",
    aboutTitle2: "Fundador & Técnico de Hardware",
    aboutBio: "Sou estudante na Universidade do Luxemburgo, no campus de Belval, onde frequento uma licenciatura em Tecnologias de Informação Aplicadas. Há mais de 3 anos que monto e reparo PCs para a comunidade local. 352pcs é onde a precisão técnica encontra a paixão pelo hardware.",
    belvalStatus: "Estudante na Universidade do Luxemburgo · Belval",
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
      { q: "Qual é o horário de funcionamento?", a: "Estou aberto de segunda a sábado, das 10:00 às 18:00, e fechado ao domingo. Marque e apareça durante o horário de funcionamento: estarei na oficina, pronto para ajudar." },
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
      { href: "#builds", label: "PC-Builds" },
      { href: "#about", label: "Iwwer mech" },
      { href: "#pricing", label: "Präisser" },
      { href: "#faq", label: "FAQ" },
    ],
    contactCta: "Kontakt",
    heroBadge: "PC-Bau & Reparatur zu Niederkorn",
    heroTitle: "High-Performance Builds. Profi-Reparaturen.",
    heroDesc: "Ech studéieren Applied Information Technology op der Universitéit Lëtzebuerg um Campus Belval. Zu Nidderkuer bidden ech IT-Léisungen un – vu personaliséierte Gaming-PCen bis zu präzise Reparaturen.",
    status: "Op Méi–Sams · 10:00–18:00",
    statusOpenNow: "Elo op",
    statusClosedNow: "Elo zou",
    statusChecking: "Status gëtt gepréift",
    statusOpenUntil: "bis {time}",
    apptBadge: "Nëmme mat Termin · Nëmmen Ofginn · Niederkorn",
    whatsappCta: "Op WhatsApp schreiwen",
    whatsappFast: "Séierst Äntwert",
    faqButton: "Heefeg Froen",
    buildsTitle: "Rezent PC-Builds",
    buildsIntro: "Individuell PC-Builds vu 352pcs.",
    builds: [
      { title: "Alienware-Gaming-PC", description: "E schwaarzen Alienware-PC aus verschiddene Perspektiven." },
      { title: "Wäisse RGB-Gaming-PC", description: "E wäisse Showcase-PC mat ofgestëmmter RGB-Beliichtung." },
    ],
    photoZoomLabel: "Foto vergréisseren",
    photoCloseLabel: "Foto zoumaachen",
    aboutName: "Oliveira Moutinho Daniel",
    aboutTitle2: "Grënner & Hardware-Techniker",
    aboutBio: "Ech maachen e Bachelor am Fach Applied Information Technology op der Uni Lëtzebuerg um Campus Belval. Zënter iwwer dräi Joer bauen a reparéieren ech PCe fir d'Leit aus der Géigend. Bei 352pcs treffen technesch Präzisioun a Passioun fir Hardware openeen.",
    belvalStatus: "Student op der Universitéit Lëtzebuerg · Belval",
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
      { q: "Wéini sidd Dir op?", a: "Ech hunn Méindeg bis Samschdeg vu 10:00 bis 18:00 Auer op, sonndes zou. Reservéiert en Termin a kommt wärend den Ouvertureszäiten laanscht — ech sinn an der Atelier a hëllefen Iech gär." },
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

const STATUS_BADGE_STYLES = {
  open: {
    wrapper: "bg-emerald-500/5 border-emerald-500/25",
    ping: "bg-emerald-400",
    dot: "bg-emerald-500",
    label: "text-emerald-400",
    detail: "text-emerald-100/80",
  },
  closed: {
    wrapper: "bg-red-500/10 border-red-500/30",
    ping: "bg-red-400",
    dot: "bg-red-500",
    label: "text-red-300",
    detail: "text-red-100/80",
  },
  checking: {
    wrapper: "bg-slate-500/10 border-slate-400/20",
    ping: "bg-slate-400",
    dot: "bg-slate-300",
    label: "text-slate-300",
    detail: "text-slate-400",
  },
};

function LiveStatusBadge({ status }) {
  const styles = STATUS_BADGE_STYLES[status.tone] || STATUS_BADGE_STYLES.checking;

  return (
    <div
      aria-live="polite"
      className={`inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 px-4 py-2 rounded-full border ${styles.wrapper}`}
    >
      <span className="inline-flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${styles.ping}`} />
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${styles.dot}`} />
        </span>
        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${styles.label}`}>
          {status.label}
        </span>
      </span>
      <span className={`text-[10px] font-bold uppercase tracking-[0.16em] ${styles.detail}`}>
        {status.detail}
      </span>
    </div>
  );
}

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
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[rgb(72,177,255)]/50 transition-colors"
      />
      <input
        type="email"
        name="email"
        required
        aria-label={t.formEmail}
        placeholder={t.formEmail}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[rgb(72,177,255)]/50 transition-colors"
      />
      <textarea
        name="message"
        required
        rows={4}
        aria-label={t.formMessage}
        placeholder={t.formMessage}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[rgb(72,177,255)]/50 transition-colors resize-none"
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
        className="w-full rounded-xl bg-blue-600 px-6 py-3 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
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
  const [now, setNow] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
  const openingStatus = React.useMemo(() => getCurrentOpeningStatus(now, t), [now, t]);

  React.useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 30000);

    return () => window.clearInterval(timer);
  }, []);

  React.useEffect(() => {
    if (!selectedPhoto) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function closeOnEscape(event) {
      if (event.key === "Escape") setSelectedPhoto(null);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedPhoto]);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#070a12] font-sans text-[#eef3ff] selection:bg-blue-600 selection:text-[#070a12]">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/[0.08] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/[0.07] blur-[150px] rounded-full" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#070a12]/90 px-4 backdrop-blur-2xl sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="352pcs"
            width={42}
            height={42}
            className="object-contain drop-shadow-[0_0_8px_rgba(72,177,255,0.42)]"
          />
          <span className="text-xl font-black tracking-tighter uppercase italic">
            352<span className="text-blue-300">pcs</span>
          </span>
        </a>

        <div className="flex gap-3 sm:gap-6 items-center">
          <nav className="hidden items-center gap-6 text-[10px] font-black uppercase tracking-[0.16em] lg:flex">
            {t.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] text-slate-400 transition-colors hover:text-blue-300"
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
              className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-xs font-black uppercase tracking-wide text-white transition-all hover:bg-blue-500 sm:inline-block"
            >
              {t.contactCta}
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 hover:border-[rgb(72,177,255)]/50 transition-colors"
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
        </div>
      </header>

      {mobileOpen && (
        <div id="mobile-menu" className="fixed inset-0 top-[73px] z-40 bg-[#070a12]/98 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col p-6 gap-1">
            {t.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="rounded-lg px-4 py-3 text-sm font-black uppercase tracking-widest transition-all hover:bg-white/5 hover:text-blue-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobile}
              className="mt-4 rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-extrabold uppercase tracking-widest text-white"
            >
              {t.contactCta}
            </a>
          </nav>
        </div>
      )}

      <section id="home" className="relative isolate overflow-hidden px-6">
        <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-45" />
        <div className="absolute -right-48 top-16 -z-10 h-[36rem] w-[36rem] rounded-full bg-blue-600/[0.07] blur-[120px]" />
        <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-12 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-14">
          <div className="relative z-10 max-w-3xl py-4">
            <div className="mb-7 inline-flex items-center gap-2.5 border-l-2 border-blue-400 pl-3 text-[10px] font-black uppercase tracking-[0.2em] text-blue-300 sm:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
              {t.heroBadge}
            </div>

            <h1 className="mb-7 text-[clamp(3.5rem,7.4vw,7.2rem)] font-black uppercase leading-[0.83] tracking-[-0.075em] text-white">
              {t.heroTitle.split(".").map((part, i) => (
              <span key={i} className={i === 1 ? "mt-3 block bg-gradient-to-r from-blue-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent" : "block"}>
                  {part.trim()}{part && i < 2 ? "." : ""}
                </span>
              ))}
            </h1>

            <p className="max-w-xl border-l border-white/15 pl-5 text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">{t.heroDesc}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <LiveStatusBadge status={openingStatus} />
              <span className="inline-flex max-w-full items-center gap-2 border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-300 sm:text-[10px]">
                <svg className="h-3.5 w-3.5 shrink-0 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {t.apptBadge}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-blue-600 px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_12px_40px_rgba(56,189,248,0.2)] transition-all hover:-translate-y-1 hover:bg-blue-500">
                <WhatsAppIcon className="h-5 w-5" />{t.whatsappCta}
              </a>
              <a href="#builds" className="inline-flex items-center justify-center gap-3 border border-white/20 bg-black/20 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition-all hover:border-blue-400/60 hover:text-blue-300">
                {t.buildsTitle}<span className="text-blue-300" aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="mt-9 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.15em] text-stone-500">
              <span className="h-px w-8 bg-blue-600/60" />{t.belvalStatus}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
            <div className="absolute -inset-4 rotate-2 border border-blue-300/20 sm:-inset-6" />
            <div className="relative aspect-[0.7] overflow-hidden border border-white/10 bg-[#111827] shadow-[0_35px_120px_rgba(0,0,0,0.65)] sm:aspect-[0.76]">
              <Image src="/builds/white-rgb-full.jpg" alt={t.builds[1].title} fill priority sizes="(min-width: 1024px) 42vw, 90vw" className="object-cover object-[center_35%] transition-transform duration-700 hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/5 to-transparent" />
              <div className="absolute left-5 top-5 flex items-center gap-3 border border-white/15 bg-[#070a12]/75 px-4 py-3 backdrop-blur-md sm:left-7 sm:top-7">
                <span className="text-xl font-black tracking-tighter text-blue-300">352</span>
                <span className="h-7 w-px bg-white/20" />
                <span className="max-w-[140px] text-[9px] font-black uppercase leading-4 tracking-[0.16em] text-white">{t.aboutTitle2}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[9px] font-black uppercase tracking-[0.24em] text-blue-300">{t.buildsTitle}</p>
                <p className="mt-2 max-w-sm text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">{t.buildsIntro}</p>
              </div>
            </div>
              <span aria-hidden="true" className="absolute -right-8 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] font-black uppercase tracking-[0.35em] text-blue-300/80 sm:block">352PCS — LUXEMBOURG</span>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden border-b border-white/[0.06] bg-[#0a0e18] px-6 py-16 sm:py-24">
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-blue-700/[0.08] blur-[110px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[390px]">
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-blue-300/30" />
            <div className="relative aspect-[0.88] overflow-hidden border border-white/10 bg-[#101827]">
              <Image src="/founder-pro.png" alt={t.aboutName} fill sizes="(min-width: 1024px) 35vw, 85vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/70 via-transparent to-transparent" />
            </div>
            <span className="absolute -left-3 top-6 border border-blue-300/30 bg-[#101827]/90 px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-blue-300 backdrop-blur sm:-left-5">352pcs / Founder</span>
          </div>
          <div className="py-3">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-blue-300">{t.belvalStatus}</p>
            <h2 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl">{t.aboutName}</h2>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-blue-300">{t.aboutTitle2}</p>
            <p className="mt-7 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{t.aboutBio}</p>
            <div className="mt-8 flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-blue-200"><span className="h-px w-10 bg-blue-300/60" />{t.heroBadge}</div>
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden bg-[#070a12] px-6 py-16 sm:py-24">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-950/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-7 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300">352pcs / 01</p>
              <h3 className="max-w-2xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl">{t.servicesTitle}</h3>
            </div>
            <p className="max-w-xs text-xs font-bold uppercase leading-5 tracking-[0.1em] text-slate-500">{t.heroBadge}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {t.services.map((s, i) => (
              <div key={i} className={`group relative isolate overflow-hidden border border-white/[0.09] bg-[#0d1422] p-6 transition-all duration-300 hover:border-blue-300/30 hover:bg-[#101a2b] sm:p-8 ${i === 0 ? "min-h-[370px] lg:col-span-7 lg:row-span-2 lg:min-h-[540px]" : i === 1 || i === 2 ? "min-h-[260px] lg:col-span-5" : "min-h-[245px] lg:col-span-6"}`}>
                {i === 0 && <>
                  <Image src="/builds/white-rgb-full.jpg" alt="" fill sizes="(min-width: 1024px) 58vw, 100vw" className="-z-20 object-cover opacity-25 transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0e18]/95 via-[#0a0e18]/80 to-blue-950/40" />
                </>}
                <div className="flex items-start justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center border border-blue-300/20 bg-blue-400/[0.08] text-2xl text-blue-300 transition-transform group-hover:-rotate-6 group-hover:scale-110 ${i === 0 ? "sm:h-16 sm:w-16 sm:text-3xl" : ""}`}>{s.icon}</span>
                  <span className="font-mono text-xs font-bold tracking-[0.18em] text-slate-600">{t.servicesTitle.toUpperCase()} / 0{i + 1}</span>
                </div>
                <div className={i === 0 ? "absolute inset-x-6 bottom-7 max-w-xl sm:inset-x-8 sm:bottom-9" : "mt-9"}>
                  <h4 className={`mb-3 font-black uppercase leading-tight tracking-[-0.03em] text-white ${i === 0 ? "text-3xl sm:text-5xl" : "text-lg sm:text-xl"}`}>{s.title}</h4>
                  <p className={`leading-6 text-slate-400 ${i === 0 ? "max-w-lg text-sm sm:text-base" : "text-sm"}`}>{s.desc}</p>
                </div>
                {i !== 0 && <span aria-hidden="true" className="absolute bottom-6 right-6 font-mono text-lg text-blue-300/60 transition-transform group-hover:translate-x-1">↗</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="builds" className="relative overflow-hidden bg-[#070a12] px-6 py-16 sm:py-24">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-[110px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-7 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-blue-300">352pcs / PC-BUILDS</p>
              <h3 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-white sm:text-7xl">{t.buildsTitle}</h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-stone-400 sm:text-right">{t.buildsIntro}</p>
          </div>
          <div className="space-y-6">
            {t.builds.map((build, buildIndex) => (
              <article key={build.title} className="grid overflow-hidden border border-white/10 bg-[#0b111d] shadow-[0_28px_90px_rgba(0,0,0,0.25)] lg:min-h-[450px] lg:grid-cols-12">
                <div className={`relative min-h-[340px] overflow-hidden bg-[#090e18] sm:min-h-[460px] lg:col-span-7 ${buildIndex === 1 ? "lg:order-2" : ""}`}>
                  <button type="button" onClick={() => setSelectedPhoto({ src: BUILDS_GALLERY[buildIndex][0], alt: build.title })} aria-label={`${t.photoZoomLabel}: ${build.title}, 1`} className="group absolute inset-0 z-0 h-full w-full cursor-zoom-in">
                    <Image src={BUILDS_GALLERY[buildIndex][0]} alt="" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.035] sm:p-8" />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-70 transition-opacity group-hover:opacity-100" />
                  </button>
                  <button type="button" onClick={() => setSelectedPhoto({ src: BUILDS_GALLERY[buildIndex][1], alt: build.title })} aria-label={`${t.photoZoomLabel}: ${build.title}, 2`} className="absolute bottom-5 right-5 z-20 h-28 w-24 cursor-zoom-in overflow-hidden border-2 border-blue-300 bg-[#070a12] shadow-2xl transition-transform hover:scale-105 sm:bottom-7 sm:right-7 sm:h-36 sm:w-28">
                    <Image src={BUILDS_GALLERY[buildIndex][1]} alt="" fill sizes="112px" className="object-cover" />
                  </button>
                </div>
                <div className={`flex flex-col justify-between p-7 sm:p-10 lg:col-span-5 lg:p-12 ${buildIndex === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">352pcs / {t.buildsTitle}</p>
                    <h4 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-4xl">{build.title}</h4>
                    <p className="mt-5 max-w-md text-sm leading-7 text-stone-400">{build.description}</p>
                  </div>
                  <a href="#contact" className="mt-9 inline-flex w-fit items-center gap-3 border-b border-blue-300/50 pb-2 text-xs font-black uppercase tracking-[0.16em] text-blue-300 transition-colors hover:border-blue-400 hover:text-white">{t.contactCta}<span aria-hidden="true">↗</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative overflow-hidden border-y border-white/[0.06] bg-[#0b111d] px-6 py-16 sm:py-24">
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-indigo-600/[0.08] blur-[110px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300">352pcs / {t.pricingTitle}</p>
            <h3 className="max-w-md text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl">{t.pricingTitle}</h3>
            <p className="mt-6 max-w-md text-sm leading-6 text-slate-400">{t.pricingIntro}</p>
          </div>
          <div>
            {t.prices.map((p, i) => (
              <div key={i} className="grid gap-3 border-t border-white/10 py-6 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8 sm:py-7">
                <div>
                  <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">0{i + 1} / {p.label}</span>
                  <p className="max-w-xl text-sm leading-6 text-slate-400">{p.desc}</p>
                </div>
                <span className="text-3xl font-black tracking-tight text-white sm:min-w-36 sm:text-right">
                  {p.fixed ? p.cost : <><span className="mr-1 text-xs font-bold uppercase text-slate-500">{t.fromText}</span>{p.cost}</>}
                </span>
              </div>
            ))}
            <div className="border-t border-white/10" />
            {t.extraPrice && (
              <div className="flex flex-col gap-4 border-b border-white/10 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:py-7">
                <div>
                  <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">+ / {t.extraPrice.label}</span>
                  <p className="max-w-xl text-sm leading-6 text-slate-400">{t.extraPrice.desc}</p>
                </div>
                <span className="text-3xl font-black tracking-tight text-white sm:min-w-36 sm:text-right">
                  <span className="mr-1 text-xs font-bold uppercase text-slate-500">{t.fromText}</span>{t.extraPrice.cost}
                </span>
              </div>
            )}
            <p className="mt-6 text-xs leading-5 text-slate-500">{t.disclaimer}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#070a12] px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl border-y border-white/10 py-7 sm:py-9">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">{t.businessTitle}</h3>
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-blue-300">352pcs / {t.businessTitle}</span>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.businessItems.map((item, i) => (
              <div key={i} className="border-t border-white/[0.07] py-5">
                <span className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.17em] text-blue-300">0{i + 1} / {item.label}</span>
                <p className="text-sm leading-6 text-slate-300">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#080c15] px-6 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 border-b border-white/10 pb-6 sm:mb-12">
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">352pcs / FAQ</p>
            <h3 className="text-4xl font-black uppercase tracking-[-0.04em] text-white sm:text-5xl">{t.faqTitle}</h3>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {t.faqs.map((faq, i) => (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors sm:py-6"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="pr-4 text-sm font-bold text-slate-100">{faq.q}</span>
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center border border-blue-300/25 font-mono text-lg text-blue-300">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div id={`faq-answer-${i}`} className="max-w-2xl pb-6 pr-12">
                    <p className="text-sm leading-6 text-slate-400">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-white/[0.06] bg-[#0b1220] px-6 py-16 sm:py-24">
        <div className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-blue-600/[0.12] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl border border-white/[0.09] bg-[#080c15]/80 p-6 shadow-[0_35px_90px_rgba(0,0,0,0.35)] sm:p-9 lg:p-12">
          <div className="mb-10 sm:mb-12">
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">352pcs / {t.contactTitle}</p>
            <h3 className="mb-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{t.contactTitle}</h3>
            <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{t.contactIntro}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/[0.07] p-5 transition-all hover:border-[#25D366]/60 hover:bg-[#25D366]/[0.1] group sm:p-6"
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
                className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all hover:border-blue-400/25 hover:bg-white/[0.045] group sm:p-6"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <span className="text-[10px] font-black text-[rgb(72,177,255)] uppercase tracking-[0.2em] block mb-1">{t.phoneLabel}</span>
                  <span className="text-xl font-black group-hover:text-[rgb(72,177,255)] transition-colors">{PHONE_DISPLAY}</span>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all hover:border-blue-400/25 hover:bg-white/[0.045] group sm:p-6"
              >
                <span className="text-2xl">✉️</span>
                <div>
                  <span className="text-[10px] font-black text-[rgb(72,177,255)] uppercase tracking-[0.2em] block mb-1">{t.emailLabel}</span>
                  <span className="text-lg font-bold text-slate-300 group-hover:text-[rgb(72,177,255)] transition-colors break-all">{EMAIL}</span>
                </div>
              </a>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
                <span className="text-[10px] font-black text-[rgb(72,177,255)] uppercase tracking-[0.2em] block mb-4">{t.formTitle}</span>
                <ContactForm t={t} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-white/[0.08] bg-[#101722]/70 p-5 sm:p-6">
                <span className="text-[10px] font-black text-[rgb(72,177,255)] uppercase block mb-4 tracking-widest">{t.locationLabel}</span>
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
                  className="mt-4 inline-flex items-center gap-2 text-[10px] font-black text-[rgb(72,177,255)] uppercase tracking-widest hover:opacity-100 opacity-70 transition-opacity"
                >
                  {t.mapPrompt} →
                </a>
              </div>

              <div className="flex flex-col items-center rounded-3xl border border-white/[0.08] bg-[#101722]/70 p-8">
                <span className="text-[10px] font-black text-[rgb(72,177,255)] uppercase block mb-4 tracking-widest">Instagram</span>
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

      <footer className="border-t border-white/10 bg-[#070a12] px-6 py-8 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-stone-500">
          <span className="text-blue-300">352PCS</span> · {t.footer} © 2026
        </p>
      </footer>

      {selectedPhoto && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-[#02040a]/95 p-4 backdrop-blur-xl" role="presentation" onClick={() => setSelectedPhoto(null)}>
          <div className="photo-modal-panel w-full max-w-6xl border border-blue-300/25 bg-[#080c15] p-3 shadow-[0_0_100px_rgba(48,111,255,0.18)] sm:p-5" role="dialog" aria-modal="true" aria-label={selectedPhoto.alt} onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between gap-4 border-b border-white/10 px-1 pb-3">
              <p className="truncate font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">{selectedPhoto.alt}</p>
              <button type="button" autoFocus onClick={() => setSelectedPhoto(null)} className="shrink-0 border border-white/15 px-3 py-2 text-[9px] font-black uppercase tracking-widest text-blue-300 transition-colors hover:border-blue-400/50 hover:text-white">{t.photoCloseLabel} <span aria-hidden="true">×</span></button>
            </div>
            <div className="relative h-[min(78svh,900px)] w-full">
              <Image src={selectedPhoto.src} alt={selectedPhoto.alt} fill sizes="95vw" className="object-contain" />
            </div>
          </div>
        </div>
      )}

      <FloatingWhatsApp label={t.whatsappCta} />
    </div>
  );
}
