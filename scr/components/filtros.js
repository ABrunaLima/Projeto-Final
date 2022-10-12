import { useState } from "react"

export function Filtro() {

    const [filtro, setFiltro] = useState(false);

    const handleSelect = (clicado) => {
        console.log(clicado)
    }

    return (
        <div role="main">
            <button className="filtro" onClick={() => setFiltro(f => !f)}>Filtrar</button>
            {
                filtro && <div className="linhaEstado">
                    <div className="estado">
                        <input type="radio" value="Male" name="gender" onChange={() => handleSelect(3)} /> Category
                        <input type="radio" value="Female" name="gender" onChange={() => handleSelect(4)} /> Color
                    </div>
                </div>
            }
        </div>
    );
}