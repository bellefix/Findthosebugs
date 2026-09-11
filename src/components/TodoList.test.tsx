import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";

describe("TodoList", () => {
  it("skicka rätt id när en uppgift klickas", async () => {
    const user = userEvent.setup();
    const onToggle = vi.fn();
    const onDelete = vi.fn();

    //Arrange
    const todos = [
      { id: 9, text: "Ge den katten som biter på allt mat", completed: false },
      { id: 13, text: "Strypa den jobbiga katten...", completed: false },
    ];

    //Act
    render(<TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />);

    const geKattMat = screen.getByRole("checkbox", {
      name: "Ge den katten som biter på allt mat",
    });

    await user.click(geKattMat);

    //Assert
    expect(onToggle).toHaveBeenCalledWith(9);
  });
});
