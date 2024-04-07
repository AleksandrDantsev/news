import { getReadTime } from "../helpers/getReadTime";


describe("check for get time read", () => {
    it('check 1500 letters', () => {
        expect(Number(getReadTime(1500))).toBeGreaterThanOrEqual(3);
    })
    it('check 950 letters', () => {
        expect(Number(getReadTime(950))).toBeGreaterThanOrEqual(2);
    })
    it('check 12950 letters', () => {
        expect(Number(getReadTime(12950))).toBeGreaterThanOrEqual(28);
    })
    it('check 0 letters', () => {
        expect(getReadTime(0)).toBe("few");
    })
    it('check undefined', () => {
        expect(getReadTime(undefined)).toBe("few");
    })
})