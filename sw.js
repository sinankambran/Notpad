if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const c=e=>n(e,s),l={module:{uri:s},exports:o,require:c};i[s]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(d(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"7b0de068ecfa7dcfb5572f94706985c1"},{url:"assets/index-6xSwY_iW.js",revision:null},{url:"assets/index-BkerDJJT.css",revision:null},{url:"assets/index-Ct4xKqlT.js",revision:null},{url:"favicon.ico",revision:"2c9029061d40debc614e8872303da7af"},{url:"favicon.png",revision:"71967a2b21d7a951e89f34697032ae9f"},{url:"icon512_maskable.png",revision:"991637ab03987f0fe7912ed21915c5d2"},{url:"icon512_rounded.ico",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"icon512_rounded.png",revision:"99465e232b31e0a3829e9a75f45188f0"},{url:"index.html",revision:"919f6da7ead2825dbdef94291d48cdee"},{url:"logo.png",revision:"3cfd47275b37703e6a3bdb8e83b41e81"},{url:"maskable-icon-512x512.png",revision:"e01225e2b610edbcc855ea84104baed5"},{url:"pwa-192x192.png",revision:"535472e86b99193a0b4819193aaf563d"},{url:"pwa-512x512.png",revision:"5c6840db4dd7bded750af21f9a6beb21"},{url:"pwa-64x64.png",revision:"c876482134cf71bbafc74b4963dd79de"},{url:"registerSW.js",revision:"67d5bfef42ac42e5bd1c18adb7fd7593"},{url:"screenshot.png",revision:"f7a024ee951c874b82b582f0135e9be9"},{url:"icon512_maskable.png",revision:"991637ab03987f0fe7912ed21915c5d2"},{url:"icon512_rounded.png",revision:"99465e232b31e0a3829e9a75f45188f0"},{url:"manifest.webmanifest",revision:"b53ddad4df8cd25ad3de6210045d49ef"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
