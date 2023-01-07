import Link from 'next/link'
import Character from '../../components/character';
const URL = "https://akabab.github.io/starwars-api/api/all.json"

async function getCharacters() {
    const response = await fetch(URL, { cache: 'no-store' }); // no-store -> fetch on every request (SSR)
    return await response.json() as any[];
}

export default async function ServerSideRender() {
    const characters = await getCharacters();

    return characters?.map(c => <Link href={"/csr/" + c.id} key={c.id}><Character char={c}/></Link>);
}