"use strict";

var _ = require('underscore'),
	React = require('react');

var Link = React.createClass({

	displayName: 'Link',

	getInitialState: function() {
		return {
			hoverToggle: false
		};
	},

	propTypes: {
		title: React.PropTypes.string,
		id: React.PropTypes.string,
		onSelect: React.PropTypes.func,
		selected: React.PropTypes.bool
	},

	onMouseOver: function() {
		this.setState({ hoverToggle: true });
	},

	onMouseOut: function() {
		this.setState({ hoverToggle: false });
	},

	onMouseClick: function(e) {
		e.preventDefault();

		this.props.onSelect(this.props.id);
		this.setState({ hoverToggle: false });
	},

	render: function() {
		var hoverStyle = (this.state.hoverToggle === true)? 'playlist-chapter-text chapter-hover' : 'playlist-chapter-text';

		return (
			<div 
				className={(this.props.selected === true)? 'playlist-chapter-bg selected' : 'playlist-chapter-bg'} 
				href='' 
				id={this.props.id} 
				onClick={this.onMouseClick} 
				onMouseEnter={this.onMouseOver}  
				onMouseLeave={this.onMouseOut}
			>
				<div 
					className={(this.props.selected === true)? 'playlist-chapter-top visible' : 'playlist-chapter-top'}
				/>
				<p 
					className={(this.props.selected === true)? 'active_chapter' : hoverStyle}
				>
					{this.props.title}
				</p>
				<div 
					className={(this.props.selected === true)? 'playlist-chapter-bot visible' : 'playlist-chapter-bot'}
				/>
			</div>
		)
	}

						

});

module.exports = Link;