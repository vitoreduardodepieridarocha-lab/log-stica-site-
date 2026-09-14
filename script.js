const WHATSAPP = "5521999999999";
const INSTAGRAM = "https://www.instagram.com/moonlogistica/";
const translations = {
  pt: {
    navHome:"Início",navServices:"Serviços",navQuote:"Simular",navTrack:"Rastreamento",navContact:"Contato",quoteBtn:"Solicitar cotação",
    eyebrow:"LOGÍSTICA • TRANSPORTE • CONEXÃO GLOBAL",heroTitle:"Sua carga em movimento.<br><em>Seu negócio sem limites.</em>",
    heroText:"Soluções logísticas com agilidade, segurança e transparência para conectar o Brasil ao mundo — com experiência especial em operações com a China.",
    heroPrimary:"Simular minha carga",heroSecondary:"Conhecer serviços",stat1:"importações realizadas",stat2:"desde nossa fundação",stat3:"especialistas",live:"Operação acompanhada",
    servicesEyebrow:"SOLUÇÕES MON",servicesTitle:"Logística pensada para<br><em>o mundo real.</em>",servicesText:"Do planejamento ao destino, a MON acompanha sua operação para que sua carga avance com previsibilidade.",
    service1:"Transporte marítimo",service1p:"Operações internacionais para cargas de diferentes perfis e volumes.",service2:"Transporte aéreo",service2p:"Alternativas para operações que exigem velocidade e planejamento.",service3:"Logística internacional",service3p:"Coordenação de cargas entre origens, destinos e diferentes etapas.",service4:"Brasil ↔ China",service4p:"Experiência e atenção especial em operações ligadas ao mercado chinês.",learn:"Ver solução →",
    whyEyebrow:"POR QUE A MON",whyTitle:"Não movemos apenas cargas.<br><em>Movemos resultados.</em>",whyText:"Uma operação logística precisa de mais do que transporte. Precisa de acompanhamento, informação clara e suporte quando cada etapa importa.",trackNow:"Acompanhar uma carga →",
    f1:"Segurança",f1p:"Processos acompanhados e comunicação clara.",f2:"Agilidade",f2p:"Planejamento para reduzir atritos e atrasos.",f3:"Rastreamento",f3p:"Visibilidade do desenvolvimento da operação.",f4:"Suporte",f4p:"Especialistas disponíveis durante a jornada.",
    simEyebrow:"SIMULAÇÃO DE FRETE",simTitle:"Descubra uma estimativa<br><em>para sua carga.</em>",simText:"Informe origem, destino, peso e modalidade. O simulador gera uma estimativa para você ter uma referência inicial.",simNote:"Estimativa demonstrativa. O valor final depende de características da carga e da operação.",
    from:"Origem",to:"Destino",weight:"Peso da carga (kg)",mode:"Modalidade",road:"Rodoviário",air:"Aéreo",sea:"Marítimo",international:"Internacional",cargo:"Tipo de carga",service:"Serviço",calculate:"Calcular estimativa",estimated:"Estimativa aproximada",sendQuote:"Enviar esta simulação pelo WhatsApp",
    trackEyebrow:"MON TRACK",trackTitle:"Acompanhe o desenvolvimento<br><em>da sua operação.</em>",trackText:"Digite um código de rastreio para visualizar o status de uma operação.",trackButton:"Rastrear carga →",demoCodes:"Códigos demonstrativos: MON2026BR001 • MON2026BR002 • MON2026CN003",
    n1:"operações de importação",n2:"ano de fundação",n3:"profissionais",n4:"conexão internacional",feedbackEyebrow:"FEEDBACKS",feedbackTitle:"Quem confia,<br><em>fala por nós.</em>",instagram:"Ver mais no Instagram ↗",
    storyEyebrow:"POR TRÁS DA OPERAÇÃO",storyTitle:"Uma história construída<br><em>com persistência.</em>",storyText:"Fundada em 2017, a MON atravessou anos de desafios e transformação até consolidar sua atuação. Hoje, leva para cada operação a experiência construída ao longo dessa trajetória.",map:"Conhecer nossa região — Tijuca, Rio de Janeiro ↗",
    contactEyebrow:"VAMOS CONVERSAR",contactTitle:"Sua próxima operação<br><em>começa aqui.</em>",whatsapp:"Falar pelo WhatsApp →",email:"Enviar e-mail",footerText:"Logística e transporte para conectar negócios ao mundo.",footerNav:"NAVEGAÇÃO",footerContact:"CONTATO",modalQuote:"Simular esta operação →"
  },
  en: {
    navHome:"Home",navServices:"Services",navQuote:"Quote",navTrack:"Tracking",navContact:"Contact",quoteBtn:"Request a quote",
    eyebrow:"LOGISTICS • TRANSPORT • GLOBAL CONNECTION",heroTitle:"Your cargo in motion.<br><em>Your business without limits.</em>",
    heroText:"Logistics solutions with agility, security and transparency connecting Brazil to the world — with special expertise in China-related operations.",
    heroPrimary:"Simulate my cargo",heroSecondary:"Explore services",stat1:"imports completed",stat2:"founded in",stat3:"specialists",live:"Operation monitored",
    servicesEyebrow:"MON SOLUTIONS",servicesTitle:"Logistics designed for<br><em>the real world.</em>",servicesText:"From planning to destination, MON follows your operation so your cargo moves with predictability.",
    service1:"Ocean freight",service1p:"International operations for different cargo profiles and volumes.",service2:"Air freight",service2p:"Alternatives for operations that require speed and planning.",service3:"International logistics",service3p:"Cargo coordination across origins, destinations and multiple stages.",service4:"Brazil ↔ China",service4p:"Experience and special attention to China-related operations.",learn:"View solution →",
    whyEyebrow:"WHY MON",whyTitle:"We don't just move cargo.<br><em>We move results.</em>",whyText:"A logistics operation needs more than transportation. It needs monitoring, clear information and support when every step matters.",trackNow:"Track a shipment →",
    f1:"Security",f1p:"Monitored processes and clear communication.",f2:"Agility",f2p:"Planning designed to reduce friction and delays.",f3:"Tracking",f3p:"Visibility throughout the operation.",f4:"Support",f4p:"Specialists available throughout the journey.",
    simEyebrow:"FREIGHT ESTIMATE",simTitle:"Discover an estimate<br><em>for your cargo.</em>",simText:"Enter origin, destination, weight and mode. The simulator provides an initial reference estimate.",simNote:"Demonstration estimate. Final pricing depends on cargo and operation details.",
    from:"Origin",to:"Destination",weight:"Cargo weight (kg)",mode:"Mode",road:"Road",air:"Air",sea:"Ocean",international:"International",cargo:"Cargo type",service:"Service",calculate:"Calculate estimate",estimated:"Approximate estimate",sendQuote:"Send this estimate on WhatsApp",
    trackEyebrow:"MON TRACK",trackTitle:"Follow the development<br><em>of your operation.</em>",trackText:"Enter a tracking code to view an operation status.",trackButton:"Track cargo →",demoCodes:"Demo codes: MON2026BR001 • MON2026BR002 • MON2026CN003",
    n1:"import operations",n2:"year founded",n3:"professionals",n4:"international connection",feedbackEyebrow:"FEEDBACK",feedbackTitle:"Those who trust us<br><em>speak for us.</em>",instagram:"See more on Instagram ↗",
    storyEyebrow:"BEHIND THE OPERATION",storyTitle:"A story built<br><em>with persistence.</em>",storyText:"Founded in 2017, MON went through years of challenges and transformation before consolidating its operation. Today, every shipment carries the experience built throughout that journey.",map:"Explore our area — Tijuca, Rio de Janeiro ↗",
    contactEyebrow:"LET'S TALK",contactTitle:"Your next operation<br><em>starts here.</em>",whatsapp:"Talk on WhatsApp →",email:"Send email",footerText:"Logistics and transportation connecting businesses to the world.",footerNav:"NAVIGATION",footerContact:"CONTACT",modalQuote:"Simulate this operation →"
  }
};

