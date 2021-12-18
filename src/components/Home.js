import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
  return (
    <>
      <button onClick={()=> navigate("/exams/search")}>Visualizar uma prova!</button>
      <button onClick={()=> navigate("/exams/send")}>Enviar uma prova!</button>
    </>
  );
}
