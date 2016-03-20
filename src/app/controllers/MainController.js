"use strict";

var _ = require('underscore'),
	React = require('react'),
	ReactDOM = require('react-dom'),
	MainUI = require('views/MainUI');

module.exports = function MainController(data) {
	console.log("MainController is alive!");
	
	ReactDOM.render(<MainUI />, document.getElementById('video-player-container'));
};

