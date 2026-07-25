import{o as e,r as t,t as n}from"./index-ByDRBojd.js";import{a as r,c as i,d as a,f as o,i as s,l as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./DeviceShowcase-FqrlfBTk.js";var g=parseInt(`185`.replace(/\D+/g,``)),_=e(t()),v=class extends h{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${g>=154?`colorspace_fragment`:`encodings_fragment`}>
        }
      `})}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(e){this.uniforms.pixelRatio.value=e}},y=e=>e&&e.constructor===Float32Array,b=e=>[e.r,e.g,e.b],x=e=>e instanceof a||e instanceof o||e instanceof d,S=e=>Array.isArray(e)?e:x(e)?e.toArray():[e,e,e];function C(e,t,n){return _.useMemo(()=>{if(t!==void 0){if(y(t))return t;if(t instanceof i){let n=Array.from({length:e*3},()=>b(t)).flat();return Float32Array.from(n)}else if(x(t)||Array.isArray(t)){let n=Array.from({length:e*3},()=>S(t)).flat();return Float32Array.from(n)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},n)},[t])}var w=_.forwardRef(({noise:e=1,count:t=100,speed:n=1,opacity:a=1,scale:o=1,size:s,color:l,children:d,...m},h)=>{_.useMemo(()=>r({SparklesImplMaterial:v}),[]);let g=_.useRef(null),b=p(e=>e.viewport.dpr),x=S(o),w=_.useMemo(()=>Float32Array.from(Array.from({length:t},()=>x.map(c.randFloatSpread)).flat()),[t,...x]),T=C(t,s,Math.random),E=C(t,a),D=C(t,n),O=C(t*3,e),k=C(l===void 0?t*3:t,y(l)?l:new i(l),()=>1);return u(e=>{g.current&&g.current.material&&(g.current.material.time=e.clock.elapsedTime)}),_.useImperativeHandle(h,()=>g.current,[]),_.createElement(`points`,f({key:`particle-${t}-${JSON.stringify(o)}`},m,{ref:g}),_.createElement(`bufferGeometry`,null,_.createElement(`bufferAttribute`,{attach:`attributes-position`,args:[w,3]}),_.createElement(`bufferAttribute`,{attach:`attributes-size`,args:[T,1]}),_.createElement(`bufferAttribute`,{attach:`attributes-opacity`,args:[E,1]}),_.createElement(`bufferAttribute`,{attach:`attributes-speed`,args:[D,1]}),_.createElement(`bufferAttribute`,{attach:`attributes-color`,args:[k,3]}),_.createElement(`bufferAttribute`,{attach:`attributes-noise`,args:[O,3]})),d||_.createElement(`sparklesImplMaterial`,{transparent:!0,pixelRatio:b,depthWrite:!1}))}),T=n();function E(){let[e,t]=(0,_.useState)(!1);return e?null:(0,T.jsxs)(s,{dpr:[1,1.5],camera:{position:[0,0,5.4],fov:36},gl:{antialias:!0,alpha:!0},className:`!absolute inset-0`,onCreated:({gl:e})=>{e.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),t(!0)})},children:[(0,T.jsx)(`ambientLight`,{intensity:.5}),(0,T.jsx)(`directionalLight`,{position:[2,3,4],intensity:1.2}),(0,T.jsx)(`directionalLight`,{position:[-3,-1,-2],intensity:.5,color:`#4c8dff`}),(0,T.jsx)(w,{count:60,scale:[6,5,3],size:2,speed:.15,opacity:.4,color:`#6ea3ff`}),(0,T.jsxs)(_.Suspense,{fallback:null,children:[(0,T.jsx)(m,{images:[`/app-screens/enbdx/1.webp`,`/app-screens/weddingvows/1.webp`,`/app-screens/ikea/1.webp`,`/app-screens/orbi/1.webp`],reduceMotion:!1,followPointer:!0,cycleInterval:3200}),(0,T.jsx)(l,{position:[0,-1.55,0],opacity:.55,scale:6,blur:2.8,far:2,color:`#000814`})]})]})}export{E as HeroCanvas};