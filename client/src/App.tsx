import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Signup from "./pages/Signup";
import Signin from "./pages/signin";
import Home from "./pages/home";
import Hotel from "./pages/hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signin"
          element={
            <Layout>
              <Signin />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/hotel"
          element={
            <Layout>
              <Hotel />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
