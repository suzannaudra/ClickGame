(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Flower1","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReYDscG0USiMfzFA3aCRwI8khIM_fnGhVM09sorj11uzo5CgSJ&usqp=CAU","count":0},{"id":2,"name":"Flower2","image":"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg","count":0},{"id":3,"name":"Nature3","image":"https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","count":0},{"id":4,"name":"Nature4","image":"https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg","count":0},{"id":5,"name":"Nature5","image":"https://wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-38.jpg","count":0},{"id":6,"name":"PinkSunset","image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg","count":0},{"id":7,"name":"Mountains with Flower","image":"https://i.pinimg.com/236x/4d/d8/87/4dd8874c58145397a2e0f94df7387d83--la-nature-beautiful-things.jpg","count":0},{"id":8,"name":"SuninClouds","image":"https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920.jpg","count":0},{"id":9,"name":"Garden","image":"https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg","count":0},{"id":10,"name":"RockIslands","image":"https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg","count":0},{"id":11,"name":"Rushing River","image":"https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","count":0},{"id":12,"name":"NatureArch","image":"https://img.redbull.com/images/c_fill,g_auto,w_1500,h_1000/q_auto,f_auto/redbullcom/2015/07/27/1331737542701_2/moon-hill-natural-bridge-in-china","count":0}]')},,function(e,t,n){},,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),i=(n(14),n(5)),s=n(6),u=n(7),m=n(8),l=(n(3),n(15),function(e){return o.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{alt:e.name,src:e.image})))}),h=(n(16),function(e){return o.a.createElement("div",{className:"wrapper"},e.children)}),d=(n(17),function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"title"},"Nature's Game"),o.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),g=n(1),p=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={cards:g,score:0,highscore:0},e.gameOver=function(){return e.state.score>e.state.highscore&&e.setState({highscore:e.state.score},(function(){console.log(this.state.highscore)})),e.state.cards.forEach((function(e){e.count=0})),alert("Game Over score: ".concat(e.state.score)),e.setState({score:0}),!0},e.clickCount=function(t){e.state.cards.find((function(n,a){if(n.id===t){if(0===g[a].count)return g[a].count=g[a].count+1,e.setState({score:e.state.score+1},(function(){console.log(this.state.score)})),e.state.cards.sort((function(){return Math.random()-.5})),!0;e.gameOver()}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(h,null,o.a.createElement(d,{score:this.state.score,highscore:this.state.highscore},"Nature's Click Game"),this.state.cards.map((function(t){return o.a.createElement(l,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.43f65168.chunk.js.map