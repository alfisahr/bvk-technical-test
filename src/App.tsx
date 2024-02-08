import { useEffect } from "react";
import "./App.css";
import apiClient from "./services/apiClient";

function App() {
  useEffect(() => {
    async function fetchData() {
      const res = await apiClient.get("/trending/movie/day");
      console.log(res);
    }
    fetchData();
    // console.log("dijalankan");
  }, []);

  return (
    <>
      <div className="text-red-500">tes</div>
    </>
  );
}

export default App;
