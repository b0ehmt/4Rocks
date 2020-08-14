mybutton = document.getElementById("topBtn");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function toTop() {
	document.getElementById("hero").scrollIntoView({
		behavior: "smooth",
	});
}
