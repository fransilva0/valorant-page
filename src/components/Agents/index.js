import React,{ useState, useEffect }  from "react";
import { viewAgents } from "../../api/agents";

export function Agents () {
    const [listAgents, setListAgents] = useState([])

    const viewAgentsGame = () => {
        viewAgents()
        .then((response) => {
            setListAgents(response.data.data)
        })
    }

    useEffect(() => {
        
        viewAgentsGame();
        
    }, []);

    return (
        <div>
                {listAgents && listAgents.map(agent => (

                <div key={agent.uuid}>

                    <div>
                        <img src={agent.displayIcon} /> 
                        <h1>{agent.displayName}</h1>
                    </div>
                </div>
    ))}
    </div>
)}