"use strict";(()=>{var e={};e.id=7,e.ids=[7],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},1839:(e,t,n)=>{n.r(t),n.d(t,{config:()=>P,default:()=>f,routeModule:()=>p});var r={};n.r(r),n.d(r,{default:()=>c});var i=n(1802),s=n(7153),a=n(6249),o=n(7245);let u=require("bcryptjs");var d=n.n(u);async function l(e){return d().hash(e,12)}async function c(e,t){if("POST"!==e.method)return t.status(405).end("Method Not Allowed");let{db:n}=await (0,o.v)(),{email:r,username:i,password:s}=e.body;if(await n.collection("users").findOne({email:r}))return t.status(409).json({message:"User already exists"});let a=await l(s),u=await n.collection("users").insertOne({email:r,username:i,password:a});t.status(201).json({message:"User created",userId:u.insertedId})}let f=(0,a.l)(r,"default"),P=(0,a.l)(r,"config"),p=new i.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/auth/register",pathname:"/api/auth/register",bundlePath:"",filename:""},userland:r})},7245:(e,t,n)=>{n.d(t,{v:()=>i});let r=new(require("mongodb")).MongoClient(process.env.MONGODB_URI,{useNewUrlParser:!0,useUnifiedTopology:!0});async function i(){return r.isConnected()||await r.connect(),{db:r.db(process.env.DB_NAME),client:r}}},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var n=t(t.s=1839);module.exports=n})();