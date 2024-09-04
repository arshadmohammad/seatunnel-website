"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[23318],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=o,d=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return t?r.createElement(d,c(c({ref:n},m),{},{components:t})):r.createElement(d,c({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},7002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const a={},c="CDC Compatible Debezium-json",s={unversionedId:"connector-v2/formats/cdc-compatible-debezium-json",id:"connector-v2/formats/cdc-compatible-debezium-json",title:"CDC Compatible Debezium-json",description:"SeaTunnel supports to interpret cdc record as Debezium-JSON messages publish to mq(kafka) system.",source:"@site/docs/connector-v2/formats/cdc-compatible-debezium-json.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/cdc-compatible-debezium-json",permalink:"/docs/connector-v2/formats/cdc-compatible-debezium-json",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/formats/cdc-compatible-debezium-json.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Canal Format",permalink:"/docs/connector-v2/formats/canal-json"},next:{title:"Debezium Format",permalink:"/docs/connector-v2/formats/debezium-json"}},i={},l=[{value:"MySQL-CDC Sink Kafka",id:"mysql-cdc-sink-kafka",level:2}],m={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"cdc-compatible-debezium-json"},"CDC Compatible Debezium-json"),(0,o.yg)("p",null,"SeaTunnel supports to interpret cdc record as Debezium-JSON messages publish to mq(kafka) system."),(0,o.yg)("p",null,"This is useful in many cases to leverage this feature, such as compatible with the debezium ecosystem."),(0,o.yg)("h1",{id:"how-to-use"},"How To Use"),(0,o.yg)("h2",{id:"mysql-cdc-sink-kafka"},"MySQL-CDC Sink Kafka"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 15000\n}\n\nsource {\n  MySQL-CDC {\n    result_table_name = "table1"\n\n    base-url="jdbc:mysql://localhost:3306/test"\n    "startup.mode"=INITIAL\n    table-names=[\n        "database1.t1",\n        "database1.t2",\n        "database2.t1"\n    ]\n\n    # compatible_debezium_json options\n    format = compatible_debezium_json\n    debezium = {\n        # include schema into kafka message\n        key.converter.schemas.enable = false\n        value.converter.schemas.enable = false\n        # include ddl\n        include.schema.changes = true\n        # topic prefix\n        database.server.name =  "mysql_cdc_1"\n    }\n  }\n}\n\nsink {\n  Kafka {\n    source_table_name = "table1"\n\n    bootstrap.servers = "localhost:9092"\n\n    # compatible_debezium_json options\n    format = compatible_debezium_json\n  }\n}\n')))}p.isMDXComponent=!0}}]);