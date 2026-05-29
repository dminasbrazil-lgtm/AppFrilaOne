import { useState, useEffect, useRef, useCallback } from "react";
const tokens = {
primary: "#FF4D00", primaryLight: "#FF6B35", primaryGlow: "rgba(255,77,0,0.25)",
dark: "#0A0E1A", dark2: "#111827", dark3: "#1A2234", card: "#1E2A3A", card2: "#243045",
border: "rgba(255,255,255,0.07)", text: "#F0F4FF", muted: "#6B7A99", muted2: "#8A9AB8",
green: "#00D68F", blue: "#4D9FFF", yellow: "#FFB800", red: "#FF4757", purple: "#9B5DFF",
};
const FOTO_BARBEARIA = "";
const FOTO_MANICURE = "";
const mockData = {
user: { id:"u1", name:"Rafael Moura", role:"Desenvolvedor Full Stack", avatar:"👨‍💻", plan:"pro", balance:3840.0, rating:4.9, verified:true },
categories: [{ id:"all", label:"Todos" },{ id:"dev", label:"Dev" },{ id:"design", label:"Design" },{ id:"video", label:"Vídeo" },{ id:"copy", label:"Copy" },{ id:"mkt", label:"Marketing" },{ id:"foto", label:"Foto" }],
freelancers: [
{ id:"f1", name:"Ana Costa", role:"UI/UX Designer", avatar:"👩‍🎨", category:"design", rating:4.9, reviews:132, price:"Rlatex
 150/h", verified:true, tags:["Figma","Webflow","Branding"], desc:"Especialista em design de produtos digitais com foco em conversão e experiência do usuário.", badge:{ label:"Top Designer", color:"purple" } }, { id:"f2", name:"Lucas Mendes", role:"Dev React Native", avatar:"👨‍💻", category:"dev", rating:4.8, reviews:89, price:"R

 180/h", verified:true, tags:["React","Node.js","AWS"], desc:"10 anos de experiência em apps mobile e sistemas escaláveis para startups e enterprise.", badge:{ label:"Destaque", color:"orange" } },
{ id:"f3", name:"Carla Lima", role:"Motion Designer", avatar:"👩‍🎬", category:"video", rating:5.0, reviews:47, price:"Rlatex
 120/h", verified:false, tags:["After Effects","Cinema 4D"], desc:"Criação de animações e vídeos institucionais para marcas que querem se destacar.", badge:{ label:"Novo", color:"green" } }, { id:"f4", name:"Pedro Alves", role:"Copywriter SEO", avatar:"✍️", category:"copy", rating:4.7, reviews:203, price:"R

 80/h", verified:true, tags:["SEO","Blog","Email Mkt"], desc:"Redação estratégica focada em conversão, ranqueamento e autoridade de marca.", badge:{ label:"Pro", color:"blue" } },
],
chats: [
{ id:"c1", name:"Ana Costa", avatar:"👩‍🎨", preview:"Posso começar na segunda!", time:"10:32", unread:2, online:true },
{ id:"c2", name:"Lucas Mendes", avatar:"👨‍💻", preview:"Portfólio enviado ✅", time:"09:15", unread:0, online:true },
{ id:"c3", name:"FrilaOne Bot", avatar:"🤖", preview:"Como posso ajudar?", time:"Ontem", unread:1, online:true },
],
transactions: [
{ id:"t1", name:"Projeto E-commerce", date:"26 mai", amount:2400, type:"in", icon:"💼", bg:"rgba(0,214,143,0.1)" },
{ id:"t2", name:"Assinatura Pro", date:"20 mai", amount:59.9, type:"out", icon:"⭐", bg:"rgba(255,77,0,0.1)" },
{ id:"t3", name:"Landing Page", date:"15 mai", amount:1200, type:"in", icon:"🎨", bg:"rgba(77,159,255,0.1)" },
{ id:"t4", name:"Saque Pix", date:"10 mai", amount:800, type:"out", icon:"💸", bg:"rgba(155,93,255,0.1)" },
],
promoSlides: [
{ emoji:"⚡", tag:"Bem-vindo", tagColor:"#FF4D00", title:"Tudo em um só lugar", sub:"Conectamos freelancers, profissionais físicos e empresas de forma simples e rápida", bg:"linear-gradient(135deg,#1A0E0A,#2E1608)" },
{ emoji:"📋", tag:"Vagas", tagColor:"#4D9FFF", title:"Vagas para todo tipo de trabalho", sub:"Encontre oportunidades digitais, presenciais e híbridas atualizadas diariamente", bg:"linear-gradient(135deg,#0D1B3E,#162850)" },
{ emoji:"🎓", tag:"Profissional", tagColor:"#00D68F", title:"Se formou? Comece a faturar", sub:"Cadastre seu perfil, mostre seu portfólio e receba proposta de clientes reais", bg:"linear-gradient(135deg,#061A12,#0D2E1E)" },
{ emoji:"🏢", tag:"Empresas", tagColor:"#FFB800", title:"Encontre o profissional certo", sub:"Contrate talentos verificados para seu negócio com agilidade e segurança total", bg:"linear-gradient(135deg,#1A1500,#2E2300)" },
{ emoji:"📣", tag:"Anuncie", tagColor:"#9B5DFF", title:"Sua empresa aqui dentro", sub:"Anuncie sua marca para milhares de profissionais e clientes ativos no app", bg:"linear-gradient(135deg,#0F0A1A,#1E1030)" },
],
vagasFisicas: [
{ id:"vf1", titulo:"Motoboy", tipo:"Presencial", emoji:"🏍️", local:"São Paulo, SP", faixa:"Rlatex
 80–200/dia", desc:"Entregas rápidas para restaurantes e e-commerces. Moto própria necessária.", tags:["Moto própria","CNH A","Disponibilidade"], urgente:true, badge:{ label:"Urgente", color:"red" } }, { id:"vf2", titulo:"Criador de Conteúdo", tipo:"Remoto", emoji:"🎬", local:"Remoto", faixa:"R

 1.500–4.000/mês", desc:"Produção de vídeos curtos para redes sociais, roteiro e edição incluídos.", tags:["Instagram","TikTok","Reels"], urgente:false, badge:{ label:"Digital", color:"purple" } },
{ id:"vf3", titulo:"Auxiliar de Produção", tipo:"Presencial", emoji:"🏭", local:"Guarulhos, SP", faixa:"Rlatex
 1.800–2.400/mês", desc:"Apoio nas linhas de montagem e controle de qualidade em empresa de médio porte.", tags:["Produção","Qualidade","Turno"], urgente:false, badge:{ label:"Físico", color:"green" } }, ], }; const GlobalStyle = () =&gt; ( � {` @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap'); *{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent} body{font-family:'DM Sans',sans-serif;background:#12141C;display:flex;justify-content:center;align-items:center;min-height:100vh;padding:0;overflow:hidden} ::-webkit-scrollbar{display:none} input,select,textarea,button{font-family:'DM Sans',sans-serif} @keyframes radarPulse{0%,100%{box-shadow:0 0 0 0 rgba(255,77,0,0.3)}50%{box-shadow:0 0 0 10px rgba(255,77,0,0)}} @keyframes blink{0%,100%{opacity:1}50%{opacity:0}} @keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}} @keyframes fadeIn{from{opacity:0}to{opacity:1}} @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}} `} ); function useToast() { const [toast, setToast] = useState(null); const show = useCallback((msg, type = "success") =&gt; { setToast({ msg, type }); setTimeout(() =&gt; setToast(null), 2800); }, []); return { toast, show }; } function useCarousel(length, interval = 3800) { const [idx, setIdx] = useState(0); useEffect(() =&gt; { const t = setInterval(() =&gt; setIdx(i =&gt; (i + 1) % length), interval); return () =&gt; clearInterval(t); }, [length, interval]); return [idx, setIdx]; } const Badge = ({ label, color }) =&gt; { const map = { orange:{ bg:"rgba(255,77,0,0.15)", fg:tokens.primary }, green:{ bg:"rgba(0,214,143,0.15)", fg:tokens.green }, blue:{ bg:"rgba(77,159,255,0.15)", fg:tokens.blue }, yellow:{ bg:"rgba(255,184,0,0.15)", fg:tokens.yellow }, purple:{ bg:"rgba(155,93,255,0.15)", fg:tokens.purple } }; const c = map[color] || map.orange; return &lt;span style={{ display:"inline-flex",alignItems:"center",padding:"3px 8px",borderRadius:6,fontSize:10,fontWeight:700,fontFamily:"Syne,sans-serif",background:c.bg,color:c.fg }}&gt;{label}; }; const Btn = ({ children, variant = "primary", onClick, style = {}, small }) =&gt; { const base = { display:"flex",justifyContent:"center",alignItems:"center",gap:8,border:"none",cursor:"pointer",fontFamily:"Syne,sans-serif",fontWeight:700,letterSpacing:"0.2px",transition:"all 0.2s",borderRadius:small?10:14,padding:small?"9px 16px":"14px 20px",fontSize:small?12:14,width:small?"auto":"100%" }; const vars = { primary:{ background:linear-gradient(135deg,

{tokens.primary},latex
{tokens.primaryLight}),color:"#fff",boxShadow:0 8px 24px 

{tokens.primaryGlow} },
secondary:{ background:tokens.dark3,color:tokens.text,border:1px solid latex
{tokens.border} }, green:{ background:linear-gradient(135deg,

{tokens.green},#00b87a),color:"#000" },
outline:{ background:"transparent",color:tokens.primary,border:1.5px solid latex
{tokens.primary} }, ghost:{ background:"transparent",color:tokens.muted,border:1px solid 

{tokens.border} },
};
return {children};
};
const Toggle = ({ on, onChange }) => (
�
onChange(!on)} style={{ width:44,height:24,background:on?tokens.green:tokens.dark3,borderRadius:30,position:"relative",cursor:"pointer",transition:"background 0.3s",flexShrink:0,border:1px solid ${tokens.border}` }}>

);


const Toast = ({ toast }) => (
�
{toast?.msg}

);
const BottomSheet = ({ open, onClose, title, subtitle, children }) => (
<>
<div onClick={onClose} style={{ position:"absolute",inset:0,background:"rgba(0,0,0,0.7)",zIndex:500,opacity:open?1:0,pointerEvents:open?"all":"none",transition:"opacity 0.3s",backdropFilter:"blur(4px)" }} />
<div style={{ position:"absolute",bottom:0,left:0,width:"100%",background:"#0D1B3E",borderRadius:"24px 24px 0 0",padding:24,maxHeight:"85vh",overflowY:"auto",zIndex:501,transform:open?"translateY(0)":"translateY(100%)",transition:"transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
<div style={{ width:40,height:4,background:"rgba(255,255,255,0.15)",borderRadius:2,margin:"0 auto 20px" }} />
{title && <div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:20,color:tokens.text,marginBottom:4 }}>{title}}
{subtitle && <div style={{ fontSize:13,color:tokens.muted,marginBottom:20 }}>{subtitle}}
{children}

</>
);
const FormField = ({ label, children }) => (
�
{label && {label}} {children}

);
const Input = ({ placeholder, type = "text", value, onChange }) => (
<input type={type} placeholder={placeholder} value={value} onChange={onChange} style={{ width:"100%",padding:"14px 16px",background:tokens.dark3,border:1px solid `${tokens.border},borderRadius:12,color:tokens.text,fontFamily:"DM Sans,sans-serif",fontSize:14,outline:"none" }} />
);
const AuthScreen = ({ onLogin }) => {
const [tab, setTab] = useState("login");
const [accType, setAccType] = useState("freelancer");
const accTypes = [
{ id:"freelancer", icon:"🧑‍💻", label:"Sou Freelancer", sub:"Ofereço serviços e busco projetos" },
{ id:"empresa", icon:"🏢", label:"Sou Empresa", sub:"Contrato talentos para meus projetos" },
];
return (
<div style={{ position:"absolute",inset:0,background:tokens.dark,zIndex:999,display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 28px",overflowY:"auto" }}>
<div style={{ textAlign:"center",marginBottom:24,marginTop:24,width:"100%" }}>
<div style={{ width:80,height:80,background:"#0D1B3E",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",boxShadow:"0 0 40px rgba(255,184,0,0.3)",fontSize:28 }}>⚡
<h1 style={{ fontFamily:"Syne,sans-serif",fontSize:32,fontWeight:800,color:tokens.text }}>Frila<span style={{ color:tokens.primary }}>One
<p style={{ color:tokens.muted,fontSize:13,marginTop:6 }}>O marketplace dos melhores freelancers

<div style={{ display:"flex",gap:8,marginBottom:20,width:"100%" }}>
{[{icon:"🔒",title:"100% Seguro",sub:"Pagamento protegido"},{icon:"⚡",title:"Rápido",sub:"Match em minutos"},{icon:"⭐",title:"Verificado",sub:"Talentos avaliados"}].map(b => (
<div key={b.title} style={{ flex:1,background:tokens.dark3,border:1px solid $`{tokens.border},borderRadius:14,padding:"10px 6px",display:"flex",flexDirection:"column",alignItems:"center",gap:5,textAlign:"center" }}>
<div style={{ fontSize:22 }}>{b.icon}
<div style={{ fontFamily:"Syne,sans-serif",fontSize:10,fontWeight:800,color:tokens.text,lineHeight:1.2 }}>{b.title}
<div style={{ fontSize:9,color:tokens.muted,lineHeight:1.2 }}>{b.sub}

))}

<div style={{ display:"flex",background:tokens.dark3,borderRadius:12,padding:4,marginBottom:20,width:"100%",gap:4 }}>
{[["login","Entrar"],["register","Cadastrar"]].map(([t,l]) => (
<button key={t} onClick={() => setTab(t)} style={{ flex:1,padding:10,border:"none",borderRadius:9,fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,cursor:"pointer",transition:"all 0.2s",background:tab===t?tokens.primary:"transparent",color:tab===t?"#fff":tokens.muted,boxShadow:tab===t?0 4px 12px `${tokens.primaryGlow}:"none" }}>{l}
))}

{tab === "register" && (
<>
<div style={{ display:"flex",flexDirection:"column",gap:8,marginBottom:16,width:"100%" }}>
{accTypes.map(a => (
<div key={a.id} onClick={() => setAccType(a.id)} style={{ display:"flex",alignItems:"center",gap:12,padding:"12px 14px",background:accType===a.id?"rgba(255,77,0,0.06)":tokens.dark3,border:1.5px solid $`{accType===a.id?tokens.primary:tokens.border},borderRadius:14,cursor:"pointer" }}>
<div style={{ width:38,height:38,borderRadius:11,background:"rgba(255,77,0,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16 }}>{a.icon}
<div style={{ flex:1 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,color:tokens.text,marginBottom:2 }}>{a.label}
<div style={{ fontSize:11,color:tokens.muted }}>{a.sub}

<div style={{ width:20,height:20,borderRadius:"50%",border:2px solid `${accType===a.id?tokens.primary:tokens.border},display:"flex",alignItems:"center",justifyContent:"center",color:tokens.primary,fontSize:14 }}>{accType===a.id && "✓"}

))}

<div style={{ width:"100%",marginBottom:14 }}>


</>
)}
<div style={{ width:"100%",marginBottom:14 }}>



<Btn onClick={onLogin} style={{ marginBottom:16 }}>{tab==="login"?"⚡ Entrar agora":"🚀 Criar conta gratuita"}
<div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:16,color:tokens.muted,fontSize:12,width:"100%" }}>
<div style={{ flex:1,height:1,background:tokens.border }} /> ou <div style={{ flex:1,height:1,background:tokens.border }} />

<div style={{ display:"flex",gap:10,width:"100%" }}>
{[{icon:"G",label:"Google"},{icon:"📘",label:"Facebook"}].map(s => (
<button key={s.label} style={{ flex:1,padding:12,background:tokens.dark3,border:1px solid $`{tokens.border},borderRadius:12,color:tokens.text,fontSize:18,cursor:"pointer",textAlign:"center",transition:"all 0.2s" }}>{s.icon}
))}


);
};
const Header = ({ onNotif, onRadar, hasNotif }) => (
�
⚡

FrilaOne

Precisou? Tá na mão, tá no FrilaOne!

📡 🔔 {hasNotif &&

}

);
const PromoCarousel = () => {
const [idx, setIdx] = useCarousel(mockData.promoSlides.length, 4200);
const slides = mockData.promoSlides;
return (
<div style={{ borderRadius:18,marginBottom:16,overflow:"hidden" }}>
<div style={{ height:170,position:"relative",overflow:"hidden",borderRadius:18 }}>
<div style={{ display:"flex",height:"100%",transform:translateX(-${idx*100}%),transition:"transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)" }}&gt; {slides.map((s,i) =&gt; ( &lt;div key={i} style={{ minWidth:"100%",height:"100%",background:s.bg,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:18 }}&gt; &lt;div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:90,opacity:0.15 }}&gt;{s.emoji} &lt;div style={{ position:"absolute",top:0,right:0,width:"60%",height:"100%",background:linear-gradient(to left, ${s.tagColor}18, transparent) }} />
<div style={{ position:"relative",zIndex:2 }}>
<span style={{ display:"inline-block",padding:"3px 10px",borderRadius:20,fontSize:9,fontWeight:800,fontFamily:"Syne,sans-serif",textTransform:"uppercase",letterSpacing:.8,marginBottom:7,background:${s.tagColor}25,color:s.tagColor,border:1px solid ${s.tagColor}50 }}>{s.tag}
<div style={{ fontFamily:"Syne,sans-serif",fontSize:16,fontWeight:800,color:"#fff",lineHeight:1.25,marginBottom:4 }}>{s.title}
<div style={{ fontSize:11.5,color:"rgba(255,255,255,0.75)",lineHeight:1.4 }}>{s.sub}


))}


<div style={{ display:"flex",justifyContent:"center",gap:5,padding:"8px 0" }}>
{slides.map((_,i) => (
<button key={i} onClick={() => setIdx(i)} style={{ width:i===idx?20:5,height:5,borderRadius:3,background:i===idx?tokens.primary:"rgba(255,255,255,0.2)",border:"none",cursor:"pointer",transition:"all 0.35s" }} />
))}


);
};
const FreelancerCard = ({ f, onContact }) => (
�
{f.avatar}

{f.name} {f.verified && ✓ Verificado}

{f.role}

{f.desc}

{f.tags.map(t => {t})}

⭐ {f.rating} ({f.reviews})

{f.price} onContact(f)}>Contatar

);
const VagaFisicaCard = ({ v, onCandidatar }) => (
�
{v.emoji}

{v.titulo} {v.urgente && ● URGENTE}

{v.tipo} · {v.local}

{v.desc}

{v.tags.map(t => {t})}

{v.faixa} onCandidatar(v)}>Me candidatar

);
const produtosAfiliados = [
{ id:"pr1", foto:"", nome:"Tênis DM Damando", desc:"Esportivo · Leve · Confortável", preco:"R$ 89,90", precoAntes:"R$ 149,90", desconto:"40% OFF", cor:"linear-gradient(135deg,#0D1B3E,#162850)", borda:"rgba(77,159,255,0.4)", corDestaque:tokens.blue, link:"https://shopee.com.br" },
{ id:"pr2", foto:"", nome:"Sandália Feminina", desc:"Strass · Conforto · Elegância", preco:"R$ 59,90", precoAntes:"R$ 99,90", desconto:"40% OFF", cor:"linear-gradient(135deg,#2D0060,#1A0040)", borda:"rgba(155,93,255,0.4)", corDestaque:tokens.purple, link:"https://shopee.com.br" },
{ id:"pr3", foto:"", nome:"Relógio LIGE Azul", desc:"Aço inox · Quartzo · Masculino", preco:"R$ 139,99", precoAntes:"R$ 260,00", desconto:"46% OFF", cor:"linear-gradient(135deg,#0A0A1A,#1A1A3E)", borda:"rgba(255,184,0,0.4)", corDestaque:tokens.yellow, link:"https://shopee.com.br" },
{ id:"pr4", foto:"", nome:"Perfume Lancôme", desc:"Trésor · Fragrância sofisticada", preco:"R$ 189,90", precoAntes:"R$ 349,90", desconto:"45% OFF", cor:"linear-gradient(135deg,#2D0A1A,#1A0010)", borda:"rgba(255,71,87,0.4)", corDestaque:tokens.red, link:"https://shopee.com.br" },
{ id:"pr5", foto:"", nome:"Coleira + Guia Pet", desc:"Golden · Resistente · Florido", preco:"R$ 39,90", precoAntes:"R$ 79,90", desconto:"50% OFF", cor:"linear-gradient(135deg,#061A12,#0D2E1E)", borda:"rgba(0,214,143,0.4)", corDestaque:tokens.green, link:"https://shopee.com.br" },
];
const VitrineProdutos = () => {
const scrollRef = useRef(null);
return (
<div style={{ marginBottom:20 }}>
<div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10 }}>
<span style={{ fontFamily:"Syne,sans-serif",fontSize:15,fontWeight:800,color:tokens.text }}>🛍️ Ofertas do Dia
<span style={{ fontSize:11,color:tokens.muted }}>← deslize →

<div ref={scrollRef} style={{ display:"flex",gap:12,overflowX:"auto",paddingBottom:8,scrollbarWidth:"none",scrollSnapType:"x mandatory",WebkitOverflowScrolling:"touch" }}>
{produtosAfiliados.map(p => (
<a key={p.id} href={p.link} target="_blank" rel="noreferrer" style={{ flexShrink:0,width:140,background:p.cor,border:"1.5px solid rgba(100,100,255,0.4)",borderRadius:16,padding:14,cursor:"pointer",textDecoration:"none",scrollSnapAlign:"start",display:"flex",flexDirection:"column",gap:8 }}>
<div style={{ width:"100%",height:100,borderRadius:10,overflow:"hidden",background:"rgba(255,255,255,0.05)" }}>
{p.foto ? <img src={p.foto} alt={p.nome} style={{ width:"100%",height:"100%",objectFit:"cover" }} /> : <div style={{ width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32 }}>🛍️}

<div style={{ display:"inline-block",background:p.corDestaque,color:"#fff",fontSize:9,fontWeight:800,fontFamily:"Syne,sans-serif",padding:"2px 8px",borderRadius:20 }}>{p.desconto}
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:13,color:"#fff",lineHeight:1.2 }}>{p.nome}
<div style={{ fontSize:10,color:"rgba(255,255,255,0.6)" }}>{p.desc}
<div style={{ marginTop:"auto" }}>
<div style={{ fontSize:9,color:"rgba(255,255,255,0.4)",textDecoration:"line-through" }}>{p.precoAntes}
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:14,color:"#fff" }}>{p.preco}


))}


);
};
const anunciosExemplo = [
{ id:"a1", nome:"Academia FitMax", logo:"💪", cor:"linear-gradient(135deg,#0D1B3E,#162850)", borda:"rgba(77,159,255,0.5)", texto:"30 dias grátis para novos alunos!", sub:"Musculação · Crossfit · Yoga", cta:"Ver oferta →", ctaCor:tokens.blue },
{ id:"a2", nome:"Pizzaria do Zé", logo:"🍕", cor:"linear-gradient(135deg,#1A0E0A,#2E1608)", borda:"rgba(255,77,0,0.5)", texto:"Pizza G por R$ 39,90 hoje!", sub:"Delivery · Mooca, SP · Aberto agora", cta:"Pedir agora →", ctaCor:tokens.primary }, { id:"a3", nome:"Studio Ana Beleza", logo:"💇", cor:"linear-gradient(135deg,#1A0040,#2D0060)", borda:"rgba(155,93,255,0.5)", texto:"Corte + escova R$ 59 — só esta semana", sub:"Salão · Vila Madalena · WhatsApp", cta:"Agendar →", ctaCor:tokens.purple },
];
const BlocoAnuncios = ({ onAnunciar }) => {
const [idx, setIdx] = useCarousel(anunciosExemplo.length, 3500);
const a = anunciosExemplo[idx];
return (
<div style={{ marginBottom:20 }}>
<div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10 }}>
<span style={{ fontFamily:"Syne,sans-serif",fontSize:13,fontWeight:800,color:tokens.muted2,textTransform:"uppercase",letterSpacing:.8 }}>📣 Espaço Patrocinado
<span onClick={onAnunciar} style={{ fontSize:11,color:tokens.primary,fontWeight:700,cursor:"pointer",textDecoration:"underline" }}>Anuncie aqui

<div style={{ background:a.cor,border:1.5px solid `${a.borda},borderRadius:18,padding:16,position:"relative",overflow:"hidden",transition:"all 0.4s" }}>
<div style={{ position:"absolute",top:-20,right:-20,fontSize:80,opacity:0.12 }}>{a.logo}
<div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:10 }}>
<div style={{ width:44,height:44,borderRadius:14,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0 }}>{a.logo}

<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:14,color:"#fff" }}>{a.nome}
<div style={{ fontSize:10,color:"rgba(255,255,255,0.55)" }}>{a.sub}

<span style={{ marginLeft:"auto",fontSize:9,padding:"2px 7px",borderRadius:6,background:"rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.4)",fontWeight:700 }}>PATROCINADO

<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:16,color:"#fff",marginBottom:10,lineHeight:1.3 }}>{a.texto}
<span style={{ fontSize:12,fontWeight:700,color:a.ctaCor,cursor:"pointer" }}>{a.cta}

<div style={{ display:"flex",justifyContent:"center",gap:5,paddingTop:8 }}>
{anunciosExemplo.map((_,i) => (
<button key={i} onClick={() => setIdx(i)} style={{ width:i===idx?16:5,height:5,borderRadius:3,background:i===idx?tokens.primary:"rgba(255,255,255,0.15)",border:"none",cursor:"pointer",transition:"all 0.3s" }} />
))}


);
};
const FeedSlide = ({ onContact, showToast, onNavegar, onCandidatar, onAbrirVaga, onVitrine }) => (
�
Precisou? Tá na mão! FrilaOne.

onVitrine && onVitrine()} style={{ background:"linear-gradient(135deg,#0D1B3E,#162850)",border:"1.5px solid rgba(77,159,255,0.3)",borderRadius:16,padding:"14px 16px",marginBottom:16,cursor:"pointer",display:"flex",alignItems:"center",gap:14,position:"relative",overflow:"hidden" }}>

🤝

🤝

Vitrine & Parceiros

Negócios locais · Barbearia · Lanchonete · Manicure

›

O seu mercado de trabalho

Digital, físico e empresarial em um app

{[["2.000+","Profissionais ativos"],["850+","Vagas abertas"],["500+","Empresas cadastradas"]].map(([n,l]) => (

{n}

{l}

))}

O que você quer fazer hoje?

{[ { emoji:"🔍", label:"Buscar Vaga", sub:"Física ou digital", cor:tokens.primary, bg:"rgba(255,77,0,0.1)", border:"rgba(255,77,0,0.3)", aba:"vagas" }, { emoji:"💼", label:"Oferecer Serviço", sub:"Mostre seu talento", cor:tokens.green, bg:"rgba(0,214,143,0.1)", border:"rgba(0,214,143,0.3)", aba:"vagas" }, { emoji:"🏢", label:"Contratar", sub:"Encontre profissionais", cor:tokens.blue, bg:"rgba(77,159,255,0.1)", border:"rgba(77,159,255,0.3)", aba:"vagas" }, ].map(a => (

onNavegar(a.aba)} style={{ flex:1,background:a.bg,border:1.5px solid ${a.border}`,borderRadius:16,padding:"12px 6px",textAlign:"center",cursor:"pointer",transition:"all 0.2s" }}>

{a.emoji}

{a.label}

{a.sub}

))}

showToast("Vá em Planos → Anúncio Empresa para anunciar 📣")} />

Trabalho Físico & Digital

🔥 Vagas em Destaque onNavegar("vagas")} style={{ fontSize:12,color:tokens.primary,fontWeight:600,cursor:"pointer",padding:"4px 8px",borderRadius:8,background:"rgba(255,77,0,0.1)" }}>Ver todas →

{mockData.vagasFisicas.map(v => ( onCandidatar && onCandidatar(vg)} /> ))}

⭐ Destaque da Vitrine

onVitrine && onVitrine()} style={{ fontSize:11,color:tokens.purple,fontWeight:600,cursor:"pointer" }}>Ver todos →

{[ { id:"v1", nome:"Barbearia Kings", cor:"linear-gradient(135deg,#0D1B3E,#1a2d5e)", borda:"rgba(77,159,255,0.5)", servicos:["Corte masculino","Barba"], avaliacao:4.9, whatsapp:"5531999990001" }, { id:"v2", nome:"Studio Bella Manicure", cor:"linear-gradient(135deg,#1A0020,#2D0040)", borda:"rgba(255,71,87,0.5)", servicos:["Manicure","Pedicure"], avaliacao:4.9, whatsapp:"5531999990005" }, ].map((v,i) => (

onVitrine && onVitrine()} style={{ background:v.cor,border:1.5px solid${v.borda}`,borderRadius:16,padding:14,marginBottom:10,cursor:"pointer",display:"flex",gap:12,alignItems:"flex-start" }}>

{i===0?"✂️":"💅"}

{i===0?"⭐ #1 da semana":"🥈 #2 da semana"}

{v.nome}

{v.servicos.join(" · ")} · ⭐{v.avaliacao}

{ e.stopPropagation(); window.open(https://wa.me/${v.whatsapp}?text=Ola! Vi seu negocio na Vitrine do FrilaOne!`,"_blank"); }} style={{ display:"inline-flex",alignItems:"center",gap:5,background:"rgba(37,211,102,0.15)",border:"1px solid rgba(37,211,102,0.4)",borderRadius:20,padding:"5px 12px",cursor:"pointer" }}> 💬 Chamar no WhatsApp

))}

);


const categoriasServico = [
{ emoji:"🔧", label:"Encanador" },{ emoji:"⚡", label:"Eletricista" },{ emoji:"🎨", label:"Pintor" },
{ emoji:"🪚", label:"Carpinteiro" },{ emoji:"🔑", label:"Chaveiro" },{ emoji:"🏗️", label:"Pedreiro" },
{ emoji:"❄️", label:"Ar Condicionado" },{ emoji:"🖥️", label:"Técnico de Informática" },
{ emoji:"🌿", label:"Jardineiro" },{ emoji:"🧹", label:"Faxineira" },{ emoji:"🚚", label:"Mudança" },{ emoji:"🪟", label:"Vidraceiro" },
];
const vagasAtivas = [
{ id:"va1", empresa:"Pizzaria do Zé", tipo:"fisica", categoria:"Entregador", emoji:"🛵", local:"Sete Lagoas, MG", whatsapp:"5511999990001", descricao:"Procuro motoboy para entregas noturnas. Moto própria, CNH A.", urgente:true, regime:"Freelancer", faixa:"R$ 100/dia", fechada:false }, { id:"va2", empresa:"Studio Criativo", tipo:"digital", categoria:"Designer", emoji:"🎨", local:"Remoto", whatsapp:"5511999990002", descricao:"Precisamos de designer para redes sociais. Conhecimento em Canva e Photoshop.", urgente:false, regime:"Freelancer", faixa:"R$ 1.800/mês", fechada:false },
{ id:"va3", empresa:"Dona Maria", tipo:"servico", categoria:"Encanador", emoji:"🔧", local:"Lapa, MG", whatsapp:"5511999990003", descricao:"Cano estourado com urgência! Preciso de encanador agora.", urgente:true, regime:"Serviço Avulso", faixa:"A combinar", fechada:false },
{ id:"va4", empresa:"Condomínio Verde", tipo:"fisica", categoria:"Eletricista", emoji:"⚡", local:"Sete Lagoas, MG", whatsapp:"5511999990004", descricao:"Curto-circuito no quadro elétrico. Urgência máxima!", urgente:true, regime:"Serviço Avulso", faixa:"A combinar", fechada:false },
{ id:"va5", empresa:"Loja da Ana", tipo:"digital", categoria:"Criador de Conteúdo", emoji:"🎬", local:"Remoto", whatsapp:"5511999990005", descricao:"Vídeos curtos para TikTok e Instagram. Produto: moda feminina.", urgente:false, regime:"Contrato", faixa:"R$ 2.500/mês", fechada:false }, ]; const tipoConfig = { fisica: { label:"Presencial", color:tokens.green, bg:"rgba(0,214,143,0.12)", icon:"🏢" }, digital: { label:"Digital", color:tokens.blue, bg:"rgba(77,159,255,0.12)", icon:"💻" }, servico: { label:"Serviço", color:tokens.yellow, bg:"rgba(255,184,0,0.12)", icon:"🔨" }, }; const VagasSlide = ({ showToast, onAbrirVaga }) =&gt; { const [modo, setModo] = useState(null); const [filtro, setFiltro] = useState("todos"); const [showCadastro, setShowCadastro] = useState(false); const [showPay, setShowPay] = useState(false); const [showSucesso, setShowSucesso] = useState(false); const [formVaga, setFormVaga] = useState({ nome:"", whatsapp:"", titulo:"", local:"", descricao:"", faixa:"", tipo:"fisica" }); const [formServico, setFormServico] = useState({ nome:"", whatsapp:"", categoria:"", local:"", descricao:"", faixa:"" }); const [vagasLocal, setVagasLocal] = useState(vagasAtivas); const [pagandoServico, setPagandoServico] = useState(false); const [buscaServico, setBuscaServico] = useState(""); const [buscaTrab, setBuscaTrab] = useState(""); const handlePublicar = () =&gt; { if (!formVaga.titulo || !formVaga.whatsapp) { showToast("Preencha titulo e WhatsApp","error"); return; } const nova = { id:va${Date.now()}, empresa:formVaga.nome||"Anunciante", tipo:formVaga.tipo, categoria:formVaga.titulo, emoji:formVaga.tipo==="fisica"?"🏢":"💻", local:formVaga.local||"A definir", whatsapp:formVaga.whatsapp.replace(/\D/g,""), descricao:formVaga.descricao, urgente:false, regime:"Freelancer", faixa:formVaga.faixa||"A combinar", fechada:false };
setVagasLocal(v => [nova,...v]);
setShowCadastro(false);
setShowSucesso(true);
};
const handlePublicarServico = () => {
if (!formServico.categoria || !formServico.whatsapp) { showToast("Preencha categoria e WhatsApp","error"); return; }
const nova = { id:vs`${Date.now()}, empresa:formServico.nome||"Prestador", tipo:"servico", categoria:formServico.categoria, emoji:categoriasServico.find(c=>c.label===formServico.categoria)?.emoji||"🔧", local:formServico.local||"A definir", whatsapp:formServico.whatsapp.replace(/\D/g,""), descricao:formServico.descricao, urgente:false, regime:"Servico Avulso", faixa:formServico.faixa||"A combinar", fechada:false };
setVagasLocal(v => [nova,...v]);
setPagandoServico(false);
setShowSucesso(true);
};
const filtradas = vagasLocal.filter(v => {
if (v.fechada) return false;
if (v.tipo === "servico") return false;
if (filtro === "busca") {
const q = (buscaTrab||"").toLowerCase();
return v.categoria.toLowerCase().includes(q) || v.empresa.toLowerCase().includes(q);
}
if (filtro !== "todos" && v.tipo !== filtro) return false;
return true;
});
if (showSucesso) return (
<div style={{ padding:"20px 16px 100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh" }}>
<div style={{ width:90,height:90,borderRadius:"50%",background:"linear-gradient(135deg,#00D68F,#00b87a)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:44,marginBottom:20 }}>✅
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:22,color:tokens.text,textAlign:"center",marginBottom:6 }}>Publicado com Sucesso!
<div style={{ fontSize:13,color:tokens.muted,textAlign:"center",marginBottom:20 }}>Sua vaga já está visível para milhares de profissionais 🚀
<button onClick={() => { setShowSucesso(false); setModo(null); }} style={{ width:"100%",padding:16,background:"linear-gradient(135deg,#FF4D00,#ff6b35)",border:"none",borderRadius:14,color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:15,cursor:"pointer" }}>🏠 Voltar ao inicio

);
if (modo === "servico_quero") return (
<div style={{ padding:"20px 16px 100px",overflowY:"auto" }}>
<div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:16 }}>
<button onClick={() => setModo(null)} style={{ width:34,height:34,background:tokens.dark3,border:1px solid $`{tokens.border},borderRadius:10,color:tokens.text,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>←

<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:tokens.text }}>Preciso de um Serviço
<div style={{ fontSize:11,color:tokens.muted }}>Toque na categoria e fale pelo WhatsApp


<div style={{ position:"relative",marginBottom:14 }}>
<span style={{ position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:16 }}>🔍
<input value={buscaServico} onChange={e => setBuscaServico(e.target.value)} placeholder="Buscar tipo de serviço..." style={{ width:"100%",padding:"12px 16px 12px 42px",background:tokens.dark3,border:1px solid `${tokens.border},borderRadius:12,color:tokens.text,fontFamily:"DM Sans,sans-serif",fontSize:14,outline:"none",boxSizing:"border-box" }} />

<div style={{ display:"flex",flexWrap:"wrap",gap:10,marginBottom:16 }}>
{categoriasServico.filter(c => !buscaServico || c.label.toLowerCase().includes(buscaServico.toLowerCase())).map(c => {
const vaga = vagasLocal.find(v => v.categoria === c.label && v.tipo === "servico" && !v.fechada);
return (
<div key={c.label} onClick={() => { if(vaga) window.open(https://wa.me/ {c.label} no FrilaOne. Pode me ajudar?,"_blank"); else showToast(Nenhum latex
{c.label} disponível agora.,"warn"); }} style={{ width:"calc(50% - 5px)",background:vaga?"rgba(255,184,0,0.08)":tokens.card,border:1.5px solid 

{vaga?"rgba(255,184,0,0.4)":tokens.border},borderRadius:14,padding:"14px 12px",cursor:"pointer",display:"flex",alignItems:"center",gap:10 }}>
<div style={{ fontSize:26,flexShrink:0 }}>{c.emoji}

<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,color:tokens.text }}>{c.label}
<div style={{ fontSize:10,color:vaga?tokens.yellow:tokens.muted,marginTop:2 }}>{vaga?"● Disponivel agora":"Sem prestador"}


);
})}


);
if (modo === "servico_presto") return (
<div style={{ padding:"20px 16px 100px",overflowY:"auto" }}>
{pagandoServico ? (

<div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:20 }}>
<button onClick={() => setPagandoServico(false)} style={{ width:34,height:34,background:tokens.dark3,border:1px solid latex
{tokens.border},borderRadius:10,color:tokens.text,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}&gt;← &lt;div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:tokens.text }}&gt;💳 Publicar Serviço — R

29,90

{[{icon:"⚡",name:"Pix",sub:"Aprovação instantânea"},{icon:"💳",name:"Cartão de Crédito",sub:"1x sem juros"}].map(m => (
<div key={m.name} onClick={() => { window.open("https://mpago.la/22Mdt2J","_blank"); handlePublicarServico(); }} style={{ display:"flex",alignItems:"center",gap:12,padding:16,background:tokens.card,border:1.5px solid rgba(155,93,255,0.3),borderRadius:16,cursor:"pointer",marginBottom:10 }}>
<div style={{ width:44,height:44,borderRadius:12,background:"rgba(155,93,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0 }}>{m.icon}
<div style={{ flex:1 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:14,color:tokens.text }}>{m.name}
<div style={{ fontSize:11,color:tokens.muted }}>{m.sub}

<span style={{ color:tokens.purple,fontSize:18 }}>›

))}

) : (

<div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:20 }}>
<button onClick={() => setModo(null)} style={{ width:34,height:34,background:tokens.dark3,border:1px solid $`{tokens.border},borderRadius:10,color:tokens.text,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>←

<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:tokens.text }}>Ofereço um Serviço
<div style={{ fontSize:11,color:tokens.muted }}>Cadastre-se e receba clientes


<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,color:tokens.text,marginBottom:10 }}>Selecione sua categoria:
<div style={{ display:"flex",flexWrap:"wrap",gap:8,marginBottom:16 }}>
{categoriasServico.map(c => (
<button key={c.label} onClick={() => setFormServico(f=>({...f,categoria:c.label}))} style={{ padding:"8px 12px",background:formServico.categoria===c.label?"rgba(155,93,255,0.2)":tokens.dark3,border:1.5px solid `${formServico.categoria===c.label?tokens.purple:tokens.border},borderRadius:10,color:formServico.categoria===c.label?tokens.purple:tokens.muted,fontFamily:"Syne,sans-serif",fontWeight:600,fontSize:11,cursor:"pointer",display:"flex",alignItems:"center",gap:6 }}>
{c.emoji} {c.label}

))}

<Input placeholder="Ex: Joao Silva" value={formServico.nome} onChange={e => setFormServico(f=>({...f,nome:e.target.value}))} />
<Input placeholder="(31) 99999-0000" value={formServico.whatsapp} onChange={e => setFormServico(f=>({...f,whatsapp:e.target.value}))} />
<Input placeholder="Ex: Sete Lagoas, MG" value={formServico.local} onChange={e => setFormServico(f=>({...f,local:e.target.value}))} />
<button onClick={() => { if(!formServico.categoria||!formServico.whatsapp){ showToast("Selecione a categoria e informe o WhatsApp","error"); return; } setPagandoServico(true); }} style={{ width:"100%",padding:16,border:"none",borderRadius:14,background:"linear-gradient(135deg,#9B5DFF,#7C3AFF)",color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:15,cursor:"pointer",marginBottom:8 }}>
🚀 Publicar meu Serviço — R$`29,90


)}

);
if (modo === "empresa") return (
<div style={{ padding:"20px 16px 100px",overflowY:"auto" }}>
{showCadastro ? (

<div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:16 }}>
<button onClick={() => setShowCadastro(false)} style={{ width:34,height:34,background:tokens.dark3,border:1px solid `${tokens.border},borderRadius:10,color:tokens.text,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>←
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:tokens.text }}>📋 Publicar Vaga

<Input placeholder="Ex: Designer Grafico" value={formVaga.titulo} onChange={e => setFormVaga(f=>({...f,titulo:e.target.value}))} />
<Input placeholder="Ex: Agencia Digital XYZ" value={formVaga.nome} onChange={e => setFormVaga(f=>({...f,nome:e.target.value}))} />
<Input placeholder="(31) 99999-0000" value={formVaga.whatsapp} onChange={e => setFormVaga(f=>({...f,whatsapp:e.target.value}))} />
<Input placeholder="Ex: Sete Lagoas, MG" value={formVaga.local} onChange={e => setFormVaga(f=>({...f,local:e.target.value}))} />

<select value={formVaga.tipo} onChange={e=>setFormVaga(f=>({...f,tipo:e.target.value}))} style={{ width:"100%",padding:"14px 16px",background:tokens.dark3,border:1px solid $`{tokens.border},borderRadius:12,color:tokens.text,fontSize:14,outline:"none" }}>
Presencial
Digital/Remoto


{showPay ? (

{[{icon:"⚡",name:"Pix",sub:"Aprovação instantânea"},{icon:"💳",name:"Cartão de Crédito",sub:"1x sem juros"}].map(m => (
<div key={m.name} onClick={() => { window.open("https://mpago.la/22Mdt2J","_blank"); handlePublicar(); }} style={{ display:"flex",alignItems:"center",gap:12,padding:16,background:tokens.card,border:1.5px solid rgba(255,77,0,0.3),borderRadius:16,cursor:"pointer",marginBottom:10 }}>
<div style={{ width:44,height:44,borderRadius:12,background:"rgba(255,77,0,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0 }}>{m.icon}
<div style={{ flex:1 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:14,color:tokens.text }}>{m.name}
<div style={{ fontSize:11,color:tokens.muted }}>{m.sub}

<span style={{ color:tokens.primary,fontSize:18 }}>›

))}

) : (

<div style={{ background:"rgba(255,77,0,0.06)",border:"1px solid rgba(255,77,0,0.2)",borderRadius:12,padding:12,marginBottom:12 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,color:tokens.primary,marginBottom:2 }}>🎟️ Tem um código promocional?
<div style={{ fontSize:11,color:tokens.muted }}>Insira antes de pagar e ganhe 14 dias grátis!

<button onClick={() => { if(!formVaga.titulo||!formVaga.whatsapp){ showToast("Preencha titulo e WhatsApp","error"); return; } setShowPay(true); }} style={{ width:"100%",padding:16,background:"linear-gradient(135deg,#FF4D00,#ff6b35)",border:"none",borderRadius:14,color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:15,cursor:"pointer",marginBottom:8 }}>💳 Publicar Vaga — R$29,90/mês &lt;button onClick={() =&gt; window.open("https://mpago.la/2KnHEaC","_blank")} style={{ width:"100%",padding:12,background:"transparent",border:1px solid ${tokens.border},borderRadius:12,color:tokens.muted,fontFamily:"Syne,sans-serif",fontWeight:600,fontSize:13,cursor:"pointer" }}>📅 Plano Anual — R29,90

{[{icon:"⚡",name:"Pix",sub:"Aprovação instantânea"},{icon:"💳",name:"Cartão de Crédito",sub:"1x sem juros"}].map(m => (
<div key={m.name} onClick={() => { window.open("https://mpago.la/22Mdt2J","_blank"); handlePublicarServico(); }} style={{ display:"flex",alignItems:"center",gap:12,padding:16,background:tokens.card,border:1.5px solid rgba(155,93,255,0.3),borderRadius:16,cursor:"pointer",marginBottom:10 }}>
<div style={{ width:44,height:44,borderRadius:12,background:"rgba(155,93,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0 }}>{m.icon}
<div style={{ flex:1 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:14,color:tokens.text }}>{m.name}
<div style={{ fontSize:11,color:tokens.muted }}>{m.sub}

<span style={{ color:tokens.purple,fontSize:18 }}>›

))}

) : (

<div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:20 }}>
<button onClick={() => setModo(null)} style={{ width:34,height:34,background:tokens.dark3,border:1px solid $`{tokens.border},borderRadius:10,color:tokens.text,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>←

<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:tokens.text }}>Ofereço um Serviço
<div style={{ fontSize:11,color:tokens.muted }}>Cadastre-se e receba clientes


<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,color:tokens.text,marginBottom:10 }}>Selecione sua categoria:
<div style={{ display:"flex",flexWrap:"wrap",gap:8,marginBottom:16 }}>
{categoriasServico.map(c => (
<button key={c.label} onClick={() => setFormServico(f=>({...f,categoria:c.label}))} style={{ padding:"8px 12px",background:formServico.categoria===c.label?"rgba(155,93,255,0.2)":tokens.dark3,border:1.5px solid `${formServico.categoria===c.label?tokens.purple:tokens.border},borderRadius:10,color:formServico.categoria===c.label?tokens.purple:tokens.muted,fontFamily:"Syne,sans-serif",fontWeight:600,fontSize:11,cursor:"pointer",display:"flex",alignItems:"center",gap:6 }}>
{c.emoji} {c.label}

))}

<Input placeholder="Ex: Joao Silva" value={formServico.nome} onChange={e => setFormServico(f=>({...f,nome:e.target.value}))} />
<Input placeholder="(31) 99999-0000" value={formServico.whatsapp} onChange={e => setFormServico(f=>({...f,whatsapp:e.target.value}))} />
<Input placeholder="Ex: Sete Lagoas, MG" value={formServico.local} onChange={e => setFormServico(f=>({...f,local:e.target.value}))} />
<button onClick={() => { if(!formServico.categoria||!formServico.whatsapp){ showToast("Selecione a categoria e informe o WhatsApp","error"); return; } setPagandoServico(true); }} style={{ width:"100%",padding:16,border:"none",borderRadius:14,background:"linear-gradient(135deg,#9B5DFF,#7C3AFF)",color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:15,cursor:"pointer",marginBottom:8 }}>
🚀 Publicar meu Serviço — R$`29,90


)}

);
if (modo === "empresa") return (
<div style={{ padding:"20px 16px 100px",overflowY:"auto" }}>
{showCadastro ? (

<div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:16 }}>
<button onClick={() => setShowCadastro(false)} style={{ width:34,height:34,background:tokens.dark3,border:1px solid `${tokens.border},borderRadius:10,color:tokens.text,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>←
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:tokens.text }}>📋 Publicar Vaga

<Input placeholder="Ex: Designer Grafico" value={formVaga.titulo} onChange={e => setFormVaga(f=>({...f,titulo:e.target.value}))} />
<Input placeholder="Ex: Agencia Digital XYZ" value={formVaga.nome} onChange={e => setFormVaga(f=>({...f,nome:e.target.value}))} />
<Input placeholder="(31) 99999-0000" value={formVaga.whatsapp} onChange={e => setFormVaga(f=>({...f,whatsapp:e.target.value}))} />
<Input placeholder="Ex: Sete Lagoas, MG" value={formVaga.local} onChange={e => setFormVaga(f=>({...f,local:e.target.value}))} />

<select value={formVaga.tipo} onChange={e=>setFormVaga(f=>({...f,tipo:e.target.value}))} style={{ width:"100%",padding:"14px 16px",background:tokens.dark3,border:1px solid $`{tokens.border},borderRadius:12,color:tokens.text,fontSize:14,outline:"none" }}>
Presencial
Digital/Remoto


{showPay ? (

{[{icon:"⚡",name:"Pix",sub:"Aprovação instantânea"},{icon:"💳",name:"Cartão de Crédito",sub:"1x sem juros"}].map(m => (
<div key={m.name} onClick={() => { window.open("https://mpago.la/22Mdt2J","_blank"); handlePublicar(); }} style={{ display:"flex",alignItems:"center",gap:12,padding:16,background:tokens.card,border:1.5px solid rgba(255,77,0,0.3),borderRadius:16,cursor:"pointer",marginBottom:10 }}>
<div style={{ width:44,height:44,borderRadius:12,background:"rgba(255,77,0,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0 }}>{m.icon}
<div style={{ flex:1 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:14,color:tokens.text }}>{m.name}
<div style={{ fontSize:11,color:tokens.muted }}>{m.sub}

<span style={{ color:tokens.primary,fontSize:18 }}>›

))}

) : (

<div style={{ background:"rgba(255,77,0,0.06)",border:"1px solid rgba(255,77,0,0.2)",borderRadius:12,padding:12,marginBottom:12 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,color:tokens.primary,marginBottom:2 }}>🎟️ Tem um código promocional?
<div style={{ fontSize:11,color:tokens.muted }}>Insira antes de pagar e ganhe 14 dias grátis!

<button onClick={() => { if(!formVaga.titulo||!formVaga.whatsapp){ showToast("Preencha titulo e WhatsApp","error"); return; } setShowPay(true); }} style={{ width:"100%",padding:16,background:"linear-gradient(135deg,#FF4D00,#ff6b35)",border:"none",borderRadius:14,color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:15,cursor:"pointer",marginBottom:8 }}>💳 Publicar Vaga — R$29,90/mês &lt;button onClick={() =&gt; window.open("https://mpago.la/2KnHEaC","_blank")} style={{ width:"100%",padding:12,background:"transparent",border:1px solid ${tokens.border},borderRadius:12,color:tokens.muted,fontFamily:"Syne,sans-serif",fontWeight:600,fontSize:13,cursor:"pointer" }}>📅 Plano Anual — R`$308,56

)}

) : (

<div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:20 }}>
<button onClick={() => setModo(null)} style={{ width:34,height:34,background:tokens.dark3,border:1px solid ${tokens.border},borderRadius:10,color:tokens.text,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>←
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:tokens.text }}>🏢 Sou Empresa

<div style={{ background:"linear-gradient(135deg,rgba(77,159,255,0.08),rgba(77,159,255,0.04))",border:"1.5px solid rgba(77,159,255,0.3)",borderRadius:16,padding:18,marginBottom:16 }}>
<div style={{ fontFamily:"Syne,
sans-serif",fontWeight:800,fontSize:16,color:tokens.blue,marginBottom:6 }}>📣 Publique sua vaga agora
<div style={{ fontSize:12,color:tokens.muted2,lineHeight:1.6,marginBottom:12 }}>Sua vaga aparece para centenas de candidatos em Sete Lagoas e região em minutos.
{[["👀","Visibilidade imediata"],["💬","Candidatos pelo WhatsApp"],["📅","30 dias ativos"],["🔔","Aviso antes do vencimento"]].map(([ic,tx]) => (
<div key={tx} style={{ display:"flex",alignItems:"center",gap:10,marginBottom:6 }}>
<span style={{ fontSize:16 }}>{ic}<span style={{ fontSize:12,color:tokens.muted2 }}>{tx}

))}

<button onClick={() => setShowCadastro(true)} style={{ width:"100%",padding:16,background:"linear-gradient(135deg,#4D9FFF,rgba(77,159,255,0.8))",border:"none",borderRadius:14,color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:15,cursor:"pointer",marginBottom:10,boxShadow:"0 4px 16px rgba(77,159,255,0.35)" }}>📋 Publicar Vaga — Rlatex
29,90/mês &lt;button onClick={() =&gt; window.open("https://mpago.la/2KnHEaC","_blank")} style={{ width:"100%",padding:14,background:"transparent",border:1px solid 

{tokens.blue},borderRadius:14,color:tokens.blue,fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:14,cursor:"pointer" }}>📅 Plano Anual — R$`308,56 (economize 16%)

)}

);
if (modo === "trabalhador") return (
<div style={{ padding:"20px 16px 100px",overflowY:"auto" }}>
<div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:12 }}>
<button onClick={() => setModo(null)} style={{ width:34,height:34,background:tokens.dark3,border:1px solid `${tokens.border},borderRadius:10,color:tokens.text,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>←
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:tokens.text }}>👷 Vagas Disponíveis

<div style={{ position:"relative",marginBottom:12 }}>
<span style={{ position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:16 }}>🔍
<input value={filtro==="busca"?buscaTrab||"":{todos:"",fisica:"",digital:""}[filtro]||""} onChange={e => { setBuscaTrab(e.target.value); setFiltro(e.target.value?"busca":"todos"); }} placeholder="Buscar vaga ou empresa..." style={{ width:"100%",padding:"12px 16px 12px 42px",background:tokens.dark3,border:1px solid $`{tokens.border},borderRadius:12,color:tokens.text,fontFamily:"DM Sans,sans-serif",fontSize:14,outline:"none",boxSizing:"border-box" }} />

<div style={{ display:"flex",gap:8,marginBottom:14 }}>
{["todos","fisica","digital"].map(f => (
<button key={f} onClick={() => { setFiltro(f); setBuscaTrab(""); }} style={{ padding:"6px 14px",background:filtro===f?tokens.primary:"transparent",border:1px solid `${filtro===f?tokens.primary:tokens.border},borderRadius:20,color:filtro===f?"#fff":tokens.muted,fontFamily:"Syne,sans-serif",fontWeight:600,fontSize:11,cursor:"pointer" }}>
{f==="todos"?"Todos":f==="fisica"?"Presencial":"Digital"}

))}

