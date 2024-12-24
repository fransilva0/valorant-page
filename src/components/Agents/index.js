import React,{ useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import { viewAgents } from "../../api/agents";
import { AgentsSection, AgentCard, Image, TitleAgent, ErrorSection, MessageAgentError } from "./styles"
import { Loading } from "../Loading"

export function Agents () {
    const [listAgents, setListAgents] = useState([])
    const [loading, setLoading] = useState(true);

    const viewAgentsGame = () => {
        viewAgents()
        .then((response) => {
            if (response.status === 200) {
                
                const playableAgents = response.data.data.filter(agent => agent.isPlayableCharacter);
                setListAgents(playableAgents)
           
            }

            setLoading(false)

        })
        .catch((error) => { 

            console.error('Ocorreu um erro ao buscar os dados!', error);
            setLoading(false)


        })
    }

    useEffect(() => {
        
        viewAgentsGame();
        
    }, []);

    if (loading) { return <Loading /> }

    return (
        <>
        {listAgents.length > 0 ? (
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
        ) : (
            <ErrorSection>
                <MessageAgentError>Ops... Problemas de acesso ao servidor, tente novamente mais tarde!</MessageAgentError>
                <Image src="https://media.valorant-api.com/sprays/677dc003-4dbf-66a8-9116-4f8d7a9fb8d5/animation.gif" />
            </ErrorSection>
        )}
        </>
)}