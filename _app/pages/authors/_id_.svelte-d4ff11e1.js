import{S as N,i as O,s as Q,e as m,t as I,k as P,c as g,a as E,g as V,d,n as w,b as q,f as F,H as o,h as M,I as G,J as R}from"../../chunks/vendor-f3548c02.js";function K(i,e,s){const a=i.slice();return a[2]=e[s],a}function L(i){let e,s,a=i[2].title+"",f,n,u,v=i[2].body+"",p,b;return{c(){e=m("div"),s=m("h4"),f=I(a),n=P(),u=m("p"),p=I(v),b=P(),this.h()},l(_){e=g(_,"DIV",{class:!0});var r=E(e);s=g(r,"H4",{class:!0});var y=E(s);f=V(y,a),y.forEach(d),n=w(r),u=g(r,"P",{});var j=E(u);p=V(j,v),j.forEach(d),b=w(r),r.forEach(d),this.h()},h(){q(s,"class","svelte-1gob78f"),q(e,"class","post svelte-1gob78f")},m(_,r){F(_,e,r),o(e,s),o(s,f),o(e,n),o(e,u),o(u,p),o(e,b)},p(_,r){r&2&&a!==(a=_[2].title+"")&&M(f,a),r&2&&v!==(v=_[2].body+"")&&M(p,v)},d(_){_&&d(e)}}}function T(i){let e,s,a=i[0].username+"",f,n,u,v,p=i[0].email+"",b,_,r,y,j=i[0].company.catchPhrase+"",S,B,k,D=i[1],c=[];for(let t=0;t<D.length;t+=1)c[t]=L(K(i,D,t));return{c(){e=m("div"),s=m("h2"),f=I(a),n=P(),u=m("h3"),v=m("em"),b=I(p),_=P(),r=m("p"),y=m("em"),S=I(j),B=P(),k=m("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){e=g(t,"DIV",{class:!0});var h=E(e);s=g(h,"H2",{});var l=E(s);f=V(l,a),l.forEach(d),n=w(h),u=g(h,"H3",{});var H=E(u);v=g(H,"EM",{});var J=E(v);b=V(J,p),J.forEach(d),H.forEach(d),_=w(h),r=g(h,"P",{});var U=E(r);y=g(U,"EM",{});var z=E(y);S=V(z,j),z.forEach(d),U.forEach(d),B=w(h),k=g(h,"DIV",{class:!0});var A=E(k);for(let C=0;C<c.length;C+=1)c[C].l(A);A.forEach(d),h.forEach(d),this.h()},h(){q(k,"class","posts svelte-1gob78f"),q(e,"class","author")},m(t,h){F(t,e,h),o(e,s),o(s,f),o(e,n),o(e,u),o(u,v),o(v,b),o(e,_),o(e,r),o(r,y),o(y,S),o(e,B),o(e,k);for(let l=0;l<c.length;l+=1)c[l].m(k,null)},p(t,[h]){if(h&1&&a!==(a=t[0].username+"")&&M(f,a),h&1&&p!==(p=t[0].email+"")&&M(b,p),h&1&&j!==(j=t[0].company.catchPhrase+"")&&M(S,j),h&2){D=t[1];let l;for(l=0;l<D.length;l+=1){const H=K(t,D,l);c[l]?c[l].p(H,h):(c[l]=L(H),c[l].c(),c[l].m(k,null))}for(;l<c.length;l+=1)c[l].d(1);c.length=D.length}},i:G,o:G,d(t){t&&d(e),R(c,t)}}}async function Y({page:i,fetch:e}){const s=i.params.id,a=await e(`https://jsonplaceholder.typicode.com/users/${s}`).then(n=>n.json()),f=await e(`https://jsonplaceholder.typicode.com/users/${s}/posts`).then(n=>n.json());return{props:{user:a,posts:f}}}function W(i,e,s){let{user:a}=e,{posts:f}=e;return i.$$set=n=>{"user"in n&&s(0,a=n.user),"posts"in n&&s(1,f=n.posts)},[a,f]}class Z extends N{constructor(e){super();O(this,e,W,T,Q,{user:0,posts:1})}}export{Z as default,Y as load};