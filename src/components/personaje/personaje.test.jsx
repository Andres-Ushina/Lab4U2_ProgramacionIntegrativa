import { render, screen } from "@testing-library/react";
import { PersonajeCard } from "./personaje";

describe("PersonajeCard", () => {
  it("muestra el nombre, la especie y la imagen", () => {
    render(<PersonajeCard nombre="Rick" especie="Humano" imagen="rick.jpg" />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "rick.jpg");
    expect(img).toHaveAttribute("alt", "Rick");
    expect(screen.getByText("Rick")).toBeInTheDocument();
    expect(screen.getByText("Humano")).toBeInTheDocument();
  });
});
