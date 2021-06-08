(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[9252],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,g=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(g,c(c({ref:t},l),{},{components:n})):r.createElement(g,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1282:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(9603),i=n(120),a=(n(7378),n(5318)),c=["components"],o={},p={unversionedId:"api/interfaces/types_src.yamlconfig.cacheinvalidateconfig",id:"api/interfaces/types_src.yamlconfig.cacheinvalidateconfig",isDocsHomePage:!1,title:"Interface: CacheInvalidateConfig",description:"types/src.YamlConfig.CacheInvalidateConfig",source:"@site/docs/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: CacheEffectingOperationConfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.cacheeffectingoperationconfig"},next:{title:"Interface: CacheTransformConfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.cachetransformconfig"}},s=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"effectingOperations",id:"effectingoperations",children:[]},{value:"ttl",id:"ttl",children:[]}]}],l={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/types_src"},"types/src"),".",(0,a.kt)("a",{parentName:"p",href:"../modules/types_src.yamlconfig"},"YamlConfig"),".CacheInvalidateConfig"),(0,a.kt)("p",null,"Invalidation rules"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig#effectingoperations"},"effectingOperations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig#ttl"},"ttl"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"effectingoperations"},"effectingOperations"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"effectingOperations"),": ",(0,a.kt)("a",{parentName:"p",href:"types_src.yamlconfig.cacheeffectingoperationconfig"},"CacheEffectingOperationConfig"),"[]"),(0,a.kt)("p",null,"Invalidate the cache when a specific operation is done without an error"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L939"},"packages/types/src/config.ts:939")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ttl"},"ttl"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"ttl"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Specified in seconds, the time-to-live (TTL) value limits the lifespan"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L943"},"packages/types/src/config.ts:943")))}f.isMDXComponent=!0}}]);