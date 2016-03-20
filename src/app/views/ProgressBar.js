"use strict";

var _ = require('underscore'),
	React = require('react');

var BAR_LENGTH = 444;

var ProgressBar = React.createClass({

	displayName: 'ProgressBar',

	propTypes: {
		elapsed: React.PropTypes.number,
		duration: React.PropTypes.number,
		onScrubFunc: React.PropTypes.func
	},

	getFormattedTime: function(t) {
		t = Math.floor(t);
		var s = t % 60;
		var m = Math.floor(t / 60);
		
		return this.leadingZeroCheck(m) + ':' + this.leadingZeroCheck(s);
	},

	leadingZeroCheck: function(s) {
		s += "";
		if (s.length < 2) s = "0" + s;
		return s;
	},

	onClickBar: function(e) {
		e.preventDefault();

		var xpos = e.pageX - e.target.offsetLeft;
		this.props.onScrubFunc((xpos/BAR_LENGTH) * this.props.duration);
	},
	
	render: function() {
		var currentTime = this.getFormattedTime(this.props.elapsed) + " / " + this.getFormattedTime(this.props.duration),
			barlength = (this.props.elapsed/this.props.duration) * BAR_LENGTH;
		
		return (
			<div>
				<a href='' className='video-controls-progressbar' onClick={this.onClickBar}>
					<img id='progress_image' width={barlength} height='4' src='images/progress_bar.png' alt='' />
				</a>

				<div className='video-controls-timecode'>{currentTime}</div>
			</div>
		)
	}
});

module.exports = ProgressBar;