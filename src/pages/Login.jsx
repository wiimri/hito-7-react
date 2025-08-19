import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/profile"); 
  };

  return (
    <div className="fullpage-auth">
      <div className="auth-card" style={{ maxWidth: 420 }}>
        <h2 className="mb-3 text-center">Iniciar sesión</h2>

        <form onSubmit={handleSubmit} className="d-grid gap-3">
          <div>
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>

          <div className="text-center">
            <small>
              ¿No tienes cuenta?{" "}
              <Link to="/register">Regístrate</Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}
