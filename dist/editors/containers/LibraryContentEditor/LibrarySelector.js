"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.LibrarySelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _data = require("./data");
var _hooks = require("./hooks");
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const LibrarySelector = _ref => {
  let {
    // redux
    libraries,
    selectedLibraryId,
    settings
  } = _ref;
  const intl = (0, _i18n.useIntl)();
  const {
    onLibrarySelect
  } = (0, _hooks.useLibrarySelectorHook)({
    libraries,
    settings
  });
  if (libraries.length === 0) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "mb-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.noLibraryMessage))
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "mb-3",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown, {
      className: "w-100",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Toggle, {
        className: "w-100",
        id: "library-selector",
        variant: "outline-primary",
        children: selectedLibraryId ? (0, _utils.getLibraryName)(libraries[selectedLibraryId]) : intl.formatMessage(_messages.default.librarySelectorDropdownDefault)
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown.Menu, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
          onClick: () => onLibrarySelect(null),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.librarySelectorDropdownDefault))
        }, -1), Object.entries(libraries).sort((a, b) => {
          const aName = a[1].title || a[1].display_name;
          const bName = b[1].title || b[1].display_name;
          return aName < bName ? -1 : 1;
        }).map(_ref2 => {
          let [id, library] = _ref2;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
            onClick: () => onLibrarySelect(id),
            children: (0, _utils.getLibraryName)(library)
          }, id);
        })]
      })]
    })
  });
};
exports.LibrarySelector = LibrarySelector;
LibrarySelector.defaultProps = {
  libraries: [],
  selectedLibraryId: null,
  settings: {}
};
LibrarySelector.propTypes = {
  // redux
  libraries: _propTypes.default.shape([]),
  selectedLibraryId: _propTypes.default.string,
  settings: _propTypes.default.shape({})
};
const mapStateToProps = state => ({
  libraries: _data.selectors.libraries(state),
  selectedLibraryId: _data.selectors.selectedLibraryId(state),
  settings: _data.selectors.settings(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LibrarySelector);
//# sourceMappingURL=LibrarySelector.js.map