import React from 'react';
import './Dialog.css';

/**
 * Bottom panel on editor with "Cancel"/"Skip"/Operation and "Done" buttons
 * @param {String} left  - current left button text
 * @param {String} right - current right button text
 * @param {Function} onAction - calls after user choise
 * @param {Boolean}  isReady  - highlight "Done" button
 */
export default ({ left, right, onAction, isReady }) =>
    <div className="editor__dialog">
        <button className="editor__dialog-left" onClick={() => onAction(false)}>{left}</button>
        <button
            className={`editor__dialog-right${isReady ? " editor__dialog-right--highlighted" : ""}`}
            onClick={() => onAction(true)}>
            {right}
            <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.37035 26.3342L31.877 3.82753L28.3415 0.291992L9.37042 19.2631L3.72383 13.6165L0.188293 17.152L5.83489 22.7986L5.83481 22.7987L9.37035 26.3342Z" fill="white"/>
            </svg>
        </button>
    </div>;