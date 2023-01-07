import axios from 'axios'
import Link from 'next/link'
import Character from '../components/character';
const URL = "https://akabab.github.io/starwars-api/api/all.json"

export async function getServerSideProps() {
    const response = await axios.get(URL);
    const characters = response.data;
    return {
        props: {
            characters
        }
    }
}

export default function ServerSideRender({characters}) {
    return characters.map(c => <Link href={"/ssr/" + c.id} key={c.id}><Character char={c}/></Link>);
}