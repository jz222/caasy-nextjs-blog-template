import React from 'react';

import styling from './Container.module.scss';
import elements from '../index';

/**
 * Renders a container element. This blog renders the elements
 * inside a container next to each other. Works best with two to
 * three elements grouped with a container.
 * @param els {array} array of elements that are grouped by the container
 * @returns {*}
 * @constructor
 */
const Container = ({ elements: els }) => (
    <div className={styling.container}>
        {els.map(element => {
            const Element = elements[element.type] || (() => null);
        
            return (
                <div className={styling.nested} key={element.id}>
                    <Element {...element} />
                </div>
            );
        })}
    </div>
);

export default Container;