"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = exports.CloseSidebar = exports.Content = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _global = require("~/styles/global");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: 100%;\n  width: ", ";\n  float: right;\n  background-color: rgb(0, 0, 0, 0.3);\n  display: ", ";\n  backdrop-filter: blur(2px);\n  @media ", " {\n    display: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n\n  right: 15px;\n  top: 15px;\n  cursor: pointer;\n  svg {\n    height: 25px;\n    width: 25px;\n  }\n  @media ", " {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  min-height: 100%;\n  background-color: #fff;\n  width: 300px;\n  position: absolute;\n  box-shadow: 2px 2px 4px 1px rgb(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  @media ", " {\n    position: initial;\n  }\n\n  nav {\n    justify-content: center;\n    align-items: center;\n\n    display: flex;\n    height: 70px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n    width: 80%;\n\n    img {\n      height: 45px;\n    }\n  }\n\n  aside {\n    margin-top: 30px;\n    width: 80%;\n    display: flex;\n\n    ul {\n      li {\n        margin: 20px 0;\n        padding-top: 10px;\n\n        a {\n          font-family: Roboto, sans-serif;\n          font-weight: bold;\n          color: #607d8b;\n          font-size: 1.1rem;\n          padding: 5px 10px;\n\n          border-left: 2px solid transparent;\n          transition: border-left 0.4s;\n          &.active,\n          &:hover {\n            border-left: 2px solid #607d8b;\n            color: #1b2956;\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n\n  display: ", ";\n\n  @media ", " {\n    position: initial;\n    height: initial;\n    width: initial;\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.active ? 'block' : 'none';
}, _global.device.laptop);

exports.Container = Container;

var Content = _styledComponents["default"].div(_templateObject2(), _global.device.laptop);

exports.Content = Content;

var CloseSidebar = _styledComponents["default"].div(_templateObject3(), _global.device.laptop);

exports.CloseSidebar = CloseSidebar;

var Overlay = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.active ? 'calc(100% - 300px)' : '0';
}, function (props) {
  return props.active ? 'block' : 'none';
}, _global.device.laptop);

exports.Overlay = Overlay;