"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[526],{69:function(n,t,e){e.d(t,{Hx:function(){return d},Mc:function(){return p},mv:function(){return f},uV:function(){return l},wr:function(){return s}});var r=e(861),a=e(757),c=e.n(a),u=e(44),i="https://api.themoviedb.org/3",o="177f1ce19eda5f5e066d2992170007b1",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},25:function(n,t,e){e.d(t,{O:function(){return v}});var r,a,c,u=e(739),i=e(168),o=e(731),s=e(444),f=(0,s.ZP)(o.OL)(r||(r=(0,i.Z)(["\n  color: rgb(24, 6, 82);\n  font-size: 1.2rem;\n  text-decoration: none;\n  &:hover {\n    color: orangered;\n  }\n"]))),p=s.ZP.li(a||(a=(0,i.Z)(["\n  list-style-position: inside;\n  list-style-type: square;\n\n  padding: 5px;\n  max-width: auto;\n"]))),l=s.ZP.ul(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  flex-grow: 1;\n"]))),d=e(184),v=function(n){var t=n.movies,e=(0,u.TH)();return(0,d.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.title;return(0,d.jsx)(p,{children:(0,d.jsx)(f,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},526:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r,a=e(885),c=e(791),u=e(69),i=e(168),o=e(444).ZP.h2(r||(r=(0,i.Z)(["\n  font-family: Helvetica, 'Trebuchet MS', Verdana, sans-serif;\n  font-size: 26px;\n  font-weight: 800;\n  margin: 0;\n"]))),s=e(25),f=e(184),p=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1];if((0,c.useEffect)((function(){u.wr().then((function(n){return r(n)})).catch("error")}),[]),e)return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{children:"Trending now"}),e&&(0,f.jsx)(s.O,{movies:e})]})}}}]);
//# sourceMappingURL=526.9ca8bf00.chunk.js.map