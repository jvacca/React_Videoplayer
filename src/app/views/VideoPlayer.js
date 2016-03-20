"use strict";

var _ = require('underscore'),
	React = require('react'),
	ProgressBar = require('views/ProgressBar'),
	ControlButton = require('views/ControlButton');

var VideoPlayer = React.createClass({

	displayName: 'VideoPlayer',

	getInitialState: function() {
		return {
			doOnce: true,
			playState: this.props.autoPlay || false,
			muteState: false,
			videoElement: null,
			elapsed: 0
		};
	},

	propTypes: {
		autoPlay: React.PropTypes.bool,
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		videoFiles: React.PropTypes.array,
		duration: React.PropTypes.number
	},

	componentDidMount: function() {
		console.log('VideoPlayer started');
		var self = this;
		this.state.videoElement = this.refs.video;

		this.state.videoElement.addEventListener('ended', function() {
			self.setState({ playState: !self.state.playState });
			// fire event
		});

		this.state.videoElement.addEventListener('timeupdate', function() {
			self.setState({ elapsed: self.state.videoElement.currentTime });
		})

		if (this.state.doOnce) {
			if (this.props.autoPlay === true) this.state.videoElement.play();
			this.setState({doOnce: false});
		}
	},

	componentDidUpdate: function(prevProps) {
		//console.log('VideoPlayer updated');

		if (prevProps.videoFiles[0].src !== this.props.videoFiles[0].src) {
			this.state.videoElement.load();
			this.state.videoElement.play();
		}
	},

	onPlayPauseHandler: function() {
		this.setState({ playState: !this.state.playState });
		(!this.state.playState === true)? this.state.videoElement.play() : this.state.videoElement.pause();
	},

	onMuteToggleHandler: function(id) {
		this.setState({ muteState: !this.state.muteState });
		var level = (!this.state.muteState === true)? 0 : 1;
		this.state.videoElement.volume = level;
	},

	onScrubHandler: function(time) {
		this.setState({ elapsed: time });
		this.state.videoElement.currentTime = time;
	},

	getSourceFiles: function() {
		var listFiles = this.props.videoFiles.map(function(file, i) {
			return <source key={i} src={file.src} type={file.type} />
		})
		return listFiles;
	},

	render: function() {
		
		return (					

			<div className="videoplayer_component">	

				<div id="video_element">	
					<video
		      			ref='video'
		      			width={this.props.width}
		      			height={this.props.height}
		      		>
		      			{this.getSourceFiles()}
		      		</video>
		      	</div>
				
				<ul className="video_controls">
					<li>
						<ControlButton 
							id={'play_pause'} 
							initialStateClass={'video-controls-button play'}
							alternateStateClass={'video-controls-button pause'}
							onClickFunc={this.onPlayPauseHandler}
							selected={this.state.playState}
						/>
					</li>
					<li>
						<ProgressBar elapsed={this.state.elapsed} duration={this.props.duration} onScrubFunc={this.onScrubHandler}/>
					</li>
					<li><img width="3" height="38" src="images/controls_divider.png" alt="" /></li>
					<li>
						<ControlButton 
							id={'btn_toggle'} 
							initialStateClass={'video-controls-button mute'}
							alternateStateClass={'video-controls-button unmute'}
							onClickFunc={this.onMuteToggleHandler}
							selected={this.state.muteState}
						/>
					</li>
				</ul>

			</div>
		)
	}
});

module.exports = VideoPlayer;