// Service Worker para Sistema de Custos do Parreiral
// Versão 2.0 - PWA com funcionamento offline

const CACHE_NAME = 'parreiral-v2.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Adicionar outros arquivos estáticos se houver
];

// Instalação do Service Worker
self.addEventListener('install', function(event) {
  console.log('🔧 Service Worker: Instalando...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('📦 Service Worker: Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .then(function() {
        console.log('✅ Service Worker: Instalado com sucesso');
        // Force a ativação do novo service worker
        return self.skipWaiting();
      })
      .catch(function(error) {
        console.error('❌ Service Worker: Erro na instalação', error);
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', function(event) {
  console.log('🚀 Service Worker: Ativando...');
  
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // Remove caches antigos
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      console.log('✅ Service Worker: Ativado com sucesso');
      // Toma controle de todas as páginas imediatamente
      return self.clients.claim();
    })
  );
});

// Interceptação de requests (estratégia Cache First)
self.addEventListener('fetch', function(event) {
  // Só cachear requests HTTP/HTTPS
  if (!event.request.url.startsWith('http')) {
    return;
  }
  
  // Estratégia Cache First para recursos estáticos
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Se encontrou no cache, retorna
        if (response) {
          console.log('📱 Service Worker: Servindo do cache:', event.request.url);
          return response;
        }
        
        // Se não encontrou, busca na rede
        console.log('🌐 Service Worker: Buscando na rede:', event.request.url);
        
        return fetch(event.request).then(function(response) {
          // Verificar se recebemos uma resposta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clonar a response para poder usar duas vezes
          var responseToCache = response.clone();
          
          // Adicionar ao cache para próximas vezes
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(function(error) {
          console.error('❌ Service Worker: Erro na rede:', error);
          
          // Se for uma navegação e estiver offline, mostrar página offline
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          
          throw error;
        });
      })
  );
});

// Sincronização em background (quando voltar online)
self.addEventListener('sync', function(event) {
  console.log('🔄 Service Worker: Sincronização em background');
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Aqui você pode adicionar lógica para sincronizar dados
      // quando o usuário voltar online
      console.log('📤 Service Worker: Sincronizando dados...')
    );
  }
});

// Mostrar notificações
self.addEventListener('push', function(event) {
  if (event.data) {
    const data = event.data.json();
    console.log('📬 Service Worker: Push recebido:', data);
    
    const options = {
      body: data.body || 'Nova atualização disponível!',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: data.data || {},
      actions: data.actions || []
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title || 'Parreiral', options)
    );
  }
});

// Lidar com cliques nas notificações
self.addEventListener('notificationclick', function(event) {
  console.log('👆 Service Worker: Notificação clicada:', event.notification);
  
  event.notification.close();
  
  // Focar na janela existente ou abrir nova
  event.waitUntil(
    clients.matchAll({
      type: 'window'
    }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

// Lidar com updates do service worker
self.addEventListener('message', function(event) {
  console.log('💬 Service Worker: Mensagem recebida:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('⏭️ Service Worker: Pulando waiting...');
    self.skipWaiting();
  }
});

// Log de informações úteis
console.log('🍇 Service Worker do Sistema Parreiral carregado!');
console.log('📱 Cache:', CACHE_NAME);
console.log('🌐 URLs em cache:', urlsToCache);