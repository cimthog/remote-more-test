(this["webpackJsonptest-node"]=this["webpackJsonptest-node"]||[]).push([[0],{155:function(e,t,n){e.exports=n(239)},239:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(35),u=n.n(c),l=n(59),s=n(249),o=n(60),i=n.n(o),p=n(84),m=n(145),f=n(146),d=n(247),E=n(248),h=m.a.Search,v=function(){var e=Object(p.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t,"/repos"));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.setRepos,n=Object(r.useState)(!1),c=Object(l.a)(n,2),u=c[0],s=c[1],o=function(){var e=Object(p.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!0),v(n).then((function(e){return s(!1),e.message?f.b.error(e.message):0===e.length?f.b.error("User has no repositories"):t(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=a.a.createElement("h2",{style:{textAlign:"center"}},"Gitub Repo Finder");return a.a.createElement(d.a,{title:m,bordered:!1},a.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"40vh"}},a.a.createElement(E.a.Item,{required:!0,rules:[{required:!0,message:"Please enter a username"}]},a.a.createElement(h,{placeholder:"Enter Github username",onSearch:o,enterButton:!0,required:!0,loading:u,width:"30%",size:"large"}))))},g=n(51),y=n(251),x=n(245),j=function(e){var t=e.currentRepo,n=e.goBack,c=Object(r.useState)(null),u=Object(l.a)(c,2),s=u[0],o=u[1],m=Object(r.useState)(!1),f=Object(l.a)(m,2),E=f[0],h=f[1],v=t.contents_url;Object(r.useEffect)((function(){(function(){var e=Object(p.a)(i.a.mark((function e(){var t,n,r,a,c,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,fetch("".concat(v.slice(0,v.length-7)));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,r=n.find((function(e){return"readme"===e.name.split(".")[0].toLowerCase()})),a=r.download_url.replace("github.com","raw.githubusercontent.com"),e.next=11,fetch(a);case 11:return c=e.sent,e.next=14,c.text();case 14:u=e.sent,o(u),h(!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v]);var b=a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"50%"}},a.a.createElement(g.a,{onClick:n,icon:a.a.createElement(y.a,null)},"Back"),a.a.createElement("h3",null,a.a.createElement("strong",null,"Read Me")));return a.a.createElement(d.a,{title:a.a.createElement("strong",null,t.name)},a.a.createElement(d.a,{loading:E,title:b},s&&a.a.createElement(x.a,null,s)))},w=n(250),k=n(246),O=function(e){var t=e.repos,n=e.setCurrentRepo,r=e.goBack,c=[{title:"Name",dataIndex:"name",key:"name"},{title:"Date Created",dataIndex:"pushed_at",key:"pushed_at",render:function(e){return new Date(e).toLocaleString()}},{title:"Description",dataIndex:"description",key:"description",ellipsis:!0,render:function(e){return e||"None"}},{title:"Privacy",dataIndex:"privacy",key:"privacy",render:function(e){return e?"Private":"Public"}}],u=a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"50%"}},a.a.createElement(g.a,{onClick:r,icon:a.a.createElement(y.a,null)},"Back"),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",null,a.a.createElement(w.a,{src:t[0].owner.avatar_url,alt:"user avatar"})),a.a.createElement("div",{style:{marginLeft:"20px"}},a.a.createElement("h3",null,a.a.createElement("strong",null,t[0].owner.login))))),l=a.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.a.createElement("strong",null,"User Repositories"));return a.a.createElement(d.a,{title:u},a.a.createElement(k.a,{title:function(){return l},dataSource:t,columns:c,onRow:function(e){return{onClick:function(){return n(e)}}}}))},S=(n(137),function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)(null),o=Object(l.a)(u,2),i=o[0],p=o[1],m=Object(r.useRef)();Object(r.useEffect)((function(){var e=localStorage.getItem("user-repos");e&&(c(JSON.parse(e)),m.current.next())}),[]);var f=function(){return m.current.prev()};return a.a.createElement(s.a,{ref:m},a.a.createElement(b,{setRepos:function(e){c(e),localStorage.setItem("user-repos",JSON.stringify(e)),m.current.next()}}),n&&a.a.createElement(O,{repos:n,setCurrentRepo:function(e){p(e),m.current.next()},goBack:function(){p(null),localStorage.removeItem("user-repos"),f()}}),i&&a.a.createElement(j,{currentRepo:i,goBack:f}))}),C=function(){return a.a.createElement(S,null)};u.a.render(a.a.createElement(C,null),document.querySelector("#app"))}},[[155,1,2]]]);
//# sourceMappingURL=main.cbfab56d.chunk.js.map