(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/img.551642c8.png"},11:function(e,t,a){e.exports=a(21)},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),s=a(7),l=a(1),i=a(2),m=a(4),u=a(3),p=a(5),d=a(9),h=a.n(d),f=document.querySelector("#modal-root"),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).backdropRef=Object(n.createRef)(),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.onClose()},a.handleBackdropClick=function(e){a.backdropRef.current&&e.target!==a.backdropRef.current||a.props.onClose()},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.children;return Object(r.createPortal)(o.a.createElement("div",{className:"backdrop",ref:this.backdropRef,onClick:this.handleBackdropClick,role:"presentation"},o.a.createElement("div",{className:"modal"},e)),f)}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isModalOpen:!1},a.openModal=function(){a.setState({isModalOpen:!0})},a.closeModal=function(){a.setState({isModalOpen:!1})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.webformatURL,a=e.likes,n=e.views,r=e.downloads,c=e.comments,s=e.largeImageURL,l=e.alt,i=this.state.isModalOpen;return o.a.createElement("li",null,o.a.createElement("div",{className:"photo-card"},o.a.createElement("img",{src:t,alt:l}),o.a.createElement("div",{className:"stats"},o.a.createElement("p",{className:"stats-item"},o.a.createElement("i",{className:"material-icons"},"thumb_up"),a),o.a.createElement("p",{className:"stats-item"},o.a.createElement("i",{className:"material-icons"},"visibility"),n),o.a.createElement("p",{className:"stats-item"},o.a.createElement("i",{className:"material-icons"},"comment"),c),o.a.createElement("p",{className:"stats-item"},o.a.createElement("i",{className:"material-icons"},"cloud_download"),r)),o.a.createElement("button",{type:"button",onClick:this.openModal,className:"fullscreen-button"},o.a.createElement("i",{className:"material-icons"},"zoom_out_map")),i&&o.a.createElement(g,{onClose:this.closeModal},o.a.createElement("img",{src:s,alt:l}))))}}]),t}(n.Component);b.defaultProps={alt:"image"};var y=function(e){var t=e.images;return o.a.createElement("ul",{className:"gallery"},t.map((function(e){return o.a.createElement(b,{key:e.id,webformatURL:e.webformatURL,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads,largeImageURL:e.largeImageURL})})))},v=function(e,t){return fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=12&key=14062645-02e0e5cefe0f6e0703dab69b4")).then((function(e){return e.json()})).then((function(e){return e.hits}))},E=document.querySelector("#loader-root"),k=function(){return Object(r.createPortal)(o.a.createElement("div",{className:"loader"},"Waiting! Page is loading..."),E)},O=function(e){return o.a.createElement("div",null,"Error: ",e)},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:""},a.handleChange=function(e){a.setState({query:e.target.value})},a.handleKey=function(e){"Enter"===e.key&&(e.preventDefault(),a.props.onSearch(a.state.query),a.setState({query:""}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"search-form",onKeyPress:this.handleKey},o.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search images...",value:this.state.query,onChange:this.handleChange}))}}]),t}(n.Component),w=a(10),N=a.n(w),C=function(){return o.a.createElement("div",null,o.a.createElement("img",{src:N.a,className:"img",alt:"img_not_found"}))},S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={images:[],isLoading:!1,error:null,pageNumber:1,query:""},a.onSearch=function(e){a.setState({query:e,images:[],pageNumber:1,isLoading:!0})},a.fetchImage=function(){var e=a.state,t=e.query,n=e.pageNumber;a.setState({isLoading:!0}),v(t,n).then((function(e){a.setState((function(t){return{images:[].concat(Object(s.a)(t.images),Object(s.a)(e)),pageNumber:t.pageNumber+1}}))})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})}))},a.GoToTop=function(){window.scrollTo({top:0,behavior:"smooth"})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state.query;t.query!==a&&this.fetchImage(),t.query!==a&&this.GoToTop(),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error;return o.a.createElement("div",{className:"App"},o.a.createElement(j,{onSearch:this.onSearch}),n&&o.a.createElement(O,{message:n.message}),a&&o.a.createElement(k,null),t.length<=0&&o.a.createElement(C,null),o.a.createElement(h.a,null,t.length>0&&o.a.createElement(y,{images:t})),t.length>0&&o.a.createElement("button",{type:"button",className:"buttonLoadMore",onClick:this.fetchImage},"Load more"),t.length>0&&o.a.createElement("button",{type:"button",className:"buttonGoToTop",onClick:this.GoToTop},"Go to top"))}}]),t}(n.Component);a(20);c.a.render(o.a.createElement(S,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.950d38fe.chunk.js.map