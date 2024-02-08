<<<<<<< HEAD
import { RouterProvider } from "react-router";
import "./App.css";
import router from "./utils/routes";

function App() {
  return <RouterProvider router={router} />;
=======
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
>>>>>>> api-service
}

export default App;
