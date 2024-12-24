import React,{ useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import { specificAgent } from "../../api/agents";
import { AgentBanner } from "../../components/Banner";
import Error from "../Error";
import { AbilityCard, AbilityList, TitleAbility, Image, ResumeAbility} from "./styles"
import { Loading } from "../../components/Loading"


export default function Agent() {
    const { id } = useParams();
    const [agent, setAgent] = useState([])
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {

            specificAgent(id)
            .then((response) => {
                if (response.status === 200) {

                    setAgent(response.data.data)
                }

                setLoading(false)
            })
            .catch((error) => { 

                console.error('Ocorreu um erro ao buscar os dados!', error);
                setLoading(false)
                
            })
            
        }, [id]);

        if (loading) { return <Loading /> }

        if (!agent || !agent.displayName || !agent.abilities) { 
            return <Error message="Agente não localizado, será que alguém tirou férias?" />;
        }

    return (
        <>
            <AgentBanner agentName={agent.displayName} agentBio={agent.description} agentImage={agent.displayIcon} />
        
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
            
            
        </>
    )
}
