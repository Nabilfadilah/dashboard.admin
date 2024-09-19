import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import DashboardPage from "./pages/Dashboard.jsx";
import DataPemesananPage from "./pages/DataPemesanan.jsx";
import AddPemesananPage from "./pages/AddPemesananPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World</div>,
    element: <Navigate to="/login" />, // Redirect ke /login ketika mengakses "/"
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/data-pemesanan",
    element: <DataPemesananPage />,
  },
  {
    path: "/data-pemesanan/add",
    element: <AddPemesananPage />,
  },
]);

function App() {
  return (
    // <div className="flex justify-center min-h-screen items-center">
    <RouterProvider router={router} />
    // </div>
  );
}

export default App;
