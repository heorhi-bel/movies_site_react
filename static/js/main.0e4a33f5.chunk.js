(this.webpackJsonpmovies_react=this.webpackJsonpmovies_react||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(8),r=c.n(n),i=(c(14),c(0));var l=function(){return Object(i.jsx)("nav",{className:"teal lighten-2",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"#",className:"brand-logo",children:"Logo"}),Object(i.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"sass.html",children:"Repo"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"badges.html",children:"Else"})})]})]})})};var o=function(){return Object(i.jsx)("footer",{className:"page-footer  blue-grey darken-4",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})},j=c(2),h=c(3),d=c(6),b=c(5),p=c(9);var O=function(e){return Object(i.jsx)("div",{className:"col s12 m7 l2 xl1",children:"N/A"===e.Poster?Object(i.jsxs)("div",{className:"card",children:[Object(i.jsxs)("div",{className:"card-image",children:[Object(i.jsx)("img",{src:"https://via.placeholder.com/300x400?text=".concat(e.Title)}),Object(i.jsxs)("span",{className:"card-title",children:[" ",e.Title," "]})]}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsxs)("p",{children:[" ",e.Type," "]}),Object(i.jsxs)("p",{children:[" ",e.Year," "]})]})]}):Object(i.jsxs)("div",{className:"card",children:[Object(i.jsxs)("div",{className:"card-image",children:[Object(i.jsx)("img",{src:e.Poster}),Object(i.jsxs)("span",{className:"card-title",children:[" ",e.Title," "]})]}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsxs)("p",{children:[" ",e.Type," "]}),Object(i.jsxs)("p",{children:[" ",e.Year," "]})]})]})})};var u=function(e){var t=e.movies,c=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies container",children:c.length?c.map((function(e){return Object(i.jsx)(O,Object(p.a)({},e),e.imbdID)})):Object(i.jsx)("h5",{children:"Sorry, we not founded :("})})},m=c(4),x=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={search:"",type:"all"},e.handleKey=function(t){"Enter"===t.key&&e.props.searchMovies(e.state.search,e.state.type)},e.handleType=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchMovies(e.state.search,e.state.type)}))},e}return Object(h.a)(c,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"input-field col s12",children:[Object(i.jsx)("input",{id:"search",type:"search",className:"validate",placeholder:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(i.jsx)("button",{className:"btn btn-align",onClick:function(){return e.props.searchMovies(e.state.search)},children:"SEARCH!"}),Object(i.jsxs)("div",{className:"filters",children:[Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",Object(m.a)({name:"group1",type:"radio","data-type":"all",onChange:this.handleType,checked:"all"===this.state.type},"checked",!0)),Object(i.jsx)("span",{children:"all"})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{name:"group1",type:"radio","data-type":"movie",onChange:this.handleType,checked:"movie"===this.state.type}),Object(i.jsx)("span",{children:"movies only"})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{name:"group1",type:"radio","data-type":"series",onChange:this.handleType,checked:"series"===this.state.type}),Object(i.jsx)("span",{children:"series only"})]})})]})]})})}}]),c}(a.a.Component);var v=function(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})},f="68db089d",g=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={movies:[],loading:!0},e.componentDidMount=function(){fetch("https://www.omdbapi.com/?i=tt3896198&apikey=".concat(f,"&s=matrix")).then((function(e){return e.json()})).then((function(t){console.log(t.Search),e.setState({movies:t.Search,loading:!1})}))},e.searchMovies=function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?i=tt3896198&apikey=".concat(f,"&s=").concat(t).concat("all"===c?"":"&type=".concat(c))).then((function(e){return e.json()})).then((function(t){console.log(t.Search),e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))},e}return Object(h.a)(c,[{key:"render",value:function(){return Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(x,{searchMovies:this.searchMovies}),this.state.loading?Object(i.jsx)(v,{}):Object(i.jsx)(u,{movies:this.state.movies})]})}}]),c}(a.a.Component);var y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(g,{}),Object(i.jsx)(o,{})]})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0e4a33f5.chunk.js.map