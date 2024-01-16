import "../styles/skills.css";

export default function Skills(){
	return(
		<section className="div-section" id="skills">
			<div className="title"><h1>Skills</h1></div>
			<div className="skill-container">
				<div className="skill-category">
					<h2>Languages</h2>
					<div className="skill-item-container">
						<a href="https://isocpp.org/tour" target="_blank"><div className="skill-item icon-cpp"></div></a>
						<a href="https://dotnet.microsoft.com/en-us/languages/csharp" target="_blank"><div className="skill-item icon-cs"></div></a>
						<a href="https://www.oracle.com/ph/java/" target="_blank"><div className="skill-item icon-java"></div></a>
						<a href="https://kotlinlang.org/" target="_blank"><div className="skill-item icon-kt"></div></a>
						<a href="https://www.python.org/" target="_blank"><div className="skill-item icon-py"></div></a>
						<a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank"><div className="skill-item icon-html"></div></a>
						<a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics" target="_blank"><div className="skill-item icon-css"></div></a>
						<a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" target="_blank"><div className="skill-item icon-js"></div></a>
					</div>
				</div>
				<div className="skill-category">
					<h2>Tools</h2>
					<div className="skill-item-container">
						<a href="https://git-scm.com/" target="_blank"><div className="skill-item icon-git"></div></a>
						<a href="https://github.com/" target="_blank"><div className="skill-item icon-github"></div></a>
					</div>
				</div>
				<div className="skill-category">
					<h2>Development</h2>
					<div className="skill-item-container">
						<a href="https://unity.com/" target="_blank"><div className="skill-item icon-unity"></div></a>
					</div>
				</div>
			</div>
		</section>
	)
}