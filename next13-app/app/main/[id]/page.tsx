import Character from '../../../components/character';
const BASE_URL = "https://akabab.github.io/starwars-api/api/id/"
const URL = "https://akabab.github.io/starwars-api/api/all.json";

async function getCharacterIds() {
    const result = await fetch(URL);
    const data = await result.json() as any[];
    return data.map(d => d.id.toString()) as string[];
}

export async function generateStaticParams() {
    const ids = await getCharacterIds();
  
    return ids.map(id => ({ id }));
}

async function getCharacter(id: string) {
    const result = await fetch(BASE_URL + id + ".json", { next: { revalidate: 10 } });
    const character = await result.json();

    return character;
}

export default async function ServerSideRenderDetail({params}: {params: {id: string}}) {
    const {id} = params;
    const character = await getCharacter(id);

    return <Character char={character}/>;
}