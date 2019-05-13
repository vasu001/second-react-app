import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="bg-primary p-2">
                <div className="d-flex-column container">
                    <form onSubmit={this.onSubmitForm}>
                        <div className="form-group text-center">
                            <label htmlFor="video">
                                <h1 className="h1 text-white">YouTube Searcher</h1>
                            </label>
                            <input type="text" name="video" id="video" className="form-control form-control-lg" onChange={this.onInputChange} />
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default SearchBar;