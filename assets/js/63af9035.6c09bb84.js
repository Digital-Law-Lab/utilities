"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),g=o,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2444:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:6},i="Testing Code",s={unversionedId:"guides/testing-code",id:"guides/testing-code",title:"Testing Code",description:"You should already have a developer account on our server - if not see Obtaining a developer account.",source:"@site/docs/guides/testing-code.md",sourceDirName:"guides",slug:"/guides/testing-code",permalink:"/Digital-Law-Lab/guides/testing-code",draft:!1,editUrl:"https://github.com/Digital-Law-Lab/Digital-Law-Lab/edit/docusaurus-source/website/guides/testing-code.md",tags:[],version:"current",lastUpdatedBy:"Sirage-t",lastUpdatedAt:1677153341,formattedLastUpdatedAt:"Feb 23, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"Cloning Repo",permalink:"/Digital-Law-Lab/guides/cloning-repo"},next:{title:"Best Practices",permalink:"/Digital-Law-Lab/guides/best-practices/"}},c={},u=[{value:"Pushing to Docassemble server",id:"pushing-to-docassemble-server",level:3}],l={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing-code"},"Testing Code"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You should already have a developer account on our server - if not see ",(0,o.kt)("a",{parentName:"p",href:"/Digital-Law-Lab/guides/setting-up/docassemble-server#obtain-a-developer-account"},"Obtaining a developer account"),".")),(0,o.kt)("p",null,"There are several paradigms for testing your code and ensuring that the logic operates as expected. The primary way we test our beloved code is by sending the application to our Docassemble server and running it."),(0,o.kt)("h3",{id:"pushing-to-docassemble-server"},"Pushing to Docassemble server"),(0,o.kt)("p",null,"Make sure that you have your API key - if you missed the step refer to ",(0,o.kt)("a",{parentName:"p",href:"/Digital-Law-Lab/guides/setting-up/docassemble-server"},"this section"),"."),(0,o.kt)("p",null,"TODO"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Remember to always edit the code in VSCode and not the playground. After you have fixed any error and saved your changes, push again to the server and test. Repeat this until you have resolved all issues and are ready to push to GitHub for review.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Don't forget to ",(0,o.kt)("inlineCode",{parentName:"p"},"commit")," your changes occasionally (even if you don't plan to push to GitHub yet). This way you can revert to an older copy when you break stuff (I am confident we all will)!")))}p.isMDXComponent=!0}}]);