const serviceData = {
  maritimo:{pt:["Transporte marítimo","Uma solução para operações internacionais que exigem planejamento, coordenação e previsibilidade.","Planejamento de embarque","Acompanhamento da operação","Suporte durante o processo"],en:["Ocean freight","A solution for international operations that require planning, coordination and predictability.","Shipment planning","Operation monitoring","Support throughout the process"]},
  aereo:{pt:["Transporte aéreo","Uma alternativa para cargas e operações em que velocidade e planejamento têm papel central.","Planejamento de embarque","Coordenação de etapas","Acompanhamento da operação"],en:["Air freight","An alternative for cargo and operations where speed and planning are essential.","Shipment planning","Stage coordination","Operation monitoring"]},
  internacional:{pt:["Logística internacional","Coordenação logística para conectar diferentes origens, destinos e etapas de uma operação.","Coordenação de transporte","Visibilidade da operação","Suporte especializado"],en:["International logistics","Logistics coordination connecting different origins, destinations and operation stages.","Transport coordination","Operation visibility","Specialist support"]},
  china:{pt:["Brasil ↔ China","Experiência e atenção especial para operações relacionadas ao mercado chinês, conectando origens e destinos.","Operações China–Brasil","Acompanhamento logístico","Suporte ao cliente"],en:["Brazil ↔ China","Experience and special attention for China-related operations, connecting origins and destinations.","China–Brazil operations","Logistics monitoring","Customer support"]}
};

