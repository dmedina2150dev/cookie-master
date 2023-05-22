import React, { FC, PropsWithChildren } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {}

export const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <nav>
                <Navbar />
            </nav>
            <main style={{ padding: '20px 50px' }}>
                { children }
            </main>
        </>
    )
}
