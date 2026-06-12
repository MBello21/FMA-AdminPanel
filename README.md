# ⚡ React Boilerplate (Frontend)
 
Una estructura base limpia, moderna y lista para producción para construir aplicaciones web con **React y Vite**. Diseñado para conectar con cualquier API REST de forma independiente.
 
![React](https://img.shields.io/badge/react-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/react--router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
 
---
 
## ✨ Características
 
- **Gestión de estado global** con `useReducer` + `useContext` — sin librerías externas
- **Routing** con React Router v7
- **Arquitectura desacoplada** — conecta con cualquier backend independientemente
- **Variables de entorno** gestionadas con Vite y `.env`
- **Estructura escalable** lista para crecer con el proyecto
- **Fast Refresh** optimizado — sin warnings de ESLint
- **ScrollToTop** incluido — vuelve al inicio en cada cambio de ruta
---
 
## 🛠️ Stack
 
| Tecnología | Uso |
|---|---|
| React 19 | Framework UI |
| Vite 6 | Bundler y servidor de desarrollo |
| React Router v7 | Navegación entre páginas |
| useReducer + useContext | Estado global sin Redux |
| CSS | Estilos sin dependencias externas |
 
---
 
## 📁 Estructura del proyecto
 
```
src/
├── assets/
│   └── react.svg                 # Assets estáticos
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx            # Barra de navegación
│   │   └── Navbar.css
│   ├── Footer/
│   │   ├── Footer.jsx            # Pie de página
│   │   └── Footer.css
│   └── ScrollToTop/
│       └── ScrollToTop.jsx       # Vuelve al inicio en cada ruta
├── context/
│   ├── StoreContext.js           # Contexto global (createContext)
│   └── StoreProvider.jsx         # Provider del estado global
├── hooks/
│   └── useGlobalReducer.js       # Hook para acceder al estado global
├── pages/
│   └── Home/
│       ├── Home.jsx              # Página de inicio
│       ├── Home.css
│       └── Layout.jsx            # Layout base con Navbar y Footer
├── services/
│   └── apiBackend.js             # Funciones fetch hacia la API
├── store/
│   └── store.js                  # Estado inicial y reducer
├── index.css                     # Estilos globales
├── main.jsx                      # Punto de entrada
└── routes.jsx                    # Definición de rutas
```
 
---
 
## ⚙️ Inicio rápido
 
1. **Clona el repositorio:**
```bash
   git clone https://github.com/tu_usuario/tu_repo.git
   cd tu_repo
```
 
2. **Instala las dependencias:**
```bash
   npm install
```
 
3. **Crea el archivo de variables de entorno:**
```bash
   cp .env.example .env
```
   Edita `.env` con tu URL de API:
```
   VITE_BACKEND_URL=https://tu-api.es
```
 
4. **Arranca el servidor de desarrollo:**
```bash
   npm run dev
```
 
---
 
## 🗂️ Estado global
 
El estado global se gestiona con `useReducer` + `useContext` sin dependencias externas, dividido en archivos con responsabilidades separadas:
 
| Archivo | Responsabilidad |
|---|---|
| `context/StoreContext.js` | Crea el contexto con `createContext()` |
| `context/StoreProvider.jsx` | Provider que envuelve la app con el estado |
| `hooks/useGlobalReducer.js` | Hook para consumir el estado desde cualquier componente |
| `store/store.js` | Estado inicial y lógica del reducer |
 
**Acceder al estado en cualquier componente:**
 
```jsx
import useGlobalReducer from '../hooks/useGlobalReducer'
 
const MyComponent = () => {
  const { store, dispatch } = useGlobalReducer()
  return <p>{store.ejemplo}</p>
}
```
 
**Despachar acciones:**
 
```jsx
dispatch({ type: 'SET_EJEMPLO', payload: 'valor' })
```
 
**Añadir nuevas acciones en `store/store.js`:**
 
```js
export const initialStore = () => ({
  ejemplo: null,
})
 
export const storeReducer = (store, action) => {
  switch (action.type) {
    case 'SET_EJEMPLO':
      return { ...store, ejemplo: action.payload }
    default:
      return store
  }
}
```
 
---
 
## 🌐 Conexión con el backend
 
Las llamadas a la API se centralizan en `src/services/apiBackend.js`:
 
```js
const API_URL = import.meta.env.VITE_BACKEND_URL
 
export const getExample = async () => {
  const response = await fetch(`${API_URL}/api/tu-endpoint`)
  return response.json()
}
```
 
> Todas las variables de entorno en Vite deben empezar por `VITE_` para ser accesibles en el cliente.
 
---
 
## 🧭 Routing
 
Las rutas se definen en `src/routes.jsx` con React Router v7:
 
```jsx
import { createBrowserRouter } from 'react-router'
import Layout from './pages/Home/Layout'
import Home from './pages/Home/Home'
 
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
    ]
  }
])
```
 
El componente `ScrollToTop` se incluye en el `Layout` para volver al inicio en cada cambio de ruta.
 
---
 
## 🚀 Despliegue en Cloudflare Pages
 
1. Conecta tu repositorio de GitHub en [Cloudflare Pages](https://pages.cloudflare.com)
2. Configura el build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Añade la variable de entorno `VITE_BACKEND_URL` en el panel de Cloudflare Pages
4. Cada push a `main` despliega automáticamente
---
 
## 🔗 Backend
 
Este boilerplate está diseñado para trabajar junto a:
 
👉 [Flask API Boilerplate](https://github.com/tu_usuario/tu_repo_back)
 
---
 
## 🔐 Seguridad
 
- El archivo `.env` está en `.gitignore` — **nunca lo subas al repositorio**
- Usa `.env.example` como plantilla pública sin valores reales
---
 
## 📄 Licencia
 
MIT — libre para usar, modificar y distribuir.