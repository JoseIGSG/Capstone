(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[940],{4338:(t,e,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/entrega-exitosa",function(){return a(3378)}])},3378:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>h});var n=a(4848),r=a(6540),o={};!function t(e,a,n,r){var o,i,s,l,c,h,f,u,d,m,g,p=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),b="function"==typeof Path2D&&"function"==typeof DOMMatrix;function M(){}function v(t){var n=a.exports.Promise,r=void 0!==n?n:e.Promise;return"function"==typeof r?new r(t):(t(M,M),null)}var w=(o=function(){if(!e.OffscreenCanvas)return!1;var t=new OffscreenCanvas(1,1),a=t.getContext("2d");a.fillRect(0,0,1,1);var n=t.transferToImageBitmap();try{a.createPattern(n,"no-repeat")}catch(t){return!1}return!0}(),i=new Map,{transform:function(t){if(o)return t;if(i.has(t))return i.get(t);var e=new OffscreenCanvas(t.width,t.height);return e.getContext("2d").drawImage(t,0,0),i.set(t,e),e},clear:function(){i.clear()}}),y=(c=Math.floor(1e3/60),h={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(s=function(t){var e=Math.random();return h[e]=requestAnimationFrame(function a(n){f===n||f+c-1<n?(f=n,delete h[e],t()):h[e]=requestAnimationFrame(a)}),e},l=function(t){h[t]&&cancelAnimationFrame(h[t])}):(s=function(t){return setTimeout(t,c)},l=function(t){return clearTimeout(t)}),{frame:s,cancel:l}),x=(m={},function(){if(u)return u;if(!n&&p){var e=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{u=new Worker(URL.createObjectURL(new Blob([e])))}catch(t){return"function"==typeof console.warn&&console.warn("\uD83C\uDF8A Could not load worker",t),null}!function(t){function e(e,a){t.postMessage({options:e||{},callback:a})}t.init=function(e){var a=e.transferControlToOffscreen();t.postMessage({canvas:a},[a])},t.fire=function(a,n,r){if(d)return e(a,null),d;var o=Math.random().toString(36).slice(2);return d=v(function(n){function i(e){e.data.callback===o&&(delete m[o],t.removeEventListener("message",i),d=null,w.clear(),r(),n())}t.addEventListener("message",i),e(a,o),m[o]=i.bind(null,{data:{callback:o}})})},t.reset=function(){for(var e in t.postMessage({reset:!0}),m)m[e](),delete m[e]}}(u)}return u}),C={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(t,e,a){var n;return n=t&&null!=t[e]?t[e]:C[e],a?a(n):n}function T(t){return t<0?0:Math.floor(t)}function I(t){return parseInt(t,16)}function S(t){return t.map(_)}function _(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:I(e.substring(0,2)),g:I(e.substring(2,4)),b:I(e.substring(4,6))}}function P(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function k(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function O(t,a){var o,i=!t,s=!!E(a||{},"resize"),l=!1,c=E(a,"disableForReducedMotion",Boolean),h=p&&E(a||{},"useWorker")?x():null,f=i?P:k,u=!!t&&!!h&&!!t.__confetti_initialized,d="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function m(a){var m,g=c||E(a,"disableForReducedMotion",Boolean),p=E(a,"zIndex",Number);if(g&&d)return v(function(t){t()});i&&o?t=o.canvas:i&&!t&&((m=document.createElement("canvas")).style.position="fixed",m.style.top="0px",m.style.left="0px",m.style.pointerEvents="none",m.style.zIndex=p,t=m,document.body.appendChild(t)),s&&!u&&f(t);var M={width:t.width,height:t.height};function x(){if(h){var e={getBoundingClientRect:function(){if(!i)return t.getBoundingClientRect()}};f(e),h.postMessage({resize:{width:e.width,height:e.height}});return}M.width=M.height=null}function C(){o=null,s&&(l=!1,e.removeEventListener("resize",x)),i&&t&&(document.body.contains(t)&&document.body.removeChild(t),t=null,u=!1)}return(h&&!u&&h.init(t),u=!0,h&&(t.__confetti_initialized=!0),s&&!l&&(l=!0,e.addEventListener("resize",x,!1)),h)?h.fire(a,M,C):function(e,a,i){for(var s,l,c,h,u,d,m,g=E(e,"particleCount",T),p=E(e,"angle",Number),M=E(e,"spread",Number),x=E(e,"startVelocity",Number),C=E(e,"decay",Number),I=E(e,"gravity",Number),_=E(e,"drift",Number),P=E(e,"colors",S),k=E(e,"ticks",Number),O=E(e,"shapes"),N=E(e,"scalar"),B=!!E(e,"flat"),F=((s=E(e,"origin",Object)).x=E(s,"x",Number),s.y=E(s,"y",Number),s),R=g,A=[],j=t.width*F.x,D=t.height*F.y;R--;)A.push(function(t){var e=t.angle*(Math.PI/180),a=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*t.startVelocity+Math.random()*t.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*t.gravity,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}({x:j,y:D,angle:p,spread:M,startVelocity:x,color:P[R%P.length],shape:O[Math.floor(Math.random()*(O.length-0))+0],ticks:k,decay:C,gravity:I,drift:_,scalar:N,flat:B}));return o?o.addFettis(A):(l=t,u=A.slice(),d=l.getContext("2d"),m=v(function(t){function e(){c=h=null,d.clearRect(0,0,a.width,a.height),w.clear(),i(),t()}c=y.frame(function t(){n&&!(a.width===r.width&&a.height===r.height)&&(a.width=l.width=r.width,a.height=l.height=r.height),a.width||a.height||(f(l),a.width=l.width,a.height=l.height),d.clearRect(0,0,a.width,a.height),(u=u.filter(function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a,n,r,o,i,s,l,c,h,f,u,d,m,g,p,M,v=e.tick++/e.totalTicks,y=e.x+e.random*e.tiltCos,x=e.y+e.random*e.tiltSin,C=e.wobbleX+e.random*e.tiltCos,E=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-v)+")",t.beginPath(),b&&"path"===e.shape.type&&"string"==typeof e.shape.path&&Array.isArray(e.shape.matrix))t.fill((a=e.shape.path,n=e.shape.matrix,r=e.x,o=e.y,i=.1*Math.abs(C-y),s=.1*Math.abs(E-x),l=Math.PI/10*e.wobble,c=new Path2D(a),(h=new Path2D).addPath(c,new DOMMatrix(n)),(f=new Path2D).addPath(h,new DOMMatrix([Math.cos(l)*i,Math.sin(l)*i,-Math.sin(l)*s,Math.cos(l)*s,r,o])),f));else if("bitmap"===e.shape.type){var T=Math.PI/10*e.wobble,I=.1*Math.abs(C-y),S=.1*Math.abs(E-x),_=e.shape.bitmap.width*e.scalar,P=e.shape.bitmap.height*e.scalar,k=new DOMMatrix([Math.cos(T)*I,Math.sin(T)*I,-Math.sin(T)*S,Math.cos(T)*S,e.x,e.y]);k.multiplySelf(new DOMMatrix(e.shape.matrix));var O=t.createPattern(w.transform(e.shape.bitmap),"no-repeat");O.setTransform(k),t.globalAlpha=1-v,t.fillStyle=O,t.fillRect(e.x-_/2,e.y-P/2,_,P),t.globalAlpha=1}else if("circle"===e.shape)t.ellipse?t.ellipse(e.x,e.y,Math.abs(C-y)*e.ovalScalar,Math.abs(E-x)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(u=e.x,d=e.y,m=Math.abs(C-y)*e.ovalScalar,g=Math.abs(E-x)*e.ovalScalar,p=Math.PI/10*e.wobble,M=2*Math.PI,t.save(),t.translate(u,d),t.rotate(p),t.scale(m,g),t.arc(0,0,1,0,M,void 0),t.restore());else if("star"===e.shape)for(var N=Math.PI/2*3,B=4*e.scalar,F=8*e.scalar,R=e.x,A=e.y,j=5,D=Math.PI/5;j--;)R=e.x+Math.cos(N)*F,A=e.y+Math.sin(N)*F,t.lineTo(R,A),N+=D,R=e.x+Math.cos(N)*B,A=e.y+Math.sin(N)*B,t.lineTo(R,A),N+=D;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(x)),t.lineTo(Math.floor(C),Math.floor(E)),t.lineTo(Math.floor(y),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}(d,t)})).length?c=y.frame(t):e()}),h=e}),(o={addFettis:function(t){return u=u.concat(t),m},canvas:l,promise:m,reset:function(){c&&y.cancel(c),h&&h()}}).promise)}(a,M,C)}return m.reset=function(){h&&h.reset(),o&&o.reset()},m}function N(){return g||(g=O(null,{useWorker:!0,resize:!0})),g}a.exports=function(){return N().apply(this,arguments)},a.exports.reset=function(){N().reset()},a.exports.create=O,a.exports.shapeFromPath=function(t){if(!b)throw Error("path confetti are not supported in this browser");"string"==typeof t?n=t:(n=t.path,r=t.matrix);var e=new Path2D(n),a=document.createElement("canvas").getContext("2d");if(!r){for(var n,r,o,i,s=1e3,l=1e3,c=0,h=0,f=0;f<1e3;f+=2)for(var u=0;u<1e3;u+=2)a.isPointInPath(e,f,u,"nonzero")&&(s=Math.min(s,f),l=Math.min(l,u),c=Math.max(c,f),h=Math.max(h,u));var d=Math.min(10/(o=c-s),10/(i=h-l));r=[d,0,0,d,-Math.round(o/2+s)*d,-Math.round(i/2+l)*d]}return{type:"path",path:n,matrix:r}},a.exports.shapeFromText=function(t){var e,a=1,n="#000000",r='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"==typeof t?e=t:(e=t.text,a="scalar"in t?t.scalar:a,r="fontFamily"in t?t.fontFamily:r,n="color"in t?t.color:n);var o=10*a,i=""+o+"px "+r,s=new OffscreenCanvas(o,o),l=s.getContext("2d");l.font=i;var c=l.measureText(e),h=Math.ceil(c.actualBoundingBoxRight+c.actualBoundingBoxLeft),f=Math.ceil(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent),u=c.actualBoundingBoxLeft+2,d=c.actualBoundingBoxAscent+2;h+=4,f+=4,(l=(s=new OffscreenCanvas(h,f)).getContext("2d")).font=i,l.fillStyle=n,l.fillText(e,u,d);var m=1/a;return{type:"bitmap",bitmap:s.transferToImageBitmap(),matrix:[m,0,0,m,-h*m/2,-f*m/2]}}}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),o,!1);let i=o.exports;o.exports.create;var s=a(4691),l=a.n(s),c=a(6715);function h(){let t=(0,c.useRouter)();return(0,r.useEffect)(()=>{i({particleCount:100,spread:70,origin:{y:.6}})},[]),(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsx)("h1",{className:l().title,children:"\xa1Residente V\xe1lido!"}),(0,n.jsx)("p",{className:l().message,children:"Ahora puede entregar la encomienda."}),(0,n.jsx)("button",{className:l().homeButton,onClick:()=>{t.push("/")},children:"Volver al Inicio"})]})}},4691:t=>{t.exports={container:"Success_container__jsq0s",title:"Success_title__XiOsb",message:"Success_message__XjwDd",homeButton:"Success_homeButton__xWY_n"}},6715:(t,e,a)=>{t.exports=a(8440)}},t=>{var e=e=>t(t.s=e);t.O(0,[636,593,792],()=>e(4338)),_N_E=t.O()}]);