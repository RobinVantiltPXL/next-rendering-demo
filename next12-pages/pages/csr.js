import axios from 'axios'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Character from '../components/character';
const URL = "https://akabab.github.io/starwars-api/api/all.json"

export default function ClientSideRender() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get(URL).then(response => setCharacters(response.data));
    }, []);

    return characters.map(c => <Link href={"/csr/" + c.id} key={c.id}><Character char={c}/></Link>);
}