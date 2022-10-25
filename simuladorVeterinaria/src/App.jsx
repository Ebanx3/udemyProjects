import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [paciente, setPaciente] = useState({});

  const addPaciente = (paciente) => {
    const newPacientes = [...pacientes];
    newPacientes.push(paciente);
    setPacientes(newPacientes);
  };

  const setPacienteToEdit = (pte) => {
    setPaciente(pte);
  };

  const eliminarPaciente = (id) => {
    const newPacientes = pacientes.filter((pcte) => pcte.id !== id);
    setPacientes(newPacientes);
  };

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="container mx-auto mt-3">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          addPaciente={addPaciente}
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPacienteToEdit={setPacienteToEdit}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
