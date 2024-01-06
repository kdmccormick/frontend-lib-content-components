"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EditorFooter = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../../data/redux");
var _app = require("../../../../data/constants/app");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const EditorFooter = _ref => {
  let {
    clearSaveFailed,
    disableSave,
    onCancel,
    onSave,
    saveFailed,
    // injected
    intl
  } = _ref;
  const blockType = (0, _reactRedux.useSelector)(_redux.selectors.app.blockType);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "editor-footer fixed-bottom",
    children: [saveFailed && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Toast, {
      show: true,
      onClose: clearSaveFailed,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.contentSaveFailed))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Footer, {
      className: "shadow-sm",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        children: [
        // TODO: Remove this code when the problem Editor Beta is complete.
        blockType === _app.blockTypes.problem && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
          destination: "https://docs.google.com/forms/d/e/1FAIpQLSdmtO5at9WWHLcWLrOgk1oMz97gYYYrUq4cvH8Vzd-WQwM0Cg/viewform?usp=sharing",
          target: "_blank",
          children: "Share Feedback"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          "aria-label": intl.formatMessage(_messages.default.cancelButtonAriaLabel),
          variant: "tertiary",
          onClick: onCancel,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.cancelButtonLabel))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          "aria-label": intl.formatMessage(_messages.default.saveButtonAriaLabel),
          onClick: onSave,
          disabled: disableSave,
          children: disableSave ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
            animation: "border",
            className: "mr-3"
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.saveButtonLabel))
        })]
      })
    })]
  });
};
exports.EditorFooter = EditorFooter;
EditorFooter.propTypes = {
  clearSaveFailed: _propTypes.default.func.isRequired,
  disableSave: _propTypes.default.bool.isRequired,
  onCancel: _propTypes.default.func.isRequired,
  onSave: _propTypes.default.func.isRequired,
  saveFailed: _propTypes.default.bool.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(EditorFooter);
//# sourceMappingURL=index.js.map