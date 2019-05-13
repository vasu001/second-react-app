import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetail';

class App extends React.Component {

	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onFormSubmit('youtube');
	}

	onFormSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});
		this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	}

	render() {
		return (
			<div>
				<SearchBar onFormSubmit={this.onFormSubmit} />
				<div className="container-fluid">
					<div className="row">
						<div className="col-7">
							<VideoDetails video={this.state.selectedVideo} />
						</div>
						<div className="col-5">
							<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;