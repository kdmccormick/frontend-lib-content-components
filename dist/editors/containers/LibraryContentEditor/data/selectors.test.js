"use strict";

var selectors = _interopRequireWildcard(require("./selectors"));
var _utils = require("../../../utils");
var _constants = _interopRequireDefault(require("../constants"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
jest.mock('reselect', () => ({
  createSelector: jest.fn((preSelectors, cb) => ({
    preSelectors,
    cb
  }))
}));
const testState = {
  some: 'arbitraryValue'
};
const testValue = 'my VALUE';
const selectedLibraryId = 'a LiB iD';
const blockId1 = 'block-v1:a bLOCk@id@1usageid';
const blockType1 = 'a BLOck Type';
const blockUsageId1 = '1usageid';
const blockId2 = 'lb:a blocK ID:tOO:2usageid';
const blockType2 = 'a Different BLOck Type';
const blockUsageId2 = '2usageid';
const testData = {
  savedChildren: {
    0: {
      block_type: blockId1,
      id: blockId1
    }
  },
  savedLibraryId: selectedLibraryId,
  selectedLibraryId,
  selectedLibraryVersion: 'a lIb VERsion',
  settings: {
    [selectedLibraryId]: {
      candidates: [[blockType1, blockId1], [blockType2, blockId2]],
      count: 123456,
      mode: _constants.default.selected.value,
      showReset: 'sHOw ReseT'
    }
  },
  blocksInSelectedLibrary: {
    0: {
      block_type: blockType1,
      id: blockId1
    },
    1: {
      block_type: blockType2,
      id: blockId2
    }
  }
};
describe('Library Selectors', () => {
  const {
    libraryState,
    simpleSelectors
  } = selectors;
  describe('Simple Selectors', () => {
    const testSimpleSelector = key => {
      test(`${key} simpleSelector returns its value from the app store`, () => {
        const {
          preSelectors,
          cb
        } = simpleSelectors[key];
        expect(preSelectors).toEqual([libraryState]);
        expect(cb(_objectSpread(_objectSpread({}, testState), {}, {
          [key]: testValue
        }))).toEqual(testValue);
      });
    };
    const simpleKeys = (0, _utils.keyStore)(simpleSelectors);
    describe('simple selectors link their values from app store', () => {
      [simpleKeys.libraries, simpleKeys.selectedLibraryId, simpleKeys.selectedLibraryVersion, simpleKeys.settings, simpleKeys.blocksInSelectedLibrary].map(testSimpleSelector);
    });
  });
  describe('candidates', () => {
    const {
      cb
    } = selectors.candidates;
    it('is memoized based on the below listed selectors', () => {
      expect(selectors.candidates.preSelectors).toEqual([simpleSelectors.selectedLibraryId, simpleSelectors.settings]);
    });
    it('returns the candidates list for the selected library', () => {
      expect(cb(testData.selectedLibraryId, testData.settings)).toEqual(testData.settings[selectedLibraryId].candidates);
    });
    it('returns an empty array when there is no selected library', () => {
      expect(cb(null, testData.settings)).toEqual([]);
    });
  });
  describe('mode', () => {
    const {
      cb
    } = selectors.mode;
    it('is memoized based on the below listed selectors', () => {
      expect(selectors.mode.preSelectors).toEqual([simpleSelectors.selectedLibraryId, simpleSelectors.settings]);
    });
    it('returns the mode for the selected library', () => {
      expect(cb(testData.selectedLibraryId, testData.settings)).toEqual(testData.settings[selectedLibraryId].mode);
    });
    it('returns random mode when there is no selected library', () => {
      expect(cb(null, testData.settings)).toEqual(_constants.default.random.value);
    });
  });
  describe('libraryPayload', () => {
    const {
      cb
    } = selectors.libraryPayload;
    it('is memoized based on the below listed selectors', () => {
      expect(selectors.libraryPayload.preSelectors).toEqual([simpleSelectors.selectedLibraryId, simpleSelectors.selectedLibraryVersion, simpleSelectors.settings, simpleSelectors.blocksInSelectedLibrary]);
    });
    it('returns the relevant settings values given the library for selected mode', () => {
      expect(cb(testData.selectedLibraryId, testData.selectedLibraryVersion, testData.settings, testData.blocksInSelectedLibrary)).toEqual({
        libraryId: selectedLibraryId,
        libraryVersion: testData.selectedLibraryVersion,
        manual: true,
        shuffle: false,
        count: -1,
        showReset: testData.settings[selectedLibraryId].showReset,
        candidates: [[blockType1, blockUsageId1], [blockType2, blockUsageId2]]
      });
    });
    it('returns the relevant settings values given the library for random mode', () => {
      testData.settings[selectedLibraryId].mode = _constants.default.random.value;
      expect(cb(testData.selectedLibraryId, testData.selectedLibraryVersion, testData.settings, testData.blocksInSelectedLibrary)).toEqual({
        libraryId: selectedLibraryId,
        libraryVersion: testData.selectedLibraryVersion,
        manual: false,
        shuffle: true,
        count: testData.settings[selectedLibraryId].count,
        showReset: testData.settings[selectedLibraryId].showReset,
        candidates: [[blockType1, blockUsageId1], [blockType2, blockUsageId2]]
      });
    });
  });
});
//# sourceMappingURL=selectors.test.js.map