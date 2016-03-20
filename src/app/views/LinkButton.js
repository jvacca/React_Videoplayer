"use strict";

var _ = require('underscore'),
	React = require('react');

var LinkButton = React.createClass({

	displayName: 'LinkButton',

	getInitialState: function() {
		return {
			mouseOverToggle: false
		};
	},

	propTypes: {
		title: React.PropTypes.string,
		url: React.PropTypes.string
	},

	onMouseOver: function() {
		this.setState({ mouseOverToggle: true });
	},

	onMouseOut: function() {
		this.setState({ mouseOverToggle: false });
	},

	onMouseClick: function(e) {
		//e.preventDefault();

		this.setState({ mouseOverToggle: false });
	},

	render: function() {
		var hoverStyle = (this.state.mouseOverToggle === true)? 'chapter_bottom chapter_bottom_over' : 'chapter_bottom';

		return (
			<div 
				className={hoverStyle} 
				onMouseEnter={this.onMouseOver} 
				onMouseLeave={this.onMouseOut}
			>
				<a href={this.props.url} target="_blank">{this.props.title}</a>
			</div>
		)
	}

						

});

module.exports = LinkButton;