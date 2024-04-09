const formatDateArticleCreated = (textDate: string | undefined): string => {
    if (!Boolean(textDate)) return '';
    
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
      } as const;

    return new Date(textDate!.split("T")[0]).toLocaleString("ru", options);
}

export { formatDateArticleCreated };