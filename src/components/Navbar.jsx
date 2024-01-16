import React from "react"
import Navmenu from "./Navmenu"
import "../styles/navbar.css"

export default function Navbar(){
	const [showNav, setShowNav] = React.useState(false);

	const navMenuButton = (e) => {
		e.stopPropagation();
		setShowNav(() => !showNav);
	}

	return(
		<nav>
			<ul className="navbar">
				<li className="navicon"><a href="#home">ICON</a></li>
				<li className="navhide"><a href="#about">ABOUT</a></li>
				<li className="navhide"><a href="#skills">SKILLS</a></li>
				<li className="navhide"><a href="#projects">PROJECTS</a></li>
				<li className="navhide"><a href="#footer">CONTACT</a></li>
				<li className="navmenu-button"><button onClick={navMenuButton}>MENU</button></li>
			</ul>
			{showNav && <Navmenu clickHandler={navMenuButton} />}
		</nav>
	)
}