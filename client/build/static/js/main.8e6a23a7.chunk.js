(this.webpackJsonphimss=this.webpackJsonphimss||[]).push([[0],{23:function(t,e,n){},25:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),r=n(17),s=n.n(r),i=(n(23),n(3)),o=n.n(i),u=n(6),l=n(18),p=(n(25),n(7)),d=n.n(p),h=n(0);var f=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1];function r(){return(r=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.post("".concat("http://localhost:5000","/spam"),e);case 3:200===t.sent.status&&a(n.map((function(t){return t===e?(t.state="BLOCKED",t):t}))),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),new Error("Unable to Block Ticket");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function s(){return(s=Object(u.a)(o.a.mark((function t(e,c){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.put("".concat("http://localhost:5000","/reports/").concat(c));case 3:200===t.sent.status&&a(n.filter((function(t){return t!==e}))),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),new Error("Unable to Resolve Ticket");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function i(){return(i=Object(u.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("".concat("http://localhost:5000","/spam"));case 3:e=t.sent,n=Object.keys(e.data).map((function(t){return e.data[t]})).filter((function(t){return void 0!==t.id})),a(n),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Unable to get tickets");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"mainbody",children:[Object(h.jsx)("h1",{children:"Reports"}),Object(h.jsx)("div",{className:"tickets-maincontainer",children:n.filter((function(t){return"RESOLVED"!==t.state})).map((function(t,e){return Object(h.jsxs)("div",{className:"ticket-container ".concat("BLOCKED"===t.state?"blocked":null),children:[Object(h.jsxs)("div",{className:"idstate-container",children:[Object(h.jsxs)("div",{className:"infodiv",children:["Id: ",t.id]}),Object(h.jsxs)("div",{className:"infodiv",children:["State: ",t.state]})]}),Object(h.jsxs)("div",{className:"typemsg-container",children:[Object(h.jsxs)("div",{className:"infodiv",children:["Type: ",t.payload.reportType]}),Object(h.jsxs)("div",{className:"infodiv",children:["Message: ",t.payload.message]})]}),Object(h.jsxs)("div",{className:"button-container",children:["BLOCKED"!==t.state?Object(h.jsx)("button",{onClick:function(){return function(t){return r.apply(this,arguments)}(t)},children:"Block"}):null,Object(h.jsx)("button",{onClick:function(){return function(t,e){return s.apply(this,arguments)}(t,t.id)},children:"Resolve"})]})]},e)}))})]})})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),j()}},[[45,1,2]]]);
//# sourceMappingURL=main.8e6a23a7.chunk.js.map