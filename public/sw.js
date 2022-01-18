self.addEventListener('install', function(event){
    console.log('[Service Worker] Instalilng Serice Worker ... ', event);
});


self.addEventListener('activate', function(event){
    console.log('[Service Worker] Activating Serice Worker ... ', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function(event){
    console.log('[Service Worker] Fetchig somethings ... ', event);
    event.respondWith(fetch(event.request));
});

var promise =new Promise(function (resolve, reject){
    setTimeout(function(){
        //resolve('This is executed once the timer is done');
        reject ({code: 500, message: 'An erorr occured!'});

        //console.log('This is executed once the timer is done');
    },3000);
});

fetch('https://httpbin.org/ips')
    .then(function(response){
        console.log(response);
        response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
    console.log(err.code, err.message);
});


promise.then(function(text ){
    return text;
}).then(function(newText){
    console.log(newText);
}).catch(function(err){
    console.log(err.code, err.message);
});




console.log('This is executed right after setTimeout()');