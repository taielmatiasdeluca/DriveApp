import { Route, Routes, useParams } from "react-router-dom";
import SideMenu from "../../components/Sidemenu";
export const Panel = () => {
  const params = useParams();
  const onAction = params["*"];
  return (
    <main className="h-screen flex max-h-screen">
      <SideMenu section={onAction} />
      <Routes>
        <Route path="/logout" element={<h1>Hola</h1>} />
      </Routes>
    </main>
  );
};
