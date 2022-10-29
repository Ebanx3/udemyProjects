const clientes = [];

const generarId = () => {
  const randomNum = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);
  return randomNum + fecha;
};

const getClients = () => {
  return clientes;
};

const getClientById = (id) => {
  const index = clientes.findIndex((cliente) => cliente.id == id);
  if (index < 0) {
    return {};
  }
  return clientes[index];
};

const createClient = (body) => {
  body.id = generarId();
  const nuevoCliente = clientes.push(body);
  return clientes[nuevoCliente - 1];
};

const updateClient = (id, body) => {
  const index = clientes.findIndex((cliente) => cliente.id == id);
  if (index < 0) {
    return {};
  }

  clientes[index] = body;
  clientes[index].id = id;
  return clientes[index];
};

const deleteClient = (id) => {
  const index = clientes.findIndex((cliente) => cliente.id == id);
  if (index < 0) {
    return { msg: "Does not exists a client with that id" };
  }
  clientes.splice(index, 1);
  return { msg: "Client deleted" };
};

const controllerClients = {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};

export default controllerClients;
