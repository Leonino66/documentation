(self.webpackChunkdocv_2=self.webpackChunkdocv_2||[]).push([[290],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,u(u({ref:t},l),{},{components:n})):r.createElement(m,u({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2940:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),u=["components"],a={id:"tutorials-mining-tokens-setup",title:"Setup Token Mining",sidebar_label:"Setup Token Mining"},s={unversionedId:"tutorials/tutorials-mining-tokens-setup",id:"tutorials/tutorials-mining-tokens-setup",isDocsHomePage:!1,title:"Setup Token Mining",description:"How do you configure Token Mining?",source:"@site/docs/tutorials/tutorials-mining-tokens-setup.md",sourceDirName:"tutorials",slug:"/tutorials/tutorials-mining-tokens-setup",permalink:"/zh-CN/docs/tutorials/tutorials-mining-tokens-setup",editUrl:"https://github.com/DataHighway-DHX/documentation/docs/tutorials/tutorials-mining-tokens-setup.md",version:"current",sidebar_label:"Setup Token Mining",frontMatter:{id:"tutorials-mining-tokens-setup",title:"Setup Token Mining",sidebar_label:"Setup Token Mining"},sidebar:"tutorialSidebar",previous:{title:"Claim Rewards",permalink:"/zh-CN/docs/tutorials/tutorials-mining-tokens-claim-rewards"},next:{title:"Setup collator Node",permalink:"/zh-CN/docs/tutorials/tutorials-nodes-collators-setup"}},c=[{value:"How do you configure Token Mining?",id:"how-do-you-configure-token-mining",children:[]}],l={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-do-you-configure-token-mining"},"How do you configure Token Mining?"),(0,i.kt)("p",null,"Connect to the DataHighway using Settings in the Polkadot.js Apps UI and create an Extrinsic using the Token Mining Configuration Runtime Module."))}p.isMDXComponent=!0}}]);