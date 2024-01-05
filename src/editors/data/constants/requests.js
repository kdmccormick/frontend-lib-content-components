import { StrictDict } from '../../utils';

export const RequestStates = StrictDict({
  inactive: 'inactive',
  pending: 'pending',
  completed: 'completed',
  failed: 'failed',
});

export const RequestKeys = StrictDict({
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
  fetchBlockContent: 'fetchBlockContent',
});
