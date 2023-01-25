import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {AgentComponent} from "../components/agentComponent";
import {agentService} from "../services/api";

export const Agent = () => {
    const agentUuid = useLocation().pathname.split("/")[2]
    const [agent, setAgent] = useState([])
    const [agentAbility, setAgentAbility] = useState([])
    useEffect(() => {
        agentService(agentUuid)
            .then((res) => {
                setAgent(res.data.data)
                setAgentAbility(res.data.data.abilities)
            })

    }, [])
    return (
        <div className="md:py-24 dark:bg-slate-900 dark:text-slate-100 text-slate-900 ">
               <AgentComponent agent={agent} agentAbility={agentAbility} />
        </div>
    )
}
