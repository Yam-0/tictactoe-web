import React from 'react';
import './Header.css';
import '../Colors.css';
import '../Fonts.css';
import '../Links.css';

function Header() {

	function navbarToggle() {
		var popupElement = document.getElementById("Navbar");
		console.log("Clicked!");

		if (popupElement.classList.contains("Header-Logo-Links-Enabled")) {
			popupElement.classList.remove("Header-Logo-Links-Enabled");
		} else {
			popupElement.classList.add("Header-Logo-Links-Enabled");
		}
	}

	function reportWindowSize() {
		var popupElement = document.getElementById("Navbar");

		if (window.innerWidth > 1050) {
			popupElement.classList.remove("Header-Logo-Links-Enabled");
		}
	}
	
	window.onresize = reportWindowSize;

	return (
		<header className="Header-Container">
			<div className="Header-Header">
				<div className="Header-Logo-Box">
					<a className="Logo-Link"><div className="Logo" alt="Logo"></div></a>
					<a><h1>Tage Åkerström</h1></a>
					<div onClick={navbarToggle} className="Navbar-Button"></div>
				</div>
				<div className="Header-Logo-Links" id="Navbar">
					<a className="Header-Logo-LinkBox">HOME</a>
					<a className="Header-Logo-LinkBox">HISTORY</a>
					<a className="Header-Logo-LinkBox">LEADERBOARDS</a>
					<a className="Header-Logo-LinkBox">PROFILE</a>
				</div>
			</div>
		</header>
	);
}

export default Header;