import React from 'react';

import styling from './Container.module.scss';
import elements from '../index';

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