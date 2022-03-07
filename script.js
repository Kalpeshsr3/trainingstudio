//console.log('file loaded');

 var active = document.getElementById('active');
 
 active.onmouseover = function(){
	 active.className = 'menuactive';
 }
 
 active.onclick = function(){
	 active.className = 'menuactive';
 }
 
 function togglebtn(){
	const togglebtn = document.querySelector('.togglebtn');
 togglebtn.classList.toggle('active');
 const headmenu = document.querySelector('.menu');
 headmenu.classList.toggle('active'); 
 }
 
 $('.menu a').click(function(){
$('.menu').removeClass('togglebtn active');

 });
 
window.addEventListener("scroll",function(){
	var navbar = document.querySelector('.navbar');
	navbar.classList.toggle("sticky",window.scrollY > 0);
});
 
 window.addEventListener("scroll",function(){
	var menu = document.querySelector('.menu');
	menu.classList.toggle("sticky",window.scrollY > 0);
});

 window.addEventListener("scroll",function(){
	var logo = document.querySelector('.logo h3');
	//console.log(logo);
	logo.classList.toggle("sticky",window.scrollY > 0);
});
 
 
 
 
