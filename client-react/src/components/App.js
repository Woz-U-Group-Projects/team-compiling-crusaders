import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Welcome.css';
import Welcome from './Welcome';

class App extends Component {


    render() {
        return (
            <div className='App'>
                <div className='App-Header-Container'>
                    <div className='App-Header'>
                        <div className='App-Title'>Blogsite</div>
                    </div>
                </div>  

                <div className='App-Foreign-Component'>
                    <Welcome />
                </div>


                <div className='App-Footer'>

                </div>
            </div>
        )
    }
}

export default App;