(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(t,e,o){t.exports=o(234)},234:function(t,e,o){"use strict";o.r(e);var a=o(0),i=o.n(a),r=o(24),n=o(54),p=o(2),h=o(12),l=o(50),y=o.n(l);var g=h.createGlobalStyle`
  ${y.a}

  html,
  body {
    font-family: ${({theme:t})=>t.typography.fontFamily};
  }

  html {
    box-sizing: border-box;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${({theme:t})=>t.palette.primary.main};
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

  @font-face {
    font-family: 'ProximaNova';
    font-weight: 300;
    src: url('../assets/fonts/ProximaNova/ProximaNova-Light.otf') format('opentype');
  }

  @font-face {
    font-family: 'ProximaNova';
    font-weight: 400;
    src: url('../assets/fonts/ProximaNova/ProximaNova-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'ProximaNova';
    font-weight: 500;
    src: url('../assets/fonts/ProximaNova/ProximaNova-Semibold.otf') format('opentype');
  }

  @font-face {
    font-family: 'ProximaNova';
    font-weight: 700;
    src: url('../assets/fonts/ProximaNova/ProximaNova-Bold.otf') format('opentype');
  }


  /* Add @font-face here */
  
 `;var f=()=>i.a.createElement("div",null,i.a.createElement("h1",null,"Welcome to Super React Project"));const m="'Karla', sans-serif",s={unit:8,xxl:80,xl:48,lg:32,md:16,sm:8,xs:4},d={primary:{main:"#4B87FF",light:"#6d9eff",xlight:"#f2f6ff",dark:"#4B87FF",contrastText:"#fff"},secondary:{main:"#DBE7FF",light:"#6d9eff",dark:"#c9dbff",contrastText:"#4B87FF"},tertiary:{accent:"#E4E4EA",light:"#eff2f9",main:"#828797",heavy:"#656977",dark:"#201F20"},background:{light:"#F5F7FA",grey:"#F8F8F8",default:"#fff",dark:"#302e34",paper:"#fff"},disabled:{main:"#949494",light:"#f4f4f4"},success:{main:"#04CB94",light:"#CFFFD2",xlight:"#F5FDF7"},warning:{main:"#ff8721",xlight:"#fffaea"},error:{main:"#FF2151",light:"#FBE3EE",xlight:"#fcedf4"},text:{primary:"#000000",secondary:"#949494",contrast:"#FFFFFF"},divider:"#ECECEC",tooltip:{main:"#0b1f31",secondary:"#FFFFFF"},toast:{main:"#4B87FF",error:"#D2003C",success:"#84D584"},type:"light"},c=Object(p.createMuiTheme)({palette:d,spacing:s,typography:{useNextVariants:!0},weights:{fontWeightBold:700,fontWeightMedium:500,fontWeightRegular:400},status:{danger:"orange"},props:{MuiWithWidth:{initialWidth:"xs"}},transition:"250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"});c.typography={...c.typography,fontFamily:m,fontFamilySecondary:m,h1:{...c.typography.h1,fontWeight:500,fontSize:c.typography.pxToRem(40),lineHeight:c.typography.pxToRem(54)},h2:{...c.typography.h2,fontWeight:400,fontSize:c.typography.pxToRem(32),lineHeight:c.typography.pxToRem(43)},h3:{...c.typography.h3,fontWeight:500,fontSize:c.typography.pxToRem(24),lineHeight:c.typography.pxToRem(32)},h4:{...c.typography.h4,fontWeight:400,fontSize:c.typography.pxToRem(18),lineHeight:c.typography.pxToRem(24)},h5:{...c.typography.h5,fontWeight:500,fontSize:c.typography.pxToRem(14),lineHeight:c.typography.pxToRem(18)},h6:{...c.typography.h6,fontWeight:500,fontSize:c.typography.pxToRem(12),lineHeight:c.typography.pxToRem(16)},subtitle1:{...c.typography.subtitle1},subtitle2:{...c.typography.subtitle2},body1:{...c.typography.body1,fontWeight:400,fontSize:c.typography.pxToRem(14),lineHeight:c.typography.pxToRem(18)},body2:{...c.typography.body2},button:{...c.typography.button,fontWeight:500,fontSize:c.typography.pxToRem(14),lineHeight:c.typography.pxToRem(18)},caption:{...c.typography.caption,fontWeight:400,fontSize:c.typography.pxToRem(11),lineHeight:c.typography.pxToRem(16)},overline:{...c.typography.overline}},c.overrides={MuiCard:{root:{borderRadius:0,border:`1px solid ${d.divider}`,boxShadow:"none"}},MuiChip:{root:{marginRight:s.sm,color:d.primary.main,height:28,backgroundColor:"transparent",border:`1px solid ${d.primary.main}`}},MuiCollapse:{entered:{height:"auto",overflow:"visible"}},MuiButton:{root:{textTransform:"none",borderRadius:50,fontFamily:m,fontSize:".85rem",fontWeight:500,letterSpacing:c.typography.pxToRem(1.25),minHeight:44},contained:{boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14)",minWidth:100},outlined:{borderColor:d.secondary.dark,color:d.secondary.dark}},MuiLink:{},MuiDialog:{paper:{borderRadius:10,minWidth:460,padding:0}},MuiDialogActions:{root:{padding:"20px 30px 40px 30px"},action:{margin:"0 10px"}},MuiSwitch:{switchBase:{height:36}},MuiSelect:{icon:{color:"inherit"},select:{color:c.palette.primary.main}},MuiMenuItem:{root:{fontSize:c.typography.pxToRem(14),textTransform:"none",fontFamily:m,color:c.palette.text.main,letterSpacing:c.typography.pxToRem(.88),padding:"6px 24px",minWidth:100,'&[data-value=""]':{display:"none"}}},MuiTab:{root:{textTransform:"none",minHeight:56,[c.breakpoints.up("xs")]:{minWidth:0,marginLeft:25,marginRight:25},"&:first-of-type":{marginLeft:20}},label:{fontSize:c.typography.pxToRem(18),color:d.primary.contrastText,fontWeight:400},textColorPrimary:{fontWeight:700,color:d.primary.contrastText},disabled:{opacity:.3},labelContainer:{[c.breakpoints.up("xs")]:{paddingLeft:0,paddingRight:0}}},MuiFormControlLabel:{root:{marginLeft:0}},MuiTableCell:{head:{color:d.text.primary,fontSize:c.typography.pxToRem(16),fontWeight:500,padding:10},body:{color:d.text.primary,fontSize:c.typography.pxToRem(15),fontWeight:400,padding:10,position:"relative"}},MuiTableHead:{root:{background:c.palette.background.grey}},MuiPrivateTextarea:{textarea:{width:"auto"}}};var u=c;var x=()=>i.a.createElement(p.MuiThemeProvider,{theme:u},i.a.createElement(h.ThemeProvider,{theme:u},i.a.createElement(i.a.Fragment,null,i.a.createElement(n.a,null),i.a.createElement(g,null),i.a.createElement(f,null))));Object(r.render)(i.a.createElement(x,null),document.getElementById("root"))}},[[161,1,2]]]);