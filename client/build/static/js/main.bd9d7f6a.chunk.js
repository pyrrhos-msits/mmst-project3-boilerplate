(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,a){},40:function(e,t,a){},55:function(e,t,a){e.exports=a(90)},61:function(e,t,a){},62:function(e,t,a){},85:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(26),r=a.n(i),l=(a(60),a(61),a(5)),c=a(6),o=a(8),h=a(7),m=a(9),u=(a(40),a(19)),d=a(18),p=(a(24),a(23)),E=function(){function e(t,a,s){Object(l.a)(this,e),this.size=t,this.bkgd="white",this.color="black",this.ctx=a,this.ctx.fillStyle=this.bkgd,this.ctx.fillRect(0,0,t,t),this.ctx.fillStyle=this.color,this.ctx.strokeStyle=this.color,this.ctx.lineWidth=1.2,this.symbols=s}return Object(c.a)(e,[{key:"addSymbol",value:function(e){this.symbols.includes(e)||(this.symbols.push(e),this._drawSymbol(e))}},{key:"deleteSymbol",value:function(e){this.symbols.includes(e)&&(this.symbols.splice(this.symbols.indexOf(e),1),this._clear(),this._redraw())}},{key:"clearDiagram",value:function(){this.symbols=[],this._clear()}},{key:"_clear",value:function(){this.ctx.clearRect(0,0,this.size,this.size),this.ctx.fillStyle=this.bkgd,this.ctx.fillRect(0,0,this.size,this.size),this.ctx.fillStyle=this.color}},{key:"_redraw",value:function(){var e,t=!0,a=!1,s=void 0;try{for(var n,i=this.symbols[Symbol.iterator]();!(t=(n=i.next()).done);t=!0)e=n.value,this._drawSymbol(e)}catch(r){a=!0,s=r}finally{try{t||null==i.return||i.return()}finally{if(a)throw s}}}},{key:"_drawSymbol",value:function(e){switch(e){case"A1":this._drawA1();break;case"A2":this._drawA2();break;case"A3":this._drawA3();break;case"A4":this._drawA4();break;case"B1":this._drawB1();break;case"B2":this._drawB2();break;case"B3":this._drawB3();break;case"B4":this._drawB4();break;case"C1":this._drawC1();break;case"C2":this._drawC2();break;case"C3":this._drawC3();break;case"C4":this._drawC4();break;case"D1":this._drawD1();break;case"D2":this._drawD2();break;case"D3":this._drawD3();break;case"D4":this._drawD4();break;case"E1":this._drawE1();break;case"E2":this._drawE2();break;case"E3":this._drawE3();break;case"E4":this._drawE4();break;case"F1":this._drawF1();break;case"F2":this._drawF2();break;case"F3":this._drawF3();break;case"F4":this._drawF4();break;case"Left":this._drawLeft();break;case"Right":this._drawRight();break;case"RightCompl":this._drawRightCompl();break;case"AND":this._drawAND();break;case"OR":this._drawOR();break;case"XOR":this._drawXOR()}}},{key:"_drawA1",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.size/2,0),this.ctx.lineTo(this.size/2,this.size),this.ctx.stroke()}},{key:"_drawA2",value:function(){this.ctx.beginPath(),this.ctx.moveTo(0,this.size/2),this.ctx.lineTo(this.size,this.size/2),this.ctx.stroke()}},{key:"_drawA3",value:function(){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.size,this.size),this.ctx.stroke()}},{key:"_drawA4",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.size,0),this.ctx.lineTo(0,this.size),this.ctx.stroke()}},{key:"_drawB1",value:function(){var e=this.size/2-6;this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size/2,e,1*Math.PI,1.5*Math.PI),this.ctx.stroke()}},{key:"_drawB2",value:function(){var e=this.size/2-6;this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size/2,e,1.5*Math.PI,0),this.ctx.stroke()}},{key:"_drawB3",value:function(){var e=this.size/2-6;this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size/2,e,.5*Math.PI,1*Math.PI),this.ctx.stroke()}},{key:"_drawB4",value:function(){var e=this.size/2-6;this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size/2,e,0,.5*Math.PI),this.ctx.stroke()}},{key:"_drawC1",value:function(){this.ctx.beginPath(),this.ctx.arc(4,4,2.5,0,2*Math.PI),this.ctx.fill()}},{key:"_drawC2",value:function(){this.ctx.beginPath(),this.ctx.arc(this.size-4,4,2.5,0,2*Math.PI),this.ctx.fill()}},{key:"_drawC3",value:function(){this.ctx.beginPath(),this.ctx.arc(this.size-4,this.size-4,2.5,0,2*Math.PI),this.ctx.fill()}},{key:"_drawC4",value:function(){this.ctx.beginPath(),this.ctx.arc(4,this.size-4,2.5,0,2*Math.PI),this.ctx.fill()}},{key:"_drawD1",value:function(){var e=.1*this.size;this._strokeStar(this.ctx,this.size/2,this.size/2,e,8,.6)}},{key:"_drawD2",value:function(){var e=.16*this.size;this._strokeStar(this.ctx,this.size/2,this.size/2,e,8,.6)}},{key:"_drawD3",value:function(){var e=.22*this.size;this._strokeStar(this.ctx,this.size/2,this.size/2,e,8,.6)}},{key:"_drawD4",value:function(){var e=this.size-4;this.ctx.beginPath(),this.ctx.moveTo(2,2),this.ctx.lineTo(e+2,2),this.ctx.lineTo(e+2,e+2),this.ctx.lineTo(2,e+2),this.ctx.closePath(),this.ctx.stroke()}},{key:"_drawE1",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2-8),this.ctx.lineTo(this.size/2+6,this.size/2),this.ctx.lineTo(this.size/2-6,this.size/2),this.ctx.closePath(),this.ctx.fill(),this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2),this.ctx.lineTo(this.size/2,this.size/2+8),this.ctx.stroke(),this.ctx.lineWidth=1}},{key:"_drawE2",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.size/2+8,this.size/2),this.ctx.lineTo(this.size/2,this.size/2+6),this.ctx.lineTo(this.size/2,this.size/2-6),this.ctx.closePath(),this.ctx.fill(),this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2),this.ctx.lineTo(this.size/2-8,this.size/2),this.ctx.stroke(),this.ctx.lineWidth=1}},{key:"_drawE3",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2+8),this.ctx.lineTo(this.size/2-6,this.size/2),this.ctx.lineTo(this.size/2+6,this.size/2),this.ctx.closePath(),this.ctx.fill(),this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2),this.ctx.lineTo(this.size/2,this.size/2-8),this.ctx.stroke(),this.ctx.lineWidth=1}},{key:"_drawE4",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.size/2-8,this.size/2),this.ctx.lineTo(this.size/2,this.size/2-6),this.ctx.lineTo(this.size/2,this.size/2+6),this.ctx.closePath(),this.ctx.fill(),this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2),this.ctx.lineTo(this.size/2+8,this.size/2),this.ctx.stroke(),this.ctx.lineWidth=1}},{key:"_drawF1",value:function(){this.ctx.beginPath(),this.ctx.arc(this.size/2,6,3,0,2*Math.PI),this.ctx.stroke()}},{key:"_drawF2",value:function(){this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size-6,3,0,2*Math.PI),this.ctx.stroke()}},{key:"_drawF3",value:function(){this.ctx.beginPath(),this.ctx.arc(6,this.size/2,3,0,2*Math.PI),this.ctx.stroke()}},{key:"_drawF4",value:function(){this.ctx.beginPath(),this.ctx.arc(this.size-6,this.size/2,3,0,2*Math.PI),this.ctx.stroke()}},{key:"_strokeStar",value:function(e,t,a,s,n,i){e.save(),e.beginPath(),e.translate(t,a),e.moveTo(0,0-s);for(var r=0;r<n;r++)e.rotate(Math.PI/n),e.lineTo(0,0-s*i),e.rotate(Math.PI/n),e.lineTo(0,0-s);e.closePath(),e.fill(),e.restore()}},{key:"_drawLeft",value:function(){var e=.8*this.size;this.ctx.beginPath(),this.ctx.arc(1.5*this.size,this.size/2,e,.5*Math.PI,1.5*Math.PI),this.ctx.stroke()}},{key:"_drawRight",value:function(){var e=.8*this.size;this.ctx.beginPath(),this.ctx.arc(-.5*this.size,this.size/2,e,1.5*Math.PI,.5*Math.PI),this.ctx.moveTo(.6*this.size,.45*this.size),this.ctx.lineTo(.9*this.size,.45*this.size),this.ctx.moveTo(.6*this.size,.55*this.size),this.ctx.lineTo(.9*this.size,.55*this.size),this.ctx.stroke()}},{key:"_drawRightCompl",value:function(){this._drawRight();var e=.12*this.size;this.ctx.beginPath(),this.ctx.arc(.5*this.size,.14*this.size,e,.4*Math.PI,1.6*Math.PI),this.ctx.stroke()}},{key:"_drawAND",value:function(){var e=.25*this.size;this.ctx.beginPath(),this.ctx.arc(.6*this.size,.6*this.size,e,Math.PI,2*Math.PI),this.ctx.moveTo(.6*this.size+e,.6*this.size),this.ctx.lineTo(.6*this.size+e,.75*this.size),this.ctx.moveTo(.6*this.size-e,.6*this.size),this.ctx.lineTo(.6*this.size-e,.75*this.size),this.ctx.stroke()}},{key:"_drawOR",value:function(){var e=.25*this.size;this.ctx.beginPath(),this.ctx.arc(.6*this.size,.6*this.size,e,0,Math.PI),this.ctx.moveTo(.6*this.size+e,.6*this.size),this.ctx.lineTo(.6*this.size+e,.45*this.size),this.ctx.moveTo(.6*this.size-e,.6*this.size),this.ctx.lineTo(.6*this.size-e,.45*this.size),this.ctx.stroke()}},{key:"_drawXOR",value:function(){this.ctx.beginPath(),this.ctx.moveTo(.5*this.size,.25*this.size),this.ctx.lineTo(.8*this.size,.75*this.size),this.ctx.lineTo(.2*this.size,.75*this.size),this.ctx.closePath(),this.ctx.stroke()}}]),e}();function b(e){for(var t=["A","B","C","D","E","F"],a=[],s="0000000000"+e,n=s.substr(s.length-6),i=0;i<t.length;i++){var r=t[i],l=parseInt(n.charAt(i),16),c=(4&l)>>2,o=(2&l)>>1,h=1&l;(8&l)>>3&&a.push(r+"1"),c&&a.push(r+"2"),o&&a.push(r+"3"),h&&a.push(r+"4")}return a}var v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).size=48,a.diagram=null,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.canvas.getContext("2d");this.diagram=new E(this.size,e,this.props.shapes),this.diagram._redraw()}},{key:"componentDidUpdate",value:function(){this.diagram.symbols=this.props.shapes,this.diagram._clear(),this.diagram._redraw()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("canvas",{ref:"canvas",width:this.size,height:this.size}))}}]),t}(s.Component);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).selectShapeHandler=function(e){var t=e.currentTarget.id,s=Object(u.a)(a.state.answer),n=x({},a.state.btnStates);"off"===n[t]?s.indexOf(t)<0&&(s.push(t),n[t]="on",a.setState({answer:s,btnStates:n})):"on"===n[t]&&s.indexOf(t)>=0&&(s.splice(s.indexOf(t),1),n[t]="off",a.setState({answer:s,btnStates:n}))},a.resetAnswerHandler=function(){var e=x({},a.state.btnStates);for(var t in e)e[t]="off";a.setState({answer:[],btnStates:e})},a.nextCaseHandler=function(){a.props.nextCaseHandler(function(e){for(var t=["A","B","C","D","E","F"],a="",s=0;s<t.length;s++){var n=t[s];a+=(8*e.includes(n+"1")+4*e.includes(n+"2")+2*e.includes(n+"3")+e.includes(n+"4")).toString(16)}return a}(a.state.answer)),a.resetAnswerHandler()},a.state={answer:[],btnStates:{A1:"off",B1:"off",C1:"off",D1:"off",E1:"off",F1:"off",A2:"off",B2:"off",C2:"off",D2:"off",E2:"off",F2:"off",A3:"off",B3:"off",C3:"off",D3:"off",E3:"off",F3:"off",A4:"off",B4:"off",C4:"off",D4:"off",E4:"off",F4:"off"}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=null===this.props.case;return n.a.createElement("div",null,n.a.createElement("div",{id:"test-and-loader"},n.a.createElement("div",{id:"test-container"},n.a.createElement("div",{className:"canvas-matrix"},n.a.createElement("div",{className:"board-row"},n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:t?[]:b(this.props.case.line1.arg1)})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:t?[]:b(this.props.case.line1.arg2)})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:t?[]:b(this.props.case.line1.result)}))),n.a.createElement("div",{className:"board-row"},n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:t?[]:b(this.props.case.line2.arg1)})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:t?[]:b(this.props.case.line2.arg2)})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:t?[]:b(this.props.case.line2.result)}))),n.a.createElement("div",{className:"board-row"},n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:t?[]:b(this.props.case.line3.arg1)})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:t?[]:b(this.props.case.line3.arg2)})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:this.state.answer})))),n.a.createElement("div",{id:"nav-buttons"},n.a.createElement("button",{className:t?"nav-btn-init shake":"nav-btn",onClick:this.nextCaseHandler}," ",t?"Start Test":"Submit"," "),n.a.createElement("button",{className:"nav-btn",onClick:this.resetAnswerHandler},"Reset")))),n.a.createElement("div",{className:"canvas-matrix"},n.a.createElement("div",{className:"menu-row"},["A","B","C","D","E","F"].map((function(t){return n.a.createElement("button",{className:"menu-btn-"+e.state.btnStates[t+1],key:t+1,id:t+1,onClick:e.selectShapeHandler},n.a.createElement(v,{shapes:[t+1]}))}))),n.a.createElement("div",{className:"menu-row"},["A","B","C","D","E","F"].map((function(t){return n.a.createElement("button",{className:"menu-btn-"+e.state.btnStates[t+2],key:t+2,id:t+2,onClick:e.selectShapeHandler},n.a.createElement(v,{shapes:[t+2]}))}))),n.a.createElement("div",{className:"menu-row"},["A","B","C","D","E","F"].map((function(t){return n.a.createElement("button",{className:"menu-btn-"+e.state.btnStates[t+3],key:t+3,id:t+3,onClick:e.selectShapeHandler},n.a.createElement(v,{shapes:[t+3]}))}))),n.a.createElement("div",{className:"menu-row"},["A","B","C","D","E","F"].map((function(t){return n.a.createElement("button",{className:"menu-btn-"+e.state.btnStates[t+4],key:t+4,id:t+4,onClick:e.selectShapeHandler},n.a.createElement(v,{shapes:[t+4]}))})))))}}]),t}(s.Component),y=(a(62),a(10)),w=a(11),N=a.n(w),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={result:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("App --\x3e componentDidMount()"),N.a.get("/api/results").then((function(t){console.log("Response Data",t.data),console.log("App --\x3e Promise resolved"),e.setState({result:t.data})})).catch((function(e){console.log("Fehler bei iq_result Component Did mount",e)}))}},{key:"render",value:function(){console.log(this.state.result);var e=this.state.result.score,t=this.state.result.numberOfCases,a=Math.round(e/t*100).toString();return n.a.createElement("div",{className:"resultPage"},n.a.createElement("div",{className:"resultHeader"},n.a.createElement("h1",null,"Result of your current test")),n.a.createElement("div",{className:"tableresult"},n.a.createElement("div",{className:"resulttr1"},n.a.createElement("div",{className:"resultth"},"Name :"),n.a.createElement("div",{className:"resulttd"},this.state.result.userName)),n.a.createElement("div",{className:"resulttr"},n.a.createElement("div",{className:"resultth"},"Test Name :"),n.a.createElement("div",{className:"resulttd"},this.state.result.testName)),n.a.createElement("div",{className:"resulttr1"},n.a.createElement("div",{className:"resultth"},"Elapsed Time :"),n.a.createElement("div",{className:"resulttd"},this.state.result.elapsedTime)),n.a.createElement("div",{className:"resulttr"},n.a.createElement("div",{className:"resultth"},"Executed Cases :"),n.a.createElement("div",{className:"resulttd"},this.state.result.numberOfCases)),n.a.createElement("div",{className:"resulttr1"},n.a.createElement("div",{className:"resultth"},"Your Score :"),n.a.createElement("div",{className:"resulttd"},this.state.result.score)),n.a.createElement("div",{className:"resulttr"},n.a.createElement("div",{className:"resultth"},"Complexity :"),n.a.createElement("div",{className:"resulttd"},this.state.result.complexity)),n.a.createElement("div",{className:"resulttr1"},n.a.createElement("div",{className:"resultth"},"Percentage :"),n.a.createElement("div",{className:"resulttd"},a))),n.a.createElement("div",{className:"resultfooter"},n.a.createElement("h1",null,"You have reached : ",this.state.result.score,"  Points")),n.a.createElement("div",{className:"buttonbox"},n.a.createElement(y.b,{to:"/training",style:{color:"white",textDecoration:"none"}},n.a.createElement("button",{className:"rbutton"},"Training")),n.a.createElement(y.b,{to:"/resultlist",style:{color:"white",textDecoration:"none"}},n.a.createElement("button",{className:"rbutton"},"Resultlist"))))}}]),t}(s.Component),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).nextCaseHandler=function(e){if(clearTimeout(a.caseTimer),-1===a.state.currentCaseIdx)return a.setState({currentCaseIdx:a.state.currentCaseIdx+1,animOn:!0,endOfTest:!1,answers:[]}),void(a.loadTimer=setTimeout(a.animTimeout.bind(Object(d.a)(a)),a.animLimit));if(a.state.currentCaseIdx===a.state.cases.length-1){a.testTime=a.testTime+((new Date).getTime()-a.caseStartTimestamp);var t=Object(u.a)(a.state.answers);return t.push(e),a.currentScore=a.answerCorrect(e)?a.currentScore+1:a.currentScore,a.finishTest(t),void a.setState({answers:t,animOn:!1,endOfTest:!0})}a.testTime=a.testTime+((new Date).getTime()-a.caseStartTimestamp),a.currentScore=a.answerCorrect(e)?a.currentScore+1:a.currentScore;var s=Object(u.a)(a.state.answers);s.push(e),a.setState({currentCaseIdx:a.state.currentCaseIdx+1,animOn:!0,endOfTest:!1,answers:s}),a.loadTimer=setTimeout(a.animTimeout.bind(Object(d.a)(a)),a.animLimit)},a.caseStartTimestamp=0,a.testTime=0,a.caseLimit="yes"===a.props.match.params.timeout?9e4:36e5,a.animLimit=2e3,a.caseTimer=0,a.loadTimer=0,a.currentScore=0,a.state={test:null,cases:null,currentCaseIdx:-1,answers:[],endOfTest:!1,animOn:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"animTimeout",value:function(){this.caseStartTimestamp=(new Date).getTime(),this.setState({animOn:!1}),this.caseTimer=setTimeout(this.caseTimeout.bind(this),this.caseLimit)}},{key:"caseTimeout",value:function(){this.nextCaseHandler("000000")}},{key:"answerCorrect",value:function(e){var t=this.state.cases[this.state.currentCaseIdx].line3.result;return parseInt(e,16)===parseInt(t,16)}},{key:"finishTest",value:function(e){var t={userName:this.props.userName,testName:this.state.test.testName,complexity:this.state.test.complexity,elapsedTime:(this.testTime/1e3).toFixed(1),numberOfCases:this.state.test.cases.length,score:this.currentScore,answers:e,testId:this.state.test._id};N.a.post("/api/results",t).then((function(e){})).catch((function(e){console.log("ERROR while storing the test result: ",e)}))}},{key:"componentDidMount",value:function(){var e=this;this.props.match.params.complexity?N.a.get("/api/tests?complexity=".concat(this.props.match.params.complexity)).then((function(t){e.setState({test:t.data.testData,cases:t.data.arrayOfCases})})):N.a.get("/api/tests/id/".concat(this.props.match.params.testId)).then((function(t){e.setState({test:t.data.testData,cases:t.data.arrayOfCases})}))}},{key:"render",value:function(){if(this.state.endOfTest)return n.a.createElement("div",null,n.a.createElement(k,null));if(this.state.animOn){var e=this.state.test;return n.a.createElement("div",null,n.a.createElement("div",{id:"header"},n.a.createElement("div",null,n.a.createElement("h2",null,n.a.createElement("span",null,"Test: ")," ",n.a.createElement("span",{id:"test-name"},e.testName))),n.a.createElement("div",null,n.a.createElement("h3",{id:"current-case"},"Case: ",this.state.currentCaseIdx+1," / ",this.state.cases.length)),n.a.createElement("div",null,n.a.createElement("h3",null,n.a.createElement("span",null,"Complexity: "),n.a.createElement("span",{id:"complexity"},e.complexity)))),n.a.createElement("div",null,n.a.createElement("img",{src:"/robot.gif",alt:"",width:"500"})))}if(-1===this.state.currentCaseIdx)return n.a.createElement("div",{className:"testpage-background"},n.a.createElement(g,{case:null,nextCaseHandler:this.nextCaseHandler}),n.a.createElement("div",null,"Your test has not started yet.",n.a.createElement("br",null),"Now, you have time for getting familiar with the layout and buttons.",n.a.createElement("br",null),"The keyboard at the bottom consists of 24 buttons representing 6 sets of shapes: lines, arcs, dots, stars and square, arrows, and circles. By clicking on a button you are adding a corresponding shape to your answer. By clicking it again you are revoking your choice. Please try.",n.a.createElement("br",null),"The Reset button will clear your answer completely. Try this one, too.",n.a.createElement("br",null),"The Start Test will load the first test case and the test will begin."));var t=this.state.test,a=this.state.cases[this.state.currentCaseIdx];return n.a.createElement("div",{className:"testpage-background"},n.a.createElement("div",{id:"header"},n.a.createElement("div",null,n.a.createElement("h2",null,n.a.createElement("span",null,"Test: ")," ",n.a.createElement("span",{id:"test-name"},t.testName))),n.a.createElement("div",null,n.a.createElement("h3",{id:"current-case"},"Case: ",this.state.currentCaseIdx+1," / ",this.state.cases.length)),n.a.createElement("div",null,n.a.createElement("h3",null,n.a.createElement("span",null,"Complexity: "),n.a.createElement("span",{id:"complexity"},t.complexity)))),n.a.createElement(g,{case:a,nextCaseHandler:this.nextCaseHandler}),0===this.state.currentCaseIdx?n.a.createElement("div",null,"Your first test case is there!",n.a.createElement("br",null),"In the  3x3 matrix you see a mix of shapes.",n.a.createElement("br",null),"Your first step is to identify the shape categories used.",n.a.createElement("br",null),"Then, for each category, please analyze the logic applied to the category in rows 1 and 2. ",n.a.createElement("br",null),"Finally, choose your answer in row 3, using the same logic.",n.a.createElement("br",null),"When you are ready with your answer please Submit to proceed to the next test case.",n.a.createElement("br",null),'If you are interested, here is a small tip for you: the "logic" is based on the basic set operations: union, intersection, complement, and symmetric difference.',n.a.createElement("br",null),"-------- wiki link ----------"):null)}}]),t}(s.Component),z=a(20),C=a(94),T=function(e,t){return N.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},j=function(e,t){return N.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},P=function(e){return n.a.createElement(C.a,{className:"nav justify-content-end",bg:"primary",fixed:"top"},e.user?n.a.createElement("div",null,n.a.createElement(y.b,{to:"/"},"Welcome ",e.user.username),n.a.createElement(y.b,{to:"/training"},"Training"),n.a.createElement(y.b,{to:"/resultlist"},"Resultlist"),n.a.createElement(y.b,{to:"/",onClick:function(){N.a.delete("/api/auth/logout"),e.setUser(null)}},"Logout")):n.a.createElement("div",null,n.a.createElement(y.b,{to:"/"},"Home"),n.a.createElement(y.b,{to:"/signup"},"Signup"),n.a.createElement(y.b,{to:"/login"},"Login")))},S=(a(85),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"homePage-container"},n.a.createElement("div",null,n.a.createElement("h1",null,"IQtty"),n.a.createElement("p",null,"Use our brain trainer"),n.a.createElement("p",null,"Prepare for Assessment Centers and Logic-Tests"),n.a.createElement("p",null,"Signup and try our amazing brain game")))}}]),t}(n.a.Component)),_=a(93),R=a(95),D=a(92),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),T(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/training"))}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props),n.a.createElement("div",null,n.a.createElement("h2",{className:"signup-login-header"},"Signup"),n.a.createElement(_.a,{onSubmit:this.handleSubmit},n.a.createElement(_.a.Group,null,n.a.createElement(_.a.Label,{htmlFor:"username"},"Username: "),n.a.createElement(_.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),n.a.createElement(_.a.Group,null,n.a.createElement(_.a.Label,{htmlFor:"password"},"Password: "),n.a.createElement(_.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&n.a.createElement(R.a,{variant:"danger"},this.state.error),n.a.createElement(D.a,{type:"submit"},"Sign up")))}}]),t}(s.Component),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),j(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/training"))}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",{className:"signup-login-header"},"Login"),n.a.createElement(_.a,{onSubmit:this.handleSubmit},n.a.createElement(_.a.Group,null,n.a.createElement(_.a.Label,{htmlFor:"username"},"Username: "),n.a.createElement(_.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),n.a.createElement(_.a.Group,null,n.a.createElement(_.a.Label,{htmlFor:"password"},"Password: "),n.a.createElement(_.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&n.a.createElement(R.a,{variant:"danger"},this.state.error),n.a.createElement(D.a,{type:"submit"},"Log in")))}}]),t}(s.Component),M=(a(88),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={complexity:"Low",timeout:"no"},a.handleComplexity=a.handleComplexity.bind(Object(d.a)(a)),a.handleTimeout=a.handleTimeout.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleComplexity",value:function(e){this.setState({complexity:e.target.value})}},{key:"handleTimeout",value:function(e){this.setState({timeout:e.target.value})}},{key:"render",value:function(){return n.a.createElement("section",{className:"trainingsPage-container"},n.a.createElement("div",null,n.a.createElement("h1",null,"Welcome to IQtty training"),n.a.createElement("p",null,"Matrix tests are used in assessment centers to examine your skills in inductive reasoning."),n.a.createElement("p",null,"A matrix consists of nine boxes. One box is empty."),n.a.createElement("p",null,"Your task is to discover logical connections and compose the empty box based on the rule you found."),n.a.createElement("p",null,"Click here to start a test"),n.a.createElement("section",{id:"selection"},n.a.createElement("article",null,n.a.createElement("h3",null," ",n.a.createElement("p",null,"Select the complexity of your Test:")),n.a.createElement("li",null,n.a.createElement("label",null,n.a.createElement("input",{name:"complexity",type:"radio",value:"Low",checked:!0,onChange:this.handleComplexity}),"Low")),n.a.createElement("li",null,n.a.createElement("label",null,n.a.createElement("input",{name:"complexity",type:"radio",value:"Medium",onChange:this.handleComplexity}),"Medium")),n.a.createElement("li",null,n.a.createElement("label",null,n.a.createElement("input",{name:"complexity",type:"radio",value:"High",onChange:this.handleComplexity}),"High")),n.a.createElement("li",null,n.a.createElement("label",null,n.a.createElement("input",{name:"complexity",type:"radio",value:"Random",onChange:this.handleComplexity}),"Random"))),n.a.createElement("article",null,n.a.createElement("h3",null,n.a.createElement("p",null,"Timeout?")),n.a.createElement("li",null,n.a.createElement("label",null,n.a.createElement("input",{name:"timeout",type:"radio",value:"yes",onChange:this.handleTimeout}),"Yes")),n.a.createElement("li",null,n.a.createElement("label",null,n.a.createElement("input",{name:"timeout",type:"radio",value:"no",checked:!0,onChange:this.handleTimeout}),"No")))),n.a.createElement("div",{className:"buttonFlex"},n.a.createElement(y.b,{to:"/test/new/".concat(this.state.complexity,"/").concat(this.state.timeout)},n.a.createElement("button",{className:"trainingsPage-button"},"Start Test")))))}}]),t}(s.Component)),B=(a(89),function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={results:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("AllResults --\x3e componentDidMount()"),N.a.get("/api/resultlist").then((function(t){console.log("AllResults --\x3e Promise resolved"),console.log("Promise resolved Data",t.data),e.setState({results:t.data})})).catch((function(e){console.log("Error occured: ",e)}))}},{key:"render",value:function(){var e=this.state.results.map((function(e){var t=e.numberOfCases,a=e.score,s=Math.round(a/t*100);return n.a.createElement("div",{className:"trResultlist",key:e._id},n.a.createElement("div",{className:"tdResultlist"},e.userName),n.a.createElement("div",{className:"tdResultlist"},e.testName),n.a.createElement("div",{className:"tdResultlist"},e.complexity),n.a.createElement("div",{className:"tdResultlist"},e.elapsedTime),n.a.createElement("div",{className:"tdResultlist"},e.numberOfCases),n.a.createElement("div",{className:"tdResultlist"},e.score),n.a.createElement("div",{className:"tdResultlist"},s," %"),n.a.createElement(y.b,{to:"/test/id/".concat(e.testId)},n.a.createElement("button",{className:"resultlistPage-button",id:e.testId},"Test Again")),n.a.createElement(y.b,{to:"/review/id/".concat(e._id)},n.a.createElement("button",{className:"resultlistPage-button",id:e._id},"Review")))}));return n.a.createElement("div",null,n.a.createElement("div",{className:"resultlistPage"},n.a.createElement("section",{className:"table-resultlist"},n.a.createElement("h1",{className:"header"},"Your Test Results"),n.a.createElement("div",{className:"tableResultlist-box"},n.a.createElement("div",{className:"tableResultlist"},n.a.createElement("div",{className:"trResultlist"},n.a.createElement("div",{className:"thResultlist"},"User"),n.a.createElement("div",{className:"thResultlist"},"Test"),n.a.createElement("div",{className:"thResultlist"},"Complexity"),n.a.createElement("div",{className:"thResultlist"},"Elapsed Time"),n.a.createElement("div",{className:"thResultlist"},"Number of Test Cases"),n.a.createElement("div",{className:"thResultlist"},"Score"),n.a.createElement("div",{className:"thResultlist"},"Result"),n.a.createElement("div",{className:"thResultlist"})),e)))))}}]),t}(s.Component)),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).catPic=function(e,t){var a="ABCDEF".indexOf(e.toUpperCase()),s="0000000000"+t;return s.substr(s.length-6).split("").map((function(e,t){return t===a?e:"0"})).join("")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.catName,t=this.props.opName,a=this.props.line,s=this.props.lineNum;return n.a.createElement("div",{className:"formula-row"},n.a.createElement("div",{className:"formula-cell"},n.a.createElement(v,{shapes:["Left"]})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:b(this.catPic(e,a.arg1))})),n.a.createElement("div",{className:"formula-cell"},n.a.createElement(v,{shapes:"NAND"===t||"NOR"===t?[t.substr(1)]:[t]})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:b(this.catPic(e,a.arg2))})),n.a.createElement("div",{className:"formula-cell"},n.a.createElement(v,{shapes:"NAND"===t||"NOR"===t?["RightCompl"]:["Right"]})),n.a.createElement("div",{className:3===s?"answer-cell-ok":"board-cell"},n.a.createElement(v,{shapes:b(this.catPic(e,a.result))})))}}]),t}(s.Component),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).case=a.props.caseObj,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=["AND","NAND","OR","NOR","XOR"],a=["Intersection (AND)","Complement of Intersection (NOT AND)","Union (OR)","Complement of Union (NOT OR)","Symmetric Difference (XOR)"],s=this.case.catOps.map((function(s,i){return n.a.createElement("li",{key:s._id,className:"case-comp"},n.a.createElement("div",{className:"canvas-matrix"},n.a.createElement(F,{opName:s.opName,catName:s.catName,line:e.case.line1,lineNum:1}),n.a.createElement(F,{opName:s.opName,catName:s.catName,line:e.case.line2,lineNum:2}),n.a.createElement(F,{opName:s.opName,catName:s.catName,line:e.case.line3,lineNum:3})),n.a.createElement("br",null),n.a.createElement("div",{className:"op-desc"},a[t.indexOf(s.opName)]))}));return n.a.createElement("div",null,n.a.createElement("ul",{className:"case-comp-list"},s))}}]),t}(s.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).lessBtnHandler=function(e){console.log("LESS button clicked for case ",e.target.id);var t=Object(u.a)(a.state.isDetailView);t[e.target.id]=!1,a.setState({isDetailView:t})},a.moreBtnHandler=function(e){console.log("MORE button clicked for case ",e.target.id);var t=Object(u.a)(a.state.isDetailView);t[e.target.id]=!0,a.setState({isDetailView:t})},a.state={test:null,cases:[],isDetailView:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"compare",value:function(e,t){return parseInt(e,16)===parseInt(t,16)}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.resultId;console.log(">>>>>>> Result ID from Karin: ",t),N.a.get("/api/results/id/".concat(t)).then((function(t){var a=t.data.testId;N.a.get("/api/tests/id/".concat(a)).then((function(a){e.setState({result:t.data,test:a.data.testData,cases:a.data.arrayOfCases})}))}))}},{key:"render",value:function(){var e=this,t=this.state.test,a=this.state.result;if(!t)return null;console.log(">>>>>>RESULT OBJECT",a),console.log(">>>>>>TEST OBJECT",t);var s=this.state.cases.map((function(t,s){return n.a.createElement("li",{key:t._id},n.a.createElement("h5",null,"Case ",s+1),n.a.createElement("div",{className:"test-rev-row"},n.a.createElement("div",{className:"canvas-matrix"},n.a.createElement("div",{className:"board-row"},n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:b(t.line1.arg1)})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:b(t.line1.arg2)})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:b(t.line1.result)}))),n.a.createElement("div",{className:"board-row"},n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:b(t.line2.arg1)})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:b(t.line2.arg2)})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:b(t.line2.result)}))),n.a.createElement("div",{className:"board-row"},n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:b(t.line3.arg1)})),n.a.createElement("div",{className:"board-cell"},n.a.createElement(v,{shapes:b(t.line3.arg2)})),n.a.createElement("div",{className:"answer-cell-ok"},n.a.createElement(v,{shapes:b(t.line3.result)}))),e.compare(t.line3.result,a.answers[s])?n.a.createElement("div",{className:"answer-row"},n.a.createElement("div",null,"Your answer ",n.a.createElement("br",null)," is correct"),n.a.createElement("div",{className:"answer-cell-ok"},n.a.createElement(v,{shapes:b(a.answers[s])}))):n.a.createElement("div",{className:"answer-row"},n.a.createElement("div",null,"Your answer ",n.a.createElement("br",null)," is wrong"),n.a.createElement("div",{className:"answer-cell-err"},n.a.createElement(v,{shapes:b(a.answers[s])})))),e.state.isDetailView[s]?n.a.createElement("div",{className:"case-rev"},n.a.createElement("div",null,n.a.createElement("button",{id:s,onClick:e.lessBtnHandler},"less...")),n.a.createElement("div",null,n.a.createElement(H,{caseObj:t,caseIdx:s,answer:t.line3.result}))):n.a.createElement("div",{className:"case-rev"},n.a.createElement("div",null,n.a.createElement("button",{id:s,onClick:e.moreBtnHandler},"more...")))))}));return n.a.createElement("div",null,n.a.createElement("div",{id:"header"},n.a.createElement("div",null,n.a.createElement("h4",null,n.a.createElement("span",null,"Result for the test ")," ",n.a.createElement("span",{id:"test-name"},t.testName)))),n.a.createElement("ul",null,s))}}]),t}(s.Component),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a.trainingRoute=function(e){return a.state.user?n.a.createElement(M,e):n.a.createElement(z.a,{to:"/"})},a.resultListRoute=function(e){return a.state.user?n.a.createElement(B,e):n.a.createElement(z.a,{to:"/"})},a.resultRoute=function(e){return a.state.user?n.a.createElement(k,null):n.a.createElement(z.a,{to:"/"})},a.testNewRoute=function(e){return a.state.user?n.a.createElement(O,Object.assign({},e,{userName:a.state.user.username})):n.a.createElement(z.a,{to:"/"})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(P,{user:this.state.user,setUser:this.setUser}),n.a.createElement(z.d,null,n.a.createElement(z.b,{exact:!0,path:"/test/id/:testId",render:function(e){return n.a.createElement(O,e)}}),n.a.createElement(z.b,{exact:!0,path:"/test/new/:complexity/:timeout",render:this.testNewRoute}),n.a.createElement(z.b,{exact:!0,path:"/review/id/:resultId",render:function(e){return n.a.createElement(L,e)}}),n.a.createElement(z.b,{exact:!0,path:"/",component:S}),n.a.createElement(z.b,{exact:!0,path:"/signup",render:function(t){return n.a.createElement(I,Object.assign({},t,{setUser:e.setUser}))}}),n.a.createElement(z.b,{exact:!0,path:"/login",render:function(t){return n.a.createElement(A,Object.assign({},t,{setUser:e.setUser}))}}),n.a.createElement(z.b,{exact:!0,path:"/training",render:this.trainingRoute}),n.a.createElement(z.b,{exact:!0,path:"/resultlist",render:this.resultListRoute}),n.a.createElement(z.b,{exact:!0,path:"/result",render:this.resultRoute})))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));N.a.get("/api/auth/loggedin").then((function(e){var t=e.data;r.a.render(n.a.createElement(y.a,null,n.a.createElement(U,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.bd9d7f6a.chunk.js.map