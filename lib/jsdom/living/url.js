"use strict";

const URL = require("whatwg-url");

module.exports = function (core) {
  core.URL = URL.getURL();
};
