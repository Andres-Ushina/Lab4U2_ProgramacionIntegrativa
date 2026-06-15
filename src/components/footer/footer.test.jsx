import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Footer", () => {
  it("muestra el texto de derechos reservados con el año actual", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();

    expect(screen.getByText(new RegExp(`ESPE ${year}`))).toBeInTheDocument();
  });
});
