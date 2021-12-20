import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

const BASE_URL = REACT_APP_BASE_URL
  ? REACT_APP_BASE_URL
  : "http://localhost:4001/";

function getDisciplines() {
  return axios.get(`${BASE_URL}disciplines`);
}
function getProfessors(idDiscipline) {
  return axios.get(`${BASE_URL}professors/${idDiscipline}`);
}
function postExam(body) {
  return axios.post(`${BASE_URL}exams`, body);
}
function getExam(idProfessor){
    return axios.get(`${BASE_URL}exams/discipline/${idProfessor}`);
}

export { getDisciplines, getProfessors, postExam, getExam };
