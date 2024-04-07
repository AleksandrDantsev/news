export const getReadTime = (textLength: number | undefined | null): string => {
    if (Boolean(textLength) === false || textLength === 0) return "few";
    const letterOneMinute = 450;
    const essentialTime = Math.ceil(textLength! / letterOneMinute);

    return String(essentialTime);
}

