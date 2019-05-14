(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){"use strict";a.d(t,"b",function(){return c}),a.d(t,"a",function(){return l});var n=a(53),r=a(176),i=a.n(r),o=a(37);const c=Object(n.a)(e=>e.characters,e=>i()(t=>e?Object.values(e).filter(e=>t.indexOf(e.character_id)>-1).sort((e,t)=>e.name<t.name?-1:e.name>t.name?1:0):[]));function l(e={},t){switch(t.type){case o.b:return{...e,...t.data};default:return e}}},259:function(e,t,a){e.exports=a(413)},37:function(e,t,a){"use strict";a.d(t,"a",function(){return d}),a.d(t,"b",function(){return f}),a.d(t,"e",function(){return j}),a.d(t,"c",function(){return x}),a.d(t,"d",function(){return R});var n=a(122),r=a(44),i=a(123),o=a(414),c=a(178),l=a(415),p=a(416),s=a(46),h=a(45),u=a(417),b=a(121),y=a(58),m=a(83);const d="API_GET_CHARACTERS",[g,f,O,E]=Object(m.a)(d),j=e=>({type:g,characterIds:e}),v=e=>({type:f,data:e}),x=()=>({type:E}),R=(e,t)=>e.pipe(Object(b.a)(g),Object(n.a)(({characterIds:a})=>{const n=Object(y.b)();return Object(s.a)(a).pipe(Object(r.a)(e=>{const{characters:a}=t.value;return e.filter(e=>-1===Object.keys(a).indexOf(e)).map(e=>Object(h.a)(y.a.get(`/people/${e}`,{cancelToken:n.token})).pipe(Object(i.a)(t=>Object(s.a)({...t.data,character_id:e}))))}),Object(i.a)(e=>e.length?Object(u.a)(e).pipe(Object(i.a)(e=>{const t=e.reduce((e,t)=>({...e,[t.character_id]:t}),{});return Object(s.a)(v(t))})):Object(s.a)(v([]))),Object(o.a)(e.pipe(Object(c.a)(e=>e.type===E),Object(l.a)(()=>n.cancel("cancelled")))),Object(p.a)(e=>Object(s.a)((e=>({type:O,error:e}))(e.response))))}))},413:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(82),o=a(20),c=a(174),l=a(22),p=a(25),s=a(170),h=a.n(s);var u=p.createGlobalStyle`
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
  
 `,b=a(81),y=a.n(b),m=a(56),d=a.n(m),g=a(76),f=a.n(g),O=a(28),E=a(127),j=a(53),v=a(40),x=a.n(v);const R=Object(j.a)([(e,t)=>x()(e,e=>e.progress[`${t}`])],e=>e||!1);var w=a(80),T=a.n(w),S=a(66),k=a.n(S),C=a(79),_=a.n(C),W=a(78),$=a.n(W),z=a(77),M=a.n(z);const H=({onChange:e,list:t,label:a,labelWidth:n,value:i})=>r.a.createElement(M.a,{fullWidth:!0,variant:"outlined"},r.a.createElement($.a,{htmlFor:"outlined-age-simple"},a),r.a.createElement(_.a,{value:i,onChange:e,input:r.a.createElement(T.a,{labelWidth:n,name:"age",id:"outlined-age-simple"})},r.a.createElement(k.a,{value:""},r.a.createElement("em",null,"None")),t&&t.map(e=>r.a.createElement(k.a,{key:e.value,value:e.value},e.name))));H.defaultProps={onChange:()=>{},list:[],label:"",value:"",labelWidth:48};var I=H,G=a(122),L=a(44),A=a(414),U=a(178),N=a(415),P=a(416),F=a(45),Q=a(46),V=a(121),X=a(58),B=a(83);const[D,J,K,q]=Object(B.a)("API_GET_MOVIES"),Y=()=>({type:D});var Z=a(37);const ee=Object(n.lazy)(()=>a.e(3).then(a.bind(null,425))),te=p.default.div`
  text-align: center;
  flex-grow: 1;
`,ae=p.default.div`
  display: flex;
  justify-content: center;
`,ne=Object(p.default)(f.a)`
  && {
    margin-bottom: ${({theme:e})=>`${e.spacing.lg}px`};
  }
`,re=Object(p.default)(y.a)`
  && {
    margin-left: ${({theme:e})=>`${e.spacing.sm}px`};
  }
`;var ie=Object(E.a)(Object(i.b)(e=>({movies:e.movies||{},isLoadingMovies:R(e,"API_GET_MOVIES"),isLoadingCharacters:R(e,Z.a)}),e=>{const t={apiGetCharacters:Z.e,apiGetMovies:Y,apiCancelGetCharacters:Z.c};return{actions:Object(O.b)(t,e)}}),r.a.memo)(({actions:e,movies:t,isLoadingMovies:a,isLoadingCharacters:i})=>{const{apiGetMovies:o,apiGetCharacters:c,apiCancelGetCharacters:l}=e,[p,s]=Object(n.useState)("");Object(n.useEffect)(()=>{(async()=>{await o()})()},[o]),Object(n.useEffect)(()=>{(async()=>{t[p]&&(i&&l(),c(t[p].characters))})()},[t,p]);const h=Object(n.useCallback)(e=>{s(e.target.value)},[]),u=Object(n.useMemo)(()=>Object.keys(t).length?Object.values(t).map(({episode_id:e,title:t})=>({value:e,name:t})):[],[t]),b=Object(n.useMemo)(()=>t[p]&&t[p].characters||[],[t,p]);return r.a.createElement(te,null,r.a.createElement(ne,{variant:"h1",align:"center"},"Hyper React"),r.a.createElement(d.a,{container:!0,wrap:"nowrap",spacing:0},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(I,{onChange:h,value:p,list:u,label:"Starwars Movie",labelWidth:114})),r.a.createElement(d.a,{item:!0},(a||i)&&r.a.createElement(re,{color:"secondary"}))),r.a.createElement(ae,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(ee,{characterIds:b}))))});const oe=p.default.div`
  min-height: 100vh;
  width: 100%;
  padding: ${({theme:e})=>`${e.spacing.md}px`};
`;var ce=()=>r.a.createElement(oe,null,r.a.createElement(ie,null)),le=a(67);const pe={unit:8,xxl:80,xl:48,lg:32,md:16,sm:8,xs:4},se={primary:le.blue,secondary:le.pink},he=Object(l.createMuiTheme)({palette:se,spacing:pe,typography:{useNextVariants:!0},weights:{fontWeightBold:700,fontWeightMedium:500,fontWeightRegular:400},status:{danger:"orange"},props:{MuiWithWidth:{initialWidth:"xs"}},transition:"250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"});he.typography={...he.typography,fontFamily:"'Karla', sans-serif",fontFamilySecondary:"'Karla', sans-serif",h1:{...he.typography.h1,fontWeight:500,fontSize:he.typography.pxToRem(40),lineHeight:he.typography.pxToRem(54)},h2:{...he.typography.h2,fontWeight:400,fontSize:he.typography.pxToRem(32),lineHeight:he.typography.pxToRem(43)},h3:{...he.typography.h3,fontWeight:500,fontSize:he.typography.pxToRem(24),lineHeight:he.typography.pxToRem(32)},h4:{...he.typography.h4,fontWeight:400,fontSize:he.typography.pxToRem(18),lineHeight:he.typography.pxToRem(24)},h5:{...he.typography.h5,fontWeight:500,fontSize:he.typography.pxToRem(14),lineHeight:he.typography.pxToRem(18)},h6:{...he.typography.h6,fontWeight:500,fontSize:he.typography.pxToRem(12),lineHeight:he.typography.pxToRem(16)},subtitle1:{...he.typography.subtitle1},subtitle2:{...he.typography.subtitle2},body1:{...he.typography.body1,fontWeight:400,fontSize:he.typography.pxToRem(14),lineHeight:he.typography.pxToRem(18)},body2:{...he.typography.body2},button:{...he.typography.button,fontWeight:500,fontSize:he.typography.pxToRem(14),lineHeight:he.typography.pxToRem(18)},caption:{...he.typography.caption,fontWeight:400,fontSize:he.typography.pxToRem(11),lineHeight:he.typography.pxToRem(16)},overline:{...he.typography.overline}},he.overrides={};var ue=he;var be=()=>r.a.createElement(l.MuiThemeProvider,{theme:ue},r.a.createElement(p.ThemeProvider,{theme:ue},r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(u,null),r.a.createElement(ce,null)))),ye=a(419),me=a(175),de=a.n(me);var ge=a(168);Object(j.a)([(e,t)=>x()(e,e=>e.error[`${t}`])],e=>e);var fe=Object(O.c)({movies:function(e={},t){switch(t.type){case J:return{...e,...t.data};default:return e}},characters:ge.a,progress:function(e={},t){const{type:a}=t,n=/(.*)_(REQUEST|SUCCESS|ERROR|CANCEL)/.exec(a);if(!n)return e;const[,r,i]=n,{[r]:o,...c}=e;return"CANCEL"===i?{...c}:{...e,[r]:"REQUEST"===i}},error:function(e={},t){const{type:a,error:n}=t,r=/(.*)_(REQUEST|ERROR)/.exec(a);if(!r)return e;const[,i,o]=r,{[i]:c,...l}=e;return"REQUEST"===o?{...l}:{...e,[i]:n}}}),Oe=a(420);const Ee=Object(Oe.a)(Z.d,e=>e.pipe(Object(V.a)(D),Object(G.a)(()=>{const t=Object(X.b)();return Object(F.a)(X.a.get("/films",{cancelToken:t.cancelToken})).pipe(Object(L.a)(e=>(e=>{const t=x()(e,e=>e.data.results);if(t){const a=t.map(e=>({...e,characters:e.characters&&e.characters.map(e=>e.split("/").filter(e=>e).pop())})),n={...e};return n.data.results=a,n}return e})(e)),Object(L.a)(e=>x()(e,e=>e.data.results).reduce((e,t)=>({...e,[t.episode_id]:t}),{})),Object(L.a)(e=>(e=>({type:J,data:e}))(e)),Object(A.a)(e.pipe(Object(U.a)(e=>e.type===q),Object(N.a)(()=>t.cancel("cancelled"))),Object(P.a)(e=>Object(Q.a)((e=>({type:K,error:e}))(e)))))})));const je=Object(ye.a)(),ve=[de()(),je];const xe=function(e){const t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||O.d,a=Object(O.e)(fe,{...e||{}},t(Object(O.a)(...ve)));return je.run(Ee),a}();Object(o.render)(r.a.createElement(i.a,{store:xe},r.a.createElement(be,null)),document.getElementById("root"))},58:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var n=a(120),r=a.n(n);const i=()=>r.a.CancelToken.source();t.a=r.a.create({baseURL:"https://swapi.co/api/",responseType:"json"})},83:function(e,t,a){"use strict";t.a=(e=>[`${e}_REQUEST`,`${e}_SUCCESS`,`${e}_ERROR`,`${e}_CANCEL`])}},[[259,1,2]]]);