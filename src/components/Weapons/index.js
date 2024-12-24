import React,{ useState, useEffect }  from "react";
import { viewWeapons } from "../../api/weapons";
import { WeaponsSection, WeaponCard, Image, TitleWeapon, ErrorSection, MessageAgentError } from "./styles"
import { Loading } from "../Loading"

export function Weapons () {
    const [listWeapons, setListWeapons] = useState([])
    const [loading, setLoading] = useState(true);

    const viewWeaponsGame = () => {
        viewWeapons()
        .then((response) => {

            if (response.status === 200) {

                setListWeapons(response.data.data)
            
            }

            setLoading(false)
            
        })
        .catch((error) => { 

            console.error('Ocorreu um erro ao buscar os dados!', error);
            setLoading(false)

        })
    }

    useEffect(() => {
        
        viewWeaponsGame();
        
    }, []);

    if (loading) { return <Loading /> }

    return (
        <>
        {listWeapons.length > 0 ? (
            <WeaponsSection>
            {listWeapons && listWeapons.map(weapon => (

                <WeaponCard key={weapon.uuid}>

                    <Image src={weapon.displayIcon} /> 
        
                    <TitleWeapon>{weapon.displayName}</TitleWeapon>
                
                </WeaponCard>
            ))}
        </WeaponsSection>
        ) : (
            <ErrorSection>
                <MessageAgentError>Ops... Problemas de acesso ao servidor, tente novamente mais tarde!</MessageAgentError>
                <Image src="https://media.valorant-api.com/sprays/677dc003-4dbf-66a8-9116-4f8d7a9fb8d5/animation.gif" />
            </ErrorSection>
        )}
        </>
)}