{filtradas.map(v => {
const tc = tipoConfig[v.tipo] || tipoConfig.fisica;
return (
<div key={v.id} style={{ background:tokens.card,border:1px solid $`{tokens.border},borderRadius:14,padding:14,marginBottom:10 }}>
<div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:15,color:tokens.text }}>{v.categoria}
<span style={{ background:"rgba(0,214,143,0.12)",border:"1px solid rgba(0,214,143,0.3)",borderRadius:20,padding:"2px 8px",fontSize:10,color:tokens.green,fontWeight:700 }}>{v.tipo==="fisica"?"Presencial":"Digital"}

<div style={{ fontSize:13,color:tokens.muted,marginBottom:4 }}>{v.empresa} · {v.local}
{v.faixa && <div style={{ fontSize:13,color:tokens.primary,fontWeight:700,marginBottom:10 }}>{v.faixa}}
<button onClick={() => { window.open(https://wa.me/${v.whatsapp}?text=Ola! Vi a vaga de ${v.categoria} no FrilaOne!,"_blank"); }} style={{ width:"100%",padding:10,background:"linear-gradient(135deg,#25D366,#128C7E)",border:"none",borderRadius:10,color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,cursor:"pointer" }}>💬 Candidatar via WhatsApp

);
})}
{filtradas.length === 0 && (
<div style={{ textAlign:"center",padding:40 }}>
<div style={{ fontSize:40,marginBottom:12 }}>🔍
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:16,color:tokens.text,marginBottom:8 }}>{buscaTrab?Nenhuma vaga para "`${buscaTrab}" : "Nenhuma vaga disponível agora"}
<div style={{ fontSize:13,color:tokens.muted,lineHeight:1.6 }}>{buscaTrab?"Tente outro termo ou ative o Radar para ser avisado!":"Volte em breve ou publique uma vaga!"}

)}

);
return (
<div style={{ padding:"20px 16px 100px",overflowY:"auto" }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:22,color:tokens.text,marginBottom:4 }}>💼 Vagas & Serviços
<div style={{ fontSize:13,color:tokens.muted,marginBottom:20 }}>O que você quer fazer hoje?
{[
{ id:"trabalhador", emoji:"👷", label:"Sou Trabalhador", sub:"Quero encontrar emprego ou oportunidades", cor:tokens.primary, bg:"rgba(255,77,0,0.1)", borda:"rgba(255,77,0,0.3)" },
{ id:"empresa", emoji:"🏢", label:"Sou Empresa", sub:"Quero publicar vagas e contratar", cor:tokens.blue, bg:"rgba(77,159,255,0.1)", borda:"rgba(77,159,255,0.3)" },
{ id:"servico_quero", emoji:"🔧", label:"Preciso de um Serviço", sub:"Encanador, eletricista, pintor...", cor:tokens.yellow, bg:"rgba(255,184,0,0.08)", borda:"rgba(255,184,0,0.3)" },
{ id:"servico_presto", emoji:"🦺", label:"Ofereço um Serviço", sub:"Cadastre-se e receba clientes pelo WhatsApp", cor:tokens.purple, bg:"rgba(155,93,255,0.08)", borda:"rgba(155,93,255,0.3)" },
].map(op => (
<div key={op.id} onClick={() => setModo(op.id)} style={{ background:op.bg,border:1.5px solid $`{op.borda},borderRadius:16,padding:18,marginBottom:12,cursor:"pointer",display:"flex",alignItems:"center",gap:14 }}>
<div style={{ fontSize:36,flexShrink:0 }}>{op.emoji}
<div style={{ flex:1 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:16,color:op.cor,marginBottom:2 }}>{op.label}
<div style={{ fontSize:12,color:tokens.muted }}>{op.sub}

<div style={{ color:tokens.muted,fontSize:20 }}>›

))}

);
};
const ProfileSlide = ({ showToast, onLogout }) => {
const [toggles, setToggles] = useState({ radar:true, notif:true, invisible:false });
const u = mockData.user;
const menuSections = [
{ label:"Minha Conta", items:[{icon:"👤",label:"Editar Perfil",color:"rgba(77,159,255,0.1)"},{icon:"📁",label:"Portfólio",color:"rgba(155,93,255,0.1)"},{icon:"⭐",label:"Avaliações",color:"rgba(255,184,0,0.1)"}] },
{ label:"Plano & Pagamentos", items:[{icon:"💎",label:"Plano Pro Ativo",color:"rgba(255,77,0,0.1)"},{icon:"💳",label:"Métodos de Pagamento",color:"rgba(0,214,143,0.1)"},{icon:"📊",label:"Relatórios",color:"rgba(77,159,255,0.1)"}] },
{ label:"Suporte", items:[{icon:"🤖",label:"FrilaBot — IA",color:"rgba(155,93,255,0.1)"},{icon:"❓",label:"Ajuda & FAQ",color:"rgba(255,184,0,0.1)"}] },
];
return (
<div style={{ padding:"20px 16px 100px" }}>
<div style={{ display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 0",marginBottom:8 }}>
<div style={{ width:80,height:80,borderRadius:22,background:linear-gradient(135deg,${tokens.primary},${tokens.primaryLight}),display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,marginBottom:12,boxShadow:0 8px 24px ${tokens.primaryGlow},position:"relative" }}&gt; {u.avatar} &lt;div style={{ position:"absolute",bottom:-6,right:-6,width:26,height:26,background:tokens.blue,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"#fff",cursor:"pointer",border:2px solid ${tokens.dark} }}>✏️

<div style={{ fontFamily:"Syne,sans-serif",fontSize:20,fontWeight:800,color:tokens.text,marginBottom:4 }}>{u.name}
<div style={{ fontSize:13,color:tokens.muted,marginBottom:8 }}>{u.role}
<div style={{ display:"flex",gap:6 }}>





<div style={{ background:tokens.card,border:1px solid ${tokens.border},borderRadius:16,padding:"0 16px",marginBottom:20 }}&gt; {[["radar","📡 Radar de Vagas","Receba alertas em tempo real"],["notif","🔔 Notificações","Push, e-mail e SMS"],["invisible","👻 Modo Invisível","Navegue sem aparecer online"]].map(([k,n,s]) =&gt; ( &lt;div key={k} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0",borderBottom:1px solid ${tokens.border} }}>

<div style={{ fontSize:14,color:tokens.text,fontWeight:500 }}>{n}
<div style={{ fontSize:11,color:tokens.muted,marginTop:2 }}>{s}

<Toggle on={toggles[k]} onChange={v => setToggles(t => ({...t,[k]:v}))} />

))}

{menuSections.map(sec => (
<div key={sec.label} style={{ marginBottom:20 }}>
<div style={{ fontSize:11,color:tokens.muted,textTransform:"uppercase",letterSpacing:1,marginBottom:8,fontWeight:600 }}>{sec.label}
{sec.items.map(item => (
<div key={item.label} onClick={() => showToast(Abrindo ${item.label}…)} style={{ display:"flex",alignItems:"center",gap:12,padding:"13px 14px",background:tokens.card,border:1px solid ${tokens.border},borderRadius:14,marginBottom:8,cursor:"pointer",transition:"all 0.2s" }}>
<div style={{ width:36,height:36,borderRadius:10,background:item.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15 }}>{item.icon}
<span style={{ flex:1,fontSize:13,fontWeight:500,color:tokens.text }}>{item.label}
<span style={{ color:tokens.muted,fontSize:12 }}>›

))}

))}
<Btn variant="ghost" onClick={onLogout} style={{ border:1px solid rgba(255,71,87,0.3),color:tokens.red }}>🚪 Sair da conta

);
};
const PlanosSlide = ({ showToast }) => {
const [planTab, setPlanTab] = useState("empresa");
const [ciclo, setCiclo] = useState("mensal");
const [showPay, setShowPay] = useState(false);
const [showAnuncioForm, setShowAnuncioForm] = useState(false);
const [planSelecionado, setPlanSelecionado] = useState(null);
const [formAnuncio, setFormAnuncio] = useState({ nome:"", logo:"", texto:"", sub:"" });
const planos = {
empresa: { id:"empresa", emoji:"🏢", label:"Empresas & Negócios", cor:"linear-gradient(135deg,#0D1B3E,#162850)", borda:"rgba(77,159,255,0.45)", corAcento:tokens.blue, bgAcento:"rgba(77,159,255,0.15)", precoMensal:29.90, precoAnual:308.56, economiaAnual:"R$ 50,24", tagline:"A escolha de quem quer crescer de verdade", chamada:"Mais de 500 empresas já usam. Você ainda vai esperar?", urgencia:"⚠️ Vagas limitadas para anúncio destaque este mês", features:[{ic:"📢",txt:"Anuncie sua empresa para +2.400 profissionais ativos",destaque:true},{ic:"📋",txt:"Publique vagas ilimitadas por 30 dias"},{ic:"🎯",txt:"Apareça em destaque nas buscas da plataforma"},{ic:"📊",txt:"Relatório mensal de visualizações e cliques"},{ic:"🔔",txt:"Aviso automático antes do vencimento"},{ic:"🗑️",txt:"Remoção automática ao vencer sem renovação"}] }, profissional: { id:"profissional", emoji:"👨‍💼", label:"Profissional", cor:"linear-gradient(135deg,#061A12,#0D2E1E)", borda:"rgba(0,214,143,0.45)", corAcento:tokens.green, bgAcento:"rgba(0,214,143,0.12)", precoMensal:9.00, precoAnual:null, economiaAnual:null, tagline:"Invista R$ 9 e receba clientes na mesma hora", chamada:"Cada lead vale muito mais do que R`$ 9,90. Não perca tempo.", urgencia:"🔥 Profissionais que respondem rápido fecham 3x mais", features:[{ic:"💎",txt:"Receba leads qualificados diretamente no WhatsApp",destaque:true},{ic:"🎁",txt:"Primeira consulta: lead 100% gratuito"},{ic:"📡",txt:"Radar de vagas na sua área em tempo real"},{ic:"⭐",txt:"Badge de profissional verificado no perfil"},{ic:"📈",txt:"Visibilidade para clientes que já buscam por você"},{ic:"🤝",txt:"Conexão direta sem intermediários"}] },
vaga: { id:"vaga", emoji:"📣", label:"Anunciar Vaga", cor:"linear-gradient(135deg,#1A0040,#2D0060)", borda:"rgba(155,93,255,0.45)", corAcento:tokens.purple, bgAcento:"rgba(155,93,255,0.12)", precoMensal:44.90, precoAnual:null, economiaAnual:null, tagline:"30 dias visível para milhares. Custe o que custar, vale.", chamada:"Uma boa contratação vale 10x o valor do anúncio.", urgencia:"⏰ Anúncio publicado em menos de 2 minutos após o pagamento", features:[{ic:"🚀",txt:"Vaga publicada imediatamente após o pagamento",destaque:true},{ic:"📋",txt:"Visível para todos os profissionais da plataforma"},{ic:"🔔",txt:"App avisa automaticamente sobre renovação"},{ic:"🗑️",txt:"Vaga removida automaticamente ao vencer"},{ic:"📡",txt:"Candidatos recebem alerta em tempo real"},{ic:"💬",txt:"Contato direto via WhatsApp com o candidato"}] },
};
const p = planos[planTab];
const preco = p.precoAnual && ciclo === "anual" ? p.precoAnual : p.precoMensal;
const precoLabel = p.precoAnual && ciclo === "anual" ? "/ano" : "/mês";
return (
<div style={{ padding:"20px 16px 100px" }}>
<div style={{ marginBottom:6 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:22,color:tokens.text,marginBottom:2 }}>Planos & Assinaturas
<div style={{ fontSize:13,color:tokens.muted }}>Invista no seu crescimento — sem complicação

<div style={{ background:"rgba(255,71,87,0.08)",border:"1px solid rgba(255,71,87,0.25)",borderRadius:12,padding:"10px 14px",marginBottom:18,display:"flex",alignItems:"center",gap:10 }}>
<span style={{ fontSize:18,animation:"blink 1.5s infinite" }}>🔥
<div style={{ fontSize:12,color:tokens.muted2,lineHeight:1.4 }}><strong style={{ color:tokens.text }}>+500 empresas e profissionais já usam o FrilaOne. Não fique de fora.

<div style={{ display:"flex",background:tokens.dark3,borderRadius:14,padding:4,marginBottom:20,gap:3 }}>
{[{id:"empresa",label:"🏢 Negócios",short:"Rlatex
29,90"},{id:"profissional",label:"👨‍💼 Profis",short:"R

9,00"},{id:"vaga",label:"📣 Vagas",short:"R$`44,90"}].map(t => (
<button key={t.id} onClick={() => { setPlanTab(t.id); setCiclo("mensal"); }} style={{ flex:1,padding:"9px 4px",border:"none",borderRadius:10,fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:11,cursor:"pointer",transition:"all 0.25s",background:planTab===t.id?planos[t.id].corAcento:"transparent",color:planTab===t.id?"#fff":tokens.muted,textAlign:"center",lineHeight:1.3 }}>
{t.label}<span style={{ fontSize:9,opacity:.85 }}>{t.short}

))}

{p.precoAnual && (
<div style={{ display:"flex",background:tokens.dark3,borderRadius:12,padding:4,marginBottom:18,gap:4 }}>
{[["mensal","Mensal — R$ 29,90"],["anual","Anual — R$ 308,56 💰 Economize R`$ 50!"]].map(([k,l]) => (
<button key={k} onClick={() => setCiclo(k)} style={{ flex:1,padding:"9px 6px",border:"none",borderRadius:9,fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:11,cursor:"pointer",transition:"all 0.2s",background:ciclo===k?tokens.blue:"transparent",color:ciclo===k?"#fff":tokens.muted }}>{l}
))}

)}
<div style={{ background:p.cor,border:2px solid latex
{p.borda},borderRadius:22,padding:22,marginBottom:16,position:"relative",overflow:"hidden" }}&gt; &lt;div style={{ position:"absolute",top:-30,right:-30,fontSize:120,opacity:0.07 }}&gt;{p.emoji} &lt;div style={{ display:"inline-flex",alignItems:"center",gap:6,padding:"5px 12px",borderRadius:20,fontSize:10,fontWeight:800,fontFamily:"Syne,sans-serif",background:p.bgAcento,color:p.corAcento,marginBottom:10 }}&gt;{p.emoji} {p.label.toUpperCase()} &lt;div style={{ fontSize:12,color:p.corAcento,fontWeight:700,marginBottom:12,lineHeight:1.4 }}&gt;"{p.tagline}" &lt;div style={{ display:"flex",alignItems:"flex-end",gap:6,marginBottom:6 }}&gt; &lt;div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,color:tokens.text,lineHeight:1 }}&gt; &lt;span style={{ fontSize:15,verticalAlign:"top",marginTop:8,display:"inline-block" }}&gt;R


<span style={{ fontSize:48 }}>{String(preco).split(".")[0]}
<span style={{ fontSize:18 }}>,{String(preco.toFixed(2)).split(".")[1]}

<span style={{ fontSize:13,color:tokens.muted,marginBottom:6 }}>{precoLabel}

{p.precoAnual && ciclo==="anual" && <div style={{ fontSize:11,color:tokens.green,fontWeight:700,marginBottom:12 }}>✅ Você economiza {p.economiaAnual} no plano anual}
<div style={{ background:"rgba(255,255,255,0.04)",borderRadius:10,padding:"10px 12px",marginBottom:14,borderLeft:3px solid $`{p.corAcento} }}>
<div style={{ fontSize:12,color:tokens.text,lineHeight:1.5,fontWeight:600 }}>{p.chamada}

<div style={{ display:"flex",flexDirection:"column",gap:9,marginBottom:18 }}>
{p.features.map((f,i) => (
<div key={i} style={{ display:"flex",alignItems:"flex-start",gap:10 }}>
<div style={{ width:26,height:26,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,background:f.destaque?p.bgAcento:"rgba(255,255,255,0.04)",flexShrink:0,border:f.destaque?1px solid `${p.corAcento}44:"none" }}>{f.ic}
<span style={{ fontSize:f.destaque?13:12,color:f.destaque?tokens.text:tokens.muted2,fontWeight:f.destaque?700:400,lineHeight:1.4,marginTop:3 }}>{f.txt}

))}

<div style={{ fontSize:11,color:p.corAcento,fontWeight:700,marginBottom:16,textAlign:"center" }}>{p.urgencia}
<button onClick={() => { setPlanSelecionado(p); setShowPay(true); }} style={{ width:"100%",padding:17,border:"none",borderRadius:15,background:linear-gradient(135deg, {p.corAcento}bb),color:p.id==="profissional"?"#000":"#fff",fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,letterSpacing:.3 }}>
{p.emoji} Quero este plano agora

<div style={{ textAlign:"center",fontSize:10,color:"rgba(255,255,255,0.35)",marginTop:10 }}>🔒 Pagamento seguro via Mercado Pago · Cancele quando quiser

<div style={{ background:tokens.card,border:1px solid latex
{tokens.border},borderRadius:16,padding:16,marginTop:8 }}&gt; &lt;div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:14,color:tokens.text,marginBottom:14 }}&gt;📊 Comparativo de planos &lt;div style={{ display:"flex",borderBottom:1px solid 

{tokens.border},paddingBottom:8,marginBottom:8 }}>
<div style={{ flex:2,fontSize:11,color:tokens.muted,fontWeight:600 }}>RECURSO
<div style={{ flex:1,fontSize:10,color:tokens.blue,fontWeight:700,textAlign:"center" }}>NEGÓCIOS
<div style={{ flex:1,fontSize:10,color:tokens.green,fontWeight:700,textAlign:"center" }}>PROFIS
<div style={{ flex:1,fontSize:10,color:tokens.purple,fontWeight:700,textAlign:"center" }}>VAGA

