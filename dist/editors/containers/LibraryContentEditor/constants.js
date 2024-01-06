"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modes = exports.default = void 0;
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const modes = exports.modes = {
  random: {
    title: _messages.default.modeRandom,
    description: _messages.default.modeRandomDescription,
    value: 'random'
  },
  selected: {
    title: _messages.default.modeSelected,
    description: _messages.default.modeSelectedDescription,
    value: 'selected'
  }
};
var _default = exports.default = modes;
//# sourceMappingURL=constants.js.map