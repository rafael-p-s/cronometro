import { useState, useEffect } from "react";

export default function Cronometro() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setContador(c => c + 1);
        }, 1000);

        return () => {
            clearInterval(intervalo);
        };
    }, []);

    console.log("Render:", contador);

    return <h1>{contador}</h1>;
}