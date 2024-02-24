"use strict";(self.webpackChunktrabajo_manuales=self.webpackChunktrabajo_manuales||[]).push([[38],{2363:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var a=n(4848),r=n(8453);const t={},s="Pasos de Instalacin",d={id:"manual-facturador/pasos-instalacion",title:"Pasos de Instalacin",description:'- Para instalar debe ejecutar el script evitando instalar el SSL, le ser\xe1 consultado en el proceso y deber\xe1 ingresar "n".',source:"@site/docs/manual-facturador/pasos-instalacion.md",sourceDirName:"manual-facturador",slug:"/manual-facturador/pasos-instalacion",permalink:"/TrabajoCasodos/docs/manual-facturador/pasos-instalacion",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/manual-facturador/pasos-instalacion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manual de Instalacion para Facturador",permalink:"/TrabajoCasodos/docs/category/manual-de-instalacion-para-facturador"}},l={},c=[];function i(A){const e={code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...A.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"pasos-de-instalacin",children:"Pasos de Instalacin"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Para instalar debe ejecutar el script evitando instalar el SSL, le ser\xe1 consultado en el proceso y deber\xe1 ingresar ",(0,a.jsx)(e.code,{children:'"n"'}),"."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Finalizada la instalaci\xf3n debe dirigirse a la ruta de instalaci\xf3n:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"cd /root/facturadorpro31/\n"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Debe editar el archivo ",(0,a.jsx)(e.code,{children:".env"})]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"nano .env\n"})}),"\n",(0,a.jsx)(e.p,{children:"Dentro del editor ubicar los par\xe1metros y cambiarlos:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"TABLE",src:n(2163).A+"",width:"712",height:"252"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Una vez finalizado, guarde y salga del editor."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Ejecute los siguientes comandos para eliminar la cach\xe9 de la aplicaci\xf3n."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"php artisan config:Cache\n"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Con eso habr\xe1 completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podr\xe1 acceder a la herramienta."}),"\n"]}),"\n",(0,a.jsx)(e.h1,{id:"importante",children:"Importante"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta"}),"\n"]})]})}function u(A={}){const{wrapper:e}={...(0,r.R)(),...A.components};return e?(0,a.jsx)(e,{...A,children:(0,a.jsx)(i,{...A})}):i(A)}},2163:(A,e,n)=>{n.d(e,{A:()=>a});const a="data:image/png;base64,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"},8453:(A,e,n)=>{n.d(e,{R:()=>s,x:()=>d});var a=n(6540);const r={},t=a.createContext(r);function s(A){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function d(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(r):A.components||r:s(A.components),a.createElement(t.Provider,{value:e},A.children)}}}]);