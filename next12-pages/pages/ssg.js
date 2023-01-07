import axios from 'axios'
import Link from 'next/link'
import Character from '../components/character';
const URL = "https://akabab.github.io/starwars-api/api/all.json"

export async function getStaticProps() {
    const response = await axios.get(URL);
    const characters = response.data;
    return {
        props: {
            characters
        }
    }
}

export default function StaticPage({characters}) {
  return characters.map(c => <Link href={"/ssg/" + c.id} key={c.id}><Character char={c}/></Link>);
}