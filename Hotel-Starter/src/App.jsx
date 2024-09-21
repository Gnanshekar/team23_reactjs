import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import RoomDetails from './Pages/RoomDetails';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/room/:id',
    element: <RoomDetails />
  }
]);

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
};

export default App;