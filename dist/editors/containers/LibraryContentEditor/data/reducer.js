"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.initialSettings = exports.actions = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _constants = require("../constants");
var _utils = require("../../../utils");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const initialState = exports.initialState = {
  libraries: {},
  selectedLibraryId: null,
  selectedLibraryVersion: null,
  settings: {
    // [libraryId]: initialSettings,
    //  This reducer structure allows selected settings
    //  to persist when user switches between libraries.
  },
  blocksInSelectedLibrary: [],
  v1LibraryBlockIds: [],
  // The following two states are only loaded from a previously saved editor.
  savedLibraryId: null,
  savedChildren: []
};
const initialSettings = exports.initialSettings = {
  mode: _constants.modes.random.value,
  count: -1,
  showReset: false,
  candidates: []
};
const library = (0, _toolkit.createSlice)({
  name: 'library',
  initialState,
  reducers: {
    initializeFromBlockValue: (state, _ref) => {
      let {
        payload
      } = _ref;
      return _objectSpread(_objectSpread({}, state), {}, {
        savedLibraryId: payload.libraryId,
        selectedLibraryId: payload.libraryId,
        selectedLibraryVersion: payload.version,
        settings: payload.settings
      });
    },
    loadLibraries: (state, _ref2) => {
      let {
        payload
      } = _ref2;
      return _objectSpread(_objectSpread({}, state), {}, {
        libraries: _objectSpread(_objectSpread({}, state.libraries), payload.libraries)
      });
    },
    unloadLibrary: state => _objectSpread(_objectSpread({}, state), {}, {
      selectedLibraryId: null,
      selectedLibraryVersion: null,
      blocksInSelectedLibrary: []
    }),
    loadV1LibraryBlockIds: (state, _ref3) => {
      let {
        payload
      } = _ref3;
      return _objectSpread(_objectSpread({}, state), {}, {
        v1LibraryBlockIds: payload.blockIds
      });
    },
    loadChildren: (state, _ref4) => {
      let {
        payload
      } = _ref4;
      return _objectSpread(_objectSpread({}, state), {}, {
        savedChildren: payload.children
      });
    },
    setLibraryId: (state, _ref5) => {
      let {
        payload
      } = _ref5;
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedLibraryId: payload.selectedLibraryId
      });
    },
    setLibraryVersion: (state, _ref6) => {
      let {
        payload
      } = _ref6;
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedLibraryVersion: payload.version
      });
    },
    setLibraryBlocks: (state, _ref7) => {
      let {
        payload
      } = _ref7;
      return _objectSpread(_objectSpread({}, state), {}, {
        blocksInSelectedLibrary: payload.blocks
      });
    },
    addLibraryBlock: (state, _ref8) => {
      let {
        payload
      } = _ref8;
      return _objectSpread(_objectSpread({}, state), {}, {
        blocksInSelectedLibrary: [...state.blocksInSelectedLibrary, payload.block]
      });
    },
    initializeSettings: (state, _ref9) => {
      let {
        payload
      } = _ref9;
      return _objectSpread(_objectSpread({}, state), {}, {
        settings: _objectSpread(_objectSpread({}, state.settings), {}, {
          [payload.selectedLibraryId]: initialSettings
        })
      });
    },
    setModeForLibrary: (state, _ref10) => {
      let {
        payload
      } = _ref10;
      return _objectSpread(_objectSpread({}, state), {}, {
        settings: _objectSpread(_objectSpread({}, state.settings), {}, {
          [payload.libraryId]: _objectSpread(_objectSpread({}, state.settings[payload.libraryId]), {}, {
            mode: payload.mode
          })
        })
      });
    },
    setCountForLibrary: (state, _ref11) => {
      let {
        payload
      } = _ref11;
      return _objectSpread(_objectSpread({}, state), {}, {
        settings: _objectSpread(_objectSpread({}, state.settings), {}, {
          [payload.libraryId]: _objectSpread(_objectSpread({}, state.settings[payload.libraryId]), {}, {
            count: payload.count
          })
        })
      });
    },
    setShowResetForLibrary: (state, _ref12) => {
      let {
        payload
      } = _ref12;
      return _objectSpread(_objectSpread({}, state), {}, {
        settings: _objectSpread(_objectSpread({}, state.settings), {}, {
          [payload.libraryId]: _objectSpread(_objectSpread({}, state.settings[payload.libraryId]), {}, {
            showReset: payload.showReset
          })
        })
      });
    },
    setCandidatesForLibrary: (state, _ref13) => {
      let {
        payload
      } = _ref13;
      return _objectSpread(_objectSpread({}, state), {}, {
        settings: _objectSpread(_objectSpread({}, state.settings), {}, {
          [payload.libraryId]: _objectSpread(_objectSpread({}, state.settings[payload.libraryId]), {}, {
            candidates: payload.candidates
          })
        })
      });
    }
  }
});
const actions = exports.actions = (0, _utils.StrictDict)(library.actions);
const {
  reducer
} = library;
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map