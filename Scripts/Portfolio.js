function toggleMenu() {
	var x = document.getElementById("Nav");
	if (x.className === "NavBar") {
		x.className += " Responsive";
	} else {
		x.className = "NavBar";
	}
}