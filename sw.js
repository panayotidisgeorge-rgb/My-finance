/* My Finance service worker: app shell is cached so the app opens offline. Version 86fc454e8a */
const V='fin-86fc454e8a';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable.png','./apple-touch-icon.png','./favicon-32.png'];
const XL='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(V);await c.addAll(CORE.map(u=>new Request(u,{cache:'reload'})));try{await c.add(new Request(XL,{mode:'no-cors'}))}catch(x){}self.skipWaiting()})())});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==V&&k.indexOf('fin-')===0)await caches.delete(k);await self.clients.claim()})())});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin&&r.url!==XL)return;
 const key=r.mode==='navigate'?'./index.html':r;
 e.respondWith((async()=>{const c=await caches.open(V);const hit=await c.match(key,{ignoreSearch:true});
  const net=fetch(r,u.origin===location.origin?{cache:'no-cache'}:undefined).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(key,res.clone());return res}).catch(()=>null);
  if(hit){e.waitUntil(net);return hit}
  const res=await net;return res||new Response('Offline',{status:503,headers:{'content-type':'text/plain'}})})())});
