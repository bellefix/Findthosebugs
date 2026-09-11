import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "./TodoApp";

describe("TodoApp filter", () => {
  it("visar endast klara uppgifter när filter är satt till 'completed'", async () => {

    //Arrange
    const user = userEvent.setup();

    render(<TodoApp />);

    const input = screen.getByLabelText("Ny uppgift");
    const addButton = screen.getByRole("button", { name: "Lägg till" });

    //Act
    await user.type(input, "Promenad med hunden");
    await user.click(addButton);

    await user.type(input, "Dammsuga");
    await user.click(addButton);

    await user.type(input, "Göra inlämning");
    await user.click(addButton);

    await user.click(screen.getByRole("checkbox", { name: "Dammsuga" }));
    await user.click(screen.getByRole("button", { name: "Klara" }));

    // Assert
    expect(screen.getByText("Dammsuga")).toBeInTheDocument();
    expect(screen.queryByText("Promenad med hunden")).not.toBeInTheDocument();
    expect(screen.queryByText("Göra inlämning")).not.toBeInTheDocument();
  });
});
