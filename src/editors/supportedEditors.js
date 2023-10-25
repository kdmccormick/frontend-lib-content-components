import TextEditor from './containers/TextEditor';
import VideoEditor from './containers/VideoEditor';
import ProblemEditor from './containers/ProblemEditor';
import VideoUploadEditor from './containers/VideoUploadEditor';
import GameEditor from './containers/GameEditor';
import LibraryContentEditor from './containers/LibraryContentEditor'

// ADDED_EDITOR_IMPORTS GO HERE

import { blockTypes } from './data/constants/app';

const supportedEditors = {
  [blockTypes.html]: TextEditor,
  [blockTypes.video]: VideoEditor,
  [blockTypes.problem]: ProblemEditor,
  [blockTypes.video_upload]: VideoUploadEditor,
  [blockTypes.library_content]: LibraryContentEditor,

  // ADDED_EDITORS GO BELOW
  [blockTypes.game]: GameEditor,
};

export default supportedEditors;
