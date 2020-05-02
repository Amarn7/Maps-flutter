(this.webpackJsonpcorona_app=this.webpackJsonpcorona_app||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__1Ws82",card:"Cards_card__10lrO",infected:"Cards_infected__3pODH",recovered:"Cards_recovered__1BNRz",deaths:"Cards_deaths__3xfGn"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(6),s=a.n(u),l=a(9),i=a(73),d=a(74),m=a(83),p=a(84),f=a(31),h=a(45),v=a(32),b=a.n(v),E="https://covid19.mathdro.id/api",g=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E,t&&(a="".concat(E,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=a(76),x=a.n(C),w=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(n.useState)({}),d=Object(f.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=a?r.a.createElement(h.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,b=m[0]?r.a.createElement(h.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:x.a.container},u?v:b)},O=a(228),j=a(227),k=a(77),D=a.n(k),I=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(f.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,_();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(O.a,{className:D.a.formControl},r.a.createElement(j.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},N=a(224),B=a(229),S=a(225),A=a(226),V=a(33),R=a.n(V),U=a(34),G=a.n(U),J=a(13),L=a.n(J),T=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:L.a.container},r.a.createElement(N.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(N.a,{item:!0,xs:12,md:3,component:B.a,className:G()(L.a.card,L.a.infected)},r.a.createElement(S.a,null,r.a.createElement(A.a,{variant:"h6",color:"secondary",gutterBottom:!0},"Infected"),r.a.createElement(A.a,{variant:"h5",component:"h2"},r.a.createElement(R.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(A.a,{color:"primary"},new Date(o).toDateString()),r.a.createElement(A.a,{variant:"body2",component:"p"},"Total Count of Infected cases of COVID-19."))),r.a.createElement(N.a,{item:!0,xs:12,md:3,component:B.a,className:G()(L.a.card,L.a.recovered)},r.a.createElement(S.a,null,r.a.createElement(A.a,{variant:"h6",color:"secondary",gutterBottom:!0},"Recovered"),r.a.createElement(A.a,{variant:"h5",component:"h2"},r.a.createElement(R.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(A.a,{color:"primary"},new Date(o).toDateString()),r.a.createElement(A.a,{variant:"body2",component:"p"},"Total Count of Recoveries from COVID-19."))),r.a.createElement(N.a,{item:!0,xs:12,md:3,component:B.a,className:G()(L.a.card,L.a.deaths)},r.a.createElement(S.a,null,r.a.createElement(A.a,{variant:"h6",color:"secondary",gutterBottom:!0},"Deaths"),r.a.createElement(A.a,{variant:"h5",component:"h2"},r.a.createElement(R.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(A.a,{color:"primary"},new Date(o).toDateString()),r.a.createElement(A.a,{variant:"body2",component:"p"},"Total count of Deaths caused by COVID-19."))))):"Loading..."},P=a(35),z=a.n(P),F=a(82),H=a.n(F),K=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:z.a.container},r.a.createElement("h1",{className:z.a.amar},"By Amar Nagargoje "),r.a.createElement("h2",null," Follow:",r.a.createElement("a",null," "),r.a.createElement("a",{href:"https://github.com/Amarn7",target:"_blank"},"Github"),r.a.createElement("a",null," | "),r.a.createElement("a",{href:"https://www.linkedin.com/in/amar-nagargoje-9485b116a/",target:"_blank"},"LinkedIn ")),r.a.createElement("h2",null,r.a.createElement("img",{className:z.a.image,src:H.a,alt:"COVID-19"})),r.a.createElement(T,{data:t}),r.a.createElement(I,{handleCountryChange:this.handleCountryChange}),r.a.createElement(w,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(K,null),document.getElementById("root"))},35:function(e,t,a){e.exports={amar:"App_amar__JiZiD",container:"App_container__1QOIy",image:"App_image__2mf0K"}},76:function(e,t,a){e.exports={container:"Chart_container__1g0Uw"}},77:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3mLBx"}},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.48648b3a.chunk.js.map