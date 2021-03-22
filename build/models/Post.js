"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;

var _mongoose = require("mongoose");

var _User = _interopRequireDefault(require("./User.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postSchema = new _mongoose.Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [{
    body: String,
    username: String,
    createdAt: String
  }],
  likes: [{
    username: String,
    createdAt: String
  }],
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});
var Post = (0, _mongoose.model)("Post", postSchema);
exports.Post = Post;
//# sourceMappingURL=Post.js.map