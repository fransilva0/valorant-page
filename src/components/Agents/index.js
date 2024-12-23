import React,{ useState, useEffect }  from "react";
import { viewAgents } from "../../api/agents";
import { AgentsSection, AgentCard, Image, TitleAgent } from "./styles"

export function Agents () {
    const [listAgents, setListAgents] = useState([])

    const viewAgentsGame = () => {
        viewAgents()
        .then((response) => {
            const playableAgents = response.data.data.filter(agent => agent.isPlayableCharacter);
            setListAgents(playableAgents)
        })
    }

    useEffect(() => {
        
        viewAgentsGame();
        
    }, []);

    return (
        <AgentsSection>
            {listAgents && listAgents.map(agent => (

                <AgentCard key={agent.uuid}>

                    <Image src={agent.bustPortrait} /> 
        
                    <TitleAgent>{agent.displayName}</TitleAgent>
                
                </AgentCard>
            ))}
        </AgentsSection>
)}