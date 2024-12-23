import React,{ useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import { specificAgent } from "../../api/agents";
import { AgentBanner } from "../../components/Banner";
import { AbilityCard, AbilityList, TitleAbility, Image, ResumeAbility } from "./styles"



export default function Agent() {
    const { id } = useParams();
    const [agent, setAgent] = useState([])
    
        useEffect(() => {

            specificAgent(id)
            .then((response) => {
                if (response.status === 200) {

                    setAgent(response.data.data)
                }
            })
            .catch((error) => { 

                console.error('Ocorreu um erro ao buscar os dados!', error);
                // desenvolver uma mudança de estado para erro 
            })
            
        }, [id]);

    return (
        <>
            <AgentBanner agentName={agent.displayName} agentBio={agent.description} agentImage={agent.displayIcon} />
            
            {agent ? (
                <AbilityList>
                {agent.abilities && agent.abilities.map(ability => (
                    <AbilityCard key={ability.displayName}>

                        <Image src={ability.displayIcon} /> 

                        <div>
                            <TitleAbility>{ability.displayName}</TitleAbility>
                            <ResumeAbility>{ability.description}</ResumeAbility>
                        </div>
    
                    </AbilityCard>
                ))}
            </AbilityList>
            ) : (
                <></>
            )}
            
        </>
    )
}
