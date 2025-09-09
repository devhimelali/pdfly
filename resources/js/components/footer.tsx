import { Link } from '@inertiajs/react';
import { Heart } from 'lucide-react';

export default function Footer() {
    const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
    return (
        <footer className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-6 sm:px-8 lg:px-0">
            <Link className="font-medium text-foreground" href="/">
                &copy; {appName} {new Date().getFullYear()}
            </Link>
            <span className="flex items-center gap-1 text-secondary-foreground">
                Built with <Heart className="mt-1 text-sm text-red-500" /> by Md. Himel Ali
            </span>
        </footer>
    );
}
