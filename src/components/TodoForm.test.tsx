import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("Ska inte gå att lägga till en tom uppgift", async () => {
    
    // Arrange
    const user = userEvent.setup();
    const addTodo = vi.fn();

    render(<TodoForm onAdd={addTodo} />);

    // Act
    await user.type(screen.getByLabelText("Ny uppgift"), "   ");
    await user.click(screen.getByRole("button", { name: "Lägg till" }));

    // Assert
    expect(addTodo).not.toHaveBeenCalled();
  });
});
