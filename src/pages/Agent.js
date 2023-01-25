import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {AgentComponent} from "../components/agentComponent";
import {agentService} from "../services/api";
import {Loader} from "../components/loader";

export const Agent = () => {
    const agentUuid = useLocation().pathname.split("/")[2]
    const [agent, setAgent] = useState([])
    const [agentAbility, setAgentAbility] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        agentService(agentUuid)
            .then((res) => {
                setAgent(res.data.data)
                setAgentAbility(res.data.data.abilities)
                setLoading(false)
            })

    }, [])
    return (
        <div className="md:py-24 dark:bg-slate-900 dark:text-slate-100 text-slate-900 ">
            {!loading ?  <AgentComponent agent={agent} agentAbility={agentAbility} /> : <Loader /> }

        </div>
    )
}
