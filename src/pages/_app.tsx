import type { AppProps } from 'next/app'
import { useRef } from 'react';
import '../styles/global.css'
import ColorModeProvider from '../components/ColorModeContext/ColorModeContext';
import { Footer } from '../components';
import clsx from 'clsx';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ColorModeProvider>
            <div className={clsx('bg-white dark:bg-gray-900')}>
                <Component {...pageProps} />
                <Footer />
            </div>
        </ColorModeProvider>
    );
}
export default MyApp