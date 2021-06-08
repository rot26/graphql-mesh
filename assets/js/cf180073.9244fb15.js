(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[5682],{5318:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7377:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=t(9603),o=t(120),a=(t(7378),t(5318)),i=["components"],l={id:"federation",title:"Apollo Federation",sidebar_label:"Apollo Federation"},c={unversionedId:"recipes/federation",id:"recipes/federation",isDocsHomePage:!1,title:"Apollo Federation",description:"You can use Apollo Federation as a merging strategy in favor of Schema Stitching approach.",source:"@site/docs/recipes/federation.md",sourceDirName:"recipes",slug:"/recipes/federation",permalink:"/docs/recipes/federation",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/recipes/federation.md",version:"current",sidebar_label:"Apollo Federation",frontMatter:{id:"federation",title:"Apollo Federation",sidebar_label:"Apollo Federation"},sidebar:"sidebar",previous:{title:"Mesh as Gateway",permalink:"/docs/recipes/as-gateway"},next:{title:"Introspection cache",permalink:"/docs/recipes/introspection-cache"}},s=[],p={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://storage.googleapis.com/xebia-blog/1/2019/10/apollo-federation.jpg",width:"300",alt:"Apollo Federation"}),(0,a.kt)("br",null)),(0,a.kt)("p",null,"You can use Apollo Federation as a merging strategy in favor of Schema Stitching approach."),(0,a.kt)("p",null,"To get started, install the merger library from NPM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ yarn add @graphql-mesh/merger-federation\n")),(0,a.kt)("p",null,"Now, you can use it directly in your Mesh config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"merger: federation # Define federation as a merging strategy\nsources:\n  - name: accounts # Add a non-federated GraphQL Source\n    handler:\n      graphql:\n        endpoint: http://localhost:4001/graphql\n    transforms: # Transform it to a federated schema\n      - federation:\n          types:\n            - name: Query\n              config:\n                extend: true\n            - name: User\n              config:\n                keyFields:\n                  - id\n                resolveReference: ./services/accounts/user-reference-resolver\n  - name: reviews # You can also use a federated schema\n    handler:\n      graphql:\n        endpoint: http://localhost:4002/graphql\n  - name: products\n    handler:\n      graphql:\n        endpoint: http://localhost:4003/graphql\n  - name: inventory\n    handler:\n      graphql:\n        endpoint: http://localhost:4004/graphql\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can ",(0,a.kt)("a",{parentName:"p",href:"/docs/transforms/federation"},"check out documentation of federation transformer")," to learn more about adding federation metadata to a non-federated GraphQL Schema.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can check out our example that uses Federation as a merging strategy.")),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/federation-example?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"federation-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}d.isMDXComponent=!0}}]);