{[["Publicar anúncio","✅","❌","❌"],["Publicar vagas","✅","❌","✅"],["Receber leads","❌","✅","❌"],["Radar de vagas","❌","✅","❌"],["Badge verificado","✅","✅","❌"],["Aviso vencimento","✅","✅","✅"]].map(([rec,...vals]) => (
<div key={rec} style={{ display:"flex",paddingBottom:8,marginBottom:8,borderBottom:1px solid rgba(255,255,255,0.04) }}>
<div style={{ flex:2,fontSize:12,color:tokens.muted2 }}>{rec}
{vals.map((v,i) => <div key={i} style={{ flex:1,textAlign:"center",fontSize:13 }}>{v})}

))}

<BottomSheet open={showPay} onClose={() => setShowPay(false)} title={💳 Assinar — latex
{planSelecionado?.label}} subtitle={R

 {precoLabel} · Mercado Pago}>
{planSelecionado && <>
<div style={{ background:planSelecionado.cor,border:1.5px solid latex
{planSelecionado.borda},borderRadius:16,padding:18,marginBottom:16,textAlign:"center" }}&gt; &lt;div style={{ fontSize:36,marginBottom:6 }}&gt;{planSelecionado.emoji} &lt;div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:28,color:tokens.text,marginBottom:2 }}&gt;R

 {preco.toFixed(2).replace(".",",")}
