
export function getYearMonthDate() {
    const now = new Date();
    return now.getFullYear() + '/' + now.getMonth() + '/' + now.getDate();
}

export default {
    getYearMonthDate
}