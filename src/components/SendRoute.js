import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as services from "../services/API";

export default function SendRoute() {
  const [disciplines, setDisciplines] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [selectedIdDiscipline, setSelectedIdDiscipline] = useState(1);
  const [selectedIdProfessor, setSelectedIdProfessor] = useState(1);
  const [selectedIdCategory, setSelectedIdCategory] = useState(1);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const body = {
    name: name,
    category_id: selectedIdCategory,
    professor_id: selectedIdProfessor,
    url: link,
  };

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
  useEffect(() => {
    services
      .getProfessors(selectedIdDiscipline)
      .then((res) => {
        setProfessors(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [selectedIdDiscipline]);

  function sendExam(event) {
    event.preventDefault();
    services
      .postExam(body)
      .then((res) => {
        alert("Prova Enviada");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <form onSubmit={sendExam}>
        <input
          placeholder="Nome da prova, Ex Sugerido: 2020/3"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <select
          onChange={async (e) => {
            setSelectedIdCategory(e.target.value);
          }}
        >
          <option value={1}>P1</option>
          <option value={2}>P2</option>
          <option value={3}>P3</option>
          <option value={4}>2ch</option>
          <option value={5}>Outras</option>
        </select>
        <select
          onChange={async (e) => {
            setSelectedIdDiscipline(e.target.value);
          }}
        >
          {disciplines.map((discipline, key) => (
            <option value={key+1}>{discipline.name}</option>
          ))}
        </select>
        <select
          onChange={(e) => {
            setSelectedIdProfessor(e.target.value);
          }}
        >
          {professors.map((professor, key) => (
            <option value={key+1}>{professor.name}</option>
          ))}
        </select>
        <input
          type="url"
          placeholder="URL do pdf da prova"
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <button type="submit">Enviar Prova</button>
      </form>
    </>
  );
}
