import {Link, useNavigate} from "react-router-dom"
import {Loader} from "./loader";

const AgentsComponent = ({characters}) => {

    const navigate = useNavigate()

    const handleClick = (characterUuid) => {
        navigate(`/agents/${characterUuid}`)
    }

  return (
      <>
          {characters ? characters.map((character, index) => {
              return (
                  <article key={index}
                           className="flex flex-col md:flex-row items-center  group relative p-6  bg-gray-100 dark:bg-slate-800 rounded-2xl after:absolute after:w-[2px] after:h-10 after:bg-blue-600 after:top-[50%] after:left-0 after:-translate-y-[50%] ">
                      <figure className="w-full space-y-4">
                          <h1 className="text-lg font-bold tracking-tight sm:text-2xl">{character.displayName}</h1>
                          <h2 className="text-lg font-bold tracking-tight sm:text-1xl">
                              <Link to="/">{character.description}</Link>
                          </h2>
                          <button
                              className="px-5 py-1 border-2 hover:border-blue-600 transition border-gray-200"
                              onClick={() => handleClick(character.uuid)}
                          >
                              Daha Fazla
                          </button>
                      </figure>
                      <figcaption className="w-full md:w-1/3 order-first md:order-last">
                          <img src={character.displayIconSmall} alt="blog"
                               className="w-full h-48 object-cover object-center rounded-md w-full h-auto" />
                      </figcaption>
                  </article>
              )
          }): <Loader />}
      </>

  )
}

export default AgentsComponent
