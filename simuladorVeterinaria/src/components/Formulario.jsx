import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({
  addPaciente,
  paciente,
  pacientes,
  setPacientes,
  setPaciente,
}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [editando, setEditando] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editando) {
      setEditando(false);
      const newPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        id: paciente.id,
      };
      const pacientesActualizados = pacientes.map((pcnte) =>
        pcnte.id === newPaciente.id ? newPaciente : pcnte
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      if ([nombre, propietario, email, fecha, sintomas].includes("")) {
        setError(true);
        return;
      }
      setError(false);
      const newPaciente = { nombre, propietario, email, fecha, sintomas };
      newPaciente.id =
        Math.random().toString(36).substring(2) + Date.now().toString(36);
      addPaciente(newPaciente);
    }
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
      setEditando(true);
    }
  }, [paciente]);

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Formulario</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">ADMINISTRALOS</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-10 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error msg="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            id="mascota"
            placeholder="Nombre de mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            id="propietario"
            placeholder="Nombre de propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email de contacto
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="decsribe los sintomas"
            rows="5"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          className="bg-indigo-600 w-full p-3 rounded-md uppercase font-bold text-white hover:bg-indigo-700 cursor-pointer transition-all"
          type="submit"
          value={editando ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
