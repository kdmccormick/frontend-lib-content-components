"use strict";

var api = _interopRequireWildcard(require("./api"));
var mockApi = _interopRequireWildcard(require("./mockApi"));
var urls = _interopRequireWildcard(require("./urls"));
var _utils = require("../../../data/services/cms/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable no-import-assign */
jest.mock('./urls', () => ({
  v1Libraries: jest.fn().mockName('urls.v1Libraries'),
  v2Libraries: jest.fn().mockName('urls.v2Libraries'),
  v1LibraryContent: jest.fn().mockName('urls.v1LibraryContent'),
  v2LibraryContent: jest.fn().mockName('urls.v2LibraryContent'),
  blockChildren: jest.fn().mockName('urls.blockChildren')
}));
jest.mock('../../../data/services/cms/utils', () => ({
  get: jest.fn().mockName('get')
}));
const {
  apiMethods
} = api;
const studioEndpointUrl = 'hortus.coa';
const libraryId = 'lb:DeveloperInc:test3:html:0aa6a843-fd86-4ecf-84cb-4640cf8bebdd';
const blockId = 'block-v1-Id-Test';
describe('library api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('apiMethods', () => {
    describe('v1Libraries', () => {
      it('should call get with urls.v1Libraries', () => {
        apiMethods.fetchV1Libraries({
          studioEndpointUrl
        });
        expect(_utils.get).toHaveBeenCalledWith(urls.v1Libraries({
          studioEndpointUrl
        }));
      });
    });
    describe('v2Libraries', () => {
      it('should call get with urls.v2Libraries', () => {
        apiMethods.fetchV2Libraries({
          studioEndpointUrl
        });
        expect(_utils.get).toHaveBeenCalledWith(urls.v2Libraries({
          studioEndpointUrl
        }));
      });
    });
    describe('v1LibraryContent', () => {
      it('should call get with urls.v1LibraryContent', () => {
        apiMethods.fetchV1LibraryContent({
          studioEndpointUrl
        });
        expect(_utils.get).toHaveBeenCalledWith(urls.v1LibraryContent({
          studioEndpointUrl,
          libraryId
        }));
      });
    });
    describe('v2LibraryContent', () => {
      it('should call get with urls.v2LibraryContent', () => {
        apiMethods.fetchV2LibraryContent({
          studioEndpointUrl,
          libraryId
        });
        expect(_utils.get).toHaveBeenCalledWith(urls.v2LibraryContent({
          studioEndpointUrl,
          libraryId
        }));
      });
    });
    describe('fetchChildrenInfo', () => {
      it('should call get with urls.blockChildren', () => {
        apiMethods.fetchChildrenInfo({
          studioEndpointUrl,
          blockId
        });
        expect(_utils.get).toHaveBeenCalledWith(urls.blockChildren({
          studioEndpointUrl,
          blockId
        }));
      });
    });
  });
  describe('checkMockApi', () => {
    const envTemp = process.env;
    beforeEach(() => {
      jest.resetModules();
      process.env = _objectSpread({}, envTemp);
    });
    afterEach(() => {
      process.env = envTemp;
    });
    describe('if REACT_APP_DEVGALLERY is true', () => {
      it('should return the mockApi version of a call when it exists', () => {
        process.env.REACT_APP_DEVGALLERY = true;
        expect(api.checkMockApi('fetchV1Libraries')).toEqual(mockApi.fetchV1Libraries);
      });
      it('should return an empty mock when the call does not exist', () => {
        process.env.REACT_APP_DEVGALLERY = true;
        expect(api.checkMockApi('someRAnDomThINg')).toEqual(mockApi.emptyMock);
      });
    });
    describe('if REACT_APP_DEVGALLERY is not true', () => {
      it('should return the appropriate call', () => {
        expect(api.checkMockApi('fetchV1Libraries')).toEqual(apiMethods.fetchV1Libraries);
      });
    });
  });
});
//# sourceMappingURL=api.test.js.map