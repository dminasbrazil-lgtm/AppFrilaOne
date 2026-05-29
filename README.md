14,90/mês

<button onClick={() => setAberto(false)} style={{ width:"100%",padding:10,background:"transparent",border:1px solid $`{tokens.border},borderRadius:12,color:tokens.muted,fontFamily:"Syne,sans-serif",fontSize:12,cursor:"pointer" }}>Cancelar

);
};
const VitrineLocal = ({ showToast }) => {
const [selecionado, setSelecionado] = useState(null);
if (selecionado) {
const v = selecionado;
return (
<div style={{ padding:"20px 16px 100px",overflowY:"auto" }}>
<div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:20 }}>
<button onClick={() => setSelecionado(null)} style={{ width:34,height:34,background:tokens.dark3,border:1px solid `${tokens.border},borderRadius:10,color:tokens.text,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>←
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:16,color:tokens.text }}>{v.nome}

<div style={{ background:v.cor,border:2px solid $`{v.borda},borderRadius:24,padding:24,marginBottom:20,position:"relative",overflow:"hidden" }}>
<div style={{ position:"absolute",top:-20,right:-20,fontSize:100,opacity:0.08 }}>{v.emoji}
<div style={{ width:"100%",height:180,borderRadius:14,background:"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:80,marginBottom:12 }}>{v.emoji}
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:24,color:"#fff",marginBottom:6 }}>{v.nome}
<div style={{ fontSize:13,color:"rgba(255,255,255,0.75)",marginBottom:16,lineHeight:1.6 }}>{v.desc}
<div style={{ display:"flex",gap:16,marginBottom:16 }}>
<div style={{ textAlign:"center" }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:v.acento }}>⭐ {v.avaliacao}
<div style={{ fontSize:11,color:"rgba(255,255,255,0.6)" }}>avaliação

<div style={{ textAlign:"center" }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:v.acento }}>{v.cliques.toLocaleString()}
<div style={{ fontSize:11,color:"rgba(255,255,255,0.6)" }}>cliques


<div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
{v.servicos.map(s => <span key={s} style={{ background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:20,padding:"4px 10px",fontSize:11,color:"#fff" }}>{s})}


<button onClick={() => { window.open(https://wa.me/${v.whatsapp}?text=Olá! Vi o seu negócio na Vitrine Local do FrilaOne e quero saber mais!,"_blank"); showToast(Conectando com ${v.nome}... 💬); }} style={{ width:"100%",padding:16,background:"linear-gradient(135deg,#25D366,#128C7E)",border:"none",borderRadius:14,color:"#fff",fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:10 }}>
<span style={{ fontSize:20 }}>💬 Falar no WhatsApp


);
}
return (
<div style={{ padding:"20px 16px 100px",overflowY:"auto" }}>
<div style={{ marginBottom:20 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:22,color:tokens.text,marginBottom:4 }}>🤝 Vitrine & Parceiros
<div style={{ fontSize:13,color:tokens.muted }}>Negócios locais em Sete Lagoas · Clique e conecte-se

<div style={{ background:"linear-gradient(135deg,rgba(255,184,0,0.1),rgba(255,77,0,0.05))",border:"1px solid rgba(255,184,0,0.3)",borderRadius:14,padding:"10px 14px",marginBottom:16,display:"flex",alignItems:"center",gap:10 }}>
<span style={{ fontSize:20 }}>🏆
<div style={{ fontSize:12,color:tokens.muted2,lineHeight:1.5 }}>Quanto mais cliques seu negócio receber, maior seu ranking!

{vitrineData.filter(v=>v.destaque).map(v => (
<div key={v.id} onClick={() => setSelecionado(v)} style={{ background:v.cor,border:2px solid `${v.borda},borderRadius:22,padding:20,marginBottom:16,cursor:"pointer",position:"relative",overflow:"hidden" }}>
<div style={{ position:"absolute",top:-10,right:-10,fontSize:90,opacity:0.08 }}>{v.emoji}
<div style={{ display:"flex",alignItems:"center",gap:4,marginBottom:10 }}>
<span style={{ background:"rgba(255,184,0,0.25)",border:"1px solid rgba(255,184,0,0.5)",borderRadius:20,padding:"2px 10px",fontSize:10,fontWeight:700,color:tokens.yellow,fontFamily:"Syne,sans-serif" }}>⭐ DESTAQUE DA SEMANA

