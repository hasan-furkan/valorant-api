import React, {useEffect, useState} from "react";
import AgentsComponent from "../components/agentsComponent";
import {agentsService} from "../services/api";
import {Loader} from "../components/loader";

export const Agents = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(()=> {
        agentsService().then((res) => {
            setCharacters(res.data.data)
            setLoading(false)
        })
    }, [])
    return (
        <div className="px-8 py-0 md:py-16 space-y-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 ">
            <div className="grid gap-4 ">
                {!loading ? <AgentsComponent characters={characters} /> : <Loader/>}
            </div>
        </div>
    )
}
