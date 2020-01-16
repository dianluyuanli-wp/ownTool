import netModel from './network';

const writeCookie = (targetObj = {}, expireDays = 20) => {
    const targetExpireTime = new Date();
    targetExpireTime.setTime(targetExpireTime.getTime() + expireDays * 24 * 60 * 60 * 1000);

    for (let key in targetObj) {
        document.cookie = key + '=' + escape(targetObj[key]) + ';expires=' + targetExpireTime.toGMTString();
    }
}

const parseCookie = () => {
    const result = {};
    if(typeof document === 'undefined') {
        return {}
    }
    document.cookie.split('; ').map(item => {
        const temp = item.split('=');
        result[temp[0]] = temp[1];
    })
    return result;
}

const parseCookieObjToString = (obj) => {
    let ans = '';
    for (let key in obj) {
        ans += key + '=' + escape(obj[key]) + ';';
    }
    return ans;
}
export {parseCookieObjToString};
export {writeCookie};
export {parseCookie};
export {netModel};

export function getYearMonthDate() {
    const now = new Date();
    //  getMonth是按照数组来保存的，会比实际月份少1
    return now.getFullYear() + '/' + (parseInt(now.getMonth()) + 1)  + '/' + now.getDate();
}

export default {
    getYearMonthDate,
    parseCookieObjToString,
    writeCookie,
    parseCookie,
    netModel
}