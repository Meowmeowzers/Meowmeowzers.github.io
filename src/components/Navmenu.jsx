export default function Navmenu(props){

	return(
		<ul className="navmenu" onClick={props.clickHandler}>
			<li><a className="link" href="#home" onClick={props.clickHandler}>HOME</a></li>
			<li><a className="link" href="#about" onClick={props.clickHandler}>ABOUT</a></li>
			<li><a className="link" href="#skills" onClick={props.clickHandler}>SKILLS</a></li>
			<li><a className="link" href="#work" onClick={props.clickHandler}>PROJECTS</a></li>
			<li><a className="link" href="#footer" onClick={props.clickHandler}>CONTACT</a></li>
		</ul>
	)
}