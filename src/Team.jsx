import { useState } from "react"

export default function(){

    let [team,  setTeam] = useState(11)

    let handleAddTeam = () =>{
        let newTeam = team + 1;
        setTeam(newTeam)
    }

    let handleRemove = () =>{
        let newTeam = team -1 ;
        setTeam(newTeam)
    }

    let teamStyle ={
        border : '2px solid purple',
        margin : '15px',
        padding : '15px',
        borderRadius : '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>players :{team} </h3>
            <button onClick={handleAddTeam}>Add Players </button>
            <button onClick={handleRemove}>Remove Team </button>
        </div>
    )
}