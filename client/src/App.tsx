import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home page</p>
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <p>Sign page</p>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
