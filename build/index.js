"use strict";

var _apolloServer = require("apollo-server");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Post = _interopRequireDefault(require("./models/Post.js"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _graphqlTag.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type Post {\n    id: ID!\n    body: String!\n    username: String!\n    createdAt: String!\n  }\n  type Query {\n    getPosts: [Post]\n  }\n"])));
var resolvers = {
  Query: {
    getPosts() {
      return _asyncToGenerator(function* () {
        try {
          var posts = yield _Post.default.find();
          return posts;
        } catch (err) {
          throw new Error(err);
        }
      })();
    }

  }
};
var server = new _apolloServer.ApolloServer({
  typeDefs,
  resolvers
});

_mongoose.default.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
  return server.listen({
    port: 5000
  });
}).then(res => {
  console.log("Server started at ".concat(res.url));
});
//# sourceMappingURL=index.js.map