import axios from 'axios'
import Character from '../components/character';
const BASE_URL = "https://akabab.github.io/starwars-api/api/id/"

export async function getStaticProps() {
    const characters = [];
    let response;
    for (let i = 1; i <= 5; i++) {
        response = await axios.get(BASE_URL + i + ".json")
        characters.push(response.data);
    }

    return {
        props: {
            characters
        }
    }
}

export default function StaticPage({characters}) {

  return characters.map(c => <Character char={c} key={c.id}/>);
}