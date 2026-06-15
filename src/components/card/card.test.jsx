import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./card";

describe("Card", () => {
  it("muestra el nombre y si es mayor o menor de edad", () => {
    render(<Card nombre="Ana" edad={17} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Ana y es Es menor de edad");
    expect(screen.getByText("Edad Oculta")).toBeInTheDocument();
  });

  it("muestra la edad cuando se hace click en el botón", () => {
    render(<Card nombre="Carlos" edad={24} />);
    const button = screen.getByRole("button", { name: /mostrar edad/i });

    fireEvent.click(button);

    expect(screen.getByText("24")).toBeInTheDocument();
    expect(button).toHaveTextContent("Ocultar edad");
  });
});
