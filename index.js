<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
<title>FrilaOne ⚡</title>
<noscript></noscript>
<style>
/* ── ESCALA GLOBAL DE FONTES ── */
html{font-size:12px}
@media(min-width:360px){html{font-size:12.5px}}
@media(min-width:390px){html{font-size:13px}}
@media(min-width:430px){html{font-size:13.5px}}

/* ── VIEWPORT ALTURA — browser vs PWA standalone ── */
#app{
  height:100vh;
  height:100dvh; /* dynamic viewport — funciona no S24 */
}
@media(display-mode:standalone){
  #app{height:100vh;}
  .slide{padding-bottom:100px!important;}
}
:root{
  --pri:#FF4D00;--priL:#FF6B35;--priG:rgba(255,77,0,0.25);
  --dk:#0A0E1A;--dk2:#111827;--dk3:#1A2234;--card:#1E2A3A;
  --bd:rgba(255,255,255,0.07);--tx:#F0F4FF;--mu:#6B7A99;--mu2:#8A9AB8;
  --gr:#00D68F;--bl:#4D9FFF;--yl:#FFB800;--rd:#FF4757;--pu:#9B5DFF;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{width:100%;height:100%;overflow:hidden;background:#12141C;display:flex;justify-content:center;align-items:center;font-family:"DM Sans",sans-serif}
#app{width:100%;max-width:390px;height:100vh;background:var(--dk);position:relative;overflow:hidden;margin:0 auto;display:flex;flex-direction:column}
.syne{font-family:"Syne",sans-serif}
::-webkit-scrollbar{display:none}
/* screens */
.screen{position:absolute;inset:0;display:none;flex-direction:column;background:var(--dk)}
.screen.on{display:flex}
/* auth */
#s-auth{z-index:200;overflow-y:auto;align-items:center;padding:24px 28px}#s-main{display:none!important;z-index:10}#s-main.on{display:flex!important;flex-direction:column;z-index:10}
/* main layout */

#main-header{padding:12px 16px;border-bottom:1px solid var(--bd);background:var(--dk);flex-shrink:0;position:relative;z-index:100}
#slides-wrap{flex:1;min-height:0;position:relative;overflow:hidden}
.slide{position:absolute;inset:0;overflow-y:auto;overflow-x:hidden;padding:16px 16px 90px;display:none;-webkit-overflow-scrolling:touch}
#sl-perfil.slide{padding-top:68px!important}
#sl-perfil{padding-top:68px!important}
.slide.on{display:block}
#bot-nav{position:absolute;bottom:0;left:0;width:100%;background:#0D1B3E;border-top:1px solid var(--bd);display:flex;z-index:100;flex-shrink:0}
/* vitrine screen */
#s-vitrine{z-index:150}
/* overlays */
#sheet-bg{position:absolute;inset:0;background:rgba(0,0,0,0.7);z-index:300;display:none;backdrop-filter:blur(4px)}
#sheet{position:absolute;bottom:0;left:0;width:100%;background:#0D1B3E;border-radius:24px 24px 0 0;padding:24px;z-index:301;transform:translateY(100%);transition:transform 0.38s cubic-bezier(0.16,1,0.3,1);max-height:82vh;overflow-y:auto}
#sheet.open{transform:translateY(0)}
#radar-bg{position:absolute;inset:0;background:rgba(0,0,0,0.88);z-index:400;display:none;align-items:center;justify-content:center;padding:24px;backdrop-filter:blur(8px)}
#radar-bg.on{display:flex}
/* toast */
#toast{position:absolute;top:68px;left:50%;transform:translateX(-50%) translateY(-20px);padding:10px 20px;border-radius:30px;font-size:12px;font-weight:600;font-family:"Syne",sans-serif;z-index:9999;opacity:0;transition:all 0.3s;white-space:nowrap;pointer-events:none;background:var(--gr);color:#fff}
#toast.on{transform:translateX(-50%) translateY(0);opacity:1}
/* reusable */
.card{background:var(--card);border:1px solid var(--bd);border-radius:16px;padding:16px;margin-bottom:12px}
.btn-pri{width:100%;padding:14px;border:none;border-radius:14px;font-family:"Syne",sans-serif;font-weight:800;font-size:15px;cursor:pointer;background:linear-gradient(135deg,var(--pri),var(--priL));color:#fff;box-shadow:0 6px 20px var(--priG)}
.btn-wa{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:14px;background:linear-gradient(135deg,#25D366,#128C7E);border:none;border-radius:14px;color:#fff;font-family:"Syne",sans-serif;font-weight:800;font-size:15px;cursor:pointer;text-decoration:none}
.inp{width:100%;padding:13px 16px;background:var(--dk3);border:1px solid var(--bd);border-radius:12px;color:var(--tx);font-size:14px;outline:none;font-family:"DM Sans",sans-serif}
.lbl{display:block;font-size:11px;font-weight:600;color:var(--mu2);margin-bottom:5px;text-transform:uppercase;letter-spacing:.5px;margin-top:10px}
.badge{display:inline-flex;align-items:center;padding:3px 8px;border-radius:6px;font-size:10px;font-weight:700;font-family:"Syne",sans-serif}
/* nav buttons */
.nb{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 2px 6px;border:none;background:transparent;color:var(--mu);cursor:pointer;font-family:"Syne",sans-serif;font-weight:600;font-size:8.5px;position:relative;transition:color .2s}
.nb .ni{font-size:19px;width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:2px;transition:all .2s}
.nb.on-feed,.nb.on-vagas,.nb.on-planos,.nb.on-perfil{color:var(--pri)}
.nb.on-profis{color:var(--pu)}
.nb.on-suporte{color:var(--gr)}
.nb.on-feed .ni,.nb.on-vagas .ni,.nb.on-planos .ni,.nb.on-perfil .ni{background:rgba(255,77,0,0.15)}
.nb.on-profis .ni{background:rgba(155,93,255,0.15)}
.nb.on-suporte .ni{background:rgba(0,214,143,0.15)}
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
#vagas-list .vc[data-tipo="servico"]{display:none!important}#vagas-trab,#vagas-emp,#vagas-preciso,#vagas-ofereco,#vagas-ok{display:none!important}#vagas-trab.vis,#vagas-emp.vis,#vagas-preciso.vis,#vagas-ofereco.vis,#vagas-ok.vis{display:block!important}
.vc{background:var(--card);border:1px solid var(--bd);border-radius:18px;padding:16px;margin-bottom:12px}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
@keyframes radar{0%,100%{box-shadow:0 0 0 0 rgba(255,77,0,.35)}50%{box-shadow:0 0 0 14px rgba(255,77,0,0)}}
.blink{animation:blink 1.2s infinite}
.pulse-a{animation:pulse 2s infinite}
.radar-a{animation:radar 1.5s infinite}

/* ── VISUAL SUAVIZADO — menos LED ── */
/* Reduz brilho dos cards de vagas */
.cat-item{background:var(--dk3)!important;border-color:rgba(255,255,255,0.08)!important}
/* Banners informativos mais suaves */
.info-banner{background:rgba(255,255,255,0.03)!important;border-color:rgba(255,255,255,0.08)!important}
/* Cor laranja do mercado de trabalho menos saturada */
#s-feed .hero-section{filter:saturate(0.75)}
</style>

  <!-- Firebase SDK -->
  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
    import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, query, where, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
    import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyA87hoij-A4YkjhHmKbsIUIpbW3E9T1KT0",
      authDomain: "frilaone-e6247.firebaseapp.com",
      projectId: "frilaone-e6247",
      storageBucket: "frilaone-e6247.firebasestorage.app",
      messagingSenderId: "695357936349",
      appId: "1:695357936349:web:a2b75237a05ef5b30f8134",
      measurementId: "G-X2CW6QBGSB"
    };
    
    // Domínios autorizados: app-frila-one.vercel.app e frilaone-e6247.firebaseapp.com

    // Inicializa Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // ══ EXPÕE FUNÇÕES GLOBALMENTE ══
    // Para que o código JS existente possa usar

    // LOGIN COM EMAIL
    window.fbLoginEmail = async function(email, senha) {
      try {
        const cred = await signInWithEmailAndPassword(auth, email, senha);
        return { ok: true, user: cred.user };
      } catch(e) {
        return { ok: false, erro: e.code };
      }
    };

    // CADASTRO COM EMAIL
    window.fbCadastrar = async function(email, senha, nome, tipo) {
      try {
        const cred = await createUserWithEmailAndPassword(auth, email, senha);
        // Salva dados no Firestore
        await setDoc(doc(db, 'usuarios', cred.user.uid), {
          nome: nome,
          email: email,
          tipo: tipo,
          pontos: 5,
          nivel: 0,
          criadoEm: new Date().toISOString()
        });
        return { ok: true, user: cred.user };
      } catch(e) {
        return { ok: false, erro: e.code };
      }
    };

    // LOGIN COM GOOGLE
    window.fbLoginGoogle = async function() {
      try {
        const cred = await signInWithPopup(auth, googleProvider);
        // Verifica se usuário já existe
        const userDoc = await getDoc(doc(db, 'usuarios', cred.user.uid));
        if (!userDoc.exists()) {
          await setDoc(doc(db, 'usuarios', cred.user.uid), {
            nome: cred.user.displayName || 'Usuário',
            email: cred.user.email,
            tipo: '',
            pontos: 5,
            nivel: 0,
            criadoEm: new Date().toISOString()
          });
        }
        return { ok: true, user: cred.user, dados: userDoc.data() };
      } catch(e) {
        return { ok: false, erro: e.code };
      }
    };

    // SALVAR PERFIL
    window.fbSalvarPerfil = async function(uid, dados) {
      try {
        await setDoc(doc(db, 'usuarios', uid), dados, { merge: true });
        return { ok: true };
      } catch(e) {
        return { ok: false, erro: e.message };
      }
    };

    // SALVAR PONTOS
    window.fbSalvarPontos = async function(uid, pontos, nivel) {
      try {
        await setDoc(doc(db, 'usuarios', uid), { pontos, nivel }, { merge: true });
        return { ok: true };
      } catch(e) {
        return { ok: false };
      }
    };

    // PUBLICAR VAGA
    window.fbPublicarVaga = async function(vaga) {
      try {
        await addDoc(collection(db, 'vagas'), {
          ...vaga,
          criadoEm: new Date().toISOString(),
          ativo: true
        });
        return { ok: true };
      } catch(e) {
        return { ok: false, erro: e.message };
      }
    };

    // LOGOUT
    window.fbLogout = async function() {
      try {
        await signOut(auth);
        return { ok: true };
      } catch(e) {
        return { ok: false };
      }
    };

    // MONITOR AUTH STATE — detecta se usuário está logado
    onAuthStateChanged(auth, (user) => {
      if (user) {
        window.fbUser = user;
        // Carrega dados do Firestore
        getDoc(doc(db, 'usuarios', user.uid)).then(snap => {
          if (snap.exists()) {
            window.fbDados = snap.data();
            // Atualiza nome na tela
            var nomeEl = document.querySelector('.user-nome');
            if (nomeEl && snap.data().nome) {
              nomeEl.textContent = snap.data().nome;
            }
            // Atualiza pontos
            if (snap.data().pontos && typeof adicionarPontos === 'function') {
              var d = _getDados();
              d.pontos = snap.data().pontos;
              localStorage.setItem('frila_gamification', JSON.stringify(d));
            }
          }
        });
      } else {
        window.fbUser = null;
        window.fbDados = null;
      }
    });

    console.log('✅ Firebase FrilaOne conectado!');
    window.fbPronto = true;
  </script>
</head>
<body>
<script>localStorage.removeItem("frilaone_sessao");localStorage.removeItem("frilaone_sessao_ts");</script>

<!-- OFFLINE ERROR PAGE -->
<div id="offline-banner" style="display:none;position:fixed;top:0;left:0;right:0;z-index:9999;background:rgba(255,71,87,0.95);padding:10px 16px;text-align:center;font-family:Syne,sans-serif;font-size:13px;font-weight:700;color:#fff">
  📶 Sem conexão — verifique sua internet
</div>
<div id="app">
<div id="toast"></div>

<!-- ══ AUTH ══ -->
<div id="s-auth" class="screen on">
  <div style="text-align:center;margin-bottom:24px;margin-top:16px;width:100%">

    <div style="width:80px;height:80px;margin:0 auto 16px"><img src="data:image/png;base64,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" style="width:80px;height:80px;object-fit:cover" alt="FrilaOne"/></div>
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
  <!-- terms checkbox — acima do botão entrar -->
  <div style="display:flex;align-items:center;gap:12px;width:100%;padding:12px 14px;margin-bottom:14px;background:var(--dk3);border-radius:12px;border:1.5px solid var(--bd);cursor:pointer" onclick="toggleTerms()">
    <div id="terms-box" style="width:26px;height:26px;border-radius:8px;border:2px solid var(--bd);background:transparent;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.2s;pointer-events:none;font-size:16px"></div>
    <p style="font-size:12px;color:var(--mu2);line-height:1.5;flex:1;pointer-events:none;margin:0">
      Li e concordo com os <span onclick="abrirTermos()" style="color:var(--pri);font-weight:700;cursor:pointer;text-decoration:underline">Termos de Uso</span> e a <span onclick="abrirPrivacidade()" style="color:var(--pri);font-weight:700;cursor:pointer;text-decoration:underline">Política de Privacidade</span> do FrilaOne.
    </p>
  </div>
  <button id="auth-btn" class="btn-pri" onclick="doLogin()" style="margin-bottom:14px">⚡ Entrar agora</button>
  <!-- ou -->
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;color:var(--mu);font-size:12px;width:100%">
    <div style="flex:1;height:1px;background:var(--bd)"></div>ou<div style="flex:1;height:1px;background:var(--bd)"></div>
  </div>
  <!-- social -->
  <div style="display:flex;gap:10px;width:100%;margin-bottom:20px">
    <button style="flex:1;padding:12px;background:var(--dk3);border:1px solid var(--bd);border-radius:12px;color:var(--tx);font-size:18px;cursor:pointer;text-align:center;font-family:Syne,sans-serif;font-weight:800">G</button>
    <button style="flex:1;padding:12px;background:var(--dk3);border:1px solid var(--bd);border-radius:12px;color:var(--tx);font-size:18px;cursor:pointer;text-align:center;font-family:Syne,sans-serif;font-weight:800">f</button>
  </div>
</div>

<!-- BOAS VINDAS - aparece so no primeiro acesso -->
<div id="welcome-modal" style="position:fixed;inset:0;z-index:999;background:rgba(0,0,0,0.85);display:none;align-items:center;justify-content:center;padding:24px;backdrop-filter:blur(8px)">
  <div style="background:var(--dk2);border:1px solid rgba(255,77,0,0.2);border-radius:24px;padding:28px;width:100%;max-width:340px;text-align:center">
    <div style="margin-bottom:12px"><img src="data:image/png;base64,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" style="width:72px;height:72px;object-fit:contain" alt="FrilaOne"/></div>
    <div class="syne" style="font-size:22px;font-weight:800;color:var(--tx);margin-bottom:8px">Bem-vindo ao <span style="color:var(--pri)">FrilaOne</span>!</div>
    <div style="font-size:13px;color:var(--mu2);line-height:1.6;margin-bottom:20px">O marketplace dos melhores freelancers de Sete Lagoas e região. Precisou? Tá na mão!</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
      <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.04);border-radius:12px;padding:10px 14px">
        <span style="font-size:20px">👷</span><span style="font-size:12px;color:var(--mu2);text-align:left">Encontre vagas e serviços perto de você</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.04);border-radius:12px;padding:10px 14px">
        <span style="font-size:20px">🟢</span><span style="font-size:12px;color:var(--mu2);text-align:left">Ative o radar e apareça para quem precisa</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.04);border-radius:12px;padding:10px 14px">
        <span style="font-size:20px">🏆</span><span style="font-size:12px;color:var(--mu2);text-align:left">Suba de nível e ganhe recompensas</span>
      </div>
    </div>
    <button onclick="fecharBemVindo()" class="btn-pri" style="width:100%">Começar agora! 🚀</button>
    </div>
  </div>
