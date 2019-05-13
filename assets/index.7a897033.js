(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{253:function(e,t,a){e.exports=a(411)},411:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(54),i=a(20),o=a(174),l=a(22),p=a(23),s=a(166),h=a.n(s);var m=p.createGlobalStyle`
  ${h.a}

  html,
  body {
    font-family: ${({theme:e})=>e.typography.fontFamily};
  }

  html {
    box-sizing: border-box;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${({theme:e})=>e.palette.primary.main};
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    max-width: 100%;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clears the 'X' from Internet Explorer */
  input[type='search']::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  input[type='search']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  /* clears the 'X' from Chrome */
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  /* Add @font-face here */
  
 `,u=a(65),y=a.n(u),b=a(28),g=a(87),d=a(86),f=a.n(d),E=a(53),O=a.n(E),j=a(63),v=a.n(j),x=a(64),R=a.n(x),T=a(81),w=a.n(T),k=a(80),C=a.n(k),S=a(78),_=a.n(S),W=a(79),$=a.n(W),I=a(49),M=a(170),z=a.n(M),A=a(172),H=a(52),G=a(414),U=a(416),L=a(412),P=a(417),N=a(418),F=a(173),Q=a(55),V=a(415),X=a(171),B=a(122),D=a.n(B);const J=()=>D.a.CancelToken.source();var K=D.a.create({baseURL:"https://swapi.co/api/",responseType:"json"});var q=e=>[`${e}_REQUEST`,`${e}_SUCCESS`,`${e}_ERROR`,`${e}_CANCEL`];const[Y,Z,ee,te]=q("API_GET_CHARACTERS"),ae=e=>({type:Y,characterIds:e}),re=e=>({type:Z,data:e}),ne=()=>({type:te}),ce=Object(I.a)(e=>e.characters,e=>z()(t=>e?Object.values(e).filter(e=>t.indexOf(e.character_id)>-1).sort((e,t)=>e.name<t.name?-1:e.name>t.name?1:0):[]));const ie=Object(p.default)(_.a)`
  && {
    background-color: ${({theme:e})=>`${e.palette.primary.main}`};
  }
`,oe=({metrics:e})=>{return Object.keys(e).filter(t=>!e[t].includes("unknown")).map((t,a,r)=>n.a.createElement("span",{key:a},t,": ",n.a.createElement("i",null,e[t]),((e,t)=>e<t.length-1&&t.length>1&&", ")(a,r)))},le=({characters:e})=>n.a.createElement(v.a,{subheader:e.length?n.a.createElement($.a,{component:"div"},"Characters"):null},e.map(({character_id:e,name:t,height:a,mass:r})=>n.a.createElement(R.a,{key:e,alignItems:"flex-start"},n.a.createElement(C.a,null,n.a.createElement(ie,null,t.substring(0,2).toUpperCase())),n.a.createElement(w.a,{primary:t,secondary:n.a.createElement(oe,{metrics:{height:`${a}cm`,mass:`${r}kg`}})}))));le.defaultProps={characterIds:[],characters:[]};var pe=Object(g.a)(Object(c.b)((e,t)=>({characters:ce(e)(t.characterIds)}),null),n.a.memo)(le),se=a(85),he=a.n(se),me=a(67),ue=a.n(me),ye=a(84),be=a.n(ye),ge=a(83),de=a.n(ge),fe=a(82),Ee=a.n(fe);const Oe=({onChange:e,list:t,label:a,labelWidth:r,value:c})=>n.a.createElement(Ee.a,{fullWidth:!0,variant:"outlined"},n.a.createElement(de.a,{htmlFor:"outlined-age-simple"},a),n.a.createElement(be.a,{value:c,onChange:e,input:n.a.createElement(he.a,{labelWidth:r,name:"age",id:"outlined-age-simple"})},n.a.createElement(ue.a,{value:""},n.a.createElement("em",null,"None")),t&&t.map(e=>n.a.createElement(ue.a,{key:e.value,value:e.value},e.name))));Oe.defaultProps={onChange:()=>{},list:[],label:"",value:"",labelWidth:48};var je=Oe,ve=a(42),xe=a.n(ve);const[Re,Te,we,ke]=q("API_GET_MOVIES"),Ce=()=>({type:Re});const Se=Object(I.a)([(e,t)=>xe()(e,e=>e.progress[`${t}`])],e=>e||!1),_e=p.default.div`
  text-align: center;
  flex-grow: 1;
`,We=p.default.div`
  display: flex;
  justify-content: center;
`,$e=Object(p.default)(y.a)`
  && {
    margin-bottom: ${({theme:e})=>`${e.spacing.lg}px`};
  }
`,Ie=Object(p.default)(f.a)`
  && {
    margin-left: ${({theme:e})=>`${e.spacing.sm}px`};
  }
`;var Me=Object(g.a)(Object(c.b)(e=>({movies:e.movies||{},isLoadingMovies:Se(e,"API_GET_MOVIES"),isLoadingCharacters:Se(e,"API_GET_CHARACTERS")}),e=>{const t={apiGetCharacters:ae,apiGetMovies:Ce,apiCancelGetCharacters:ne};return{actions:Object(b.b)(t,e)}}),n.a.memo)(({actions:e,movies:t,isLoadingMovies:a,isLoadingCharacters:c})=>{const{apiGetMovies:i,apiGetCharacters:o,apiCancelGetCharacters:l}=e,[p,s]=Object(r.useState)("");Object(r.useEffect)(()=>{(async()=>{await i()})()},[i]),Object(r.useEffect)(()=>{(async()=>{t[p]&&(c&&l(),o(t[p].characters))})()},[t,p]);const h=Object(r.useCallback)(e=>{s(e.target.value)},[]),m=Object(r.useMemo)(()=>Object.keys(t).length?Object.values(t).map(({episode_id:e,title:t})=>({value:e,name:t})):[],[t]),u=Object(r.useMemo)(()=>t[p]&&t[p].characters||[],[t,p]);return n.a.createElement(_e,null,n.a.createElement($e,{variant:"h1",align:"center"},"Hyper React"),n.a.createElement(O.a,{container:!0,wrap:"nowrap",spacing:0},n.a.createElement(O.a,{item:!0,xs:12},n.a.createElement(je,{onChange:h,value:p,list:m,label:"Starwars Movie",labelWidth:114})),n.a.createElement(O.a,{item:!0},(a||c)&&n.a.createElement(Ie,{color:"secondary"}))),n.a.createElement(We,null,n.a.createElement(pe,{characterIds:u})))});const ze=p.default.div`
  min-height: 100vh;
  width: 100%;
  padding: ${({theme:e})=>`${e.spacing.md}px`};
`;var Ae=()=>n.a.createElement(ze,null,n.a.createElement(Me,null)),He=a(68);const Ge={unit:8,xxl:80,xl:48,lg:32,md:16,sm:8,xs:4},Ue={primary:He.blue,secondary:He.pink},Le=Object(l.createMuiTheme)({palette:Ue,spacing:Ge,typography:{useNextVariants:!0},weights:{fontWeightBold:700,fontWeightMedium:500,fontWeightRegular:400},status:{danger:"orange"},props:{MuiWithWidth:{initialWidth:"xs"}},transition:"250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"});Le.typography={...Le.typography,fontFamily:"'Karla', sans-serif",fontFamilySecondary:"'Karla', sans-serif",h1:{...Le.typography.h1,fontWeight:500,fontSize:Le.typography.pxToRem(40),lineHeight:Le.typography.pxToRem(54)},h2:{...Le.typography.h2,fontWeight:400,fontSize:Le.typography.pxToRem(32),lineHeight:Le.typography.pxToRem(43)},h3:{...Le.typography.h3,fontWeight:500,fontSize:Le.typography.pxToRem(24),lineHeight:Le.typography.pxToRem(32)},h4:{...Le.typography.h4,fontWeight:400,fontSize:Le.typography.pxToRem(18),lineHeight:Le.typography.pxToRem(24)},h5:{...Le.typography.h5,fontWeight:500,fontSize:Le.typography.pxToRem(14),lineHeight:Le.typography.pxToRem(18)},h6:{...Le.typography.h6,fontWeight:500,fontSize:Le.typography.pxToRem(12),lineHeight:Le.typography.pxToRem(16)},subtitle1:{...Le.typography.subtitle1},subtitle2:{...Le.typography.subtitle2},body1:{...Le.typography.body1,fontWeight:400,fontSize:Le.typography.pxToRem(14),lineHeight:Le.typography.pxToRem(18)},body2:{...Le.typography.body2},button:{...Le.typography.button,fontWeight:500,fontSize:Le.typography.pxToRem(14),lineHeight:Le.typography.pxToRem(18)},caption:{...Le.typography.caption,fontWeight:400,fontSize:Le.typography.pxToRem(11),lineHeight:Le.typography.pxToRem(16)},overline:{...Le.typography.overline}},Le.overrides={};var Pe=Le;var Ne=()=>n.a.createElement(l.MuiThemeProvider,{theme:Pe},n.a.createElement(p.ThemeProvider,{theme:Pe},n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null),n.a.createElement(m,null),n.a.createElement(Ae,null)))),Fe=a(419),Qe=a(175),Ve=a.n(Qe);Object(I.a)([(e,t)=>xe()(e,e=>e.error[`${t}`])],e=>e);var Xe=Object(b.c)({movies:function(e={},t){switch(t.type){case Te:return{...e,...t.data};default:return e}},characters:function(e={},t){switch(t.type){case Z:return{...e,...t.data};default:return e}},progress:function(e={},t){const{type:a}=t,r=/(.*)_(REQUEST|SUCCESS|ERROR|CANCEL)/.exec(a);if(!r)return e;const[,n,c]=r,{[n]:i,...o}=e;return"CANCEL"===c?{...o}:{...e,[n]:"REQUEST"===c}},error:function(e={},t){const{type:a,error:r}=t,n=/(.*)_(REQUEST|ERROR)/.exec(a);if(!n)return e;const[,c,i]=n,{[c]:o,...l}=e;return"REQUEST"===i?{...l}:{...e,[c]:r}}}),Be=a(420);const De=Object(Be.a)((e,t)=>e.pipe(Object(X.a)(Y),Object(A.a)(({characterIds:a})=>{const r=J();return Object(F.a)(a).pipe(Object(H.a)(e=>{const{characters:a}=t.value;return e.filter(e=>-1===Object.keys(a).indexOf(e)).map(e=>Object(Q.a)(K.get(`/people/${e}`,{cancelToken:r.token})).pipe(Object(G.a)(t=>Object(F.a)({...t.data,character_id:e}))))}),Object(G.a)(e=>e.length?Object(V.a)(e).pipe(Object(G.a)(e=>{const t=e.reduce((e,t)=>({...e,[t.character_id]:t}),{});return Object(F.a)(re(t))})):Object(F.a)(re([]))),Object(U.a)(e.pipe(Object(L.a)(e=>e.type===te),Object(P.a)(()=>r.cancel("cancelled")))),Object(N.a)(e=>Object(F.a)((e=>({type:ee,error:e}))(e.response))))})),e=>e.pipe(Object(X.a)(Re),Object(A.a)(()=>{const t=J();return Object(Q.a)(K.get("/films",{cancelToken:t.cancelToken})).pipe(Object(H.a)(e=>(e=>{const t=xe()(e,e=>e.data.results);if(t){const a=t.map(e=>({...e,characters:e.characters&&e.characters.map(e=>e.split("/").filter(e=>e).pop())})),r={...e};return r.data.results=a,r}return e})(e)),Object(H.a)(e=>xe()(e,e=>e.data.results).reduce((e,t)=>({...e,[t.episode_id]:t}),{})),Object(H.a)(e=>(e=>({type:Te,data:e}))(e)),Object(U.a)(e.pipe(Object(L.a)(e=>e.type===ke),Object(P.a)(()=>t.cancel("cancelled"))),Object(N.a)(e=>Object(F.a)((e=>({type:we,error:e}))(e)))))})));const Je=Object(Fe.a)(),Ke=[Ve()(),Je];const qe=function(e){const t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,a=Object(b.e)(Xe,{...e||{}},t(Object(b.a)(...Ke)));return Je.run(De),a}();Object(i.render)(n.a.createElement(c.a,{store:qe},n.a.createElement(Ne,null)),document.getElementById("root"))}},[[253,1,2]]]);