import "../styles/about.css";

export default function About(){
	return(
		<section id="about">
			<h1 className="title">ABOUT</h1>
			<div className="about-content">
				<div className="about-content-main">
					<p>Hi, my name is Leo. I like <span>cats</span> and playing <span>video games</span>.</p>
					<p>I'm a recent graduate of Bachelor of Science in <span>Computer Science</span>. I have experience in <span>web development</span> and <span>game development</span>. I aim for a career where I can harness my knowledge and experience to create awesome software and immersive experiences.</p>
					<p>I am currently seeking for a <span>job</span> opportunity where I can <span>learn, contribute, and grow</span>.  Please don't hesitate to get in touch with me if you have an opportunity that fits my qualifications and experience.</p>
					{/* <p>Hallu Jagpol, Bilom, Sandog, Ange, Meowmeow, Rem, Kay-O, Axe, Joan, Moona, Munggi, Jopay</p> */}
				</div>		
			</div>		
		</section>
	)
}