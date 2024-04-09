export const getReadTime = (textLength: number | undefined | null): string => {
    if (Boolean(textLength) === false) return "few";
    const letterOneMinute = 600;
    const essentialTime = Math.ceil(textLength! / letterOneMinute);

    return String(essentialTime);
}

