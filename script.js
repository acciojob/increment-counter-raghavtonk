//your JS code here. If required.
let btn = document.getElementById("incrementBtn");
let count=0;
btn.addEventListener("click",()=>{
	let ptagValue = document.getElementById("counter").innerText;
	alert(count);
	count+=1;
	document.getElementById("counter").innerHTML = count
})