<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<title>FrilaOne &#x26A1;</title>
<noscript></noscript>
<style>
:root{
  --pri:#E8590C;--priL:#F47B2E;--priG:rgba(232,89,12,0.22);
  --dk:#0A0E1A;--dk2:#111827;--dk3:#1A2234;--card:#1E2A3A;
  --bd:rgba(255,255,255,0.07);--tx:#F0F4FF;--mu:#6B7A99;--mu2:#8A9AB8;
  --gr:#00D68F;--bl:#4D9FFF;--yl:#FFB800;--rd:#FF4757;--pu:#1E78DC;
}
/* ══ MODO DIURNO — fundo claro, mesmo header/menu azul marinho ══ */
body.tema-claro{
  --dk:#FAFBFC;--dk2:#FFFFFF;--dk3:#FAFBFC;--card:#FFFFFF;
  --bd:#EEF0F2;--tx:#111827;--mu:#9CA3AF;--mu2:#6B7280;
}
body.tema-claro #app{background:var(--dk);}
/* Header permanece azul marinho nos dois temas (bot-nav já é fixo #0D1B3E) */
body.tema-claro #main-header{
  background:#0D1B3E !important;
  border-bottom:1px solid #1E2A3A !important;
}
body.tema-claro #main-header .user-nome,
body.tema-claro #main-header .syne{ color:#fff !important; }

/* ── Ajustes especificos da aba Inicio no tema claro ── */
body.tema-claro #frila-slogan .frila-slogan-txt{ color:#0D1B3E !important; }
body.tema-claro #card-disponivel{
  background:#FFFFFF !important;
  border:1.5px solid var(--pri) !important;
  box-shadow:0 8px 24px rgba(20,20,30,0.08) !important;
}
/* Itens da lista do Menu: fundo azul-marinho pra destacar, igual Aparência */
body.tema-claro [style*="color:rgba(255,255,255,0.5)"]{ color:#374151 !important; }
body.tema-claro [style*="color:rgba(255,255,255,0.2)"]{ color:#9CA3AF !important; }
body.tema-claro [onclick="_pfGaveta('missoes')"],
body.tema-claro [onclick="_pfGaveta('seg')"],
body.tema-claro [onclick="_pfGaveta('conf')"],
body.tema-claro [onclick="_pfGaveta('config')"],
body.tema-claro [onclick="_pfGaveta('suporte')"],
body.tema-claro [onclick="_pfGaveta('mapa')"]{
  background:#0D1B3E !important;
  border-color:#0D1B3E !important;
  --tx:#FFFFFF;
  --mu:#B8C2D9;
}
body.tema-claro #header-online-label{ color:#fff !important; }
body.tema-claro #card-disponivel .syne{ color:#111827 !important; }
body.tema-claro #card-disponivel div[style*="color:var(--mu)"]{ color:#6B7280 !important; }
body.tema-claro #card-disponivel .radar-dot{ background:#16A34A !important; box-shadow:0 0 6px rgba(22,163,74,0.5) !important; }
body.tema-claro #btn-disponivel{
  background:transparent !important;
  border:1.5px solid #16A34A !important;
  color:#16A34A !important;
}
body.tema-claro #quick-actions-title{ color:#111827 !important; }
/* Identidade Mercado Pago/Sicredi: ícones em fundo neutro, sem blocos solidos coloridos */
body.tema-claro .qa-box{
  background:#FAFBFC !important;
  border:1px solid #EEF0F2 !important;
  box-shadow:none !important;
}
body.tema-claro .qa-icon{ color:var(--pri) !important; }
body.tema-claro .qa-title{ color:#111827 !important; }
body.tema-claro .qa-sub{ color:#9CA3AF !important; }
body.tema-claro #live-ticker{
  background:#FFF6F0 !important;
  border:1px solid #FFD9BC !important;
  border-left:3px solid var(--pri) !important;
}
body.tema-claro #btn-meu-negocio{
  background:#0D1B3E !important;
  color:#fff !important;
  box-shadow:0 6px 20px rgba(13,27,62,0.25) !important;
}
body.tema-claro #btn-meu-negocio svg{ stroke:#fff !important; }
body.tema-claro #btn-meu-negocio .mn-title-claro{ color:#fff !important; }
/* Cards de vagas (.vc) com contorno fino neutro no tema claro, estilo extrato bancário */
body.tema-claro .vc{
  background:#FFFFFF !important;
  border:1px solid #EEF0F2 !important;
  border-left:3px solid var(--pri) !important;
}
/* Chips de pessoas disponiveis com contorno fino neutro no tema claro */
body.tema-claro #disponiveis-lista > div{
  background:#FAFBFC !important;
  border:1px solid #EEF0F2 !important;
}
/* ── Aba Master/Profissionais: bordas pensadas para fundo escuro ficavam invisíveis no claro ── */
body.tema-claro #sl-profis [style*="border:1px solid rgba(255,255,255,0.18)"]{
  border-color:#E5E7EB !important;
}
body.tema-claro #sl-profis [style*="border:1.5px solid rgba(255,255,255,0.6)"]{
  border-color:var(--pri) !important;
}
body.tema-claro #sl-profis [style*="border:1px solid rgba(255,255,255,0.06)"]{
  border-color:#E5E7EB !important;
}
/* ── Colorimetria de marca: só laranja + azul-marinho como acento, resto neutro (aba Vagas) ── */
body.tema-claro [onclick="vagasGo('trabalhador')"],
body.tema-claro [onclick="vagasGo('empresa')"]{
  background:#FFFFFF !important;
  border:1.5px solid var(--pri) !important;
}
body.tema-claro [onclick="vagasGo('prestador')"]{
  background:#0D1B3E !important;
  border:1.5px solid #0D1B3E !important;
  --tx:#FFFFFF;
  --mu:#B8C2D9;
}
body.tema-claro .card-triagem-empresa{
  background:#FAFBFC !important;
  border:1px solid #EEF0F2 !important;
  border-left:3px solid #0B2545 !important;
}
body.tema-claro .card-triagem-empresa .syne{ color:#0B2545 !important; }
body.tema-claro [onclick="goTab('planos');planTab('vagas-brasil')"],
body.tema-claro [onclick="planTab('vagas-brasil')"]{
  background:#FAFBFC !important;
  border:1px solid #EEF0F2 !important;
}
body.tema-claro [onclick="goTab('planos');planTab('vagas-brasil')"] > div,
body.tema-claro [onclick="planTab('vagas-brasil')"]{
  background:none !important;
}
body.tema-claro [onclick="goTab('planos');planTab('vagas-brasil')"] .syne,
body.tema-claro [onclick="planTab('vagas-brasil')"] .syne{ color:var(--pri) !important; }
/* Avatares da lista Online Agora (Parceiros): neutros, sem rodízio de cores */
body.tema-claro #sl-parceiros [onclick*="_abrirPerfilPublico"][style*="rgba(232,89,12,0.1)"],
body.tema-claro #sl-parceiros [onclick*="_abrirPerfilPublico"][style*="rgba(0,214,143,0.1)"],
body.tema-claro #sl-parceiros [onclick*="_abrirPerfilPublico"][style*="rgba(77,159,255,0.1)"]{
  background:#FAFBFC !important;
  border:1px solid #EEF0F2 !important;
}
/* ── Identidade: faixa azul-marinho (cor do rodapé #0D1B3E) no cabeçalho de cada aba ── */
body.tema-claro #vagas-menu > div:first-child,
body.tema-claro #sl-profis > div:first-child,
body.tema-claro #sl-parceiros > div:first-child,
body.tema-claro #sl-perfil > div:first-child{
  background:#0D1B3E !important;
  margin:-14px -16px 14px !important;
  padding:18px 16px 16px !important;
  border-radius:0 0 18px 18px !important;
}
body.tema-claro #vagas-menu > div:first-child [onclick="goTab('feed')"],
body.tema-claro #sl-profis > div:first-child [onclick="goTab('feed')"],
body.tema-claro #sl-parceiros > div:first-child [onclick="goTab('feed')"],
body.tema-claro #sl-perfil > div:first-child [onclick="goTab('feed')"]{
  background:rgba(255,255,255,0.15) !important;
  border:1px solid rgba(255,255,255,0.25) !important;
  color:#fff !important;
}
body.tema-claro #vagas-menu > div:first-child .syne,
body.tema-claro #sl-profis > div:first-child .syne,
body.tema-claro #sl-parceiros > div:first-child .syne,
body.tema-claro #sl-perfil > div:first-child .syne{
  color:#fff !important;
}
/* ── Mais azul-marinho: containers de seção inteiros, não só o cabeçalho ── */
body.tema-claro #sl-vagas [style*="background:var(--dk3);border:1px solid var(--bd);border-radius:14px;padding:12px 14px"],
body.tema-claro #sl-profis [style*="background:var(--dk3);border:1.5px solid var(--bd);border-radius:16px;overflow:hidden"],
body.tema-claro #sl-profis [style*="background:var(--dk3);border:1px solid var(--bd);border-radius:16px;padding:14px;margin-bottom:16px"],
body.tema-claro #sl-profis [style*="background:var(--dk3);border:1px solid var(--bd);border-radius:14px;padding:4px"],
body.tema-claro #sl-profis [style*="background:var(--dk3);border:1px solid var(--bd);border-radius:14px;padding:14px;margin-bottom:14px"],
body.tema-claro #sl-parceiros [style*="background:var(--dk3);border:1px solid var(--bd);border-radius:16px"],
body.tema-claro #sl-perfil [style*="background:var(--dk3);border:1px solid var(--bd);border-radius:14px;padding:14px 16px"]{
  background:#0D1B3E !important;
  border-color:#0D1B3E !important;
  --tx:#FFFFFF;
  --mu:#B8C2D9;
  --mu2:#9CA8C7;
  --bd:rgba(255,255,255,0.15);
  --dk3:rgba(255,255,255,0.08);
  --card:rgba(255,255,255,0.07);
  --dk2:rgba(255,255,255,0.06);
}
/* Card "Inclusão" em Vagas: azul-marinho sólido, igual Prestador */
body.tema-claro #sl-vagas [style*="background:var(--dk3);border:1px solid var(--bd);border-radius:16px;padding:16px;cursor:pointer"]{
  background:#0D1B3E !important;
  border:1.5px solid #0D1B3E !important;
  --tx:#FFFFFF;
  --mu:#B8C2D9;
}
/* ── Drawer lateral (Meu Negócio/Ofertas) e card 'Você é Frila?' também em azul-marinho ── */
body.tema-claro .fd-header{
  background:#0D1B3E !important;
  --tx:#FFFFFF;
  --mu:#B8C2D9;
  --bd:rgba(255,255,255,0.15);
  --dk3:rgba(255,255,255,0.1);
}
body.tema-claro .fd-close{ background:rgba(255,255,255,0.15) !important; border-color:rgba(255,255,255,0.25) !important; color:#fff !important; }
body.tema-claro #frila-painel [style*="background:var(--dk3);border:1px solid rgba(232,89,12,0.2);border-radius:14px;text-align:center"]{
  background:#0D1B3E !important;
  border-color:#0D1B3E !important;
  --tx:#FFFFFF;
  --mu:#B8C2D9;
}
body.tema-claro #sl-parceiros [style*="background:var(--dk3);border:1px solid var(--bd);border-radius:16px"] .syne{
  color:#fff !important;
}
/* Cabeçalho do painel "Frilas" (lateral) também em azul-marinho */
body.tema-claro #frila-painel > div:first-child{
  background:#0D1B3E !important;
  margin:-16px -16px 16px !important;
  padding:16px !important;
  border-radius:0 0 16px 16px !important;
}
body.tema-claro #frila-painel > div:first-child [onclick="_fecharPainelFrilas()"]{
  background:rgba(255,255,255,0.15) !important;
  border-color:rgba(255,255,255,0.25) !important;
  color:#fff !important;
}
body.tema-claro #frila-painel > div:first-child .syne{ color:#fff !important; }
body.tema-claro #frila-painel > div:first-child span{ color:#fff !important; }
/* Nomes das profissões (Eletricista, Diarista, etc.) em laranja no card "Tô disponível" */
body.tema-claro #disponiveis-lista [style*="font-size:9px;color:var(--gr)"]{
  color:var(--pri) !important;
}
/* Cards de profissionais (Master): lateral azul-marinho transparente */
body.tema-claro #sl-profis [data-area="Psicologia"][style*="background:var(--card)"],
body.tema-claro #sl-profis [data-area="Nutrição"][style*="background:var(--card)"],
body.tema-claro #sl-profis [data-area="Advocacia"][style*="background:var(--card)"]{
  border:1px solid #0D1B3E !important;
}
/* Cards de "Ofertas do Dia" no drawer: contorno completo azul-marinho em vez de laranja */
body.tema-claro [style*="border:1px solid rgba(232,89,12,0.18);border-left:2px solid var(--pri)"]{
  border:1.5px solid #0B2545 !important;
}
/* Barra de sub-abas "Sou Parceiro / Frilas" também azul-marinho */
body.tema-claro #sl-parceiros [style*="display:flex;background:var(--dk3);border-radius:14px;padding:4px"]{
  background:#0D1B3E !important;
}
/* Card "Suas Informações" do formulário Sou Parceiro também azul-marinho */
body.tema-claro #parc-view-sou > div[style*="border:1px solid var(--bd);border-radius:16px;padding:18px"]{
  background:#0D1B3E !important;
  border-color:#0D1B3E !important;
  --tx:#FFFFFF;
  --mu:#B8C2D9;
  --mu2:#9CA8C7;
  --bd:rgba(255,255,255,0.15);
  --dk3:rgba(255,255,255,0.08);
}
body.tema-claro #parc-view-sou > div[style*="border:1px solid var(--bd);border-radius:16px;padding:18px"] .lbl{
  color:#B8C2D9 !important;
}
/* ── Vagas Urgentes: tirar o "mar laranja", trazer azul-marinho como 2ª cor ── */
body.tema-claro #sl-vagas [style*="background:rgba(232,89,12,0.05);border:1px solid rgba(232,89,12,0.2)"]{
  background:#FAFBFC !important;
  border:1px solid #EEF0F2 !important;
  border-left:3px solid #0B2545 !important;
}
body.tema-claro #sl-vagas [style*="background:rgba(232,89,12,0.04);border:1px solid rgba(232,89,12,0.15)"]{
  background:#FFFFFF !important;
  border:1px solid #EEF0F2 !important;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:inherit;}
