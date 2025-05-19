import africaImg from "../Photos/richtapp-africa.png";
import asiaImg from "../Photos/richtapp-asia.png";
import australiaImg from "../Photos/richtapp-australia.png";
import europeImg from "../Photos/richtapp-europe.png";
import namericaImg from "../Photos/richtapp-namerica.png";
import samericaImg from "../Photos/richtapp-samerica.png";

const continentsData = [
    {
        id: "africa",
        name: "Africa",
        image: africaImg,
        alt: "africa",
        countries: ["Nigeria", "Egypt", "South Africa", "Kenya"]
    },
    {
        id: "asia",
        name: "Asia",
        image: asiaImg,
        alt: "asia",
        countries: ["China", "Japan", "India", "Thailand"]
    },
    {
        id: "australia",
        name: "Australia",
        image: australiaImg,
        alt: "australia",
        countries: ["Australia", "New Zealand", "Fiji"]
    },
    {
        id: "europe",
        name: "Europe",
        image: europeImg,
        alt: "europe",
        countries: ["Germany", "France", "Italy", "Spain"]
    },
    {
        id: "namerica",
        name: "North America",
        image: namericaImg,
        alt: "namerica",
        countries: ["USA", "Canada", "Mexico"]
    },
    {
        id: "samerica",
        name: "South America",
        image: samericaImg,
        alt: "samerica",
        countries: ["Brazil", "Argentina", "Colombia", "Peru"]
    },
];

export default continentsData; 