"use strict";

var _reactRedux = require("react-redux");
var _reactHooks = require("@testing-library/react-hooks");
var requests = _interopRequireWildcard(require("./data/requests"));
var _redux = require("../../data/redux");
var _module = _interopRequireWildcard(require("./hooks"));
var _requests2 = require("../../data/constants/requests");
var _constants = _interopRequireDefault(require("./constants"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));
jest.mock('./data/requests', () => ({
  fetchV1Libraries: jest.fn(),
  fetchV2Libraries: jest.fn(),
  fetchV1LibraryContent: jest.fn(),
  fetchV2LibraryContent: jest.fn(),
  fetchV1LibraryBlock: jest.fn(),
  fetchChildrenInfo: jest.fn()
}));
jest.mock('../../data/redux', () => ({
  actions: {
    library: {
      loadLibraries: jest.fn(),
      loadChildren: jest.fn(),
      initializeFromBlockValue: jest.fn(),
      unloadLibrary: jest.fn(),
      setLibraryId: jest.fn(),
      setLibraryVersion: jest.fn(),
      initializeSettings: jest.fn(),
      setLibraryBlocks: jest.fn(),
      addLibraryBlock: jest.fn(),
      loadV1LibraryBlockIds: jest.fn()
    },
    requests: {
      failRequest: jest.fn()
    }
  }
}));
const dispatch = jest.fn();
const error = 'mockError';
describe('useLibraryHook', () => {
  const selectedLibraryId = 'soMeId';
  const version = 'verNum';
  const blockValue = {
    data: {
      metadata: {
        source_library_id: selectedLibraryId,
        source_library_version: version,
        manual: 'this becomes selected if true',
        max_count: 'this becomes count',
        allow_resetting_children: 'this becomes showReset',
        candidates: 'canDIdates TupLes',
        field: 'sOmEFIeld'
      }
    }
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('useEffect when block finishes loading', () => {
    const v2Libraries = [{
      id: 'v2libid',
      title: 'v2libtitle'
    }];
    const v1Libraries = [{
      display_name: 'myv1library',
      library_key: 'v1id'
    }];
    it('should fetch v2 libraries, v1 libraries and block children info when block finishes loading', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useLibraryHook({
        blockFailed: false,
        blockFinished: true,
        blockValue
      }));
      expect(requests.fetchV2Libraries).toHaveBeenCalled();
      expect(requests.fetchV1Libraries).toHaveBeenCalled();
      expect(requests.fetchChildrenInfo).toHaveBeenCalled();
    });
    it('should call loadLibraries on successful response for fetchV2Libraries', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useLibraryHook({
        blockFailed: false,
        blockFinished: true,
        blockValue
      }));
      const onSuccessCallback = requests.fetchV2Libraries.mock.calls[0][0].onSuccess;
      onSuccessCallback({
        data: v2Libraries
      });
      expect(_redux.actions.library.loadLibraries).toHaveBeenCalledWith({
        libraries: {
          [v2Libraries[0].id]: v2Libraries[0]
        }
      });
    });
    it('should call failRequest on failure response for fetchV2Libraries', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useLibraryHook({
        blockFailed: false,
        blockFinished: true,
        blockValue
      }));
      const onFailureCallback = requests.fetchV2Libraries.mock.calls[0][0].onFailure;
      onFailureCallback(error);
      expect(_redux.actions.requests.failRequest).toHaveBeenCalledWith({
        requestKey: _requests2.RequestKeys.fetchV2Libraries,
        error
      });
    });
    it('should call loadLibraries on successful response for fetchV1Libraries', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useLibraryHook({
        blockFailed: false,
        blockFinished: true,
        blockValue
      }));
      const onSuccessCallback = requests.fetchV1Libraries.mock.calls[0][0].onSuccess;
      onSuccessCallback({
        data: {
          libraries: v1Libraries
        }
      });
      expect(_redux.actions.library.loadLibraries).toHaveBeenCalledWith({
        libraries: {
          [v1Libraries[0].library_key]: v1Libraries[0]
        }
      });
    });
    it('should call failRequest on failure response for fetchV1Libraries', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useLibraryHook({
        blockFailed: false,
        blockFinished: true,
        blockValue
      }));
      const onFailureCallback = requests.fetchV1Libraries.mock.calls[0][0].onFailure;
      onFailureCallback(error);
      expect(_redux.actions.requests.failRequest).toHaveBeenCalledWith({
        requestKey: _requests2.RequestKeys.fetchV1Libraries,
        error
      });
    });
    it('should call loadChildren on successful response for fetchChildrenInfo', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useLibraryHook({
        blockFailed: false,
        blockFinished: true,
        blockValue
      }));
      const onSuccessCallback = requests.fetchChildrenInfo.mock.calls[0][0].onSuccess;
      onSuccessCallback({
        data: {
          children: ['test-children-array']
        }
      });
      expect(_redux.actions.library.loadChildren).toHaveBeenCalledWith({
        children: ['test-children-array']
      });
    });
    it('should call failRequest on failure response for fetchChildrenInfo', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useLibraryHook({
        blockFailed: false,
        blockFinished: true,
        blockValue
      }));
      const onFailureCallback = requests.fetchChildrenInfo.mock.calls[0][0].onFailure;
      onFailureCallback(error);
      expect(_redux.actions.requests.failRequest).toHaveBeenCalledWith({
        requestKey: _requests2.RequestKeys.fetchChildrenInfo,
        error
      });
    });
  });
  describe('useEffect when blockValue is loaded', () => {
    it('should load previously saved library into redux', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useLibraryHook({
        blockFailed: false,
        blockFinished: true,
        blockValue
      }));
      expect(_redux.actions.library.initializeFromBlockValue).toHaveBeenCalledWith({
        libraryId: selectedLibraryId,
        version,
        settings: {
          [selectedLibraryId]: {
            mode: _constants.default.selected.value,
            count: blockValue.data.metadata.max_count,
            showReset: blockValue.data.metadata.allow_resetting_children,
            candidates: blockValue.data.metadata.candidates
          }
        }
      });
    });
  });
});
describe('useLibrarySelectorHook', () => {
  const libraries = {
    v2lib: {
      id: 'v2lib',
      title: 'v2name',
      version: 1
    },
    v1lib: {
      library_key: 'v1lib',
      display_name: 'v1name'
    }
  };
  const settings = {
    v2lib: 'settingsFields'
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('onLibrarySelect', () => {
    const selectedLibraryId = 'v2lib';
    it('should call unloadLibrary when no library is selected', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      const {
        result
      } = (0, _reactHooks.renderHook)(() => _module.useLibrarySelectorHook({
        libraries,
        settings
      }));
      result.current.onLibrarySelect(null);
      expect(_redux.actions.library.unloadLibrary).toHaveBeenCalled();
    });
    it('should call setLibraryId and setLibraryVersion when a library is selected', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      const {
        result
      } = (0, _reactHooks.renderHook)(() => _module.useLibrarySelectorHook({
        libraries,
        settings
      }));
      result.current.onLibrarySelect(selectedLibraryId);
      expect(_redux.actions.library.setLibraryId).toHaveBeenCalledWith({
        selectedLibraryId
      });
      expect(_redux.actions.library.setLibraryVersion).toHaveBeenCalledWith({
        version: 1
      });
      expect(_redux.actions.library.initializeSettings).not.toHaveBeenCalled();
    });
    it('should not call setLibraryVersion when a v1 library is selected', () => {
      const v1LibId = 'library-v1:v1lib';
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      const {
        result
      } = (0, _reactHooks.renderHook)(() => _module.useLibrarySelectorHook({
        libraries,
        settings
      }));
      result.current.onLibrarySelect(v1LibId);
      expect(_redux.actions.library.setLibraryId).toHaveBeenCalledWith({
        selectedLibraryId: v1LibId
      });
      expect(_redux.actions.library.setLibraryVersion).not.toHaveBeenCalled();
    });
    it('should call initializeSettings when there are no settings', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      const {
        result
      } = (0, _reactHooks.renderHook)(() => _module.useLibrarySelectorHook({
        libraries,
        settings: {}
      }));
      result.current.onLibrarySelect('v2lib');
      expect(_redux.actions.library.initializeSettings).toHaveBeenCalledWith({
        selectedLibraryId
      });
    });
  });
});
describe('useBlocksSelectorHook', () => {
  const blocksInSelectedLibrary = [{
    id: 'block1',
    display_name: 'textblock',
    block_type: 'html'
  }, {
    id: 'block2',
    display_name: 'vidblock',
    block_type: 'video'
  }, {
    id: 'block3',
    display_name: 'probblock',
    block_type: 'problem'
  }];
  const savedChildren = [{
    id: 'saved1',
    display_name: 'savedtext',
    category: 'html'
  }, {
    id: 'saved2',
    display_name: 'savedvid',
    category: 'video'
  }, {
    id: 'saved3',
    display_name: 'savedprob',
    category: 'problem'
  }];
  const selectedLibraryId = 'libID';
  const v1LibraryId = 'library-v1:im+a+v1+lib';
  let v1LibraryBlockIds = [];
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('useEffect when selectedLibraryId changes', () => {
    it('should call loadLibraries with values from savedChildren when saved library id is the selected library id', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useBlocksSelectorHook({
        blocksInSelectedLibrary,
        selectedLibraryId,
        savedLibraryId: selectedLibraryId,
        savedChildren
      }));
      expect(_redux.actions.library.setLibraryBlocks).toHaveBeenCalledWith({
        blocks: [{
          id: 'saved1',
          display_name: 'savedtext',
          block_type: 'html'
        }, {
          id: 'saved2',
          display_name: 'savedvid',
          block_type: 'video'
        }, {
          id: 'saved3',
          display_name: 'savedprob',
          block_type: 'problem'
        }]
      });
    });
    it('should fetch v1 library content with a v1 library Id', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useBlocksSelectorHook({
        blocksInSelectedLibrary,
        selectedLibraryId: v1LibraryId,
        v1LibraryBlockIds
      }));
      expect(requests.fetchV1LibraryContent).toHaveBeenCalled();
    });
    it('should call setLibraryBlocks and loadV1LibraryBlockIds on successful response for fetchV1Libraries', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useBlocksSelectorHook({
        blocksInSelectedLibrary,
        selectedLibraryId: v1LibraryId,
        v1LibraryBlockIds
      }));
      const onSuccessCallback = requests.fetchV1LibraryContent.mock.calls[0][0].onSuccess;
      onSuccessCallback({
        data: {
          blocks: 'someblockDta',
          version: 'VERv1'
        }
      });
      expect(_redux.actions.library.setLibraryBlocks).toHaveBeenCalledWith({
        blocks: []
      });
      expect(_redux.actions.library.loadV1LibraryBlockIds).toHaveBeenCalledWith({
        blockIds: 'someblockDta'
      });
      expect(_redux.actions.library.setLibraryVersion).toHaveBeenCalledWith({
        version: 'VERv1'
      });
    });
    it('should call failRequest on failure response for fetchV1Libraries', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useBlocksSelectorHook({
        blocksInSelectedLibrary,
        selectedLibraryId: v1LibraryId,
        v1LibraryBlockIds
      }));
      const onFailureCallback = requests.fetchV1LibraryContent.mock.calls[0][0].onFailure;
      onFailureCallback(error);
      expect(_redux.actions.requests.failRequest).toHaveBeenCalledWith({
        requestKey: _requests2.RequestKeys.fetchV1LibraryContent,
        error
      });
    });
    it('should fetch v2 library content', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useBlocksSelectorHook({
        blocksInSelectedLibrary,
        selectedLibraryId,
        v1LibraryBlockIds
      }));
      expect(requests.fetchV2LibraryContent).toHaveBeenCalled();
    });
    it('should call loadLibraries on successful response for fetchV2Libraries', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useBlocksSelectorHook({
        blocksInSelectedLibrary,
        selectedLibraryId,
        v1LibraryBlockIds
      }));
      const onSuccessCallback = requests.fetchV2LibraryContent.mock.calls[0][0].onSuccess;
      onSuccessCallback({
        data: 'someData'
      });
      expect(_redux.actions.library.setLibraryBlocks).toHaveBeenCalledWith({
        blocks: 'someData'
      });
    });
    it('should call failRequest on failure response for fetchV2Libraries', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useBlocksSelectorHook({
        blocksInSelectedLibrary,
        selectedLibraryId,
        v1LibraryBlockIds
      }));
      const onFailureCallback = requests.fetchV2LibraryContent.mock.calls[0][0].onFailure;
      onFailureCallback(error);
      expect(_redux.actions.requests.failRequest).toHaveBeenCalledWith({
        requestKey: _requests2.RequestKeys.fetchV2LibraryContent,
        error
      });
    });
  });
  describe('useEffect when v1LibraryBlockIds changes', () => {
    v1LibraryBlockIds = ['block1', 'block2'];
    it('should fetch block data for each block', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useBlocksSelectorHook({
        blocksInSelectedLibrary,
        selectedLibraryId,
        v1LibraryBlockIds
      }));
      expect(requests.fetchV1LibraryBlock).toHaveBeenCalledTimes(2);
    });
    it('should call addLibraryBlock on successful response for fetchV1LibraryBlock', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useBlocksSelectorHook({
        blocksInSelectedLibrary,
        selectedLibraryId,
        v1LibraryBlockIds
      }));
      const onSuccessCallback = requests.fetchV1LibraryBlock.mock.calls[0][0].onSuccess;
      onSuccessCallback({
        data: {
          display_name: 'someName',
          category: 'someCaTgory'
        }
      });
      expect(_redux.actions.library.addLibraryBlock).toHaveBeenCalledWith({
        block: {
          id: 'block1',
          display_name: 'someName',
          block_type: 'someCaTgory'
        }
      });
    });
    it('should call failRequest on failure response for fetchV1LibraryBlock', () => {
      _reactRedux.useDispatch.mockReturnValue(dispatch);
      (0, _reactHooks.renderHook)(() => _module.useBlocksSelectorHook({
        blocksInSelectedLibrary,
        selectedLibraryId,
        v1LibraryBlockIds
      }));
      const onFailureCallback = requests.fetchV1LibraryBlock.mock.calls[0][0].onFailure;
      onFailureCallback(error);
      expect(_redux.actions.requests.failRequest).toHaveBeenCalledWith({
        requestKey: _requests2.RequestKeys.fetchV1LibraryBlock,
        error
      });
    });
  });
  describe('blocksTableData should return an array for passing into paragon DataTable component', () => {
    _reactRedux.useDispatch.mockReturnValue(dispatch);
    const {
      result
    } = (0, _reactHooks.renderHook)(() => _module.useBlocksSelectorHook({
      blocksInSelectedLibrary,
      selectedLibraryId,
      v1LibraryBlockIds
    }));
    expect(result.current.blocksTableData).toEqual([{
      display_name: 'textblock',
      block_type: 'Text'
    }, {
      display_name: 'vidblock',
      block_type: 'Video'
    }, {
      display_name: 'probblock',
      block_type: 'Problem'
    }]);
  });
});
//# sourceMappingURL=hooks.test.js.map