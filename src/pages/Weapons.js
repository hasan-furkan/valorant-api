import React, {useEffect, useState} from "react";
import axios from "axios";
import WeaponsComponent from "../components/weaponsComponent";
import {weaponsService} from "../services/api";

export const Weapons = () => {
    const [weapons, setWeapons] = useState([]);
    useEffect(() => {
        weaponsService()
            .then((res) => {
                setWeapons(res.data.data);
            });
    }, []);
    return (
        <div className="px-4 py-8 md:py-32 space-y-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
            <div className="grid  md:grid-cols-3 gap-4">
                <WeaponsComponent weapons={weapons} />
            </div>
        </div>
    )
}
