import React from 'react';
import './Instructions.css';

/**
 * Header of the page with instructions for user
 * @param {String} className - list of additional CSS classes
 */
export default ({ className, children }) =>
    <h1 className={"instructions " + className}>{children}</h1>;
