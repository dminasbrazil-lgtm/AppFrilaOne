// FrilaOne — Service Worker
// Este arquivo cuida de detectar quando existe uma versão nova do app.
// De propósito, ele NÃO guarda nada em cache — assim, toda vez que alguém
// abre o app, o conteúdo vem sempre direto do servidor, nunca de uma versão
// antiga guardada no celular. Isso é o que garante que as atualizações
// cheguem sozinhas pra quem já instalou o app, sem precisar desinstalar.

self.addEventListener('install', function(e){
  // Assim que uma versão nova desse arquivo for encontrada, ativa na hora,
  // sem esperar todas as abas antigas fecharem.
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  // Assume o controle de todas as telas abertas do app imediatamente.
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e){
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).catch(function(){
      return new Response(
        '<h2 style="font-family:sans-serif;text-align:center;margin-top:40px">FrilaOne está offline no momento</h2>',
        { headers: { 'Content-Type': 'text/html' } }
      );
    })
  );
});
