export function getYearMonthDate() {
    const now = new Date();
    //  getMonth是按照数组来保存的，会比实际月份少1
    return now.getFullYear() + '/' + (parseInt(now.getMonth()) + 1)  + '/' + now.getDate();
}

export default {
    getYearMonthDate
}