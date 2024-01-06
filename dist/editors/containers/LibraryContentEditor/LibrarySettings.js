"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.LibrarySettings = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _messages = _interopRequireDefault(require("./messages"));
var _constants = require("./constants");
var _data = require("./data");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const LibrarySettings = _ref => {
  let {
    // redux
    setCountForLibrary,
    setModeForLibrary,
    setShowResetForLibrary,
    selectedLibraryId,
    settings
  } = _ref;
  if (selectedLibraryId === null) {
    return null;
  }
  const modeSubsection = () => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "row mb-2 p-3 border-top",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.RadioSet, {
      name: "mode",
      onChange: e => setModeForLibrary({
        libraryId: selectedLibraryId,
        mode: e.target.value
      }),
      value: settings[selectedLibraryId]?.mode ?? _constants.modes.random.value,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Radio, {
        value: _constants.modes.random.value,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _constants.modes.random.description))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Radio, {
        value: _constants.modes.selected.value,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _constants.modes.selected.description))
      })]
    })
  });
  const countSubsection = () => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "row mb-2 pb-3",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
      className: "col col-2",
      onChange: e => setCountForLibrary({
        libraryId: selectedLibraryId,
        count: e.target.value
      }),
      value: settings[selectedLibraryId]?.count ?? -1,
      type: "number"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
      className: "col",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.countLabel))
    })]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "col",
    "data-testid": "librarycontenteditor-librarysettings",
    children: [modeSubsection(), settings[selectedLibraryId]?.mode === _constants.modes.random.value ? countSubsection() : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "row mb-2 p-3 border-top",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "col p-0",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Switch, {
          checked: settings[selectedLibraryId]?.showReset ?? false,
          onChange: e => setShowResetForLibrary({
            libraryId: selectedLibraryId,
            showReset: e.target.checked
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.resetButton))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "x-small mt-2",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.resetButtonDescription))
        })]
      })
    })]
  });
};
exports.LibrarySettings = LibrarySettings;
LibrarySettings.defaultProps = {
  settings: {},
  selectedLibraryId: null
};
LibrarySettings.propTypes = {
  // redux
  setCountForLibrary: _propTypes.default.func.isRequired,
  setModeForLibrary: _propTypes.default.func.isRequired,
  setShowResetForLibrary: _propTypes.default.func.isRequired,
  selectedLibraryId: _propTypes.default.string,
  settings: _propTypes.default.shape({})
};
const mapStateToProps = state => ({
  selectedLibraryId: _data.selectors.selectedLibraryId(state),
  settings: _data.selectors.settings(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {
  setCountForLibrary: _data.actions.setCountForLibrary,
  setModeForLibrary: _data.actions.setModeForLibrary,
  setShowResetForLibrary: _data.actions.setShowResetForLibrary
};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LibrarySettings));
//# sourceMappingURL=LibrarySettings.js.map