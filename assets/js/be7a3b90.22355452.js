(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[765],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,f=u["".concat(p,".").concat(s)]||u[s]||m[s]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8580:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(9603),a=n(120),o=(n(7378),n(5318)),i=["components"],l={},p={unversionedId:"generated-markdown/GraphQLHandler.generated",id:"generated-markdown/GraphQLHandler.generated",isDocsHomePage:!1,title:"GraphQLHandler.generated",description:"* endpoint (type: String, required) - A url or file path to your remote GraphQL endpoint.",source:"@site/docs/generated-markdown/GraphQLHandler.generated.md",sourceDirName:"generated-markdown",slug:"/generated-markdown/GraphQLHandler.generated",permalink:"/docs/generated-markdown/GraphQLHandler.generated",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/generated-markdown/GraphQLHandler.generated.md",version:"current",frontMatter:{}},d=[],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"endpoint")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String"),", required) - A url or file path to your remote GraphQL endpoint.\nIf you provide a path to a code file(js or ts),\nother options will be ignored and the schema exported from the file will be used directly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Any"),") - JSON object representing the Headers to add to the runtime of the API calls only for schema introspection\nYou can also provide ",(0,o.kt)("inlineCode",{parentName:"li"},".js")," or ",(0,o.kt)("inlineCode",{parentName:"li"},".ts")," file path that exports schemaHeaders as an object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON"),") - JSON object representing the Headers to add to the runtime of the API calls only for operation during runtime"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useGETForQueries")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Use HTTP GET for Query operations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String (GET | POST)"),") - HTTP method used for GraphQL operations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useSSEForSubscription")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Use Server Sent Events instead of WebSocket for Subscriptions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"customFetch")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Any"),") - Path to a custom W3 Compatible Fetch Implementation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"webSocketImpl")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - Path to a custom W3 Compatible WebSocket Implementation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useWebSocketLegacyProtocol")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Use legacy web socket protocol ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql-ws")," instead of the more current standard ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql-transport-ws")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"introspection")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - Path to the introspection\nYou can seperately give schema introspection"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"multipart")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Enable multipart/formdata in order to support file uploads"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"batch")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Batch requests")))}m.isMDXComponent=!0}}]);