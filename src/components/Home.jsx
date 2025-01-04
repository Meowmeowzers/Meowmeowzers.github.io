import "../styles/home.css"

export default function Home(){
	return(
		<section className="home-container" id="home">
			<div className="home-main">
				<h1>Leonardo Laureta</h1>
				<hr />
				<p>Programmer/Software Developer</p>
			</div>
			<div className="home-bottom">
				<a className="home-resume-button" href="#">Resume</a>
				<div className="home-social">
					<a href="mailto:leolaureta123@gmail.com" target="_blank"><div className="icon-email"></div></a>
					<a href="https://github.com/meowmeowzers" target="_blank"><div className="icon-github2"></div></a>
					<a href="https://www.linkedin.com/in/leonardo-laureta-688b35288/" target="_blank"><div className="icon-linkedin2"></div></a>
				</div>
				{/* <a className="" href="#about"><button><img src="../src/assets/arrow-up.svg" height="30px"/></button></a> */}
			</div>
		</section>
	)
}