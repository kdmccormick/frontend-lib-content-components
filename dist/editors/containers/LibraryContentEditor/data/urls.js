"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.v2LibraryContent = exports.v2Libraries = exports.v1LibraryContent = exports.v1Libraries = exports.blockChildren = void 0;
var _urls = require("../../../data/services/cms/urls");
const v1Libraries = _ref => {
  let {
    studioEndpointUrl
  } = _ref;
  return `${studioEndpointUrl}/api/contentstore/v1/home/libraries`;
};
exports.v1Libraries = v1Libraries;
const v2Libraries = _ref2 => {
  let {
    studioEndpointUrl
  } = _ref2;
  return `${studioEndpointUrl}/api/libraries/v2/`;
};
exports.v2Libraries = v2Libraries;
const v1LibraryContent = _ref3 => {
  let {
    studioEndpointUrl,
    libraryId
  } = _ref3;
  return `${studioEndpointUrl}/library/${libraryId}?format=json`;
};
exports.v1LibraryContent = v1LibraryContent;
const v2LibraryContent = _ref4 => {
  let {
    studioEndpointUrl,
    libraryId
  } = _ref4;
  return `${studioEndpointUrl}/api/libraries/v2/${libraryId}/blocks/`;
};
exports.v2LibraryContent = v2LibraryContent;
const blockChildren = _ref5 => {
  let {
    studioEndpointUrl,
    blockId
  } = _ref5;
  return `${(0, _urls.block)({
    studioEndpointUrl,
    blockId
  })}?fields=childrenInfo`;
};
exports.blockChildren = blockChildren;
//# sourceMappingURL=urls.js.map