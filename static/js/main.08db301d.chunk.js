(this.webpackJsonpinterview_creation_portal=this.webpackJsonpinterview_creation_portal||[]).push([[0],{47:function(e,t,n){},58:function(e,t,n){},65:function(e,t,n){},73:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c,a,r,i,s,o,l,d,j,u,b,h,O,m,x=n(0),p=n.n(x),f=n(18),v=n.n(f),g=(n(47),n(6)),w=n(7),S=(n(58),n(1)),y=w.a.a(c||(c=Object(g.a)(["\nfont-size: 1.2rem;\nfont-weight: 500;\n&:hover{\n  color: #f1356d;\n}\n"]))),N=w.a.div(a||(a=Object(g.a)(["\nborder-bottom: 2px solid #212529;\n"]))),k=function(){return Object(S.jsxs)(N,{className:"navbar",children:[Object(S.jsx)("h1",{children:"Interview Scheduler"}),Object(S.jsxs)("div",{className:"links",children:[Object(S.jsx)(y,{href:"/",children:"Home"}),Object(S.jsx)(y,{href:"/schedule",children:"New Interview"}),Object(S.jsx)(y,{href:"/add",children:"Add Participant"})]})]})},T=n(22),D=n.n(T),E=n(20),C="http://localhost:".concat(5e3),Y=(n(65),w.a.div(r||(r=Object(g.a)(["\ndisplay: flex;\nflex-direction: column;\n// border: 1px solid black;\nborder-radius: 10px;\npadding: 6px;\n"])))),I=w.a.span(i||(i=Object(g.a)(["\nbackground-color: black !important;\n"]))),M=w.a.p(s||(s=Object(g.a)(["\nbackground-color: black !important;\npadding: 2px;\n"]))),P=w.a.h2(o||(o=Object(g.a)(["\nbackground-color: black !important;\n"]))),A=w.a.div(l||(l=Object(g.a)(["\ndisplay: flex;\nflex-direction: row;\nmargin-top: 5px;\nbackground-color: black !important;\n\n"]))),J=w.a.div(d||(d=Object(g.a)(["\npadding: 10px 16px;\nmargin: 20px 0;\nborder: 1px solid black;\nborder-radius: 10px;\nbackground-color: black !important;\nheight: 8rem;\n"]))),q=function(e){var t=e.interviews,n=e.title;return Object(S.jsxs)(Y,{children:[Object(S.jsx)("h1",{children:n}),t.map((function(e,t){return Object(S.jsxs)(J,{children:[Object(S.jsx)(E.b,{to:{pathname:"/interview/".concat(e.uuid)},className:"black-bg",style:{textDecoration:"none",backgroundColor:"black"},children:Object(S.jsxs)("div",{className:"black-bg",children:[Object(S.jsxs)(P,{className:"black-bg",children:["Interview ",t+1]}),Object(S.jsxs)(M,{children:["Date: ",Object(S.jsx)(D.a,{format:"DD-MM-YYYY",children:Object(S.jsx)(I,{children:e.endTime})})]}),Object(S.jsxs)(M,{children:["StartTime:"," ",Object(S.jsx)(D.a,{format:"hh:mm A",children:Object(S.jsx)(I,{children:e.startTime})})]}),Object(S.jsxs)(M,{children:["EndTime: ",Object(S.jsx)(D.a,{format:"hh:mm A",children:Object(S.jsx)(I,{children:e.endTime})})]})]})}),Object(S.jsxs)(A,{children:[Object(S.jsx)(E.b,{to:{pathname:"/reschedule/".concat(e.uuid)},children:Object(S.jsx)("button",{className:"green-btn",children:"Reschedule or Edit"})}),Object(S.jsx)("button",{className:"red-btn",style:{marginLeft:"10px"},onClick:function(){var t;t=e.uuid,fetch("".concat(C,"/v1/interviews/").concat(t),{method:"DELETE"}).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).then((function(e){console.log(e),console.log("Successfully deleted interview"),alert("Successfully deleted Interview"),window.location.reload()})).catch((function(e){var t=JSON.parse(e.message);alert(t.message),console.log(e)}))},children:"Delete"})]})]},e.uuid)}))]})},H=n(9),L=function(e){var t=Object(x.useState)(null),n=Object(H.a)(t,2),c=n[0],a=n[1],r=Object(x.useState)(!0),i=Object(H.a)(r,2),s=i[0],o=i[1],l=Object(x.useState)(null),d=Object(H.a)(l,2),j=d[0],u=d[1];return Object(x.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw new Error("Unable to fetch data. Status Code: ".concat(e.status));return e.json()})).then((function(e){a(e.data),o(!1),u(null)})).catch((function(e){"AbortFetch"===e.name?console.log("fetch aborted!"):(u(e.message),o(!1))})),function(){return t.abort()}}),[e]),{data:c,error:j,isPending:s}},U=function(){var e=L("".concat(C,"/v1/interviews/upcoming")),t=e.data,n=e.isPending,c=e.error;return Object(S.jsxs)("div",{className:"home",children:[c&&Object(S.jsx)("div",{children:"Unable to fetch interviews"}),n&&Object(S.jsx)("div",{children:"Loading..."}),t&&t.length>0&&null==c&&Object(S.jsx)(q,{interviews:t,title:"Upcoming Interviews"}),t&&t.length<=0&&null==c&&Object(S.jsx)("div",{children:"No Upcoming interviews."})]})},B=n(5),_=n(26),R=n(35),z=n.n(R),F=n(32),G=n(37),K=(n(73),w.a.button(j||(j=Object(g.a)(["\nbackground-color: #18a558 !important;\n"])))),Q=w.a.button(u||(u=Object(g.a)(["\nbackground-color: #f1456d !important;\n"]))),V=function(){var e=L("".concat(C,"/v1/participants/candidates")),t=e.data,n=e.isPending,c=e.error,a=L("".concat(C,"/v1/participants/interviewers")),r=a.data,i=a.isPending,s=a.error,o=Object(G.a)(),l=Object(x.useState)(new Date),d=Object(H.a)(l,2),j=d[0],u=d[1],b=Object(x.useState)(new Date),h=Object(H.a)(b,2),O=h[0],m=h[1],p=Object(x.useState)(new Date),f=Object(H.a)(p,2),v=f[0],g=f[1],w=Object(x.useState)([]),y=Object(H.a)(w,2),N=y[0],k=y[1],T=Object(x.useState)([]),D=Object(H.a)(T,2),E=D[0],Y=D[1],I=Object(x.useState)(!1),M=Object(H.a)(I,2),P=M[0],A=M[1],J=Object(B.f)(),q=function(e){console.log(e);var t,n=[],c=Object(_.a)(e);try{for(c.s();!(t=c.n()).done;){var a=t.value;n.push({label:a.email,value:a.email})}}catch(r){c.e(r)}finally{c.f()}return n};return Object(S.jsxs)("div",{className:"create",children:[Object(S.jsx)("h1",{children:"Schedule a new interview"}),Object(S.jsx)("br",{}),(c||s)&&Object(S.jsx)("div",{children:"Unable to fetch participants information"}),(n||i)&&Object(S.jsx)("div",{children:"Loading..."}),t&&r&&Object(S.jsxs)("form",{onSubmit:function(e){A(!0),e.preventDefault();var t,n=[],c=Object(_.a)(E);try{for(c.s();!(t=c.n()).done;){var a=t.value;n.push(a.value)}}catch(l){c.e(l)}finally{c.f()}var r,i=Object(_.a)(N);try{for(i.s();!(r=i.n()).done;){var s=r.value;n.push(s.value)}}catch(l){i.e(l)}finally{i.f()}var o={startTime:z()("".concat(j," ").concat(O),"YYYY-MM-DD HH:mm:ss").format(),endTime:z()("".concat(j," ").concat(v),"YYYY-MM-DD HH:mm:ss").format(),participants:n};console.log(o),fetch("".concat(C,"/v1/interviews"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).then((function(e){console.log(e),A(!1),console.log("Successfully added interview"),alert("Successfully scheduled interview! and email notification is sent."),J.push("/")})).catch((function(e){var t=JSON.parse(e.message);alert(t.message),A(!1),console.log(e)}))},children:[Object(S.jsx)("label",{children:"Choose Date : "}),Object(S.jsx)("input",{type:"date",required:!0,value:j,onChange:function(e){return u(e.target.value)}}),Object(S.jsx)("label",{children:"Start Time : "}),Object(S.jsx)("input",{type:"time",value:O,required:!0,onChange:function(e){return m(e.target.value)}}),Object(S.jsx)("label",{children:"End Time : "}),Object(S.jsx)("input",{type:"time",value:v,required:!0,onChange:function(e){return g(e.target.value)}}),Object(S.jsx)("label",{children:"Select Candidates : "}),Object(S.jsx)(F.a,{isMulti:!0,closeMenuOnSelect:!1,components:o,name:"candidates",options:q(t),className:"basic-multi-select",classNamePrefix:"select",onChange:function(e){k(e),console.log("candidates selected",e)}}),Object(S.jsx)("label",{children:"Select Interviewers : "}),Object(S.jsx)(F.a,{isMulti:!0,closeMenuOnSelect:!1,components:o,name:"interviewers",options:q(r),className:"basic-multi-select",classNamePrefix:"select",onChange:function(e){Y(e),console.log("interviewers selected",e)}}),!P&&Object(S.jsx)(K,{children:"Schedule Interview"}),P&&Object(S.jsx)(Q,{disabled:!0,children:"Adding Interview..."})]})]})},W=(n(83),function(){var e=Object(B.g)().uuid,t=L("".concat(C,"/v1/interviews/").concat(e)),n=t.data,c=t.isPending,a=t.error;return Object(S.jsxs)("div",{className:"interview-details",children:[a&&Object(S.jsx)("div",{children:a}),c&&Object(S.jsx)("div",{children:"Loading..."}),n&&Object(S.jsxs)("div",{className:"details",children:[Object(S.jsx)("h1",{children:"Interview Details"}),Object(S.jsxs)("h2",{children:["id: ",e]}),Object(S.jsx)("br",{}),Object(S.jsxs)("h4",{children:["Date: ",Object(S.jsx)(D.a,{format:"DD-MM-YYYY",children:n.startTime})]}),Object(S.jsxs)("h4",{children:["Timings: ",Object(S.jsx)(D.a,{format:"hh:mm A",children:n.startTime})," -"," ",Object(S.jsx)(D.a,{format:"hh:mm A",children:n.endTime})]}),Object(S.jsx)("br",{}),Object(S.jsx)("h4",{children:"Participants"}),Object(S.jsx)("ul",{children:n.participants.map((function(e,t){return Object(S.jsx)("li",{children:e.email})}))})]})]})}),X=n(45),Z=n.n(X),$=n(53),ee=(n(85),w.a.button(b||(b=Object(g.a)(["\nbackground-color: #18a558 !important;\n"])))),te=w.a.button(h||(h=Object(g.a)(["\nbackground-color: #f1456d !important;\n"]))),ne=w.a.div(O||(O=Object(g.a)(["\ndisplay: flex;\nflex-direction: column;\nmargin-top: 20px;\n"]))),ce=w.a.div(m||(m=Object(g.a)(["\nmargin-top: 10px;\n"]))),ae=function(){var e=Object(x.useState)(""),t=Object(H.a)(e,2),n=t[0],c=t[1],a=Object(x.useState)(""),r=Object(H.a)(a,2),i=r[0],s=r[1],o=Object(x.useState)("Enter Role"),l=Object(H.a)(o,2),d=l[0],j=l[1],u=Object(G.a)(),b=Object(x.useState)(!1),h=Object(H.a)(b,2),O=h[0],m=h[1],p=Object(B.f)(),f=function(){var e=Object($.a)(Z.a.mark((function e(t){var c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(!0),t.preventDefault(),console.log("name is ".concat(n,", email is ").concat(i,", role is ").concat(d.value)),console.log(d.value),c={name:n,email:i,role:d.value},"Interviewer"===d.value?fetch("".concat(C,"/v1/participants/interviewer"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).then((function(e){console.log(e),m(!1),console.log("Successfully added participant"),alert("Successfully Added ".concat(d.value,".")),p.push("/")})).catch((function(e){var t=JSON.parse(e.message);alert(t.message),m(!1),console.log(e)})):fetch("".concat(C,"/v1/participants/candidate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).then((function(e){console.log(e),m(!1),console.log("Successfully added participant"),alert("Successfully Added ".concat(d.value,".")),p.push("/")})).catch((function(e){var t=JSON.parse(e.message);alert(t.message),m(!1),console.log(e)})),m(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)(ne,{children:Object(S.jsxs)("form",{onSubmit:f,children:[Object(S.jsxs)(ne,{children:[Object(S.jsx)("label",{style:{marginBottom:"10px"},children:"Enter Name : "}),Object(S.jsx)("input",{className:"inputT",placeholder:"Enter Name",type:"text",required:!0,value:n,onChange:function(e){return c(e.target.value)}})]}),Object(S.jsxs)(ne,{children:[Object(S.jsx)("label",{style:{marginBottom:"10px"},children:"Set Email : "}),Object(S.jsx)("input",{className:"inputT",placeholder:"Enter Email",type:"email",value:i,required:!0,onChange:function(e){return s(e.target.value)}})]}),Object(S.jsxs)(ne,{children:[Object(S.jsx)("label",{style:{marginBottom:"10px"},children:"Select Role : "}),Object(S.jsx)(F.a,{closeMenuOnSelect:!0,components:u,name:"roles",options:function(e){console.log(e);var t,n=[],c=Object(_.a)(e);try{for(c.s();!(t=c.n()).done;){var a=t.value;n.push({label:a,value:a})}}catch(r){c.e(r)}finally{c.f()}return n}(["Interviewer","Candidate"]),className:"basic-multi-select",classNamePrefix:"select",onChange:function(e){j(e),console.log("candidates selected",e)}})]}),Object(S.jsxs)(ce,{children:[!O&&Object(S.jsx)(ee,{children:"Schedule Interview"}),O&&Object(S.jsx)(te,{disabled:!0,children:"Adding Interview..."})]})]})})};var re=function(){return Object(S.jsx)(E.a,{children:Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(k,{}),Object(S.jsx)("div",{className:"content",children:Object(S.jsxs)(B.c,{children:[Object(S.jsx)(B.a,{exact:!0,path:"/",children:Object(S.jsx)(U,{})}),Object(S.jsx)(B.a,{exact:!0,path:"/schedule",children:Object(S.jsx)(V,{})}),Object(S.jsx)(B.a,{exact:!0,path:"/add",children:Object(S.jsx)(ae,{})}),Object(S.jsx)(B.a,{path:"/schedule",children:Object(S.jsx)(V,{})}),Object(S.jsx)(B.a,{path:"/interview/:uuid",children:Object(S.jsx)(W,{})}),Object(S.jsx)(B.a,{path:"/reschedule/:uuid",children:Object(S.jsx)(V,{})})]})})]})})};v.a.render(Object(S.jsx)(p.a.StrictMode,{children:Object(S.jsx)(re,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.08db301d.chunk.js.map