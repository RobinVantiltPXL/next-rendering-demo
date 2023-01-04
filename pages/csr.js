import axios from 'axios'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Character from '../components/character';
const BASE_URL = "https://akabab.github.io/starwars-api/api/id/"

export default function ClientSideRender() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => { 
        async function fetchData() {
            const data = [];
            let response;
            for (let i = 1; i <= 5; i++) {
                response = await axios.get(BASE_URL + i + ".json")
                data.push(response.data);
            }
            setCharacters(data);
        }
        fetchData();
    }, []);

    return characters.map(c => <Link href={"/csr/" + c.id} key={c.id}><Character char={c}/></Link>);
}