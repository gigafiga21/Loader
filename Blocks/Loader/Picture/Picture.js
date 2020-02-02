import React from 'react';
import './Picture.css';

/**
 * Picture thumbnail in loader
 * @param {String}   className - list of additional CSS classes
 * @param {String}   src - image source ("background-image" CSS property)
 * @param {Function} onRemove - dispatches after user click on the cross
 */
export default ({ className, src, onRemove }) =>
    <div className={"loader__picture " + className} style={{ backgroundImage: `url(${src})` }}>
        <div className="loader__picture-cross" onClick={onRemove}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" fill="none">
                <rect x="10.45" y="-.42" width="19.41" height="1.55" rx=".78" transform="rotate(45)" fill="#fff"/>
                <rect x="-9.35" y="-20.93" width="19.41" height="1.55" rx=".78" transform="rotate(135)" fill="#fff"/>
            </svg>
        </div>
    </div>;