import { render, screen } from "@testing-library/react";
import Post from "./Post";

describe("Post", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Hämta inlägg med rätt id", async () => {
    // Arrange
    vi.mocked(globalThis.fetch).mockResolvedValueOnce({
      json: async () => ({
        id: 3,
        userId: 1,
        title: "Testinlägg",
        body: "Detta är ett testinlägg.",
      }),
    } as Response);

    //Act
    render(<Post id={3} />);

    //Assert
    await screen.findByText("Testinlägg");

    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts/3",
    );
  });
});
