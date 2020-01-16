"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getYearMonthDate = getYearMonthDate;

_Object$defineProperty(exports, "netModel", {
  enumerable: true,
  get: function get() {
    return _network["default"];
  }
});

exports["default"] = exports.parseCookie = exports.writeCookie = exports.parseCookieObjToString = void 0;

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/parse-int"));

var _network = _interopRequireDefault(require("./network"));

var writeCookie = function writeCookie() {
  var targetObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var expireDays = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  var targetExpireTime = new Date();
  targetExpireTime.setTime(targetExpireTime.getTime() + expireDays * 24 * 60 * 60 * 1000);

  for (var key in targetObj) {
    document.cookie = key + '=' + escape(targetObj[key]) + ';expires=' + targetExpireTime.toGMTString();
  }
};

exports.writeCookie = writeCookie;

var parseCookie = function parseCookie() {
  var result = {};

  if (typeof document === 'undefined') {
    return {};
  }

  document.cookie.split('; ').map(function (item) {
    var temp = item.split('=');
    result[temp[0]] = temp[1];
  });
  return result;
};

exports.parseCookie = parseCookie;

var parseCookieObjToString = function parseCookieObjToString(obj) {
  var ans = '';

  for (var key in obj) {
    ans += key + '=' + escape(obj[key]) + ';';
  }

  return ans;
};

exports.parseCookieObjToString = parseCookieObjToString;

function getYearMonthDate() {
  var now = new Date(); //  getMonth是按照数组来保存的，会比实际月份少1

  return now.getFullYear() + '/' + ((0, _parseInt2["default"])(now.getMonth()) + 1) + '/' + now.getDate();
}

var _default = {
  getYearMonthDate: getYearMonthDate,
  parseCookieObjToString: parseCookieObjToString,
  writeCookie: writeCookie,
  parseCookie: parseCookie,
  netModel: _network["default"]
};
exports["default"] = _default;