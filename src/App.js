import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import React, { useEffect, useState } from "react";
import Addpopup from "./components/Addpopup/";
import Adddoctorando from "./components/Adddoctorando/Adddoctorando.jsx";
import Adddoctor from "./components/Adddoctor/Adddoctor";

const App = () => {
  const [personas, setPersonas] = useState([]);
  const [Solicitantes, setSolicitantes] = useState([]);
  const [doctorandos, setDoctorandos] = useState([]);
  const [doctores, setDoctores] = useState([]);
  const onDeletePerson = (id) => {
    setPersonas(prev => prev.filter(persona => persona.id!==id))
  }
  const onAddProfessional = (professional) => {
    setPersonas(personas => [...personas, professional])
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/profesional/", {
      method: "GET",
      headers: {
      },
    })
      .then((resp) => resp.json())
      .then((res) => {
        setPersonas(res);
      })
      .catch((error) => console.log(error));


    fetch("http://127.0.0.1:8000/api/solicitante/", {
      method: "GET",
      headers: {
      },
    })
      .then((resp) => resp.json())
      .then((res) => {
        setSolicitantes(res);
      })
      .catch((error) => console.log(error));

    fetch("http://127.0.0.1:8000/api/doctorando/", {
      method: "GET",
      headers: {
      },
    })
      .then((resp) => resp.json())
      .then((res) => {
        setDoctorandos(res);
      })
      .catch((error) => console.log(error));

    fetch("http://127.0.0.1:8000/api/doctor/", {
      method: "GET",
      headers: {
      },
    })
      .then((resp) => resp.json())
      .then((res) => {
        setDoctores(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <BrowserRouter>
      <div className="flex">
        <div className="">{<Sidebar />}</div>
        <div
          id="sectionContaier"
          className="shadow-inner bg-gray-100 flex-1 overflow-hidden"
        >
          <div className="">
            <Navbar />
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  onDeletePerson={onDeletePerson}
                  sol={Solicitantes.length}
                  doctorandos={doctorandos.length}
                  doctores={doctores.length}
                  personas={personas}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/add-solicitante" element={<Addpopup />} />
            <Route path="/add-doctorando" element={<Adddoctorando />} />
            <Route path="/add-doctor" element={<Adddoctor onAddProfessional={onAddProfessional} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
