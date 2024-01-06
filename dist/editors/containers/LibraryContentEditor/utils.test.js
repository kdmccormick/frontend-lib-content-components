"use strict";

var _module = _interopRequireWildcard(require("./utils"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
describe('utils', () => {
  const blocks = [{
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
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('isV1Library', () => {
    const v1Id = 'library-v1:id';
    const v2Id = 'lib:org:id';
    it('should return true if the id is for a v1 library', () => {
      expect(_module.isV1Library(v1Id)).toBe(true);
    });
    it('should return false if the id is not for a v1 library', () => {
      expect(_module.isV1Library(v2Id)).toBe(false);
    });
  });
  describe('isV1Block', () => {
    const v1Id = 'block-v1:id';
    const v2Id = 'block:org:id';
    it('should return true if the id is for a v1 block', () => {
      expect(_module.isV1Block(v1Id)).toBe(true);
    });
    it('should return false if the id is not for a v1 block', () => {
      expect(_module.isV1Block(v2Id)).toBe(false);
    });
  });
  describe('getLibraryName', () => {
    const v1Lib = {
      library_key: 'v1lib',
      display_name: 'v1name'
    };
    const v2Lib = {
      id: 'v2lib',
      title: 'v2name',
      version: 1
    };
    it('should return v1 library name for a v1 library', () => {
      expect(_module.getLibraryName(v1Lib)).toEqual(v1Lib.display_name);
    });
    it('should return v2 library name for a v2 library', () => {
      expect(_module.getLibraryName(v2Lib)).toEqual(v2Lib.title);
    });
    it('should return an empty string for anything else', () => {
      expect(_module.getLibraryName({})).toEqual('');
    });
  });
  describe('getSelectedRow', () => {
    it('should return the correct true/false row mapping', () => {
      expect(_module.getSelectedRows({
        blocks,
        candidates: [[blocks[2].block_type, blocks[2].id]]
      })).toEqual({
        2: true
      });
      expect(_module.getSelectedRows({
        blocks,
        candidates: [[blocks[1].block_type, blocks[1].id], [blocks[0].block_type, blocks[0].id]]
      })).toEqual({
        0: true,
        1: true
      });
    });
    it('should return an empty object for anything else', () => {
      expect(_module.getSelectedRows({
        blocks
      })).toEqual({});
    });
  });
  describe('getCandidates', () => {
    it('should return an array of candidate tuples', () => {
      expect(_module.getCandidates({
        blocks,
        rows: {
          0: true
        }
      })).toEqual([[blocks[0].block_type, blocks[0].id]]);
      expect(_module.getCandidates({
        blocks,
        rows: {
          1: true,
          2: true
        }
      })).toEqual([[blocks[1].block_type, blocks[1].id], [blocks[2].block_type, blocks[2].id]]);
    });
    it('should return an empty array for anything else', () => {
      expect(_module.getCandidates({
        blocks
      })).toEqual([]);
    });
  });
  describe('getUsageKey', () => {
    const v1Id = 'block-v1:edX+DemoX+Demo_Course+type@library_content+block@bb417ac795444c9387a8e0cfb3e8f60e';
    const v2Id = 'lb:edx:Lib1:html:2a077ebb9622416292dea797628f8cdf';
    it('should return the usage key for a v1 block', () => {
      expect(_module.getUsageKey(v1Id)).toEqual('bb417ac795444c9387a8e0cfb3e8f60e');
    });
    it('should return the usage key for a v2 block', () => {
      expect(_module.getUsageKey(v2Id)).toEqual('2a077ebb9622416292dea797628f8cdf');
    });
  });
});
//# sourceMappingURL=utils.test.js.map