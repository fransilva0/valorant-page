import React,{ useState, useEffect }  from "react";
import { viewWeapons } from "../../api/weapons";
import { WeaponsSection, WeaponCard, Image, TitleWeapon } from "./styles"

export function Weapons () {
    const [listWeapons, setListWeapons] = useState([])

    const viewWeaponsGame = () => {
        viewWeapons()
        .then((response) => {
            
            setListWeapons(response.data.data)
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