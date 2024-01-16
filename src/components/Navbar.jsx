import React from "react"
import "../styles/navbar.css"
import Navmenu from "./Navmenu"

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

	{/* <div className="navicon">
		<a className="link" href="#home">HOME</a>
	</div>
	<div className="navhide">
		<a className="link" href="#about">ABOUT</a>
		<a className="link" href="#skills">SKILLS</a>
		<a className="link" href="#work">PROJECTS</a>
		<a className="link" href="#footer">CONTACT</a>
	</div>
	<div className="hidden">
		<a className="link icon-burger"></a>
	</div> */}