import{J as a,C as l,L as A,N as ie}from"./node-modules-PGxtyyT8.js";import{B as y,d as ae,L as ce,I as le,a as ue,T as de,b as he,u as fe,c as ge,e as z,f as pe,g as me,h as xe,i as we,j as V,k as be,l as ye,m as Ce,C as je,S as ve,n as Ie,o as Se,p as Pe}from"./mui-BB_feBED.js";import{E as Ee}from"./jspdf-C25bn0x6.js";import"./index-BLB0KQEe.js";import"./emotion-DK4wnmc9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function bt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function s(){return this instanceof s?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}),n}function q({color:e}){return a.jsx(y,{bgcolor:e,height:"1px",width:"100vw"})}function We(){const e=new Date().getFullYear();return a.jsxs(a.Fragment,{children:[a.jsxs(y,{alignItems:"center",display:"flex",gap:1,whiteSpace:"nowrap",children:[a.jsx(ae,{fontSize:"small"})," ",e," Kelly Ripple,"]}),a.jsxs(y,{alignItems:"center",display:"flex",gap:1,whiteSpace:"nowrap",children:[a.jsx(ce,{color:"inherit",href:"https://github.com/twitter/twemoji",tabIndex:-1,target:"_blank",underline:"none",whiteSpace:"nowrap",children:"Favicon by Twemoji"}),a.jsx(le,{"aria-label":"license",color:"inherit",href:"https://creativecommons.org/licenses/by/4.0",size:"small",sx:{padding:0},tabIndex:-1,title:"CC-BY 4.0",children:a.jsx(ue,{fontSize:"small"})})]})]})}const X=l.createContext(void 0),Oe=()=>{const e=l.useContext(X);if(!e)throw Error("useThemeContext must be called within a ThemeProvider");return e},Te=()=>{const{theme:e}=Oe();return e},ke=()=>{const e=Te(),{primary:t,secondary:n,success:s,info:o,warning:r,error:i,common:c,background:u}=e.palette;return{primary:t.main,secondary:n.main,success:s.main,info:o.main,warning:r.main,error:i.main,white:c.white,black:c.black,background:u.default}};function Le({borderColor:e,children:t,header:n}){const{success:s,info:o,warning:r}=ke(),i=e==="green"?s:e==="blue"?o:r;return a.jsxs(y,{alignItems:"center","data-env":"production","data-testid":"App","data-version":"60ab1252b38a21e96b5c65bedcd37fc193f36509",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",children:[a.jsx(y,{alignItems:"center",component:"header",display:"flex",flexWrap:"wrap",gap:2,justifyContent:"center",p:2,width:"100%",children:n}),a.jsx(q,{color:i}),a.jsx(y,{alignItems:"center",component:"main",display:"flex",flexGrow:1,justifyContent:"center",p:2,width:"100%",children:t}),a.jsx(q,{color:i}),a.jsx(y,{alignItems:"center",className:"footer",color:"gray",component:"footer",display:"flex",flexWrap:"wrap",gap:1,justifyContent:"center",p:2,width:"100vw",children:a.jsx(We,{})})]})}function J(e){const t={display:"flex",flexGrow:1};return a.jsx(de,{InputProps:{endAdornment:a.jsx(he,{position:"end",children:"in"})},autoComplete:"off",fullWidth:!1,size:"small",sx:t,tabIndex:-1,type:"text",...e})}function $(){return fe("(max-width:500px)")}const Z=l.createContext(void 0),N=()=>{const e=l.useContext(Z);if(!e)throw Error("usePageContext must be called within a PageProvider");return e},He=({orientation:e,pageMargin:t})=>{if(e==="portrait")return{pageHeight:11,pageWidth:8.5,sliceWidthInches:8.5-2*t,sliceHeightInches:11-2*t};if(e==="landscape")return{pageHeight:8.5,pageWidth:11,sliceWidthInches:11-2*t,sliceHeightInches:8.5-2*t};throw TypeError("[getOrientation] invalid orientation type")},_=()=>{const{orientation:e,pageMargin:t}=N(),{pageHeight:n,pageWidth:s,sliceWidthInches:o,sliceHeightInches:r}=He({orientation:e,pageMargin:t});return{orientation:e,pageHeight:n,pageWidth:s,sliceWidthInches:o,sliceHeightInches:r}},$e=()=>{const{setOrientation:e}=N();return e},ee=()=>{const{pageMargin:e}=N();return e};function Me(){const{orientation:e}=_(),t=$e(),n=$(),s={display:"flex",flexGrow:1};return a.jsxs(ge,{"aria-label":"text alignment",exclusive:!0,fullWidth:n,size:"small",sx:s,value:e,children:[a.jsx(z,{"aria-label":"portrait",onClick:t,sx:s,tabIndex:0,title:"Portrait",value:"portrait",children:a.jsx(pe,{})}),a.jsx(z,{"aria-label":"landscape",onClick:t,sx:s,tabIndex:0,title:"Landscape",value:"landscape",children:a.jsx(me,{})})]})}function H({color:e,component:t,disabled:n,hiddenInput:s,icon:o,label:r,loading:i,newTab:c,tabIndex:u=0,iconButton:h,type:d="button",...g}){const f=$(),p={display:"flex",flexGrow:1,paddingTop:"7px",paddingBottom:"6.5px",whiteSpace:"nowrap"};return a.jsxs(xe,{"aria-label":r,color:e,component:t||(g.onClick?"button":"label"),disabled:n,fullWidth:f,loading:i,loadingPosition:h?"center":"start",role:void 0,startIcon:h?void 0:o,sx:p,tabIndex:u,target:c?"_blank":void 0,title:r,type:d,variant:"outlined",...g,children:[h?o:r,s]})}function Be({disabled:e,loading:t,onClick:n}){return a.jsx(H,{color:"warning",disabled:e,icon:a.jsx(we,{}),label:"Slice & Download",loading:t,onClick:n})}function Re({canceling:e,disabled:t,loading:n,onClick:s,onCancel:o}){const r=$(),i={display:"flex",flexGrow:1};return a.jsxs(V,{fullWidth:r,sx:i,children:[a.jsx(H,{color:"success",component:"button",disabled:t,icon:a.jsx(be,{}),iconButton:!0,label:"Update",loading:n,onClick:s,type:"submit"}),a.jsx(H,{color:"error",disabled:t,icon:a.jsx(ye,{}),iconButton:!0,label:"Cancel",loading:e,onClick:o})]})}function Ne({disabled:e,loading:t,onChange:n}){return a.jsx(H,{color:"primary",disabled:e,hiddenInput:a.jsx("input",{accept:"image/jpeg,image/png",disabled:e,hidden:!0,onChange:n,type:"file"}),icon:a.jsx(Ce,{}),label:"Upload",loading:t})}function _e(e){return typeof e=="string"}function Ge(e){return e!==e}function Ue(e){return typeof e=="number"&&!Ge(e)}const R=e=>{const t=[".","0","1","2","3","4","5","6","7","8","9"],n=[];for(const s of e)t.includes(s)&&(n.push(s),s==="."&&t.shift());return n.join("")},te=e=>{const t=Math.abs(e);return t>99999?99999:Math.round(t*100)/100},Fe=e=>{const t=R(e),n=parseFloat(t);return Number.isNaN(n)?"":te(n).toString()};function T(e){if(Ue(e))return te(e);if(_e(e))return Fe(e);throw TypeError}function De({changeImage:e,imageHeight:t,setImageHeight:n,imageWidth:s,setImageWidth:o,sliceAndDownload:r,unsavedHeight:i,unsavedWidth:c,update:u,cancelUpdate:h,isSlicing:d}){const g=$(),f=l.useCallback(x=>{if(!n)throw Error("[handleChangeHeight] missing required properties");const b=R(x.currentTarget.value);n(b||"")},[n]),p=l.useCallback(x=>{if(!o)throw Error("[handleChangeWidth] missing required properties");const b=R(x.currentTarget.value);o(b||"")},[o]),j=i||c,C={display:"flex",flexDirection:g?"column":"row",flexGrow:1,flexWrap:"nowrap",gap:"16px",justifyContent:"center"},v={display:"flex",flexGrow:1,justifyContent:"center"};return a.jsxs(a.Fragment,{children:[a.jsxs(V,{fullWidth:g?!0:void 0,orientation:g?"vertical":"horizontal",sx:v,children:[a.jsx(Ne,{disabled:!e,onChange:e}),a.jsx(Be,{disabled:!r||j,loading:d,onClick:r})]}),a.jsxs("form",{autoComplete:"off",noValidate:!0,onSubmit:u,style:C,children:[a.jsx(J,{disabled:!o||i,label:"Width",name:"imageWidth",onChange:p,value:s||" "}),a.jsx(J,{disabled:!n||c,label:"Height",name:"imageHeight",onChange:f,value:t||" "}),a.jsx(Re,{disabled:!u||!h||!j,onCancel:h}),a.jsx(Me,{})]})]})}function Ae({grid:e,previews:t}){const{height:n,ref:s}=A({handleHeight:!0,handleWidth:!1}),{width:o,ref:r}=A({handleHeight:!1,handleWidth:!0});if(!e||!t)return null;const i=e.columns*e.rows,c=t.concat(Array(i-t.length).fill("placeholder")),u=4,h=n&&o?Math.min(o/((e.columnWidth+u)*e.columns),n/((e.rowHeight+u)*e.rows)):void 0;return a.jsxs(y,{"data-testid":"Previews",display:"flex",flexDirection:"column",height:"100%",position:"relative",width:"100%",children:[a.jsx(y,{"data-testid":"Width",height:"0",ref:r,width:"100%"}),a.jsx(y,{"data-testid":"Height",height:"100%",ref:s,width:"0"}),a.jsx(y,{alignContent:"center",bottom:"0","data-testid":"Grid",display:"grid",gridTemplateColumns:`repeat(${e.columns}, ${h?`${h*e.columnWidth}px`:"auto"})`,gridTemplateRows:`repeat(${e.rows}, ${h?`${h*e.rowHeight}px`:"auto"})`,justifyContent:"center",left:"0",position:"absolute",right:"0",top:"0",children:c.map((d,g)=>{const f=d==="placeholder",p=`${u/2}px`;return a.jsx(y,{"data-testid":"GridItem",position:"relative",children:a.jsx(je,{image:d,style:{position:"absolute",top:p,bottom:p,left:p,right:p}})},f?`${d}-${g}`:d)})})]})}function Y(e){const[t,n]=l.useState(),s=o=>{n(o)};return l.useEffect(()=>{e&&n(e)},[e]),[t,s]}const ze="modulepreload",qe=function(e){return"/map-slicer/"+e},K={},yt=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.all(n.map(c=>{if(c=qe(c),c in K)return;K[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":ze,u||(d.as="script",d.crossOrigin=""),d.href=c,i&&d.setAttribute("nonce",i),document.head.appendChild(d),u)return new Promise((g,f)=>{d.addEventListener("load",g),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}return o.then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},Je=async({images:e,imageHeight:t,imageWidth:n,orientation:s,pageHeight:o,pageWidth:r})=>{const i={orientation:s,format:[r,o],unit:"in"},c="PNG",u=await e;return u.reduce((h,d,g)=>{const f=g+1,p={format:c,imageData:d,x:0,y:0,width:n,height:t};return h.addImage(p),f!==u.length&&h.addPage(i.format,i.orientation),h},new Ee(i)).output("datauristring")},E=({inches:e,pixelsPerInch:t})=>Math.floor(e*t),Ye=({pixels:e,pixelsPerInch:t})=>e/t,Ke=({inches:e,pixels:t})=>{const n=Math.floor(t/e);return n>0?n:1},Q=e=>{const t=parseFloat(e);return Number.isNaN(t)?0:t};function Qe({image:e,composite:t,changeImage:n,pdfImages:s,pixelsPerInch:o,setPixelsPerInch:r,onChangePpi:i,previews:c}){var G,U;const u=ee(),{orientation:h,pageHeight:d,pageWidth:g}=_(),f=({pixels:I,pixelsPerInch:S})=>I?T(Ye({pixelsPerInch:S,pixels:I})):void 0,p=f({pixelsPerInch:o,pixels:t==null?void 0:t.grid.rowHeight}),j=f({pixelsPerInch:o,pixels:t==null?void 0:t.grid.columnWidth}),w=(G=f({pixelsPerInch:o,pixels:e==null?void 0:e.height}))==null?void 0:G.toString(),m=(U=f({pixelsPerInch:o,pixels:e==null?void 0:e.width}))==null?void 0:U.toString(),[C,v]=Y(w),[x,b]=Y(m),P=C&&w?T(C)!==T(w):!1,W=x&&m?T(x)!==T(m):!1,[M,k]=l.useState(!1),B=l.useCallback(({href:I})=>{const S=document.createElement("a");S.download="download",S.href=I,S.click()},[]),L=l.useCallback(()=>{if(!s||!p||!j)throw Error("[sliceAndDownload] missing required properties");k(!0),setTimeout(async()=>{const I=await Je({images:s,imageHeight:p,imageWidth:j,pageHeight:d,pageWidth:g,orientation:h});B({href:I}),k(!1)})},[u,s,p,j]),oe=l.useCallback(I=>{if(I.preventDefault(),!e||!C||!x)throw Error("[update] missing required properties");const S=({inches:O,pixels:re})=>{const F=Ke({inches:O,pixels:re});r(D=>D===F?D:(i(),F))};if(W){const O=Q(x);S({inches:O,pixels:e.width}),m&&b(m)}if(P){const O=Q(C);S({inches:O,pixels:e.height}),w&&v(w)}},[e==null?void 0:e.height,e==null?void 0:e.width,C,x,P,W,w,m,v,b]),se=l.useCallback(()=>{if(!w||!m)throw Error("[cancelUpdate] missing required properties");v(w),b(m)},[w,m]);return a.jsx(Le,{borderColor:"blue",header:a.jsx(De,{cancelUpdate:m&&w?se:void 0,changeImage:n,imageHeight:C,imageWidth:x,isSlicing:M,setImageHeight:v,setImageWidth:b,sliceAndDownload:s&&p&&j?L:void 0,unsavedHeight:P,unsavedWidth:W,update:e&&C&&x?oe:void 0}),children:t?a.jsx(Ae,{grid:t.grid,previews:c}):a.jsx(ve,{animation:"wave","data-testid":"Skeleton",height:"100%",variant:"rectangular"})})}const Ve=({src:e,onload:t})=>{const n=new Image;return n.src=e,n.onload=t,n};function ne(e){const t=e==null?void 0:e.src,[n,s]=l.useState(t),[o,r]=l.useState(!0),[i,c]=l.useState(null);l.useEffect(()=>{if(r(!0),!n)return;const d=Ve({src:n,onload:function(g){var f;r(!1),(f=e==null?void 0:e.onload)==null||f.call(e,g)}});c(d)},[t,n]);const u=l.useCallback(({src:d})=>{s(d)},[]),h=l.useCallback(()=>{c(null)},[]);return{image:o?null:i,isLoading:o,currentImage:i,getImage:u,clearImage:h}}function Xe({sliceHeight:e,sliceWidth:t,image:n}){const s=({sliceSize:i,imageSize:c})=>(i>=c?1:Math.ceil(c/i))*i,o=s({sliceSize:e,imageSize:n.height}),r=s({sliceSize:t,imageSize:n.width});return{height:o,width:r}}async function Ze({image:e,height:t,width:n}){const s="image/png",o=new OffscreenCanvas(n,t),r=o.getContext("2d");if(r===null)throw Error("[getCompositeUrl] null context");r.fillStyle="white",r.fillRect(0,0,o.width,o.height);const i=Math.floor((o.width-e.width)/2),c=Math.floor((o.height-e.height)/2);r.drawImage(e,i,c,e.width,e.height);const u=await o.convertToBlob({type:s});return URL.createObjectURL(u)}async function et({image:e,height:t,width:n,sx:s,sy:o,margin:r}){const i="image/png",c=r*2,u=new OffscreenCanvas(n+c,t+c),h=u.getContext("2d");if(h===null)throw Error("[getCanvas] null context");h.fillStyle="white",h.fillRect(0,0,u.width,u.height),h.drawImage(e,s,o,n,t,r,r,n,t);const d=await u.convertToBlob({type:i});return URL.createObjectURL(d)}async function tt({sliceHeight:e,sliceWidth:t,image:n}){const{height:s,width:o}=Xe({sliceHeight:e,sliceWidth:t,image:n});return Ze({height:s,width:o,image:n})}const nt=({rowHeight:e,columnWidth:t,totalHeight:n,totalWidth:s})=>{if(s%t!==0)throw Error("[useGrid] width out of bounds");if(n%e!==0)throw Error("[useGrid] height out of bounds");const o=s/t,r=n/e;return{columns:o,rows:r,columnWidth:t,rowHeight:e}};function ot({height:e,width:t,sliceHeight:n,sliceWidth:s}){if(t>s&&t%s!==0)throw Error("[getCoordinates] width out of bounds");if(e>n&&e%n!==0)throw Error("[getCoordinates] height out of bounds");const o=[];for(let r=0;r<e;r+=n)for(let i=0;i<t;i+=s)o.push({sx:i,sy:r});return o}async function st({image:e,pixelsPerInch:t,pageMargin:n,sliceHeightInches:s,sliceWidthInches:o,callback:r}){const i=E({inches:o,pixelsPerInch:t}),c=E({inches:s,pixelsPerInch:t}),u=ot({height:e.height,width:e.width,sliceHeight:c,sliceWidth:i}),h=[];for(const{sx:d,sy:g}of u){const f=await et({height:c,width:i,image:e,sx:d,sy:g,margin:n});r==null||r(f),h.push(f)}return h}function rt({changeImage:e,image:t}){const{sliceHeightInches:n,sliceWidthInches:s}=_(),[o,r]=l.useState(72),{image:i,getImage:c,clearImage:u}=ne(),[h,d]=l.useState(),[g,f]=l.useState();l.useEffect(()=>{if(!t)return;const x=E({inches:s,pixelsPerInch:o}),b=E({inches:n,pixelsPerInch:o});u(),d(void 0),f(void 0),m([]),tt({image:t,sliceHeight:b,sliceWidth:x}).then(P=>{c({src:P})})},[t,o,n,s]);const p=ee(),j=E({inches:p,pixelsPerInch:o}),[w,m]=l.useState([]);l.useEffect(()=>{if(!i)return;const x=k=>{m(B=>{const L=[...B];return L.push(k),L})},b=E({inches:s,pixelsPerInch:o}),P=E({inches:n,pixelsPerInch:o}),W=st({image:i,pixelsPerInch:o,callback:x,pageMargin:j,sliceHeightInches:n,sliceWidthInches:s});d(W);const M=nt({rowHeight:P,columnWidth:b,totalHeight:i.height,totalWidth:i.width});f(M)},[i,o,p,j]);const C=l.useCallback(()=>{u(),d(void 0),f(void 0),m([])},[]),v=l.useMemo(()=>i&&g?{image:i,grid:g}:void 0,[i,g]);return a.jsx(Qe,{changeImage:e,composite:v,image:t,onChangePpi:C,pdfImages:h,pixelsPerInch:o,previews:w,setPixelsPerInch:r})}function it({src:e}){const{image:t,getImage:n}=ne({src:e}),[s,o]=l.useState(),r=({files:c})=>{if(c&&c.length>0){const u=c.item(0);u?o(u):console.warn("unknown error occured during file upload")}else console.warn("file is missing")};l.useEffect(()=>{if(!s)return;const c=URL.createObjectURL(s);n({src:c})},[s]);const i=l.useCallback(c=>{r({files:c.target.files})},[]);return a.jsx(rt,{changeImage:i,image:t})}const at="/map-slicer/assets/forest-Bl8z6JIJ.jpg",ct=(e,t,n,s)=>{l.useRef(e),l.useEffect(()=>{},[e])};function lt({children:e}){const[t,n]=l.useState("dark"),s=l.useMemo(()=>Ie({palette:{mode:t}}),[t]),o=l.useCallback(()=>n(i=>i==="light"?"dark":"light"),[]),r=l.useMemo(()=>({mode:t,theme:s,toggleMode:o}),[t,s]);return ct({children:e,mode:t,theme:s,memo:r}),a.jsx(X.Provider,{value:r,children:a.jsxs(Se,{theme:s,children:[a.jsx(Pe,{enableColorScheme:!0}),e]})})}function ut({children:e}){const[t,n]=l.useState("portrait"),s=l.useCallback(r=>{const i=r.currentTarget.value==="portrait"?"portrait":"landscape";n(c=>c===i?c:i)},[]),o=l.useMemo(()=>({orientation:t,setOrientation:s,pageMargin:.25}),[t]);return a.jsx(Z.Provider,{value:o,children:e})}function dt({children:e}){return a.jsx(lt,{children:a.jsx(ut,{children:e})})}ie(document.getElementById("root")).render(a.jsx(dt,{children:a.jsx(it,{src:at})}));export{yt as _,wt as a,xt as c,bt as g};
