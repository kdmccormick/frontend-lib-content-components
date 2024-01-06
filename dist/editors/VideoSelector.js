"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VideoSelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VideoGallery = _interopRequireDefault(require("./containers/VideoGallery"));
var hooks = _interopRequireWildcard(require("./hooks"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VideoSelector = _ref => {
  let {
    blockId,
    learningContextId,
    lmsEndpointUrl,
    studioEndpointUrl
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  hooks.initializeApp({
    dispatch,
    data: {
      blockId,
      blockType: 'video',
      learningContextId,
      lmsEndpointUrl,
      studioEndpointUrl
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoGallery.default, {});
};
exports.VideoSelector = VideoSelector;
VideoSelector.propTypes = {
  blockId: _propTypes.default.string.isRequired,
  learningContextId: _propTypes.default.string.isRequired,
  lmsEndpointUrl: _propTypes.default.string.isRequired,
  studioEndpointUrl: _propTypes.default.string.isRequired
};
var _default = exports.default = VideoSelector;
//# sourceMappingURL=VideoSelector.js.map