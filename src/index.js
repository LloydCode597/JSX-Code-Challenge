//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
	<div>
		<h1>My Favorite Vidoe Game Franchises</h1>
		<ul>
			<li>Final Fantasy</li>
			<li>Kingdom Hearts</li>
			<li>Drakengard/NieR</li>
			<li>God of War</li>
			<li>Assassin's Creed</li>
			<li>Mass Effect</li>
			<li>The Witcher</li>
			<li>Persona</li>
		</ul>
	</div>,
	document.getElementById("root")
);
