import {AgentAbility} from "./agentAbility";

export const AgentComponent = ({agent, agentAbility}) => {
    return (
        <div className="px-4">
            <figcaption className="w-full justify-center flex mb-3">
                <img src={agent.displayIconSmall} alt="blog"
                     className="w-24 h-24 rounded-full ring-2 ring-amber-500" />
            </figcaption>
            <h3 className="text-3xl text-center text-blue-600 font-semibold">{agent.displayName}</h3>
            <p className="text-slate-500 mt-4 text-center">{agent.description}</p>
            <AgentAbility agentAbility={agentAbility} />
        </div>
    )
}

