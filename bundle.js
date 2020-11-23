var app=function(){"use strict";function n(){}function t(n){return n()}function e(){return Object.create(null)}function s(n){n.forEach(t)}function a(n){return"function"==typeof n}function o(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function c(n,t,e,s){return n[1]&&s?function(n,t){for(const e in t)n[e]=t[e];return n}(e.ctx.slice(),n[1](s(t))):e.ctx}function r(n,t,e,s,a,o,r){const l=function(n,t,e,s){if(n[2]&&s){const a=n[2](s(e));if(void 0===t.dirty)return a;if("object"==typeof a){const n=[],e=Math.max(t.dirty.length,a.length);for(let s=0;s<e;s+=1)n[s]=t.dirty[s]|a[s];return n}return t.dirty|a}return t.dirty}(t,s,a,o);if(l){const a=c(t,e,s,r);n.p(a,l)}}function l(n,t){n.appendChild(t)}function p(n,t,e){n.insertBefore(t,e||null)}function i(n){n.parentNode.removeChild(n)}function u(n){return document.createElement(n)}function d(n){return document.createTextNode(n)}function f(){return d(" ")}function g(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function k(n,t,e){n.classList[e?"add":"remove"](t)}let h;function m(n){h=n}function v(){if(!h)throw new Error("Function called outside component initialization");return h}function y(){const n=v();return(t,e)=>{const s=n.$$.callbacks[t];if(s){const a=function(n,t){const e=document.createEvent("CustomEvent");return e.initCustomEvent(n,!1,!1,t),e}(t,e);s.slice().forEach((t=>{t.call(n,a)}))}}}const $=[],b=[],x=[],w=[],E=Promise.resolve();let M=!1;function I(){M||(M=!0,E.then(C))}function _(n){x.push(n)}let T=!1;const L=new Set;function C(){if(!T){T=!0;do{for(let n=0;n<$.length;n+=1){const t=$[n];m(t),j(t.$$)}for(m(null),$.length=0;b.length;)b.pop()();for(let n=0;n<x.length;n+=1){const t=x[n];L.has(t)||(L.add(t),t())}x.length=0}while($.length);for(;w.length;)w.pop()();M=!1,T=!1,L.clear()}}function j(n){if(null!==n.fragment){n.update(),s(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(_)}}const O=new Set;function H(n,t){n&&n.i&&(O.delete(n),n.i(t))}function P(n,t,e,s){if(n&&n.o){if(O.has(n))return;O.add(n),undefined.c.push((()=>{O.delete(n),s&&(e&&n.d(1),s())})),n.o(t)}}function A(n,e,o){const{fragment:c,on_mount:r,on_destroy:l,after_update:p}=n.$$;c&&c.m(e,o),_((()=>{const e=r.map(t).filter(a);l?l.push(...e):s(e),n.$$.on_mount=[]})),p.forEach(_)}function N(n,t){const e=n.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,a,o,c,r,l,p=[-1]){const u=h;m(t);const d=a.props||{},f=t.$$={fragment:null,ctx:null,props:l,update:n,not_equal:r,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:e(),dirty:p,skip_bound:!1};let g=!1;if(f.ctx=o?o(t,d,((n,e,...s)=>{const a=s.length?s[0]:e;return f.ctx&&r(f.ctx[n],f.ctx[n]=a)&&(!f.skip_bound&&f.bound[n]&&f.bound[n](a),g&&function(n,t){-1===n.$$.dirty[0]&&($.push(n),I(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}(t,n)),e})):[],f.update(),g=!0,s(f.before_update),f.fragment=!!c&&c(f.ctx),a.target){if(a.hydrate){const n=function(n){return Array.from(n.childNodes)}(a.target);f.fragment&&f.fragment.l(n),n.forEach(i)}else f.fragment&&f.fragment.c();a.intro&&H(t.$$.fragment),A(t,a.target,a.anchor),C()}m(u)}class V{$destroy(){N(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const D=n=>({intersecting:2&n,entry:1&n}),q=n=>({intersecting:n[1],entry:n[0]});function z(n){let t;const e=n[7].default,s=function(n,t,e,s){if(n){const a=c(n,t,e,s);return n[0](a)}}(e,n,n[6],q);return{c(){s&&s.c()},m(n,e){s&&s.m(n,e),t=!0},p(n,[t]){s&&s.p&&67&t&&r(s,e,n,n[6],t,D,q)},i(n){t||(H(s,n),t=!0)},o(n){P(s,n),t=!1},d(n){s&&s.d(n)}}}let B;function U(n,t,e){let{$$slots:s={},$$scope:a}=t,{element:o=null}=t,{root:c=null}=t,{rootMargin:r="0px"}=t,{threshold:l=0}=t,{entry:p=null}=t;const i=y();let u=!1,d=null;var f;return f=async()=>{null!=p&&i("observe",p),await(I(),E),null!=o&&o!=d&&(B.observe(o),null!=d&&B.unobserve(d),d=o)},v().$$.after_update.push(f),function(n){v().$$.on_destroy.push(n)}((()=>{B.disconnect()})),n.$$set=n=>{"element"in n&&e(2,o=n.element),"root"in n&&e(3,c=n.root),"rootMargin"in n&&e(4,r=n.rootMargin),"threshold"in n&&e(5,l=n.threshold),"entry"in n&&e(0,p=n.entry),"$$scope"in n&&e(6,a=n.$$scope)},n.$$.update=()=>{56&n.$$.dirty&&(B=new IntersectionObserver((n=>{n.forEach((n=>{e(0,p=n),e(1,u=n.isIntersecting)}))}),{root:c,rootMargin:r,threshold:l}))},[p,u,o,c,r,l,a,s]}class Y extends V{constructor(n){super(),S(this,n,U,z,o,{element:2,root:3,rootMargin:4,threshold:5,entry:0})}}function G(n){let t;return{c(){t=d("Element is in view")},m(n,e){p(n,t,e)},d(n){n&&i(t)}}}function R(n){let t,e,s=n[2]&&G();return{c(){t=u("div"),s&&s.c(),e=f(),g(t,"class","element")},m(a,o){p(a,t,o),s&&s.m(t,null),n[3](t),p(a,e,o)},p(n,e){n[2]?s||(s=G(),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(a){a&&i(t),s&&s.d(),n[3](null),a&&i(e)}}}function W(n){let t,e,s,a,o,c,r,h,m,v,y,$,x,E,M,I,_,T,L,C,j,O,S,V,D,q,z,B,U,G,W,F,J,K,Q,X,Z,nn,tn,en,sn,an,on,cn,rn,ln,pn,un,dn=n[2]?"Yes":"No";function fn(t){n[4].call(null,t)}let gn={element:n[1],$$slots:{default:[R]},$$scope:{ctx:n}};return void 0!==n[0]&&(gn.entry=n[0]),U=new Y({props:gn}),b.push((()=>function(n,t,e){const s=n.$$.props[t];void 0!==s&&(n.$$.bound[s]=e,e(n.$$.ctx[s]))}(U,"entry",fn))),{c(){var l;t=u("main"),e=u("h1"),e.textContent="svelte-intersection-observer",s=f(),a=u("p"),a.innerHTML='<a href="https://npmjs.com/package/svelte-intersection-observer"><img src="https://img.shields.io/npm/v/svelte-intersection-observer.svg?color=%235832c9" alt="NPM"/></a> \n<a href="https://travis-ci.com/metonym/svelte-intersection-observer"><img src="https://travis-ci.com/metonym/svelte-intersection-observer.svg?branch=master" alt="Build"/></a>',o=f(),c=u("blockquote"),c.innerHTML='<p>Detect if an element is in the viewport using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry">Intersection Observer API</a>.</p>',r=f(),h=u("p"),h.innerHTML='This module ships with <a href="https://github.com/metonym/svelte-intersection-observer/tree/master/types">TypeScript definitions</a>.',m=f(),v=u("p"),v.innerHTML='Try it in the <a href="https://svelte.dev/repl/8cd2327a580c4f429c71f7df999bd51d?version=3.29.7">Svelte REPL</a>.',y=f(),$=u("h2"),$.innerHTML='<a href="https://metonym.github.io/svelte-intersection-observer/">Demo</a>',x=f(),E=u("h2"),E.textContent="Install",M=f(),I=u("pre"),_=f(),T=u("h2"),T.textContent="Usage",L=f(),C=u("div"),j=u("header"),O=u("strong"),O.textContent="Scroll down.",S=f(),V=u("div"),D=d("Element in view?\n    "),q=u("strong"),z=d(dn),B=f(),(l=U.$$.fragment)&&l.c(),W=u("pre"),F=f(),J=u("h2"),J.textContent="API",K=f(),Q=u("h3"),Q.textContent="Props",X=f(),Z=u("table"),Z.innerHTML='<thead><tr><th style="text-align:left">Property name</th> \n<th style="text-align:left">Description</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">element</td> \n<td style="text-align:left">Element observed for intersection</td> \n<td style="text-align:left"><code>HTMLElement</code></td></tr> \n<tr><td style="text-align:left">root</td> \n<td style="text-align:left">Containing element</td> \n<td style="text-align:left"><code>null</code> or <code>HTMLElement</code> (default: <code>null</code>)</td></tr> \n<tr><td style="text-align:left">rootMargin</td> \n<td style="text-align:left">Offset of the containing element</td> \n<td style="text-align:left"><code>string</code> (default: <code>&quot;0px&quot;</code>)</td></tr> \n<tr><td style="text-align:left">threshold</td> \n<td style="text-align:left">Percentage of element to trigger an event</td> \n<td style="text-align:left"><code>number</code> between 0 and 1 (default: <code>0</code>)</td></tr> \n<tr><td style="text-align:left">intersecting</td> \n<td style="text-align:left">If the element is intersecting</td> \n<td style="text-align:left"><code>boolean</code></td></tr> \n<tr><td style="text-align:left">entry</td> \n<td style="text-align:left">Observed element metadata</td> \n<td style="text-align:left"><a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry"><code>IntersectionObserverEntry</code></a></td></tr></tbody>',nn=f(),tn=u("h3"),tn.textContent="Dispatched Events",en=f(),sn=u("ul"),sn.innerHTML="<li><strong>on:observe</strong>: fired when an intersection change occurs (type <code>IntersectionObserverEntry</code>)</li>",an=f(),on=u("h2"),on.innerHTML='<a href="https://github.com/metonym/svelte-intersection-observer/tree/master/CHANGELOG.md">Changelog</a>',cn=f(),rn=u("h2"),rn.textContent="License",ln=f(),pn=u("p"),pn.innerHTML='<a href="https://github.com/metonym/svelte-intersection-observer/tree/master/LICENSE">MIT</a>',g(I,"class","language-bash"),g(q,"class","answer"),k(q,"inView",n[2]),g(C,"class","code-fence svelte-hvavi2"),g(W,"class","language-svelte"),g(W,"data-svelte",""),g(t,"class","markdown-body svelte-hvavi2")},m(n,i){p(n,t,i),l(t,e),l(t,s),l(t,a),l(t,o),l(t,c),l(t,r),l(t,h),l(t,m),l(t,v),l(t,y),l(t,$),l(t,x),l(t,E),l(t,M),l(t,I),I.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-intersection-observer\n<span class="token comment"># OR</span>\n<span class="token function">npm</span> i -D svelte-intersection-observer\n',l(t,_),l(t,T),l(t,L),l(t,C),l(C,j),l(j,O),l(j,S),l(j,V),l(V,D),l(V,q),l(q,z),l(C,B),A(U,C,null),l(t,W),W.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> IntersectionObserver <span class="token keyword">from</span> <span class="token string">"svelte-intersection-observer"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> entry <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> element<span class="token punctuation">;</span>\n\n  $<span class="token operator">:</span> inView <span class="token operator">=</span> entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>Scroll down.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    Element in view?\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>answer<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">class:</span>inView</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>inView <span class="token operator">?</span> <span class="token string">\'Yes\'</span> <span class="token operator">:</span> <span class="token string">\'No\'</span><span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IntersectionObserver</span> <span class="token language-javascript"><span class="token punctuation">{</span>element<span class="token punctuation">}</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>entry</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>element<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">{</span>element<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token language-javascript"><span class="token punctuation">{</span>#<span class="token keyword">if</span> inView<span class="token punctuation">}</span></span>Element is in view<span class="token language-javascript"><span class="token punctuation">{</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">}</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IntersectionObserver</span><span class="token punctuation">></span></span>\n',l(t,F),l(t,J),l(t,K),l(t,Q),l(t,X),l(t,Z),l(t,nn),l(t,tn),l(t,en),l(t,sn),l(t,an),l(t,on),l(t,cn),l(t,rn),l(t,ln),l(t,pn),un=!0},p(n,[t]){(!un||4&t)&&dn!==(dn=n[2]?"Yes":"No")&&function(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}(z,dn),4&t&&k(q,"inView",n[2]);const e={};var s;2&t&&(e.element=n[1]),38&t&&(e.$$scope={dirty:t,ctx:n}),!G&&1&t&&(G=!0,e.entry=n[0],s=()=>G=!1,w.push(s)),U.$set(e)},i(n){un||(H(U.$$.fragment,n),un=!0)},o(n){P(U.$$.fragment,n),un=!1},d(n){n&&i(t),N(U)}}}function F(n,t,e){let s,a,o={};return n.$$.update=()=>{1&n.$$.dirty&&e(2,a=o.isIntersecting)},[o,s,a,function(n){b[n?"unshift":"push"]((()=>{s=n,e(1,s)}))},function(n){o=n,e(0,o)}]}return new class extends V{constructor(n){var t;super(),document.getElementById("svelte-hvavi2-style")||((t=u("style")).id="svelte-hvavi2-style",t.textContent=".token.language-javascript{color:#24292e}.token.language-javascript .function{color:#005cc5}.token.language-javascript .string{color:#032f62}.token.language-javascript .number{color:#005cc5}.token.language-javascript .keyword{color:#d73a49}.token.each{color:#d73a49}.token.punctuation{color:#24292e }.token.tag{color:#22863a}.token.attr-name{color:#6f42c1}.token.operator{color:#d73a49}.token.comment{color:#6a737d}.language-css{color:#032f62}.language-css .selector{color:#22863a}.language-css .property{color:#005cc5}.code-fence.svelte-hvavi2{padding:45px 15px;border:1px solid #eaecef;border-bottom:0}main.svelte-hvavi2{box-sizing:border-box;max-width:980px;margin:0 auto;padding:45px}@media(max-width: 767px){main.svelte-hvavi2{padding:15px}}",l(document.head,t)),S(this,n,F,W,o,{})}}({target:document.body})}();
