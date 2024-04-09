// get format date "2024-05-29"

const formatDate = (shiftBackDay = 0): string => {
    const date = new Date();

    const year = date.getFullYear();
    const mounth = date.getMonth();
    const day = date.getDate();

    const rightDate = new Date(year, mounth, day - shiftBackDay);

    const dayCount = String(rightDate.getDate()).padStart(2, '0')
    const mounthCount = String(rightDate.getMonth() + 1).padStart(2, '0');
    const yearCount = String(rightDate.getFullYear());

    return `${yearCount}-${mounthCount}-${dayCount}`
}

export { formatDate };