export const obtenerClientes = async () => {
  const res = await fetch(import.meta.env.VITE_API_URL);
  const data = await res.json();
  return data;
};

export const obtenerCliente = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const data = await res.json();
  return data;
};

export const agregarClientes = async (datos) => {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const editarCliente = async (id, datos) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const eliminarCliente = async (id) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
    });
    await res.json();
  } catch (error) {
    console.log(error);
  }
};
