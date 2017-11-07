import React, { Component } from 'react';
import CommentBox from './components/CommentBox';

class App extends Component {
    render() {
        return (
            <CommentBox
                url='http://localhost:3001/api/comments'
                pollInterval={2000}
            />
        );
    }
}

export default App;
