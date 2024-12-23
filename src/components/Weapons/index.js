import React,{ useState, useEffect }  from "react";
import { viewWeapons } from "../../api/weapons";
import { WeaponsSection, WeaponCard, Image, TitleWeapon } from "./styles"

export function Weapons () {
    const [listWeapons, setListWeapons] = useState([])

    const viewWeaponsGame = () => {
        viewWeapons()
        .then((response) => {

            if (response.status === 200) {

                setListWeapons(response.data.data)
            
            }
            
        })
        .catch((error) => { 

            console.error('Ocorreu um erro ao buscar os dados!', error);
            // desenvolver a mudança de estado da seção para erro 
        })
    }

    useEffect(() => {
        
        viewWeaponsGame();
        
    }, []);

    return (
        <WeaponsSection>
            {listWeapons && listWeapons.map(weapon => (

                <WeaponCard key={weapon.uuid}>

                    <Image src={weapon.displayIcon} /> 
        
                    <TitleWeapon>{weapon.displayName}</TitleWeapon>
                
                </WeaponCard>
            ))}
        </WeaponsSection>
)}