import axios from 'axios'
import { useRouter } from 'next/router'
import {useState, useEffect} from 'react'
import Character from '../../components/character'
const BASE_URL = "https://akabab.github.io/starwars-api/api/id/"

export default function ClientSideRenderDetail() {
    const router = useRouter()
    const {id} = router.query;
    const [character, setCharacter] = useState(null);

    useEffect(() => { 
        async function fetchData() {
            const response = await axios.get(BASE_URL + id + ".json")
            setCharacter(response.data);
        }
        if (id) fetchData();
    }, [id]);

    return (<>{ character && <Character char={character}/>}</>);
}