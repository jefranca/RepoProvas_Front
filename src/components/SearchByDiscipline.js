import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

import * as services from "../services/API";

export default function SearchByDiscipline(){
    const [disciplines, setDisciplines] = useState([]);
    const [selectedIdDiscipline, setSelectedIdDiscipline] = useState(1);

    useEffect(() => {
        services
          .getDisciplines()
          .then((res) => {
            setDisciplines(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);

    return(
        <form>  
            <select
            onChange={async (e) => {
                setSelectedIdDiscipline(e.target.value);
            }}
            >
            {disciplines.map((discipline, key) => (
                <option value={key+1}>{discipline.name}</option>
            ))}
            </select>
            <button type="submit">Enviar Prova</button>
        </form>
    )
}