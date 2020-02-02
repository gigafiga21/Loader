import React from 'react';
import ReactDOM from 'react-dom';

import './Main.css';
import Loader from '../../Blocks/Loader/Loader.js'
import Editor from '../../Blocks/Editor/Editor.js'

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { isEditing: false, imageData: "" };
    }

    /**
     * Opens/closes editor
     * @param {Boolean} toggle
     * @param {String}  imageData - base64 string with image code
     */
    toggleEditor(toggle, imageData)
    {
        this.setState({ isEditing: toggle, imageData: imageData });
    }

    render()
    {
        return (
            <>
                <Loader
                    visible={!this.state.isEditing}
                    onLoad={this.toggleEditor.bind(this, true)}
                    processedImage={this.state.imageData}
                />
                <Editor
                    visible={this.state.isEditing}
                    imageData={this.state.imageData}
                    onEdit={this.toggleEditor.bind(this, false)}
                />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
