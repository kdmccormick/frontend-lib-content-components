"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleSelectors = exports.mode = exports.libraryState = exports.libraryPayload = exports.default = exports.candidates = void 0;
var _reselect = require("reselect");
var _constants = require("../constants");
var _utils = require("../utils");
var _module = _interopRequireWildcard(require("./selectors"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const libraryState = state => state.library;
exports.libraryState = libraryState;
const mkSimpleSelector = cb => (0, _reselect.createSelector)([_module.libraryState], cb);
const simpleSelectors = exports.simpleSelectors = {
  libraries: mkSimpleSelector(library => library.libraries),
  savedChildren: mkSimpleSelector(library => library.savedChildren),
  savedLibraryId: mkSimpleSelector(library => library.savedLibraryId),
  selectedLibraryId: mkSimpleSelector(library => library.selectedLibraryId),
  selectedLibraryVersion: mkSimpleSelector(library => library.selectedLibraryVersion),
  settings: mkSimpleSelector(library => library.settings),
  blocksInSelectedLibrary: mkSimpleSelector(library => library.blocksInSelectedLibrary),
  v1LibraryBlockIds: mkSimpleSelector(library => library.v1LibraryBlockIds)
};
const candidates = exports.candidates = (0, _reselect.createSelector)([_module.simpleSelectors.selectedLibraryId, _module.simpleSelectors.settings], (selectedLibraryId, settings) => {
  if (selectedLibraryId) {
    return settings[selectedLibraryId]?.candidates ?? [];
  }
  return [];
});
const mode = exports.mode = (0, _reselect.createSelector)([_module.simpleSelectors.selectedLibraryId, _module.simpleSelectors.settings], (selectedLibraryId, settings) => {
  if (selectedLibraryId) {
    return settings[selectedLibraryId]?.mode ?? _constants.modes.random.value;
  }
  return _constants.modes.random.value;
});
const libraryPayload = exports.libraryPayload = (0, _reselect.createSelector)([_module.simpleSelectors.selectedLibraryId, _module.simpleSelectors.selectedLibraryVersion, _module.simpleSelectors.settings, _module.simpleSelectors.blocksInSelectedLibrary], (selectedLibraryId, selectedLibraryVersion, settings) => {
  let manual = false;
  let shuffle = true;
  let count = null;
  let showReset = false;
  let candidateList = [];
  if (selectedLibraryId && settings[selectedLibraryId]) {
    count = settings[selectedLibraryId].count ?? 1;
    if (settings[selectedLibraryId].mode === _constants.modes.selected.value) {
      manual = true;
      shuffle = false;
      count = -1;
    }
    showReset = settings[selectedLibraryId].showReset;
    candidateList = settings[selectedLibraryId].candidates;
    candidateList = candidateList.map(candidate => [candidate[0], (0, _utils.getUsageKey)(candidate[1])]);
  }
  return {
    libraryId: selectedLibraryId,
    libraryVersion: selectedLibraryVersion,
    manual,
    shuffle,
    count,
    showReset,
    candidates: candidateList
  };
});
var _default = exports.default = _objectSpread(_objectSpread({}, simpleSelectors), {}, {
  candidates,
  mode,
  libraryPayload
});
//# sourceMappingURL=selectors.js.map