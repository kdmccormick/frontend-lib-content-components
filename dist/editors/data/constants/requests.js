"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestStates = exports.RequestKeys = void 0;
var _utils = require("../../utils");
const RequestStates = exports.RequestStates = (0, _utils.StrictDict)({
  inactive: 'inactive',
  pending: 'pending',
  completed: 'completed',
  failed: 'failed'
});
const RequestKeys = exports.RequestKeys = (0, _utils.StrictDict)({
  fetchAssets: 'fetchAssets',
  fetchVideos: 'fetchVideos',
  fetchBlock: 'fetchBlock',
  fetchImages: 'fetchImages',
  fetchUnit: 'fetchUnit',
  fetchStudioView: 'fetchStudioView',
  saveBlock: 'saveBlock',
  uploadAsset: 'uploadAsset',
  uploadVideo: 'uploadVideo',
  allowThumbnailUpload: 'allowThumbnailUpload',
  uploadThumbnail: 'uploadThumbnail',
  uploadTranscript: 'uploadTranscript',
  deleteTranscript: 'deleteTranscript',
  fetchCourseDetails: 'fetchCourseDetails',
  updateTranscriptLanguage: 'updateTranscriptLanguage',
  getTranscriptFile: 'getTranscriptFile',
  checkTranscriptsForImport: 'checkTranscriptsForImport',
  importTranscript: 'importTranscript',
  uploadImage: 'uploadImage',
  fetchAdvancedSettings: 'fetchAdvancedSettings',
  fetchVideoFeatures: 'fetchVideoFeatures',
  fetchV1Libraries: 'fetchV1Libraries',
  fetchV2Libraries: 'fetchV2Libraries',
  fetchV1LibraryContent: 'fetchV1LibraryContent',
  fetchV2LibraryContent: 'fetchV2LibraryContent',
  fetchV1LibraryBlock: 'fetchV1LibraryBlock',
  fetchChildrenInfo: 'fetchChildrenInfo',
  fetchBlockContent: 'fetchBlockContent'
});
//# sourceMappingURL=requests.js.map