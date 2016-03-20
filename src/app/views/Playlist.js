"use strict";

var _ = require('underscore'),
	React = require('react'),
	Link = require('views/Link'),
	LinkButton = require('views/LinkButton');
	

var Playlist = React.createClass({

	displayName: 'PLaylist',

	getInitialState: function() {
		var id = this.props.chapters[this.props.currentChapter].id;

		return {
			ctaInfo: this.getCTAById(id)
		};
	},

	getCTAById: function(id) {
		var vid = (id.charAt(5)) - 1;
		return {
			copy: this.props.chapters[vid].reference_copy,
			url: this.props.chapters[vid].reference_url
		};
	},

	propTypes: {
		currentChapter: React.PropTypes.number,
		chapters: React.PropTypes.array,
		onChapterSelect: React.PropTypes.func
	},

	onChapterSelected: function(id) {
		console.log('selected video - ' + id);

		this.setState({
			ctaInfo: this.getCTAById(id)
		});

		this.props.onChapterSelect(id);
	},

	renderChapterTitles: function() {
		var onSelectFunc = this.onChapterSelected,
			currentChapter = this.props.currentChapter,
			listChapterTitles,
			isSelected;

		listChapterTitles = this.props.chapters.map(function(chapter, i) {
			isSelected = (i === currentChapter);
			
			return  <li key={chapter.id}>
						<Link title={chapter.title} id={chapter.id} onSelect={onSelectFunc} selected={isSelected} />
					</li>
		})

		return listChapterTitles;
	},

	render: function() {
		//console.log("Playlist created");
		
		var copy = this.state.ctaInfo.copy.split(':');

		return (
		<div>
			<div className='chapter_top'>
				<img width='279' height='11' src='images/img-top-cap-module.gif' alt='' />
			</div>
			
			<ul className='chapters'>
				{this.renderChapterTitles()}

				<li className='large_CTA_area'>
					<a className='large_cta' href={ this.state.ctaInfo.url }>
						<div className='offers'>
							<span 
								className='offer_title'>{ copy[0] }
							</span>
							<p className='offer_description'>{ copy[1] }</p>
						</div>
					</a>
				</li>
			</ul>
							
			<LinkButton url={'http://www.abilify.com/story/mdd/sign-up.aspx'} title={'Already on ABILIFY? Share Your Story'} />
		</div>
	    )
	  }
});

module.exports = Playlist;