"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getYearMonthDate = getYearMonthDate;
exports.default = void 0;

function getYearMonthDate() {
  var now = new Date();
  return now.getFullYear() + '/' + now.getMonth() + '/' + now.getDate();
}

var _default = {
  getYearMonthDate: getYearMonthDate
};
exports.default = _default;