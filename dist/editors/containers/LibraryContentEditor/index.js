"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.LibraryContentEditor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _hooks = require("./hooks");
var _redux = require("../../data/redux");
var _requests = require("../../data/constants/requests");
var _utils = require("./utils");
var _EditorContainer = _interopRequireDefault(require("../EditorContainer"));
var _LibrarySelector = _interopRequireDefault(require("./LibrarySelector"));
var _LibrarySettings = _interopRequireDefault(require("./LibrarySettings"));
var _BlocksSelector = _interopRequireDefault(require("./BlocksSelector"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const LibraryContentEditor = _ref => {
  let {
    onClose,
    returnFunction,
    // redux app layer
    blockFailed,
    blockFinished,
    blockValue,
    blocksInSelectedLibrary,
    candidates,
    libraryPayload
  } = _ref;
  const intl = (0, _i18n.useIntl)();
  (0, _hooks.useLibraryHook)({
    blockFailed,
    blockFinished,
    blockValue
  });
  const initialRows = (0, _react.useMemo)(() => (0, _utils.getSelectedRows)({
    blocks: blocksInSelectedLibrary,
    candidates
  }), [blocksInSelectedLibrary]);
  if (blockFailed) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "text-center p-6",
      "data-testid": "librarycontenteditor-blockfailedmessage",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.blockFailed))
    });
  }
  const loading = () => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "text-center p-6",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
      "data-testid": "librarycontenteditor-loadingspinner",
      animation: "border",
      className: "m-3",
      screenreadertext: intl.formatMessage(_messages.default.spinnerScreenReader)
    })
  });
  const loaded = () => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LibrarySelector.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LibrarySettings.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_BlocksSelector.default, {
      initialRows: initialRows
    })]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditorContainer.default, {
    getContent: () => libraryPayload,
    onClose: onClose,
    returnFunction: returnFunction,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "library-content-editor h-100",
      children: !blockFinished ? loading() : loaded()
    })
  });
};
exports.LibraryContentEditor = LibraryContentEditor;
LibraryContentEditor.defaultProps = {
  blockValue: null,
  blocksInSelectedLibrary: {},
  candidates: [],
  libraryPayload: {}
};
LibraryContentEditor.propTypes = {
  onClose: _propTypes.default.func.isRequired,
  returnFunction: _propTypes.default.func.isRequired,
  // redux
  blockValue: _propTypes.default.shape({
    data: _propTypes.default.shape({
      data: _propTypes.default.string
    })
  }),
  blockFailed: _propTypes.default.bool.isRequired,
  blockFinished: _propTypes.default.bool.isRequired,
  blocksInSelectedLibrary: _propTypes.default.shape({}),
  candidates: _propTypes.default.shape([]),
  libraryPayload: _propTypes.default.shape({})
};
const mapStateToProps = state => ({
  blockValue: _redux.selectors.app.blockValue(state),
  blockFailed: _redux.selectors.requests.isFailed(state, {
    requestKey: _requests.RequestKeys.fetchBlock
  }),
  blockFinished: _redux.selectors.requests.isFinished(state, {
    requestKey: _requests.RequestKeys.fetchBlock
  }),
  blocksInSelectedLibrary: _redux.selectors.library.blocksInSelectedLibrary(state),
  candidates: _redux.selectors.library.candidates(state),
  libraryPayload: _redux.selectors.library.libraryPayload(state),
  studioEndpointUrl: _redux.selectors.app.studioEndpointUrl(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {};
const LibraryContentEditorConnector = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LibraryContentEditor);
LibraryContentEditorConnector.displayName = 'LibraryContentEditorConnector';
var _default = exports.default = LibraryContentEditorConnector; // export default connect(mapStateToProps, mapDispatchToProps)(LibraryContentEditor);
//# sourceMappingURL=index.js.map