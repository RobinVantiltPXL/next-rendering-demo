import axios from 'axios'
import Link from 'next/link'
import Character from '../components/character';
const BASE_URL = "https://akabab.github.io/starwars-api/api/id/"

export async function getServerSideProps() {
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

export default function ServerSideRender({characters}) {

    return characters.map(c => <Link href={"/ssr/" + c.id} key={c.id}><Character char={c}/></Link>);
}