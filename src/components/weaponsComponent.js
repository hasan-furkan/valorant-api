import React from "react";

const WeaponsComponent = ({weapons}) => {

    return (<>
            {weapons.map((weapon, index) => {
                return (<div className="shadow dark:shadow-lg p-4 rounded" key={index}>
                        <article className="flex flex-col">
                            <img src={weapon.displayIcon} alt="blog"
                                 className="w-full h-auto object-cover object-center rounded-md"/>
                            <h3 className="">
                                <a href="#"
                                   className="text-gray-900 dark:text-gray-100 title-font text-xl font-medium">{weapon.displayName}</a>
                            </h3>
                            <p className="mt-1 font-light text-sm text-gray-500">{weapon.description}</p>
                        </article>
                    </div>

                );
            })}
        </>);
};

export default WeaponsComponent;
