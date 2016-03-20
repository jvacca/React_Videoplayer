"use strict";

var _ = require('underscore'),
	React = require('react');

var ControlButton = React.createClass({

	displayName: 'ControlButton',

	getInitialState: function() {
		return {
			mouseOverToggle: false
		};
	},

	propTypes: {
		id: React.PropTypes.string,
		initialStateClass: React.PropTypes.string,
		alternateStateClass: React.PropTypes.string,
		onClickFunc: React.PropTypes.func,
		selected: React.PropTypes.bool
	},

	onMouseOver: function() {
		this.setState({ 
			mouseOverToggle: true
		});
	},

	onMouseOut: function() {
		this.setState({ 
			mouseOverToggle: false
		});
	},

	onMouseClick: function(e) {
		e.preventDefault();

		this.setState({
			mouseOverToggle: false
		});

		this.props.onClickFunc(this.props.id);
	},

	render: function() {
		var firstState = (this.props.selected) ? this.props.alternateStateClass : this.props.initialStateClass,
			buttonStyle = (this.state.mouseOverToggle) ? firstState + ' ' + firstState + '-over' : firstState;
		
		return (
			<a
				href='' 
				id={this.props.id} 
				className={buttonStyle}
				onClick={this.onMouseClick}
				onMouseEnter={this.onMouseOver}  
				onMouseLeave={this.onMouseOut}
			/>
		)
	}
});

module.exports = ControlButton;