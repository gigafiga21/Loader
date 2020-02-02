import React, { Component } from 'react';
import FileDrop from 'react-file-drop';
import Instructions from './../Instructions/Instructions.js';
import Picture from './Picture/Picture.js';
import Add from './Add/Add.js';

import './Loader.css';

/**
 * Displays chosen photos to send on server
 * @param {String}   processedImage - base64 with edited imag
 * @param {Boolean}  visible        - if Loader block displayed
 * @param {Function} onLoad         - calls when new picture loaded 
 */
export default class Loader extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { pictures: [] };
    }

    /**
     * Check if new edited image appeared
     * @param {Qbject} prevProps
     */
    componentDidUpdate(prevProps)
    {
        if (this.props.visible && this.props.processedImage != prevProps.processedImage)
        {
            let ref = React.createRef();
            let pics = this.state.pictures;
            let pic = <Picture
                className="loader__content"
                ref={ref}
                src={this.props.processedImage}
                onRemove={this.onRemove.bind(this, ref)} />;

            this.setState({ pictures: [...pics, pic] });
        }
        else
        {
            this.props.processedImage = "";
        }
    }

    /**
     * Triggers after user click on cross at the picture
     * @param {ReactRef} picRef - reference to the deleting picture
     */
    onRemove(picRef)
    {
        let pics = Array.from(this.state.pictures);
        let deleting = pics.findIndex((element) => element.ref === picRef);

        if (deleting != -1)
        {
            pics.splice(deleting, 1);
            this.setState(
                { pictures: pics }
            );
        }
    }

    /**
     * Triggers when new photo chosen
     * @param {Event} event
     */
    onFile(event)
    {
        this.processFile(event.target.files[0]);
        event.target.value = "";
    }

    /**
     * Pops base64 from image file
     */
    processFile(file)
    {
        if (FileReader && file)
        {
            let ext = file.name.split('.').pop()

            if (["jpeg", "png", "jpg"].indexOf(ext) == -1)
            {
                return;
            }

            var reader = new FileReader();
            reader.onload = () =>
            {
                this.props.onLoad(reader.result);
            }

            reader.readAsDataURL(file);
        }
    }

    /**
     * Catches dropped file
     * @param {Array} files
     */
    onFileDrop(files)
    {
        this.processFile(files[0]);
    }

    /**
     * Redraws block
     */
    render()
    {
        return (
            <div className="loader" onDrop={this.onFileDrop.bind(this)}>
                <FileDrop onDrop={this.onFileDrop.bind(this)}>
                    <span className="loader__progress">STEP 1/3</span>
                    <Instructions className="loader__instructions">Drag or select photos</Instructions>
                    <div className="loader__pictures">
                        {this.state.pictures}
                        <Add
                            className="loader__content"
                            onFile={this.onFile.bind(this)}
                            visible={this.state.pictures.length < 5} />
                    </div>
                </FileDrop>
            </div>
        );
    }
}