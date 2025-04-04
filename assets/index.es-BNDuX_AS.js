import{$ as W,A as q,B as J,a as Q,E as X,G as Z}from"./index-oqw_ck6L.js";import{h as x,b as ee,d as B,p as L,i as $,u as te}from"./functions-Bsik6ikd-Dr945oKc.js";import{u as w,a as oe}from"./hooks-DzxriSVi.js";let re=e=>crypto.getRandomValues(new Uint8Array(e)),ne=(e,t,o)=>{let u=(2<<Math.log2(e.length-1))-1,n=-~(1.6*u*t/e.length);return(i=t)=>{let a="";for(;;){let c=o(n),r=n|0;for(;r--;)if(a+=e[c[r]&u]||"",a.length>=i)return a}}},ae=(e,t=21)=>ne(e,t|0,re);var ie=Object.defineProperty,U=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,S=(e,t,o)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ce=(e,t)=>{for(var o in t||(t={}))le.call(t,o)&&S(e,o,t[o]);if(U)for(var o of U(t))se.call(t,o)&&S(e,o,t[o]);return e};function _(e,t){return Object.assign(e,{meta:ce({package:"@milkdown/components"},t)}),e}var ue=Object.defineProperty,H=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,j=(e,t,o)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,me=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&j(e,o,t[o]);if(H)for(var o of H(t))pe.call(t,o)&&j(e,o,t[o]);return e};const C="image-block",O=J("image-block",()=>({inline:!1,group:"block",selectable:!0,draggable:!0,isolating:!0,marks:"",atom:!0,priority:100,attrs:{src:{default:""},caption:{default:""},ratio:{default:1}},parseDOM:[{tag:`img[data-type="${C}"]`,getAttrs:e=>{var t;if(!(e instanceof HTMLElement))throw X(e);return{src:e.getAttribute("src")||"",caption:e.getAttribute("caption")||"",ratio:Number((t=e.getAttribute("ratio"))!=null?t:1)}}}],toDOM:e=>["img",me({"data-type":C},e.attrs)],parseMarkdown:{match:({type:e})=>e==="image-block",runner:(e,t,o)=>{const u=t.url,n=t.title;let i=Number(t.alt||1);(Number.isNaN(i)||i===0)&&(i=1),e.addNode(o,{src:u,caption:n,ratio:i})}},toMarkdown:{match:e=>e.type.name==="image-block",runner:(e,t)=>{e.openNode("paragraph"),e.addNode("image",void 0,void 0,{title:t.attrs.caption,url:t.attrs.src,alt:`${Number.parseFloat(t.attrs.ratio).toFixed(2)}`}),e.closeNode()}}}));_(O.node,{displayName:"NodeSchema<image-block>",group:"ImageBlock"});function ge(e){return Z(e,"paragraph",(t,o,u)=>{var n,i;if(((n=t.children)==null?void 0:n.length)!==1)return;const a=(i=t.children)==null?void 0:i[0];if(!a||a.type!=="image")return;const{url:c,alt:r,title:l}=a,d={type:"image-block",url:c,alt:r,title:l};u.children.splice(o,1,d)})}const R=q("remark-image-block",()=>()=>ge);_(R.plugin,{displayName:"Remark<remarkImageBlock>",group:"ImageBlock"});_(R.options,{displayName:"RemarkConfig<remarkImageBlock>",group:"ImageBlock"});const fe={imageIcon:()=>"🌌",captionIcon:()=>"💬",uploadButton:()=>x`Upload file`,confirmButton:()=>x`Confirm ⏎`,uploadPlaceholderText:"or paste the image link ...",captionPlaceholderText:"Image caption",onUpload:e=>Promise.resolve(URL.createObjectURL(e))},T=W(fe,"imageBlockConfigCtx");_(T,{displayName:"Config<image-block>",group:"ImageBlock"});function ve(e,t){const o=customElements.get(e);if(o==null){customElements.define(e,t);return}o!==t&&console.warn(`Custom element ${e} has been defined before.`)}function he({image:e,resizeHandle:t,ratio:o,setRatio:u,src:n,readonly:i}){const a=te(),c=oe(()=>a.current.getRootNode(),[a]);L(()=>{const r=e.current;r&&(delete r.dataset.origin,delete r.dataset.height,r.style.height="")},[n]),L(()=>{const r=t.current,l=e.current;if(!r||!l)return;const d=p=>{p.preventDefault();const f=l.getBoundingClientRect().top,m=p.clientY-f,h=Number(m<100?100:m).toFixed(2);l.dataset.height=h,l.style.height=`${h}px`},k=()=>{c.removeEventListener("pointermove",d),c.removeEventListener("pointerup",k);const p=Number(l.dataset.origin),f=Number(l.dataset.height),m=Number.parseFloat(Number(f/p).toFixed(2));Number.isNaN(m)||u(m)},N=p=>{i||(p.preventDefault(),c.addEventListener("pointermove",d),c.addEventListener("pointerup",k))},y=p=>{const f=a.current.getBoundingClientRect().width;if(!f)return;const m=p.target,h=m.height,E=m.width,I=E<f?h:f*(h/E),P=(I*o).toFixed(2);l.dataset.origin=I.toFixed(2),l.dataset.height=P,l.style.height=`${P}px`};return l.addEventListener("load",y),r.addEventListener("pointerdown",N),()=>{l.removeEventListener("load",y),r.removeEventListener("pointerdown",N)}},[])}var $e=(e,t,o)=>new Promise((u,n)=>{var i=r=>{try{c(o.next(r))}catch(l){n(l)}},a=r=>{try{c(o.throw(r))}catch(l){n(l)}},c=r=>r.done?u(r.value):Promise.resolve(r.value).then(i,a);c((o=o.apply(e,t)).next())});let b=0;const be=ae("abcdefg",8),A=({src:e="",caption:t="",ratio:o=1,selected:u=!1,readonly:n=!1,setAttr:i,config:a})=>{const c=B(),r=B(),l=B(),[d,k]=w(t.length>0),[N,y]=w(e.length!==0),[p]=w(be()),[f,m]=w(!1),[h,E]=w(e);he({image:c,resizeHandle:r,ratio:o,setRatio:s=>i==null?void 0:i("ratio",s),src:e,readonly:n}),L(()=>{u||k(t.length>0)},[u]);const I=s=>{const v=s.target.value;b&&window.clearTimeout(b),b=window.setTimeout(()=>{i==null||i("caption",v)},1e3)},P=s=>{const v=s.target.value;b&&(window.clearTimeout(b),b=0),i==null||i("caption",v)},z=s=>{const v=s.target.value;y(v.length!==0),E(v)},G=s=>$e(void 0,null,function*(){var g;const v=(g=s.target.files)==null?void 0:g[0];if(!v)return;const M=yield a==null?void 0:a.onUpload(v);M&&(i==null||i("src",M),y(!0))}),Y=s=>{s.preventDefault(),s.stopPropagation(),!n&&k(g=>!g)},D=()=>{var s,g;i==null||i("src",(g=(s=l.current)==null?void 0:s.value)!=null?g:"")},K=s=>{s.key==="Enter"&&D()},F=s=>{s.preventDefault(),s.stopPropagation()};return x`<host class=${$(u&&"selected")}>
    <div class=${$("image-edit",e.length>0&&"hidden")}>
      <div class="image-icon">${a==null?void 0:a.imageIcon()}</div>
      <div class=${$("link-importer",f&&"focus")}>
        <input
          ref=${l}
          draggable="true"
          ondragstart=${F}
          disabled=${n}
          class="link-input-area"
          value=${h}
          oninput=${z}
          onkeydown=${K}
          onfocus=${()=>m(!0)}
          onblur=${()=>m(!1)}
        />
        <div class=${$("placeholder",N&&"hidden")}>
          <input
            disabled=${n}
            class="hidden"
            id=${p}
            type="file"
            accept="image/*"
            onchange=${G}
          />
          <label class="uploader" for=${p}>
            ${a==null?void 0:a.uploadButton()}
          </label>
          <span class="text" onclick=${()=>{var s;return(s=l.current)==null?void 0:s.focus()}}>
            ${a==null?void 0:a.uploadPlaceholderText}
          </span>
        </div>
      </div>
      <div
        class=${$("confirm",h.length===0&&"hidden")}
        onclick=${()=>D()}
      >
        ${a==null?void 0:a.confirmButton()}
      </div>
    </div>
    <div class=${$("image-wrapper",e.length===0&&"hidden")}>
      <div class="operation">
        <div class="operation-item" onpointerdown=${Y}>
          ${a==null?void 0:a.captionIcon()}
        </div>
      </div>
      <img
        ref=${c}
        data-type=${C}
        src=${e}
        alt=${t}
        ratio=${o}
      />
      <div ref=${r} class="image-resize-handle"></div>
    </div>
    <input
      draggable="true"
      ondragstart=${F}
      class=${$("caption-input",!d&&"hidden")}
      placeholder=${a==null?void 0:a.captionPlaceholderText}
      oninput=${I}
      onblur=${P}
      value=${t}
    />
  </host>`};A.props={src:String,caption:String,ratio:Number,selected:Boolean,readonly:Boolean,setAttr:Function,config:Object};const ke=ee(A);ve("milkdown-image-block",ke);const V=Q(O.node,e=>(t,o,u)=>{const n=document.createElement("milkdown-image-block"),i=e.get(T.key),a=i.proxyDomURL,c=r=>{if(!a)n.src=r.attrs.src;else{const l=a(r.attrs.src);typeof l=="string"?n.src=l:l.then(d=>{n.src=d})}n.ratio=r.attrs.ratio,n.caption=r.attrs.caption,n.readonly=!o.editable};return c(t),n.selected=!1,n.setAttr=(r,l)=>{const d=u();d!=null&&o.dispatch(o.state.tr.setNodeAttribute(d,r,l))},n.config=i,{dom:n,update:r=>r.type!==t.type?!1:(c(r),!0),stopEvent:r=>r.target instanceof HTMLInputElement,selectNode:()=>{n.selected=!0},deselectNode:()=>{n.selected=!1},destroy:()=>{n.remove()}}});_(V,{displayName:"NodeView<image-block>",group:"ImageBlock"});const Ne=[R,O,V,T].flat();export{Ne as a,O as b,ae as c,T as i};
