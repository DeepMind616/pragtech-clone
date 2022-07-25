
import cardSrc from "./cardsrc.json";


const fetchSectionSrc = async () => {
    const data = cardSrc;
    return { data }
}

const getAllSectionSrc = async (): Promise<any[]> =>  {
    const achievementSectionSrc = await fetchSectionSrc()
    return achievementSectionSrc.data;
}

export default getAllSectionSrc;