import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function FrontendLayout({ title, footer = false, children }: PropsWithChildren<{ title: string; footer: boolean }>) {
    return (
        <>
            <Head title={title} />
            <Navbar />
            <div className="flex">{children}</div>
            {footer && <Footer />}
        </>
    );
}
