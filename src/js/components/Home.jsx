import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [inputTarea, setInputTarea] = useState("")
	const [tareas, setTareas] = useState([])
	const eliminarTarea = (index) => {
		setTareas(tareas.filter((tarea, i) => i !== index))
	
	}


return (

	<div className="toDoList">
		<p className="titulo">Lista de Tareas para hoy<span className="icono"><i class="fa-solid fa-list-check"></i></span></p>
		<input className="input"
			value={inputTarea}
			type="text"
			placeholder="Tarea pendiente"
			onChange={event => setInputTarea(event.target.value)}
			onKeyUp={event => {
				if (event.key === "Enter") {
					setTareas([...tareas, inputTarea])
					setInputTarea("")
				}
			}}
		/>
		<ul>
			{
				tareas.map((tarea, index) => {
					return (
						<li key={index} >
							<span className="texto">{tarea} </span>
							<span className="cruz" onClick={(event)=> eliminarTarea(index)}>
								<i class="fa-solid fa-xmark"></i>
							</span>
						</li>
					)
				})
			}
		</ul>
		<div>
			<p className="tareas-pendientes">
				{tareas.length === 0 ? ("No tienes tareas pendientes") : `Tienes ${tareas.length} pendientes`}
						
				</p>


		</div>
	</div>
);
};

export default Home;