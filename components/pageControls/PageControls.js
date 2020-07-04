import React from 'react';
import Link from 'next/link';

import styling from './PageControls.module.scss';

const PageControls = ({ data, active }) => (
    <div className={styling.pageControls}>
        <ul>
            {(data || []).map((page, i) => {
                if(page === '...') {
                    return <div className={styling.placeholder} key={i}>...</div>;
                }
            
                return (
                    <Link href={'/' + page} key={i}>
                        <div className={page === active ? styling.active : styling.page}>{page}</div>
                    </Link>
                );
            })}
        </ul>
    </div>
);

export default PageControls;