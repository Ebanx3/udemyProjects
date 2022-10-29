import { Router } from "express";
import controllerClients from "./controller";

const router = Router();

router.get("/", (req, res) => {
  const clients = controllerClients.getClients();
  res.status(200).json({
    data: clients,
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const client = controllerClients.getClientById(id);
  if (!client.nombre) {
    return res.status(400).json({
      data: "Does not exists a client with that id",
    });
  }
  res.status(200).json({
    data: client,
  });
});

router.post("/", (req, res) => {
  // const { nombre, empresa, email, telefono, notas} = req.body;
  if (
    !req.body.nombre ||
    !req.body.empresa ||
    !req.body.telefono ||
    !req.body.email ||
    !req.body.notas
  ) {
    return res.status(400).json({
      msg: "The request must have a body with 'nombre', 'empresa', 'email', 'telefono', 'notas'",
    });
  }
  const nuevoCliente = controllerClients.createClient(req.body);
  res.status(200).json({
    msg: "Client added",
    data: nuevoCliente,
  });
});

router.put("/:id", (req, res) => {
  const clienteActualizado = controllerClients.updateClient(
    req.params.id,
    req.body
  );
  if (!clienteActualizado.nombre) {
    return res.status(400).json({
      data: "Does not exists a client with that id",
    });
  }
  res.status(200).json({
    msg: "Client updated",
    data: clienteActualizado,
  });
});

router.delete("/:id", (req, res) => {
  const resu = controllerClients.deleteClient(req.params.id);
  res.status(200).json(resu);
});

export default router;
