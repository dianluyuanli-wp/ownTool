let say = () => {
    console.log('hello!');
}

export function getYearMonthDate() {
    const now = new Date();
    return now.getFullYear() + '/' + now.getMonth() + '/' + now.getDate();
}

module.exports = say;