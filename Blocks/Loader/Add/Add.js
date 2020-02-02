import React from 'react';
import './Add.css';

/**
 * Reference to hidden file input field, activating after click on button
 * @type {ReactRef}
 */
const inputRef = React.createRef();

/**
 * Calls when "Add" button clicked 
 */
function callFileInput()
{
    inputRef.current.click();
}

/**
 * "Add" button class
 * @param {String} className - list of additional CSS classes
 * @param {Function} onFile - calls after file was chosen
 */
export default ({ className, onFile, visible }) =>
    <div
        className={`loader__add ${className}${!visible ? " loader__add--hidden" : ""}`}
        onClick={callFileInput}
    >
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="18.913" width="7.17391" height="45" rx="3.58696" fill="white"/>
            <rect y="26.0869" width="7.17391" height="45" rx="3.58696" transform="rotate(-90 0 26.0869)" fill="white"/>
        </svg>
        <input className="loader__add-input" type="file" accept=".jpg,.jpeg,.png" onChange={onFile} ref={inputRef}></input>
    </div>;