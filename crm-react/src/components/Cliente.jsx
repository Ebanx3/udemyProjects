import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarCliente } from "../api/clientes";

export const action = async ({ params }) => {
  await eliminarCliente(params.clienteId);
  return redirect("/");
};

const Cliente = ({ cliente }) => {
  const nav = useNavigate();
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{cliente.nombre}</p>
        <p>{cliente.empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {cliente.email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {cliente.telefono}
        </p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          className="text-blue-600 hover:text-blue-700 font-bold text-xs"
          onClick={() => nav(`/clientes/${cliente.id}/editar`)}
        >
          Editar
        </button>
        <Form
          action={`/clientes/${cliente.id}/eliminar`}
          method="post"
          onSubmit={(e) => {
            if (!confirm("Deseas eliminar este registro")) {
              e.preventDefault();
            }
          }}
        >
          <button
            className="text-red-600 hover:text-red-700 font-bold text-xs"
            type="submit"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Cliente;