<div style={{ fontSize:12,color:tokens.muted }}>{planSelecionado.label} · {precoLabel.replace("/","por ")}

{[{icon:"⚡",name:"Pix",sub:"Aprovação instantânea"},{icon:"💳",name:"Cartão de Crédito",sub:"Até 3x sem juros"},{icon:"📄",name:"Boleto",sub:"Vence em 1 dia útil"}].map(m => (
<div key={m.name} onClick={() => { setShowPay(false); showToast(Plano latex
{planSelecionado.label} ativado! ✅); if(planSelecionado.id==="empresa") setTimeout(()=&gt;setShowAnuncioForm(true),600); }} style={{ display:"flex",alignItems:"center",gap:12,padding:14,background:tokens.dark3,border:1.5px solid 

{tokens.border},borderRadius:14,cursor:"pointer",marginBottom:8 }}>
<div style={{ width:40,height:40,borderRadius:12,background:planSelecionado.bgAcento,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20 }}>{m.icon}
<div style={{ flex:1 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:14,color:tokens.text }}>{m.name}
<div style={{ fontSize:11,color:tokens.muted }}>{m.sub}

<span style={{ color:planSelecionado.corAcento,fontSize:16 }}>›

))}
<p style={{ textAlign:"center",fontSize:10,color:tokens.muted,marginTop:8 }}>🔒 Processado com segurança pelo Mercado Pago
</>}

