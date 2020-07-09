import React from 'react';
import Link from 'next/link';

import styling from './PageControls.module.scss';

/**
 * Renders the available page numbers and allows the user
 * to switch between the pages.
 * @param data {array} an array that contains all the pages. Placeholders are "..."
 * @param active {number} the currently active page
 * @returns {*}
 * @constructor
 */
const PageControls = ({ data, active }) => (
    <div className={styling.pageControls}>
        <ul>
            {(data || []).map((page, i) => {
                if (page === '...') {
                    return <li className={styling.placeholder} key={i}>...</li>;
                }
                
                return (
                    <Link href={'/' + page} key={i}>
                        <li className={page === active ? styling.active : styling.page}>{page}</li>
                    </Link>
                );
            })}
        </ul>
    </div>
);

export default PageControls;