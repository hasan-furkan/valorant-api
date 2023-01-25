import React, {useEffect, useState} from "react";
import axios from "axios";
import CardComponent from "../components/cardComponent";

export const Card = () => {
    const [characters, setcharacters] = useState([])

    useEffect(()=> {
        axios.get(`https://valorant-api.com/v1/agents?language=tr-TR&isPlayableCharacter=true`)
            .then(res => {
                setcharacters(res.data.data);
            })
    }, [])

    return (
        <div className="px-4 py-0 md:py-16 space-y-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 ">
            <aside className="space-y-2">
                <h2 className="text-4xl font-semibold">Articles</h2>
            </aside>
            <div className="grid gap-4 ">
               <CardComponent characters={characters} />
            </div>
        </div>
    )
}