</div>

<!-- ══ MAIN ══ -->
<div id="s-main" class="screen">
  <!-- header -->
  <div id="main-header" style="display:flex;justify-content:space-between;align-items:center">
    <!-- esquerda: logo + nome -->
    <div style="display:flex;align-items:center;gap:8px">
      <div style="width:34px;height:34px;flex-shrink:0"><img src="data:image/png;base64,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" style="width:34px;height:34px;object-fit:cover" alt="FrilaOne"/></div>
      <div>
        <div class="syne" style="font-size:15px;font-weight:800;color:var(--tx);line-height:1.1">Frila<span style="color:var(--pri)">One</span></div>
        <div style="font-size:9px;color:var(--mu);font-weight:300;line-height:1;display:flex;align-items:center;gap:4px">Olá, <span class="user-nome" style="color:var(--tx);font-weight:600">Rafael Moura</span> <span style="font-size:10px">🥉</span><span id="dot-online" style="width:7px;height:7px;border-radius:50%;background:var(--gr);display:inline-block;flex-shrink:0" title="Online"></span></div>
          
      </div>
    </div>
    <!-- direita: botões -->
    <div style="display:flex;gap:8px">
      <button class="pulse-a" onclick="openRadar()" style="width:38px;height:38px;background:var(--dk3);border:1px solid rgba(255,77,0,0.2);border-radius:10px;cursor:pointer;color:var(--pri);font-size:15px;display:flex;align-items:center;justify-content:center;color:var(--tx)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/></svg></button>
      <button onclick="showToast('Nenhuma notificação nova','warn')" style="width:38px;height:38px;background:var(--dk3);border:1px solid var(--bd);border-radius:10px;cursor:pointer;font-size:15px;position:relative;display:flex;align-items:center;justify-content:center;color:var(--tx)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg><div style="width:8px;height:8px;background:var(--rd);border-radius:50%;position:absolute;top:6px;right:6px;border:2px solid var(--dk)"></div></button>
    </div>
  </div>
  <!-- slides -->
  <div id="slides-wrap">

    <!-- ── FEED ── -->
    <div id="sl-feed" class="slide on">
      <!-- frase slogan — branca, fina, centralizada -->
      <div style="text-align:center;margin-bottom:18px;margin-top:6px">
        <span style="font-size:17px;font-weight:300;color:rgba(255,255,255,0.7);letter-spacing:.6px;font-style:italic">Precisou? Tá na mão! FrilaOne.</span>
      </div>

      <!-- ── TÔ DISPONÍVEL AGORA ── -->
      <div style="background:linear-gradient(135deg,rgba(0,214,143,0.1),rgba(0,214,143,0.05));border:1.5px solid rgba(0,214,143,0.35);border-radius:16px;padding:14px 16px;margin-bottom:18px">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div>
            <div class="syne" style="font-size:13px;font-weight:800;color:var(--gr);margin-bottom:2px">🟢 Tô disponível agora!</div>
            <div style="font-size:11px;color:var(--mu)">Apareça para quem busca profissional hoje</div>
          </div>
          <button id="btn-disponivel" onclick="toggleDisponivel()" style="padding:9px 16px;background:linear-gradient(135deg,var(--gr),#00b87a);border:none;border-radius:12px;color:#000;font-family:Syne,sans-serif;font-weight:800;font-size:12px;cursor:pointer">Ativar</button>
        </div>
        <div id="disponiveis-lista" style="margin-top:12px;display:flex;gap:8px;overflow-x:auto;padding-bottom:2px">
          <div style="flex-shrink:0;background:rgba(0,214,143,0.08);border:1px solid rgba(0,214,143,0.2);border-radius:10px;padding:6px 10px;display:flex;align-items:center;gap:6px">
            <span style="font-size:14px">👨‍🔧</span><div><div style="font-size:10px;font-weight:700;color:var(--tx)">Carlos</div><div style="font-size:9px;color:var(--gr)">Eletricista</div></div>
          </div>
          <div style="flex-shrink:0;background:rgba(0,214,143,0.08);border:1px solid rgba(0,214,143,0.2);border-radius:10px;padding:6px 10px;display:flex;align-items:center;gap:6px">
            <span style="font-size:14px">🧹</span><div><div style="font-size:10px;font-weight:700;color:var(--tx)">Maria</div><div style="font-size:9px;color:var(--gr)">Diarista</div></div>
          </div>
          <div style="flex-shrink:0;background:rgba(0,214,143,0.08);border:1px solid rgba(0,214,143,0.2);border-radius:10px;padding:6px 10px;display:flex;align-items:center;gap:6px">
            <span style="font-size:14px">🎨</span><div><div style="font-size:10px;font-weight:700;color:var(--tx)">João</div><div style="font-size:9px;color:var(--gr)">Designer</div></div>
          </div>
          <div style="flex-shrink:0;background:rgba(0,214,143,0.08);border:1px solid rgba(0,214,143,0.2);border-radius:10px;padding:6px 10px;display:flex;align-items:center;gap:6px">
            <span style="font-size:14px">🔧</span><div><div style="font-size:10px;font-weight:700;color:var(--tx)">Pedro</div><div style="font-size:9px;color:var(--gr)">Encanador</div></div>
          </div>
        </div>
      </div>

      <!-- hero banner -->
      <div style="background:linear-gradient(135deg,rgba(255,77,0,0.55),rgba(160,35,0,0.55));border-radius:20px;padding:22px;position:relative;overflow:hidden;margin-bottom:16px">
        <div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;background:rgba(255,255,255,0.06);border-radius:50%"></div>
        <div style="position:absolute;bottom:-30px;right:20px;width:100px;height:100px;background:rgba(255,255,255,0.04);border-radius:50%"></div>
        <div style="position:relative;z-index:2">
          <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.15);border-radius:20px;padding:4px 12px;margin-bottom:12px">
            <span style="font-size:10px;color:#fff;font-weight:700;letter-spacing:.5px">🚀 SETE LAGOAS · MG</span>
          </div>
          <div class="syne" style="font-size:26px;font-weight:800;color:#fff;line-height:1.2;margin-bottom:8px">O seu mercado<br>de trabalho</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.9);margin-bottom:18px;line-height:1.5">Digital, físico e empresarial.<br>Conectamos talentos e oportunidades.</div>
          <div style="display:flex;gap:12px">
            <div style="flex:1;background:rgba(255,255,255,0.15);border-radius:12px;padding:10px;text-align:center">
              <div class="syne" style="font-size:18px;font-weight:800;color:#fff">2.000+</div>
              <div style="font-size:9px;color:rgba(255,255,255,0.8);margin-top:2px">Profissionais</div>
            </div>
            <div style="flex:1;background:rgba(255,255,255,0.15);border-radius:12px;padding:10px;text-align:center">
              <div class="syne" style="font-size:18px;font-weight:800;color:#fff">850+</div>
              <div style="font-size:9px;color:rgba(255,255,255,0.8);margin-top:2px">Vagas abertas</div>
            </div>
            <div style="flex:1;background:rgba(255,255,255,0.15);border-radius:12px;padding:10px;text-align:center">
              <div class="syne" style="font-size:18px;font-weight:800;color:#fff">500+</div>
              <div style="font-size:9px;color:rgba(255,255,255,0.8);margin-top:2px">Empresas</div>
            </div>
          </div>
        </div>
      </div>
      <!-- quick actions -->
      <div class="syne" style="font-size:16px;font-weight:800;color:#fff;text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px;text-align:center">O que você quer fazer hoje?</div>
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <div onclick="goTab('vagas')" style="flex:1;background:rgba(255,77,0,0.1);border:1.5px solid rgba(255,77,0,0.3);border-radius:16px;padding:12px 6px;text-align:center;cursor:pointer">
          <div style="font-size:24px;margin-bottom:6px">🔍</div>
          <div class="syne" style="font-size:11px;font-weight:800;color:var(--pri);line-height:1.2;margin-bottom:3px">Buscar Vaga</div>
          <div style="font-size:9px;color:var(--mu)">Física ou digital</div>
        </div>
        <div onclick="goTab('vagas')" style="flex:1;background:rgba(0,214,143,0.1);border:1.5px solid rgba(0,214,143,0.3);border-radius:16px;padding:12px 6px;text-align:center;cursor:pointer">
          <div style="font-size:24px;margin-bottom:6px">💼</div>
          <div class="syne" style="font-size:11px;font-weight:800;color:var(--gr);line-height:1.2;margin-bottom:3px">Oferecer Serviço</div>
          <div style="font-size:9px;color:var(--mu)">Mostre seu talento</div>
        </div>
        <div onclick="goTab('vagas')" style="flex:1;background:rgba(77,159,255,0.1);border:1.5px solid rgba(77,159,255,0.3);border-radius:16px;padding:12px 6px;text-align:center;cursor:pointer">
          <div style="font-size:24px;margin-bottom:6px">🏢</div>
          <div class="syne" style="font-size:11px;font-weight:800;color:var(--bl);line-height:1.2;margin-bottom:3px">Contratar</div>
          <div style="font-size:9px;color:var(--mu)">Encontre profissionais</div>
        </div>
      </div>

      <!-- divider -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
        <div style="flex:1;height:1px;background:var(--bd)"></div>
        <span style="font-size:11px;color:var(--mu);font-weight:600;text-transform:uppercase;letter-spacing:.8px">Trabalho Físico & Digital</span>
        <div style="flex:1;height:1px;background:var(--bd)"></div>
      </div>
      <!-- VITRINE & PARCEIROS — feed limpo -->
      <div style="margin-bottom:20px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <div class="syne" style="font-size:16px;font-weight:800;color:var(--tx)">🏪 Meu Negócio</div>
          <button onclick="abrirVitrineCompleta()" style="background:none;border:none;color:var(--bl);font-size:12px;font-weight:700;cursor:pointer;font-family:Syne,sans-serif">Ver todos →</button>
        </div>
        <!-- 2 negócios em destaque -->
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:12px">
          <div style="background:#fff;border:1px solid #e8e8e8;border-radius:14px;padding:14px;display:flex;align-items:center;gap:14px">
            <div style="width:52px;height:52px;border-radius:14px;background:#f0f4ff;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0">✂️</div>
            <div style="flex:1">
              <div class="syne" style="font-size:14px;font-weight:800;color:#0D1B3E">Barbearia Kings</div>
              <div style="font-size:11px;color:#666;margin-top:2px">Corte · Barba · Hidratação</div>
              <div style="font-size:10px;color:var(--gr);margin-top:3px">🟢 Aberto · Centro, Sete Lagoas</div>
            </div>
            <div style="font-size:10px;color:var(--yl);font-weight:700">🥇 #1</div>
          </div>
          <div style="background:#fff;border:1px solid #e8e8e8;border-radius:14px;padding:14px;display:flex;align-items:center;gap:14px">
            <div style="width:52px;height:52px;border-radius:14px;background:#f0f4ff;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0">💅</div>
            <div style="flex:1">
              <div class="syne" style="font-size:14px;font-weight:800;color:#0D1B3E">Studio Bella</div>
              <div style="font-size:11px;color:#666;margin-top:2px">Manicure · Pedicure · Design</div>
              <div style="font-size:10px;color:var(--gr);margin-top:3px">🟢 Aberto · Bairro Jardim</div>
            </div>
            <div style="font-size:10px;color:#C0C0C0;font-weight:700">🥈 #2</div>
          </div>
        </div>
        
      </div>
