export const AgentAbility = ({agentAbility}) => {
    return (
        <ul className="grid md:grid-cols-4 gap-5 mt-8 md:mt-16">
            {agentAbility.map((ability, index) => {
                return (
                    <li className="flex flex-col p-5 shadow dark:shadow-none dark:border dark:border-blue-600 rounded-lg" key={index}>
                        <figure className="flex-shrink-0 flex mb-3 justify-center">
                            <img className="h-12 w-12 rounded-full ring-2 ring-amber-500"
                                 src={ability.displayIcon} alt="" />
                        </figure>
                        <div className="p-4">
                            <h2>{ability.displayName}</h2>
                            <div className="mt-1 font-light text-slate-700">
                                <p>{ability.description}</p>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
