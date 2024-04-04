
// const [describe, expect, test] = require("./deleteLetter")
const deleteLetter = require("./deleteLetter")

describe("Проверка на замену уквы 'ё' на букву 'е'", () => {
    const check = {
        'ёжик': "ежик",
        'юла': "юла",
        '23еёёёё': "23еееее",
    }
    const string = 'я пошёл посмотреть на ёлку, неподалёку от неё шёл ёж'
    test("1", () => {
        expect(deleteLetter(string)).toBe('я пошел посмотреть на елку, неподалеку от нее шел еж')
    })
})

// describe("Проверка на фильтрацию", () => {
//     const mock = jest.fn();
//     mock.mockReturnValueOnce((el) => el * 5)
//         .mockReturnValueOnce((el) => el * 9)
//         .mockReturnValueOnce((el) => el *88)

//     const forEach = (arr, callback) => {
//         return arr.map(el => callback(el))
//     }

//     test("1", () => {
//         expect(forEach([4, 6, 9], mock)).toEqual([20, 54, 792])
//         console.log(mock.mock)
//         expect(mock.mock.calls).toHaveLength(3)


//     })

// })