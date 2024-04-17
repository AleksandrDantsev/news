import { cutTextNews } from "../cutTextNews"


const lengthGrater20 = "Goosebumps Season 2 sets the show up as an anthology series. "


describe('test for length text', () => {
    it('text have length 20+', () => {
        expect(cutTextNews(lengthGrater20, 10)).toBe("Goosebumps...")
    })
    it('test for space', () => {
        expect(cutTextNews(lengthGrater20, 11)).toBe("Goosebumps...")
    })
    it('test for empty string', () => {
        expect(cutTextNews('', 11)).toBe("")
    })
    it('test for string less length', () => {
        expect(cutTextNews(lengthGrater20, 1000)).toBe('Goosebumps Season 2 sets the show up as an anthology series. ')
    })
})