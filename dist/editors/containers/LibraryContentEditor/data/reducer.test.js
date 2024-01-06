"use strict";

var _reducer = require("./reducer");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const testingState = _objectSpread(_objectSpread({}, _reducer.initialState), {}, {
  arbitraryField: 'arbitrary'
});
describe('app reducer', () => {
  it('has initial state', () => {
    expect((0, _reducer.reducer)(undefined, {})).toEqual(_reducer.initialState);
  });
  const testValue = 'Hiatus Kaiyote';
  describe('handling actions', () => {
    it('loads initial input fields into the store', () => {
      const data = {
        libraries: 'soMe LibS',
        libraryId: 'anOther lIb Id',
        version: 'a lib veRsioN (oFteN an Int)',
        settings: {
          value: 'sOmE sETTings vAlue'
        },
        blocksInSelectedLibrary: ['SoME bLocKs']
      };
      expect((0, _reducer.reducer)(testingState, _reducer.actions.initializeFromBlockValue(_objectSpread(_objectSpread({}, data), {}, {
        other: 'field'
      })))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
        savedLibraryId: data.libraryId,
        selectedLibraryId: data.libraryId,
        selectedLibraryVersion: data.version,
        settings: data.settings
      }));
    });
    describe('Manipulate Library Data', () => {
      const testLibraryList = {
        lib1: {
          libValue: 'someVAL'
        },
        lib2: {
          property: 'sOmEproP'
        }
      };
      describe('loadLibraries adds to the list of libraries', () => {
        expect((0, _reducer.reducer)(testingState, _reducer.actions.loadLibraries({
          libraries: testLibraryList
        }))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          libraries: _objectSpread(_objectSpread({}, testingState.libraries), testLibraryList)
        }));
      });
      describe('unloadLibrary sets library version, id, and blocks to null/[]', () => {
        expect((0, _reducer.reducer)(testingState, _reducer.actions.unloadLibrary())).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          selectedLibraryId: null,
          selectedLibraryVersion: null,
          blocksInSelectedLibrary: []
        }));
      });
      describe('loadV1LibraryBlockIds saves block ids to v1LibraryBlockIds', () => {
        const blockIds = ['somv1id'];
        expect((0, _reducer.reducer)(testingState, _reducer.actions.loadV1LibraryBlockIds({
          blockIds
        }))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          v1LibraryBlockIds: blockIds
        }));
      });
      describe('loadChildren sets the savedChildren', () => {
        const children = ['tEStChildRen'];
        expect((0, _reducer.reducer)(testingState, _reducer.actions.loadChildren({
          children
        }))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          savedChildren: children
        }));
      });
      describe('setLibraryId sets the id', () => {
        expect((0, _reducer.reducer)(testingState, _reducer.actions.setLibraryId({
          selectedLibraryId: testValue
        }))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          selectedLibraryId: testValue
        }));
      });
      describe('setLibraryVersion sets the library version', () => {
        expect((0, _reducer.reducer)(testingState, _reducer.actions.setLibraryVersion({
          version: testValue
        }))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          selectedLibraryVersion: testValue
        }));
      });
      describe('setLibraryBlocks sets the blocks for the library', () => {
        expect((0, _reducer.reducer)(testingState, _reducer.actions.setLibraryBlocks({
          blocks: testValue
        }))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          blocksInSelectedLibrary: testValue
        }));
      });
      describe('addLibraryBlock adds a block for the library', () => {
        const block = 'newBlock';
        expect((0, _reducer.reducer)(testingState, _reducer.actions.addLibraryBlock({
          block
        }))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          blocksInSelectedLibrary: [...testingState.blocksInSelectedLibrary, block]
        }));
      });
    });
    describe('Library Settings Updates', () => {
      describe('initializeSettings sets the initial settings for an id', () => {
        expect((0, _reducer.reducer)(testingState, _reducer.actions.initializeSettings({
          selectedLibraryId: testValue
        }))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          settings: _objectSpread(_objectSpread({}, testingState.settings), {}, {
            [testValue]: _reducer.initialSettings
          })
        }));
      });
      const testSettingsChanges = {
        libraryId: 'a lIb id',
        mode: 'a MOdE',
        count: 'A iNT',
        showReset: 'a vaLue',
        candidates: 'sOme CandiDates'
      };
      const setterTest = (action, target) => describe('action', () => {
        describe(`load ${target} from payload`, () => {
          expect((0, _reducer.reducer)(testingState, _reducer.actions[action](testSettingsChanges))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
            settings: _objectSpread(_objectSpread({}, testingState.settings), {}, {
              [testSettingsChanges.libraryId]: {
                [target]: testSettingsChanges[target]
              }
            })
          }));
        });
      });
      [['setModeForLibrary', 'mode'], ['setCountForLibrary', 'count'], ['setShowResetForLibrary', 'showReset'], ['setCandidatesForLibrary', 'candidates']].map(args => setterTest(...args));
    });
  });
});
//# sourceMappingURL=reducer.test.js.map