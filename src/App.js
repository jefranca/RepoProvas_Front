import { Outlet } from "react-router";
import styled from "styled-components";
export default function App() {
  return (
    <BodyApp>
      <Outlet />
    </BodyApp>
  );
}

const BodyApp = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background-color: #B0C4DE;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  z-index:-1;

& form{
    display: flex;
    flex-direction: column;
    
    & input,select,button{
        width: 300px;
        margin:5px;
        box-sizing: border-box;
    }

}
`;