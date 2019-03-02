"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getYearMonthDate = getYearMonthDate;
exports.default = void 0;

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/parse-int"));

function getYearMonthDate() {
  var now = new Date(); //  getMonth是按照数组来保存的，会比实际月份少1

  return now.getFullYear() + '/' + ((0, _parseInt2.default)(now.getMonth()) + 1) + '/' + now.getDate();
}

var _default = {
  getYearMonthDate: getYearMonthDate
};
exports.default = _default;