html,body{width:100%;height:100%;overflow:hidden;background:#12141C;display:flex;justify-content:center;align-items:center;font-family:"DM Sans",sans-serif;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;}
#app{width:100%;max-width:430px;height:100vh;background:var(--dk);position:relative;overflow:hidden;display:flex;flex-direction:column}
.syne{font-family:"Syne",sans-serif}
::-webkit-scrollbar{display:none}
/* screens */
.screen{position:absolute;top:0;left:0;right:0;bottom:0;display:none;flex-direction:column;background:var(--dk)}
.screen.on{display:flex}
/* auth */
#s-auth{z-index:200;overflow-y:auto;display:none;flex-direction:column;align-items:center;padding:24px 28px;-webkit-overflow-scrolling:touch}#s-auth.on{display:flex!important}#s-main{display:none!important;z-index:10}#s-main.on{display:flex!important;flex-direction:column;z-index:10}
/* main layout */

#main-header{padding:12px 16px;border-bottom:1px solid var(--bd);background:var(--dk);flex-shrink:0;position:relative;z-index:795}
#slides-wrap{flex:1;min-height:0;position:relative;overflow:hidden;z-index:1}
.slide{position:absolute;top:0;left:0;right:0;bottom:0;overflow-y:auto;overflow-x:hidden;padding:14px 16px calc(100px + env(safe-area-inset-bottom));display:none;-webkit-overflow-scrolling:touch;background:var(--dk)}
.slide.on{display:block!important;visibility:visible!important;opacity:1!important;z-index:2}
[onclick]{touch-action:manipulation;-webkit-tap-highlight-color:rgba(232,89,12,0.1);cursor:pointer}
.nb{touch-action:manipulation}
button{touch-action:manipulation}
#bot-nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:430px;background:#0D1B3E;border-top:1px solid var(--bd);display:flex;z-index:100;flex-shrink:0;padding-bottom:env(safe-area-inset-bottom)}
body > .vc{display:none!important}
/* vitrine screen */
#s-vitrine{z-index:150}
/* negocio detalhe */
/* s-negocio: estilos agora inline */
.neg-foto-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:14px}
.neg-foto-item{height:110px;border-radius:14px;background:var(--dk3);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;font-size:40px;overflow:hidden}
.neg-oferta-card{background:linear-gradient(135deg,rgba(232,89,12,0.08),rgba(255,107,53,0.04));border:1.5px solid rgba(232,89,12,0.25);border-radius:16px;padding:16px;margin-bottom:14px}
.neg-serv-tag{display:inline-flex;align-items:center;padding:5px 12px;border-radius:20px;font-size:11px;font-weight:700;background:var(--dk3);border:1px solid var(--bd);color:var(--mu2);margin:3px 3px 0 0}
/* overlays */
#sheet-bg{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);z-index:800;display:none;backdrop-filter:blur(4px)}
#sheet{position:fixed;bottom:0;left:50%;transform:translateX(-50%) translateY(100%);width:100%;max-width:430px;background:#0D1B3E;border-radius:24px 24px 0 0;padding:24px;z-index:801;transition:transform 0.38s cubic-bezier(0.16,1,0.3,1);max-height:82vh;overflow-y:auto}
#sheet.open{transform:translateX(-50%) translateY(0)}
#radar-bg{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.88);z-index:400;display:none;align-items:center;justify-content:center;padding:24px;backdrop-filter:blur(8px)}
#radar-bg.on{display:flex}
/* toast */
#toast{position:absolute;top:68px;left:50%;transform:translateX(-50%) translateY(-20px);padding:10px 20px;border-radius:30px;font-size:12px;font-weight:600;font-family:"Syne",sans-serif;z-index:9999;opacity:0;transition:all 0.3s;white-space:nowrap;pointer-events:none;background:var(--gr);color:#fff}
#toast.on{transform:translateX(-50%) translateY(0);opacity:1}
/* reusable */
.card{background:var(--card);border:1px solid var(--bd);border-radius:16px;padding:16px;margin-bottom:12px}
.btn-pri{width:100%;padding:14px;border:none;border-radius:14px;font-family:"Syne",sans-serif;font-weight:800;font-size:15px;cursor:pointer;background:linear-gradient(135deg,var(--pri),var(--priL));color:#fff;touch-action:manipulation;-webkit-tap-highlight-color:rgba(232,89,12,0.3)}
.btn-wa{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:14px;background:linear-gradient(135deg,#25D366,#128C7E);border:none;border-radius:14px;color:#fff;font-family:"Syne",sans-serif;font-weight:800;font-size:15px;cursor:pointer;text-decoration:none}
.inp{width:100%;padding:13px 16px;background:var(--dk3);border:1px solid var(--bd);border-radius:12px;color:var(--tx);font-size:14px;outline:none;font-family:"DM Sans",sans-serif}
.lbl{display:block;font-size:11px;font-weight:600;color:var(--mu2);margin-bottom:5px;text-transform:uppercase;letter-spacing:.5px;margin-top:10px}
.badge{display:inline-flex;align-items:center;padding:3px 8px;border-radius:6px;font-size:10px;font-weight:700;font-family:"Syne",sans-serif}
/* nav buttons */
.nb{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 2px 6px;border:none;background:transparent;color:var(--mu);cursor:pointer;font-family:"Syne",sans-serif;font-weight:600;font-size:8.5px;position:relative;transition:color .2s}
.nb .ni{font-size:19px;width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:2px;transition:all .2s}
.nb.on-feed,.nb.on-vagas,.nb.on-planos,.nb.on-perfil,.nb.on-profis,.nb.on-parceiros{color:var(--pri)!important}
.nb.on-suporte{color:var(--gr)!important}
.nb.on-feed .ni,.nb.on-vagas .ni,.nb.on-planos .ni,.nb.on-perfil .ni,.nb.on-parceiros .ni,.nb.on-profis .ni{background:rgba(232,89,12,0.18)!important;border-radius:10px}
.nb.on-suporte .ni{background:rgba(0,214,143,0.15)!important}
.nb.on-feed svg,.nb.on-vagas svg,.nb.on-planos svg,.nb.on-perfil svg,.nb.on-profis svg,.nb.on-parceiros svg{stroke:var(--pri)!important}
.nb.on-suporte svg{stroke:var(--gr)!important}
/* toggle */
.tgl{width:44px;height:24px;border-radius:30px;position:relative;cursor:pointer;transition:background .3s;flex-shrink:0;border:1px solid var(--bd)}
.tgl::after{content:"";width:18px;height:18px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transition:left .3s;box-shadow:0 2px 4px rgba(0,0,0,.3)}
.tgl.on{background:var(--gr)}.tgl.on::after{left:23px}
.tgl.off{background:var(--dk3)}
/* carousel */
.car-wrap{overflow:hidden;border-radius:16px;margin-bottom:8px}
.car-track{display:flex;transition:transform .65s cubic-bezier(.25,.46,.45,.94)}
.car-slide{min-width:100%;height:165px;position:relative;display:flex;flex-direction:column;justify-content:flex-end;padding:16px;flex-shrink:0}
.car-dots{display:flex;justify-content:center;gap:6px;padding:6px 0 10px}
.dot{height:5px;border-radius:3px;border:none;cursor:pointer;transition:all .35s}
.dot.on{width:20px;background:var(--pri)}
.dot.off{width:5px;background:rgba(255,255,255,.2)}
/* ads */
.ad-slide{min-width:100%;height:160px;padding:16px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;border-radius:18px;flex-shrink:0}
/* vaga card */
#vagas-list .vc[data-tipo="servico"]{display:none!important}#vagas-trab,#vagas-emp,#vagas-preciso,#vagas-ofereco,#vagas-ok,#vagas-inclusao,#vagas-online-trab,#vagas-prestador{display:none}#vagas-trab.vis,#vagas-emp.vis,#vagas-preciso.vis,#vagas-ofereco.vis,#vagas-ok.vis,#vagas-inclusao.vis,#vagas-online-trab.vis,#vagas-prestador.vis{display:block!important}
.vc{background:var(--card);border:1px solid var(--bd);border-radius:18px;padding:16px;margin-bottom:12px}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.8}}
@keyframes pulsar-ring{0%{box-shadow:0 0 0 0 rgba(232,89,12,.4)}70%{box-shadow:0 0 0 8px rgba(232,89,12,0)}100%{box-shadow:0 0 0 0 rgba(232,89,12,0)}}
/* btn-pulsar: static */
@keyframes radar{0%,100%{opacity:1}50%{opacity:.85}}
.blink{animation:blink 1.2s infinite}
.pulse-a{animation:pulse 2s infinite}
.radar-a{animation:radar 1.5s infinite}

#sl-suporte.slide{padding-top:20px}
#sl-perfil.slide{padding-top:14px}
#sl-profis.slide{padding-top:14px}
#sl-planos.slide{padding-top:14px}
#sl-parceiros.slide{padding-top:14px}
@keyframes pulse-urgente{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.4)}}
#modal-inclusao{position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:20px}
#modal-inclusao.open{display:flex}
#modal-inclusao-bg{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.75);backdrop-filter:blur(6px)}
#modal-inclusao-box{position:relative;width:100%;max-width:360px;border-radius:24px;padding:24px;z-index:1}
.inc-pcd{background:linear-gradient(135deg,#0A1628,#0D1F3C);border:1.5px solid rgba(30,120,220,0.3)}
.inc-50{background:linear-gradient(135deg,#1a1000,#2d2000);border:1.5px solid rgba(255,184,0,0.5)}
@keyframes radar-pulse{0%{transform:scale(1);opacity:.5}100%{transform:scale(1.8);opacity:0}}
.radar-wrap{position:relative;width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.radar-ring{position:absolute;width:44px;height:44px;border-radius:50%;border:1px solid rgba(0,214,143,0.3);pointer-events:none}
.radar-ring:nth-child(2){animation-delay:.6s}
.radar-ring:nth-child(3){animation-delay:1.2s}
.radar-dot{width:12px;height:12px;border-radius:50%;background:#00D68F;z-index:1;position:relative;animation:online-pulse 2s ease-in-out infinite}@keyframes online-pulse{0%,100%{box-shadow:0 0 0 0 rgba(0,214,143,0.4)}50%{box-shadow:0 0 0 6px rgba(0,214,143,0)}}
@keyframes pulseGr{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(1.5)}}
/* ── FEED DRAWER (painel lateral esquerdo) ── */
#feed-drawer-bg{position:fixed;inset:0;background:rgba(0,0,0,0.72);z-index:789;display:none;backdrop-filter:blur(4px)}
#feed-drawer-bg.fd-open{display:block}
#feed-drawer{position:fixed;top:0;left:0;bottom:0;width:88%;max-width:360px;background:var(--dk2);z-index:790;transform:translateX(-100%);transition:transform 0.36s cubic-bezier(0.16,1,0.3,1);overflow-y:auto;overflow-x:hidden;padding:0 0 120px;-webkit-overflow-scrolling:touch}
#feed-drawer.fd-open{transform:translateX(0)}
#feed-drawer::-webkit-scrollbar{display:none}
.fd-header{display:flex;align-items:center;justify-content:space-between;padding:20px 18px 16px;border-bottom:1px solid var(--bd);position:sticky;top:0;background:var(--dk2);z-index:2}
.fd-close{width:36px;height:36px;border-radius:10px;background:var(--dk3);border:1px solid var(--bd);color:var(--tx);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1}
.fd-body{padding:16px 16px 0}
</style>
<script>var _LOGO_SRC="data:image/png;base64,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";</script>
</head>
<body>
<div id="app">
<div id="toast"></div>

<!-- ══ AUTH ══ -->
<div id="s-auth" class="screen on">
  <div style="text-align:center;margin-bottom:24px;margin-top:16px;width:100%">
    <div style="width:80px;height:80px;margin:0 auto 16px"><img src="" class="logo-img" style="width:80px;height:80px;object-fit:cover" alt="FrilaOne"/></div>
    <h1 class="syne" style="font-size:32px;font-weight:800;color:var(--tx)">Frila<span style="color:var(--pri)">One</span></h1>
    <p style="color:var(--mu);font-size:13px;margin-top:6px">Tudo o que você precisa em um só lugar!</p>
  </div>
  <!-- trust badges -->
  <div style="display:flex;gap:8px;margin-bottom:20px;width:100%">
    <div style="flex:1;background:var(--dk3);border:1px solid var(--bd);border-radius:14px;padding:10px 6px;display:flex;flex-direction:column;align-items:center;gap:5px;text-align:center">
      <div style="display:flex;justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></div>
      <div class="syne" style="font-size:10px;font-weight:800;color:var(--tx);line-height:1.2">100% Seguro</div>
      <div style="font-size:9px;color:var(--mu)">Pagamento protegido</div>
    </div>
    <div style="flex:1;background:var(--dk3);border:1px solid var(--bd);border-radius:14px;padding:10px 6px;display:flex;flex-direction:column;align-items:center;gap:5px;text-align:center">
      <div style="display:flex;justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
      <div class="syne" style="font-size:10px;font-weight:800;color:var(--tx);line-height:1.2">Rápido</div>
      <div style="font-size:9px;color:var(--mu)">Match em minutos</div>
    </div>
    <div style="flex:1;background:var(--dk3);border:1px solid var(--bd);border-radius:14px;padding:10px 6px;display:flex;flex-direction:column;align-items:center;gap:5px;text-align:center">
      <div style="display:flex;justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></div>
      <div class="syne" style="font-size:10px;font-weight:800;color:var(--tx);line-height:1.2">Ecossistema</div>
      <div style="font-size:9px;color:var(--mu)">Tudo em um lugar</div>
    </div>
  </div>
  <!-- tabs -->
  <div style="display:flex;background:var(--dk3);border-radius:12px;padding:4px;margin-bottom:20px;width:100%;gap:4px">
    <button id="auth-tab-login" onclick="authTab('login')" style="flex:1;padding:10px;border:none;border-radius:9px;font-family:Syne,sans-serif;font-weight:700;font-size:13px;cursor:pointer;background:var(--pri);color:#fff">Entrar</button>
    <button id="auth-tab-reg" onclick="authTab('register')" style="flex:1;padding:10px;border:none;border-radius:9px;font-family:Syne,sans-serif;font-weight:700;font-size:13px;cursor:pointer;background:transparent;color:var(--mu)">Cadastrar</button>
  </div>
  <!-- register extras -->
  <div id="reg-extras" style="display:none;width:100%">

    <label class="lbl" style="margin-top:0">Nome completo</label>
    <input class="inp" id="inp-nome-cad" placeholder="Seu nome" style="margin-bottom:12px"/>
  </div>
  <!-- email + senha -->
  <div style="width:100%;margin-bottom:14px">
    <label class="lbl">E-mail</label>
    <input class="inp" type="email" id="inp-email" placeholder="seu@email.com" style="margin-bottom:10px"/>
    <label class="lbl">Senha</label>
    <input class="inp"id="inp-senha-cad" type="password" placeholder="••••••••"/>
  </div>
  <!-- código de convite — só no cadastro -->
  <div id="reg-codigo" style="display:none;width:100%;margin-bottom:14px">
    <label class="lbl">Código de convite (opcional)</label>
    <input class="inp" id="inp-codigo-cad" placeholder="Ex: GP-00001" style="text-transform:uppercase"/>
    <div id="codigo-cad-msg" style="font-size:11px;margin-top:6px;display:none"></div>
    <div style="font-size:11px;color:var(--mu);margin-top:6px">Tem um código? Digite aqui pra ganhar dias grátis. Não tem? Pode deixar em branco.</div>
  </div>
  <!-- terms checkbox — touch-friendly -->
  <button type="button" onclick="toggleTerms()" style="display:flex;align-items:center;gap:12px;width:100%;touch-action:manipulation;-webkit-tap-highlight-color:transparent;padding:12px 14px;margin-bottom:14px;background:var(--dk3);border-radius:12px;border:1.5px solid var(--bd);cursor:pointer;text-align:left;-webkit-tap-highlight-color:rgba(232,89,12,0.15)">
    <div id="terms-box" style="width:22px;height:22px;border-radius:7px;border:2px solid var(--bd);background:transparent;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.2s"></div>
    <p style="font-size:12px;color:var(--mu2);line-height:1.5;flex:1;margin:0">
      Li e concordo com os <span style="color:var(--pri);font-weight:700">Termos de Uso</span> e a <span style="color:var(--pri);font-weight:700">Política de Privacidade</span> do FrilaOne.
    </p>
  </button>
  <button id="auth-btn" class="btn-pri" onclick="doLogin()" style="margin-bottom:6px;touch-action:manipulation;cursor:pointer;-webkit-tap-highlight-color:transparent">&#x26A1; Entrar agora</button>
  <div id="link-esqueci" style="text-align:center;margin-bottom:14px">
    <span onclick="recuperarSenha()" style="font-size:11px;color:var(--bl);cursor:pointer;font-weight:600">Esqueceu a senha? Recuperar por e-mail</span>
  </div>
  <!-- ou -->
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;color:var(--mu);font-size:12px;width:100%">
    <div style="flex:1;height:1px;background:var(--bd)"></div>ou<div style="flex:1;height:1px;background:var(--bd)"></div>
  </div>
  <!-- social -->
  <div style="display:flex;gap:10px;width:100%;margin-bottom:16px">
    <button id="btn-google" style="flex:1;padding:12px;background:var(--dk3);border:1px solid var(--bd);border-radius:12px;color:var(--tx);font-size:18px;cursor:pointer;text-align:center;font-family:Syne,sans-serif;font-weight:800;touch-action:manipulation">G</button>
    <button id="btn-facebook" style="flex:1;padding:12px;background:var(--dk3);border:1px solid var(--bd);border-radius:12px;color:var(--tx);font-size:18px;cursor:pointer;text-align:center;font-family:Syne,sans-serif;font-weight:800;touch-action:manipulation">f</button>
  </div>
  <!-- aviso juridico rodape login -->
  <div style="width:100%;background:rgba(255,184,0,0.06);border:1px solid rgba(255,184,0,0.2);border-radius:12px;padding:12px 14px;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;gap:8px">
      <span style="font-size:14px;flex-shrink:0;margin-top:1px">⚖️</span>
      <div>
        <div style="font-size:10px;font-weight:800;color:rgba(255,184,0,0.9);font-family:Syne,sans-serif;margin-bottom:4px;letter-spacing:.4px">AVISO LEGAL — ISENÇÃO DE RESPONSABILIDADE</div>
        <p style="font-size:9.5px;color:var(--mu);line-height:1.55;margin:0">
          O <strong style="color:rgba(255,255,255,0.5)">FrilaOne</strong> é uma <strong style="color:rgba(255,255,255,0.5)">plataforma de conexão</strong> entre prestadores de serviço, trabalhadores, empresas e clientes. Não somos parte em nenhum acordo, contrato ou negociação de valores realizada entre os usuários.<br><br>
          Acordos financeiros, combinações de preços, formas de pagamento e condições de serviço são de <strong style="color:rgba(255,255,255,0.5)">responsabilidade exclusiva das partes envolvidas</strong>. O FrilaOne não intermedia pagamentos, não garante a execução de serviços e não responde por inadimplemento, danos ou prejuízos decorrentes de negociações entre usuários.<br><br>
          Ao utilizar esta plataforma, você declara ter lido e concordar com nossos <span onclick="showToast('Termos em breve!')" style="color:var(--bl);cursor:pointer;text-decoration:underline">Termos de Uso</span> e <span onclick="showToast('Política em breve!')" style="color:var(--bl);cursor:pointer;text-decoration:underline">Política de Privacidade</span>. Em caso de conflito entre usuários, recomendamos contato com os órgãos competentes (PROCON, Juizado Especial Cível).
        </p>
      </div>
    </div>
  </div>
  <div style="text-align:center;font-size:9px;color:rgba(255,255,255,0.18);padding-bottom:12px">FrilaOne © 2025 · Sete Lagoas, MG · Plataforma de Conexão</div>
</div>

<!-- BOAS VINDAS - aparece so no primeiro acesso -->
<div id="welcome-modal" style="position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;background:rgba(0,0,0,0.85);display:none;align-items:center;justify-content:center;padding:24px;backdrop-filter:blur(8px)">
  <div style="background:var(--dk2);border:2px solid rgba(232,89,12,0.4);border-radius:24px;padding:28px;width:100%;max-width:340px;text-align:center;position:relative">
    <button onclick="fecharBemVindo()" style="position:absolute;top:12px;right:12px;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:var(--mu2);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1">&#x2715;</button>
    <div id="welcome-timer" style="position:absolute;top:14px;left:16px;font-size:10px;color:var(--mu);font-weight:600;font-family:Syne,sans-serif">30s</div>
    <div style="margin-bottom:12px"><img src="" class="logo-img" style="width:72px;height:72px;object-fit:contain" alt="FrilaOne"/></div>
    <div class="syne" style="font-size:22px;font-weight:800;color:var(--tx);margin-bottom:8px">Bem-vindo ao <span style="color:var(--pri)">FrilaOne</span>!</div>
    <div style="font-size:13px;color:var(--mu2);line-height:1.6;margin-bottom:20px">O marketplace dos melhores freelancers de Sete Lagoas e região. Precisou? Tá na mão!</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
      <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.04);border-radius:12px;padding:10px 14px">
        <span style="font-size:20px">&#x1F477;</span><span style="font-size:12px;color:var(--mu2);text-align:left">Encontre vagas e serviços perto de você</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.04);border-radius:12px;padding:10px 14px">
        <span style="font-size:20px">🟢</span><span style="font-size:12px;color:var(--mu2);text-align:left">Ative o radar e apareça para quem precisa</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.04);border-radius:12px;padding:10px 14px">
        <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/></svg></span><span style="font-size:12px;color:var(--mu2);text-align:left">Suba de nível e ganhe recompensas</span>
      </div>
    </div>
    <button onclick="fecharBemVindo()" class="btn-pri" style="width:100%">Começar agora! &#x1F680;</button>
    </div>
  </div>
</div>

<!-- ══ MAIN ══ -->
<div id="s-main" class="screen">
  <!-- header -->
  <div id="main-header" style="display:flex;justify-content:space-between;align-items:center">
    <!-- esquerda: logo + nome -->
    <div style="display:flex;align-items:center;gap:8px">
      <div style="width:36px;height:36px;border-radius:10px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
        <img src="" class="logo-img" style="width:36px;height:36px;object-fit:contain" alt="FrilaOne"/>
      </div>
      <div>
        <div class="syne" style="font-size:15px;font-weight:800;color:var(--tx);line-height:1.1">Frila<span style="color:var(--pri)">One</span></div>
        <div style="font-size:9px;color:var(--mu);font-weight:300;line-height:1">Ola, <span class="user-nome" style="color:var(--tx);font-weight:600">Usuario</span> <span id="header-nivel-badge" style="font-size:10px">&#x1F949;</span> <span id="header-trial-badge" style="display:none;font-size:9px;font-weight:700;color:#22C55E;background:rgba(34,197,94,0.12);border:1px solid rgba(34,197,94,0.25);border-radius:20px;padding:1px 6px;margin-left:3px"></span></div>
      </div>
    </div>
    <!-- direita: P | Frilas | Radar | Sino | Perfil -->
    <div style="display:flex;gap:4px;align-items:center">
      <button onclick="abrirPulsar()" id="btn-pulsar" title="Procurar" style="width:30px;height:30px;background:linear-gradient(135deg,#1e78dc,#0055aa);border:none;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;touch-action:manipulation;flex-shrink:0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
      <button onclick="_abrirPainelFrilas()" style="height:30px;padding:0 8px;background:transparent;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;touch-action:manipulation;flex-shrink:0">
        <span id="header-online-label" style="font-family:Syne,sans-serif;font-weight:700;font-size:11px;color:var(--tx)">Online agora</span>
        <span style="width:7px;height:7px;background:var(--gr);border-radius:50%;display:inline-block;animation:pulseGr 1.4s infinite;flex-shrink:0"></span>
      </button>
      <button onclick="openRadar()" style="width:30px;height:30px;background:var(--dk3);border:1px solid rgba(232,89,12,0.3);border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--tx);flex-shrink:0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/></svg></button>
      <button id="btn-sino" onclick="_abrirNotificacoes()" style="width:30px;height:30px;background:var(--dk3);border:1px solid var(--bd);border-radius:8px;cursor:pointer;position:relative;display:flex;align-items:center;justify-content:center;color:var(--tx);flex-shrink:0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg><div style="width:7px;height:7px;background:var(--rd);border-radius:50%;position:absolute;top:3px;right:3px;border:1.5px solid var(--dk)"></div></button>

    </div>
  </div>
  <!-- slides -->
  <div id="slides-wrap">

    <!-- ── FEED ── -->
    <div id="sl-feed" class="slide on">
      <!-- frase slogan — branca, fina, centralizada -->
      <div id="frila-slogan" style="text-align:center;margin-bottom:18px;margin-top:6px">
        <span class="frila-slogan-txt" style="font-size:18px;font-weight:800;color:#fff;letter-spacing:.3px">Precisou? Tá na mão! <span style="color:var(--pri)">FrilaOne.</span></span>
      </div>

      <!-- ── TÔ DISPONÍVEL AGORA ── -->
      <div id="card-disponivel" style="background:linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02));border:1.5px solid rgba(255,255,255,0.25);border-top:3px solid var(--pri);border-radius:16px;padding:14px 16px;margin-bottom:18px">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div>
            <div class="syne" style="font-size:13px;font-weight:800;color:var(--gr);margin-bottom:2px"><div class="radar-dot" style="width:6px;height:6px;display:inline-block;border-radius:50%;background:var(--gr);vertical-align:middle;margin-right:4px;box-shadow:0 0 4px rgba(0,214,143,0.6)"></div>Tô disponível agora!</div>
            <div style="font-size:11px;color:var(--mu)">Apareça para quem busca profissional hoje</div>
          </div>
          <button id="btn-disponivel" onclick="toggleDisponivel()" style="padding:9px 16px;background:transparent;border:1.5px solid var(--gr);border-radius:12px;color:var(--gr);font-family:Syne,sans-serif;font-weight:800;font-size:12px;cursor:pointer">Ativar</button>
        </div>
        <div id="disponiveis-lista" style="margin-top:12px;display:flex;gap:8px;overflow-x:auto;padding-bottom:2px">
          <div onclick="_chatInterno('Carlos','Eletricista','👨‍&#x1F527;','var(--gr)')" style="flex-shrink:0;background:rgba(0,214,143,0.08);border:1px solid rgba(0,214,143,0.2);border-radius:10px;padding:6px 10px;display:flex;align-items:center;gap:6px;cursor:pointer">
            <div style="color:var(--gr)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div><div onclick="event.stopPropagation();_abrirPerfilPublico({nome:'Carlos',tipo:'prestador',icon:'👨‍🔧',area:'Eletricista',rating:4.8,trabalhos:80,score:70,online:true,cor:'var(--gr)'})"><div style="font-size:10px;font-weight:700;color:var(--tx)">Carlos</div><div style="font-size:9px;color:var(--gr)">Eletricista</div></div>
          </div>
          <div onclick="_chatInterno('Maria','Diarista','&#x1F9F9;','var(--gr)')" style="flex-shrink:0;background:rgba(0,214,143,0.08);border:1px solid rgba(0,214,143,0.2);border-radius:10px;padding:6px 10px;display:flex;align-items:center;gap:6px;cursor:pointer">
            <div style="color:var(--gr)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5 3.51-8.95 6.28-15 8.05"/></svg></div><div onclick="event.stopPropagation();_abrirPerfilPublico({nome:'Maria',tipo:'prestador',icon:'&#x1F9F9;',area:'Diarista',rating:4.8,trabalhos:80,score:70,online:true,cor:'var(--gr)'})"><div style="font-size:10px;font-weight:700;color:var(--tx)">Maria</div><div style="font-size:9px;color:var(--gr)">Diarista</div></div>
          </div>
          <div onclick="_chatInterno('Sandro','Jardineiro','&#x1F33F;','var(--gr)')" style="flex-shrink:0;background:rgba(0,214,143,0.08);border:1px solid rgba(0,214,143,0.2);border-radius:10px;padding:6px 10px;display:flex;align-items:center;gap:6px;cursor:pointer">
            <div style="color:var(--gr)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12M12 12C12 7 7 4 2 4c0 5 3 8.5 7 9.5M12 12c0-5 5-8 10-8-1 5-4 8.5-10 8.5"/></svg></div><div onclick="event.stopPropagation();_abrirPerfilPublico({nome:'Sandro',tipo:'prestador',icon:'&#x1F33F;',area:'Jardineiro',rating:4.8,trabalhos:80,score:70,online:true,cor:'var(--gr)'})"><div style="font-size:10px;font-weight:700;color:var(--tx)">Sandro</div><div style="font-size:9px;color:var(--gr)">Jardineiro</div></div>
          </div>
          <div onclick="_chatInterno('Fábio','Limpeza de Piscina','🏊','var(--gr)')" style="flex-shrink:0;background:rgba(0,214,143,0.08);border:1px solid rgba(0,214,143,0.2);border-radius:10px;padding:6px 10px;display:flex;align-items:center;gap:6px;cursor:pointer">
            <div style="color:var(--gr)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20M6 6c0 6 12 6 12 0M6 18c0-6 12-6 12 0"/></svg></div><div onclick="event.stopPropagation();_abrirPerfilPublico({nome:'Fábio',tipo:'prestador',icon:'🏊',area:'Limpeza de Piscina',rating:4.8,trabalhos:80,score:70,online:true,cor:'var(--gr)'})"><div style="font-size:10px;font-weight:700;color:var(--tx)">Fábio</div><div style="font-size:9px;color:var(--gr)">Limpeza de Piscina</div></div>
          </div>
          <div onclick="_chatInterno('Pedro','Encanador','&#x1F527;','var(--gr)')" style="flex-shrink:0;background:rgba(0,214,143,0.08);border:1px solid rgba(0,214,143,0.2);border-radius:10px;padding:6px 10px;display:flex;align-items:center;gap:6px;cursor:pointer">
            <div style="color:var(--gr)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div><div onclick="event.stopPropagation();_abrirPerfilPublico({nome:'Pedro',tipo:'prestador',icon:'&#x1F527;',area:'Encanador',rating:4.8,trabalhos:80,score:70,online:true,cor:'var(--gr)'})"><div style="font-size:10px;font-weight:700;color:var(--tx)">Pedro</div><div style="font-size:9px;color:var(--gr)">Encanador</div></div>
          </div>
        </div>
      </div>

      <!-- hero banner -->
      <div style="background:linear-gradient(135deg,#0D1B3E,#0A1530);border-radius:20px;overflow:hidden;margin-bottom:16px;position:relative;min-height:180px">
        <!-- Círculos decorativos -->
        <div style="position:absolute;top:-30px;left:-30px;width:140px;height:140px;background:rgba(255,255,255,0.05);border-radius:50%"></div>
        <div style="position:absolute;bottom:-20px;left:30px;width:80px;height:80px;background:rgba(255,255,255,0.04);border-radius:50%"></div>
        <!-- Foto lado direito -->
       
        <!-- Conteúdo texto — largura total -->
        <div style="position:relative;z-index:2;padding:20px 22px 20px 22px">
          <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,0.18);border-radius:20px;padding:3px 10px;margin-bottom:12px">
            <span style="font-size:9px;color:#fff;font-weight:700;letter-spacing:.5px">&#x26A1; SETE LAGOAS · MG</span>
          </div>
          <div class="syne" style="font-size:26px;font-weight:800;color:#fff;line-height:1.15;margin-bottom:6px">Sua rede.<br>Sua Casa de Conexões.</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.92);margin-bottom:16px;line-height:1.5;font-weight:500">Conecte-se, cresça e seja encontrado.</div>
          <div style="display:flex;gap:8px">
            <div style="flex:1;background:linear-gradient(135deg,#E8590C,#ff7a2e);border-radius:10px;padding:9px 6px;text-align:center">
              <div class="syne" style="font-size:16px;font-weight:800;color:#fff">50+</div>
              <div style="font-size:9px;color:rgba(255,255,255,0.9);margin-top:1px">Profissionais</div>
            </div>
            <div style="flex:1;background:linear-gradient(135deg,#E8590C,#ff7a2e);border-radius:10px;padding:9px 6px;text-align:center">
              <div class="syne" style="font-size:16px;font-weight:800;color:#fff">18</div>
              <div style="font-size:9px;color:rgba(255,255,255,0.9);margin-top:1px">Oportunidades</div>
            </div>
            <div style="flex:1;background:linear-gradient(135deg,#E8590C,#ff7a2e);border-radius:10px;padding:9px 6px;text-align:center">
              <div class="syne" style="font-size:14px;font-weight:800;color:#fff">Sete Lagoas</div>
              <div style="font-size:9px;color:rgba(255,255,255,0.9);margin-top:1px">Cidade piloto</div>
            </div>
          </div>
        </div>
      </div>

      <!-- quick actions -->
      <div id="quick-actions-title" class="syne" style="font-size:16px;font-weight:800;color:#fff;text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px;text-align:center">O que você quer fazer hoje?</div>
      <div id="quick-actions-row" style="display:flex;gap:8px;margin-bottom:16px;justify-content:center">
        <div class="qa-box" onclick="goTab('vagas');vagasGo('trabalhador')" style="flex:0 0 150px;background:rgba(232,89,12,0.07);border:1px solid rgba(232,89,12,0.15);border-radius:14px;padding:12px 6px;text-align:center;cursor:pointer">
          <div class="qa-icon" style="color:var(--pri);margin-bottom:6px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
          <div class="syne qa-title" style="font-size:11px;font-weight:800;color:var(--pri);line-height:1.2;margin-bottom:3px">Buscar Vaga</div>
          <div class="qa-sub" style="font-size:9px;color:var(--mu)">Física ou digital</div>
        </div>
        <div class="qa-box" onclick="goTab('vagas');vagasGo('empresa')" style="flex:0 0 150px;background:rgba(232,89,12,0.07);border:1px solid rgba(232,89,12,0.15);border-radius:14px;padding:12px 6px;text-align:center;cursor:pointer">
          <div class="qa-icon" style="color:var(--pri);margin-bottom:6px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
          <div class="syne qa-title" style="font-size:11px;font-weight:800;color:var(--pri);line-height:1.2;margin-bottom:3px">Contratar</div>
          <div class="qa-sub" style="font-size:9px;color:var(--mu)">Encontre profissionais</div>
        </div>
      </div>

      <!-- BOTÃO: Meu Negócio & Ofertas -->
      <button id="btn-meu-negocio" onclick="abrirFeedDrawer()" style="width:100%;padding:18px 20px;background:#ffffff;border:none;border-radius:16px;color:#0D1B3E;font-family:Syne,sans-serif;font-weight:800;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:10px;touch-action:manipulation;box-shadow:0 4px 20px rgba(0,0,0,0.18);margin-bottom:8px">
        <div style="display:flex;align-items:center;gap:12px">
          <div style="width:38px;height:38px;border-radius:10px;background:rgba(232,89,12,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8590C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
          <div style="text-align:left">
            <div class="mn-title-claro" style="font-size:16px;font-weight:800;color:#0D1B3E;line-height:1.2">Meu Negócio & Ofertas</div>
            <div style="font-size:13px;font-weight:800;color:#E8590C;margin-top:4px;letter-spacing:.1px">Negócios locais · Ofertas do Dia</div>
          </div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D1B3E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      <!-- ticker ao vivo -->
      <div id="live-ticker" style="display:flex;align-items:center;gap:8px;background:rgba(232,89,12,0.08);border:1px solid rgba(232,89,12,0.22);border-left:3px solid var(--pri);border-radius:10px;padding:9px 12px;margin-top:16px;overflow:hidden">
        <span style="width:6px;height:6px;border-radius:50%;background:var(--pri);flex-shrink:0;animation:pulseGr 1.4s infinite"></span>
        <span class="syne" style="font-size:9px;font-weight:800;color:var(--pri);letter-spacing:.4px;flex-shrink:0">AO VIVO</span>
        <span id="live-ticker-text" style="font-size:11.5px;color:var(--tx);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Carlos acabou de ficar disponível · agora</span>
      </div>

    </div><!-- /sl-feed -->

    <!-- ── VAGAS ── -->
    <div id="sl-vagas" class="slide">

      <!-- ══ MENU PRINCIPAL ══ -->
      <div id="vagas-menu">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">
          <button onclick="goTab('feed')" style="width:34px;height:34px;background:var(--dk3);border:1px solid var(--bd);border-radius:10px;color:var(--tx);font-size:18px;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;touch-action:manipulation">&#8592;</button>
          <div class="syne" style="font-size:22px;font-weight:800;color:var(--tx)">💼 Vagas & Serviços</div>
        </div>
        <div class="syne" style="font-size:15px;font-weight:800;color:var(--pri);text-transform:uppercase;letter-spacing:.6px;margin-bottom:20px">O que você quer fazer hoje?</div>

        <!-- grid 2x2 + prestador -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
          <button type="button" onclick="vagasGo('trabalhador')" style="background:rgba(232,89,12,0.1);border:1px solid rgba(232,89,12,0.18);border-radius:16px;padding:16px 12px;cursor:pointer;width:100%;text-align:left;display:flex;flex-direction:column;gap:8px">
            <div style="font-size:30px">&#x1F477;</div>
            <div><div class="syne" style="font-size:13px;font-weight:800;color:var(--tx)">Sou Trabalhador</div><div style="font-size:11px;color:var(--mu);margin-top:2px">Encontrar emprego</div></div>
          </button>
          <button type="button" onclick="vagasGo('empresa')" style="background:rgba(77,159,255,0.1);border:1px solid rgba(77,159,255,0.18);border-radius:16px;padding:16px 12px;cursor:pointer;width:100%;text-align:left;display:flex;flex-direction:column;gap:8px">
            <div style="font-size:30px">&#x1F3E2;</div>
            <div><div class="syne" style="font-size:13px;font-weight:800;color:var(--tx)">Quero Contratar</div><div style="font-size:11px;color:var(--mu);margin-top:2px">Publicar vaga</div></div>
          </button>
        </div>
        <!-- Prestador de Serviço — linha inteira -->
        <button type="button" onclick="vagasGo('prestador')" style="background:rgba(0,214,143,0.08);border:1px solid rgba(0,214,143,0.2);border-radius:16px;padding:16px;cursor:pointer;width:100%;text-align:left;display:flex;align-items:center;gap:14px;margin-bottom:10px">
          <div style="font-size:34px;flex-shrink:0">&#x1F527;</div>
          <div style="flex:1">
            <div class="syne" style="font-size:14px;font-weight:800;color:var(--tx)">Sou Prestador de Serviço</div>
            <div style="font-size:11px;color:var(--mu);margin-top:2px">Eletricista, pedreiro, pintor, hidráulico e mais</div>
          </div>
          <div style="color:var(--mu);font-size:20px">›</div>
        </button>

        <!-- Banner redireciona para Parceiros -->

        <!-- Inclusão -->
        <button type="button" onclick="vagasGo('inclusao')" style="background:var(--dk3);border:1px solid var(--bd);border-radius:16px;padding:16px;cursor:pointer;width:100%;text-align:left;display:flex;align-items:center;gap:14px">
          <div style="font-size:34px;flex-shrink:0">&#x1F91D;</div>
          <div style="flex:1">
            <div class="syne" style="font-size:14px;font-weight:800;color:var(--tx)">Inclusão, PCD e Melhor Idade</div>
            <div style="font-size:11px;color:var(--mu);margin-top:2px">60+ Melhor Idade · PCD · Jovem Aprendiz</div>
          </div>
          <div style="color:var(--mu);font-size:20px">›</div>
        </button>

        <!-- TRIAGEM — acesso rápido para empresa -->
        <div class="card-triagem-empresa" onclick="abrirTriagem()" style="margin-top:14px;background:rgba(0,214,143,0.06);border:1px solid rgba(0,214,143,0.25);border-radius:16px;padding:14px 16px;display:flex;align-items:center;gap:12px;cursor:pointer">
          <div style="width:42px;height:42px;border-radius:12px;background:rgba(0,214,143,0.12);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">&#x1F4CB;</div>
          <div style="flex:1">
            <div style="font-size:11px;color:var(--mu);font-weight:600;text-transform:uppercase;letter-spacing:.5px">Para Empresas</div>
            <div class="syne" style="font-size:14px;font-weight:800;color:var(--gr);margin-top:2px">Triagem de Candidatos</div>
            <div style="font-size:11px;color:var(--mu);margin-top:2px">Gerencie quem se candidatou às suas vagas</div>
          </div>
          <span style="color:var(--mu);font-size:20px">›</span>
        </div>

        <!-- Banner Vagas Brasil -->
        <div onclick="goTab('planos');planTab('vagas-brasil')" style="margin-top:14px;background:var(--dk3);border:1px solid rgba(30,120,220,0.25);border-radius:16px;overflow:hidden;cursor:pointer">
          <div style="background:linear-gradient(90deg,rgba(0,214,143,0.15),rgba(77,159,255,0.08));padding:14px 16px;display:flex;align-items:center;gap:12px">
            <div style="width:40px;height:40px;border-radius:12px;background:rgba(0,214,143,0.12);border:1px solid rgba(0,214,143,0.3);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">🌎</div>
            <div style="flex:1">
              <div class="syne" style="font-size:12px;font-weight:800;color:var(--gr);letter-spacing:.3px">VAGAS EM TODO O BRASIL</div>
              <div style="font-size:11px;color:var(--mu);margin-top:2px">Busque em qualquer cidade por apenas <strong style="color:var(--tx)">R$4,99/mês</strong></div>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D68F" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
      </div>

      <!-- ══ TRABALHADOR ══ -->
      <div id="vagas-trab" style="display:none">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <button onclick="vagasBack()" style="width:34px;height:34px;background:var(--dk3);border:1px solid var(--bd);border-radius:10px;color:var(--tx);font-size:16px;cursor:pointer;flex-shrink:0">←</button>
          <div class="syne" style="font-size:18px;font-weight:800;color:var(--tx)">&#x1F477; Vagas Disponíveis</div>
        </div>
        <div style="position:relative;margin-bottom:14px">
          <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);display:inline-flex;color:var(--mu)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
          <input id="busca-vagas" class="inp" placeholder="Buscar vaga..." style="padding-left:36px;width:100%;box-sizing:border-box" oninput="buscarVagas(this.value)"/>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:16px">
          <button id="vf-todos" onclick="vagasFiltro('todos')" style="padding:6px 14px;background:rgba(232,89,12,0.12);border:1px solid var(--pri);border-radius:20px;color:var(--pri);font-family:Syne,sans-serif;font-weight:600;font-size:11px;cursor:pointer;flex-shrink:0">Todos</button>
          <button id="vf-fisica" onclick="vagasFiltro('fisica')" style="padding:6px 14px;background:transparent;border:1px solid var(--bd);border-radius:20px;color:var(--mu);font-family:Syne,sans-serif;font-weight:600;font-size:11px;cursor:pointer;flex-shrink:0">Presencial</button>
          <button id="vf-digital" onclick="vagasFiltro('digital')" style="padding:6px 14px;background:transparent;border:1px solid var(--bd);border-radius:20px;color:var(--mu);font-family:Syne,sans-serif;font-weight:600;font-size:11px;cursor:pointer;flex-shrink:0">Digital</button>
        </div>
        <!-- Urgentes -->
        <div style="background:rgba(232,89,12,0.05);border:1px solid rgba(232,89,12,0.2);border-radius:14px;padding:12px;margin-bottom:16px">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px">
            <span style="width:8px;height:8px;background:var(--rd);border-radius:50%;display:inline-block"></span>
            <span class="syne" style="font-size:11px;font-weight:700;color:var(--mu2);text-transform:uppercase;letter-spacing:.5px">Vagas Urgentes</span>
            <span style="font-size:10px;color:var(--mu);margin-left:auto">Só Premium</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="background:rgba(232,89,12,0.04);border:1px solid rgba(232,89,12,0.15);border-radius:11px;padding:11px 13px"><div onclick="abrirVagaUrg('Pizzaiolo','Pizzaria Central','5531990010001')" style="display:flex;margin-bottom:8px;align-items:center;gap:10px;cursor:pointer"><span onclick="event.stopPropagation();_abrirPerfilPublico({nome:'Pizzaria Central',tipo:'empresa',icon:'&#x1F355;',area:'Pizzaria',rating:4.7,trabalhos:12,score:80,online:true,cor:'#E8590C'})" style="font-size:18px;flex-shrink:0;cursor:pointer">&#x1F355;</span><div style="flex:1"><div class="syne" style="font-size:13px;font-weight:800;color:var(--tx)">Pizzaiolo</div><div style="font-size:11px;color:var(--mu)">Pizzaria Central</div></div><span style="font-size:10px;color:var(--pri);font-weight:700;background:rgba(232,89,12,0.08);padding:2px 7px;border-radius:8px">Urgente</span></div><div onclick="event.stopPropagation()" style="margin-top:6px"><button id="like-urg-0" onclick="curtir('urg-0','normal',this)" style="background:none;border:none;padding:4px 8px;cursor:pointer;touch-action:manipulation;display:inline-flex;align-items:center;gap:4px;border-radius:8px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7A99" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span style="font-size:10px;color:#6B7A99">Curtir</span></button></div></div>
            <div style="background:rgba(232,89,12,0.04);border:1px solid rgba(232,89,12,0.15);border-radius:11px;padding:11px 13px"><div onclick="abrirVagaUrg('Acougueiro','Acougue Central','5531990020002')" style="display:flex;align-items:center;gap:10px;cursor:pointer;margin-bottom:8px"><span onclick="event.stopPropagation();_abrirPerfilPublico({nome:'Açougue Central',tipo:'empresa',icon:'🥩',area:'Açougue',rating:4.7,trabalhos:12,score:80,online:true,cor:'#DC2626'})" style="font-size:18px;flex-shrink:0;cursor:pointer">🥩</span><div style="flex:1"><div class="syne" style="font-size:13px;font-weight:800;color:var(--tx)">Açougueiro</div><div style="font-size:11px;color:var(--mu)">Açougue Central</div></div><span style="font-size:10px;color:var(--pri);font-weight:700;background:rgba(232,89,12,0.08);padding:2px 7px;border-radius:8px">Urgente</span></div><div onclick="event.stopPropagation()" style="margin-top:6px"><button id="like-urg-1" onclick="curtir('urg-1','normal',this)" style="background:none;border:none;padding:4px 8px;cursor:pointer;touch-action:manipulation;display:inline-flex;align-items:center;gap:4px;border-radius:8px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7A99" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span style="font-size:10px;color:#6B7A99">Curtir</span></button></div></div>
            <div style="background:rgba(232,89,12,0.04);border:1px solid rgba(232,89,12,0.15);border-radius:11px;padding:11px 13px"><div onclick="abrirVagaUrg('Motorista','TransLog MG','5531990030003')" style="display:flex;margin-bottom:8px;align-items:center;gap:10px;cursor:pointer"><span onclick="event.stopPropagation();_abrirPerfilPublico({nome:'TransLog MG',tipo:'empresa',icon:'&#x1F697;',area:'Transporte',rating:4.7,trabalhos:12,score:80,online:true,cor:'#3B82F6'})" style="font-size:18px;flex-shrink:0;cursor:pointer">&#x1F697;</span><div style="flex:1"><div class="syne" style="font-size:13px;font-weight:800;color:var(--tx)">Motorista</div><div style="font-size:11px;color:var(--mu)">TransLog MG</div></div><span style="font-size:10px;color:var(--pri);font-weight:700;background:rgba(232,89,12,0.08);padding:2px 7px;border-radius:8px">Urgente</span></div><div onclick="event.stopPropagation()" style="margin-top:6px"><button id="like-urg-2" onclick="curtir('urg-2','normal',this)" style="background:none;border:none;padding:4px 8px;cursor:pointer;touch-action:manipulation;display:inline-flex;align-items:center;gap:4px;border-radius:8px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7A99" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span style="font-size:10px;color:#6B7A99">Curtir</span></button></div></div>
            <div style="background:rgba(232,89,12,0.04);border:1px solid rgba(232,89,12,0.15);border-radius:11px;padding:11px 13px"><div onclick="abrirVagaUrg('Padeiro','Padaria Estrela','5531990040004')" style="display:flex;margin-bottom:8px;align-items:center;gap:10px;cursor:pointer"><span onclick="event.stopPropagation();_abrirPerfilPublico({nome:'Padaria Estrela',tipo:'empresa',icon:'🍞',area:'Padaria',rating:4.7,trabalhos:12,score:80,online:true,cor:'#F59E0B'})" style="font-size:18px;flex-shrink:0;cursor:pointer">🍞</span><div style="flex:1"><div class="syne" style="font-size:13px;font-weight:800;color:var(--tx)">Padeiro</div><div style="font-size:11px;color:var(--mu)">Padaria Estrela</div></div><span style="font-size:10px;color:var(--pri);font-weight:700;background:rgba(232,89,12,0.08);padding:2px 7px;border-radius:8px">Urgente</span></div><div onclick="event.stopPropagation()" style="margin-top:6px"><button id="like-urg-3" onclick="curtir('urg-3','normal',this)" style="background:none;border:none;padding:4px 8px;cursor:pointer;touch-action:manipulation;display:inline-flex;align-items:center;gap:4px;border-radius:8px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7A99" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span style="font-size:10px;color:#6B7A99">Curtir</span></button></div></div>
            <div style="background:rgba(232,89,12,0.04);border:1px solid rgba(232,89,12,0.15);border-radius:11px;padding:11px 13px"><div onclick="abrirVagaUrg('Gerente de Loja','Rede Local','5531990050005')" style="display:flex;margin-bottom:8px;align-items:center;gap:10px;cursor:pointer"><span onclick="event.stopPropagation();_abrirPerfilPublico({nome:'Rede Local',tipo:'empresa',icon:'🏪',area:'Varejo',rating:4.7,trabalhos:12,score:80,online:true,cor:'#8B5CF6'})" style="font-size:18px;flex-shrink:0;cursor:pointer">🏪</span><div style="flex:1"><div class="syne" style="font-size:13px;font-weight:800;color:var(--tx)">Gerente de Loja</div><div style="font-size:11px;color:var(--mu)">Rede Local</div></div><span style="font-size:10px;color:var(--pri);font-weight:700;background:rgba(232,89,12,0.08);padding:2px 7px;border-radius:8px">Urgente</span></div><div onclick="event.stopPropagation()" style="margin-top:6px"><button id="like-urg-4" onclick="curtir('urg-4','normal',this)" style="background:none;border:none;padding:4px 8px;cursor:pointer;touch-action:manipulation;display:inline-flex;align-items:center;gap:4px;border-radius:8px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7A99" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span style="font-size:10px;color:#6B7A99">Curtir</span></button></div></div>
          </div>
        </div>
        <!-- Vagas normais -->
        <div class="syne" style="font-size:13px;font-weight:800;color:var(--mu2);text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px">Todas as Vagas</div>
        <div id="vagas-list">
          <div class="vc" data-tipo="fisica"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px"><div style="display:flex;align-items:center;gap:6px"><span class="syne" style="font-size:15px;font-weight:800;color:var(--tx)">&#x1F6F5; Entregador</span><span class="blink" style="font-size:9px;background:rgba(255,71,87,0.15);color:var(--rd);padding:2px 6px;border-radius:6px;font-weight:800">● URG</span></div><span style="background:rgba(0,214,143,0.12);border:1px solid rgba(0,214,143,0.3);border-radius:20px;padding:2px 8px;font-size:10px;color:var(--gr);font-weight:700">Presencial</span></div><div style="font-size:12px;color:var(--mu);margin-bottom:4px"><span onclick="event.stopPropagation();_abrirPerfilPublico({nome:'Pizzaria do Zé',tipo:'empresa',icon:'&#x1F6F5;',area:'Transporte',rating:4.8,trabalhos:8,score:78,online:true,cor:'#E8590C'})" style="cursor:pointer;text-decoration:underline;text-decoration-color:rgba(232,89,12,0.3)">Pizzaria do Zé</span> · Sete Lagoas, MG</div><div style="font-size:12px;color:var(--mu2);line-height:1.5;margin-bottom:8px">Entregas noturnas. Moto própria, CNH A.</div><div style="font-size:13px;color:var(--pri);font-weight:700;margin-bottom:10px">R$ 100/dia · Freelancer</div><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><button id="like-norm-0" onclick="curtir('norm-0','normal',this)" style="background:none;border:none;padding:4px 8px;cursor:pointer;touch-action:manipulation;display:inline-flex;align-items:center;gap:4px;border-radius:8px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7A99" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span style="font-size:10px;color:#6B7A99">Curtir</span></button><button onclick="_compartilharVaga('Entregador','Sete Lagoas, MG','Freelancer')" style="background:none;border:none;padding:4px 6px;cursor:pointer;touch-action:manipulation;display:inline-flex;align-items:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8590C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button><div style="flex:1"></div></div><button onclick="candidatarVaga(this.closest('.vc') ? (this.closest('.vc').querySelector('.syne') ? this.closest('.vc').querySelector('.syne').textContent.trim() : 'Vaga') : 'Vaga')" style="display:block;width:100%;text-align:center;padding:10px;background:linear-gradient(135deg,var(--pri),var(--priL));border:none;border-radius:10px;color:#fff;font-family:Syne,sans-serif;font-weight:700;font-size:13px;cursor:pointer">Candidatar-se</button></div>
          <div class="vc" data-tipo="digital"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px"><span class="syne" style="font-size:15px;font-weight:800;color:var(--tx)">&#x1F3A8; Designer</span><span style="background:rgba(77,159,255,0.12);border:1px solid rgba(77,159,255,0.3);border-radius:20px;padding:2px 8px;font-size:10px;color:var(--bl);font-weight:700">Digital</span></div><div style="font-size:12px;color:var(--mu);margin-bottom:4px"><span onclick="event.stopPropagation();_abrirPerfilPublico({nome:'Studio Criativo',tipo:'empresa',icon:'&#x1F3A8;',area:'Design',rating:4.8,trabalhos:8,score:78,online:true,cor:'#3B82F6'})" style="cursor:pointer;text-decoration:underline;text-decoration-color:rgba(232,89,12,0.3)">Studio Criativo</span> · Remoto</div><div style="font-size:12px;color:var(--mu2);line-height:1.5;margin-bottom:8px">Designer para redes sociais.</div><div style="font-size:13px;color:var(--pri);font-weight:700;margin-bottom:10px">R$ 1.800/mês</div><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><button id="like-norm-1" onclick="curtir('norm-1','normal',this)" style="background:none;border:none;padding:4px 8px;cursor:pointer;touch-action:manipulation;display:inline-flex;align-items:center;gap:4px;border-radius:8px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7A99" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span style="font-size:10px;color:#6B7A99">Curtir</span></button><button onclick="_compartilharVaga('Designer','Sete Lagoas, MG','Freelancer')" style="background:none;border:none;padding:4px 6px;cursor:pointer;touch-action:manipulation;display:inline-flex;align-items:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8590C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button><div style="flex:1"></div></div><button onclick="candidatarVaga(this.closest('.vc') ? (this.closest('.vc').querySelector('.syne') ? this.closest('.vc').querySelector('.syne').textContent.trim() : 'Vaga') : 'Vaga')" style="display:block;width:100%;text-align:center;padding:10px;background:linear-gradient(135deg,var(--pri),var(--priL));border:none;border-radius:10px;color:#fff;font-family:Syne,sans-serif;font-weight:700;font-size:13px;cursor:pointer">Candidatar-se</button></div>
          <div class="vc" data-tipo="digital"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px"><span class="syne" style="font-size:15px;font-weight:800;color:var(--tx)">&#x1F3AC; Criador de Conteúdo</span><span style="background:rgba(77,159,255,0.12);border:1px solid rgba(77,159,255,0.3);border-radius:20px;padding:2px 8px;font-size:10px;color:var(--bl);font-weight:700">Digital</span></div><div style="font-size:12px;color:var(--mu);margin-bottom:4px"><span onclick="event.stopPropagation();_abrirPerfilPublico({nome:'Loja da Ana',tipo:'empresa',icon:'&#x1F3AC;',area:'Marketing',rating:4.8,trabalhos:8,score:78,online:true,cor:'#8B5CF6'})" style="cursor:pointer;text-decoration:underline;text-decoration-color:rgba(232,89,12,0.3)">Loja da Ana</span> · Remoto</div><div style="font-size:12px;color:var(--mu2);line-height:1.5;margin-bottom:8px">Vídeos TikTok/Instagram.</div><div style="font-size:13px;color:var(--pri);font-weight:700;margin-bottom:10px">R$ 2.500/mês</div><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><button id="like-norm-2" onclick="curtir('norm-2','normal',this)" style="background:none;border:none;padding:4px 8px;cursor:pointer;touch-action:manipulation;display:inline-flex;align-items:center;gap:4px;border-radius:8px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7A99" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span style="font-size:10px;color:#6B7A99">Curtir</span></button><button onclick="_compartilharVaga('Criador de Conteúdo','Sete Lagoas, MG','Freelancer')" style="background:none;border:none;padding:4px 6px;cursor:pointer;touch-action:manipulation;display:inline-flex;align-items:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8590C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button><div style="flex:1"></div></div><button onclick="candidatarVaga(this.closest('.vc') ? (this.closest('.vc').querySelector('.syne') ? this.closest('.vc').querySelector('.syne').textContent.trim() : 'Vaga') : 'Vaga')" style="display:block;width:100%;text-align:center;padding:10px;background:linear-gradient(135deg,var(--pri),var(--priL));border:none;border-radius:10px;color:#fff;font-family:Syne,sans-serif;font-weight:700;font-size:13px;cursor:pointer">Candidatar-se</button></div>
        </div>
      </div>

      <!-- ══ ONLINE AGORA ══ -->
      <div id="vagas-online-trab" style="display:none">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
          <button onclick="vagasBack()" style="width:34px;height:34px;background:var(--dk3);border:1px solid var(--bd);border-radius:10px;color:var(--tx);font-size:16px;cursor:pointer;flex-shrink:0">←</button>
          <div class="syne" style="font-size:17px;font-weight:800;color:var(--tx)">&#x1F33F; Trabalhadores Online</div>
          <span id="online-count" style="background:rgba(0,214,143,0.12);color:var(--gr);font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;margin-left:auto">5 online</span>
        </div>
        <div style="display:flex;align-items:center;gap:12px;background:var(--dk3);border:1px solid var(--bd);border-radius:14px;padding:12px 14px;margin-bottom:14px">
          <div style="width:10px;height:10px;border-radius:50%;background:var(--gr);flex-shrink:0"></div>
          <div><div class="syne" style="font-size:13px;font-weight:800;color:var(--tx)">Estou Online Agora</div><div style="font-size:11px;color:var(--mu);margin-top:2px">Empresas podem te chamar</div></div>
          <button id="btn-toggle-online" onclick="_toggleOnline()" style="width:52px;height:28px;border-radius:20px;border:none;background:var(--bd);cursor:pointer;position:relative;flex-shrink:0;margin-left:auto"><span id="toggle-circle" style="position:absolute;top:4px;left:4px;width:20px;height:20px;border-radius:50%;background:#fff;display:block;transition:.3s"></span></button>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:var(--dk3);border:1px solid var(--bd);border-radius:12px;padding:10px 14px;margin-bottom:10px">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6B7A99" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input id="online-busca" placeholder="Buscar por função..." oninput="_filtrarOnline()" style="flex:1;background:transparent;border:none;color:var(--tx);font-size:12px;outline:none"/>
        </div>
        <div style="display:flex;gap:6px;overflow-x:auto;margin-bottom:14px;padding-bottom:2px;scrollbar-width:none">
          <button class="tag-fn" data-fn="" style="flex-shrink:0;padding:5px 12px;background:var(--gr);border:1.5px solid var(--gr);border-radius:20px;color:#000;font-family:Syne,sans-serif;font-weight:700;font-size:11px;cursor:pointer">Todos</button>
          <button class="tag-fn" data-fn="Motoboy" style="flex-shrink:0;padding:5px 12px;background:transparent;border:1.5px solid var(--bd);border-radius:20px;color:var(--mu);font-family:Syne,sans-serif;font-weight:600;font-size:11px;cursor:pointer">🏍 Motoboy</button>
          <button class="tag-fn" data-fn="Cozinheiro" style="flex-shrink:0;padding:5px 12px;background:transparent;border:1.5px solid var(--bd);border-radius:20px;color:var(--mu);font-family:Syne,sans-serif;font-weight:600;font-size:11px;cursor:pointer">👨‍🍳 Cozinheiro</button>
          <button class="tag-fn" data-fn="Garcom" style="flex-shrink:0;padding:5px 12px;background:transparent;border:1.5px solid var(--bd);border-radius:20px;color:var(--mu);font-family:Syne,sans-serif;font-weight:600;font-size:11px;cursor:pointer">🍽 Garçom</button>
        </div>
        <div id="online-lista" style="display:flex;gap:10px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none;-webkit-overflow-scrolling:touch"></div>
      </div>

      <!-- ══ EMPRESA / CONTRATAR ══ -->
      <div id="vagas-emp" style="display:none">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
          <button onclick="vagasBack()" style="width:34px;height:34px;background:var(--dk3);border:1px solid var(--bd);border-radius:10px;color:var(--tx);font-size:16px;cursor:pointer;flex-shrink:0">←</button>
          <div class="syne" style="font-size:18px;font-weight:800;color:var(--tx)">&#x1F3E2; Publicar Vaga</div>
        </div>
        <label class="lbl">Título da Vaga</label>
        <input class="inp" id="vtit" placeholder="Ex: Designer Gráfico" style="margin-bottom:10px"/>
        <label class="lbl">Nome da Empresa</label>
        <input class="inp" id="vnome" placeholder="Ex: Agência Digital XYZ" style="margin-bottom:10px"/>
        <label class="lbl">WhatsApp para contato</label>
        <input class="inp" id="vwa" placeholder="(31) 99999-0000" style="margin-bottom:10px"/>
        <label class="lbl">Localização</label>
        <input class="inp" id="vloc" placeholder="Ex: Sete Lagoas, MG" style="margin-bottom:14px"/>
        <label class="lbl">Tipo de vaga</label>
        <div style="display:flex;gap:8px;margin-bottom:14px">
          <button type="button" id="vtipo-presencial" onclick="selecionarTipoVaga('presencial')" style="flex:1;padding:10px 6px;border:1.5px solid var(--bd);border-radius:10px;background:var(--dk3);color:var(--mu);font-family:Syne,sans-serif;font-weight:700;font-size:11px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Presencial</button>
          <button type="button" id="vtipo-digi
