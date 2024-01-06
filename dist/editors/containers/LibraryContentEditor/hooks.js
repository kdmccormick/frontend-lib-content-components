"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLibrarySelectorHook = exports.useLibraryHook = exports.useBlocksSelectorHook = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");
var _constants = require("./constants");
var _redux = require("../../data/redux");
var requests = _interopRequireWildcard(require("./data/requests"));
var _requests2 = require("../../data/constants/requests");
var _utils = require("./utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useLibraryHook = _ref => {
  let {
    blockFailed,
    blockFinished,
    blockValue
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();

  // fetch libraries and child blocks when block finishes loading
  (0, _react.useEffect)(() => {
    if (blockFinished && !blockFailed) {
      dispatch(requests.fetchV2Libraries({
        onSuccess: response => {
          const libraries = {};
          response?.data.forEach(library => {
            libraries[library.id] = library;
          });
          dispatch(_redux.actions.library.loadLibraries({
            libraries
          }));
        },
        onFailure: error => {
          dispatch(_redux.actions.requests.failRequest({
            requestKey: _requests2.RequestKeys.fetchV2Libraries,
            error
          }));
        }
      }));
      dispatch(requests.fetchV1Libraries({
        onSuccess: response => {
          const libraries = {};
          response?.data?.libraries.forEach(library => {
            libraries[library.library_key] = library;
          });
          dispatch(_redux.actions.library.loadLibraries({
            libraries
          }));
        },
        onFailure: error => {
          dispatch(_redux.actions.requests.failRequest({
            requestKey: _requests2.RequestKeys.fetchV1Libraries,
            error
          }));
        }
      }));
      dispatch(requests.fetchChildrenInfo({
        onSuccess: response => {
          const children = response?.data?.children;
          dispatch(_redux.actions.library.loadChildren({
            children
          }));
        },
        onFailure: error => {
          dispatch(_redux.actions.requests.failRequest({
            requestKey: _requests2.RequestKeys.fetchChildrenInfo,
            error
          }));
        }
      }));
    }
  }, [blockFinished, blockFailed]);

  // load previously saved library into redux
  (0, _react.useEffect)(() => {
    const metadata = blockValue?.data?.metadata;
    const libraryId = metadata?.source_library_id ?? null;
    let version = '';
    let settings = {};
    if (libraryId) {
      version = metadata?.source_library_version;
      settings = {
        [libraryId]: {
          mode: metadata?.manual ? _constants.modes.selected.value : _constants.modes.random.value,
          count: metadata?.max_count,
          showReset: metadata?.allow_resetting_children,
          candidates: metadata?.candidates
        }
      };
    }
    dispatch(_redux.actions.library.initializeFromBlockValue({
      libraryId,
      version,
      settings
    }));
  }, [blockValue]);
};
exports.useLibraryHook = useLibraryHook;
const useLibrarySelectorHook = _ref2 => {
  let {
    libraries,
    settings
  } = _ref2;
  const dispatch = (0, _reactRedux.useDispatch)();
  return {
    onLibrarySelect: id => {
      if (id === null) {
        dispatch(_redux.actions.library.unloadLibrary());
      } else {
        dispatch(_redux.actions.library.setLibraryId({
          selectedLibraryId: id
        }));
        if (!(0, _utils.isV1Library)(id)) {
          dispatch(_redux.actions.library.setLibraryVersion({
            version: libraries[id]?.version
          }));
        }
        if (!settings[id]) {
          dispatch(_redux.actions.library.initializeSettings({
            selectedLibraryId: id
          }));
        }
      }
    }
  };
};
exports.useLibrarySelectorHook = useLibrarySelectorHook;
const useBlocksSelectorHook = _ref3 => {
  let {
    blocksInSelectedLibrary,
    savedChildren,
    savedLibraryId,
    selectedLibraryId,
    v1LibraryBlockIds
  } = _ref3;
  const dispatch = (0, _reactRedux.useDispatch)();

  // fetch library content
  // If selected library is the same as the saved library,
  //   use the children blocks of the library content block instead.
  // Else if v1 library
  //   fetch the block ids (block data in other useEffect)
  // Else if v2 library
  //   fetch the block ids along with block data
  (0, _react.useEffect)(() => {
    if (selectedLibraryId === savedLibraryId) {
      dispatch(_redux.actions.library.setLibraryBlocks({
        blocks: savedChildren.map(block => ({
          id: block.id,
          display_name: block.display_name,
          block_type: block.category
        }))
      }));
    } else if ((0, _utils.isV1Library)(selectedLibraryId)) {
      dispatch(requests.fetchV1LibraryContent({
        libraryId: selectedLibraryId,
        onSuccess: response => {
          dispatch(_redux.actions.library.setLibraryBlocks({
            blocks: []
          }));
          dispatch(_redux.actions.library.loadV1LibraryBlockIds({
            blockIds: response.data?.blocks
          }));
          dispatch(_redux.actions.library.setLibraryVersion({
            version: response.data?.version
          }));
        },
        onFailure: error => {
          dispatch(_redux.actions.requests.failRequest({
            requestKey: _requests2.RequestKeys.fetchV1LibraryContent,
            error
          }));
        }
      }));
    } else {
      dispatch(requests.fetchV2LibraryContent({
        libraryId: selectedLibraryId,
        onSuccess: response => {
          dispatch(_redux.actions.library.setLibraryBlocks({
            blocks: response?.data
          }));
        },
        onFailure: error => {
          dispatch(_redux.actions.requests.failRequest({
            requestKey: _requests2.RequestKeys.fetchV2LibraryContent,
            error
          }));
        }
      }));
    }
  }, [selectedLibraryId, savedChildren]);

  // fetch v1 library block data after block ids are fetched
  (0, _react.useEffect)(() => {
    v1LibraryBlockIds.forEach(blockId => {
      dispatch(requests.fetchV1LibraryBlock({
        blockId,
        onSuccess: response => {
          dispatch(_redux.actions.library.addLibraryBlock({
            block: {
              id: blockId,
              display_name: response.data?.display_name,
              block_type: response.data?.category
            }
          }));
        },
        onFailure: error => {
          dispatch(_redux.actions.requests.failRequest({
            requestKey: _requests2.RequestKeys.fetchV1LibraryBlock,
            error
          }));
        }
      }));
    });
  }, [v1LibraryBlockIds]);
  const blockTypeDisplay = type => {
    if (type === 'html') {
      return 'Text';
    }
    if (type === 'video') {
      return 'Video';
    }
    if (type === 'problem') {
      return 'Problem';
    }
    return 'Other';
  };
  return {
    blocksTableData: blocksInSelectedLibrary.map(block => ({
      display_name: block.display_name,
      block_type: blockTypeDisplay(block.block_type)
    }))
  };
};
exports.useBlocksSelectorHook = useBlocksSelectorHook;
//# sourceMappingURL=hooks.js.map