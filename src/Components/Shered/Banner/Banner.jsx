import Image from 'next/image';
import React from 'react';

const Banner = () => {
    // <Image width={400} height={400} alt="banner img" src={'/Images/final banner.png'}></Image>
    return (
        <>
            <Image width={400} height={400} alt="banner img" src={'/Images/banner.png'}></Image>
        </>
    );
};

export default Banner;