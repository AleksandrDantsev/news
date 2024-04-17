const cutTextNews = (text: string, customLength: number) => {
    if (!text) return '';
    if (text.length >= customLength) {
        return text.slice(0, customLength).trim() + "..."
    }
    else return text;
}

export { cutTextNews };