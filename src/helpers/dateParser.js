export const dateParser = (date) => {
    if (new Date(date) != "Invalid Date") return new Date(date)
    const parse = date.split(' ')[0].split('/').reverse().join('-');
    return new Date(parse);
}
