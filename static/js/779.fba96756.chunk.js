"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(n,t,r){r.r(t),r.d(t,{default:function(){return y}});var e,a,u,c,s=r(433),i=r(861),o=r(439),p=r(757),f=r.n(p),v=r(689),h=r(791),d=r(635),l=r(168),m=r(444),x=m.ZP.ul(e||(e=(0,l.Z)(["\n  font-size: 20px;\n"]))),Z=m.ZP.li(a||(a=(0,l.Z)(["\n  margin-bottom: 16px;\n"]))),w=m.ZP.h5(u||(u=(0,l.Z)(["\n  margin-bottom: 16px;\n"]))),g=m.ZP.p(c||(c=(0,l.Z)(["\n  font-size: 14px;\n"]))),k=r(483),b=r(184);function y(){var n=(0,h.useState)([]),t=(0,o.Z)(n,2),r=t[0],e=t[1],a=(0,h.useState)(!1),u=(0,o.Z)(a,2),c=u[0],p=u[1],l=(0,v.UO)().movieId;return(0,h.useEffect)((function(){if(l){var n=function(){var n=(0,i.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.prev=1,n.next=4,(0,d.tx)(l);case 4:t=n.sent,e((0,s.Z)(t)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[l]),(0,b.jsxs)(b.Fragment,{children:[c&&(0,b.jsx)(k.a,{}),r.length>0?(0,b.jsx)(x,{children:r.map((function(n){var t=n.author,r=n.content,e=n.id;return(0,b.jsxs)(Z,{children:[(0,b.jsxs)(w,{children:["Author: ",t]}),(0,b.jsxs)(g,{children:['"',r,'"']})]},e)}))}):(0,b.jsx)("p",{children:"Sorry, there is no information"})]})}},635:function(n,t,r){r.d(t,{Df:function(){return s},M1:function(){return p},Pg:function(){return o},UN:function(){return i},tx:function(){return f}});var e=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"d491df0c44215a259069c1373aa9064e"};var s=function(){var n=(0,e.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day",{params:{page:1}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie",{params:{query:t,page:1}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.fba96756.chunk.js.map