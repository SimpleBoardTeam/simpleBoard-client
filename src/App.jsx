import './App.css'
import './Components/Navbar/Navbar'
import NavBar from './Components/Navbar/Navbar';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import MainPage from './Pages/MainPage/MainPage';'./Pages/MainPage/MainPage'


function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;