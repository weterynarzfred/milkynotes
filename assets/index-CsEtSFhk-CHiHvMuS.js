import{d as st}from"./index-D6fLMv29-COUJrQhB.js";import{b as nt,K as at,p as lt,i as y,L as it,M as rt,N as ct,H as dt,O as ut,J as mt,h as D}from"./functions-Bsik6ikd-Dr945oKc.js";import{m as M}from"./inline-latex-C9IGAXXQ-zViXB1RP.js";import{T as P,r as ht,C as pt,H as vt,I as ft,J as yt,K as bt,L as G,h as R,N as Q,M as A,O as kt,Q as _t,R as wt,U as gt}from"./index-BMqmDD-m.js";import{t as $t,T as Ct}from"./index.es-_6XeIplr.js";import{b as q}from"./index.es-BDSzVE4f.js";import"./index-BLZFuL2z.js";import"./floating-ui.dom-DJfcjnnZ.js";import"./hooks-DzxriSVi.js";const Z=({ctx:t,hide:s,show:n,config:o,selection:c})=>{var d,m,h,_,w,g,$,C,I,S,T,E;const W=at();lt(()=>{W()},[n]);const p=e=>l=>{l.preventDefault(),t&&e(t),W()},v=e=>{if(!t||!c)return!1;const l=t.get(R),{state:{doc:i}}=l;return i.rangeHasMark(c.from,c.to,e)},J=e=>{if(!t||!c)return!1;const l=t.get(R),{state:{doc:i}}=l;if(c instanceof Q)return c.node.type===e;const{from:f,to:L}=c;let b=!1;return i.nodesBetween(f,L,B=>B.type===e?(b=!0,!1):!0),b},K=t==null?void 0:t.get(ht),et=K==null?void 0:K.includes(pt.Latex),ot=e=>{const l=J(M.type(e)),i=e.get(R),{selection:f,doc:L,tr:b}=i.state;if(!l){const O=L.textBetween(f.from,f.to);let H=b.replaceSelectionWith(M.type(e).create({value:O}));i.dispatch(H.setSelection(Q.create(H.doc,f.from)));return}const{from:B,to:U}=f;let k=-1,N=null;if(L.nodesBetween(B,U,(O,H)=>N?!1:O.type===M.type(e)?(k=H,N=O,!1):!0),!N||k<0)return;let F=b.delete(k,k+1);const V=N.attrs.value;F=F.insertText(V,k),i.dispatch(F.setSelection(P.create(F.doc,B,U+V.length-1)))};return D`<host>
    <button
      type="button"
      class=${y("toolbar-item",t&&v(vt.type(t))&&"active")}
      onmousedown=${p(e=>{e.get(A).call(kt.key)})}
    >
      ${(m=(d=o==null?void 0:o.boldIcon)==null?void 0:d.call(o))!=null?m:it}
    </button>
    <button
      type="button"
      class=${y("toolbar-item",t&&v(ft.type(t))&&"active")}
      onmousedown=${p(e=>{e.get(A).call(_t.key)})}
    >
      ${(_=(h=o==null?void 0:o.italicIcon)==null?void 0:h.call(o))!=null?_:rt}
    </button>
    <button
      type="button"
      class=${y("toolbar-item",t&&v(yt.type(t))&&"active")}
      onmousedown=${p(e=>{e.get(A).call(wt.key)})}
    >
      ${(g=(w=o==null?void 0:o.strikethroughIcon)==null?void 0:w.call(o))!=null?g:ct}
    </button>
    <div class="divider"></div>
    <button
      type="button"
      class=${y("toolbar-item",t&&v(bt.type(t))&&"active")}
      onmousedown=${p(e=>{e.get(A).call(gt.key)})}
    >
      ${(C=($=o==null?void 0:o.codeIcon)==null?void 0:$.call(o))!=null?C:dt}
    </button>
    ${et&&D`<button
      type="button"
      class=${y("toolbar-item",t&&J(M.type(t))&&"active")}
      onmousedown=${p(ot)}
    >
      ${(S=(I=o==null?void 0:o.latexIcon)==null?void 0:I.call(o))!=null?S:mt}
    </button>`}
    <button
      type="button"
      class=${y("toolbar-item",t&&v(G.type(t))&&"active")}
      onmousedown=${p(e=>{const l=e.get(R),{selection:i}=l.state;if(v(G.type(e))){e.get(q.key).removeLink(i.from,i.to);return}e.get(q.key).addLink(i.from,i.to),s==null||s()})}
    >
      ${(E=(T=o==null?void 0:o.linkIcon)==null?void 0:T.call(o))!=null?E:ut}
    </button>
  </host>`};Z.props={ctx:Object,hide:Function,show:Boolean,config:Object,selection:Object};const j=nt(Z);var x=t=>{throw TypeError(t)},tt=(t,s,n)=>s.has(t)||x("Cannot "+n),a=(t,s,n)=>(tt(t,s,"read from private field"),n?n.call(t):s.get(t)),z=(t,s,n)=>s.has(t)?x("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,n),X=(t,s,n,o)=>(tt(t,s,"write to private field"),s.set(t,n),n),u,r;const Y=$t("CREPE_TOOLBAR");class It{constructor(s,n,o){z(this,u),z(this,r),this.update=(d,m)=>{a(this,u).update(d,m),a(this,r).selection=d.state.selection},this.destroy=()=>{a(this,u).destroy(),a(this,r).remove()},this.hide=()=>{a(this,u).hide()};const c=new j;X(this,r,c),a(this,r).ctx=s,a(this,r).hide=this.hide,a(this,r).config=o,a(this,r).selection=n.state.selection,X(this,u,new Ct({content:a(this,r),debounce:20,offset:10,shouldShow(d){const{doc:m,selection:h}=d.state,{empty:_,from:w,to:g}=h,$=!m.textBetween(w,g).length&&h instanceof P,C=!(h instanceof P),I=d.dom.getRootNode().activeElement,S=c.contains(I),T=!d.hasFocus()&&!S,E=!d.editable;return!(T||C||_||$||E)}})),a(this,u).onShow=()=>{a(this,r).show=!0},a(this,u).onHide=()=>{a(this,r).show=!1},this.update(n)}}u=new WeakMap;r=new WeakMap;st("milkdown-toolbar",j);const Mt=(t,s)=>{t.config(n=>{n.set(Y.key,{view:o=>new It(n,o,s)})}).use(Y)};export{Mt as defineFeature};
