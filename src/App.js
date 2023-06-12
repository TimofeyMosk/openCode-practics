import { Container } from "react-bootstrap";
import "./App.sass";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableLog from "./components/tablelog/TableLog";
import Map from "./components/Map/Map";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="" element={<TableLog />} />
          <Route path="statement" element={<TableLog />} />
          <Route path="map" element={<Map />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
