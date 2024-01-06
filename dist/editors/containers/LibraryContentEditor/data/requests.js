"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchV2LibraryContent = exports.fetchV2Libraries = exports.fetchV1LibraryContent = exports.fetchV1LibraryBlock = exports.fetchV1Libraries = exports.fetchChildrenInfo = exports.default = void 0;
var _utils = require("../../../utils");
var _requests = require("../../../data/constants/requests");
var _requests2 = require("../../../data/redux/thunkActions/requests");
var _redux = require("../../../data/redux");
var _api = _interopRequireDefault(require("./api"));
var _api2 = _interopRequireDefault(require("../../../data/services/cms/api"));
const _excluded = ["libraryId"],
  _excluded2 = ["libraryId"],
  _excluded3 = ["blockId"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); } /* eslint-disable import/no-cycle */
/**
 * Tracked fetchV1Libraries api method.
 * Tracked to the `fetchV1Libraries` request key.
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
const fetchV1Libraries = _ref => {
  let rest = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  return (dispatch, getState) => {
    dispatch((0, _requests2.networkRequest)(_objectSpread({
      requestKey: _requests.RequestKeys.fetchV1Libraries,
      promise: _api.default.fetchV1Libraries({
        studioEndpointUrl: _redux.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};

/**
 * Tracked fetchV2Libraries api method.
 * Tracked to the `fetchV2Libraries` request key.
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
exports.fetchV1Libraries = fetchV1Libraries;
const fetchV2Libraries = _ref2 => {
  let rest = Object.assign({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return (dispatch, getState) => {
    dispatch((0, _requests2.networkRequest)(_objectSpread({
      requestKey: _requests.RequestKeys.fetchV2Libraries,
      promise: _api.default.fetchV2Libraries({
        studioEndpointUrl: _redux.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};

/**
 * Tracked fetchV2LibraryContent api method.
 * Tracked to the `fetchV2LibraryContent` request key.
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
exports.fetchV2Libraries = fetchV2Libraries;
const fetchV1LibraryContent = _ref3 => {
  let {
      libraryId
    } = _ref3,
    rest = _objectWithoutProperties(_ref3, _excluded);
  return (dispatch, getState) => {
    dispatch((0, _requests2.networkRequest)(_objectSpread({
      requestKey: _requests.RequestKeys.fetchV1LibraryContent,
      promise: _api.default.fetchV1LibraryContent({
        studioEndpointUrl: _redux.selectors.app.studioEndpointUrl(getState()),
        libraryId
      })
    }, rest)));
  };
};

/**
 * Tracked fetchV2LibraryContent api method.
 * Tracked to the `fetchV2LibraryContent` request key.
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
exports.fetchV1LibraryContent = fetchV1LibraryContent;
const fetchV2LibraryContent = _ref4 => {
  let {
      libraryId
    } = _ref4,
    rest = _objectWithoutProperties(_ref4, _excluded2);
  return (dispatch, getState) => {
    dispatch((0, _requests2.networkRequest)(_objectSpread({
      requestKey: _requests.RequestKeys.fetchV2LibraryContent,
      promise: _api.default.fetchV2LibraryContent({
        studioEndpointUrl: _redux.selectors.app.studioEndpointUrl(getState()),
        libraryId
      })
    }, rest)));
  };
};

/**
 * Tracked fetchV1LibraryBlock api method.
 * Tracked to the `fetchV1LibraryBlock` request key.
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
exports.fetchV2LibraryContent = fetchV2LibraryContent;
const fetchV1LibraryBlock = _ref5 => {
  let {
      blockId
    } = _ref5,
    rest = _objectWithoutProperties(_ref5, _excluded3);
  return (dispatch, getState) => {
    dispatch((0, _requests2.networkRequest)(_objectSpread({
      requestKey: _requests.RequestKeys.fetchV1LibraryBlock,
      promise: _api2.default.fetchBlockById({
        studioEndpointUrl: _redux.selectors.app.studioEndpointUrl(getState()),
        blockId
      })
    }, rest)));
  };
};

/**
 * Tracked fetchChildrenInfo api method.
 * Tracked to the `fetchChildrenInfo` request key.
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
exports.fetchV1LibraryBlock = fetchV1LibraryBlock;
const fetchChildrenInfo = _ref6 => {
  let rest = Object.assign({}, (_objectDestructuringEmpty(_ref6), _ref6));
  return (dispatch, getState) => {
    dispatch((0, _requests2.networkRequest)(_objectSpread({
      requestKey: _requests.RequestKeys.fetchChildrenInfo,
      promise: _api.default.fetchChildrenInfo({
        studioEndpointUrl: _redux.selectors.app.studioEndpointUrl(getState()),
        blockId: _redux.selectors.app.blockId(getState())
      })
    }, rest)));
  };
};
exports.fetchChildrenInfo = fetchChildrenInfo;
var _default = exports.default = (0, _utils.StrictDict)({
  fetchV1Libraries,
  fetchV2Libraries,
  fetchV2LibraryContent,
  fetchChildrenInfo
});
//# sourceMappingURL=requests.js.map