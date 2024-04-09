import { formatDate } from "../formatDate";


describe("check format date function" ,() => {
    it("current date", () => {
        expect(formatDate()).toBe("2024-04-09")
    })
    it("date to 2 days ago", () => {
        expect(formatDate(2)).toBe("2024-04-07")
    })
    it("date to 20 days ago", () => {
        expect(formatDate(20)).toBe("2024-03-20")
    })
})