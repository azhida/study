import{b as d}from"./baseRandom.5a8199cf.js";function u(n,e){var t=-1,l=n.length;for(e||(e=Array(l));++t<l;)e[t]=n[t];return e}function i(n,e){var t=-1,l=n.length,f=l-1;for(e=e===void 0?l:e;++t<e;){var h=d(t,f),o=n[h];n[h]=n[t],n[t]=o}return n.length=e,n}export{u as c,i as s};
