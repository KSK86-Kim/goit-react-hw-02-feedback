(this["webpackJsonpeasy-start-react"]=this["webpackJsonpeasy-start-react"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={container:"Container_container__3dNJK",title:"Container_title__1Lm9_"}},,,,function(e,t,n){e.exports={header:"Header_header___eZG7"}},function(e,t,n){e.exports={main:"Main_main__3_l2O"}},function(e,t,n){e.exports={footer:"Footer_footer__10sUP"}},function(e,t,n){e.exports={"buttons-wrapper":"FeedbackOptions_buttons-wrapper__jNzOm"}},,,,,function(e,t,n){},,function(e,t,n){e.exports={title:"Section_title__Md7Er"}},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),i=n.n(a),o=(n(18),n(9)),s=n(2),l=n(3),u=n(5),j=n(4),b=n(10),d=n.n(b),h=n(0),O=function(e){var t=e.children;return Object(h.jsx)("header",{className:d.a.header,children:t})},p=n(11),f=n.n(p),x=function(e){var t=e.children;return Object(h.jsx)("header",{className:f.a.main,children:t})},v=n(12),m=n.n(v),k=function(e){var t=e.children;return Object(h.jsx)("footer",{className:m.a.footer,children:t})},_=n(6),g=n.n(_),y=function(e){var t=e.children,n=e.title,c=e.mainTitle,r=[g.a.container];return Object(h.jsxs)("div",{className:r,children:[Object(h.jsx)("h1",{className:g.a.title,children:c}),Object(h.jsx)("h2",{className:g.a.title,children:n}),t]})},F=(n(20),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(h.jsx)("section",{children:e})}}]),n}(c.Component)),N=n(13),C=n.n(N),P=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("div",{className:C.a["buttons-wrapper"],children:t.map((function(e){return Object(h.jsx)("button",{onClick:n,name:e,children:e},e)}))})}}]),n}(c.Component),T=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Good : ",t]}),Object(h.jsxs)("li",{children:["Neutral : ",n]}),Object(h.jsxs)("li",{children:["Bad : ",c]}),Object(h.jsxs)("li",{children:["Total : ",r]}),Object(h.jsxs)("li",{children:["Positive feedback : ",a," %"]})]})}}]),n}(c.Component),w=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.message;return Object(h.jsx)("p",{children:e})}}]),n}(c.Component),M=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.onFeedbackClick=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return e.countTotalFeedback()?Math.floor(e.state.good/e.countTotalFeedback()*100):null},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsx)(x,{children:Object(h.jsxs)(F,{children:[Object(h.jsx)(y,{mainTitle:"FeedBack",children:Object(h.jsx)(P,{options:Object.keys(this.state),onLeaveFeedback:this.onFeedbackClick})}),Object(h.jsx)(y,{title:"Statistics",children:this.countTotalFeedback()?Object(h.jsx)(T,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(w,{message:"No feedback gicen"})})]})}),Object(h.jsx)(k,{})]})}}]),n}(c.Component);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.406c6641.chunk.js.map