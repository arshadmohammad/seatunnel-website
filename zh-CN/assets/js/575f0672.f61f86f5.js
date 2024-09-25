"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[56239],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>c});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,c=s["".concat(g,".").concat(m)]||s[m]||y[m]||r;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(58168),l=(n(96540),n(15680));const r={},i="SftpFile",o={unversionedId:"connector-v2/source/SftpFile",id:"connector-v2/source/SftpFile",title:"SftpFile",description:"Sftp file source connector",source:"@site/docs/connector-v2/source/SftpFile.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/SftpFile",permalink:"/zh-CN/docs/connector-v2/source/SftpFile",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/SftpFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"S3File",permalink:"/zh-CN/docs/connector-v2/source/S3File"},next:{title:"Sls",permalink:"/zh-CN/docs/connector-v2/source/Sls"}},g={},p=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"file_format_type string",id:"file_format_type-string",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"archive_compress_codec string",id:"archive_compress_codec-string",level:3},{value:"encoding string",id:"encoding-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"How to Create a Sftp Data Synchronization Jobs",id:"how-to-create-a-sftp-data-synchronization-jobs",level:2}],d={toc:p},s="wrapper";function y(e){let{components:t,...n}=e;return(0,l.yg)(s,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"sftpfile"},"SftpFile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Sftp file source connector")),(0,l.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"key-features"},"Key Features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format type",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","xml"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","binary")))),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Read data from sftp file server."),(0,l.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.yg)("p",null,"In order to use the SftpFile connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,l.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,l.yg)("th",{parentName:"tr",align:null},"Dependency"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"SftpFile"),(0,l.yg)("td",{parentName:"tr",align:null},"universal"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/connector-file-sftp"},"Download"))))),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,l.yg)("p",{parentName:"admonition"},"If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this."),(0,l.yg)("p",{parentName:"admonition"},"We made some trade-offs in order to support more file types, so we used the HDFS protocol for internal access to Sftp and this connector need some hadoop dependencies.\nIt only supports hadoop version ",(0,l.yg)("strong",{parentName:"p"},"2.9.X+"),".")),(0,l.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.yg)("p",null,"The File does not have a specific type list, and we can indicate which SeaTunnel data type the corresponding data needs to be converted to by specifying the Schema in the config."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"SHORT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIME")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"MAP")))),(0,l.yg)("h2",{id:"source-options"},"Source Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"host"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The target sftp host is required")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"port"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The target sftp port is required")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The target sftp username is required")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The target sftp password is required")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The source file path.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Please check #file_format_type below")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_filter_pattern"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Filter pattern, which used for filtering files.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"delimiter/field_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"\\001"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"delimiter")," parameter will deprecate after version 2.3.5, please use ",(0,l.yg)("strong",{parentName:"td"},"field_delimiter")," instead. ",(0,l.yg)("br",null)," Field delimiter, used to tell connector how to slice and dice fields when reading text files. ",(0,l.yg)("br",null)," Default ",(0,l.yg)("inlineCode",{parentName:"td"},"\\001"),", the same as hive's default delimiter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parse_partition_from_path"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"Control whether parse the partition keys and values from file path ",(0,l.yg)("br",null)," For example if you read a file from path ",(0,l.yg)("inlineCode",{parentName:"td"},"oss://hadoop-cluster/tmp/seatunnel/parquet/name=tyrantlucifer/age=26")," ",(0,l.yg)("br",null)," Every record data from file will be added these two fields: ",(0,l.yg)("br",null),"      name       age  ",(0,l.yg)("br",null)," tyrantlucifer  26   ",(0,l.yg)("br",null)," Tips: ",(0,l.yg)("strong",{parentName:"td"},"Do not define partition fields in schema option"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"date_format"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"yyyy-MM-dd"),(0,l.yg)("td",{parentName:"tr",align:null},"Date type format, used to tell connector how to convert string to date, supported as the following formats: ",(0,l.yg)("br",null)," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy.MM.dd")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy/MM/dd")," ",(0,l.yg)("br",null)," default ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"datetime_format"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss"),(0,l.yg)("td",{parentName:"tr",align:null},"Datetime type format, used to tell connector how to convert string to datetime, supported as the following formats: ",(0,l.yg)("br",null)," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy.MM.dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy/MM/dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyyMMddHHmmss")," ",(0,l.yg)("br",null)," default ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"time_format"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"HH:mm:ss"),(0,l.yg)("td",{parentName:"tr",align:null},"Time type format, used to tell connector how to convert string to time, supported as the following formats: ",(0,l.yg)("br",null)," ",(0,l.yg)("inlineCode",{parentName:"td"},"HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"td"},"HH:mm:ss.SSS")," ",(0,l.yg)("br",null)," default ",(0,l.yg)("inlineCode",{parentName:"td"},"HH:mm:ss"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"skip_header_row_number"),(0,l.yg)("td",{parentName:"tr",align:null},"Long"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"Skip the first few lines, but only for the txt and csv. ",(0,l.yg)("br",null)," For example, set like following: ",(0,l.yg)("br",null)," ",(0,l.yg)("inlineCode",{parentName:"td"},"skip_header_row_number = 2")," ",(0,l.yg)("br",null)," then SeaTunnel will skip the first 2 lines from source files")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"read_columns"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The read column list of the data source, user can use it to implement field projection.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sheet_name"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Reader the sheet of the workbook,Only used when file_format is excel.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_row_tag"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Specifies the tag name of the data rows within the XML file, only used when file_format is xml.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_use_attr_format"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Specifies whether to process data using the tag attribute format, only used when file_format is xml.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema"),(0,l.yg)("td",{parentName:"tr",align:null},"Config"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Please check #schema below")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"None"),(0,l.yg)("td",{parentName:"tr",align:null},"The compress codec of files and the details that supported as the following shown: ",(0,l.yg)("br",null)," - txt: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"None")," ",(0,l.yg)("br",null)," - json: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"None")," ",(0,l.yg)("br",null)," - csv: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"None")," ",(0,l.yg)("br",null)," - orc: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"snappy")," ",(0,l.yg)("inlineCode",{parentName:"td"},"lz4")," ",(0,l.yg)("inlineCode",{parentName:"td"},"zlib")," ",(0,l.yg)("inlineCode",{parentName:"td"},"None")," ",(0,l.yg)("br",null)," - parquet: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"snappy")," ",(0,l.yg)("inlineCode",{parentName:"td"},"lz4")," ",(0,l.yg)("inlineCode",{parentName:"td"},"gzip")," ",(0,l.yg)("inlineCode",{parentName:"td"},"brotli")," ",(0,l.yg)("inlineCode",{parentName:"td"},"zstd")," ",(0,l.yg)("inlineCode",{parentName:"td"},"None")," ",(0,l.yg)("br",null)," Tips: excel type does Not support any compression format")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"archive_compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"none"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"encoding"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"UTF-8"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"td",href:"../source-common-options.md"},"Source Common Options")," for details.")))),(0,l.yg)("h3",{id:"file_format_type-string"},"file_format_type ","[string]"),(0,l.yg)("p",null,"File type, supported as the following file types:\n",(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"p"},"json")," ",(0,l.yg)("inlineCode",{parentName:"p"},"excel")," ",(0,l.yg)("inlineCode",{parentName:"p"},"xml")," ",(0,l.yg)("inlineCode",{parentName:"p"},"binary"),"\nIf you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option to tell connector how to parse data to the row you want.\nFor example:\nupstream data is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{"code":  200, "data":  "get success", "success":  true}\n')),(0,l.yg)("p",null,"You can also save multiple pieces of data in one file and split them by newline:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'{"code":  200, "data":  "get success", "success":  true}\n{"code":  300, "data":  "get failed", "success":  false}\n')),(0,l.yg)("p",null,"you should assign schema as the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},"schema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n")),(0,l.yg)("p",null,"connector will generate data as the following:\n| code |    data     | success |\n|------|-------------|---------|\n| 200  | get success | true    |\nIf you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc"),", schema option not required, connector can find the schema of upstream data automatically.\nIf you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv"),", you can choose to specify the schema information or not.\nFor example, upstream data is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"tyrantlucifer#26#male\n")),(0,l.yg)("p",null,"If you do not assign data schema connector will treat the upstream data as the following:\n|        content        |\n|-----------------------|\n| tyrantlucifer#26#male |\nIf you assign data schema, you should also assign the option ",(0,l.yg)("inlineCode",{parentName:"p"},"field_delimiter")," too except CSV file type\nyou should assign schema and delimiter as the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'field_delimiter = "#"\nschema {\n    fields {\n        name = string\n        age = int\n        gender = string \n    }\n}\n')),(0,l.yg)("p",null,"connector will generate data as the following:\n|     name      | age | gender |\n|---------------|-----|--------|\n| tyrantlucifer | 26  | male   |"),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"binary"),", SeaTunnel can synchronize files in any format,\nsuch as compressed packages, pictures, etc. In short, any files can be synchronized to the target place.\nUnder this requirement, you need to ensure that the source and sink use ",(0,l.yg)("inlineCode",{parentName:"p"},"binary")," format for file synchronization\nat the same time."),(0,l.yg)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,l.yg)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"txt: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"json: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"csv: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"orc/parquet:",(0,l.yg)("br",{parentName:"li"}),"automatically recognizes the compression type, no additional settings required.")),(0,l.yg)("h3",{id:"archive_compress_codec-string"},"archive_compress_codec ","[string]"),(0,l.yg)("p",null,"The compress codec of archive files and the details that supported as the following shown:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"archive_compress_codec"),(0,l.yg)("th",{parentName:"tr",align:null},"file_format"),(0,l.yg)("th",{parentName:"tr",align:null},"archive_compress_suffix"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ZIP"),(0,l.yg)("td",{parentName:"tr",align:null},"txt,json,excel,xml"),(0,l.yg)("td",{parentName:"tr",align:null},".zip")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TAR"),(0,l.yg)("td",{parentName:"tr",align:null},"txt,json,excel,xml"),(0,l.yg)("td",{parentName:"tr",align:null},".tar")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TAR_GZ"),(0,l.yg)("td",{parentName:"tr",align:null},"txt,json,excel,xml"),(0,l.yg)("td",{parentName:"tr",align:null},".tar.gz")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NONE"),(0,l.yg)("td",{parentName:"tr",align:null},"all"),(0,l.yg)("td",{parentName:"tr",align:null},".*")))),(0,l.yg)("h3",{id:"encoding-string"},"encoding ","[string]"),(0,l.yg)("p",null,"Only used when file_format_type is json,text,csv,xml.\nThe encoding of the file to read. This param will be parsed by ",(0,l.yg)("inlineCode",{parentName:"p"},"Charset.forName(encoding)"),"."),(0,l.yg)("h3",{id:"schema-config"},"schema ","[config]"),(0,l.yg)("h4",{id:"fields-config"},"fields ","[Config]"),(0,l.yg)("p",null,"The schema of upstream data."),(0,l.yg)("h2",{id:"how-to-create-a-sftp-data-synchronization-jobs"},"How to Create a Sftp Data Synchronization Jobs"),(0,l.yg)("p",null,"The following example demonstrates how to create a data synchronization job that reads data from sftp and prints it on the local client:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'# Set the basic configuration of the task to be performed\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\n# Create a source to connect to sftp\nsource {\n  SftpFile {\n    host = "sftp"\n    port = 22\n    user = seatunnel\n    password = pass\n    path = "tmp/seatunnel/read/json"\n    file_format_type = "json"\n    result_table_name = "sftp"\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_bytes = bytes\n        c_date = date\n        c_decimal = "decimal(38, 18)"\n        c_timestamp = timestamp\n        c_row = {\n          C_MAP = "map<string, string>"\n          C_ARRAY = "array<int>"\n          C_STRING = string\n          C_BOOLEAN = boolean\n          C_TINYINT = tinyint\n          C_SMALLINT = smallint\n          C_INT = int\n          C_BIGINT = bigint\n          C_FLOAT = float\n          C_DOUBLE = double\n          C_BYTES = bytes\n          C_DATE = date\n          C_DECIMAL = "decimal(38, 18)"\n          C_TIMESTAMP = timestamp\n        }\n      }\n    }\n  }\n}\n\n# Console printing of the read sftp data\nsink {\n  Console {\n    parallelism = 1\n  }\n}\n')))}y.isMDXComponent=!0}}]);