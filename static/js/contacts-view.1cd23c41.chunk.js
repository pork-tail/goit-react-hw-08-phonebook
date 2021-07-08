(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{104:function(t,e,n){t.exports={title:"Contacts_title__iGour",titleContact:"Contacts_titleContact__3X0De",block:"Contacts_block__2Lwn4"}},108:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(8),r=n(17),s=n.n(r),o=n(23),i=n(19),u=n.n(i),l=n(10);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var b=n(82),d=n.n(b),p=n(27),m=function(t){return t.contacts.loading},h=function(t){return t.contacts.filter},j=function(t){return t.contacts.items},f=Object(p.a)([j,h],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase().trim())}))})),_=n(1),O={handleDelete:function(t){return function(){var e=Object(o.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(l.i)()),e.prev=1,e.next=4,u.a.delete("/contacts/".concat(t));case 4:n(Object(l.j)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(l.h)(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},C=Object(c.b)((function(t){return{items:f(t)}}),O)((function(t){var e=t.items,n=t.handleDelete;return Object(_.jsx)("ul",{className:d.a.ul,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(_.jsxs)("li",{className:d.a.textContent,children:[Object(_.jsxs)("p",{children:[a,": ",c]}),Object(_.jsx)("button",{className:d.a.deleteContact,type:"button",onClick:function(){return n(e)},children:"X"})]},e)}))})})),x=n(83),v=n.n(x),g={handleChange:l.d},k=Object(c.b)((function(t){return{filter:h(t)}}),g)((function(t){var e=t.filter,n=t.handleChange;return Object(_.jsxs)("div",{className:v.a.block,children:[Object(_.jsx)("h2",{className:v.a.title,children:"Find contacts by name"}),Object(_.jsx)("input",{className:v.a.input,id:"filter",name:"filter",type:"text",onChange:function(t){n(t.target.value)},value:e})]})})),N=n(4),w=n(34),y=n(35),F=n(37),A=n(36),D=n(84),L=n.n(D),S=n(85),z=n.n(S),q=function(t){Object(F.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(w.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e,n){if(t.props.items.some((function(t){return t.name===e})))alert(e+" is already in contacts");else{var a={name:e,number:n};t.props.addNewContacts(a)}},t.handleChange=function(e){t.setState(Object(N.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.handleSubmit(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(y.a)(n,[{key:"componentDidMount",value:function(){this.props.getAllContacts()}},{key:"render",value:function(){return Object(_.jsxs)("div",{className:L.a.block,children:[Object(_.jsxs)("form",{className:L.a.form,onSubmit:this.onSubmit,children:[Object(_.jsx)("span",{className:L.a.title,children:"Name:"}),Object(_.jsx)("input",{className:L.a.input,onChange:this.handleChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(_.jsx)("span",{className:L.a.title,children:"Number Tel:"}),Object(_.jsx)("input",{className:L.a.input,name:"number",type:"tel",onChange:this.handleChange,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(_.jsx)("button",{className:L.a.addContact,type:"submit",children:"Add contact"})]}),Object(_.jsx)("div",{className:L.a.speener,children:this.props.loading?Object(_.jsx)(z.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:100,timeout:3e3}):""})]})}}]),n}(a.Component),E={addNewContacts:function(t){return function(){var e=Object(o.a)(s.a.mark((function e(n){var a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(l.b)()),e.prev=1,e.next=4,u.a.post("/contacts",t);case 4:a=e.sent,c=a.data,n(Object(l.c)(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(l.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getAllContacts:function(){return function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(l.f)()),t.prev=1,t.next=4,u.a.get("/contacts");case 4:n=t.sent,a=n.data,e(Object(l.g)(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(l.e)(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},J=Object(c.b)((function(t){return{items:j(t),loading:m(t)}}),E)(q),B=n(104),M=n.n(B);e.default=function(){return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)("h1",{className:M.a.title,children:"Phonebook"}),Object(_.jsx)(J,{}),Object(_.jsx)("h2",{className:M.a.title,children:"Contacts"}),Object(_.jsxs)("div",{className:M.a.block,children:[Object(_.jsx)(k,{}),Object(_.jsx)(C,{})]})]})}},82:function(t,e,n){t.exports={ul:"ContactList_ul__2SEi_",deleteContact:"ContactList_deleteContact__DqEVs",textContent:"ContactList_textContent__3tdJz"}},83:function(t,e,n){t.exports={block:"Filter_block__3EzTt",title:"Filter_title__mtLuE",input:"Filter_input__2DoVp"}},84:function(t,e,n){t.exports={block:"ContactForm_block__3L7f5",form:"ContactForm_form__1fuOn",title:"ContactForm_title__3MqSl",input:"ContactForm_input__gm87B",addContact:"ContactForm_addContact__1rNoD",speener:"ContactForm_speener__2h4CR"}}}]);
//# sourceMappingURL=contacts-view.1cd23c41.chunk.js.map