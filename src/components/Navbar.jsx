
export default function Navbar(){
	return(
		<nav>
			<div class="navicon">
				<a class="link" href="#home">HOME</a>
			</div>
			<div class="navhide">
				<a class="link" href="#about">ABOUT</a>
				<a class="link" href="#skills">SKILLS</a>
				<a class="link" href="#work">PROJECTS</a>
				<a class="link" href="#footer">CONTACT</a>
			</div>
			<div class="hidden">
				<a class="link icon-burger"></a>
			</div>
		</nav>
	)
}