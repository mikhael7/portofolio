function w(){}function L(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function C(){return Object.create(null)}function y(t){t.forEach(B)}function O(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function lt(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e){t.$$.on_destroy.push(J(n,e))}function ft(t,n,e,i){if(t){const r=T(t,n,e,i);return t[0](r)}}function T(t,n,e,i){return t[1]&&i?L(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],u=Math.max(n.dirty.length,r.length);for(let o=0;o<u;o+=1)s[o]=n.dirty[o]|r[o];return s}return n.dirty|r}return n.dirty}function _t(t,n,e,i,r,s){if(r){const u=T(n,e,i,s);t.p(u,r)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let N=!1;function K(){N=!0}function W(){N=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:Q(1,r,g=>n[e[g]].claim_order,l))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const s=[],u=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);o>=c;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);s.reverse(),u.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<u.length;c++){for(;l<s.length&&u[c].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(u[c],a)}}function U(t,n){if(N){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){N&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function pt(){return S(" ")}function yt(){return S("")}function gt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){tt(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const c=e(o);return c===void 0?t.splice(u,1):t[u]=c,r||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const c=e(o);return c===void 0?t.splice(u,1):t[u]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function z(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const s=[];for(let u=0;u<r.attributes.length;u++){const o=r.attributes[u];e[o.name]||s.push(o.name)}s.forEach(u=>r.removeAttribute(u))},()=>i(n))}function xt(t,n,e){return z(t,n,e,X)}function bt(t,n,e){return z(t,n,e,Y)}function nt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function $t(t){return nt(t," ")}function wt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Nt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function vt(t,n){return new t(n)}let p;function m(t){p=t}function D(){if(!p)throw new Error("Function called outside component initialization");return p}function Et(t){D().$$.on_mount.push(t)}function jt(t){D().$$.after_update.push(t)}const h=[],M=[],b=[],q=[],F=Promise.resolve();let E=!1;function H(){E||(E=!0,F.then(I))}function St(){return H(),F}function j(t){b.push(t)}const v=new Set;let d=0;function I(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const n=h[d];d++,m(n),et(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;M.length;)M.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];v.has(e)||(v.add(e),e())}b.length=0}while(h.length);for(;q.length;)q.pop()();E=!1,v.clear(),m(t)}function et(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const $=new Set;let _;function kt(){_={r:0,c:[],p:_}}function At(){_.r||y(_.c),_=_.p}function it(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Mt(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const u=t[s],o=n[s];if(o){for(const c in u)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[s]=o}else for(const c in u)r[c]=1}for(const u in i)u in e||(e[u]=void 0);return e}function qt(t){return typeof t=="object"&&t!==null?t:{}}function Bt(t){t&&t.c()}function Ot(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(n,e),i||j(()=>{const u=t.$$.on_mount.map(B).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...u):y(u),t.$$.on_mount=[]}),s.forEach(j)}function ct(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Tt(t,n,e,i,r,s,u,o=[-1]){const c=p;m(t);const l=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};u&&u(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,g,...k)=>{const A=k.length?k[0]:g;return l.ctx&&r(l.ctx[f],l.ctx[f]=A)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](A),a&&ut(t,f)),g}):[],l.update(),a=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){K();const f=Z(n.target);l.fragment&&l.fragment.l(f),f.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),W(),I()}m(c)}class Pt{$destroy(){ct(this,1),this.$destroy=w}$on(n,e){if(!O(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{St as A,w as B,ft as C,_t as D,dt as E,at as F,U as G,st as H,Y as I,bt as J,L as K,Mt as L,qt as M,ht as N,lt as O,Pt as S,pt as a,mt as b,$t as c,At as d,yt as e,it as f,kt as g,V as h,Tt as i,jt as j,X as k,xt as l,Z as m,gt as n,Et as o,Nt as p,S as q,nt as r,ot as s,Ct as t,wt as u,vt as v,Bt as w,Ot as x,rt as y,ct as z};
