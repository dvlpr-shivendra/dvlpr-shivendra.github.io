import{_ as c}from"./CPGNDWjK.js";import{f as l,n as s,G as m,I as f}from"./Cck5pgX_.js";import"./Bjp8ivCW.js";import"./C-v3KzvZ.js";import"./BneCoJRQ.js";import"./BbMUgo4F.js";import"./DvDH6DOc.js";const p=l({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){s(()=>t.excerpt,n=>{var e,i,a;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(i=t==null?void 0:t.value)==null?void 0:i._path}.${(a=t==null?void 0:t.value)==null?void 0:a._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var u,o;const n=m(),{value:e,excerpt:i,tag:a}=t,r=i?e==null?void 0:e.excerpt:e==null?void 0:e.body;return!((u=r==null?void 0:r.children)!=null&&u.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:i,tag:a,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:i,tag:a,...this.$attrs}):(r==null?void 0:r.type)==="root"&&((o=r==null?void 0:r.children)!=null&&o.length)?f(c,{value:e,excerpt:i,tag:a,...this.$attrs}):f("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:i,tag:a},null,2))}});export{p as default};
