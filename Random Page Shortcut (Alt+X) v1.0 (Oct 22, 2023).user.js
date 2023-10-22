// ==UserScript==
// @name         Random Fandom Page Shortcut (Alt+X)
// @version      1.0
// @description  Access a random Fandom wiki page with a shortcut
// @author       lemocha
// @match        https://*.fandom.com/*
// @icon         https://static.wikia.nocookie.net/1fcd9eb5-31ba-42aa-bc10-4a8c6332d69b
// @grant        none
// @run-at       document-idle
// ==/UserScript==


(() => {
	"use strict";
	document.addEventListener("keyup", event =>
	{
		// if Alt+X key combo pressed
		if (event.altKey && event.key === "x")
		{
			// redirect to random page url (literally)
			window.location.assign(window.location.origin + "/wiki/Special:Random");
		}
	});
})();