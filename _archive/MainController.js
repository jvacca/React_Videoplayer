"use strict";

var _ = require('underscore'),
	React = require('react'),
	ReactDOM = require('react-dom');

module.exports = function MainController(data) {
	console.log("MainController is alive!");
	
	var Child = React.createClass({
		render: function(){
			return (
			<div>
				and this is the <b>{this.props.name}</b>.
			</div>
		    )
	  }
	});

	var Parent = React.createClass({
	  render: function(){
	    return (
	      <div>
	        <div> This is the parent. </div>
	        <Child name="child"/>
	      </div>
	    )
	  }
	});

	ReactDOM.render(<Parent />, document.getElementById('app'));
};

