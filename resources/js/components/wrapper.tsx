import { clsx } from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

export default function Wrapper({ children, className, ...rest }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
    return (
        <section
            className={clsx('fex-col relative mx-auto mt-16 flex min-h-[calc(100vh-128px)] w-full gap-8 p-4 text-foreground sm:gap-12', className)}
            {...rest}
        >
            {children}
        </section>
    );
}
