import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";

describe("Layout", () => {
  it("muestra el header, el contenido principal y el footer", () => {
    render(
      <BrowserRouter>
        <Layout>
          <div>Contenido de prueba</div>
        </Layout>
      </BrowserRouter>
    );

    expect(screen.getByText("Contenido de prueba")).toBeInTheDocument();
    expect(screen.getByText(/Todos los derechos reservados/i)).toBeInTheDocument();
    expect(screen.getByText("Inicio")).toBeInTheDocument();
  });
});
