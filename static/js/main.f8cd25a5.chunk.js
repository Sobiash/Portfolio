(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/sobia.shahbaz.0c383f7a.jpg"},,function(e){e.exports=[{id:1,name:"E-Commerce MernStack Website",description:'"IN PROCESS" This is a MernStack app, build with MongoDB, Express, React JS and Node JS to buy different kinds of dresses categorized by their colors, categories, type of dresses and prices. It is more like an H & M kind of website.',code_link:"https://github.com/Sobiash/e-commerce-fullstack-app",deploy_link:"https://e-commerce-mern-app.herokuapp.com/",tools:["React Js","MongoDB, Express, Node JS"],icons:["fab","react"]},{id:2,name:"Education MernStack Website",description:'"IN PROCESS" This is a MernStack React Js app, build with MongoDB, React JS and Node JS for learning Japanese with different kinds of subscription packages. Users can have different subscription plans and can have their own profile to go and learn Japanese language acording to their subscription plans.',deploy_link:"https://mangadoutest.com/",tools:["React Js","MongoDB, Node JS"],icons:["fab","react"]},{id:3,name:"Fish Shop",description:"This is a stateful React Js app to buy different kinds of fishes whereas different users can edit or delete fish in their order and if someone can have access to dashboard, he can change the state of fishes on the basis of fresh fishes or sold out.",code_link:"https://github.com/Sobiash/Shop-Fish",deploy_link:"https://sobiash.github.io/Shop-Fish/",tools:["React Js","Firebase"],icons:["fab","react"]},{id:4,name:"Movies App",description:"This is a React app with Redux where users can find any movie of their choice and get information about that movie. The data is taken from an API which reflects IMDB movie data. This app can be enhanced as a cinema website where people can buy their tickets for the movies.",code_link:"https://github.com/Sobiash/Movies_App",deploy_link:"https://sobiash.github.io/Movies_App/",tools:["React Js","Redux","Session Storage"],icons:["fab","react"]},{id:5,name:"Blog Posts Redux App",description:"This is an React Redux app which gets posts data from jsonplaceholder and we can try to post a new post to jsonplaceholder.",code_link:"https://github.com/Sobiash/create-posts-redux-app",deploy_link:"https://sobiash.github.io/create-posts-redux-app/",tools:["React Js","Redux"],icons:["fab","react"]},{id:6,name:"Cooking Recipes",description:"This project is made with React Js app. A user can find recipes of differnet food items and his search list can be saved in local storage.",code_link:"https://github.com/Sobiash/cooking-recipe-app",deploy_link:" https://sobiash.github.io/cooking-recipe-app/",tools:["React Js, Local Storage"],icons:["fab","react"]},{id:7,name:"Tracalories",description:"This project is purely made with Javascript in Es6. A user can make a calories list by adding foods and required calories, this list can be saved in local storage to edit or delete anytime.",code_link:"https://github.com/Sobiash/CalculateCaloriesApp",deploy_link:"https://sobiash.github.io/CalculateCaloriesApp/",tools:["Javascript"],icons:["fab","js-square"]},{id:8,name:"InfoFactory",description:"This is my blog made with Wordpress. I have tried to show different categories of information in separate parts of the blog.  I also have worked with present digital marketing practices like SEO.",deploy_link:"http://infofactory.pk/",tools:["WordPress, Digital Marketing"],icons:["fab","wordpress"]},{id:9,name:"Book List",description:"In this project, I have used Javascript and Bootstrap for making a book list which is stored in your local storage and can be save for next time. You can all delete books at once or edit your book list and keep a new list into storage.",code_link:"https://github.com/Sobiash/JavaScript-bookListProject",deploy_link:"https://sobiash.github.io/JavaScript-bookListProject/",tools:["Javascript","BootStrap"],icons:["fab","js-square"]},{id:10,name:"Loan Calculator",description:"This project is made with Javascript and Bootstrap. With this project you can enter a loan value you wish to apply and give a time period for the loan you want and the %age as interest you wish to pay for that time period. then it will show you monthly payment and a total payment and total interest.",code_link:"https://github.com/Sobiash/JavaScript-LoanCalculator",deploy_link:"https://sobiash.github.io/JavaScript-LoanCalculator/",tools:["Javascript"],icons:["fab","js-square"]},{id:11,name:"To Do List",description:"Simple JavaScript application that allows a user to make a to-do list and keep it stored in local data storage.",code_link:"https://github.com/Sobiash/JavaScript-ToDoList",deploy_link:"https://sobiash.github.io/JavaScript-ToDoList/",tools:["JavaScript"],icons:["fab","js-square"]},{id:12,name:"Number Guessing Game",description:"Simple JavaScript application that allows a user to play the number guessing game.",code_link:"https://github.com/Sobiash/JavaScript-NumberGuesser",deploy_link:"https://sobiash.github.io/JavaScript-NumberGuesser/",tools:["Javascript"],icons:["fab","js-square"]},{id:13,name:"Sass Project",description:"In this project, I have made a sass project with the help of sass plugins and gulp task-runner. This project is made to show my sass skills and only is about frontend web design made with flexbox and BEM.",code_link:"https://github.com/Sobiash/SASS-Project",deploy_link:"https://sobiash.github.io/SASS-Project/",tools:["Sass","Gulp"],icons:["fab","sass"]}]},,,,function(e,a,t){e.exports=t(53)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,function(e,a,t){},,function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(16),s=t.n(i),l=(t(28),t(7)),r=t(8),c=t(12),m=t(9),d=t(13),p=t(55),h=t(56),u=t(54),b=(t(30),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.refs.canvas;e.width=window.innerWidth,e.height=window.innerHeight;var a=e.getContext("2d");document.addEventListener("click",function(e){var t=e.clientX-a.canvas.offsetLeft,n=e.clientY-a.canvas.offsetTop,o=function(e){return Math.floor(Math.random()*e)},i=function(){var e=["#ffecb1","#afeaf2","#c7e6c8","#e5c5ea","#fac9c8","#ffdcaf","#f097bb","#ffd7e5"],a=o(e.length);return e[a]},s=o(200),l=o(3),r=Math.floor(70*Math.random()+1);l%3===0?(a.beginPath(),a.rect(t,n,s,s),a.fillStyle=i(),a.fill()):l%3===1?(a.beginPath(),a.moveTo(t,n),a.lineTo(t+s,n),a.lineTo(t+.5*s,n-s),a.fillStyle=i(),a.fill()):l%3===2&&(a.beginPath(),a.arc(t,n,r,0,2*Math.PI,!1),a.closePath(),a.fillStyle=i(),a.fill())},!1),window.addEventListener("resize",function(){e.width=window.innerWidth,e.height=window.innerHeight})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("canvas",{ref:"canvas"}))}}]),a}(o.a.Component)),f=(t(32),function(e){var a=e.text.map(function(e,a){return" "!==e?o.a.createElement("span",{className:"letter",key:a}," ",e):o.a.createElement("br",{key:a})});return o.a.createElement("div",null,a)}),g=(t(34),function(){return o.a.createElement("div",{className:"name"},o.a.createElement(f,{text:["S","O","B","I","A"," ","S","H","A","H","B","A","Z"]}),o.a.createElement("p",{className:"intro"},o.a.createElement("b",null,"Mern Stack Developer")),o.a.createElement("p",{className:"intro"},"I really like writing code."),o.a.createElement("p",{className:"intro"},"Especially in React and Node JS."),o.a.createElement("p",{className:"intro"},o.a.createElement("em",null,"(click anywhere to interact)")))}),E=t(5),k=function(){return o.a.createElement("div",{className:"links"},o.a.createElement("a",{href:"https://twitter.com/sobia_shahbaz",className:"social-a",title:"Twitter",target:"_blank"},o.a.createElement(E.a,{icon:["fab","twitter"],className:"blue"})),o.a.createElement("a",{href:"https://github.com/Sobiash",className:"social-link",title:"Github",target:"_blank"},o.a.createElement(E.a,{icon:["fab","github"],className:"black"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/sobia-shahbaz",className:"social-link",title:"Linkedin",target:"_blank"},o.a.createElement(E.a,{icon:["fab","linkedin"],className:"dark-blue"})),o.a.createElement("a",{href:"mailto:sobiashahbaz66@yahoo.com",className:"social-link",title:"email me",target:"_blank"},o.a.createElement(E.a,{icon:"envelope",className:"red"})),o.a.createElement("a",{href:"https://www.instagram.com/sobia.shahbaz/",className:"social-link",title:"Instagram",target:"_blank"},o.a.createElement(E.a,{icon:["fab","instagram"],className:"purple"})))},v=(t(15),t(40),function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"contact"},o.a.createElement(f,{text:["C","O","N","T","A","C","T"],className:"text-center"})),o.a.createElement(k,null))}),w=(t(42),t(17)),S=t.n(w),y=function(){return o.a.createElement("div",{className:"about"},o.a.createElement("div",{className:"center"}," ",o.a.createElement(f,{text:["A","B","O","U","T"],className:"text-center"})),o.a.createElement("div",{className:"bio"},o.a.createElement("div",{className:"bio__pic"},o.a.createElement("img",{src:S.a,alt:"Sobia Shahbaz"})),o.a.createElement("div",{className:"bio__desc"},o.a.createElement("p",null,o.a.createElement("b",null,"Mern Stack Developer")," My front-end and back-end development, credentials are reinforced by experience gained with diffirent coding bootcamps and internships of web development with different companies.",o.a.createElement("b",null,o.a.createElement("br",null),"Consistently commended by professors and internship supervisors")," ","for grasp of multiple technologies and attention to detail. ",o.a.createElement("br",null)," ",o.a.createElement("b",null,"Known as a self-starter, team player and multitasker")," --strive to consistently exceed expectations."),o.a.createElement("p",null,"Technology Summary"),o.a.createElement("p",null,o.a.createElement("b",null,"Programming Languages Skills: ")," JavaScript, React Js, Redux, Test Driven Development; Node JS, Express, Mongo DB; CSS3, Sass; HTML5; BootStrap; WordPress; Git, GitHub;",o.a.createElement("br",null),o.a.createElement("b",null,"Other Skills: ")," SPA, Responsive Design, Mobile First UX, ES6, ES7, Babel.js, NPM, Webpack, Enzyme, Jest, Gulp.js, Firebase.",o.a.createElement("br",null),o.a.createElement("b",null,"Systems: ")," Mac OS X, Windows Server 2016",o.a.createElement("br",null),o.a.createElement("b",null,"Digital Marketing Knowledge: ")," SEO, Google Ads, FaceBook Ads, Twitter Ads, Instagram Ads, Youtube, Blog, Research;"),o.a.createElement("p",null,"Internship"),o.a.createElement("p",null,o.a.createElement("b",null,"Mangadou, Warsaw, Poland")," ",o.a.createElement("br",null),"React and Node JS Developer, 2018",o.a.createElement("br",null)," Accomplishments: Working on the Mern Stack website of Mangadou.jp in Warsaw, Poland. Website is being developed with React and Node JS along with code tests. ",o.a.createElement("br",null)),o.a.createElement("p",null,o.a.createElement("b",null,"Blockchain Hotels, Warsaw, Poland")," ",o.a.createElement("br",null),"Digital Marketing Intern, 2018",o.a.createElement("br",null)," Accomplishments: Handled Company website tasks (primarily doing SEO best practices to optimize Web site for search engine rankings), working with wordpress(Job Post Creation, Blogs Creation tasks), working an average of 30 hours per week while maintaining a 3.2 GPA. ",o.a.createElement("br",null),"Handled Twitter Account completely, partially worked with FaceBook page, YouTube channel, Customer service duties",o.a.createElement("br",null),"Research for different productivity levels of the company."),o.a.createElement("p",null,o.a.createElement("b",null,"Scepter, Chorz\xf3w, Poland")," ",o.a.createElement("br",null),"Web Designing Intern, 2018",o.a.createElement("br",null)," Accomplishments: Hands on experience on 3 different projects in web development while learning new technologies.",o.a.createElement("br",null),"Learned about HTML, BootStrap, CSS3, Sass, JavaScript.",o.a.createElement("br",null),"Handled FaceBook page for different clients of the company."),o.a.createElement("p",null,"Volunteer Work"),o.a.createElement("p",null,"Have been board member of International Student Union of Norway as PR officer for one year while studying at SouthEastern University of Norway. ",o.a.createElement("br",null),"Handled many student and board related communication tasks in that position.")),o.a.createElement(k,null)))},N=t(57),_=(t(44),function(){return o.a.createElement("nav",{className:"navbar"},o.a.createElement("ul",{className:"nav"},o.a.createElement("li",null,o.a.createElement(N.a,{to:"/",exact:!0,activeStyle:{borderBottom:"3px solid #4a4a4a"},className:"nav__link"},"Home")),o.a.createElement("li",null,o.a.createElement(N.a,{to:"/about",exact:!0,activeStyle:{borderBottom:"3px solid #4a4a4a"},className:"nav__link"},"About")),o.a.createElement("li",null,o.a.createElement(N.a,{to:"/projects",exact:!0,activeStyle:{borderBottom:"3px solid #4a4a4a"},className:"nav__link"},"Projects")),o.a.createElement("li",null,o.a.createElement(N.a,{to:"/contact",exact:!0,activeStyle:{borderBottom:"3px solid #4a4a4a"},className:"nav__link"},"Contact"))))}),J=t(19),j=(t(47),function(){return o.a.createElement("div",{className:"container"},J.map(function(e){return o.a.createElement("div",{className:"card",key:e.id},o.a.createElement("h5",null,e.name),o.a.createElement("div",null,o.a.createElement(E.a,{icon:e.icons,className:"icons"})),o.a.createElement("p",{className:"tools"},e.tools.join(", ")),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:e.deploy_link,target:"_blank",className:"deploy_link"},e.deploy_link?"View Project":null)),o.a.createElement("li",null,o.a.createElement("a",{href:e.code_link,target:"_blank",className:"code_link"},e.code_link?"View Code":null))),o.a.createElement("p",{className:"description"},e.description))}))}),x=(t(49),function(){return o.a.createElement("div",{className:"projects"},o.a.createElement(f,{text:["P","R","O","J","E","C","T","S"]}),o.a.createElement(j,null))}),M=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(b,null),o.a.createElement(_,null),o.a.createElement(h.a,null,o.a.createElement(u.a,{path:"/",exact:!0,component:g}),o.a.createElement(u.a,{path:"/about",component:y}),o.a.createElement(u.a,{path:"/projects",component:x}),o.a.createElement(u.a,{path:"/contact",component:v}),o.a.createElement(u.a,{component:g}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(51);var T=t(6),R=t(20),B=t(21);T.b.add(B.a,R.a),s.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[23,2,1]]]);
//# sourceMappingURL=main.f8cd25a5.chunk.js.map