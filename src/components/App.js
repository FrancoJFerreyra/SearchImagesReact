import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar';
import unsplashConf from '../Api/unsplash';
import ImageList  from './ImageList';

class App extends Component {
  state = { imgs : []};

  onSearchSubmit = async (term) => {
    const response = await unsplashConf.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ imgs: response.data.results})
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.imgs}/>
      </div>
    );
  }
}
export default App ;
