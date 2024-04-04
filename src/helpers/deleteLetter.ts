



function deleteLetter(string: string) {
    return string.replaceAll('ё', 'е');
}

function deleteNumber(number: number, array: []) {
    return array.filter(el => el != number);
}

module.exports = deleteLetter
// export {deleteLetter, deleteNumber};