"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./Modal.css");

var _close_modal = _interopRequireDefault(require("./close_modal.png"));

var Modal = function Modal(props) {
  var closeOnEscapeKeyDown = function closeOnEscapeKeyDown(e) {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  (0, _react.useEffect)(function () {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  if (!props.show) {
    return null;
  }

  return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "close-modal",
    src: _close_modal.default,
    alt: "close-modal",
    onClick: props.onClose
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, props.children))), document.getElementById("root"));
};

var _default = Modal;
exports.default = _default;