(this["webpackJsonpstar-wars-lib"]=this["webpackJsonpstar-wars-lib"]||[]).push([[0],{28:function(n,t,e){},29:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e(3),i=e.n(a),o=e(15),c=e.n(o),s=e(5),u=e(6),l=e(4),d=e(8),p=e(7),h=e(1),b=e(2);function j(){var n=Object(h.a)(["\n  font-size: 40px;\n  letter-spacing: 8px;\n  color: var(--white);\n"]);return j=function(){return n},n}function f(){var n=Object(h.a)(["\n  line-height: 0.35;\n"]);return f=function(){return n},n}function v(){var n=Object(h.a)(["\n  line-height: 0.7;\n  font-size: 180px;\n  transform-style: preserve-3d;\n  transform: perspective(8cm) rotateX(40deg) rotateY(0);\n"]);return v=function(){return n},n}function x(){var n=Object(h.a)(['\n  & > * {\n    font-family: "Star Jedi", sans-serif;\n    text-align: center;\n    user-select: none;\n  }\n']);return x=function(){return n},n}var O=b.a.div(x()),g=b.a.h1(v()),m=Object(b.a)(g)(f()),w=b.a.h2(j());function y(){return Object(r.jsxs)(O,{children:[Object(r.jsx)(g,{children:"star"}),Object(r.jsx)(w,{children:"library"}),Object(r.jsx)(m,{children:"wars"})]})}var k=e(12),S=e.n(k),F=e(19);function I(){var n=Object(h.a)(["\n  width: 100%;\n  border: 2px solid var(--white);\n  margin-bottom: 20px;\n  padding: 10px;\n  color: var(--white);\n  background-color: transparent;\n  transition: 0.3s;\n\n  &::placeholder {\n    font-family: 'Open sans', serif;\n    color: rgba(255, 255, 255, 0.6);\n    transition: 0.3s;\n  }\n\n  &:focus {\n    border-color: var(--white);\n    outline: none;\n    box-shadow: 0 0 10px white;\n  }\n\n  &:focus&::placeholder {\n    color: var(--white);\n  }\n\n  &:hover {\n    box-shadow: 0 0 10px white;\n  }\n"]);return I=function(){return n},n}function M(){var n=Object(h.a)(["\n  width: 100%;\n  padding: 0 25px;\n"]);return M=function(){return n},n}var R=b.a.div(M()),z=b.a.input(I());function C(n){return Object(r.jsx)(R,{children:Object(r.jsx)(z,{type:"text",placeholder:"e. g. Skywalker",id:"inputSearch",autoComplete:"off",onChange:n.handleValue})})}function N(){var n=Object(h.a)(["\n  font-size: 24px;\n\n  &:hover {\n    cursor: pointer;\n    color: var(--white);\n    text-decoration: underline;\n  }\n\n  &:focus {\n    color: var(--white);\n    text-decoration: underline;\n  }\n"]);return N=function(){return n},n}function L(){var n=Object(h.a)(["\n  display: none;\n\n  &:checked ~ * {\n    color: var(--white);\n    text-decoration: underline;\n  }\n"]);return L=function(){return n},n}var J=b.a.input(L()),V=b.a.label(N());function T(n){return Object(r.jsxs)("div",{children:[Object(r.jsx)(J,{type:"radio",name:"option",id:n.value,defaultChecked:n.checked}),Object(r.jsx)(V,{htmlFor:n.value,onClick:function(){n.handleOption(n.value)},children:n.value})]})}function Y(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: space-around;\n  padding: 0 120px;\n  margin-bottom: 30px;\n"]);return Y=function(){return n},n}var A=b.a.div(Y());function D(n){return Object(r.jsxs)(A,{children:[Object(r.jsx)(T,{value:"people",handleOption:n.handleOption,checked:!0}),Object(r.jsx)(T,{value:"planets",handleOption:n.handleOption}),Object(r.jsx)(T,{value:"starships",handleOption:n.handleOption})]})}function B(){var n=Object(h.a)(['\n  width: 100%;\n  border: 2px solid rgba(255,232,31, 0.2);\n  padding: 2px;\n  font-family: "Star Jedi";\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  color: var(--black);\n  background-color: rgba(255,232,31, 0.8);\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 10px rgba(255,232,31, 0.6);\n  }\n\n  &:hover {\n    background-color: var(--yellow);\n    box-shadow: 0 0 10px rgba(255,232,31, 0.6);\n  }\n']);return B=function(){return n},n}function P(){var n=Object(h.a)(["\n  width: 100%;\n  padding: 0 25px;\n"]);return P=function(){return n},n}var _=b.a.div(P()),q=b.a.button(B());function E(){return Object(r.jsx)(_,{children:Object(r.jsx)(q,{type:"submit",children:"Find"})})}function X(){var n=Object(h.a)(["\n  font-size: 30px;\n  font-weight: bold;\n  word-spacing: 3px;\n  letter-spacing: 1px;\n  text-align: center;\n  margin-bottom: 15px;\n"]);return X=function(){return n},n}function G(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return G=function(){return n},n}var H=b.a.form(G()),K=b.a.h3(X()),Q=function(n){Object(d.a)(e,n);var t=Object(p.a)(e);function e(n){var r;return Object(s.a)(this,e),(r=t.call(this,n)).state={value:"",option:"people"},r.handleSubmit=r.handleSubmit.bind(Object(l.a)(r)),r.handleValue=r.handleValue.bind(Object(l.a)(r)),r.handleOption=r.handleOption.bind(Object(l.a)(r)),r}return Object(u.a)(e,[{key:"handleSubmit",value:function(n){n.preventDefault(),this.getData()}},{key:"handleValue",value:function(n){this.setState({value:n.target.value.trim()})}},{key:"handleOption",value:function(n){this.setState({option:n})}},{key:"getData",value:function(){var n=Object(F.a)(S.a.mark((function n(){var t,e,r,a,i,o;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=this.state.value,e=this.state.option,""!==t){n.next=6;break}this.props.triggerModal(),n.next=21;break;case 6:return r="https://swapi.dev/api/"+e+"/?search="+t,n.next=9,fetch(r);case 9:if(!(a=n.sent).ok){n.next=19;break}return n.next=13,a.json();case 13:i=n.sent,o=i.results,this.props.getResponse(this.state.value,this.state.option,o,a.status),0===o.length?this.props.changeNotFound(!0):this.props.changeNotFound(!1),n.next=21;break;case 19:this.props.getResponse("","",[],a.status),this.props.changeNotFound(!0);case 21:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsxs)(H,{onSubmit:this.handleSubmit,children:[Object(r.jsx)(K,{children:"what would you like to find?"}),Object(r.jsx)(D,{handleOption:this.handleOption}),Object(r.jsx)(C,{handleValue:this.handleValue}),Object(r.jsx)(E,{})]})}}]),e}(i.a.Component);function U(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 38%;\n  padding: 60px 0 140px 0;\n"]);return U=function(){return n},n}var W=b.a.div(U());function Z(n){return Object(r.jsxs)(W,{children:[Object(r.jsx)(y,{}),Object(r.jsx)(Q,{getResponse:n.getResponse,triggerModal:n.triggerModal,changeNotFound:n.changeNotFound})]})}function $(){var n=Object(h.a)(["\n  display: none;\n\n  &:checked ~ * {\n    outline: none;\n    border-color: var(--white);\n    border-radius: none;\n    background-color: var(--white);\n    color: var(--black);\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(h.a)(["\n  display: block;\n  padding: 10px 0;\n  border: 1px solid var(--yellow);\n  text-align: center;\n  background-color: transparent;\n  cursor: pointer;\n  transition: 0.2s;\n\n  &:hover {\n    border-color: var(--white);\n    color: var(--white);\n  }\n"]);return nn=function(){return n},n}function tn(){var n=Object(h.a)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]);return tn=function(){return n},n}var en=b.a.li(tn()),rn=b.a.label(nn()),an=b.a.input($());function on(n){return Object(r.jsxs)(en,{children:[Object(r.jsx)(an,{type:"radio",name:"item",id:n.item.name}),Object(r.jsx)(rn,{htmlFor:n.item.name,onClick:function(){n.selectItem(n.item)},children:n.item.name})]})}function cn(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  padding: 0 50px;\n"]);return cn=function(){return n},n}var sn=b.a.ul(cn()),un=function(n){Object(d.a)(e,n);var t=Object(p.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){var n=this,t=this.props.response.map((function(t){return Object(r.jsx)(on,{item:t,selectItem:n.props.selectItem,getListOfItems:n.getListOfItems},t.name)})),e=document.querySelectorAll("input[name=item]");return Object.values(e).map((function(n){n.checked&&(n.checked=!1)})),Object(r.jsx)(sn,{children:t})}}]),e}(i.a.Component);function ln(){var n=Object(h.a)(["\n  fill: rgba(255, 255, 255, 0.8);\n  animation-name: ",";\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n"]);return ln=function(){return n},n}function dn(){var n=Object(h.a)(["\n  width: 150px;\n  height: 150px;\n  animation-name: ",";\n  animation-duration: 4s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n"]);return dn=function(){return n},n}function pn(){var n=Object(h.a)(["\n  0% {\n    fill: rgba(255, 255, 255, 0.8)\n  }\n  75% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(255, 255, 255, 0.8)\n  }\n"]);return pn=function(){return n},n}function hn(){var n=Object(h.a)(["\n  0% {\n    transform: translateY(6px) rotate(1deg);\n  }\n  50% {\n    transform: translateY(0) rotate(-1deg);\n  }\n  100% {\n    transform: translateY(6px) rotate(1deg);\n  }\n"]);return hn=function(){return n},n}var bn=Object(b.b)(hn()),jn=Object(b.b)(pn()),fn=b.a.svg(dn(),bn),vn=b.a.g(ln(),jn);function xn(){return Object(r.jsx)(fn,{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 880.000000 920.000000",preserveAspectRatio:"xMidYMid meet",children:Object(r.jsxs)(vn,{transform:"translate(0.000000,920.000000) scale(0.100000,-0.100000)",stroke:"none",children:[Object(r.jsx)("path",{d:"M4080 8779 c-1946 -158 -3504 -1713 -3660 -3653 -5 -71 -10 -142 -10\r -157 l0 -29 3995 0 c3884 0 3995 1 3995 19 0 104 -45 491 -73 626 l-13 60\r -812 3 -812 2 0 145 0 145 285 0 285 0 0 140 0 140 -570 0 -570 0 0 145 0 145\r 430 0 430 0 0 140 0 139 -142 3 -143 3 -3 143 -3 142 -284 0 -285 0 0 140 0\r 139 143 3 142 3 3 143 3 142 -291 0 -291 0 3 143 3 142 143 3 142 3 0 230 0\r 230 -77 36 c-399 183 -852 299 -1333 343 -133 12 -477 11 -630 -1z m-925 -861\r c440 -66 815 -406 924 -836 131 -516 -98 -1038 -569 -1295 -313 -171 -728\r -175 -1054 -10 -414 210 -667 673 -618 1130 72 660 659 1111 1317 1011z"}),Object(r.jsx)("path",{d:"M414 4543 c90 -1431 951 -2715 2241 -3339 787 -380 1614 -491 2488\r -333 l117 22 0 98 0 99 -140 0 -140 0 0 140 0 140 425 0 424 0 3 143 3 142\r 143 3 142 3 0 139 0 140 430 0 430 0 0 145 0 145 140 0 140 0 0 140 0 140\r -285 0 -285 0 0 145 0 145 -430 0 -430 0 0 140 0 140 288 2 287 3 3 143 3 142\r 569 0 570 0 0 140 0 140 -285 0 -285 0 0 145 0 145 664 0 c366 0 667 3 670 8\r 19 31 85 553 86 680 l0 22 -3996 0 -3996 0 6 -107z"})]})})}function On(){var n=Object(h.a)(['\n  font: bold 40px "Star Jedi";\n  letter-spacing: 3px;\n  margin-bottom: 25px;\n']);return On=function(){return n},n}function gn(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return gn=function(){return n},n}var mn=b.a.div(gn()),wn=b.a.p(On());function yn(){return Object(r.jsxs)(mn,{children:[Object(r.jsx)(wn,{children:"nothing found"}),Object(r.jsx)(xn,{})]})}function kn(){var n=Object(h.a)(['\n  font-family: "Star Jedi";\n  font-size: 26px;\n  letter-spacing: 4px;\n  color: var(--white);\n']);return kn=function(){return n},n}function Sn(){var n=Object(h.a)(["\n  font-size: 24px;\n"]);return Sn=function(){return n},n}function Fn(){var n=Object(h.a)(["\n  text-align: center;\n"]);return Fn=function(){return n},n}var In=b.a.div(Fn()),Mn=b.a.p(Sn()),Rn=b.a.p(kn());function zn(){return Object(r.jsxs)(In,{children:[Object(r.jsx)(Mn,{children:"Something went wrong"}),Object(r.jsx)(Rn,{children:"Try again."})]})}function Cn(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]);return Cn=function(){return n},n}var Nn=b.a.div(Cn());function Ln(n){return Object(r.jsx)(Nn,{children:200===n.responseStatus?Object(r.jsx)(yn,{}):Object(r.jsx)(zn,{})})}function Jn(){var n=Object(h.a)(["\n  width: 31%;\n"]);return Jn=function(){return n},n}var Vn=b.a.div(Jn()),Tn=function(n){Object(d.a)(e,n);var t=Object(p.a)(e);function e(n){var r;return Object(s.a)(this,e),(r=t.call(this,n)).whatToRender=r.whatToRender.bind(Object(l.a)(r)),r}return Object(u.a)(e,[{key:"whatToRender",value:function(){return this.props.notFound?Object(r.jsx)(Ln,{responseStatus:this.props.responseStatus}):Object(r.jsx)(un,{response:this.props.response,selectItem:this.props.selectItem})}},{key:"render",value:function(){return Object(r.jsx)(Vn,{children:this.props.firstLaunch?null:this.whatToRender()})}}]),e}(i.a.Component),Yn=e(13);function An(){var n=Object(h.a)(["\n  color: var(--white)\n"]);return An=function(){return n},n}function Dn(){var n=Object(h.a)(["\n  padding: 8px;\n  border: 1px solid var(--white);\n\n  &:not(:last-child) {\n    margin-bottom: 18px;\n  }\n"]);return Dn=function(){return n},n}var Bn=b.a.li(Dn()),Pn=b.a.span(An());function _n(n){return Object(r.jsxs)(Bn,{children:[Object(r.jsx)("span",{children:n.property}),": ",Object(r.jsx)(Pn,{children:n.value})]})}function qn(){var n=Object(h.a)(["\n  width: 100%;\n  padding: 50px;\n"]);return qn=function(){return n},n}var En=b.a.ul(qn());function Xn(n){var t=n.selectedItem;Object.entries(t).map((function(n){var e=Object(Yn.a)(n,2),r=e[0],a=e[1];return""===a||"url"===r||"created"===r||"edited"===r||"homeworld"===r||Array.isArray(a)?delete t[r]:void(r.includes("_")&&(Object.defineProperty(t,r.replace("_"," "),Object.getOwnPropertyDescriptor(t,r)),delete t[r]))}));var e=Object.entries(t).map((function(n){var t=Object(Yn.a)(n,2),e=t[0],a=t[1];return Object(r.jsx)(_n,{property:e,value:a},e)}));return Object(r.jsx)(En,{children:e})}function Gn(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 31%;\n"]);return Gn=function(){return n},n}var Hn=b.a.div(Gn());function Kn(n){return Object(r.jsx)(Hn,{children:n.notFound?Object(r.jsx)(Ln,{responseStatus:n.responseStatus}):Object(r.jsx)(Xn,{selectedItem:n.selectedItem})})}function Qn(){var n=Object(h.a)(["\n  padding: 10px 35px;\n  border: 1px solid var(--black);\n  background-color: var(--black);\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {\n    color: var(--black);\n    background-color: var(--white);\n    box-shadow: 0 0 7px 0 var(--black);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return Qn=function(){return n},n}function Un(){var n=Object(h.a)(["\n  margin-bottom: 25px;\n  color: var(--black);\n  font-size: 26px;\n  font-weight: bold;\n  word-spacing: 3px;\n"]);return Un=function(){return n},n}function Wn(){var n=Object(h.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 600px;\n  height: 200px;\n  background-color: var(--yellow);\n"]);return Wn=function(){return n},n}function Zn(){var n=Object(h.a)(["\n  position: fixed;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 9;\n"]);return Zn=function(){return n},n}var $n=b.a.div(Zn()),nt=b.a.div(Wn()),tt=b.a.p(Un()),et=b.a.button(Qn());function rt(n){return Object(r.jsx)($n,{children:Object(r.jsxs)(nt,{children:[Object(r.jsx)(tt,{children:"input field should not be empty!"}),Object(r.jsx)(et,{onClick:n.triggerModal,children:"close"})]})})}function at(){var n=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--black);\n"]);return at=function(){return n},n}var it=b.a.div(at()),ot=function(n){Object(d.a)(e,n);var t=Object(p.a)(e);function e(n){var r;return Object(s.a)(this,e),(r=t.call(this,n)).state={value:"",option:"",response:[],responseStatus:void 0,selectedItem:[],showModal:!1,notFound:!1,firstLaunch:!0},r.getResponse=r.getResponse.bind(Object(l.a)(r)),r.triggerModal=r.triggerModal.bind(Object(l.a)(r)),r.selectItem=r.selectItem.bind(Object(l.a)(r)),r.changeNotFound=r.changeNotFound.bind(Object(l.a)(r)),r}return Object(u.a)(e,[{key:"getResponse",value:function(n,t,e,r){this.setState({value:n,option:t,response:e,responseStatus:r,firstLaunch:!1,selectedItem:[]})}},{key:"triggerModal",value:function(){this.setState({showModal:!this.state.showModal})}},{key:"selectItem",value:function(n){this.setState({selectedItem:n})}},{key:"changeNotFound",value:function(n){this.setState({notFound:!!n})}},{key:"render",value:function(){return Object(r.jsxs)(it,{children:[this.state.showModal?Object(r.jsx)(rt,{triggerModal:this.triggerModal}):null,Object(r.jsx)(Tn,{response:this.state.response,responseStatus:this.state.responseStatus,selectItem:this.selectItem,firstLaunch:this.state.firstLaunch,notFound:this.state.notFound}),Object(r.jsx)(Z,{getResponse:this.getResponse,triggerModal:this.triggerModal,changeNotFound:this.changeNotFound}),Object(r.jsx)(Kn,{response:this.state.response,responseStatus:this.state.responseStatus,selectedItem:this.state.selectedItem,notFound:this.state.notFound})]})}}]),e}(i.a.Component);e(28);c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(ot,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.5cece9c0.chunk.js.map