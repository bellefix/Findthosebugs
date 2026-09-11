import { render, screen } from "@testing-library/react";
import TodoStats from "./TodoStats";

describe("TodoStats", () => {
  it("visar hur många uppgifter som finns kvar", () => {

    //Arrange
    const todos = [
      { id: 1, text: "Promenad med hunden", completed: false },
      { id: 2, text: "Dammsuga", completed: true },
      { id: 3, text: "Göra inlämning", completed: false },
    ];

    //Act
    render(<TodoStats todos={todos} />);

    //Assert
    expect(screen.getByText("2 kvar av 3")).toBeInTheDocument();
  });
});
