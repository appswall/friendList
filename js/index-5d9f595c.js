import{G as f,d,r as _,S as m,e as p,j as s,B as i,w as x,f as v,$ as h,q as y,bw as C,o as g,a6 as k,a5 as w}from"./index-54a3230b.js";import{i as b}from"./index-7546c6a5.js";function B(a){return f({url:"/chat-api/user/verify_email_code",data:{code:a}})}const N={class:"flex h-full"},q={class:"px-4 m-auto space-y-4 text-center max-[400px]"},T=s("h1",{class:"text-4xl text-slate-800 dark:text-neutral-200"}," 请点击按钮确认注册 ",-1),V={class:"flex items-center justify-center text-center"},j={class:"w-[300px]"},I=d({__name:"index",setup(a){const t=_(!1),o=m(),n=h(),l=y();async function r(){try{t.value=!0;let e="";if(b(n.query.verifyCode)){const{message:c}=await B(n.query.verifyCode);e=c??""}o.success({title:"校验成功!!!",content:e,maskClosable:!1,closable:!1,positiveText:"确定",onPositiveClick:()=>{l.push("/")}})}catch(e){t.value=!1,o.error({title:"校验失败!!!",content:e.message??"error",maskClosable:!1,closable:!1,positiveText:"确定",onPositiveClick:()=>{l.push("/")}})}finally{t.value=!1}}return(e,c)=>{const u=C("Icon403");return g(),p("div",N,[s("div",q,[T,s("div",V,[s("div",j,[i(u,{class:"w-[300px]"})])]),i(v(w),{loading:t.value,type:"primary",onClick:r},{default:x(()=>[k(" 确认 ")]),_:1},8,["loading"])])])}}});export{I as default};
