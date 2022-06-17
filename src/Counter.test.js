import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
    it("counter displays correct initial value", () => {
        const { getByTestId } = render(<Counter initialCount={0} />)
        const countValue = Number(getByTestId("count").textContent)
        expect(countValue).toEqual(0)
    })

    it("counter should increment by 1 if increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />)
        const incrementBtn = getByRole("button", { name: "Increment" })
        fireEvent.click(incrementBtn)
        const countValue = Number(getByTestId("count").textContent)
        expect(countValue).toEqual(1)
    })

    it("count should decrement by 1 if the decrement button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const decrementBttn = getByRole("button", { name: "Decrement" });
        expect(Number(getByTestId("count").textContent)).toEqual(0);
        fireEvent.click(decrementBttn);
        expect(Number(getByTestId("count").textContent)).toEqual(-1);
      });
    
      it("count should be 0 if the restart button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
        const restartBttn = getByRole("button", { name: "Restart" });
        expect(Number(getByTestId("count").textContent)).toEqual(50);
        fireEvent.click(restartBttn);
        expect(Number(getByTestId("count").textContent)).toEqual(0);
      });
    
      it("count should invert signs if the switch signs button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
        const switchBttn = getByRole("button", { name: "Switch Signs" });
        expect(Number(getByTestId("count").textContent)).toEqual(50);
        fireEvent.click(switchBttn);
        expect(Number(getByTestId("count").textContent)).toEqual(-50);
      });
})