<!-- vagas destaque -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <span class="syne" style="font-size:15px;font-weight:800;color:var(--tx)">🔥 Vagas em Destaque</span>
        <span onclick="goTab('vagas')" style="font-size:12px;color:var(--pri);font-weight:600;cursor:pointer;padding:4px 8px;border-radius:8px;background:rgba(255,77,0,0.1)">Ver todas →</span>
      </div>
      <!-- vaga card 1 -->
      <div class="vc">
        <div style="display:flex;gap:12px;margin-bottom:10px">
          <div style="width:50px;height:50px;border-radius:14px;background:var(--dk3);display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">🏍️</div>
          <div style="flex:1">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
              <span class="syne" style="font-size:14px;font-weight:700;color:var(--tx)">Motoboy</span>
              <span class="blink" style="background:rgba(255,71,87,0.15);color:var(--rd);font-size:9px;padding:2px 7px;border-radius:6px;font-weight:800">● URGENTE</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px">
              <span class="badge" style="background:rgba(0,214,143,0.12);color:var(--gr)">Presencial</span>
              <span style="font-size:11px;color:var(--mu)">São Paulo, SP</span>
            </div>
          </div>
        </div>
        <p style="font-size:12.5px;color:var(--mu2);line-height:1.5;margin-bottom:10px">Entregas rápidas para restaurantes e e-commerces. Moto própria necessária. CNH A.</p>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">
          <span style="padding:4px 10px;background:var(--dk3);border-radius:6px;font-size:11px;color:var(--mu2);border:1px solid var(--bd)">Moto própria</span>
          <span style="padding:4px 10px;background:var(--dk3);border-radius:6px;font-size:11px;color:var(--mu2);border:1px solid var(--bd)">CNH A</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span class="syne" style="font-size:14px;font-weight:800;color:var(--gr)">R$ 80–200/dia</span>
          <a href="https://wa.me/5511999990001?text=Ol%C3%A1!+Vi+a+vaga+de+Motoboy+no+FrilaOne!" target="_blank" style="padding:9px 16px;background:linear-gradient(135deg,var(--pri),var(--priL));border:none;border-radius:10px;color:#fff;font-family:Syne,sans-serif;font-weight:700;font-size:12px;text-decoration:none">Me candidatar</a>
        </div>
      </div>
      <!-- vaga card 2 -->
      <div class="vc">
        <div style="display:flex;gap:12px;margin-bottom:10px">
          <div style="width:50px;height:50px;border-radius:14px;background:var(--dk3);display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">🎬</div>
          <div style="flex:1">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
              <span class="syne" style="font-size:14px;font-weight:700;color:var(--tx)">Criador de Conteúdo</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px">
              <span class="badge" style="background:rgba(155,93,255,0.12);color:var(--pu)">Digital</span>
              <span style="font-size:11px;color:var(--mu)">Remoto</span>
            </div>
          </div>
        </div>
        <p style="font-size:12.5px;color:var(--mu2);line-height:1.5;margin-bottom:10px">Produção de vídeos curtos para redes sociais, roteiro e edição incluídos.</p>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">
          <span style="padding:4px 10px;background:var(--dk3);border-radius:6px;font-size:11px;color:var(--mu2);border:1px solid var(--bd)">Instagram</span>
          <span style="padding:4px 10px;background:var(--dk3);border-radius:6px;font-size:11px;color:var(--mu2);border:1px solid var(--bd)">TikTok</span>
          <span style="padding:4px 10px;background:var(--dk3);border-radius:6px;font-size:11px;color:var(--mu2);border:1px solid var(--bd)">Reels</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span class="syne" style="font-size:14px;font-weight:800;color:var(--gr)">R$ 1.500–4.000/mês</span>
          <a href="https://wa.me/5511999990005?text=Ol%C3%A1!+Vi+a+vaga+de+Criador+de+Conte%C3%BAdo+no+FrilaOne!" target="_blank" style="padding:9px 16px;background:linear-gradient(135deg,var(--pri),var(--priL));border:none;border-radius:10px;color:#fff;font-family:Syne,sans-serif;font-weight:700;font-size:12px;text-decoration:none">Me candidatar</a>
        </div>
      </div>
      <!-- ofertas do dia — carrossel horizontal deslizável -->
      <div style="margin-bottom:20px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <span class="syne" style="font-size:15px;font-weight:800;color:var(--tx)">🛍️ Ofertas do Dia</span>
          <span style="font-size:11px;color:var(--mu)">← deslize →</span>
        </div>
        <div style="display:flex;gap:12px;overflow-x:auto;padding-bottom:8px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none">
          <a href="https://shopee.com.br" target="_blank" style="flex-shrink:0;width:140px;background:var(--dk3);border:1.5px solid rgba(77,159,255,0.25);border-radius:16px;padding:14px;text-decoration:none;scroll-snap-align:start;display:flex;flex-direction:column;gap:8px">
            <div style="width:100%;height:100px;border-radius:10px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:36px">👟</div>
            <div style="display:inline-block;background:var(--bl);color:#fff;font-size:9px;font-weight:800;font-family:Syne,sans-serif;padding:2px 8px;border-radius:20px">40% OFF</div>
            <div class="syne" style="font-weight:800;font-size:13px;color:#fff;line-height:1.2">Tênis DM Damando</div>
            <div style="font-size:10px;color:rgba(255,255,255,0.6)">Esportivo · Leve · Confortável</div>
            <div style="margin-top:auto"><div style="font-size:9px;color:rgba(255,255,255,0.4);text-decoration:line-through">R$ 149,90</div><div class="syne" style="font-weight:800;font-size:14px;color:#fff">R$ 89,90</div></div>
          </a>
          <a href="https://shopee.com.br" target="_blank" style="flex-shrink:0;width:140px;background:var(--dk3);border:1.5px solid rgba(155,93,255,0.25);border-radius:16px;padding:14px;text-decoration:none;scroll-snap-align:start;display:flex;flex-direction:column;gap:8px">
            <div style="width:100%;height:100px;border-radius:10px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:36px">👡</div>
            <div style="display:inline-block;background:var(--pu);color:#fff;font-size:9px;font-weight:800;font-family:Syne,sans-serif;padding:2px 8px;border-radius:20px">40% OFF</div>
            <div class="syne" style="font-weight:800;font-size:13px;color:#fff;line-height:1.2">Sandália Feminina</div>
            <div style="font-size:10px;color:rgba(255,255,255,0.6)">Strass · Conforto · Elegância</div>
            <div style="margin-top:auto"><div style="font-size:9px;color:rgba(255,255,255,0.4);text-decoration:line-through">R$ 99,90</div><div class="syne" style="font-weight:800;font-size:14px;color:#fff">R$ 59,90</div></div>
          </a>
          <a href="https://shopee.com.br" target="_blank" style="flex-shrink:0;width:140px;background:var(--dk3);border:1.5px solid rgba(255,184,0,0.25);border-radius:16px;padding:14px;text-decoration:none;scroll-snap-align:start;display:flex;flex-direction:column;gap:8px">
            <div style="width:100%;height:100px;border-radius:10px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:36px">⌚</div>
            <div style="display:inline-block;background:var(--yl);color:#000;font-size:9px;font-weight:800;font-family:Syne,sans-serif;padding:2px 8px;border-radius:20px">46% OFF</div>
            <div class="syne" style="font-weight:800;font-size:13px;color:#fff;line-height:1.2">Relógio LIGE Azul</div>
            <div style="font-size:10px;color:rgba(255,255,255,0.6)">Aço inox · Quartzo · Masculino</div>
            <div style="margin-top:auto"><div style="font-size:9px;color:rgba(255,255,255,0.4);text-decoration:line-through">R$ 260,00</div><div class="syne" style="font-weight:800;font-size:14px;color:#fff">R$ 139,99</div></div>
          </a>
          <a href="https://shopee.com.br" target="_blank" style="flex-shrink:0;width:140px;background:var(--dk3);border:1.5px solid rgba(255,71,87,0.25);border-radius:16px;padding:14px;text-decoration:none;scroll-snap-align:start;display:flex;flex-direction:column;gap:8px">
            <div style="width:100%;height:100px;border-radius:10px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:36px">🌸</div>
            <div style="display:inline-block;background:var(--rd);color:#fff;font-size:9px;font-weight:800;font-family:Syne,sans-serif;padding:2px 8px;border-radius:20px">45% OFF</div>
            <div class="syne" style="font-weight:800;font-size:13px;color:#fff;line-height:1.2">Perfume Lancôme</div>
            <div style="font-size:10px;color:rgba(255,255,255,0.6)">Trésor · Fragrância sofisticada</div>
            <div style="margin-top:auto"><div style="font-size:9px;color:rgba(255,255,255,0.4);text-decoration:line-through">R$ 349,90</div><div class="syne" style="font-weight:800;font-size:14px;color:#fff">R$ 189,90</div></div>
          </a>
          <a href="https://shopee.com.br" target="_blank" style="flex-shrink:0;width:140px;backgro
