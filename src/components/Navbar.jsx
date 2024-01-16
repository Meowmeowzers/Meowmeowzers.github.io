import "../styles/navbar.css"

export default function Navbar(){
	return(
		<nav>
			<ul className="navbar">
				<li className="navicon"><a href="#home">ICON</a></li>
				<li ><a href="#about">ABOUT</a></li>
				<li ><a href="#skills">SKILLS</a></li>
				<li ><a href="#projects">PROJECTS</a></li>
				<li ><a href="#footer">CONTACT</a></li>
			</ul>
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
		</nav>
	)
}