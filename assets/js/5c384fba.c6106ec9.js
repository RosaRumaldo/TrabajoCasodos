"use strict";(self.webpackChunktrabajo_manuales=self.webpackChunktrabajo_manuales||[]).push([[211],{1288:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>t});var a=s(4848),r=s(8453);const o={},i="Manual de Instalaci\xf3n",c={id:"manual-docker/pasos-install",title:"Manual de Instalaci\xf3n",description:"1. Acceder a su instancia via SSH.",source:"@site/docs/manual-docker/pasos-install.md",sourceDirName:"manual-docker",slug:"/manual-docker/pasos-install",permalink:"/TrabajoCasodos/docs/manual-docker/pasos-install",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/manual-docker/pasos-install.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Descripci\xf3n",permalink:"/TrabajoCasodos/docs/manual-docker/descripcion"},next:{title:"Recomendaciones",permalink:"/TrabajoCasodos/docs/manual-docker/recomendaciones"}},l={},t=[];function d(e){const n={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"manual-de-instalaci\xf3n",children:"Manual de Instalaci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"1."})," Acceder a su instancia via SSH."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"2."})," Loguearse como super usuario ejecute ",(0,a.jsx)(n.strong,{children:"sudo su"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"3."})," Ubicarse en la carpeta del usuario, por ejemplo"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd /home/ubuntu/\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"4."})," Crear el archivo install ejecute:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"touch install.sh\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"5."})," Editar el archivo con su editor preferido ejecute"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nano install.sh\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"6."})," En el archivo debe agregar el contenido del siguiente enlace:\r\n",(0,a.jsx)(n.a,{href:"https://gitlab.com/-/snippets/1852652",children:"https://gitlab.com/snippets/1852652"}),"\r\nObservar\xe1 a una p\xe1gina como la siguiente, donde debe copiar el contenido del script y pegarlo en su archivo install.sh, es importante que mantenga las estructura del mismo."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"SCRIPT DOCKER",src:s(1127).A+"",width:"1110",height:"597"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"7."})," Para salir de editor y guardar puede presionar ",(0,a.jsx)(n.code,{children:"\u201cctrl + x\u201d"}),"  seguidamente se le consultar\xe1 si desea guardar los cambios, confirme con ",(0,a.jsx)(n.code,{children:"\u201cy\u201d"})," y luego ",(0,a.jsx)(n.code,{children:"\u201center\u201d"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"8."})," Debe darle permisos de ejecuci\xf3n al archivo:\r\nejecute ",(0,a.jsx)(n.code,{children:"chmod +x install.sh"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"9."})," El comando a utilizar requiere de dos par\xe1metros principalmente:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"./install.sh [repositorio] [dominio]"})}),"\n",(0,a.jsx)(n.p,{children:"por ejemplo:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"./install.sh https://gitlab.com/rash07/facturadorpro2 elfacturador.com"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"10."})," Una vez ejecutado el comando se iniciar\xe1 un proceso donde debe ir aceptando las preguntas y que le mostrar\xe1 en pantalla los valores que debe a\xf1adir en los 2 r\xe9cords tipo TXT de su dominio con nombre:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"_acme-challenge.example.com"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"_acme-challenge (casos como godday y puntope)"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"en la siguiente imagen le muestran el valor como v703JW.... debera copiarlo y a\xf1adirlo al primer record TXT, seguidamente pulsar enter, se le mostrar\xe1 en pantalla un segundo valor para el segundo TXT"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"DNS TXT",src:s(9461).A+"",width:"709",height:"169"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"11."}),"\tEditados los r\xe9cords en su dominio, deber\xe1 aceptar para continuar y que el proceso verifique que sea exitoso, de ser exitoso obtendr\xe1 una pantalla similar a la siguiente:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"NOTES",src:s(947).A+"",width:"688",height:"343"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"12."})," Continuar\xe1 el proceso de actualizaci\xf3n del sistema, se le solicitar\xe1 el usuario y contrase\xf1a de GitLab, para que se pueda clonar/descargar el proyecto en su instancia, luego culminar\xe1 y tendr\xe1 los accesos listos en su dominio:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Correo: ",(0,a.jsx)(n.a,{href:"mailto:admin@gmail.com",children:"admin@gmail.com"})]}),"\n",(0,a.jsx)(n.li,{children:"Contrase\xf1a: 123456"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Una vez finalizado, puede proseguir con el manual de pruebas o dem\xe1s documentaci\xf3n de cada proyecto, sus URL son:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"PRO1:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://gitlab.com/rash07/facturadorpro1",children:"https://gitlab.com/rash07/facturadorpro1"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"PRO2:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://gitlab.com/rash07/facturadorpro2",children:"https://gitlab.com/rash07/facturadorpro2"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1127:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/punto1-3b2b62ebefd41bcf0946970091dc84d7.png"},9461:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/punto3-5cab856f51493ec8d6ae2cf99e710c69.png"},947:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/punto5-98ed7c25aa8d9fb3a927bcdf246ef5b4.png"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var a=s(6540);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);