import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    contraseña: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);

    localStorage.setItem("usuarioRegistrado", JSON.stringify(form));

    alert("Registro exitoso");
    setForm({
      nombre: "",
      correo: "",
      contraseña: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="correo" className="form-label">Correo</label>
        <input
          type="email"
          className="form-control"
          id="correo"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contraseña" className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="contraseña"
          name="contraseña"
          value={form.contraseña}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-success w-100">
        Registrarse
      </button>
    </form>
  );
};

export default Register;
