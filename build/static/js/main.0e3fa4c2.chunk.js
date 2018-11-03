(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(t,e,n){t.exports=n(39)},31:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(22),c=n.n(r),i=(n(31),n(7)),l=n(8),s=n(11),d=n(9),u=n(12),m=n(14),h=function(){return o.a.createElement("div",{className:"page-header"},o.a.createElement("h1",{className:"text-center"},"Todo App"))},p=n(40),b=n(5),f=Object(b.b)(null,function(t){return{deleteTodo:function(e){t(function(t){return{type:"DELETE_TODO",id:t}}(e))}}})(function(t){var e=t.todo,n=t.handleDelete,a=(t.handleEdit,t.deleteTodo);return n=function(t){a(t)},o.a.createElement("div",{className:"list-group-item text-center"},o.a.createElement("h5",null,e.title),o.a.createElement("p",null,e.content),o.a.createElement("span",{className:"fa fa-trash",onClick:function(t){return n(e.id)}}),o.a.createElement(p.a,{to:{pathname:"/editTodo/".concat(e.id),state:{title:e.title,content:e.content,id:e.id}}},o.a.createElement("span",{className:"fa fa-edit"})))}),E=function(){return o.a.createElement(p.a,{to:"/newTodo"},o.a.createElement("button",{className:"btn btn-primary"},"Add New Todo"))},v=function(t){var e=t.todos,n=e.length>0?e.map(function(t){return o.a.createElement(f,{key:t.id,todo:t})}):o.a.createElement("div",null,"No todos yet...");return o.a.createElement("div",{className:"form-group"},n,o.a.createElement(E,null))},O=n(6),g=n(13),j=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(d.a)(e).call(this,t))).handleInputChange=function(t){var e=t.target.value,a=Math.floor(100*Math.random()),o=[t.target.name];if(n.state.errors[t.target.name]){var r=Object.assign({},n.state.errors);delete r[t.target.name],n.setState(function(t){var n;return{todo:Object(g.a)({},t.todo,(n={},Object(O.a)(n,o,e),Object(O.a)(n,"id",a),n)),errors:r}})}else n.setState(function(t){var n;return{todo:Object(g.a)({},t.todo,(n={},Object(O.a)(n,o,e),Object(O.a)(n,"id",a),n))}})},n.handleSubmit=function(t){t.preventDefault(),n.props.checkValidation(n.state.todo)&&(n.props.addTodo(n.state.todo),n.setState({todo:{title:"",content:""}}),n.props.history.push("/"))},n.state={todo:{title:"",content:"",id:0},errors:{}},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({errors:t.errors})}},{key:"render",value:function(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"title"},"Todo Title:"),o.a.createElement("input",{type:"text",id:"title",name:"title",className:"form-control",value:this.state.todo.title,onChange:this.handleInputChange}),this.state.errors.title&&o.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.errors.title)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"content"},"Todo content:"),o.a.createElement("textarea",{className:"form-control",id:"content",name:"content",value:this.state.todo.content,onChange:this.handleInputChange}),this.state.errors.content&&o.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.errors.content)),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))}}]),e}(a.Component),T=Object(b.b)(null,function(t){return{addTodo:function(e){t(function(t){return{type:"ADD_TODO",todo:t}}(e))}}})(j),y=function(t){function e(t){var n;Object(i.a)(this,e);var a=t.history.location.state,o=a.title,r=a.content,c=a.id;return(n=Object(s.a)(this,Object(d.a)(e).call(this,t))).handleInputChange=function(t){var e=t.target.value,a=[t.target.name];if(n.state.errors[t.target.name]){var o=Object.assign({},n.state.errors);delete o[t.target.name],n.setState(function(t){return{todo:Object(g.a)({},t.todo,Object(O.a)({},a,e)),errors:o}})}else n.setState(function(t){return{todo:Object(g.a)({},t.todo,Object(O.a)({},a,e))}})},n.handleSubmit=function(t){t.preventDefault(),n.props.checkValidation(n.state.todo)&&(n.props.editTodo(n.state.todo),n.setState({todo:{title:"",content:""}}),n.props.history.push("/"))},n.state={todo:{title:o,content:r,id:c},errors:{}},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({errors:t.errors})}},{key:"render",value:function(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"title"},"Todo Title:"),o.a.createElement("input",{type:"text",id:"title",name:"title",className:"form-control",value:this.state.todo.title,onChange:this.handleInputChange}),this.state.errors.title&&o.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.errors.title)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"content"},"Todo content:"),o.a.createElement("textarea",{className:"form-control",id:"content",name:"content",value:this.state.todo.content,onChange:this.handleInputChange}),this.state.errors.content&&o.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.errors.content)),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))}}]),e}(a.Component),N=Object(b.b)(null,function(t){return{editTodo:function(e){t(function(t){return{type:"EDIT_TODO",editedTodo:t}}(e))}}})(y),k=n(41),w=n(42),D=n(43),S=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(d.a)(e).call(this,t))).checkValidation=n.checkValidation.bind(Object(m.a)(Object(m.a)(n))),n.state={errors:{}},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"checkValidation",value:function(t){var e={},n=!0;return this.props.todos.forEach(function(a){t.title===a.title&&t.content===a.content&&(e.title="Todo already exists...",n=!1)}),"string"===typeof t.title&&""===t.title&&(e.title="Title can't be empty",n=!1),"string"===typeof t.title&&t.title.length<2&&""!==t.title&&(e.title="Title must be more then 1 char",n=!1),"string"===typeof t.content&&""===t.content&&(e.content="Content can't be empty",n=!1),"string"===typeof t.content&&t.content.length<2&&""!==t.content&&(e.content="Content must be more then 1 char",n=!1),this.setState({errors:e}),n}},{key:"render",value:function(){var t=this,e=this.props.todos;return o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(k.a,null,o.a.createElement(w.a,null,o.a.createElement(D.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(v,Object.assign({},t,{todos:e}))}}),o.a.createElement(D.a,{path:"/newTodo",render:function(e){return o.a.createElement(T,Object.assign({},e,{checkValidation:t.checkValidation,errors:t.state.errors}))}}),o.a.createElement(D.a,{path:"/editTodo/:id",render:function(e){return o.a.createElement(N,Object.assign({},e,{checkValidation:t.checkValidation,errors:t.state.errors}))}}))))}}]),e}(a.Component),C=Object(b.b)(function(t){return{todos:t.todos}})(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=n(10),I=n(19),V={todos:[{id:1,title:"Make a todo app",content:"Do it!"}]},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DELETE_TODO":return t.filter(function(t){return t.id!==e.id});case"ADD_TODO":return console.log(t),Object(I.a)(t).concat([e.todo]);case"EDIT_TODO":var n=Object(I.a)(t),a=n.findIndex(function(t){return e.editedTodo.id===t.id});return n[a].title=e.editedTodo.title,n[a].content=e.editedTodo.content,n}return t.todos},A=Object(x.b)({todos:_}),F=Object(x.c)(A);c.a.render(o.a.createElement(b.a,{store:F},o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.0e3fa4c2.chunk.js.map