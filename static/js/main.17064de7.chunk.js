(this.webpackJsonpkost=this.webpackJsonpkost||[]).push([[0],{192:function(e,t,a){e.exports=a(299)},296:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(73),r=a(0),i=a.n(r),o=a(10),l=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(16),m=a(17),s=a(20),u=a(18),h=a(19),d=a(40),p=a(56),g=a(61),E=a(57),f=a.n(E),b=a(340),v=a(342),k=a(343),y=a(344),O=a(341),j=a(333),w=a(44),C=a(338),x=a(361),M=a(349),_=a(345),S=a(337),A=a(339),N=a(369),P=a(94),F=a.n(P),B=a(170),D=a.n(B),R=a(365),W=a(168),z=a.n(W),U=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e="https://marinyo.com/room/"+this.props.id+"/"+this.props.room_title,t=this.props.room_title+" - "+this.props.description;return i.a.createElement(R.a,{url:e,quote:t,hashtag:"#Manggurebe"},i.a.createElement(j.a,null,i.a.createElement(z.a,{color:"action"})))}}]),t}(i.a.Component),L=a(33),T=Object(S.a)((function(e){return{root:{marginTop:e.spacing(3),marginBottom:e.spacing(3)}}})),I=function(e){var t=T(),a=i.a.forwardRef((function(e,t){return i.a.createElement(d.b,Object.assign({innerRef:t,to:"/roomadd"},e))}));return i.a.createElement("div",{className:t.root},i.a.createElement(w.a,{variant:"h5"},"Anda pemilik kos kosan?"),i.a.createElement(w.a,{variant:"subtitle1"},"Promosikan kos Anda agar lebih dikenal"),i.a.createElement("br",null),i.a.createElement(L.FacebookProvider,{appId:"2615774338658413"},i.a.createElement(L.Status,null,(function(e){return"connected"!==e.status?i.a.createElement(w.a,{variant:"subtitle2",color:"textPrimary"},"Login untuk memulai promosi."):i.a.createElement(j.a,{variant:"outlined",component:a},"Promosi sekarang")}))))},q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(I,null)}}]),t}(i.a.Component),H=Object(S.a)((function(e){return{root:{marginBottom:e.spacing(2)},more:{marginTop:e.spacing(2)},comment:{marginLeft:e.spacing(2)},expand:{marginLeft:"auto"}}})),K=function(e){var t=H(),a=e.limit,n=i.a.forwardRef((function(e,t){return i.a.createElement(d.b,Object.assign({innerRef:t},e))}));return i.a.createElement("div",null,i.a.createElement(C.a,{container:!0,spacing:2,className:t.root},e.loading?i.a.createElement(C.a,{container:!0,spacing:1},i.a.createElement(C.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6},i.a.createElement(A.a,{variant:"rect",width:"100%",height:200})),i.a.createElement(C.a,{item:!0,xs:12,sm:4,md:4,lg:4,xl:4},i.a.createElement(A.a,{variant:"rect",width:"100%",height:200}))):e.rooms.slice(0,a).map((function(e){return i.a.createElement(C.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,key:e.id},i.a.createElement(b.a,{key:e.id},i.a.createElement(O.a,{avatar:i.a.createElement(N.a,{alt:"dK",src:e.avatar,className:t.bigAvatar}),action:i.a.createElement(U,{id:e.id,room_title:e.room_title,description:e.description}),title:e.owner_name,subheader:i.a.createElement(F.a,{fromNow:!0},e.createdAt)}),i.a.createElement(v.a,{component:n,to:"/room/"+e.id},i.a.createElement(k.a,{className:H.media,component:"img",alt:e.room_title,height:"140",image:e.image_url,title:e.room_title}),i.a.createElement(y.a,null,i.a.createElement(w.a,{gutterBottom:!0,variant:"h5"},e.room_title),i.a.createElement(w.a,{variant:"body1"},"Kos",1===e.room_gender?" Putra":2===e.room_gender?" Putri":" Campur"," - ",e.location)))))})),i.a.createElement(C.a,{item:!0},e.limit>e.rooms.length?"":i.a.createElement(j.a,{onClick:e.handleShowMore,variant:"outlined",className:t.more},i.a.createElement(D.a,null)))),i.a.createElement(_.a,null))},X=function(e){return i.a.createElement("div",null,i.a.createElement(x.a,{variant:"outlined",name:"filter",margin:"dense",value:e.filter,onChange:e.handleFilter,autoWidth:!0},i.a.createElement(M.a,{key:"semua",value:"semua"},"Semua Lokasi"),e.locations.sort((function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase();return a<n?-1:a>n?1:0})).map((function(e){return i.a.createElement(M.a,{key:e.name,value:e.name},e.name)}))))},Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleShowMore=function(){a.setState({limit:a.state.limit+4})},a.handleFilter=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value));var t="";t="semua"!==e.target.value?"https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?search=".concat(e.target.value):"https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms",fetch(t).then((function(e){return e.json()})).then((function(e){a.setState({rooms:e})}))},a.state={rooms:[],locations:[],filter:"semua",loading:!1,limit:4},console.log("constructor"),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate"),!0}},{key:"componentDidUpdate",value:function(e,t){console.log("componentDidUpdate")}},{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),this.setState({loading:!0}),f.a.get("https://5de747e7b1ad690014a4e0d2.mockapi.io/location").then((function(t){e.setState({locations:t.data})})).catch((function(e){console.warn(e)})),f.a.get("https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?sortBy=createdAt&order=desc").then((function(t){e.setState({rooms:t.data}),e.setState({loading:!1})})).catch((function(e){console.warn(e)}))}},{key:"render",value:function(){return console.log("render"),i.a.createElement("div",null,i.a.createElement(C.a,{container:!0,spacing:2},i.a.createElement(C.a,{item:!0,xs:12,sm:12,md:9,lg:9,xl:9},i.a.createElement(X,{locations:this.state.locations,filter:this.state.filter,handleFilter:this.handleFilter}),i.a.createElement("br",null),i.a.createElement("br",null),this.state.loading?i.a.createElement("div",null,i.a.createElement(C.a,{container:!0,spacing:1},i.a.createElement(C.a,{item:!0,md:6,sm:12,xs:12},i.a.createElement(A.a,{variant:"rect",width:"100%",height:200}),i.a.createElement(i.a.Fragment,null,i.a.createElement(A.a,{height:30,style:{marginBottom:2}}),i.a.createElement(A.a,{height:30,width:"80%"}))),i.a.createElement(C.a,{item:!0,md:6,sm:12,xs:12},i.a.createElement(A.a,{variant:"rect",width:"100%",height:200}),i.a.createElement(i.a.Fragment,null,i.a.createElement(A.a,{height:30,style:{marginBottom:2}}),i.a.createElement(A.a,{height:30,width:"80%"})))),i.a.createElement(C.a,{container:!0,spacing:1},i.a.createElement(C.a,{item:!0,md:6,sm:12,xs:12},i.a.createElement(A.a,{variant:"rect",width:"100%",height:200}),i.a.createElement(i.a.Fragment,null,i.a.createElement(A.a,{height:30,style:{marginBottom:2}}),i.a.createElement(A.a,{height:30,width:"80%"}))),i.a.createElement(C.a,{item:!0,md:6,sm:12,xs:12},i.a.createElement(A.a,{variant:"rect",width:"100%",height:200}),i.a.createElement(i.a.Fragment,null,i.a.createElement(A.a,{height:30,style:{marginBottom:2}}),i.a.createElement(A.a,{height:30,width:"80%"}))))):i.a.createElement("div",null,i.a.createElement(K,{limit:this.state.limit,rooms:this.state.rooms,handleShowMore:this.handleShowMore}))),i.a.createElement(C.a,{item:!0,xs:12,sm:12,md:3,lg:3,xl:3},i.a.createElement(q,null))))}}],[{key:"getDerivedStateFromProps",value:function(e){return console.log("getDerivedStateFromProps"),!0}}]),t}(i.a.Component),J=function(){return i.a.createElement("h1",null,"Not found")},G=a(43),Q=a.n(G),Z=a(64),V=a.n(Z),$=a(25),ee=a.n($),te=(a(296),a(367)),ae=a(370),ne=a(350),re=a(368),ie=ee.a.icon({iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",iconSize:[25,41],iconAnchor:[12.5,41],popupAnchor:[0,-41]}),oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={lat:e.lat,lng:e.lng},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[this.state.lat,this.state.lng];return i.a.createElement(te.a,{className:"map",center:e,zoom:18},i.a.createElement(ae.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a>',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i.a.createElement(ne.a,{position:e,icon:ie},i.a.createElement(re.a,null,this.props.room_title)))}}]),t}(i.a.Component),le=a(351),ce=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={rooms:[],loading:!0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;return Q.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.awrap(fetch("https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?page=2&limit=2&sortBy=createdAt&order=desc").then((function(e){return e.json()})).then((function(t){e.setState({rooms:t})})));case 2:this.setState({loading:!1});case 3:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.loading?i.a.createElement(C.a,{container:!0,spacing:1},i.a.createElement(C.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6},i.a.createElement(A.a,{variant:"rect",width:"100%",height:200})),i.a.createElement(C.a,{item:!0,xs:12,sm:4,md:4,lg:4,xl:4},i.a.createElement(A.a,{variant:"rect",width:"100%",height:200}))):i.a.createElement(C.a,{container:!0,spacing:1},this.state.rooms.map((function(e){return i.a.createElement(C.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,key:e.id},i.a.createElement(b.a,{key:e.id},i.a.createElement(k.a,{height:"120",component:"img",alt:e.room_title,image:e.image_url,title:e.room_title}),i.a.createElement(y.a,null,i.a.createElement(w.a,{variant:"body1"},e.room_title),i.a.createElement(w.a,{variant:"body2"},i.a.createElement(V.a,{value:e.price_month,displayType:"text",thousandSeparator:!0,prefix:"Rp "})," / Bulan")),i.a.createElement(le.a,null,i.a.createElement(j.a,{href:"https://localhost:3000/room/"+e.id},"Selengkapnya"))))}))))}}]),t}(i.a.Component),me=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(L.FacebookProvider,{appId:"2615774338658413"},i.a.createElement(L.Comments,{href:"https://marinyo.com/room/"+this.props.id,width:"auto"}))}}]),t}(i.a.Component),se=a(171),ue=a.n(se),he=a(47),de=a(364),pe=a(354),ge=a(355),Ee=a(348),fe=a(300),be=a(352),ve=a(353),ke=Object(S.a)((function(e){return{root:{padding:e.spacing(1,2),display:"flex",alignItems:"center",maxWidth:900},media:{height:240},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},card:{marginBottom:20},divider:{marginBottom:20}}})),ye=function(e){var t=ke();return i.a.createElement("div",null,i.a.createElement(b.a,{className:t.card},i.a.createElement(O.a,{avatar:i.a.createElement(N.a,{alt:"dK",src:e.avatar,className:t.bigAvatar}),action:i.a.createElement(U,{id:e.id,room_title:e.room_title,description:e.description}),title:e.owner_name,subheader:i.a.createElement(F.a,{fromNow:!0},e.createdAt)}),i.a.createElement(k.a,{className:t.media,image:e.image_url,title:e.room_title}),i.a.createElement(y.a,null,i.a.createElement(w.a,{variant:"h5"},e.room_title+" "+e.location),i.a.createElement(w.a,{variant:"body1"},"Kos",1===e.room_gender?" Putra":2===e.room_gender?" Putri":" Campur"),i.a.createElement(_.a,{className:t.divider}),i.a.createElement(w.a,{variant:"body1"},e.owner_phone),i.a.createElement(_.a,{className:t.divider}),i.a.createElement(w.a,{variant:"body1"},i.a.createElement(V.a,{value:e.price_month,displayType:"text",thousandSeparator:!0,prefix:"Rp "})," / Bulan"),i.a.createElement(_.a,{className:t.divider}),i.a.createElement(w.a,{variant:"body1"},"Deskripsi Kost"),i.a.createElement(w.a,{variant:"caption"},e.description),i.a.createElement(_.a,{className:t.divider}),i.a.createElement(C.a,{container:!0,spacing:1},i.a.createElement(C.a,{item:!0,xs:12,sm:6},i.a.createElement(w.a,{variant:"body1"},"Fasilitas Kamar"),i.a.createElement(w.a,{variant:"caption"},i.a.createElement(Ee.a,{component:"nav"},e.facilities[0].lemari&&i.a.createElement(fe.a,null,i.a.createElement(be.a,null,i.a.createElement(he.d,{size:"2em"})),i.a.createElement(ve.a,{primary:"Lemari Pakaian"})),e.facilities[0].kasur&&i.a.createElement(fe.a,null,i.a.createElement(be.a,null,i.a.createElement(he.c,{size:"2em"})),i.a.createElement(ve.a,{primary:"Kasur"})),e.facilities[0].meja&&i.a.createElement(fe.a,null,i.a.createElement(be.a,null,i.a.createElement(he.f,{size:"2em"})),i.a.createElement(ve.a,{primary:"Meja Belajar"})),e.facilities[0].wifi&&i.a.createElement(fe.a,null,i.a.createElement(be.a,null,i.a.createElement(he.h,{size:"2em"})),i.a.createElement(ve.a,{primary:"Wifi Hotspot"})),e.facilities[0].kipas&&i.a.createElement(fe.a,null,i.a.createElement(be.a,null,i.a.createElement(he.g,{size:"2em"})),i.a.createElement(ve.a,{primary:"Kipas Angin"})),e.facilities[0].ac&&i.a.createElement(fe.a,null,i.a.createElement(be.a,null,i.a.createElement(he.a,{size:"2em"})),i.a.createElement(ve.a,{primary:"Air Conditioner"}))))),i.a.createElement(C.a,{item:!0},i.a.createElement(w.a,{variant:"body1"},"Fasilitas Umum"),i.a.createElement(w.a,{variant:"caption"},i.a.createElement(Ee.a,null,e.facilities[0].parkirMotor&&i.a.createElement(fe.a,null,i.a.createElement(be.a,null,i.a.createElement(ue.a,{size:"2em"})),i.a.createElement(ve.a,{primary:"Dapur Umum"})),e.facilities[0].parkirMotor&&i.a.createElement(fe.a,null,i.a.createElement(be.a,null,i.a.createElement(he.e,{size:"2em"})),i.a.createElement(ve.a,{primary:"Parkiran Sepeda Motor"})),e.facilities[0].parkirMobil&&i.a.createElement(fe.a,null,i.a.createElement(be.a,null,i.a.createElement(he.b,{size:"2em"})),i.a.createElement(ve.a,{primary:"Parkiran Mobil"})))))),i.a.createElement(_.a,{className:t.divider}),i.a.createElement(w.a,{variant:"body1"},"Lokasi"),i.a.createElement(oe,{lat:e.lat,lng:e.lng,room_title:e.room_title}))),i.a.createElement(ce,null))},Oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={loading:!0,room:[],facilities:[],date_text:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e,t,a=this;return Q.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return(e=JSON.parse(localStorage.getItem("user")))&&this.setState({name:e.name}),t=this.props.match.params.handle,n.next=5,Q.a.awrap(fetch("https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms/".concat(t)).then((function(e){return e.json()})).then((function(e){a.setState({room:e}),a.setState({facilities:a.state.room.facilities,loading:!1})})));case 5:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=i.a.forwardRef((function(e,t){return i.a.createElement(d.b,Object.assign({innerRef:t,to:"/"},e))}));return i.a.createElement("div",null,this.state.loading?i.a.createElement(A.a,{height:30,width:"20%"}):i.a.createElement("div",null,i.a.createElement(de.a,{"aria-label":"breadcrumb"},i.a.createElement(pe.a,{color:"inherit",component:e},"Home"),i.a.createElement(w.a,{color:"textPrimary"},this.state.room.room_title))),i.a.createElement("br",null),i.a.createElement(C.a,{container:!0,spacing:1},i.a.createElement(C.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},this.state.loading?i.a.createElement("div",null,i.a.createElement(A.a,{variant:"rect",width:"100%",height:200,style:{marginBottom:2}}),i.a.createElement(i.a.Fragment,null,i.a.createElement(A.a,{height:30,style:{marginBottom:2}}),i.a.createElement(A.a,{height:30,width:"80%"}))):i.a.createElement(ye,{id:this.state.room.id,avatar:this.state.room.avatar,image_url:this.state.room.image_url,room_title:this.state.room.room_title,price_title_time:this.state.room.price_title_time,price_month:this.state.room.price_month,description:this.state.room.description,room_gender:this.state.room.room_gender,owner_name:this.state.room.owner_name,owner_phone:this.state.room.owner_phone,location:this.state.room.location,lat:this.state.room.lat,lng:this.state.room.lng,createdAt:this.state.room.createdAt,facilities:this.state.facilities})),i.a.createElement(C.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},this.state.loadingComment?i.a.createElement(ge.a,null):"",this.state.loading?i.a.createElement("div",null,i.a.createElement(A.a,{variant:"rect",width:"100%",height:50}),i.a.createElement(i.a.Fragment,null,i.a.createElement(A.a,{variant:"circle",width:40,height:40}),i.a.createElement(A.a,{height:30,style:{marginBottom:2}}),i.a.createElement(A.a,{height:30,width:"80%"}))):i.a.createElement(me,{id:this.state.room.id}))))}}]),t}(i.a.Component),je=a(82),we=a(105),Ce=a(363),xe=a(362),Me=a(356),_e=Object(S.a)((function(e){return{root:{marginBottom:20},grid:{marginBottom:e.spacing(1)}}})),Se=function(e){var t=_e();return i.a.createElement("div",null,i.a.createElement(w.a,{variant:"h5"},"Data kos"),e.loading&&i.a.createElement(ge.a,null),i.a.createElement("form",{onSubmit:e.handlePost,className:t.root},i.a.createElement(C.a,{container:!0,spacing:2,className:t.grid},i.a.createElement(C.a,{item:!0,md:6},i.a.createElement(Ce.a,{variant:"outlined",name:"room_title",placeholder:"Nama kos",margin:"dense",onChange:e.handleChange,required:!0,fullWidth:!0}),i.a.createElement(V.a,{customInput:Ce.a,variant:"outlined",name:"price_month",placeholder:"Harga sewa",margin:"dense",onChange:e.handleChange,required:!0,fullWidth:!0,thousandSeparator:!0,prefix:"Rp "}),i.a.createElement(V.a,{customInput:Ce.a,variant:"outlined",name:"owner_phone",placeholder:"+62 852 xxxx xxxx",format:"+62 ### #### ####",mask:"_",margin:"dense",onChange:e.handleChange,required:!0,fullWidth:!0,thousandSeparator:!0,prefix:"Rp "}),i.a.createElement(Ce.a,{variant:"outlined",name:"description",placeholder:"Deskripsi kos",value:e.description,margin:"dense",onChange:e.handleChange,required:!0,fullWidth:!0,multiline:!0}),i.a.createElement(x.a,{value:e.room_gender,onChange:e.handleChange,name:"room_gender",margin:"dense",required:!0,fullWidth:!0},[{id:1,label:"Putra"},{id:2,label:"Putri"},{id:3,label:"Campur"}].map((function(e){return i.a.createElement(M.a,{key:e.id,value:e.id},e.label)}))),i.a.createElement(x.a,{value:e.location,onChange:e.handleChange,name:"location",margin:"dense",required:!0,fullWidth:!0},e.locations.map((function(e){return i.a.createElement(M.a,{key:e.id,value:e.name},e.name)}))),i.a.createElement(Ce.a,{variant:"outlined",name:"lat",placeholder:"Latitude",value:e.lat,margin:"dense",onChange:e.handleChange,required:!0,fullWidth:!0}),i.a.createElement(Ce.a,{variant:"outlined",name:"lng",placeholder:"Longitude",value:e.lng,margin:"dense",onChange:e.handleChange,required:!0,fullWidth:!0})),i.a.createElement(C.a,{item:!0,md:6},i.a.createElement(Me.a,{control:i.a.createElement(xe.a,{checked:e.lemari,onChange:e.handleChangeFacility("lemari"),value:e.lemari,name:"lemari",color:"primary"}),label:"Lemari Pakaian"}),i.a.createElement(Me.a,{control:i.a.createElement(xe.a,{checked:e.kasur,onChange:e.handleChangeFacility("kasur"),value:e.kasur,name:"kasur",color:"primary"}),label:"Kasur"}),i.a.createElement(Me.a,{control:i.a.createElement(xe.a,{checked:e.meja,onChange:e.handleChangeFacility("meja"),value:e.meja,name:"meja",color:"primary"}),label:"Meja Belajar"}),i.a.createElement(Me.a,{control:i.a.createElement(xe.a,{checked:e.wifi,onChange:e.handleChangeFacility("wifi"),value:e.wifi,name:"wifi",color:"primary"}),label:"Wifi"}),i.a.createElement(Me.a,{control:i.a.createElement(xe.a,{checked:e.kipas,onChange:e.handleChangeFacility("kipas"),value:e.kipas,name:"kipas",color:"primary"}),label:"Kipas Angin"}),i.a.createElement(Me.a,{control:i.a.createElement(xe.a,{checked:e.ac,onChange:e.handleChangeFacility("ac"),value:e.ac,name:"ac",color:"primary"}),label:"AC"}),i.a.createElement(Me.a,{control:i.a.createElement(xe.a,{checked:e.parkirMotor,onChange:e.handleChangeFacility("parkirMotor"),value:e.parkirMotor,name:"parkirMotor",color:"primary"}),label:"Parkiran Motor"}),i.a.createElement(Me.a,{control:i.a.createElement(xe.a,{checked:e.parkirMobil,onChange:e.handleChangeFacility("parkirMobil"),value:e.parkirMobil,name:"parkirMobil",color:"primary"}),label:"Parkiran Mobil"}))),i.a.createElement(j.a,{variant:"outlined",color:"primary",type:"submit"},"Publish")))},Ae=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChangeFacility=function(e){return function(t){a.setState(Object(n.a)({},a.state,Object(g.a)({},e,t.target.checked)))}},a.state={room:[],locations:[],lastData:"",room_title:"",price_month:"",owner_phone:"",owner_name:"",description:"",location:"",lat:"-6.164705",lng:"106.781984",room_gender:1,createdAt:"",lemari:!0,kasur:!0,meja:!1,wifi:!1,kipas:!1,ac:!1,parkirMotor:!0,parkirMobil:!1,loading:!1},a.handlePost=a.handlePost.bind(Object(je.a)(a)),a.handleChange=a.handleChange.bind(Object(je.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handlePost",value:function(e){var t=this;this.setState({loading:!0});var a=JSON.parse(localStorage.getItem("user")),n=this.state,r=n.room_title,i=n.price_month,o=n.owner_phone,l=n.description,c=n.room_gender,m=n.location,s=n.lat,u=n.lng,h=n.lemari,d=n.kasur,p=n.meja,g=n.wifi,E=n.kipas,b=n.ac,v=n.parkirMotor,k=n.parkirMobil;f.a.post("https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms",{avatar:a.profile.picture.data.url,room_title:r,price_month:i,owner_phone:o,owner_name:a.profile.first_name,description:l,location:m,lat:s,lng:u,room_gender:c,createdAt:Date.now()},{headers:{"Content-Type":"application/json"}},{withCredentials:!0}).then((function(e){t.setState({loading:!1}),console.log(e)})).catch((function(e){console.warn(e)})),f.a.post("https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms/".concat(this.state.lastData,"/facilities"),{lemari:h,kasur:d,meja:p,wifi:g,kipas:E,ac:b,parkirMotor:v,parkirMobil:k},{headers:{"Content-Type":"application/json"}},{withCredentials:!0}).then((function(e){t.setState({loading:!1}),console.log(e),201===e.status&&t.props.history.push("/")})).catch((function(e){console.warn(e)})),e.preventDefault()}},{key:"componentDidMount",value:function(){var e=this;return Q.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.awrap(f.a.get("https://5de747e7b1ad690014a4e0d2.mockapi.io/location").then((function(t){e.setState({locations:t.data}),e.setState({location:e.state.locations[0].name})})).catch((function(e){console.warn(e)})));case 2:return t.next=4,Q.a.awrap(f.a.get("https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms").then((function(t){if(0===t.data.length)e.setState({lastData:1});else{var a=t.data[t.data.length-1],n=parseInt(a.id)+1;e.setState({lastData:n})}})).catch((function(e){return console.warn(e)})));case 4:case"end":return t.stop()}}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(Se,{room_gender:this.state.room_gender,locations:this.state.locations,location:this.state.location,lemari:this.state.lemari,kasur:this.state.kasur,meja:this.state.meja,wifi:this.state.wifi,kipas:this.state.kipas,ac:this.state.ac,parkirMotor:this.state.parkirMotor,parkirMobil:this.state.parkirMobil,loading:this.state.loading,handlePost:this.handlePost,handleChange:this.handleChange,handleChangeFacility:this.handleChangeFacility}))}}]),t}(i.a.Component),Ne=Object(we.b)((function(e){return{loginStatus:e.loginStatus}}))(Ae),Pe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleResponse=function(e){localStorage.setItem("user",JSON.stringify(e))},a.handleError=function(e){console.log(e)},a.state={_isMounted:!1},console.log("constructor"),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){console.log("componentWillMount"),this.setState({_isMounted:!1})}},{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.setState({_isMounted:!0})}},{key:"render",value:function(){return i.a.createElement("div",null,this.state._isMounted&&i.a.createElement(L.FacebookProvider,{appId:"2615774338658413",style:{color:"red"}},i.a.createElement(L.LoginButton,{scope:"email",onCompleted:this.handleResponse,onError:this.handleError},"Masuk dengan facebook")))}}]),t}(i.a.Component),Fe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={_isMounted:!1},console.log("constructor"),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){console.log("componentWillMount"),this.setState({_isMounted:!1})}},{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.setState({_isMounted:!0})}},{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("user"));return i.a.createElement("div",null,this.state._isMounted&&i.a.createElement(L.FacebookProvider,{appId:"2615774338658413"},i.a.createElement(L.Status,null,(function(t){return"connected"!==t.status?i.a.createElement(Pe,null):i.a.createElement(w.a,{variant:"body2"},e.profile.first_name)}))))}}]),t}(i.a.Component),Be=a(357),De=a(358),Re=a(359),We=a(173),ze=a.n(We),Ue=Object(S.a)((function(e){return{root:{flexGrow:1,marginTop:90},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Le=function(e){var t=i.a.forwardRef((function(e,t){return i.a.createElement(d.b,Object.assign({innerRef:t,to:"/"},e))})),a=Ue();return i.a.createElement("div",{className:a.root},i.a.createElement(De.a,{position:"fixed",color:"primary"},i.a.createElement(Re.a,null,i.a.createElement(Be.a,{component:t,edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},i.a.createElement(ze.a,null)),i.a.createElement(w.a,{variant:"h6",className:a.title},"Manggurebe"),i.a.createElement(Fe,null))))},Te=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(Le,null)}}]),t}(i.a.Component),Ie=a(360),qe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(Ie.a,{fixed:!0},i.a.createElement(Te,null),i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,path:"/",component:Y}),i.a.createElement(p.a,{path:"/room/:handle",component:Oe}),i.a.createElement(p.a,{path:"/roomadd",component:Ne}),i.a.createElement(p.a,{component:J})))))}}]),t}(i.a.Component),He=a(104),Ke=(a(298),{order:1,filter:""}),Xe=Object(He.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;return"PLUS_ORDER"===t.type?Object(n.a)({},e,{order:e.order+1}):"FILTER_LOCATION"===t.type?Object(n.a)({},e,{filter:t.filter}):"FILTER_LOCATIONx"===t.type?Object(n.a)({},e,{filter:t.filter}):e}));l.a.render(i.a.createElement(we.a,{store:Xe},i.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[192,1,2]]]);
//# sourceMappingURL=main.17064de7.chunk.js.map