const trackingData = {
  MON2026BR001:{status:"Em trânsito",enStatus:"In transit",route:"São Paulo, BR → Salvador, BR",events:[["Coleta realizada","12/09/2026","done"],["Carga em trânsito","13/09/2026","current"],["Chegada ao destino","Previsão 16/09",""],["Entrega","Previsão 17/09",""]]},
  MON2026BR002:{status:"Em processamento",enStatus:"Processing",route:"Rio de Janeiro, BR → Belo Horizonte, BR",events:[["Pedido recebido","13/09/2026","done"],["Em processamento","14/09/2026","current"],["Em trânsito","Previsão 15/09",""],["Entrega","Previsão 16/09",""]]},
  MON2026CN003:{status:"Em trânsito internacional",enStatus:"International transit",route:"Shenzhen, CN → Rio de Janeiro, BR",events:[["Carga recebida","08/09/2026","done"],["Em trânsito internacional","10/09/2026","current"],["Chegada ao Brasil","Previsão 24/09",""],["Entrega","Previsão 29/09",""]]}
};

let lang = localStorage.getItem("mon-lang") || "pt";
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function applyLanguage(){
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  $$("[data-i18n]").forEach(el => { const key=el.dataset.i18n; if(translations[lang][key]) el.innerHTML=translations[lang][key]; });
  $("#langToggle").textContent = lang === "pt" ? "EN" : "PT";
  localStorage.setItem("mon-lang",lang);
}
applyLanguage();

$("#langToggle").addEventListener("click",()=>{lang=lang==="pt"?"en":"pt";applyLanguage();showToast(lang==="pt"?"Idioma: Português":"Language: English")});

const header=$("#header"), backTop=$("#backTop");
window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",scrollY>20);
  backTop.classList.toggle("show",scrollY>500);
});
backTop.onclick=()=>scrollTo({top:0,behavior:"smooth"});

const menuBtn=$("#menuBtn"), nav=$("#mainNav");
menuBtn.onclick=()=>nav.classList.toggle("open");
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
$$(".reveal").forEach(el=>observer.observe(el));

