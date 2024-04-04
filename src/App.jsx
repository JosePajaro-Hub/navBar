
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, createBrowserRouter} from "react-router-dom"
import "./index.css";
import NavrbarComp from "./components/navBarComponents"
import Container from "react-bootstrap/Container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const App = () => (
 <>
 <BrowserRouter> <Container>
  <NavrbarComp/>
  <div>content</div>
 </Container>
 </BrowserRouter>

 </>
);
ReactDOM.createRoot( document.getElementById("app")).render(<App />);
