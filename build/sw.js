/*
let cacheData = "appV1";
this.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/js/main.chnk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/',
                '/users',
                '/favicon.ico',
                '/manifest.json'
            ])
        })
    )
})

this.addEventListener("fetch", (event) => {
    if(!navigator.onLine)
    {
        event.respondWith(
            caches.match(event.request).then((resp)=>{
                if(resp){
                    return resp
                }
                return fetch(event.request).then((networkResponse)=>{
                    return caches.open(cacheData).then((cache)=>{
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });

                let requestUrl = event.request.clone();
                fetch(requestUrl1);
            }).catch(()=>{
                return caches.match('/index.html');
            })
        );
    }
    
});
*/

let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll([
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/bundle.js',
        '/index.html',
        '/',
        '/users',
        '/favicon.ico',
        '/manifest.json'
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      }).catch(() => {
        return caches.match('/index.html');
      })
    );
  } else {
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        return caches.open(cacheData).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        return caches.match(event.request);
      })
    );
  }
});
