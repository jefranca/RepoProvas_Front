import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function NoRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return (
    <main style={{ padding: "1rem" }}>
      <p>There's nothing here!</p>
    </main>
  );
}
