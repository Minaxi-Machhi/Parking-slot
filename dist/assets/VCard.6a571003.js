import{l as y,af as U,ae as X,Q as Y,ah as Z,s as ee,m as n,p as ae,I as m,n as p,q as x,c as S,V as te,W as ne}from"./index.e3c41793.js";import{u as b,i as h,c as _,m as B,j as L,g as T,a as le,k as ie,b as se,o as de,q as ce,e as re,l as ue,f as ve,p as oe,r as me}from"./_plugin-vue_export-helper.4e3b539c.js";import{g as ge,h as D,i as z,j as fe,a as R,b as ke,k as j,V,R as ye,l as be,d as Ce,n as Ve,o as he,L as Ie}from"./VBtn.92ee1e38.js";function I(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return y()({name:a!=null?a:U(X(e.replace(/__/g,"-"))),props:{tag:{type:String,default:s}},setup(t,r){let{slots:d}=r;return()=>{var c;return Y(t.tag,{class:e},(c=d.default)==null?void 0:c.call(d))}}})}const Ae=Z({name:"VCardActions",setup(e,s){let{slots:a}=s;return ee({VBtn:{variant:"text"}}),b(()=>{var t;return n("div",{class:"v-card-actions"},[(t=a.default)==null?void 0:t.call(a)])}),{}}});const Se=ae({start:Boolean,end:Boolean,icon:m,image:String,...h(),..._(),...ge(),...B(),...p(),...D({variant:"flat"})},"v-avatar"),P=y()({name:"VAvatar",props:Se(),setup(e,s){let{slots:a}=s;const{themeClasses:t}=x(e),{colorClasses:r,colorStyles:d,variantClasses:c}=z(e),{densityClasses:u}=L(e),{roundedClasses:l}=T(e),{sizeClasses:i,sizeStyles:C}=fe(e);return b(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,r.value,u.value,l.value,i.value,c.value],style:[d.value,C.value]},{default:()=>{var g;return[e.image?n(R,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(ke,{key:"icon",icon:e.icon},null):(g=a.default)==null?void 0:g.call(a),j(!1,"v-avatar")]}})),{}}}),Pe=I("v-card-subtitle"),pe=I("v-card-title"),xe=y()({name:"VCardItem",props:{appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:String,title:String,...h()},setup(e,s){let{slots:a}=s;return b(()=>{var u;const t=!!(e.prependAvatar||e.prependIcon||a.prepend),r=!!(e.appendAvatar||e.appendIcon||a.append),d=!!(e.title||a.title),c=!!(e.subtitle||a.subtitle);return n("div",{class:"v-card-item"},[t&&n(V,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var l,i;return[n("div",{class:"v-card-item__prepend"},[(i=(l=a.prepend)==null?void 0:l.call(a))!=null?i:n(P,null,null)])]}}),n("div",{class:"v-card-item__content"},[d&&n(pe,{key:"title"},{default:()=>{var l,i;return[(i=(l=a.title)==null?void 0:l.call(a))!=null?i:e.title]}}),c&&n(Pe,{key:"subtitle"},{default:()=>{var l,i;return[(i=(l=a.subtitle)==null?void 0:l.call(a))!=null?i:e.subtitle]}}),(u=a.default)==null?void 0:u.call(a)]),r&&n(V,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var l,i;return[n("div",{class:"v-card-item__append"},[(i=(l=a.append)==null?void 0:l.call(a))!=null?i:n(P,null,null)])]}})])}),{}}}),_e=I("v-card-text"),De=y()({name:"VCard",directives:{Ripple:ye},props:{appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...p(),...le(),...h(),...ie(),...se(),...be(),...de(),...ce(),..._(),...Ce(),...B(),...D({variant:"elevated"})},setup(e,s){let{attrs:a,slots:t}=s;const{themeClasses:r}=x(e),{borderClasses:d}=re(e),{colorClasses:c,colorStyles:u,variantClasses:l}=z(e),{densityClasses:i}=L(e),{dimensionStyles:C}=ue(e),{elevationClasses:g}=ve(e),{loaderClasses:q}=Ve(e),{locationStyles:E}=oe(e),{positionClasses:F}=me(e),{roundedClasses:$}=T(e),f=he(e,a),w=S(()=>e.link!==!1&&f.isLink.value),k=S(()=>!e.disabled&&e.link!==!1&&(e.link||f.isClickable.value));return b(()=>{const H=w.value?"a":e.tag,N=!!(t.title||e.title),O=!!(t.subtitle||e.subtitle),Q=N||O,W=!!(t.append||e.appendAvatar||e.appendIcon),G=!!(t.prepend||e.prependAvatar||e.prependIcon),J=!!(t.image||e.image),K=Q||G||W,M=!!(t.text||e.text);return te(n(H,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},r.value,d.value,c.value,i.value,g.value,q.value,F.value,$.value,l.value],style:[u.value,C.value,E.value],href:f.href.value,onClick:k.value&&f.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var A;return[J&&n(V,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var v,o;return[n("div",{class:"v-card__image"},[(o=(v=t.image)==null?void 0:v.call(t))!=null?o:n(R,null,null)])]}}),n(Ie,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),K&&n(xe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),M&&n(_e,{key:"text"},{default:()=>{var v,o;return[(o=(v=t.text)==null?void 0:v.call(t))!=null?o:e.text]}}),(A=t.default)==null?void 0:A.call(t),t.actions&&n(Ae,null,{default:t.actions}),j(k.value,"v-card")]}}),[[ne("ripple"),k.value&&e.ripple]])}),{}}});export{De as V,_e as a,Ae as b,I as c,P as d,pe as e};
