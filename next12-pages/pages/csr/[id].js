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
        if (id) {
            axios.get(BASE_URL + id + ".json").then(res => setCharacter(res.data));
        }
    }, [id]);

    return (<>{ character && <Character char={character}/>}</>);
}