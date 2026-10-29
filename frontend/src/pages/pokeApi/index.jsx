import {useEffect, useRef, useState} from "react";

export default function PokeApi() {
    const [pokemon, setPokemon] = useState("");
    const [imagem, setImagem] = useState("");
    const [name, setName] = useState("");
    const [buscar, setBuscar] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        if (pokemon === '') {
            inputRef.current.focus();
        }
    }, [])


    const handleSubmit = async () => {
        if (!pokemon.trim()) {
            return alert("Pokemon could not be found.");
        }

        setBuscar(true)

        try {
            const data = await findPoke(pokemon.trim().toLowerCase());
            setName(data.name);
            setImagem(data.sprites.front_default);
            setPokemon("");

        } catch (error) {
            setPokemon("");
            setName("");
            setImagem("");
            alert("Pokemon could not be found", error.message);
        } finally {
            setBuscar(false);
        }

    }

    async function findPoke(pokemon) {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

        if (!resp.ok) {
            throw new Error(`Não foi possível encontrar ${pokemon}`);
        }

        const achado = await resp.json();
        return achado;
    }

    return (
        <>
            <h1>Poke API</h1>
            <div>
                <input type="text" placeholder="Informe o nome do Pokémon" value={pokemon}
                       ref={inputRef}
                       onChange={e => setPokemon(e.target.value)} required/>
                <button onClick={handleSubmit}>{!buscar ? "Buscar" : "Buscando..."}</button>
            </div>
            <div>
                <p>Nome:{name}</p>
                {imagem && <img src={imagem} alt={name ?? ''}/>}
            </div>
        </>
    )
}