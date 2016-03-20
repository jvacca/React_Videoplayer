"use strict";

var _ = require('underscore'),
	React = require('react'),
	Playlist = require('views/Playlist'),
	VideoPlayer = require('views/VideoPlayer'),
	DataModel = require('model/Datamodel');

var MainUI = React.createClass({

	displayName: 'MainUI',

	getInitialState: function() {
		return {
			currentStory: 0,
			currentChapter: 0
		};
	},

	chapterSelect: function(id) {
		var vid = (id.charAt(5)) - 1;

		this.setState({ currentChapter: vid });
	},
	
	render: function() {	
		var chapterTitles = DataModel.Config.stories[this.state.currentStory].chapters,
			arrFiles = chapterTitles[this.state.currentChapter].video,
			duration = chapterTitles[this.state.currentChapter].duration;
			
		return (
			<div className="video_components_container">

		      	<div className="videoplayer_component">
		      		<VideoPlayer
		      			autoPlay={true}
		      			width={625}
		      			height={352}
		      			videoFiles={arrFiles}
		      			duration={duration}
		      		 />
		      	</div>

		      	<div id="playlist_container" className="playlist">
		  			<Playlist currentChapter={this.state.currentChapter} chapters={chapterTitles} onChapterSelect={this.chapterSelect}/>
		      	</div>

		      	<div className="clear"></div>
	      	</div>
	    )
	  }
});

module.exports = MainUI;
