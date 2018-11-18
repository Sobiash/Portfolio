(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){},19:function(e,a,t){e.exports=t.p+"static/media/sobia.shahbaz.0c383f7a.jpg"},20:function(e){e.exports=[{id:1,name:"Fish Shop",description:"This is a stateful React Js app to buy different kinds of fishes whereas different users can edit or delete fish in their order and if someone can have access to dashboard, he can change the state of fishes on the basis of fresh fishes or sold out.",code_link:"https://github.com/Sobiash/Shop-Fish",deploy_link:"https://sobiash.github.io/Shop-Fish/",tools:["React Js","Firebase"],icons:["fab","react"]},{id:2,name:"Cooking Recipes",description:"This project is made with React Js app. A user can find recipes of differnet food items and his search list can be saved in local storage.",code_link:"https://github.com/Sobiash/cooking-recipe-app",deploy_link:" https://sobiash.github.io/cooking-recipe-app/",tools:["React Js, Local Storage"],icons:["fab","react"]},{id:3,name:"Tracalories",description:"This project is purely made with Javascript in Es6. A user can make a calories list by adding foods and required calories, this list can be saved in local storage to edit or delete anytime.",code_link:"https://github.com/Sobiash/CalculateCaloriesApp",deploy_link:"https://sobiash.github.io/CalculateCaloriesApp/",tools:["Javascript"],icons:["fab","js-square"]},{id:4,name:"InfoFactory",description:"This is my blog made with Wordpress. I have tried to show different categories of information in separate parts of the blog.  I also have worked with present digital marketing practices like SEO.",deploy_link:"http://infofactory.pk/",tools:["WordPress, Digital Marketing"],icons:["fab","wordpress"]},{id:5,name:"Book List",description:"In this project, I have used Javascript and Bootstrap for making a book list which is stored in your local storage and can be save for next time. You can all delete books at once or edit your book list and keep a new list into storage.",code_link:"https://github.com/Sobiash/JavaScript-bookListProject",deploy_link:"https://sobiash.github.io/JavaScript-bookListProject/",tools:["Javascript","BootStrap"],icons:["fab","js-square"]},{id:6,name:"Loan Calculator",description:"This project is made with Javascript and Bootstrap. With this project you can enter a loan value you wish to apply and give a time period for the loan you want and the %age as interest you wish to pay for that time period. then it will show you monthly payment and a total payment and total interest.",code_link:"https://github.com/Sobiash/JavaScript-LoanCalculator",deploy_link:"https://sobiash.github.io/JavaScript-LoanCalculator/",tools:["Javascript"],icons:["fab","js-square"]},{id:7,name:"To Do List",description:"Simple JavaScript application that allows a user to make a to-do list and keep it stored in local data storage.",code_link:"https://github.com/Sobiash/JavaScript-ToDoList",deploy_link:"https://sobiash.github.io/JavaScript-ToDoList/",tools:["JavaScript"],icons:["fab","js-square"]},{id:8,name:"Number Guessing Game",description:"Simple JavaScript application that allows a user to play the number guessing game.",code_link:"https://github.com/Sobiash/JavaScript-NumberGuesser",deploy_link:"https://sobiash.github.io/JavaScript-NumberGuesser/",tools:["Javascript"],icons:["fab","js-square"]},{id:9,name:"Sass Project",description:"In this project, I have made a sass project with the help of sass plugins and gulp task-runner. This project is made to show my sass skills and only is about frontend web design made with flexbox.",code_link:"https://github.com/Sobiash/SASS-Project",deploy_link:"https://sobiash.github.io/SASS-Project/",tools:["Sass","Gulp"],icons:["fab","sass"]}]},24:function(e,a,t){e.exports=t(56)},29:function(e,a,t){},31:function(e,a,t){},33:function(e,a,t){},35:function(e,a,t){},41:function(e,a,t){},43:function(e,a,t){},45:function(e,a,t){},48:function(e,a,t){},50:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(18),l=t.n(o),r=(t(29),t(8)),s=t(9),c=t(13),m=t(10),d=t(14),p=t(58),u=t(59),h=t(6),b=t.n(h),f=(t(31),function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.refs.canvas;e.width=window.innerWidth,e.height=window.innerHeight;var a=e.getContext("2d");document.addEventListener("click",function(e){var t=e.clientX-a.canvas.offsetLeft,n=e.clientY-a.canvas.offsetTop,i=function(e){return Math.floor(Math.random()*e)},o=function(){var e=["#ffecb1","#afeaf2","#c7e6c8","#e5c5ea","#fac9c8","#ffdcaf","#f097bb","#ffd7e5"],a=i(e.length);return e[a]},l=i(200),r=i(3),s=Math.floor(70*Math.random()+1);r%3===0?(a.beginPath(),a.rect(t,n,l,l),a.fillStyle=o(),a.fill()):r%3===1?(a.beginPath(),a.moveTo(t,n),a.lineTo(t+l,n),a.lineTo(t+.5*l,n-l),a.fillStyle=o(),a.fill()):r%3===2&&(a.beginPath(),a.arc(t,n,s,0,2*Math.PI,!1),a.closePath(),a.fillStyle=o(),a.fill())},!1),window.addEventListener("resize",function(){e.width=window.innerWidth,e.height=window.innerHeight})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("canvas",{ref:"canvas"}))}}]),a}(i.a.Component)),E=(t(33),function(e){var a=e.text.map(function(e,a){return" "!==e?i.a.createElement("span",{className:"letter",key:a}," ",e):i.a.createElement("br",{key:a})});return i.a.createElement("div",null,a)}),g=(t(35),function(){return i.a.createElement("div",{className:"name"},i.a.createElement(E,{text:["S","O","B","I","A"," ","S","H","A","H","B","A","Z"]}),i.a.createElement("p",{className:"intro"},i.a.createElement("b",null,"Front End Developer")),i.a.createElement("p",{className:"intro"},"I really like writing code."),i.a.createElement("p",{className:"intro"},"Especially in React and JavaScript."),i.a.createElement("p",{className:"intro"},i.a.createElement("em",null,"(click anywhere to interact)")))}),k=t(5),v=function(){return i.a.createElement("div",{className:"links"},i.a.createElement("a",{href:"https://twitter.com/sobia_shahbaz",className:"social-link",title:"Twitter",target:"_blank"},i.a.createElement(k.a,{icon:["fab","twitter"],className:"blue"})),i.a.createElement("a",{href:"https://github.com/Sobiash",className:"social-link",title:"Github",target:"_blank"},i.a.createElement(k.a,{icon:["fab","github"],className:"black"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/sobia-shahbaz",className:"social-link",title:"Linkedin",target:"_blank"},i.a.createElement(k.a,{icon:["fab","linkedin"],className:"dark-blue"})),i.a.createElement("a",{href:"mailto:sobiashahbaz66@yahoo.com",className:"social-link",title:"email me",target:"_blank"},i.a.createElement(k.a,{icon:"envelope",className:"red"})),i.a.createElement("a",{href:"https://www.instagram.com/sobia.shahbaz/",className:"social-link",title:"Instagram",target:"_blank"},i.a.createElement(k.a,{icon:["fab","instagram"],className:"purple"})))},w=(t(17),t(41),function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"contact"},i.a.createElement(E,{text:["C","O","N","T","A","C","T"],className:"text-center"})),i.a.createElement(v,null))}),y=(t(43),t(19)),S=t.n(y),N=function(){return i.a.createElement("div",{className:"about"},i.a.createElement("div",{className:"center"}," ",i.a.createElement(E,{text:["A","B","O","U","T"],className:"text-center"})),i.a.createElement("div",{className:"bio"},i.a.createElement("div",{className:"bio__pic"},i.a.createElement("img",{src:S.a,alt:"Sobia Shahbaz"})),i.a.createElement("div",{className:"bio__desc"},i.a.createElement("p",null,i.a.createElement("b",null,"Master student of SouthEastern University of Norway in Msc Management Program.")," ","Master thesis project in digital marketing, credentials are reinforced by experience gained during internship with Blockchain Hotels's digital marketing team.",i.a.createElement("b",null,i.a.createElement("br",null),"Consistently commended by professors and internship supervisors")," ","for grasp of multiple technologies and attention to detail. ",i.a.createElement("br",null)," ",i.a.createElement("b",null,"Known as a self-starter, team player and multitasker")," --strive to consistently exceed expectations."),i.a.createElement("p",null,"Technology Summary"),i.a.createElement("p",null,i.a.createElement("b",null,"Programming Languages Skills: ")," JavaScript, React Js; CSS3, Sass; HTML5; BootStrap; WordPress; Git, GitHub;",i.a.createElement("br",null),i.a.createElement("b",null,"Other Skills: ")," Responsive Design, Mobile First UX, ES6, ES7, Babel.js, NPM, Webpack, Gulp.js, Firebase.",i.a.createElement("br",null),i.a.createElement("b",null,"Systems: ")," Mac OS X, Windows Server 2016",i.a.createElement("br",null),i.a.createElement("b",null,"Digital Marketing Knowledge: ")," SEO, Google Ads, FaceBook Ads, Twitter Ads, Instagram Ads, Youtube, Blog, Research;"),i.a.createElement("p",null,"Internship"),i.a.createElement("p",null,i.a.createElement("b",null,"Blockchain Hotels, Warsaw, Poland")," ",i.a.createElement("br",null),"Digital Marketing Intern, 2018",i.a.createElement("br",null)," Accomplishments: Handled Company website tasks (primarily doing SEO best practices to optimize Web site for search engine rankings), working with wordpress(Job Post Creation, Blogs Creation tasks), working an average of 30 hours per week while maintaining a 3.2 GPA. ",i.a.createElement("br",null),"Handled Twitter Account completely, partially worked with FaceBook page, YouTube channel, Customer service duties",i.a.createElement("br",null),"Research for different productivity levels of the company."),i.a.createElement("p",null,i.a.createElement("b",null,"Scepter, Chorz\xf3w, Poland")," ",i.a.createElement("br",null),"Web Designing Intern, 2018",i.a.createElement("br",null)," Accomplishments: Hands on experience on 3 different projects in web development while learning new technologies.",i.a.createElement("br",null),"Learned about HTML, BootStrap, CSS3, Sass, JavaScript.",i.a.createElement("br",null),"Handled FaceBook page for different clients of the company."),i.a.createElement("p",null,"Volunteer Work"),i.a.createElement("p",null,"Have been board member of International Student Union of Norway as PR officer for one year while studying at SouthEastern University of Norway. ",i.a.createElement("br",null),"Handled many student and board related communication tasks in that position.")),i.a.createElement(v,null)))},_=t(57),j=(t(45),function(){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",{className:"nav"},i.a.createElement("li",null,i.a.createElement(_.a,{to:"/",exact:!0,activeStyle:{borderBottom:"3px solid #4a4a4a"},className:"nav__link"},"Home")),i.a.createElement("li",null,i.a.createElement(_.a,{to:"/about",exact:!0,activeStyle:{borderBottom:"3px solid #4a4a4a"},className:"nav__link"},"About")),i.a.createElement("li",null,i.a.createElement(_.a,{to:"/projects",exact:!0,activeStyle:{borderBottom:"3px solid #4a4a4a"},className:"nav__link"},"Projects")),i.a.createElement("li",null,i.a.createElement(_.a,{to:"/contact",exact:!0,activeStyle:{borderBottom:"3px solid #4a4a4a"},className:"nav__link"},"Contact"))))}),J=t(20),x=(t(48),function(){return i.a.createElement("div",{className:"container"},J.map(function(e){return i.a.createElement("div",{className:"card",key:e.id},i.a.createElement("h5",null,e.name),i.a.createElement("div",null,i.a.createElement(k.a,{icon:e.icons,className:"icons"})),i.a.createElement("p",{className:"tools"},e.tools.join(", ")),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:e.deploy_link,target:"_blank",className:"deploy_link"},"View Project")),i.a.createElement("li",null,i.a.createElement("a",{href:e.code_link,target:"_blank",className:"code_link"},e.code_link?"View Code":null))),i.a.createElement("p",{className:"description"},e.description))}))}),T=(t(50),function(){return i.a.createElement("div",{className:"projects"},i.a.createElement(E,{text:["P","R","O","J","E","C","T","S"]}),i.a.createElement(x,null))}),C=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(f,null),i.a.createElement(j,null),i.a.createElement(u.a,null,i.a.createElement(b.a,{path:"/",exact:!0,component:g}),i.a.createElement(b.a,{path:"/about",component:N}),i.a.createElement(b.a,{path:"/projects",component:T}),i.a.createElement(b.a,{path:"/contact",component:w}),i.a.createElement(b.a,{component:g}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(54);var B=t(7),P=t(21),A=t(22);B.b.add(A.a,P.a),l.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.768096ff.chunk.js.map