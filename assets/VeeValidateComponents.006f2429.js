var e=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,s=Object.assign;import{F as l,a as t,E as o}from"./vee-validate.esm.018add5e.js";import{_ as n,a as i}from"./Prism.2548265e.js";import{o as u,c as m,u as c,g as d,b as p}from"./vendor.e9031a59.js";const f=p("label",{for:"email",class:"label"},"E-Mail",-1),b=p("label",{for:"name",class:"label"},"Name",-1),v=p("button",{type:"submit",class:"submit"},"Send!",-1),j={expose:[],setup(j){const g=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function y(e){return!!e||"This field is required"}function O(e){return!!g.test(e)||"E-Mail is not valid"}return(j,g)=>(u(),m(c(l),{class:"container"},{default:d((l=>{var{errors:u}=l,m=((s,l)=>{var t={};for(var o in s)e.call(s,o)&&l.indexOf(o)<0&&(t[o]=s[o]);if(null!=s&&a)for(var o of a(s))l.indexOf(o)<0&&r.call(s,o)&&(t[o]=s[o]);return t})(l,["errors"]);return[p(i,null,{code:d((()=>[p(n,{language:"javascript",code:s({errors:u},m)},null,8,["code"])])),default:d((()=>[p("div",{class:["inputGrid",u.email&&"error"]},[p(c(t),{id:"email",name:"email",placeholder:"you@vuejs.hamburg",class:"input",rules:O}),f,p(c(o),{name:"email",class:"errorMessage"})],2),p("div",{class:["inputGrid",u.name&&"error"]},[p(c(t),{id:"name",name:"name",placeholder:"Name",class:"input",rules:y}),b,p(c(o),{name:"name",class:"errorMessage"})],2),v])),_:2},1024)]})),_:1}))}};export default j;
