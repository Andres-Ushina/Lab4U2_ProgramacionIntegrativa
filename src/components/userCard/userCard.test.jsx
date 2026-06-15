import { render, screen, fireEvent } from "@testing-library/react";
import { UserCard } from "./userCard";

describe("UserCard", () => {
  it("muestra el nombre y el estado activo por defecto", () => {
    render(<UserCard nombre="Luis" activo={true} />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Luis");
    expect(screen.getByText("Estado activo")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Desactivar");
  });

  it("permite activar y desactivar el estado", () => {
    render(<UserCard nombre="Ana" activo={false} />);
    const button = screen.getByRole("button");

    expect(screen.getByText("Estado inactivo")).toBeInTheDocument();
    expect(button).toHaveTextContent("Activar");

    fireEvent.click(button);

    expect(screen.getByText("Estado activo")).toBeInTheDocument();
    expect(button).toHaveTextContent("Desactivar");
  });
});
