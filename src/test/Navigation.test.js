import { render, screen, cleanup } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("navigation component", () => {
    afterEach(cleanup)

     it("render ul element in a nav tag", () => {
        render(<Navigation />)
        const listElement = screen.getByRole("list")
        expect(listElement.parentElement.tagName).toBe("NAV") // listElement förväntas ligga i en NAV
    })

    it("renders listitems within list", () => {
        render(<Navigation />)
        const listItems = screen.getAllByRole("listitem")
        listItems.forEach(listItems => 
        expect(listItems.parentElement.tagName).toBe("MENU") //försäkra att inga li ligger utanför ul // samt kollar att alla är i listan, en åt gången
        ) 
    })

    it("renders 'about' link in a list-item", () => {
        render(<Navigation />)
        const aboutLink = screen.getByRole('link', { name:  /about/i });  //väljer link som har about
        expect(aboutLink.parentElement.tagName).toBe("LI")  // förväntas att about link parement element är en li
    })

    it("renders 'contact' link in a list-item", () => {
        render(<Navigation />)
        const contactLink = screen.getByRole('link', {name: /contact/i})
        expect(contactLink.parentElement.tagName).toBe("LI")
    })
})