<BottomSheet open={showAnuncioForm} onClose={() => setShowAnuncioForm(false)} title="🎉 Plano ativo! Publique seu anúncio" subtitle="Preencha os dados — aparece na tela Início para todos">
<Input placeholder="Ex: Pizzaria do Zé, Academia FitMax…" value={formAnuncio.nome} onChange={e => setFormAnuncio(f=>({...f,nome:e.target.value}))} />
<Input placeholder="Ex: 🍕 🏋️ 💇 🔧 🏢" value={formAnuncio.logo} onChange={e => setFormAnuncio(f=>({...f,logo:e.target.value}))} />
<Input placeholder="Ex: 30 dias grátis para novos alunos!" value={formAnuncio.texto} onChange={e => setFormAnuncio(f=>({...f,texto:e.target.value}))} />
<Input placeholder="Ex: Delivery · Vila Madalena · Aberto agora" value={formAnuncio.sub} onChange={e => setFormAnuncio(f=>({...f,sub:e.target.value}))} />
<button onClick={() => { if(!formAnuncio.nome){ showToast("Digite o nome da empresa","error"); return; } setShowAnuncioForm(false); showToast("🎉 Anúncio publicado na tela Início!"); }} style={{ width:"100%",padding:17,border:"none",borderRadius:15,background:linear-gradient(135deg,$`{tokens.blue},#007BB5),color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:8 }}>📣 Publicar Anúncio Agora


);
};
const profisData = [
{ id:"p1", nome:"Dra. Ana Beatriz", area:"Psicologia", emoji:"🧠", registro:"CRP 04/12345", especialidade:"Psicóloga Clínica", cidade:"São Paulo, SP", online:true, primeiraConsultaGratis:true, valorConsulta:"R$ 120", desc:"Atendimento focado em ansiedade, depressão e desenvolvimento pessoal. Agenda disponível.", tags:["Ansiedade","Depressão","TCC","Online"], rating:4.9, atendimentos:87 }, { id:"p2", nome:"Dr. Marcos Tavares", area:"Nutrição", emoji:"🥗", registro:"CRN 3/45678", especialidade:"Nutricionista Clínico e Esportivo", cidade:"Campinas, SP", online:true, primeiraConsultaGratis:true, valorConsulta:"R$ 150", desc:"Consultas personalizadas com plano alimentar detalhado. Atendo atletas e pacientes clínicos.", tags:["Emagrecimento","Esportivo","Plano Alimentar"], rating:5.0, atendimentos:214 },
{ id:"p3", nome:"Dr. Felipe Rocha", area:"Advocacia", emoji:"⚖️", registro:"OAB/SP 456789", especialidade:"Advogado Trabalhista e Civil", cidade:"Santo André, SP", online:false, primeiraConsultaGratis:true, valorConsulta:"R`$ 200", desc:"Consultoria jurídica com foco em direito trabalhista, elaboração de contratos e causas cíveis.", tags:["Trabalhista","Contratos","Civil","Família"], rating:4.8, atendimentos:53 },
];
const areasCategorias = [
{ id:"todos", label:"Todos", emoji:"🔍" },{ id:"Psicologia", label:"Psicologia", emoji:"🧠" },{ id:"Nutrição", label:"Nutrição", emoji:"🥗" },
{ id:"Advocacia", label:"Advocacia", emoji:"⚖️" },{ id:"Medicina", label:"Medicina", emoji:"🩺" },{ id:"Educação", label:"Educação", emoji:"📚" },
{ id:"Personal", label:"Personal", emoji:"💪" },{ id:"Fisioterapia", label:"Fisio", emoji:"🦴" },
];
const ProfCard = ({ p, onSolicitar, isFirst }) => (
�
{isFirst &&

} {p.primeiraConsultaGratis &&

1ª GRÁTIS

}

{p.emoji} {p.online &&

}

{p.nome}

{p.especialidade}

{p.registro} · {p.cidade}

{p.desc}

{p.tags.map(t => {t})}

⭐ {p.rating}

{p.atendimentos} atendimentos

{p.valorConsulta} onSolicitar(p)} style={{ padding:"8px 14px",background:"linear-gradient(135deg,#9B5DFF,#7C3AFF)",border:"none",borderRadius:10,color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:12,cursor:"pointer" }}>Solicitar

);


const ProfisSlide = ({ showToast }) => {
const [subView, setSubView] = useState("home");
const [catFiltro, setCatFiltro] = useState("todos");
const [busca, setBusca] = useState("");
const [profSelecionado, setProfSelecionado] = useState(null);
const [showSolicitacao, setShowSolicitacao] = useState(false);
const filtrados = profisData.filter(p => (catFiltro === "todos" || p.area === catFiltro) && (!busca || p.nome.toLowerCase().includes(busca.toLowerCase()) || p.especialidade.toLowerCase().includes(busca.toLowerCase())));
if (subView === "home") return (
<div style={{ padding:"20px 16px 100px",overflowY:"auto" }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:22,color:tokens.text,marginBottom:4 }}>👨‍💼 Profissionais
<div style={{ fontSize:13,color:tokens.muted,marginBottom:16 }}>Psicólogos, nutricionistas, advogados e mais
<div style={{ display:"flex",gap:8,marginBottom:16 }}>
{[{id:"cliente",label:"🔍 Buscar Profissional"},{id:"profissional",label:"💼 Sou Profissional"}].map(op => (
<button key={op.id} onClick={() => setSubView(op.id)} style={{ flex:1,padding:"12px 8px",border:1.5px solid $`{tokens.border},borderRadius:14,background:tokens.card,color:tokens.text,fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:12,cursor:"pointer" }}>{op.label}
))}

<div style={{ display:"flex",gap:6,overflowX:"auto",marginBottom:16,paddingBottom:4 }}>
{areasCategorias.map(c => (
<button key={c.id} onClick={() => setCatFiltro(c.id)} style={{ flexShrink:0,padding:"6px 12px",background:catFiltro===c.id?"rgba(155,93,255,0.2)":tokens.dark3,border:1.5px solid `${catFiltro===c.id?tokens.purple:tokens.border},borderRadius:20,color:catFiltro===c.id?tokens.purple:tokens.muted,fontFamily:"Syne,sans-serif",fontWeight:600,fontSize:11,cursor:"pointer",whiteSpace:"nowrap" }}>
{c.emoji} {c.label}

))}

<div style={{ position:"relative",marginBottom:16 }}>
<span style={{ position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:16 }}>🔍
<input value={busca} onChange={e => setBusca(e.target.value)} placeholder="Buscar profissional..." style={{ width:"100%",padding:"12px 16px 12px 44px",background:tokens.dark3,border:1px solid $`{tokens.border},borderRadius:12,color:tokens.text,fontFamily:"DM Sans,sans-serif",fontSize:14,outline:"none",boxSizing:"border-box" }} />

{filtrados.map((p,i) => (
<ProfCard key={p.id} p={p} isFirst={i===0} onSolicitar={prof => { setProfSelecionado(prof); setShowSolicitacao(true); }} />
))}
{filtrados.length === 0 && (
<div style={{ textAlign:"center",padding:40 }}>
<div style={{ fontSize:40,marginBottom:12 }}>🔍
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:16,color:tokens.text,marginBottom:8 }}>Nenhum profissional encontrado
<div style={{ fontSize:13,color:tokens.muted }}>Tente outro filtro ou área

)}
<BottomSheet open={showSolicitacao} onClose={() => setShowSolicitacao(false)} title={profSelecionado ? Solicitar — `${profSelecionado.nome} : ""} subtitle="Primeira consulta gratuita!">
{profSelecionado && (
<>
<div style={{ background:"rgba(155,93,255,0.08)",border:"1px solid rgba(155,93,255,0.3)",borderRadius:14,padding:16,marginBottom:16,display:"flex",gap:12,alignItems:"center" }}>
<div style={{ fontSize:36 }}>{profSelecionado.emoji}

<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:15,color:tokens.text }}>{profSelecionado.nome}
<div style={{ fontSize:12,color:tokens.purple,fontWeight:700 }}>{profSelecionado.especialidade}
<div style={{ fontSize:12,color:tokens.green,fontWeight:700 }}>{profSelecionado.valorConsulta}/consulta


<button onClick={() => { setShowSolicitacao(false); showToast(Solicitação enviada para $`{profSelecionado.nome}! 🚀); }} style={{ width:"100%",padding:16,background:"linear-gradient(135deg,#9B5DFF,#7C3AFF)",border:"none",borderRadius:14,color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:15,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8 }}>
💬 Entrar em contato

</>
)}


);
if (subView === "profissional") return (
<div style={{ padding:"20px 16px 100px" }}>
<div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:20 }}>
<button onClick={() => setSubView("home")} style={{ width:34,height:34,background:tokens.dark3,border:1px solid `${tokens.border},borderRadius:10,color:tokens.text,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>←
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:tokens.text }}>Sou Profissional

<div style={{ background:"linear-gradient(135deg,rgba(155,93,255,0.1),rgba(155,93,255,0.05))",border:"1.5px solid rgba(155,93,255,0.3)",borderRadius:16,padding:20,marginBottom:16,textAlign:"center" }}>
<div style={{ fontSize:48,marginBottom:10 }}>👨‍💼
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:tokens.text,marginBottom:8 }}>Cadastre seu perfil profissional
<div style={{ fontSize:13,color:tokens.muted2,lineHeight:1.6,marginBottom:16 }}>Receba clientes que já estão procurando por você. Primeira consulta de graça para o cliente!
<button onClick={() => { showToast("Vá em Planos → Profissional para se cadastrar! 💼"); setSubView("home"); }} style={{ width:"100%",padding:16,background:"linear-gradient(135deg,#9B5DFF,#7C3AFF)",border:"none",borderRadius:14,color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:15,cursor:"pointer" }}>
💎 Ver Plano Profissional — R$`9,00/mês



);
return null;
};
const SuporteSlide = ({ showToast }) => {
const WA_NUM = "5531982299024";
const waLink = (msg) => https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)};
const topicos = [
{ emoji:"💳", titulo:"Dúvida sobre pagamento", msg:"Olá! Tenho uma dúvida sobre pagamento no FrilaOne." },
{ emoji:"📋", titulo:"Problema com minha vaga", msg:"Olá! Estou com um problema com minha vaga no FrilaOne." },
{ emoji:"👨‍💼", titulo:"Suporte para profissionais", msg:"Olá! Preciso de ajuda com meu perfil de profissional no FrilaOne." },
{ emoji:"🏢", titulo:"Suporte para empresas", msg:"Olá! Sou empresa e preciso de suporte no FrilaOne." },
{ emoji:"🔧", titulo:"Bug ou erro no app", msg:"Olá! Encontrei um erro no FrilaOne e preciso de ajuda." },
{ emoji:"💡", titulo:"Sugestão ou ideia", msg:"Olá! Tenho uma sugestão para o FrilaOne." },
];
return (
<div style={{ padding:"20px 16px 100px" }}>
<div style={{ background:"linear-gradient(135deg,#061A12,#0D2E1E)",border:"1.5px solid rgba(0,214,143,0.4)",borderRadius:20,padding:22,marginBottom:22,position:"relative",overflow:"hidden",textAlign:"center" }}>
<div style={{ position:"absolute",top:-30,right:-30,width:120,height:120,background:"rgba(0,214,143,0.06)",borderRadius:"50%" }} />
<div style={{ width:72,height:72,borderRadius:"50%",background:"linear-gradient(135deg,#25D366,#128C7E)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:34,margin:"0 auto 14px",boxShadow:"0 8px 24px rgba(37,211,102,0.4)" }}>💬
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:22,color:tokens.text,marginBottom:6 }}>Suporte FrilaOne
<div style={{ fontSize:13,color:tokens.muted2,lineHeight:1.5,marginBottom:16 }}>Fale diretamente com a equipe pelo WhatsApp. Respondemos rápido!
<a href={waLink("Olá! Preciso de suporte no FrilaOne.")} target="_blank" rel="noreferrer" style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:10,width:"100%",padding:16,background:"linear-gradient(135deg,#25D366,#128C7E)",border:"none",borderRadius:14,color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:16,cursor:"pointer",boxShadow:"0 8px 24px rgba(37,211,102,0.4)",textDecoration:"none" }}>
<span style={{ fontSize:22 }}>💬 Falar no WhatsApp Agora

<div style={{ fontSize:11,color:"rgba(0,214,143,0.6)",marginTop:10 }}>📞 (31) 98229-9024 · Atendimento humano

<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:15,color:tokens.text,marginBottom:14 }}>Selecione seu assunto
<div style={{ display:"flex",flexDirection:"column",gap:10,marginBottom:24 }}>
{topicos.map(t => (
<a key={t.titulo} href={waLink(t.msg)} target="_blank" rel="noreferrer" style={{ display:"flex",alignItems:"center",gap:14,padding:"14px 16px",background:tokens.card,border:1px solid `${tokens.border},borderRadius:16,cursor:"pointer",textDecoration:"none" }}>
<div style={{ width:42,height:42,borderRadius:12,background:"rgba(0,214,143,0.1)",border:"1px solid rgba(0,214,143,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0 }}>{t.emoji}
<div style={{ flex:1 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,color:tokens.text }}>{t.titulo}
<div style={{ fontSize:11,color:tokens.muted,marginTop:2 }}>Toque para abrir no WhatsApp

<span style={{ color:tokens.green,fo
