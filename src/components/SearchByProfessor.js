import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

import * as services from "../services/API";

export default function SearchByProfessor() {
  const [professors, setProfessors] = useState([]);
  const [selectedIdProfessor, setSelectedIdProfessor] = useState(1);
  const [exams, setExams] = useState([]);
  const [verifyProfessorExam, setVerifyProfessorExam]=useState("")

  useEffect(() => {
    services
      .getProfessors("")
      .then((res) => {
        setProfessors(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function getExams(event) {
    event.preventDefault();
    services
      .getExam(selectedIdProfessor)
      .then((res) => {
        setExams(res.data);
      })
      .catch((err) => {
        setExams([])
        setVerifyProfessorExam("Professor ainda não tem prova cadastrada")
        console.error(err);
      });
  }

  return (
    <>
      <form onSubmit={getExams}>
        <select
          onChange={async (e) => {
            setSelectedIdProfessor(e.target.value);
          }}
        >
          {professors.map((professor, key) => (
            <option value={key + 1}>{professor.name}</option>
          ))}
        </select>
        <button type="submit">Enviar Prova</button>
      </form>
      {exams.length ? 
        <>
            {exams.map(exam=><button onClick={() => window.open(exam.url)}>{exam.name}</button>)}
        </> 
        : <>{verifyProfessorExam}</>}
    </>
  );
}
