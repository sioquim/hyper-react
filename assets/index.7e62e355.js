(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{255:function(e,t,a){e.exports=a(413)},413:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(52),o=a(20),c=a(175),l=a(22),p=a(24),s=a(167),h=a.n(s);var m=p.createGlobalStyle`
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
  
 `,u=a(64),y=a.n(u),b=a(27),g=a(90),d=a(89),E=a.n(d),f=a(51),O=a.n(f),j=a(62),x=a.n(j),v=a(63),_=a.n(v),S=a(84),T=a.n(S),R=a(83),w=a.n(R),C=a(81),k=a.n(C),I=a(82),A=a.n(I),W=a(91),M=a(171),P=a.n(M),$=a(173),G=a(415),H=a(53),U=a(174),z=a(416),L=a(177),N=a(172),Q=a.n(N).a.create({baseURL:"https://swapi.co/api/",responseType:"json"});const V="API_GET_CHARACTERS_SUCCESS",F=e=>({type:"API_GET_CHARACTERS_REQUEST",characterIds:e}),K=e=>({type:V,data:e}),X=Object(W.a)(e=>e.characters,e=>P()(t=>e?Object.values(e).filter(e=>t.indexOf(e.character_id)>-1).sort((e,t)=>e.name<t.name?-1:e.name>t.name?1:0):[]));const B=Object(p.default)(k.a)`
  && {
    background-color: ${({theme:e})=>`${e.palette.primary.main}`};
  }
`,D=({metrics:e})=>{return Object.keys(e).filter(t=>!e[t].includes("unknown")).map((t,a,r)=>n.a.createElement("span",{key:a},t,": ",n.a.createElement("i",null,e[t]),((e,t)=>e<t.length-1&&t.length>1&&", ")(a,r)))},J=({characters:e})=>n.a.createElement(x.a,{subheader:e.length?n.a.createElement(A.a,{component:"div"},"Characters"):null},e.map(({character_id:e,name:t,height:a,mass:r})=>n.a.createElement(_.a,{key:e,alignItems:"flex-start"},n.a.createElement(w.a,null,n.a.createElement(B,null,t.substring(0,2).toUpperCase())),n.a.createElement(T.a,{primary:t,secondary:n.a.createElement(D,{metrics:{height:`${a}cm`,mass:`${r}kg`}})}))));J.defaultProps={characterIds:[],characters:[]};var q=Object(g.a)(Object(i.b)((e,t)=>({characters:X(e)(t.characterIds)}),null),n.a.memo)(J),Y=a(88),Z=a.n(Y),ee=a(66),te=a.n(ee),ae=a(87),re=a.n(ae),ne=a(86),ie=a.n(ne),oe=a(85),ce=a.n(oe);const le=({onChange:e,list:t,label:a,labelWidth:r,value:i})=>n.a.createElement(ce.a,{fullWidth:!0,variant:"outlined"},n.a.createElement(ie.a,{htmlFor:"outlined-age-simple"},a),n.a.createElement(re.a,{value:i,onChange:e,input:n.a.createElement(Z.a,{labelWidth:r,name:"age",id:"outlined-age-simple"})},n.a.createElement(te.a,{value:""},n.a.createElement("em",null,"None")),t&&t.map(e=>n.a.createElement(te.a,{key:e.value,value:e.value},e.name))));le.defaultProps={onChange:()=>{},list:[],label:"",value:"",labelWidth:48};var pe=le,se=a(47),he=a(417),me=a(69),ue=a.n(me);const ye="API_GET_MOVIES_SUCCESS",be=()=>({type:"API_GET_MOVIES_REQUEST"});const ge=Object(W.a)([(e,t)=>ue()(e,e=>e.progress[`${t}`])],e=>e||!1),de=p.default.div`
  text-align: center;
  flex-grow: 1;
`,Ee=Object(p.default)(y.a)`
  && {
    margin-bottom: ${({theme:e})=>`${e.spacing.lg}px`};
  }
`,fe=Object(p.default)(E.a)`
  && {
    margin-left: ${({theme:e})=>`${e.spacing.sm}px`};
  }
`;var Oe=Object(g.a)(Object(i.b)(e=>({movies:e.movies||{},isLoading:ge(e,"API_GET_MOVIES")||ge(e,"API_GET_CHARACTERS")}),e=>{const t={apiGetCharacters:F,apiGetMovies:be};return{actions:Object(b.b)(t,e)}}),n.a.memo)(({actions:e,movies:t,isLoading:a})=>{const{apiGetMovies:i,apiGetCharacters:o}=e,[c,l]=Object(r.useState)("");Object(r.useEffect)(()=>{(async()=>{await i()})()},[i]),Object(r.useEffect)(()=>{(async()=>{t[c]&&o(t[c].characters)})()},[o,t,c]);const p=Object(r.useCallback)(e=>{l(e.target.value)},[]),s=Object(r.useMemo)(()=>Object.keys(t).length?Object.values(t).map(({episode_id:e,title:t})=>({value:e,name:t})):[],[t]),h=Object(r.useMemo)(()=>t[c]&&t[c].characters||[],[t,c]);return n.a.createElement(de,null,n.a.createElement(Ee,{variant:"h1",align:"center"},"Hyper React"),n.a.createElement(O.a,{container:!0,wrap:"nowrap",spacing:0},n.a.createElement(O.a,{item:!0,xs:12},n.a.createElement(pe,{onChange:p,value:c,list:s,label:"Starwars Movie",labelWidth:114})),n.a.createElement(O.a,{item:!0},a&&n.a.createElement(fe,{color:"secondary"}))),n.a.createElement(q,{characterIds:h}))});const je=p.default.div`
  min-height: 100vh;
  width: 100%;
  padding: ${({theme:e})=>`${e.spacing.md}px`};
`;var xe=()=>n.a.createElement(je,null,n.a.createElement(Oe,null)),ve=a(67);const _e={unit:8,xxl:80,xl:48,lg:32,md:16,sm:8,xs:4},Se={primary:ve.blue,secondary:ve.pink},Te=Object(l.createMuiTheme)({palette:Se,spacing:_e,typography:{useNextVariants:!0},weights:{fontWeightBold:700,fontWeightMedium:500,fontWeightRegular:400},status:{danger:"orange"},props:{MuiWithWidth:{initialWidth:"xs"}},transition:"250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"});Te.typography={...Te.typography,fontFamily:"'Karla', sans-serif",fontFamilySecondary:"'Karla', sans-serif",h1:{...Te.typography.h1,fontWeight:500,fontSize:Te.typography.pxToRem(40),lineHeight:Te.typography.pxToRem(54)},h2:{...Te.typography.h2,fontWeight:400,fontSize:Te.typography.pxToRem(32),lineHeight:Te.typography.pxToRem(43)},h3:{...Te.typography.h3,fontWeight:500,fontSize:Te.typography.pxToRem(24),lineHeight:Te.typography.pxToRem(32)},h4:{...Te.typography.h4,fontWeight:400,fontSize:Te.typography.pxToRem(18),lineHeight:Te.typography.pxToRem(24)},h5:{...Te.typography.h5,fontWeight:500,fontSize:Te.typography.pxToRem(14),lineHeight:Te.typography.pxToRem(18)},h6:{...Te.typography.h6,fontWeight:500,fontSize:Te.typography.pxToRem(12),lineHeight:Te.typography.pxToRem(16)},subtitle1:{...Te.typography.subtitle1},subtitle2:{...Te.typography.subtitle2},body1:{...Te.typography.body1,fontWeight:400,fontSize:Te.typography.pxToRem(14),lineHeight:Te.typography.pxToRem(18)},body2:{...Te.typography.body2},button:{...Te.typography.button,fontWeight:500,fontSize:Te.typography.pxToRem(14),lineHeight:Te.typography.pxToRem(18)},caption:{...Te.typography.caption,fontWeight:400,fontSize:Te.typography.pxToRem(11),lineHeight:Te.typography.pxToRem(16)},overline:{...Te.typography.overline}},Te.overrides={};var Re=Te;var we=()=>n.a.createElement(l.MuiThemeProvider,{theme:Re},n.a.createElement(p.ThemeProvider,{theme:Re},n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null),n.a.createElement(m,null),n.a.createElement(xe,null)))),Ce=a(418),ke=a(176),Ie=a.n(ke);var Ae=Object(b.c)({movies:function(e={},t){switch(t.type){case ye:return{...e,...t.data};default:return e}},characters:function(e={},t){switch(t.type){case V:return{...e,...t.data};default:return e}},progress:function(e={},t){const{type:a}=t,r=/(.*)_(REQUEST|SUCCESS|ERROR|CANCEL)/.exec(a);if(!r)return e;const[,n,i]=r,{[n]:o,...c}=e;return"CANCEL"===i?{...c}:{...e,[n]:"REQUEST"===i}}}),We=a(419),Me=a(420);const Pe="API_MOCK_CANCEL";const $e=Object(We.a)(e=>e.pipe(Object(L.a)("API_MOCK_REQUEST"),Object($.a)(t=>(e=>Object(U.a)(e).pipe(Object(Me.a)(e.delay)))(t).pipe(Object(se.a)(e=>(e=>({type:"API_MOCK_SUCCESS",delay:e.delay}))(e)),Object(he.a)(e.pipe(Object(L.a)(Pe)))))),(e,t)=>e.pipe(Object(L.a)("API_GET_CHARACTERS_REQUEST"),Object($.a)(({characterIds:e})=>{const{characters:a}=t.value,r=e.filter(e=>-1===Object.keys(a).indexOf(e)).map(e=>Object(H.a)(Q.get(`/people/${e}`)).pipe(Object(G.a)(t=>Object(U.a)({...t.data,character_id:e}))));return r.length?Object(z.a)(r).pipe(Object(G.a)(e=>{const t=e.reduce((e,t)=>({...e,[t.character_id]:t}),{});return Object(U.a)(K(t))})):Object(U.a)(K([]))})),e=>e.pipe(Object(L.a)("API_GET_MOVIES_REQUEST"),Object($.a)(()=>Object(H.a)(Q.get("/films")).pipe(Object(se.a)(e=>(e=>{const t=ue()(e,e=>e.data.results);if(t){const a=t.map(e=>({...e,characters:e.characters&&e.characters.map(e=>e.split("/").filter(e=>e).pop())})),r={...e};return r.data.results=a,r}return e})(e)),Object(se.a)(e=>ue()(e,e=>e.data.results).reduce((e,t)=>({...e,[t.episode_id]:t}),{})),Object(se.a)(e=>(e=>({type:ye,data:e}))(e)),Object(he.a)(e.pipe(Object(L.a)("API_GET_MOVIES_CANCEL")))))));const Ge=Object(Ce.a)(),He=[Ie()(),Ge];const Ue=function(e){const t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,a=Object(b.e)(Ae,{...e||{}},t(Object(b.a)(...He)));return Ge.run($e),a}();Object(o.render)(n.a.createElement(i.a,{store:Ue},n.a.createElement(we,null)),document.getElementById("root"))}},[[255,1,2]]]);