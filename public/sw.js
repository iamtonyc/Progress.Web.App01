self.addEventListener('install', function(event){
    console.log('[Service Worker] Instalilng Serice Worker ... ', event);
});


self.addEventListener('activate', function(event){
    console.log('[Service Worker] Activating Serice Worker ... ', event);
    return self.clients.claim();
});
