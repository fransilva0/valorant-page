import React,{ useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import { viewAgents } from "../../api/agents";
import { AgentsSection, AgentCard, Image, TitleAgent } from "./styles"

export function Agents () {
    const [listAgents, setListAgents] = useState([])

    const viewAgentsGame = () => {
        viewAgents()
        .then((response) => {
            if (response.status === 200) {
                
                const playableAgents = response.data.data.filter(agent => agent.isPlayableCharacter);
                setListAgents(playableAgents)
           
            }
        })
        .catch((error) => { 

            console.error('Ocorreu um erro ao buscar os dados!', error);
            // desenvolver a mudança de estado da seção para erro 
        })
    }

    useEffect(() => {
        
        viewAgentsGame();
        
    }, []);

    return (
        <AgentsSection>
            {listAgents && listAgents.map(agent => (
                <Link to={`/AgentPage/${agent.uuid}`}>
                <AgentCard key={agent.uuid}>

                    <Image src={agent.bustPortrait} /> 
        
                    <TitleAgent>{agent.displayName}</TitleAgent>
                
                </AgentCard>
                </Link>
            ))}
        </AgentsSection>
)}