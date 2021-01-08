import AudioSelector from './components/AudioSelector';
import AudioTweaker from './components/AudioTweaker';
import './App.css'
import { Component } from 'react';

class App extends Component {
  state = {
    selectedAudio: {},
  }

  selectAudio = (obj) => {
    this.setState(prevState => ({ 
      ...prevState, 
      selectedAudio: obj !== prevState.selectedAudio ? obj : {}
    }))
  }

  render() {

    return (
      <div className="App">
        <AudioSelector selectAudio={this.selectAudio} selectedAudio={this.state.selectedAudio} />
        <AudioTweaker selectedAudio={this.state.selectedAudio} />
      </div>
    );
  }
}

export default App;
