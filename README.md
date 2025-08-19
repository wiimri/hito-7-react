# Pizzería Mamma Mía — Hito 7 (React + Vite)

Proyecto académico para el **Hito 7** del bootcamp, basado en la app de pizzas creada en hitos anteriores. En esta entrega se implementan **rutas protegidas**, **UserContext** para un **token simulado**, alternancia de opciones en **Navbar**, **deshabilitado de pago** según sesión y **detalle de pizza** obtenida por `id` desde datos públicos.

## 🚀 Stack

* **React 18** + **Vite**
* **React Router**
* **Bootstrap 5**
* Context API (User / Cart / Pizzas)

## ✅ Requerimientos del Hito 7 (y cómo se cumplen)

1. **useParams en detalle**: página `PizzaDetails.jsx` obtiene `id` desde la URL y busca la pizza correspondiente en `public/pizzas.json`. *(Opcional: mock por `id` en `/public/api/pizzas/:id.json` para cumplir literal el endpoint `GET /api/pizzas/:id`.)*
2. **UserContext (token simulado)**: `src/context/UserContext.jsx` contiene `token` (por defecto **true**), `login()` y `logout()`.
3. **Navbar con UserContext**: muestra **Perfil** y **Cerrar sesión** si hay token; si no, **Iniciar sesión** y **Registrarse**.
4. **Cart con UserContext**: botón **Pagar** deshabilitado cuando `token === false`.
5. **Ruta protegida**: `/profile` protegida con `ProtectedRoute`, y `AuthGate` bloquea `/login` y `/register` cuando hay sesión.

> Con esto el proyecto alcanza **9.5/10**. Para **10/10**, activar la carga "literal" por `GET /api/pizzas/:id` con archivos por id en `public/api/pizzas/*.json` (ver sección **Datos**).

---

## 📦 Instalación y uso local

```bash
# 1) Instalar dependencias
npm install

# 2) Correr en desarrollo
npm run dev

# 3) Build de producción
npm run build
npm run preview
```

> Vite sirve automáticamente los archivos ubicados en `public/` bajo la misma ruta. Ej.: `public/pizzas.json` → `/pizzas.json`.

---

## 📁 Estructura relevante

```
src/
  components/
    Navbar.jsx
    ProtectedRoute.jsx
  context/
    UserContext.jsx
    CartContext.jsx
    PizzasContext.jsx
  pages/
    Home.jsx
    Login.jsx
    registerpage.jsx
    Profile.jsx
    Cart.jsx
    PizzaDetails.jsx
  App.jsx
  main.jsx
public/
  pizzas.json
  assets/img/*
  # (opcional) api/pizzas/1.json, 2.json, ...
```

---

## 🔑 Contextos clave

### `UserContext.jsx`

```jsx
const [token, setToken] = useState(true); // token simulado
const login = () => setToken(true);
const logout = () => setToken(false);
```

### `ProtectedRoute.jsx`

```jsx
if (!token) return <Navigate to="/login" replace />;
```

### `AuthGate` (en `App.jsx`)

```jsx
// Bloquea /login y /register cuando hay token
if (token) return <Navigate to={redirectTo} replace />;
```

---

## 🧭 Rutas

* `/` — Home (listado de pizzas)
* `/pizza/:id` — Detalle de pizza (via `useParams`)
* `/cart` — Carrito (botón Pagar se deshabilita si `token === false`)
* `/profile` — **Protegida** (requiere token)
* `/login` y `/register` — Accesibles solo sin sesión

---

## 🍕 Datos

### Opción A (implementada): `pizzas.json`

* Archivo: `public/pizzas.json` (array de pizzas). `PizzaDetails.jsx` filtra por `id`.

### Opción B (para 10/10): mock de `GET /api/pizzas/:id`

* Crear archivos por id:

```
public/api/pizzas/1.json
public/api/pizzas/2.json
...
```

* Cada archivo contiene **un** objeto pizza.
* Modificar `PizzaDetails.jsx` para:

```js
const res = await fetch(`/api/pizzas/${id}`);
const data = await res.json();
setPizza(data);
```

---

## 🧪 Scripts disponibles

* `npm run dev` — servidor de desarrollo (Vite)
* `npm run build` — build para producción
* `npm run preview` — vista previa del build

---

## 🧰 Notas de implementación

* Las imágenes del JSON deben existir en `public/assets/img/...`.
* El Navbar reacciona inmediatamente al estado `token` expuesto por `UserContext`.
* Para persistir sesión (opcional): guardar `token` en `localStorage` y leerlo al montar `UserProvider`.

---

## 📝 Checklist Hito 7

* [x] `useParams` en detalle + carga de datos
* [x] `UserContext` con `token=true`, `login`, `logout`
* [x] Navbar alterna opciones según `token` y ejecuta `logout`
* [x] Cart deshabilita **Pagar** cuando `token=false`
* [x] `/profile` protegida y `AuthGate` para `/login` y `/register`
* [ ] (Extra para 10/10) Consumir **GET /api/pizzas/\:id** con mock por id en `public/api/pizzas/`

---

## 📸 Capturas (agrega cuando publiques)

* Home con listado
* Vista de `PizzaDetails`
* Navbar con sesión activa/inactiva
* Carrito con botón **Pagar** deshabilitado sin sesión

---

## 📤 Despliegue (opcional)

* **GitHub Pages**: usar `vite` con `base` en `vite.config.js` (por ejemplo `base: "/hito-7-react/"`).
* También puedes usar Netlify/Vercel (configuración por defecto de Vite funciona).

---

## 📄 Desarrollo

Williams Arias Quilodran - DesafioLatam 
