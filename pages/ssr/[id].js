import axios from 'axios'
import Character from '../../components/character';
const BASE_URL = "https://akabab.github.io/starwars-api/api/id/"

export async function getServerSideProps({params}) {
    const {id} = params;

    const result = await axios.get(BASE_URL + id + ".json")
    const character = result.data

    return {
        props: {
            character
        }
    }
}

export default function ServerSideRenderDetail({character}) {

  return <Character char={character}/>;
}