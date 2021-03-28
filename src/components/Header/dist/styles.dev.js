"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileImage = exports.ToggleMenu = exports.Content = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _global = require("~/styles/global");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  /* background-color: #fff; */\n  box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 30%);\n  border-radius: 50%;\n  border: 2px solid #fafafa;\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n\n  img {\n    width: 35px;\n    height: 35px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  &:hover {\n    background-color: rgba(27, 41, 86, 0.3);\n  }\n  @media ", " {\n    display: none;\n  }\n\n  &:active {\n    background-color: #1b2956;\n\n    svg {\n      color: #fff;\n    }\n  }\n\n  svg {\n    color: #000;\n    height: 20px;\n    width: 20px;\n    transition: color 0.5s;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 900px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media ", " {\n    justify-content: flex-end;\n  }\n  nav {\n    justify-content: center;\n\n    display: flex;\n    @media ", " {\n      display: none;\n    }\n\n    img {\n      height: 45px;\n    }\n  }\n\n  aside {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n\n    a {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      strong {\n        color: #1b2956;\n        margin-left: 10px;\n        display: none;\n        @media ", " {\n          display: block;\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #fff;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  height: 70px;\n  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2);\n  @media ", " {\n    box-shadow: none;\n  }\n  padding: 5px 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _global.device.laptop);

exports.Container = Container;

var Content = _styledComponents["default"].div(_templateObject2(), _global.device.laptop, _global.device.laptop, _global.device.laptop);

exports.Content = Content;

var ToggleMenu = _styledComponents["default"].div(_templateObject3(), _global.device.laptop);

exports.ToggleMenu = ToggleMenu;

var ProfileImage = _styledComponents["default"].div(_templateObject4());

exports.ProfileImage = ProfileImage;