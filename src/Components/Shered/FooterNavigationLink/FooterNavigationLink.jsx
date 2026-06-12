import Link from 'next/link';
import React from 'react';

const FooterNavigationLink = ({linkText, href}) => {
    return (
        <>
             <li>
                  <Link href={href}>
                           {linkText}
                  </Link>
             </li>
        </>
    );
};

export default FooterNavigationLink;