window.onload = () => {

	for(let card of document.querySelectorAll(".card")) {

		let loaded = () => {
			card.classList.add("loaded");
		}

		if(card.complete) loaded();
		else card.addEventListener("load", loaded);

	}

	if(localStorage.getItem("dark_theme") == "true") {
		document.getElementById("theme_switch").checked = true;
	}
	change_theme(document.getElementById("theme_switch"));

}

let change_theme = (theme_switch) => {

	localStorage.setItem("dark_theme", theme_switch.checked);

	if(theme_switch.checked) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}

}
