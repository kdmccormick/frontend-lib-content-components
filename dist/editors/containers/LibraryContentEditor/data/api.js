"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.checkMockApi = exports.apiMethods = void 0;
var _utils = require("../../../data/services/cms/utils");
var urls = _interopRequireWildcard(require("./urls"));
var _module = _interopRequireWildcard(require("./api"));
var mockApi = _interopRequireWildcard(require("./mockApi"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const apiMethods = exports.apiMethods = {
  fetchV1Libraries: _ref => {
    let {
      studioEndpointUrl
    } = _ref;
    return (0, _utils.get)(urls.v1Libraries({
      studioEndpointUrl
    }));
  },
  fetchV2Libraries: _ref2 => {
    let {
      studioEndpointUrl
    } = _ref2;
    return (0, _utils.get)(urls.v2Libraries({
      studioEndpointUrl
    }));
  },
  fetchV1LibraryContent: _ref3 => {
    let {
      studioEndpointUrl,
      libraryId
    } = _ref3;
    return (0, _utils.get)(urls.v1LibraryContent({
      studioEndpointUrl,
      libraryId
    }));
  },
  fetchV2LibraryContent: _ref4 => {
    let {
      studioEndpointUrl,
      libraryId
    } = _ref4;
    return (0, _utils.get)(urls.v2LibraryContent({
      studioEndpointUrl,
      libraryId
    }));
  },
  fetchChildrenInfo: _ref5 => {
    let {
      studioEndpointUrl,
      blockId
    } = _ref5;
    return (0, _utils.get)(urls.blockChildren({
      studioEndpointUrl,
      blockId
    }));
  }
};
const checkMockApi = key => {
  if (process.env.REACT_APP_DEVGALLERY) {
    return mockApi[key] ? mockApi[key] : mockApi.emptyMock;
  }
  return _module.apiMethods[key];
};
exports.checkMockApi = checkMockApi;
var _default = exports.default = Object.keys(apiMethods).reduce((obj, key) => _objectSpread(_objectSpread({}, obj), {}, {
  [key]: checkMockApi(key)
}), {});
//# sourceMappingURL=api.js.map