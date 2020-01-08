(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{oPh6:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var r=n("/FXl"),o=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/guides/type-safety.mdx"}});var s={_frontmatter:l},i=o.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(i,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"type-safety"},"Type safety"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Fielder is written in TypeScript and supports type safety out of the box"),"."),Object(r.b)("h2",{id:"why-to-use-types"},"Why to use types"),Object(r.b)("p",null,"By using types with Fielder, you can:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Enforce field types (setters and return values)"),Object(r.b)("li",{parentName:"ul"},"Enforce field names (prevent typos)")),Object(r.b)("h2",{id:"basic-typing"},"Basic typing"),Object(r.b)("p",null,"In order to begin, you'll need to create an interface/type which demonstrates all the fields which could be mounted in your form."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-ts"}),"interface MyFormState {\n  username: string;\n  password: string;\n  saveCredentials: boolean;\n}\n")),Object(r.b)("p",null,"Now, when calling ",Object(r.b)("inlineCode",{parentName:"p"},"useField"),", ",Object(r.b)("inlineCode",{parentName:"p"},"useForm"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"useFormContext"),", pass your form state as a generic."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-tsx"}),"const [fieldProps] = useField<MyFormState>({ name: 'password' });\n")),Object(r.b)("h2",{id:"advanced-typing"},"Advanced typing"),Object(r.b)("p",null,"If you prefer not to manually type every hook call, you can re-export them."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You'll want to follow this process for each form you create.")),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"fielder.ts")," file alongside your form's root component and copy the example below."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-ts"}),"import { typedHooks } from 'fielder'\nimport { FormType } from './types';\n\nexport const { useField, useForm, useFormContext } = typedHooks<FormType>();\n")),Object(r.b)("p",null,"Now when using any of the ",Object(r.b)("em",{parentName:"p"},"Fielder")," hooks, import them from the file you just created."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-tsx"}),"import { useField } from '../fielder';\n\n// ...\nconst [fieldProps] = useField({\n  name: 'invalidName' // Type error!\n})\n")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/guides/type-safety.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-guides-type-safety-mdx-4db2a48647db31d1ba38.js.map