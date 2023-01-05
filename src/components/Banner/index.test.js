import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Banner from '.'


afterEach(() => {
    cleanup()
})

describe("Banner Component", () => {
    render(<Banner />);
    const banner = screen.getByTestId("banner");

    // Test 1
    test("Banner Rendering", () => {
        expect(banner).toBeInTheDocument();
    })
})