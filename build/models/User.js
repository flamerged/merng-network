"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String
});
var User = (0, _mongoose.model)("User", userSchema);
exports.User = User;
//# sourceMappingURL=User.js.map