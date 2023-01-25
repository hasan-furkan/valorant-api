import axios from "axios";

export const agentsService = async () => {
    return await axios.get(`https://valorant-api.com/v1/agents?language=tr-TR&isPlayableCharacter=true`)
}

export const weaponsService = async () => {
    return await axios.get("https://valorant-api.com/v1/weapons?language=tr-TR")
}

export const agentService = async (agentUuid) => {
    return await axios.get(`https://valorant-api.com/v1/agents/${agentUuid}?language=tr-TR`)
}
