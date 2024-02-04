"use strict";(()=>{var e={};e.id=350,e.ids=[350],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},9463:(e,t,n)=>{n.r(t),n.d(t,{config:()=>d,default:()=>u,routeModule:()=>l});var o={};n.r(o),n.d(o,{default:()=>c});var a=n(1802),r=n(7153),i=n(6249),s=n(7245);async function c(e,t){let{db:n}=await (0,s.v)();switch(e.method){case"POST":let o=await n.collection("contacts").insertOne(e.body);t.status(201).json(o.ops[0]);break;case"GET":let a=await n.collection("contacts").find({}).toArray();t.status(200).json(a);break;default:t.setHeader("Allow",["POST","GET"]),t.status(405).end(`Method ${e.method} Not Allowed`)}}let u=(0,i.l)(o,"default"),d=(0,i.l)(o,"config"),l=new a.PagesAPIRouteModule({definition:{kind:r.x.PAGES_API,page:"/api/contact/contacts",pathname:"/api/contact/contacts",bundlePath:"",filename:""},userland:o})},7245:(e,t,n)=>{n.d(t,{v:()=>a});let o=new(require("mongodb")).MongoClient(process.env.MONGODB_URI,{useNewUrlParser:!0,useUnifiedTopology:!0});async function a(){return o.isConnected()||await o.connect(),{db:o.db(process.env.DB_NAME),client:o}}},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var n=t(t.s=9463);module.exports=n})();