const modal=$("#serviceModal");
function openService(key){
  const d=serviceData[key][lang];
  $("#modalTitle").textContent=d[0];
  $("#modalText").textContent=d[1];
  $("#modalPoints").innerHTML=d.slice(2).map(x=>`<div>✓ ${x}</div>`).join("");
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
$$(".service-card").forEach(card=>card.addEventListener("click",()=>openService(card.dataset.service)));
$$("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

function money(v){return v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}
$("#quoteForm").addEventListener("submit",e=>{
  e.preventDefault();
  const origin=$("#origin").value.trim(), destination=$("#destination").value.trim(), weight=parseFloat($("#weight").value);
  const mode=$("#mode").value, level=$("#serviceLevel").value;
  const rates={rodoviario:7.2,aereo:29,maritimo:5.8,internacional:12};
  const multipliers={standard:1,express:1.35,premium:1.7};
  let price=Math.max(95,weight*rates[mode]*multipliers[level]+85);
  if(mode==="maritimo") price+=120;
  if(mode==="internacional") price+=260;
  const days={rodoviario:"3–7 dias úteis",aereo:"1–3 dias úteis",maritimo:"18–35 dias úteis",internacional:"7–20 dias úteis"}[mode];
  $("#quotePrice").textContent=money(price);
  $("#quoteRoute").textContent=`${origin} → ${destination}`;
  $("#quoteTime").textContent=days;
  const msg=`Olá! Vim pelo site da MON Logística e gostaria de solicitar uma cotação.%0A%0AOrigem: ${encodeURIComponent(origin)}%0ADestino: ${encodeURIComponent(destination)}%0APeso: ${weight} kg%0AModalidade: ${encodeURIComponent(mode)}%0AServiço: ${encodeURIComponent(level)}%0AEstimativa do site: ${encodeURIComponent(money(price))}`;
  $("#quoteWhatsapp").href=`https://wa.me/${WHATSAPP}?text=${msg}`;
  $("#quoteResult").classList.add("show");
  $("#quoteResult").scrollIntoView({behavior:"smooth",block:"nearest"});
});

function renderTracking(code){
  const key=code.trim().toUpperCase(), d=trackingData[key];
  if(!d){showToast(lang==="pt"?"Código não encontrado. Use um dos códigos demonstrativos.":"Code not found. Use one of the demo codes.");return}
  $("#trackTitleResult").textContent=`${lang==="pt"?"Operação":"Operation"} ${key}`;
  $("#trackStatus").textContent=lang==="pt"?d.status:d.enStatus;
  $("#timeline").innerHTML=d.events.map((x,i)=>`<div class="timeline-step ${x[2]}"><div class="timeline-dot">${x[2]==="done"?"✓":i+1}</div><div><strong>${lang==="pt"?x[0]:translateEvent(x[0])}</strong><span>${x[1]}</span></div></div>`).join("");
  $("#trackingResult").classList.add("show");
}
function translateEvent(s){
  const m={"Coleta realizada":"Pickup completed","Carga em trânsito":"Cargo in transit","Chegada ao destino":"Destination arrival","Entrega":"Delivery","Pedido recebido":"Order received","Em processamento":"Processing","Em trânsito":"In transit","Carga recebida":"Cargo received","Em trânsito internacional":"International transit","Chegada ao Brasil":"Arrival in Brazil"};
  return m[s]||s;
}
$("#trackingForm").addEventListener("submit",e=>{e.preventDefault();renderTracking($("#trackingCode").value)});

function showToast(text){const t=$("#toast");t.textContent=text;t.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove("show"),2800)}
function openWhatsApp(){window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Vim pelo site da MON Logística e gostaria de falar com um especialista.")}`,"_blank","noopener")}
$("#floatingWhatsapp").addEventListener("click",openWhatsApp);
$("#whatsappLink").addEventListener("click",()=>{});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const target=document.querySelector(a.getAttribute("href"));
  if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"});nav.classList.remove("open");}
}));
