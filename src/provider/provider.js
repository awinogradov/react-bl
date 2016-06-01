const reactXjst = require('react-xjst');
const React = require('react');
const Runtime = require("xjst-vidom");

let vidom = {}
let api = new Runtime({});
api.compile(require('./templates'));
api.exportApply(vidom)

module.exports = reactXjst(vidom, React);
