(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{171:function(e,t,c){},267:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(26),n=c.n(s),r=(c(171),c(32)),i=c(27),l=c(270),o=c(272),j=c(279),d=c(42),h=c(276),b=c(160),u=c(278),O=c(280),x=c(281),p=c(282),m=c(283),v=c(284),g=c.p+"static/media/cryptocurrency.1548aced.png",y=c(5);var f=function(){var e=Object(a.useState)(),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),i=Object(d.a)(n,2),l=i[0],j=i[1];return Object(a.useEffect)((function(){var e=function(){s(window.innerWith),j(!0)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){j(!(c<768))}),[c]),Object(y.jsxs)("div",{className:"nav-container",children:[Object(y.jsxs)("div",{className:"logo-container",children:[Object(y.jsx)(h.a,{src:g,size:"large"}),Object(y.jsx)(o.a.Title,{level:2,className:"logo",children:Object(y.jsx)(r.b,{to:"/",children:"Crypto"})}),Object(y.jsx)(b.a,{className:"menu-control-container",onClick:function(){return j(!l)},children:Object(y.jsx)(O.a,{})})]}),l&&Object(y.jsxs)(u.a,{theme:"dark",children:[Object(y.jsx)(u.a.Item,{icon:Object(y.jsx)(x.a,{}),children:Object(y.jsx)(r.b,{to:"/",children:"Home"})}),Object(y.jsx)(u.a.Item,{icon:Object(y.jsx)(p.a,{}),children:Object(y.jsx)(r.b,{to:"/Cryptocurrencies",children:"Cryptocurrencies"})}),Object(y.jsx)(u.a.Item,{icon:Object(y.jsx)(m.a,{}),children:Object(y.jsx)(r.b,{to:"/Exchanges",children:"Exchanges"})}),Object(y.jsx)(u.a.Item,{icon:Object(y.jsx)(v.a,{}),children:Object(y.jsx)(r.b,{to:"/News",children:"News"})})]})]})},N=c(87),w=c(52),C=c(273),k=c(28),S=c.n(k),T=c(114),P=c(41),E={"x-rapidapi-key":"ad3658e239mshc977b6c95094c89p1ce913jsn26baaf29dbfe","x-rapidapi-host":"coinranking1.p.rapidapi.com"},I=function(e){return{url:e,headers:E}},A=Object(T.a)({reducerPath:"cryptoApi",baseQuery:Object(P.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return I("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return I("/coin/".concat(e))}}),getExchanges:e.query({query:function(){return I("/exchanges")}}),getCryptoHistory:e.query({query:function(e){var t=e.coinId,c=e.timePeriod;return I("/coin/".concat(t,"/history/").concat(c))}})}}}),M=A.useGetCryptosQuery,q=A.useGetCryptoDetailsQuery,L=A.useGetExchangesQuery,F=A.useGetCryptoHistoryQuery,H=c(269),U=function(){return Object(y.jsx)("div",{className:"loader",children:Object(y.jsx)(H.a,{})})},V=o.a.Title;var Q=function(){var e,t=M(10),c=t.data,a=(t.error,t.isFetching),s=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return a?Object(y.jsx)(U,{}):Object(y.jsxs)("div",{children:[Object(y.jsx)(V,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(y.jsxs)(N.a,{children:[Object(y.jsx)(w.a,{span:12,children:Object(y.jsx)(C.a,{title:"Total Cryptocurrencies",value:s.total})}),Object(y.jsx)(w.a,{span:12,children:Object(y.jsx)(C.a,{title:"Total Exchanges",value:S()(s.totalExchanges)})}),Object(y.jsx)(w.a,{span:12,children:Object(y.jsx)(C.a,{title:"Total Market Cap",value:S()(s.totalMarketCap)})}),Object(y.jsx)(w.a,{span:12,children:Object(y.jsx)(C.a,{title:"Total 24h Volume",value:S()(s.total24hVolume)})}),Object(y.jsx)(w.a,{span:12,children:Object(y.jsx)(C.a,{title:"Total Markets",value:S()(s.totalMarkets)})})]}),Object(y.jsxs)("div",{className:"home-heading-container",children:[Object(y.jsx)(V,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the world"}),Object(y.jsx)(V,{level:3,className:"show-more",children:Object(y.jsx)(r.b,{to:"/cryptocurrencies",children:"show more"})})]}),Object(y.jsx)(W,{limited:!0}),Object(y.jsxs)("div",{className:"home-heading-container",children:[Object(y.jsx)(V,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(y.jsx)(V,{level:3,className:"show-more",children:Object(y.jsx)(r.b,{to:"/news",children:"show more"})})]}),Object(y.jsx)(pe,{limited:!0})]})},$=c(277),D=o.a.Text,G=$.a.Panel,_=function(){var e,t=L(),c=t.data,a=t.isFetching,s=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.exchanges;return a?Object(y.jsx)(U,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(N.a,{children:[Object(y.jsx)(w.a,{span:6,children:"Exchanges"}),Object(y.jsx)(w.a,{span:6,children:"24h Trade Volume"}),Object(y.jsx)(w.a,{span:6,children:"Markets"}),Object(y.jsx)(w.a,{span:6,children:"Change"})]}),Object(y.jsx)(N.a,{children:s.map((function(e){return Object(y.jsx)(w.a,{span:24,children:Object(y.jsx)($.a,{children:Object(y.jsx)(G,{showArrow:!1,header:Object(y.jsxs)(N.a,{children:[Object(y.jsxs)(w.a,{span:6,children:[Object(y.jsx)(D,{children:Object(y.jsxs)("strong",{children:[e.rank,"."]})}),Object(y.jsx)(h.a,{className:"exchange-image",src:e.iconUrl}),Object(y.jsx)(D,{children:Object(y.jsx)("strong",{children:e.name})})]}),Object(y.jsxs)(w.a,{span:6,children:["$",S()(e.volume)]}),Object(y.jsx)(w.a,{span:6,children:S()(e.numberOfMarkets)}),Object(y.jsxs)(w.a,{span:6,children:[S()(e.marketShare),"%"]})]},e.id),children:Object(y.jsx)("div",{dangerouslySetInnerHTML:{__html:e.description}})},e.id)})})}))})]})},z=c(275),R=c(271);var W=function(e){var t=e.limited,c=M(t?10:100),s=c.data,n=c.isFetching,i=Object(a.useState)([]),l=Object(d.a)(i,2),o=l[0],j=l[1],h=Object(a.useState)(""),b=Object(d.a)(h,2),u=b[0],O=b[1];return console.log("cryptos:",o),Object(a.useEffect)((function(){var e,t;j(null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.coins);var c=null===s||void 0===s||null===(t=s.data)||void 0===t?void 0:t.coins.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));j(c)}),[s,u]),n?Object(y.jsx)(U,{}):Object(y.jsxs)(y.Fragment,{children:[!t&&Object(y.jsx)("div",{className:"search-crypto",children:Object(y.jsx)(z.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return O(e.target.value)}})}),Object(y.jsx)(N.a,{gutter:[32,32],className:"crypto-card-container",children:null===o||void 0===o?void 0:o.map((function(e){return Object(y.jsx)(w.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(y.jsx)(r.b,{to:"/crypto/"+e.id,children:Object(y.jsxs)(R.a,{title:e.rank+". "+e.name,extra:Object(y.jsx)("img",{src:e.iconUrl,alt:"crypto",className:"crypto-image"}),hoverable:!0,children:[Object(y.jsxs)("p",{children:["Price:",S()(e.price)]}),Object(y.jsxs)("p",{children:["Price:",S()(e.marketCap)]}),Object(y.jsxs)("p",{children:["Price:",S()(e.change)]})]})})},e.id)}))})]})},J=c(274),Z=c(285),B=c(286),K=c(287),X=c(288),Y=c(117),ee=c(289),te=c(164),ce=c(163),ae=c(30),se=function(e){var t,c=e.coinHistory,a=e.currentPrice,s=e.coinName;ae.d.register(ae.g,ae.j,ae.h,ae.n,ae.c,ae.o);for(var n=[],r=[],i=0;i<(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(j=l.history)||void 0===j?void 0:j.length);i+=1){var l,j,d;n.push(null===c||void 0===c||null===(d=c.data)||void 0===d?void 0:d.history[i].price)}for(var h=0;h<(null===c||void 0===c||null===(b=c.data)||void 0===b||null===(u=b.history)||void 0===u?void 0:u.length);h+=1){var b,u,O;r.push(new Date(null===c||void 0===c||null===(O=c.data)||void 0===O?void 0:O.history[h].timestamp).toLocaleDateString())}var x={labels:r,datasets:[{label:"Price In USD",data:n,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(N.a,{className:"chart-header",children:[Object(y.jsxs)(o.a.Title,{level:2,className:"chart-title",children:[s," Price Chart"]}),Object(y.jsxs)(w.a,{className:"price-container",children:[Object(y.jsxs)(o.a.Title,{level:5,className:"price-change",children:[null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object(y.jsxs)(o.a.Title,{level:5,className:"current-price",children:["Current ",s," Price: $ ",a]})]})]}),Object(y.jsx)(ce.a,{data:x,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},ne=o.a.Text,re=o.a.Title,ie=J.a.Option;var le=function(){var e,t=Object(i.f)().coinId,c=Object(a.useState)("7d"),s=Object(d.a)(c,2),n=s[0],r=s[1],l=q(t),o=l.data,j=l.isFetching,h=F({coinId:t,timePeriod:n}).data,b=null===o||void 0===o||null===(e=o.data)||void 0===e?void 0:e.coin;if(console.log("detail:",o),console.log("history:",h),console.log(n),j)return Object(y.jsx)(U,{});var u=[{title:"Price to USD",value:"$ ".concat(b.price&&S()(b.price)),icon:Object(y.jsx)(Z.a,{})},{title:"Rank",value:b.rank,icon:Object(y.jsx)(B.a,{})},{title:"24h Volume",value:"$ ".concat(b.volume&&S()(b.volume)),icon:Object(y.jsx)(K.a,{})},{title:"Market Cap",value:"$ ".concat(b.marketCap&&S()(b.marketCap)),icon:Object(y.jsx)(Z.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(S()(b.allTimeHigh.price)),icon:Object(y.jsx)(X.a,{})}],O=[{title:"Number Of Markets",value:b.numberOfMarkets,icon:Object(y.jsx)(p.a,{})},{title:"Number Of Exchanges",value:b.numberOfExchanges,icon:Object(y.jsx)(m.a,{})},{title:"Aprroved Supply",value:b.approvedSupply?Object(y.jsx)(Y.a,{}):Object(y.jsx)(ee.a,{}),icon:Object(y.jsx)(te.a,{})},{title:"Total Supply",value:"$ ".concat(S()(b.totalSupply)),icon:Object(y.jsx)(te.a,{})},{title:"Circulating Supply",value:"$ ".concat(S()(b.circulatingSupply)),icon:Object(y.jsx)(te.a,{})}];return Object(y.jsxs)(w.a,{className:"coin-detail-container",children:[Object(y.jsxs)(w.a,{className:"coin-heading-container",children:[Object(y.jsxs)(re,{level:2,className:"coin-name",children:[b.name,"(",b.slug,") Price"]}),Object(y.jsxs)("p",{children:[b.name,"live price in US dollars. View value statistics, market cap and supply"]})]}),Object(y.jsx)(J.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period",onChange:function(e){return r(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(y.jsx)(ie,{children:e},e)}))}),Object(y.jsx)(se,{coinHistory:h,currentPrice:S()(b.price),coinName:b.name}),Object(y.jsxs)(w.a,{className:"stats-container",children:[Object(y.jsxs)(w.a,{className:"coin-value-statistics",children:[Object(y.jsxs)(w.a,{className:"coin-value-statistics-heading",children:[Object(y.jsxs)(re,{level:3,className:"coin-details-heading",children:[b.name," Value Statistics"]}),Object(y.jsxs)("p",{children:["An overview showing the stats of ",b.name]})]}),u.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(y.jsxs)(w.a,{className:"coin-stats",children:[Object(y.jsxs)(w.a,{className:"coin-stats-name",children:[Object(y.jsx)(ne,{children:t}),Object(y.jsx)(ne,{children:c})]}),Object(y.jsx)(ne,{className:"stats",children:a})]},c)}))]}),Object(y.jsxs)(w.a,{className:"other-stats-info",children:[Object(y.jsxs)(w.a,{className:"coin-value-statistics-heading",children:[Object(y.jsx)(re,{level:3,className:"coin-details-heading",children:"Other Statistics"}),Object(y.jsx)("p",{children:"An overview showing the stats of all cryptocurrencies"})]}),O.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(y.jsxs)(w.a,{className:"coin-stats",children:[Object(y.jsxs)(w.a,{className:"coin-stats-name",children:[Object(y.jsx)(ne,{children:t}),Object(y.jsx)(ne,{children:c})]}),Object(y.jsx)(ne,{className:"stats",children:a})]},c)}))]})]}),Object(y.jsxs)(w.a,{className:"coin-desc-link",children:[Object(y.jsx)(N.a,{className:"coin-desc",children:Object(y.jsxs)(re,{level:3,className:"coin-details-heading",children:["What is ",b.name,Object(y.jsx)("div",{dangerouslySetInnerHTML:{__html:b.description}})]})}),Object(y.jsxs)(w.a,{className:"coin-links",children:[Object(y.jsxs)(re,{level:3,className:"coin-details-heading",children:[b.name," Links"]}),b.links.map((function(e,t){return Object(y.jsxs)(N.a,{className:"coin-link",children:[Object(y.jsx)(re,{level:5,className:"link-name",children:e.type}),Object(y.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},t)}))]})]})]})},oe=c(157),je=c.n(oe),de={"x-bingapis-sdk":"true","x-rapidapi-key":"ad3658e239mshc977b6c95094c89p1ce913jsn26baaf29dbfe","x-rapidapi-host":"bing-news-search1.p.rapidapi.com"},he=Object(T.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(P.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/news/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:de}}})}}}),be=he.useGetCryptoNewsQuery,ue=o.a.Text,Oe=o.a.Title,xe=J.a.Option;var pe=function(e){var t,c=e.limited,s=Object(a.useState)("Cryptocurrency"),n=Object(d.a)(s,2),r=n[0],i=n[1],l=be({newsCategory:r,count:c?6:20}).data,o=M(50).data,j=Object(a.useState)([]),b=Object(d.a)(j,2),u=b[0],O=b[1];return console.log("cryptoNews:",u),Object(a.useEffect)((function(){O(null===l||void 0===l?void 0:l.value)}),[l]),l?Object(y.jsxs)(N.a,{gutter:[24,24],children:[!c&&Object(y.jsx)(w.a,{span:24,children:Object(y.jsxs)(J.a,{showSearch:!0,className:"select-news",placeholder:"Select a crypto",optionFilterProp:"children",onChange:function(e){return i(e)},filterOption:function(e,t){return t.children.toLowerCase().charAt(e.toLowerCase())>=0},children:[Object(y.jsx)(xe,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.coins.map((function(e){return Object(y.jsx)(xe,{value:e.name,children:e.name})}))]})}),null===u||void 0===u?void 0:u.map((function(e,t){var c,a,s,n,r;return Object(y.jsx)(w.a,{xs:24,sm:12,lg:8,children:Object(y.jsx)(R.a,{hoverable:!0,className:"news-card",children:Object(y.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(y.jsxs)("div",{className:"news-image-container",children:[Object(y.jsx)(Oe,{className:"news-title",level:4,children:e.name}),Object(y.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||"https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",alt:"news"})]}),Object(y.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(y.jsxs)("div",{className:"provider-container",children:[Object(y.jsx)(h.a,{src:null===(s=e.provider[0])||void 0===s||null===(n=s.image)||void 0===n||null===(r=n.thumbnail)||void 0===r?void 0:r.contentUrl,alt:"news"}),Object(y.jsx)(ue,{children:je()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):Object(y.jsx)(U,{})};var me,ve=function(){return Object(y.jsx)(r.a,{children:Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)("div",{className:"navbar",children:Object(y.jsx)(f,{})}),Object(y.jsxs)("div",{className:"main",children:[Object(y.jsx)(l.a,{children:Object(y.jsx)("div",{className:"routes",children:Object(y.jsxs)(i.c,{children:[Object(y.jsx)(i.a,{exact:!0,path:"/",component:Q}),Object(y.jsx)(i.a,{exact:!0,path:"/exchanges",component:_}),Object(y.jsx)(i.a,{exact:!0,path:"/cryptocurrencies",component:W}),Object(y.jsx)(i.a,{exact:!0,path:"/crypto/:coinId",component:le}),Object(y.jsx)(i.a,{exact:!0,path:"/news",component:pe})]})})}),Object(y.jsxs)("div",{className:"footer",children:[Object(y.jsxs)(o.a.Title,{level:5,style:{color:"#ccc",textAlign:"center"},children:["Crypto",Object(y.jsx)("br",{}),"All rights reserved"]}),Object(y.jsxs)(j.b,{children:[Object(y.jsx)(r.b,{to:"/",children:"Home"}),Object(y.jsx)(r.b,{to:"/exchanges",children:"Exchanges"}),Object(y.jsx)(r.b,{to:"/news",children:"News"})]})]})]})]})})},ge=c(29),ye=c(11),fe=Object(ye.a)({reducer:(me={},Object(ge.a)(me,A.reducerPath,A.reducer),Object(ge.a)(me,he.reducerPath,he.reducer),me),middleware:function(e){return e().concat(A.middleware,he.middleware)}}),Ne=c(38);c(266);n.a.render(Object(y.jsx)(Ne.a,{store:fe,children:Object(y.jsx)(ve,{})}),document.getElementById("root"))}},[[267,1,2]]]);
//# sourceMappingURL=main.617bf61d.chunk.js.map