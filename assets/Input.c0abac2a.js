import{z as e,l as r,x as a,o as s,c as t,I as l,K as n,b as o,L as i,t as p,M as d}from"./vendor.e9031a59.js";const u=e({inheritAttrs:!1,props:{type:{type:String,default:"text"},value:{type:String,require:!0},name:{type:String,required:!0},label:{type:String,required:!0},errorMessage:{type:String,default:""},placeholder:{type:String,default:""}},setup:(e,s)=>({hasError:r((()=>!!e.errorMessage)),innerValue:a(e.value)})}),c={key:0,class:"errorMessage"};u.render=function(e,r,a,u,y,g){return s(),t("div",{class:["inputGrid",e.hasError&&"error"]},[l(o("input",i({"onUpdate:modelValue":r[1]||(r[1]=r=>e.innerValue=r)},e.$attrs,{type:e.type,class:"input",id:e.name,name:"password",placeholder:e.placeholder}),null,16,["type","id","placeholder"]),[[n,e.innerValue]]),o("label",{for:e.name,class:"label"},p(e.label),9,["for"]),e.hasError?(s(),t("div",c,p(e.errorMessage),1)):d("",!0)],2)};export{u as _};
