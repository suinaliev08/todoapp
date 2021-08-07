let input=document.getElementById('t-inp');
let ibutton=document.querySelector(".i-button");
let ul=document.querySelector("ul");
let cButton=document.querySelector("#clear");
let fButton=document.querySelector("#finish");


input.onkeypress=function(event) {
	if (event.keyCode==13&&input.value!="") {
		creatToDo();
		countToDos();
	}
}
ibutton.onclick=function(event){
	if (input.value!="") {
		creatToDo();
		countToDos();
	}
		
}
ul.onclick=function(event){
	let target=event.target;
	if (target.tagName=="LI"||target.tagName=="SPAN") {
		target.classList.toggle("finished");
	}
	else if (target.tagName=="IMG") {
		target.parentElement.remove();
		countToDos();
	}
}
cButton.onclick=function(event){
	ul.innerHTML="";
	countToDos();
}
fButton.onclick=function(event){
	let li = document.querySelectorAll("li");
	for (let i = 0; i<li.length; i++) {
		li[i].classList.add("finished");
	}
}







function creatToDo() {
		let li=document.createElement("li");
		let span=document.createElement("span");
		let ul=document.querySelector(".t-list");
		let img=document.createElement("img");
		img.setAttribute("src","images/trash.png")
		span.innerHTML=input.value;
		li.appendChild(span);
		li.appendChild(img);
		ul.appendChild(li);
		input.value="";
	}	

function countToDos(){
	let li=document.querySelectorAll("li");
	let span=document.querySelector(".add");
	span.innerHTML=li.length;
}