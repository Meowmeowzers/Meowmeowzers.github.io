import React from "react"

export default function Navmenu(props){

	return(
		<ul class="navmenu" onClick={props.clickHandler}>
			<li><a class="link" href="#home" onClick={props.clickHandler}>HOME</a></li>
			<li><a class="link" href="#about" onClick={props.clickHandler}>ABOUT</a></li>
			<li><a class="link" href="#skills" onClick={props.clickHandler}>SKILLS</a></li>
			<li><a class="link" href="#work" onClick={props.clickHandler}>PROJECTS</a></li>
			<li><a class="link" href="#footer" onClick={props.clickHandler}>CONTACT</a></li>
		</ul>
	)
}