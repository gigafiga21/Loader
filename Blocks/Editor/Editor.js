import React, { Component } from 'react';
import Instructions from './../Instructions/Instructions.js';
import Instruments from './Instruments/Instruments.js';
import Dialog from './Dialog/Dialog.js';
import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';
import './Editor.css';

/**
 * Displays chosen photos to send on server
 * @param {Function} onLoad - calls when new picture loaded 
 */
export default class Editor extends Component
{
    constructor(props)
    {
        super(props);
        this.state = this.initialState();
        this.croppingImage = null;
    }

    /**
     * Sets crop field size to fill image
     * @return {Object}
     */
    initialCrop()
    {
        let crop = { unit: "px" };

        if (this.croppingImage)
        {
            crop.x = 0;
            crop.y = 0;
            crop.width = this.croppingImage.width;
            crop.height = this.croppingImage.height;
        }

        return crop;
    }

    /**
     * Keeps initial state of the component
     * @return {Object}
     */
    initialState()
    {
        return {
            imageData: this.props.imageData,
            instrument: "Crop",
            stage: "Skip",
            action: "Crop",
            isReady: false,
            crop: this.initialCrop()
        };
    }

    /**
     * Catch new base64 from loader
     * @param {Object} prevProps 
     */
    componentDidUpdate(prevProps)
    {
        if (this.props.imageData != prevProps.imageData)
        {
            this.setState({ imageData: this.props.imageData });
        }
    }

    /**
     * Crop instrument was activated
     */
    onCrop()
    {
        this.setState({ instrument: "Crop", isReady: false, stage: "Cancel", action: "Crop", crop: this.initialCrop() });
    }

    /**
     * Image was loaded into cropper block
     * @param {Element} image 
     */
    onImageLoaded(image)
    {
        this.croppingImage = image;
    };

    /**
     * Crop area was changed
     * @param {Object} crop 
     */
    onCropChange(crop)
    {
        this.setState({ crop: crop });
    }

    /**
     * Image was cropped
     * @param {Object} ctop - coords and sizes of crop
     */
    onCropped(crop)
    {
        if (!crop.width || !crop.height)
        {
            return;
        }

        let canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            scale = 
            {
                x: this.croppingImage.naturalWidth / this.croppingImage.width,
                y: this.croppingImage.naturalHeight / this.croppingImage.height,
            };

        canvas.width = crop.width * scale.x;
        canvas.height = crop.height * scale.y;

        ctx.drawImage(this.croppingImage,
            crop.x * scale.x, crop.y * scale.y,
            crop.width * scale.x, crop.height * scale.y,
            0, 0,
            crop.width * scale.x, crop.height * scale.y);
        this.setState({ imageData: canvas.toDataURL("image/png") });
    }

    /**
     * Rotate instrument was activated
     */
    onRotate()
    {
        let img = new Image();
        img.onload = () =>
        {
            let canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');

            canvas.width = img.height;
            canvas.height = img.width;

            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(-0.5 * Math.PI);
            ctx.drawImage(img, -img.width / 2, -img.height / 2);

            this.setState({ instrument: null, crop: { unit: "px" }, stage: "Cancel", action: "Done", isReady: true, imageData: canvas.toDataURL("image/png") });
        }

        img.src = this.state.imageData;
    }

    /**
     * User clicked something at the Dialog element
     * @param {Boolean} ok - positive or negative user ansver
     */
    onAction(ok)
    {
        if (this.state.instrument == null && !ok)
        {
            this.setState({
                stage: "Skip", action: "Crop",
                instrument: "Crop", crop: this.initialCrop(),
                isReady: false, imageData: this.props.imageData });
        }
        else if (this.state.instrument == null && ok || !ok && this.state.stage == "Skip")
        {
            this.props.onEdit(this.state.imageData);
            this.setState(this.initialState());
        }
        else if (this.state.instrument == "Crop" && ok)
        {
            this.onCropped(this.state.crop);
            this.setState({ stage: "Cancel", action: "Done", isReady: true, instrument: null, crop: { units: "px" } });
        }
        else if (this.state.instrument == "Crop" && !ok)
        {
            this.setState({
                stage: "Skip", action: "Crop",
                instrument: "Crop", isReady: false,
                crop: this.initialCrop(), imageData: this.props.imageData });
        }
    }

    /**
     * Redraws block
     */
    render()
    {
        let cropEvents = this.state.instrument != "Crop" ? { pointerEvents: "none" } : {};

        return (
            <div className="editor" style={!this.props.visible ? { display: "none" } : {}}>
                <Instructions className="editor__instructions">Crop or rotate image</Instructions>
                <div className="editor__picture">
                    <ReactCrop
                        src={this.state.imageData}
                        crop={this.state.crop}
                        onImageLoaded={this.onImageLoaded.bind(this)}
                        onChange={this.onCropChange.bind(this)}
                        style={{ ...cropEvents }}
                        imageStyle={{ maxHeight: "calc(100vh - 320px)" }} />
                </div>
                <Instruments active={this.state.instrument} onRotate={this.onRotate.bind(this)} onCrop={this.onCrop.bind(this)} />
                <Dialog
                    isReady={this.state.isReady}
                    left={this.state.stage}
                    right={this.state.action}
                    onAction={this.onAction.bind(this)}
                />
            </div>
        );
    }
}