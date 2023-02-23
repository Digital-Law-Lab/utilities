"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[920],{2027:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var r=a(7294),n=a(2263),l=a(3929),s=a(5742),c=a(9960),u=a(5999);const o=["zero","one","two","few","many","other"];function m(e){return o.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:m(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:m(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function p(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}var d=a(6550),g=a(412);const f="q";const y=function(){const e=(0,d.k6)(),t=(0,d.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)();return{searchValue:g.Z.canUseDOM&&new URLSearchParams(t.search).get(f)||"",updateSearchPath:a=>{const r=new URLSearchParams(t.search);a?r.set(f,a):r.delete(f),e.replace({search:r.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var E=a(22),I=a(8202),S=a(2539),R=a(726),w=a(1073),b=a(311);const P={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};var v=a(3926);function F(e){let{searchResult:{document:t,type:a,page:n,tokens:l,metadata:s}}=e;const u=0===a,o=2===a,m=(u?t.b:n.b).slice(),h=o?t.s:t.t;return u||m.push(n.t),r.createElement("article",{className:P.searchResultItem},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,S.C)(h,l):(0,R.o)(h,(0,w.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:P.searchResultItemPath},(0,v.e)(m)),o&&r.createElement("p",{className:P.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,R.o)(t.t,(0,w.m)(s,"t"),l,100)}}))}const k=function(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=p(),{searchValue:a,updateSearchPath:c}=y(),[o,m]=(0,r.useState)(a),[h,i]=(0,r.useState)(),[d,g]=(0,r.useState)(),f=(0,r.useMemo)((()=>o?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:o}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[o]);(0,r.useEffect)((()=>{c(o),h&&(o?h(o,(e=>{g(e)})):g(void 0))}),[o,h]);const S=(0,r.useCallback)((e=>{m(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==o&&m(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,E.w)(e);i((()=>(0,I.v)(t,a,100)))}()}),[e]),r.createElement(l.Z,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,f)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,f),r.createElement("input",{type:"search",name:"q",className:P.searchQueryInput,"aria-label":"Search",onChange:S,value:o,autoComplete:"off",autoFocus:!0}),!h&&o&&r.createElement("div",null,r.createElement(b.Z,null)),d&&(d.length>0?r.createElement("p",null,t(d.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:d.length}))):r.createElement("p",null,(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,d&&d.map((e=>r.createElement(F,{key:e.document.i,searchResult:e}))))))}}}]);