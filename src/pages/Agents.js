import React, {useEffect, useState} from "react";
import AgentsComponent from "../components/agentsComponent";
import {agentsService} from "../services/api";

export const Agents = () => {
    const [characters, setCharacters] = useState([])

    useEffect(()=> {
        agentsService().then((res) => setCharacters(res.data.data))
    }, [])

    return (
        <div className="px-4 py-0 md:py-16 space-y-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 ">
            <div className="grid gap-4 ">
               <AgentsComponent characters={characters} />
            </div>
        </div>
    )
}
