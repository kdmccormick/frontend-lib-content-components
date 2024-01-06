"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thumbEditor = exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _EditorContainer = _interopRequireDefault(require("../EditorContainer"));
var _module = _interopRequireWildcard(require("."));
var _redux = require("../../data/redux");
var _requests = require("../../data/constants/requests");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/**
 * This is an example component for an xblock Editor
 * It uses pre-existing components to handle the saving of a the result of a function into the xblock's data.
 * To use run npm run-script addXblock <your>
 */

/* eslint-disable no-unused-vars */

const hooks = exports.hooks = {
  getContent: () => ({
    some: 'content'
  })
};
const thumbEditor = _ref => {
  let {
    onClose,
    // redux
    blockValue,
    lmsEndpointUrl,
    blockFailed,
    blockFinished,
    initializeEditor,
    // inject
    intl
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditorContainer.default, {
    getContent: _module.hooks.getContent,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "editor-body h-75 overflow-auto",
      children: !blockFinished ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text-center p-6",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
          animation: "border",
          className: "m-3"
          // Use a messages.js file for intl messages.
          ,
          screenreadertext: intl.formatMessage('Loading Spinner')
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: ["Your Editor Goes here. You can get at the xblock data with the blockValue field. here is what is in your xblock:  ", JSON.stringify(blockValue)]
      })
    })
  });
};
exports.thumbEditor = thumbEditor;
thumbEditor.defaultProps = {
  blockValue: null,
  lmsEndpointUrl: null
};
thumbEditor.propTypes = {
  onClose: _propTypes.default.func.isRequired,
  // redux
  blockValue: _propTypes.default.shape({
    data: _propTypes.default.shape({
      data: _propTypes.default.string
    })
  }),
  lmsEndpointUrl: _propTypes.default.string,
  blockFailed: _propTypes.default.bool.isRequired,
  blockFinished: _propTypes.default.bool.isRequired,
  initializeEditor: _propTypes.default.func.isRequired,
  // inject
  intl: _i18n.intlShape.isRequired
};
const mapStateToProps = state => ({
  blockValue: _redux.selectors.app.blockValue(state),
  lmsEndpointUrl: _redux.selectors.app.lmsEndpointUrl(state),
  blockFailed: _redux.selectors.requests.isFailed(state, {
    requestKey: _requests.RequestKeys.fetchBlock
  }),
  blockFinished: _redux.selectors.requests.isFinished(state, {
    requestKey: _requests.RequestKeys.fetchBlock
  })
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {
  initializeEditor: _redux.actions.app.initializeEditor
};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(thumbEditor));
//# sourceMappingURL=example.js.map