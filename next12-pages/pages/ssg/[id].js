import axios from 'axios'
import Character from '../../components/character';
const BASE_URL = "https://akabab.github.io/starwars-api/api/id/"


export async function getStaticPaths() {
    const ids = [1, 2, 3, 4, 5].map(id => id.toString());
    
    const paths = ids.map(id => {
        return { params: { id } }
    });

    return {
        paths,
        fallback: 'blocking' // or true or false
    }
    /*
        [
            { params: { id: '1' } }
            { params: { id: '2' } }
            { params: { id: '3' } }
            { params: { id: '4' } }
            { params: { id: '5' } }
        ]
    */
}

export async function getStaticProps({params}) {
    const {id} = params;

    const result = await axios.get(BASE_URL + id + ".json")
    const character = result.data

    return {
        props: {
            character
        },
    }
}

export default function StaticDetailPage({character}) {

  return <Character char={character}/>;
}