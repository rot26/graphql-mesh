(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[3901],{5318:function(e,r,n){"use strict";n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(7378);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),m=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=m(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),f=a,d=c["".concat(l,".").concat(f)]||c[f]||u[f]||i;return n?t.createElement(d,o(o({ref:r},p),{},{components:n})):t.createElement(d,o({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4964:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var t=n(9603),a=n(120),i=(n(7378),n(5318)),o=["components"],s={id:"filter-schema",title:"Filter Schema Transform",sidebar_label:"Filter Schema"},l={unversionedId:"transforms/filter-schema",id:"transforms/filter-schema",isDocsHomePage:!1,title:"Filter Schema Transform",description:"The filterSchema transform allows you to filter fields in specific types.",source:"@site/docs/transforms/filter-schema.md",sourceDirName:"transforms",slug:"/transforms/filter-schema",permalink:"/docs/transforms/filter-schema",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/transforms/filter-schema.md",version:"current",sidebar_label:"Filter Schema",frontMatter:{id:"filter-schema",title:"Filter Schema Transform",sidebar_label:"Filter Schema"},sidebar:"sidebar",previous:{title:"Apollo Federation Transform",permalink:"/docs/transforms/federation"},next:{title:"Naming Convention Transform",permalink:"/docs/transforms/naming-convention"}},m=[{value:"How to use?",id:"how-to-use",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],p={toc:m};function u(e){var r=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"filterSchema")," transform allows you to filter fields in specific types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add @graphql-mesh/transform-filter-schema\n")),(0,i.kt)("h2",{id:"how-to-use"},"How to use?"),(0,i.kt)("p",null,"Add the following configuration to your Mesh config file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"transforms:\n  - filterSchema:\n      mode: bare | wrap\n      filters:\n        - Type.!User # <-- This will remove `User` type\n        - Type.!{User, Post} # <-- This will remove `User` and `Post` types\n\n        - Query.!admins # <-- This will remove field `admins` from `Query` type\n        - Mutation.!{addUser, removeUser} # <-- This will remove fields `addUser` and `removeUser` from `Mutation` type\n        - User.{id, username, name, age} # <-- This will remove all fields, from User type, except `id`, `username`, `name` and `age`\n\n        - Query.user.id # <-- This will remove all args from field `user`, in Query type, except `id` only\n        - Query.user.!name # <-- This will remove argument `id` from field `user`, in Query type\n        - Query.user.{id, name} # <-- This will remove all args for field `user`, in Query type, except `id` and `name`\n        - Query.user.!{id, name} # <-- This will remove args `id` and `name` from field `user`, in Query type\n")),(0,i.kt)("p",null,"Let's assume you have the following schema,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  me: User\n  users: [User]\n  user(id: ID, name: String): User\n  admins: [User]\n}\n\ntype Mutation {\n  updateMyProfile(name: String, age: Int): User\n  addUser(username: String, name: String, age: Int): User\n  removeUser(id: ID): ID\n}\n\ntype User {\n  id: ID\n  username: String\n  password: String\n  name: String\n  age: Int\n  ipAddress: String\n}\n\ntype LooseType {\n  foo: String\n  bar: String\n}\n")),(0,i.kt)("p",null,"With the following Filter Schema config,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"transforms:\n  - filterSchema:\n      mode: bare | wrap\n      filters:\n        - Type.!LooseType\n        - Query.!admins\n        - Mutation.!{addUser, removeUser}\n        - User.{username, name, age}\n        - Query.user.!name\n")),(0,i.kt)("p",null,"It would become the following schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  me: User\n  users: [User]\n  user(id: ID): User\n}\n\ntype Mutation {\n  updateMyProfile(name: String, age: Int): User\n}\n\ntype User {\n  username: String\n  name: String\n  age: Int\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'For information about "bare" and "wrap" modes, please read the ',(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/mesh-transforms#two-different-modes"},"dedicated section"),".")),(0,i.kt)("h2",{id:"config-api-reference"},"Config API Reference"),(0,i.kt)("p",null,(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mode")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String (bare | wrap)"),") - Specify to apply filter-schema transforms to bare schema or by wrapping original schema"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filters")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Array of String"),", required) - Array of filter rules"))))}u.isMDXComponent=!0}}]);