<div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:12 }}>
<div style={{ width:60,height:60,borderRadius:16,background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,flexShrink:0,border:1.5px solid $`{v.borda} }}>{v.emoji}

<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:20,color:"#fff" }}>{v.nome}
<div style={{ fontSize:12,color:"rgba(255,255,255,0.65)",marginTop:2 }}>{v.cidade}
<div style={{ fontSize:12,color:v.acento,fontWeight:700,marginTop:2 }}>⭐ {v.avaliacao}


<div style={{ fontSize:13,color:"rgba(255,255,255,0.8)",marginBottom:14,lineHeight:1.5 }}>{v.desc}
<div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
<span style={{ fontSize:12,color:"rgba(255,255,255,0.5)" }}>👆 {v.cliques.toLocaleString()} cliques
<span style={{ background:v.acento,color:"#000",padding:"6px 14px",borderRadius:20,fontSize:12,fontWeight:700,fontFamily:"Syne,sans-serif" }}>Ver mais →


))}
<div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:15,color:tokens.text }}>🔥 Ranking desta semana
<span style={{ fontSize:11,color:tokens.muted }}>por cliques

{vitrineData.filter(v=>!v.destaque).sort((a,b)=>b.cliques-a.cliques).map((v,i) => (
<div key={v.id} onClick={() => setSelecionado(v)} style={{ display:"flex",alignItems:"center",gap:14,padding:16,background:tokens.card,border:1.5px solid ${v.borda},borderRadius:16,marginBottom:10,cursor:"pointer" }}&gt; &lt;div style={{ fontSize:11,fontFamily:"Syne,sans-serif",fontWeight:800,color:tokens.muted,width:20,textAlign:"center",flexShrink:0 }}&gt;#{i+2} &lt;div style={{ width:50,height:50,borderRadius:14,background:v.cor,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0,border:1.5px solid ${v.borda} }}>{v.emoji}
<div style={{ flex:1,minWidth:0 }}>
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:14,color:tokens.text,marginBottom:2 }}>{v.nome}
<div style={{ fontSize:11,color:tokens.muted }}>{v.servicos.slice(0,2).join(" · ")}
<div style={{ fontSize:11,color:v.acento,fontWeight:600,marginTop:2 }}>⭐ {v.avaliacao} · {v.cliques} cliques

<span style={{ color:tokens.muted,fontSize:20,flexShrink:0 }}>›

))}


);
};
const NavIcon = ({ tab }) => {
const icons = {
feed: ,
vagas: ,
profis: ,
planos: ,
perfil: ,
suporte: ,
};
return icons[tab] || null;
};
const BottomNav = ({ active, onChange }) => {
const tabs = [{ id:"feed",label:"Início" },{ id:"vagas",label:"Vagas" },{ id:"profis",label:"Profis" },{ id:"planos",label:"Planos" },{ id:"perfil",label:"Perfil" },{ id:"suporte",label:"Suporte" }];
return (
<div style={{ position:"absolute",bottom:0,left:0,width:"100%",background:"#0D1B3E",borderTop:1px solid `${tokens.border},display:"flex",zIndex:20,overflow:"hidden" }}>
{tabs.map(t => {
const isProfis = t.id === "profis";
const isSuporte = t.id === "suporte";
const isActive = active === t.id;
const activeColor = isProfis ? tokens.purple : isSuporte ? tokens.green : tokens.primary;
const activeBg = isProfis ? "rgba(155,93,255,0.15)" : isSuporte ? "rgba(0,214,143,0.15)" : "rgba(255,77,0,0.15)";
return (
<button key={t.id} onClick={() => onChange(t.id)} style={{ flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"8px 1px",border:"none",background:"transparent",color:isActive?activeColor:tokens.muted,cursor:"pointer",gap:0,fontFamily:"Syne,sans-serif",fontWeight:600,transition:"all 0.2s",position:"relative" }}>
<div style={{ position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:24,height:3,background:activeColor,borderRadius:"0 0 3px 3px",opacity:isActive?1:0,transition:"opacity 0.2s" }} />
<div style={{ width:34,height:34,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:2,transition:"all 0.25s",background:isActive?activeBg:"transparent",transform:isActive?"translateY(-2px)":"none" }}>


<span style={{ fontSize:8.5 }}>{t.label}

);
})}

);
};
const TAB_ORDER = ["feed","vagas","profis","planos","perfil","suporte"];
export default function FrilaOneApp() {
const [authed, setAuthed] = useState(false);
const [tab, setTab] = useState("feed");
const [showVitrine, setShowVitrine] = useState(false);
const [radarOpen, setRadarOpen] = useState(false);
const [contactSheet, setContactSheet] = useState(null);
const { toast, show: showToast } = useToast();
useEffect(() => {
if (!authed) return;
const t = setTimeout(() => setRadarOpen(true), 4000);
return () => clearTimeout(t);
}, [authed]);
const slideIdx = TAB_ORDER.indexOf(tab);
return (
<>

<div style={{ width:"100%",maxWidth:420,height:"100vh",background:tokens.dark,position:"relative",display:"flex",flexDirection:"column",overflow:"hidden",boxShadow:"0 40px 80px rgba(0,0,0,0.8),0 0 0 1px rgba(255,255,255,0.05)" }}>

{!authed && <AuthScreen onLogin={() => { setAuthed(true); showToast("Bem-vindo ao FrilaOne! 🚀"); }} />}
{authed && <>
<Header onNotif={() => showToast("Nenhuma notificação nova","warn")} onRadar={() => setRadarOpen(true)} hasNotif />
<div style={{ flex:1,minHeight:0,display:"flex",width: {(slideIdx/TAB_ORDER.length)*100}%),transition:"transform 0.45s cubic-bezier(0.16,1,0.3,1)",willChange:"transform" }}>
{TAB_ORDER.map(t => (
<div key={t} style={{ width:$`{100/TAB_ORDER.length}%,height:"100%",overflowY:"auto",overflowX:"hidden",WebkitOverflowScrolling:"touch",scrollbarWidth:"none" }}>
{t==="feed" && <FeedSlide onContact={f => setContactSheet(f)} showToast={showToast} onNavegar={setTab} onCandidatar={() => showToast("Candidatura enviada! ✅")} onAbrirVaga={(link) => window.open(link,"_blank")} onVitrine={() => setShowVitrine(true)} />}
{t==="vagas" && <VagasSlide showToast={showToast} onAbrirVaga={(link) => window.open(link,"_blank")} />}
{t==="profis" && }
{t==="suporte" && }
{t==="planos" && }
{t==="perfil" && <ProfileSlide showToast={showToast} onLogout={() => { setAuthed(false); showToast("Até logo! 👋"); }} />}

))}


{showVitrine && (
<div style={{ position:"absolute",inset:0,zIndex:9998,background:tokens.dark,overflowY:"auto" }}>
<div style={{ padding:"16px",display:"flex",alignItems:"center",gap:10,borderBottom:1px solid ${tokens.border},background:tokens.dark }}&gt; &lt;button onClick={() =&gt; setShowVitrine(false)} style={{ width:34,height:34,background:tokens.dark3,border:1px solid ${tokens.border},borderRadius:10,color:tokens.text,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>←
<div style={{ fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:18,color:tokens.text }}>🤝 Vitrine & Parceiros



)}
<BottomSheet open={!!contactSheet} onClose={() => setContactSheet(null)} title={contactSheet?Contatar ${contactSheet.name}:""} subtitle="Envie uma proposta"&gt; {contactSheet && &lt;&gt; &lt;div style={{ display:"flex",gap:12,marginBottom:16,padding:14,background:tokens.dark3,borderRadius:14,border:1px solid ${tokens.border} }}>
<div style={{ fontSize:28 }}>{contactSheet.avatar}

<div style={{ fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:15,color:tokens.text }}>{contactSheet.name}
<div style={{ fontSize:12,color:tokens.muted }}>{contactSheet.role}
<div style={{ fontSize:13,fontWeight:700,color:tokens.green,marginTop:4 }}>{contactSheet.price}



<textarea placeholder="Descreva o projeto, prazo e detalhes relevantes…" style={{ width:"100%",padding:"14px 16px",background:tokens.dark3,border:1px solid `${tokens.border},borderRadius:12,color:tokens.text,fontSize:14,outline:"none",resize:"none",minHeight:90,fontFamily:"DM Sans,sans-serif" }} />

<Btn onClick={() => { setContactSheet(null); showToast(Proposta enviada para ${contactSheet.name}! 🚀); }}>🚀 Enviar Proposta
</>}

<RadarOverlay open={radarOpen} onClose={() => setRadarOpen(false)} showToast={showToast} />
</>}

</>
);
}
