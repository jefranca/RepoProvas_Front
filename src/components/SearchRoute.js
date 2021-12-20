import { useNavigate } from "react-router-dom"

export default function SearchRoute(){
    const navigate=useNavigate()

    return (
        <>
            <button onClick={()=> navigate("/exams/search/discipline")}>Procurar por Disciplina</button>
            <button onClick={()=> navigate("/exams/search/professor")}>Procurar por Professor</button>
        </>
    )
}