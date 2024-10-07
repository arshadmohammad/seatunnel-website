"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[18248],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=l,d=c["".concat(p,".").concat(m)]||c[m]||g[m]||r;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46335:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(58168),l=(t(96540),t(15680));const r={},i="\u642d\u5efa\u5f00\u53d1\u73af\u5883",o={unversionedId:"contribution/setup",id:"contribution/setup",title:"\u642d\u5efa\u5f00\u53d1\u73af\u5883",description:"\u5728\u8fd9\u4e2a\u7ae0\u8282\uff0c \u6211\u4eec\u4f1a\u5411\u4f60\u5c55\u793a\u5982\u4f55\u642d\u5efa SeaTunnel \u7684\u5f00\u53d1\u73af\u5883\uff0c \u7136\u540e\u7528 JetBrains IntelliJ IDEA \u8dd1\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/contribution/setup.md",sourceDirName:"contribution",slug:"/contribution/setup",permalink:"/zh-CN/docs/contribution/setup",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/contribution/setup.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SeaTunnel Runs On Spark",permalink:"/zh-CN/docs/other-engine/spark"},next:{title:"\u5982\u4f55\u6dfb\u52a0\u65b0\u7684 License",permalink:"/zh-CN/docs/contribution/new-license"}},p={},s=[{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:2},{value:"\u514b\u9686\u6e90\u7801",id:"\u514b\u9686\u6e90\u7801",level:3},{value:"\u672c\u5730\u5b89\u88c5\u5b50\u9879\u76ee",id:"\u672c\u5730\u5b89\u88c5\u5b50\u9879\u76ee",level:3},{value:"\u6e90\u7801\u7f16\u8bd1",id:"\u6e90\u7801\u7f16\u8bd1",level:3},{value:"\u7f16\u8bd1\u5b50\u6a21\u5757",id:"\u7f16\u8bd1\u5b50\u6a21\u5757",level:3},{value:"\u5b89\u88c5 JetBrains IDEA Scala \u63d2\u4ef6",id:"\u5b89\u88c5-jetbrains-idea-scala-\u63d2\u4ef6",level:3},{value:"\u5b89\u88c5 JetBrains IDEA Lombok \u63d2\u4ef6",id:"\u5b89\u88c5-jetbrains-idea-lombok-\u63d2\u4ef6",level:3},{value:"\u4ee3\u7801\u98ce\u683c",id:"\u4ee3\u7801\u98ce\u683c",level:3},{value:"\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b",id:"\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b",level:2},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f",level:2}],u={toc:s},c="wrapper";function g(e){let{components:n,...t}=e;return(0,l.yg)(c,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u642d\u5efa\u5f00\u53d1\u73af\u5883"},"\u642d\u5efa\u5f00\u53d1\u73af\u5883"),(0,l.yg)("p",null,"\u5728\u8fd9\u4e2a\u7ae0\u8282\uff0c \u6211\u4eec\u4f1a\u5411\u4f60\u5c55\u793a\u5982\u4f55\u642d\u5efa SeaTunnel \u7684\u5f00\u53d1\u73af\u5883\uff0c \u7136\u540e\u7528 JetBrains IntelliJ IDEA \u8dd1\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u3002"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u4f60\u53ef\u4ee5\u7528\u4efb\u4f55\u4f60\u559c\u6b22\u7684\u5f00\u53d1\u73af\u5883\u8fdb\u884c\u5f00\u53d1\u548c\u6d4b\u8bd5\uff0c\u6211\u4eec\u53ea\u662f\u7528 ",(0,l.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"JetBrains IDEA"),"\n\u4f5c\u4e3a\u793a\u4f8b\u6765\u5c55\u793a\u5982\u4f55\u4e00\u6b65\u6b65\u5b8c\u6210\u8bbe\u7f6e\u3002")),(0,l.yg)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,l.yg)("p",null,"\u5728\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883\u4e4b\u524d\uff0c \u9700\u8981\u505a\u4e00\u4e9b\u51c6\u5907\u5de5\u4f5c\uff0c \u786e\u4fdd\u4f60\u5b89\u88c5\u4e86\u4ee5\u4e0b\u8f6f\u4ef6\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.yg)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.yg)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")," (\u76ee\u524d\u53ea\u652f\u6301 JDK8/JDK11) \u5e76\u4e14\u8bbe\u7f6e ",(0,l.yg)("inlineCode",{parentName:"li"},"JAVA_HOME")," \u73af\u5883\u53d8\u91cf\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.yg)("a",{parentName:"li",href:"https://www.scala-lang.org/download/2.11.12.html"},"Scala")," (\u76ee\u524d\u53ea\u652f\u6301 scala 2.11.12)\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.yg)("a",{parentName:"li",href:"https://www.jetbrains.com/idea/"},"JetBrains IDEA"),"\u3002")),(0,l.yg)("h2",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,l.yg)("h3",{id:"\u514b\u9686\u6e90\u7801"},"\u514b\u9686\u6e90\u7801"),(0,l.yg)("p",null,"\u9996\u5148\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4ece ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel"},"GitHub")," \u514b\u9686 SeaTunnel \u6e90\u4ee3\u7801\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:apache/seatunnel.git\n")),(0,l.yg)("h3",{id:"\u672c\u5730\u5b89\u88c5\u5b50\u9879\u76ee"},"\u672c\u5730\u5b89\u88c5\u5b50\u9879\u76ee"),(0,l.yg)("p",null,"\u5728\u514b\u9686\u597d\u6e90\u4ee3\u7801\u4ee5\u540e\uff0c \u8fd0\u884c ",(0,l.yg)("inlineCode",{parentName:"p"},"./mvnw")," \u547d\u4ee4\u5b89\u88c5\u5b50\u9879\u76ee\u5230 maven \u672c\u5730\u4ed3\u5e93\u76ee\u5f55\u3002 \u5426\u5219\u4f60\u7684\u4ee3\u7801\u65e0\u6cd5\u5728 IDEA \u4e2d\u6b63\u5e38\u542f\u52a8\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"./mvnw install -Dmaven.test.skip\n")),(0,l.yg)("h3",{id:"\u6e90\u7801\u7f16\u8bd1"},"\u6e90\u7801\u7f16\u8bd1"),(0,l.yg)("p",null,"\u5728\u5b89\u88c5 maven \u4ee5\u540e\uff0c \u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\u548c\u6253\u5305\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mvn clean package -pl seatunnel-dist -am -Dmaven.test.skip=true\n")),(0,l.yg)("h3",{id:"\u7f16\u8bd1\u5b50\u6a21\u5757"},"\u7f16\u8bd1\u5b50\u6a21\u5757"),(0,l.yg)("p",null,"\u5982\u679c\u8981\u5355\u72ec\u7f16\u8bd1\u5b50\u6a21\u5757\uff0c \u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\u548c\u6253\u5305\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ssh"},"# \u8fd9\u662f\u4e00\u4e2a\u5355\u72ec\u6784\u5efa redis connector \u7684\u793a\u4f8b\n\n mvn clean package -pl seatunnel-connectors-v2/connector-redis -am -DskipTests -T 1C\n")),(0,l.yg)("h3",{id:"\u5b89\u88c5-jetbrains-idea-scala-\u63d2\u4ef6"},"\u5b89\u88c5 JetBrains IDEA Scala \u63d2\u4ef6"),(0,l.yg)("p",null,"\u7528 JetBrains IntelliJ IDEA \u6253\u5f00\u4f60\u7684\u6e90\u7801\uff0c\u5982\u679c\u6709 Scala \u7684\u4ee3\u7801\uff0c\u5219\u9700\u8981\u5b89\u88c5 JetBrains IntelliJ IDEA's ",(0,l.yg)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/1347-scala"},"Scala plugin"),"\u3002\n\u53ef\u4ee5\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html#install-plugins"},"install plugins for IDEA")," \u3002"),(0,l.yg)("h3",{id:"\u5b89\u88c5-jetbrains-idea-lombok-\u63d2\u4ef6"},"\u5b89\u88c5 JetBrains IDEA Lombok \u63d2\u4ef6"),(0,l.yg)("p",null,"\u5728\u8fd0\u884c\u793a\u4f8b\u4e4b\u524d, \u5b89\u88c5 JetBrains IntelliJ IDEA \u7684 ",(0,l.yg)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/6317-lombok"},"Lombok plugin"),"\u3002\n\u53ef\u4ee5\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html#install-plugins"},"install plugins for IDEA")," \u3002"),(0,l.yg)("h3",{id:"\u4ee3\u7801\u98ce\u683c"},"\u4ee3\u7801\u98ce\u683c"),(0,l.yg)("p",null,"Apache SeaTunnel \u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"Spotless")," \u6765\u7edf\u4e00\u4ee3\u7801\u98ce\u683c\u548c\u683c\u5f0f\u68c0\u67e5\u3002\u53ef\u4ee5\u8fd0\u884c\u4e0b\u9762 ",(0,l.yg)("inlineCode",{parentName:"p"},"Spotless")," \u547d\u4ee4\u81ea\u52a8\u683c\u5f0f\u5316\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"./mvnw spotless:apply\n")),(0,l.yg)("p",null,"\u62f7\u8d1d ",(0,l.yg)("inlineCode",{parentName:"p"},"pre-commit hook")," \u6587\u4ef6 ",(0,l.yg)("inlineCode",{parentName:"p"},"/tools/spotless_check/pre-commit.sh")," \u5230\u4f60\u9879\u76ee\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},".git/hooks/")," \u76ee\u5f55\uff0c \u8fd9\u6837\u6bcf\u6b21\u4f60\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"git commit")," \u63d0\u4ea4\u4ee3\u7801\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u8c03\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"Spotless")," \u4fee\u590d\u683c\u5f0f\u95ee\u9898\u3002"),(0,l.yg)("h2",{id:"\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b"},"\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b"),(0,l.yg)("p",null,"\u5b8c\u6210\u4e0a\u9762\u6240\u6709\u7684\u5de5\u4f5c\u540e\uff0c\u73af\u5883\u642d\u5efa\u5df2\u7ecf\u5b8c\u6210\uff0c \u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u6211\u4eec\u7684\u793a\u4f8b\u4e86\u3002 \u6240\u6709\u7684\u793a\u4f8b\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"seatunnel-examples")," \u6a21\u5757\u91cc\uff0c \u4f60\u53ef\u4ee5\u968f\u610f\u9009\u62e9\u8fdb\u884c\u7f16\u8bd1\u548c\u8c03\u8bd5\uff0c\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/run-debug-configuration.html"},"running or debugging\nit in IDEA"),"\u3002"),(0,l.yg)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"seatunnel-examples/seatunnel-engine-examples/src/main/java/org/apache/seatunnel/example/engine/SeaTunnelEngineExample.java"),"\n\u4f5c\u4e3a\u793a\u4f8b, \u8fd0\u884c\u6210\u529f\u540e\u7684\u8f93\u51fa\u5982\u4e0b:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-log"},"2024-08-10 11:45:32,839 INFO  org.apache.seatunnel.core.starter.seatunnel.command.ClientExecuteCommand - \n***********************************************\n           Job Statistic Information\n***********************************************\nStart Time                : 2024-08-10 11:45:30\nEnd Time                  : 2024-08-10 11:45:32\nTotal Time(s)             :                   2\nTotal Read Count          :                   5\nTotal Write Count         :                   5\nTotal Failed Count        :                   0\n***********************************************\n")),(0,l.yg)("h2",{id:"\u66f4\u591a\u4fe1\u606f"},"\u66f4\u591a\u4fe1\u606f"),(0,l.yg)("p",null,"\u6240\u6709\u7684\u5b9e\u4f8b\u90fd\u7528\u4e86\u7b80\u5355\u7684 source \u548c sink\uff0c \u8fd9\u6837\u53ef\u4ee5\u4f7f\u5f97\u8fd0\u884c\u66f4\u72ec\u7acb\u548c\u66f4\u7b80\u5355\u3002\n\u4f60\u53ef\u4ee5\u4fee\u6539 ",(0,l.yg)("inlineCode",{parentName:"p"},"resources/examples")," \u4e2d\u7684\u793a\u4f8b\u7684\u914d\u7f6e\u3002 \u4f8b\u5982\u4e0b\u9762\u7684\u914d\u7f6e\u4f7f\u7528 PostgreSQL \u4f5c\u4e3a\u6e90\uff0c\u5e76\u4e14\u8f93\u51fa\u5230\u63a7\u5236\u53f0\u3002\n\u8bf7\u6ce8\u610f\u5f15\u7528FakeSource \u548c Console \u4ee5\u5916\u7684\u8fde\u63a5\u5668\u65f6\uff0c\u9700\u8981\u4fee\u6539seatunnel-example\u5bf9\u5e94\u5b50\u6a21\u5757\u4e0b\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"pom.xml"),"\u6587\u4ef6\u4e2d\u7684\u4f9d\u8d56\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-conf"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\nsource {\n    Jdbc {\n        driver = org.postgresql.Driver\n        url = "jdbc:postgresql://host:port/database"\n        username = postgres\n        password = "123456"\n        query = "select * from test"\n        table_path = "database.test"\n    }\n}\n\nsink {\n  Console {}\n}\n')))}g.isMDXComponent=!0}}]);