import { useEffect,useState } from "react";

import * as services from "../services/API";

export default function SearchByDiscipline() {
  const [disciplines, setDisciplines] = useState([]);
  const [selectedIdDiscipline, setSelectedIdDiscipline] = useState(1);
  const [professors, setProfessors] = useState([]);
  const [selectedIdProfessor, setSelectedIdProfessor] = useState();
  const [exams, setExams] = useState([]);
  const [verifyProfessorExam, setVerifyProfessorExam]=useState("")

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

  function searchProfessor(event){
    event.preventDefault()
    services.getProfessors(selectedIdDiscipline)
      .then((res) => {
        setProfessors(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

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
      <form onSubmit={searchProfessor}>
        <select
          onChange={async (e) => {
            setSelectedIdDiscipline(e.target.value);
          }}
        >
          {disciplines.map((discipline, key) => (
            <option value={key + 1}>{discipline.name}</option>
          ))}
        </select>
        <button type="submit">Enviar Prova</button>
      </form>
      {professors.length ? 
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
    :
    <></>
    }
      {exams.length ? 
        <>
            {exams.map(exam=><button onClick={() => window.open(exam.url)}>{exam.name}</button>)}
        </> 
        : <>{verifyProfessorExam}</>}
    </>
  );
}
