(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){},40:function(e,t,a){},51:function(e,t,a){},56:function(e,t,a){e.exports=a(90)},62:function(e,t,a){},63:function(e,t,a){},86:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(26),r=a.n(n),c=(a(61),a(62),a(5)),l=a(6),o=a(8),h=a(7),m=a(9),u=(a(40),a(18)),d=a(24),v=(a(23),a(22)),E=function(){function e(t,a,s){Object(c.a)(this,e),this.size=t,this.bkgd="white",this.color="black",this.ctx=a,this.ctx.fillStyle=this.bkgd,this.ctx.fillRect(0,0,t,t),this.ctx.fillStyle=this.color,this.ctx.strokeStyle=this.color,this.ctx.lineWidth=1.2,this.symbols=s}return Object(l.a)(e,[{key:"addSymbol",value:function(e){this.symbols.includes(e)||(this.symbols.push(e),this._drawSymbol(e))}},{key:"deleteSymbol",value:function(e){this.symbols.includes(e)&&(this.symbols.splice(this.symbols.indexOf(e),1),this._clear(),this._redraw())}},{key:"clearDiagram",value:function(){this.symbols=[],this._clear()}},{key:"_clear",value:function(){this.ctx.clearRect(0,0,this.size,this.size),this.ctx.fillStyle=this.bkgd,this.ctx.fillRect(0,0,this.size,this.size),this.ctx.fillStyle=this.color}},{key:"_redraw",value:function(){var e,t=!0,a=!1,s=void 0;try{for(var i,n=this.symbols[Symbol.iterator]();!(t=(i=n.next()).done);t=!0)e=i.value,this._drawSymbol(e)}catch(r){a=!0,s=r}finally{try{t||null==n.return||n.return()}finally{if(a)throw s}}}},{key:"_drawSymbol",value:function(e){switch(e){case"A1":this._drawA1();break;case"A2":this._drawA2();break;case"A3":this._drawA3();break;case"A4":this._drawA4();break;case"B1":this._drawB1();break;case"B2":this._drawB2();break;case"B3":this._drawB3();break;case"B4":this._drawB4();break;case"C1":this._drawC1();break;case"C2":this._drawC2();break;case"C3":this._drawC3();break;case"C4":this._drawC4();break;case"D1":this._drawD1();break;case"D2":this._drawD2();break;case"D3":this._drawD3();break;case"D4":this._drawD4();break;case"E1":this._drawE1();break;case"E2":this._drawE2();break;case"E3":this._drawE3();break;case"E4":this._drawE4();break;case"F1":this._drawF1();break;case"F2":this._drawF2();break;case"F3":this._drawF3();break;case"F4":this._drawF4();break;case"Left":this._drawLeft();break;case"Right":this._drawRight();break;case"RightCompl":this._drawRightCompl();break;case"AND":this._drawAND();break;case"OR":this._drawOR();break;case"XOR":this._drawXOR()}}},{key:"_drawA1",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.size/2,0),this.ctx.lineTo(this.size/2,this.size),this.ctx.stroke()}},{key:"_drawA2",value:function(){this.ctx.beginPath(),this.ctx.moveTo(0,this.size/2),this.ctx.lineTo(this.size,this.size/2),this.ctx.stroke()}},{key:"_drawA3",value:function(){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.size,this.size),this.ctx.stroke()}},{key:"_drawA4",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.size,0),this.ctx.lineTo(0,this.size),this.ctx.stroke()}},{key:"_drawB1",value:function(){var e=this.size/2-6;this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size/2,e,1*Math.PI,1.5*Math.PI),this.ctx.stroke()}},{key:"_drawB2",value:function(){var e=this.size/2-6;this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size/2,e,1.5*Math.PI,0),this.ctx.stroke()}},{key:"_drawB3",value:function(){var e=this.size/2-6;this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size/2,e,.5*Math.PI,1*Math.PI),this.ctx.stroke()}},{key:"_drawB4",value:function(){var e=this.size/2-6;this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size/2,e,0,.5*Math.PI),this.ctx.stroke()}},{key:"_drawC1",value:function(){this.ctx.beginPath(),this.ctx.arc(4,4,2.5,0,2*Math.PI),this.ctx.fill()}},{key:"_drawC2",value:function(){this.ctx.beginPath(),this.ctx.arc(this.size-4,4,2.5,0,2*Math.PI),this.ctx.fill()}},{key:"_drawC3",value:function(){this.ctx.beginPath(),this.ctx.arc(this.size-4,this.size-4,2.5,0,2*Math.PI),this.ctx.fill()}},{key:"_drawC4",value:function(){this.ctx.beginPath(),this.ctx.arc(4,this.size-4,2.5,0,2*Math.PI),this.ctx.fill()}},{key:"_drawD1",value:function(){var e=.1*this.size;this._strokeStar(this.ctx,this.size/2,this.size/2,e,8,.6)}},{key:"_drawD2",value:function(){var e=.16*this.size;this._strokeStar(this.ctx,this.size/2,this.size/2,e,8,.6)}},{key:"_drawD3",value:function(){var e=.22*this.size;this._strokeStar(this.ctx,this.size/2,this.size/2,e,8,.6)}},{key:"_drawD4",value:function(){var e=this.size-4;this.ctx.beginPath(),this.ctx.moveTo(2,2),this.ctx.lineTo(e+2,2),this.ctx.lineTo(e+2,e+2),this.ctx.lineTo(2,e+2),this.ctx.closePath(),this.ctx.stroke()}},{key:"_drawE1",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2-8),this.ctx.lineTo(this.size/2+6,this.size/2),this.ctx.lineTo(this.size/2-6,this.size/2),this.ctx.closePath(),this.ctx.fill(),this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2),this.ctx.lineTo(this.size/2,this.size/2+8),this.ctx.stroke(),this.ctx.lineWidth=1}},{key:"_drawE2",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.size/2+8,this.size/2),this.ctx.lineTo(this.size/2,this.size/2+6),this.ctx.lineTo(this.size/2,this.size/2-6),this.ctx.closePath(),this.ctx.fill(),this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2),this.ctx.lineTo(this.size/2-8,this.size/2),this.ctx.stroke(),this.ctx.lineWidth=1}},{key:"_drawE3",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2+8),this.ctx.lineTo(this.size/2-6,this.size/2),this.ctx.lineTo(this.size/2+6,this.size/2),this.ctx.closePath(),this.ctx.fill(),this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2),this.ctx.lineTo(this.size/2,this.size/2-8),this.ctx.stroke(),this.ctx.lineWidth=1}},{key:"_drawE4",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.size/2-8,this.size/2),this.ctx.lineTo(this.size/2,this.size/2-6),this.ctx.lineTo(this.size/2,this.size/2+6),this.ctx.closePath(),this.ctx.fill(),this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2),this.ctx.lineTo(this.size/2+8,this.size/2),this.ctx.stroke(),this.ctx.lineWidth=1}},{key:"_drawF1",value:function(){this.ctx.beginPath(),this.ctx.arc(this.size/2,6,3,0,2*Math.PI),this.ctx.stroke()}},{key:"_drawF2",value:function(){this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size-6,3,0,2*Math.PI),this.ctx.stroke()}},{key:"_drawF3",value:function(){this.ctx.beginPath(),this.ctx.arc(6,this.size/2,3,0,2*Math.PI),this.ctx.stroke()}},{key:"_drawF4",value:function(){this.ctx.beginPath(),this.ctx.arc(this.size-6,this.size/2,3,0,2*Math.PI),this.ctx.stroke()}},{key:"_strokeStar",value:function(e,t,a,s,i,n){e.save(),e.beginPath(),e.translate(t,a),e.moveTo(0,0-s);for(var r=0;r<i;r++)e.rotate(Math.PI/i),e.lineTo(0,0-s*n),e.rotate(Math.PI/i),e.lineTo(0,0-s);e.closePath(),e.fill(),e.restore()}},{key:"_drawLeft",value:function(){var e=.8*this.size;this.ctx.beginPath(),this.ctx.arc(1.5*this.size,this.size/2,e,.5*Math.PI,1.5*Math.PI),this.ctx.stroke()}},{key:"_drawRight",value:function(){var e=.8*this.size;this.ctx.beginPath(),this.ctx.arc(-.5*this.size,this.size/2,e,1.5*Math.PI,.5*Math.PI),this.ctx.moveTo(.6*this.size,.45*this.size),this.ctx.lineTo(.9*this.size,.45*this.size),this.ctx.moveTo(.6*this.size,.55*this.size),this.ctx.lineTo(.9*this.size,.55*this.size),this.ctx.stroke()}},{key:"_drawRightCompl",value:function(){this._drawRight();var e=.12*this.size;this.ctx.beginPath(),this.ctx.arc(.5*this.size,.14*this.size,e,.4*Math.PI,1.6*Math.PI),this.ctx.stroke()}},{key:"_drawAND",value:function(){var e=.25*this.size;this.ctx.beginPath(),this.ctx.arc(.6*this.size,.6*this.size,e,Math.PI,2*Math.PI),this.ctx.moveTo(.6*this.size+e,.6*this.size),this.ctx.lineTo(.6*this.size+e,.75*this.size),this.ctx.moveTo(.6*this.size-e,.6*this.size),this.ctx.lineTo(.6*this.size-e,.75*this.size),this.ctx.stroke()}},{key:"_drawOR",value:function(){var e=.25*this.size;this.ctx.beginPath(),this.ctx.arc(.6*this.size,.6*this.size,e,0,Math.PI),this.ctx.moveTo(.6*this.size+e,.6*this.size),this.ctx.lineTo(.6*this.size+e,.45*this.size),this.ctx.moveTo(.6*this.size-e,.6*this.size),this.ctx.lineTo(.6*this.size-e,.45*this.size),this.ctx.stroke()}},{key:"_drawXOR",value:function(){this.ctx.beginPath(),this.ctx.moveTo(.5*this.size,.25*this.size),this.ctx.lineTo(.8*this.size,.75*this.size),this.ctx.lineTo(.2*this.size,.75*this.size),this.ctx.closePath(),this.ctx.stroke()}}]),e}();function p(e){for(var t=["A","B","C","D","E","F"],a=[],s="0000000000"+e,i=s.substr(s.length-6),n=0;n<t.length;n++){var r=t[n],c=parseInt(i.charAt(n),16),l=(4&c)>>2,o=(2&c)>>1,h=1&c;(8&c)>>3&&a.push(r+"1"),l&&a.push(r+"2"),o&&a.push(r+"3"),h&&a.push(r+"4")}return a}var b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).size=48,a.diagram=null,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.canvas.getContext("2d");this.diagram=new E(this.size,e,this.props.shapes),this.diagram._redraw()}},{key:"componentDidUpdate",value:function(){this.diagram.symbols=this.props.shapes,this.diagram._clear(),this.diagram._redraw()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("canvas",{ref:"canvas",width:this.size,height:this.size}))}}]),t}(s.Component);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).selectShapeHandler=function(e){var t=e.currentTarget.id,s=Object(u.a)(a.state.answer),i=x({},a.state.btnStates);"off"===i[t]?s.indexOf(t)<0&&(s.push(t),i[t]="on",a.setState({answer:s,btnStates:i})):"on"===i[t]&&s.indexOf(t)>=0&&(s.splice(s.indexOf(t),1),i[t]="off",a.setState({answer:s,btnStates:i}))},a.resetAnswerHandler=function(){var e=x({},a.state.btnStates);for(var t in e)e[t]="off";a.setState({answer:[],btnStates:e})},a.nextCaseHandler=function(){a.props.nextCaseHandler(function(e){for(var t=["A","B","C","D","E","F"],a="",s=0;s<t.length;s++){var i=t[s];a+=(8*e.includes(i+"1")+4*e.includes(i+"2")+2*e.includes(i+"3")+e.includes(i+"4")).toString(16)}return a}(a.state.answer)),a.resetAnswerHandler()},a.state={answer:[],btnStates:{A1:"off",B1:"off",C1:"off",D1:"off",E1:"off",F1:"off",A2:"off",B2:"off",C2:"off",D2:"off",E2:"off",F2:"off",A3:"off",B3:"off",C3:"off",D3:"off",E3:"off",F3:"off",A4:"off",B4:"off",C4:"off",D4:"off",E4:"off",F4:"off"}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=null===this.props.case;return i.a.createElement("div",null,i.a.createElement("div",{id:"test-and-loader"},i.a.createElement("div",{id:"test-container"},i.a.createElement("div",{className:"canvas-matrix"},i.a.createElement("div",{className:"board-row"},i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:t?[]:p(this.props.case.line1.arg1)})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:t?[]:p(this.props.case.line1.arg2)})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:t?[]:p(this.props.case.line1.result)}))),i.a.createElement("div",{className:"board-row"},i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:t?[]:p(this.props.case.line2.arg1)})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:t?[]:p(this.props.case.line2.arg2)})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:t?[]:p(this.props.case.line2.result)}))),i.a.createElement("div",{className:"board-row"},i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:t?[]:p(this.props.case.line3.arg1)})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:t?[]:p(this.props.case.line3.arg2)})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:this.state.answer})))),i.a.createElement("div",{id:"nav-buttons"},i.a.createElement("button",{className:t?"nav-btn-init shake":"nav-btn",onClick:this.nextCaseHandler}," ",t?"Start Test":"Submit"," "),i.a.createElement("button",{className:"nav-btn",onClick:this.resetAnswerHandler},"Reset")))),i.a.createElement("div",{className:"canvas-matrix"},i.a.createElement("div",{className:"menu-row"},["A","B","C","D","E","F"].map((function(t){return i.a.createElement("button",{className:"menu-btn-"+e.state.btnStates[t+1],key:t+1,id:t+1,onClick:e.selectShapeHandler},i.a.createElement(b,{shapes:[t+1]}))}))),i.a.createElement("div",{className:"menu-row"},["A","B","C","D","E","F"].map((function(t){return i.a.createElement("button",{className:"menu-btn-"+e.state.btnStates[t+2],key:t+2,id:t+2,onClick:e.selectShapeHandler},i.a.createElement(b,{shapes:[t+2]}))}))),i.a.createElement("div",{className:"menu-row"},["A","B","C","D","E","F"].map((function(t){return i.a.createElement("button",{className:"menu-btn-"+e.state.btnStates[t+3],key:t+3,id:t+3,onClick:e.selectShapeHandler},i.a.createElement(b,{shapes:[t+3]}))}))),i.a.createElement("div",{className:"menu-row"},["A","B","C","D","E","F"].map((function(t){return i.a.createElement("button",{className:"menu-btn-"+e.state.btnStates[t+4],key:t+4,id:t+4,onClick:e.selectShapeHandler},i.a.createElement(b,{shapes:[t+4]}))})))))}}]),t}(s.Component),w=(a(63),a(10)),N=a(11),y=a.n(N),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={result:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("App --\x3e componentDidMount()"),y.a.get("/api/results").then((function(t){e.setState({result:t.data})})).catch((function(e){console.log("Fehler bei iq_result Component Did mount",e)}))}},{key:"render",value:function(){var e=this.state.result.score,t=this.state.result.numberOfCases,a=Math.round(e/t*100).toString();return i.a.createElement("div",{className:"resultPage"},i.a.createElement("div",{className:"resultHeader"},i.a.createElement("h1",null,"Result of your current test")),i.a.createElement("div",{className:"tableresult"},i.a.createElement("div",{className:"resulttr1"},i.a.createElement("div",{className:"resultth"},"Name :"),i.a.createElement("div",{className:"resulttd"},this.state.result.userName)),i.a.createElement("div",{className:"resulttr"},i.a.createElement("div",{className:"resultth"},"Test Name :"),i.a.createElement("div",{className:"resulttd"},this.state.result.testName)),i.a.createElement("div",{className:"resulttr1"},i.a.createElement("div",{className:"resultth"},"Elapsed Time :"),i.a.createElement("div",{className:"resulttd"},this.state.result.elapsedTime)),i.a.createElement("div",{className:"resulttr"},i.a.createElement("div",{className:"resultth"},"Executed Cases :"),i.a.createElement("div",{className:"resulttd"},this.state.result.numberOfCases)),i.a.createElement("div",{className:"resulttr1"},i.a.createElement("div",{className:"resultth"},"Your Score :"),i.a.createElement("div",{className:"resulttd"},this.state.result.score)),i.a.createElement("div",{className:"resulttr"},i.a.createElement("div",{className:"resultth"},"Complexity :"),i.a.createElement("div",{className:"resulttd"},this.state.result.complexity)),i.a.createElement("div",{className:"resulttr1"},i.a.createElement("div",{className:"resultth"},"Percentage :"),i.a.createElement("div",{className:"resulttd"},a))),i.a.createElement("div",{className:"resultfooter"},i.a.createElement("h1",null,"You have reached : ",this.state.result.score,"  Points")),i.a.createElement("div",{className:"buttonbox"},i.a.createElement(w.b,{to:"/training",style:{color:"white",textDecoration:"none"}},i.a.createElement("button",{className:"rbutton"},"Training")),i.a.createElement(w.b,{to:"/resultlist",style:{color:"white",textDecoration:"none"}},i.a.createElement("button",{className:"rbutton"},"Resultlist"))))}}]),t}(s.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).nextCaseHandler=function(e){if(clearTimeout(a.caseTimer),-1===a.state.currentCaseIdx)return a.setState({currentCaseIdx:a.state.currentCaseIdx+1,animOn:!0,endOfTest:!1,answers:[]}),void(a.loadTimer=setTimeout(a.animTimeout.bind(Object(d.a)(a)),a.animLimit));if(a.state.currentCaseIdx===a.state.cases.length-1){a.testTime=a.testTime+((new Date).getTime()-a.caseStartTimestamp);var t=Object(u.a)(a.state.answers);return t.push(e),a.currentScore=a.answerCorrect(e)?a.currentScore+1:a.currentScore,a.finishTest(t),void a.setState({answers:t,animOn:!1,endOfTest:!0})}a.testTime=a.testTime+((new Date).getTime()-a.caseStartTimestamp),a.currentScore=a.answerCorrect(e)?a.currentScore+1:a.currentScore;var s=Object(u.a)(a.state.answers);s.push(e),a.setState({currentCaseIdx:a.state.currentCaseIdx+1,animOn:!0,endOfTest:!1,answers:s}),a.loadTimer=setTimeout(a.animTimeout.bind(Object(d.a)(a)),a.animLimit)},a.caseStartTimestamp=0,a.testTime=0,a.caseLimit=3e5,a.animLimit=2e3,a.caseTimer=0,a.loadTimer=0,a.currentScore=0,a.state={test:null,cases:null,currentCaseIdx:-1,answers:[],endOfTest:!1,animOn:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"animTimeout",value:function(){this.caseStartTimestamp=(new Date).getTime(),this.setState({animOn:!1}),this.caseTimer=setTimeout(this.caseTimeout.bind(this),this.caseLimit)}},{key:"caseTimeout",value:function(){this.nextCaseHandler("000000")}},{key:"answerCorrect",value:function(e){var t=this.state.cases[this.state.currentCaseIdx].line3.result;return parseInt(e,16)===parseInt(t,16)}},{key:"finishTest",value:function(e){var t={userName:this.props.userName,testName:this.state.test.testName,complexity:this.state.test.complexity,elapsedTime:(this.testTime/1e3).toFixed(1),numberOfCases:this.state.test.cases.length,score:this.currentScore,answers:e,testId:this.state.test._id};y.a.post("/api/results",t).then((function(e){})).catch((function(e){console.log("ERROR while storing the test result: ",e)}))}},{key:"componentDidMount",value:function(){var e=this;"random"===this.props.testId?y.a.get("/api/tests/random").then((function(t){e.setState({test:t.data.testData,cases:t.data.arrayOfCases})})):y.a.get("/api/tests/id/".concat(this.props.match.params.testId)).then((function(t){e.setState({test:t.data.testData,cases:t.data.arrayOfCases})}))}},{key:"render",value:function(){if(this.state.endOfTest)return i.a.createElement("div",null,i.a.createElement(k,null));if(this.state.animOn){var e=this.state.test;return i.a.createElement("div",null,i.a.createElement("div",{id:"header"},i.a.createElement("div",null,i.a.createElement("h2",null,i.a.createElement("span",null,"Test: ")," ",i.a.createElement("span",{id:"test-name"},e.testName))),i.a.createElement("div",null,i.a.createElement("h3",{id:"current-case"},"Case: ",this.state.currentCaseIdx+1," / ",this.state.cases.length)),i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement("span",null,"Complexity: "),i.a.createElement("span",{id:"complexity"},e.complexity)))),i.a.createElement("div",null,i.a.createElement("img",{src:"../loader.gif",alt:"",width:"300"})))}if(-1===this.state.currentCaseIdx)return i.a.createElement("div",null,i.a.createElement(g,{case:null,nextCaseHandler:this.nextCaseHandler}));var t=this.state.test,a=this.state.cases[this.state.currentCaseIdx];return i.a.createElement("div",null,i.a.createElement("div",{id:"header"},i.a.createElement("div",null,i.a.createElement("h2",null,i.a.createElement("span",null,"Test: ")," ",i.a.createElement("span",{id:"test-name"},t.testName))),i.a.createElement("div",null,i.a.createElement("h3",{id:"current-case"},"Case: ",this.state.currentCaseIdx+1," / ",this.state.cases.length)),i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement("span",null,"Complexity: "),i.a.createElement("span",{id:"complexity"},t.complexity)))),i.a.createElement(g,{case:a,nextCaseHandler:this.nextCaseHandler}))}}]),t}(s.Component),z=a(19),C=a(94),T=function(e,t){return y.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},j=function(e,t){return y.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},P=function(e){return i.a.createElement(C.a,{className:"nav justify-content-end",bg:"primary"},e.user?i.a.createElement("div",null,i.a.createElement(w.b,{to:"/"},"Welcome ",e.user.username),i.a.createElement(w.b,{to:"/training"},"Training"),i.a.createElement(w.b,{to:"/resultlist"},"Resultlist"),i.a.createElement(w.b,{to:"/",onClick:function(){y.a.delete("/api/auth/logout"),e.setUser(null)}},"Logout")):i.a.createElement("div",null,i.a.createElement(w.b,{to:"/"},"Home"),i.a.createElement(w.b,{to:"/signup"},"Signup"),i.a.createElement(w.b,{to:"/login"},"Login")))},S=(a(86),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"homePage-container"},i.a.createElement("div",null,i.a.createElement("h1",null,"IQtty"),i.a.createElement("p",null,"Use our brain trainer"),i.a.createElement("p",null,"Prepare for Assessment Centers and Logic-Tests"),i.a.createElement("p",null,"Signup and try our amazing brain game")))}}]),t}(i.a.Component)),_=a(93),R=a(95),D=a(92),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),T(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/training"))}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props),i.a.createElement("div",null,i.a.createElement("h2",null,"Signup"),i.a.createElement(_.a,{onSubmit:this.handleSubmit},i.a.createElement(_.a.Group,null,i.a.createElement(_.a.Label,{htmlFor:"username"},"Username: "),i.a.createElement(_.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),i.a.createElement(_.a.Group,null,i.a.createElement(_.a.Label,{htmlFor:"password"},"Password: "),i.a.createElement(_.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&i.a.createElement(R.a,{variant:"danger"},this.state.error),i.a.createElement(D.a,{type:"submit"},"Sign up")))}}]),t}(s.Component),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),j(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/training"))}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Login"),i.a.createElement(_.a,{onSubmit:this.handleSubmit},i.a.createElement(_.a.Group,null,i.a.createElement(_.a.Label,{htmlFor:"username"},"Username: "),i.a.createElement(_.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),i.a.createElement(_.a.Group,null,i.a.createElement(_.a.Label,{htmlFor:"password"},"Password: "),i.a.createElement(_.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&i.a.createElement(R.a,{variant:"danger"},this.state.error),i.a.createElement(D.a,{type:"submit"},"Log in")))}}]),t}(s.Component),M=(a(89),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"trainingsPage-container"},i.a.createElement("div",null,i.a.createElement("h1",null,"Welcome to IQtty training"),i.a.createElement("p",null,"Matrix tests are used in assessment centers to examine your skills in inductive reasoning."),i.a.createElement("p",null,"A matrix consists of nine boxes. One box is empty."),i.a.createElement("p",null,"Your task is to discover logical connections and compose the empty box based on the rule you found."),i.a.createElement("p",null,"Click here to start a test"),i.a.createElement("button",{className:"trainingsPage-button"},i.a.createElement(w.b,{style:{textDecoration:"none",color:"white"},to:"/test/new"},"Start test")),i.a.createElement("p",null,"Your results you can find under",i.a.createElement(w.b,{to:"/resultlist"}," Test Result List"))))}}]),t}(s.Component)),B=(a(51),function(e){function t(){var e,a;Object(c.a)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={results:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("AllResults --\x3e componentDidMount()"),y.a.get("/api/resultlist").then((function(t){console.log("AllResults --\x3e Promise resolved"),console.log("Promise resolved Data",t.data),e.setState({results:t.data})})).catch((function(e){console.log("Error occured: ",e)}))}},{key:"render",value:function(){var e=this.state.results.map((function(e){var t=e.numberOfCases,a=e.score,s=Math.round(a/t*100);return i.a.createElement("div",{className:"trResultlist",key:e._id},i.a.createElement("div",{className:"tdResultlist"},e.userName),i.a.createElement("div",{className:"tdResultlist"},e.testName),i.a.createElement("div",{className:"tdResultlist"},e.complexity),i.a.createElement("div",{className:"tdResultlist"},e.elapsedTime),i.a.createElement("div",{className:"tdResultlist"},e.numberOfCases),i.a.createElement("div",{className:"tdResultlist"},e.score),i.a.createElement("div",{className:"tdResultlist"},s," %"),i.a.createElement(w.b,{to:"/test/id/".concat(e.testId)},i.a.createElement("button",{className:"trainingsPage-button",id:e.testId},"Test Again")),i.a.createElement(w.b,{to:"/review/id/".concat(e._id)},i.a.createElement("button",{className:"trainingsPage-button",id:e._id},"Review")))}));return i.a.createElement("div",null,i.a.createElement("div",{className:"resultlistPage"},i.a.createElement("section",{className:"table-resultlist"},i.a.createElement("h1",{className:"header"},"Your Test Results"),i.a.createElement("div",{className:"tableResultlist-box"},i.a.createElement("div",{className:"tableResultlist"},i.a.createElement("div",{className:"trResultlist"},i.a.createElement("div",{className:"thResultlist"},"User"),i.a.createElement("div",{className:"thResultlist"},"Test"),i.a.createElement("div",{className:"thResultlist"},"Complexity"),i.a.createElement("div",{className:"thResultlist"},"Elapsed Time"),i.a.createElement("div",{className:"thResultlist"},"Number of Test Cases"),i.a.createElement("div",{className:"thResultlist"},"Score"),i.a.createElement("div",{className:"thResultlist"},"Result"),i.a.createElement("div",{className:"thResultlist"})),e)))))}}]),t}(s.Component)),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).catPic=function(e,t){var a="ABCDEF".indexOf(e.toUpperCase()),s="0000000000"+t;return s.substr(s.length-6).split("").map((function(e,t){return t===a?e:"0"})).join("")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.catName,t=this.props.opName,a=this.props.line,s=this.props.lineNum;return i.a.createElement("div",{className:"formula-row"},i.a.createElement("div",{className:"formula-cell"},i.a.createElement(b,{shapes:["Left"]})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:p(this.catPic(e,a.arg1))})),i.a.createElement("div",{className:"formula-cell"},i.a.createElement(b,{shapes:"NAND"===t||"NOR"===t?[t.substr(1)]:[t]})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:p(this.catPic(e,a.arg2))})),i.a.createElement("div",{className:"formula-cell"},i.a.createElement(b,{shapes:"NAND"===t||"NOR"===t?["RightCompl"]:["Right"]})),i.a.createElement("div",{className:3===s?"answer-cell-ok":"board-cell"},i.a.createElement(b,{shapes:p(this.catPic(e,a.result))})))}}]),t}(s.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).case=a.props.caseObj,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=["AND","NAND","OR","NOR","XOR"],a=["Intersection (AND)","Complement of Intersection (NOT AND)","Union (OR)","Complement of Union (NOT OR)","Symmetric Difference (XOR)"],s=this.case.catOps.map((function(s,n){return i.a.createElement("li",{key:s._id,className:"case-comp"},i.a.createElement("div",{className:"canvas-matrix"},i.a.createElement(F,{opName:s.opName,catName:s.catName,line:e.case.line1,lineNum:1}),i.a.createElement(F,{opName:s.opName,catName:s.catName,line:e.case.line2,lineNum:2}),i.a.createElement(F,{opName:s.opName,catName:s.catName,line:e.case.line3,lineNum:3})),i.a.createElement("br",null),i.a.createElement("div",{className:"op-desc"},a[t.indexOf(s.opName)]))}));return i.a.createElement("div",null,i.a.createElement("ul",{className:"case-comp-list"},s))}}]),t}(s.Component),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).lessBtnHandler=function(e){console.log("LESS button clicked for case ",e.target.id);var t=Object(u.a)(a.state.isDetailView);t[e.target.id]=!1,a.setState({isDetailView:t})},a.moreBtnHandler=function(e){console.log("MORE button clicked for case ",e.target.id);var t=Object(u.a)(a.state.isDetailView);t[e.target.id]=!0,a.setState({isDetailView:t})},a.state={test:null,cases:[],isDetailView:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"compare",value:function(e,t){return parseInt(e,16)===parseInt(t,16)}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.resultId;console.log(">>>>>>> Result ID from Karin: ",t),y.a.get("/api/results/id/".concat(t)).then((function(t){var a=t.data.testId;y.a.get("/api/tests/id/".concat(a)).then((function(a){e.setState({result:t.data,test:a.data.testData,cases:a.data.arrayOfCases})}))}))}},{key:"render",value:function(){var e=this,t=this.state.test,a=this.state.result;if(!t)return null;console.log(">>>>>>RESULT OBJECT",a),console.log(">>>>>>TEST OBJECT",t);var s=this.state.cases.map((function(t,s){return i.a.createElement("li",{key:t._id},i.a.createElement("h5",null,"Case ",s+1),i.a.createElement("div",{className:"test-rev-row"},i.a.createElement("div",{className:"canvas-matrix"},i.a.createElement("div",{className:"board-row"},i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:p(t.line1.arg1)})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:p(t.line1.arg2)})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:p(t.line1.result)}))),i.a.createElement("div",{className:"board-row"},i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:p(t.line2.arg1)})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:p(t.line2.arg2)})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:p(t.line2.result)}))),i.a.createElement("div",{className:"board-row"},i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:p(t.line3.arg1)})),i.a.createElement("div",{className:"board-cell"},i.a.createElement(b,{shapes:p(t.line3.arg2)})),i.a.createElement("div",{className:"answer-cell-ok"},i.a.createElement(b,{shapes:p(t.line3.result)}))),e.compare(t.line3.result,a.answers[s])?i.a.createElement("div",{className:"answer-row"},i.a.createElement("div",null,"Your answer ",i.a.createElement("br",null)," is correct"),i.a.createElement("div",{className:"answer-cell-ok"},i.a.createElement(b,{shapes:p(a.answers[s])}))):i.a.createElement("div",{className:"answer-row"},i.a.createElement("div",null,"Your answer ",i.a.createElement("br",null)," is wrong"),i.a.createElement("div",{className:"answer-cell-err"},i.a.createElement(b,{shapes:p(a.answers[s])})))),e.state.isDetailView[s]?i.a.createElement("div",{className:"case-rev"},i.a.createElement("div",null,i.a.createElement("button",{id:s,onClick:e.lessBtnHandler},"less...")),i.a.createElement("div",null,i.a.createElement(L,{caseObj:t,caseIdx:s,answer:t.line3.result}))):i.a.createElement("div",{className:"case-rev"},i.a.createElement("div",null,i.a.createElement("button",{id:s,onClick:e.moreBtnHandler},"more...")))))}));return i.a.createElement("div",null,i.a.createElement("div",{id:"header"},i.a.createElement("div",null,i.a.createElement("h4",null,i.a.createElement("span",null,"Result for the test ")," ",i.a.createElement("span",{id:"test-name"},t.testName)))),i.a.createElement("ul",null,s),i.a.createElement(w.b,{to:"/resultlist"}," Back to Result List"))}}]),t}(s.Component),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a.trainingRoute=function(e){return a.state.user?i.a.createElement(M,e):i.a.createElement(z.a,{to:"/"})},a.resultListRoute=function(e){return a.state.user?i.a.createElement(B,e):i.a.createElement(z.a,{to:"/"})},a.resultRoute=function(e){return a.state.user?i.a.createElement(k,null):i.a.createElement(z.a,{to:"/"})},a.testRoute=function(e){return a.state.user?(console.log(),i.a.createElement(O,{testId:"random",userName:a.state.user.username})):i.a.createElement(z.a,{to:"/"})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(P,{user:this.state.user,setUser:this.setUser}),i.a.createElement(z.d,null,i.a.createElement(z.b,{exact:!0,path:"/test/new",render:this.testRoute}),i.a.createElement(z.b,{exact:!0,path:"/test/id/:testId",render:function(e){return i.a.createElement(O,e)}}),i.a.createElement(z.b,{exact:!0,path:"/review/id/:resultId",render:function(e){return i.a.createElement(H,e)}}),i.a.createElement(z.b,{exact:!0,path:"/",component:S}),i.a.createElement(z.b,{exact:!0,path:"/signup",render:function(t){return i.a.createElement(I,Object.assign({},t,{setUser:e.setUser}))}}),i.a.createElement(z.b,{exact:!0,path:"/login",render:function(t){return i.a.createElement(A,Object.assign({},t,{setUser:e.setUser}))}}),i.a.createElement(z.b,{exact:!0,path:"/training",render:this.trainingRoute}),i.a.createElement(z.b,{exact:!0,path:"/resultlist",render:this.resultListRoute}),i.a.createElement(z.b,{exact:!0,path:"/result",render:this.resultRoute})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));y.a.get("/api/auth/loggedin").then((function(e){var t=e.data;r.a.render(i.a.createElement(w.a,null,i.a.createElement(U,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.70ea243c.chunk.js.map