import {useEffect, useState} from "react";

export default function Sobre(){

    const [termo, setTermo] = useState('');
    const [tema, setTema] = useState("claro");

    console.log("Render")

    useEffect(() => {
        console.log("Efeito:", termo);

        return () => {
            console.log("Cleanup:", termo);
        };
    }, []);

    return (
        <>
            <h1>Sobre PG</h1>
            <div>
                <input
                    value={termo}
                    onChange={(e) => setTermo(e.target.value)}
                />

                <button onClick={() => setTema("escuro")}>
                    Mudar tema
                </button>
                {termo !== '' && <p>Your name is {termo}.</p>}
            </div>
        </>
    )
}