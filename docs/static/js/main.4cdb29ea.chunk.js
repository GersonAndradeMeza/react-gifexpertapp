(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(7),r=n.n(a),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){o(t.target.value)}})})})},j=n(10),d=n(6),l=n.n(d),b=n(8),p=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,c,a,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=3&api_key=Yl8EZv24RWHmIh6cjBcs3HuBsG2QiQ3m"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"animate__animated animate__bounce",children:[Object(u.jsx)("p",{children:e}),Object(u.jsx)("img",{src:n,alt:e})]})},m=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){r({data:t,loading:!1})}))}),[t]),a}(e),a=n.data;n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{className:"animate__animated animate__bounce",children:[" ",e," "]}),Object(u.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(u.jsx)(f,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(c.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(m,{category:t},t)}))})]})};n(17);r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4cdb29ea.chunk.js.map