function showMenu(){
	document.getElementsByClassName("menu-bar-container")[0].style.display = "flex";
}

function hideMenu(){
	document.getElementsByClassName("menu-bar-container")[0].style.display = "none";
}

function unrollMenu() {
	document.getElementById("metro").addEventListener("mouseover", showMenu);
	document.getElementById("metro").addEventListener("mouseout", hideMenu);
}

window.onload=function(){
	unrollMenu();
};