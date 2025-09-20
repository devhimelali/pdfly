import ApplicationLogo from '@/components/ApplicationLogo';
import { useThemeStore } from '@/store/use-theme-store';
import { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Monitor, Moon, Sun, LogIn, LogOut, CircleUser } from 'lucide-react';
import Dropdown from "@/components/Dropdown";
import { logout, login } from '@/routes';

import {edit} from '@/actions/App/Http/Controllers/Settings/ProfileController';


export default function Navbar() {
    const { user } = usePage<PageProps>().props.auth;
    // const [theme, setTheme] = useThemeStore((state) => [state.theme, state.setTheme]);

    // const ThemeIcon = () => {
    //     switch (theme) {
    //         case 'light':
    //             return <Sun className="size-5" />;
    //         case 'dark':
    //             return <Moon className="size-5" />;
    //         default:
    //             return <Monitor className="size-5" />;
    //     }
    // };

    return (
        <header className="bg-destructive shadow-red/25 fixed top-0 z-20 h-16 w-full p-2 shadow">
            <div className="mx-auto flex max-w-7xl justify-between">
                <Link href="/" className="flex shrink-0">
                    <ApplicationLogo className="h-12" />
                </Link>

                <div className="ml-auto flex items-center gap-4">
                    {user ? (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <div className="flex shrink-0 cursor-pointer items-center gap-2 text-sm text-white">
                                    <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />

                                    {user.name}
                                </div>
                            </Dropdown.Trigger>

                            <Dropdown.Content contentClasses="mb-12 sm:mb-10">
                                <Dropdown.Link href={edit()}>
                                    <div className="flex items-center gap-2">
                                        <CircleUser />
                                        Profile
                                    </div>
                                </Dropdown.Link>
                                <Dropdown.Link href={logout()} as="button" method="post">
                                    <div className="flex items-center gap-2">
                                        <LogOut />
                                        Log out
                                    </div>
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    ) : (
                        <Link
                            href={login()}
                            as="button"
                            method="post"
                            className="btn btn-red text-white bg-red-dark flex items-center gap-2 rounded-full whitespace-nowrap"
                        >
                            <LogIn />
                            Log in
                        </Link>
                    )}

                    <div className="my-auto mr-0.5 h-10 w-0.5 border-l border-white/25" />

                    {/*<Dropdown>*/}
                    {/*    <Dropdown.Trigger>*/}
                    {/*        <button className="mr-2 flex h-8 items-center gap-1 text-white xl:mr-0">*/}
                    {/*            <ThemeIcon />*/}
                    {/*        </button>*/}
                    {/*    </Dropdown.Trigger>*/}

                    {/*    <Dropdown.Content contentClasses="mb-12 sm:mb-10">*/}
                    {/*        <Dropdown.Button onClick={() => setTheme('light')}>*/}
                    {/*            <div className="flex items-center gap-2">*/}
                    {/*                <Sun />*/}
                    {/*                Light*/}
                    {/*            </div>*/}
                    {/*        </Dropdown.Button>*/}
                    {/*        <Dropdown.Button onClick={() => setTheme('dark')}>*/}
                    {/*            <div className="flex items-center gap-2">*/}
                    {/*                <Moon />*/}
                    {/*                Dark*/}
                    {/*            </div>*/}
                    {/*        </Dropdown.Button>*/}
                    {/*        <Dropdown.Button onClick={() => setTheme('system')}>*/}
                    {/*            <div className="flex items-center gap-2">*/}
                    {/*                <Monitor />*/}
                    {/*                Auto*/}
                    {/*            </div>*/}
                    {/*        </Dropdown.Button>*/}
                    {/*    </Dropdown.Content>*/}
                    {/*</Dropdown>*/}
                </div>
            </div>
        </header>
    );
}
