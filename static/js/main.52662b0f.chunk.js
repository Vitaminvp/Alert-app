(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(49)},34:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),i=(a(34),a(27)),u=a(5),o=a(6),s=a(9),m=a(7),p=a(10),h=a(56),f=a(52),d=a(53),b=a(26),v=a(57),E=a(54),y=a(55),j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.target.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.props.target.removeChild(this.el)}},{key:"render",value:function(){return l.createPortal(this.props.children,this.el)}}]),t}(n.Component),O=function(e){return function(t){return function(a){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={isVisible:!0},t}return Object(p.a)(n,a),Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){t.setState({isVisible:!1})},e)}},{key:"render",value:function(){return this.state.isVisible?r.a.createElement(t,this.props):null}}]),n}(r.a.Component)}},g=function(e){return function(t){return function(a){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,a),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(t,Object.assign({},this.props,{target:e}))}}]),n}(r.a.Component)}}(document.querySelector(".alerts-list"))(j),k=O(5e3)(h.a),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",alerts:[]},a.inputRef=r.a.createRef(),a.handleChange=function(e){var t=e.target.value;t&&a.setState({value:t})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.value;t&&a.setState({alerts:[].concat(Object(i.a)(a.state.alerts),[t])}),a.setState({value:""}),a.inputRef.current.focus()},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.alerts,n=["primary","secondary","success","danger","warning","info","light","dark"];return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(b.a,{md:{span:6,offset:3}},r.a.createElement(v.a,{onSubmit:this.handleSubmit},r.a.createElement(v.a.Group,{controlId:"formBasicEmail"},r.a.createElement(v.a.Label,null,r.a.createElement(E.a,{variant:"secondary"},"Home work #13"),r.a.createElement("h1",null,"Alerts app")),r.a.createElement(v.a.Control,{type:"text",placeholder:"Enter alert text",onChange:this.handleChange,value:t,ref:this.inputRef}),r.a.createElement(v.a.Text,{className:"text-muted"},"Enter alert text")),r.a.createElement(y.a,{variant:"primary",type:"submit",disabled:!t},"Add Alert"))))),r.a.createElement(g,null,r.a.createElement(f.a,{style:{marginTop:50}},r.a.createElement(d.a,null,r.a.createElement(b.a,{md:{span:6,offset:3}},a.map(function(e,t){var a=n[t%(n.length+1)];return console.log(t%a.length),r.a.createElement(k,{key:t,variant:a},e)}))))))}}]),t}(r.a.PureComponent);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.52662b0f.chunk.js.map