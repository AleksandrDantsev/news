export function generateLink(text: string, category: string = '') {
    const regex = /[\d,-]+/g;
    const isValidText = text.replaceAll(regex, '').trim();

    const linkSplitWords = isValidText.toLowerCase().split(' ');
    const quantityWords = linkSplitWords.length >= 5 ? 5 : linkSplitWords.length;
    
    return category + "/" + linkSplitWords.slice(0, quantityWords).join("-");
}

