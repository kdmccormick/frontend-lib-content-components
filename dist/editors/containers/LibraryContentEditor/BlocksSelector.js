"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.SELECT_ONE_TEST_ID = exports.SELECT_ALL_TEST_ID = exports.RowCheckbox = exports.BlocksSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _messages = _interopRequireDefault(require("./messages"));
var _data = require("./data");
var _hooks = require("./hooks");
var _constants = require("./constants");
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["indeterminate", "checked"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const SELECT_ONE_TEST_ID = exports.SELECT_ONE_TEST_ID = 'selectOne';
const SELECT_ALL_TEST_ID = exports.SELECT_ALL_TEST_ID = 'selectAll';
const RowCheckbox = _ref => {
  let {
    row
  } = _ref;
  const _row$getToggleRowSele = row.getToggleRowSelectedProps(),
    {
      indeterminate,
      checked
    } = _row$getToggleRowSele,
    toggleRowSelectedProps = _objectWithoutProperties(_row$getToggleRowSele, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "text-center",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.CheckboxControl, _objectSpread(_objectSpread({}, toggleRowSelectedProps), {}, {
      title: "Toggle row selected",
      checked: checked,
      isIndeterminate: false,
      "data-testid": SELECT_ONE_TEST_ID
    }))
  });
};
exports.RowCheckbox = RowCheckbox;
const BlocksSelector = _ref2 => {
  let {
    initialRows,
    mode,
    // redux
    blocksInSelectedLibrary,
    savedChildren,
    savedLibraryId,
    setCandidatesForLibrary,
    selectedLibraryId,
    v1LibraryBlockIds
  } = _ref2;
  const {
    blocksTableData
  } = (0, _hooks.useBlocksSelectorHook)({
    blocksInSelectedLibrary,
    savedChildren,
    savedLibraryId,
    selectedLibraryId,
    v1LibraryBlockIds
  });
  const columns = [{
    Header: 'Name',
    accessor: 'display_name'
  }, {
    Header: 'Block Type',
    accessor: 'block_type'
  }];
  const selectColumn = {
    id: 'selection',
    Header: () => null,
    Cell: RowCheckbox,
    disableSortBy: true
  };
  const onSelectedRowsChanged = (0, _react.useCallback)(selected => setCandidatesForLibrary({
    libraryId: selectedLibraryId,
    candidates: (0, _utils.getCandidates)({
      blocks: blocksInSelectedLibrary,
      rows: selected
    })
  }), [blocksInSelectedLibrary]);
  if (selectedLibraryId === null || mode !== _constants.modes.selected.value) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "mb-5 pt-3 border-top",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.tableInstructionLabel))
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.DataTable, {
      columns: columns,
      data: blocksTableData,
      itemCount: blocksTableData.length,
      isSelectable: true,
      isPaginated: true,
      isSortable: true,
      initialState: {
        selectedRowIds: initialRows
      },
      manualSelectColumn: selectColumn,
      onSelectedRowsChanged: onSelectedRowsChanged,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.DataTable.TableControlBar, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.DataTable.Table, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.DataTable.EmptyTable, {
        content: "No blocks found."
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.DataTable.TableFooter, {})]
    }, selectedLibraryId)]
  });
};
exports.BlocksSelector = BlocksSelector;
RowCheckbox.defaultProps = {
  row: {}
};
RowCheckbox.propTypes = {
  row: _propTypes.default.shape({
    getToggleRowSelectedProps: _propTypes.default.func.isRequired
  })
};
BlocksSelector.defaultProps = {
  blocksInSelectedLibrary: [],
  initialRows: {},
  mode: '',
  savedChildren: [],
  savedLibraryId: null,
  selectedLibraryId: null,
  v1LibraryBlockIds: []
};
BlocksSelector.propTypes = {
  initialRows: _propTypes.default.shape({}),
  mode: _propTypes.default.string,
  // redux
  blocksInSelectedLibrary: _propTypes.default.arrayOf(_propTypes.default.shape({})),
  savedChildren: _propTypes.default.arrayOf(_propTypes.default.shape({})),
  savedLibraryId: _propTypes.default.string,
  setCandidatesForLibrary: _propTypes.default.func.isRequired,
  selectedLibraryId: _propTypes.default.string,
  v1LibraryBlockIds: _propTypes.default.arrayOf(_propTypes.default.shape({}))
};
const mapStateToProps = state => ({
  blocksInSelectedLibrary: _data.selectors.blocksInSelectedLibrary(state),
  mode: _data.selectors.mode(state),
  savedChildren: _data.selectors.savedChildren(state),
  savedLibraryId: _data.selectors.savedLibraryId(state),
  selectedLibraryId: _data.selectors.selectedLibraryId(state),
  v1LibraryBlockIds: _data.selectors.v1LibraryBlockIds(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {
  setCandidatesForLibrary: _data.actions.setCandidatesForLibrary
};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BlocksSelector));
//# sourceMappingURL=BlocksSelector.js.map