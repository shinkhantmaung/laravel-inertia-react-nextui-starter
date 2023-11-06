import ApplicationLogo from '@/Components/ApplicationLogo';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image } from "@nextui-org/react";

export default function Guest({ children }) {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar>
                <Link href="/">
                    <NavbarBrand>
                        <Image src="https://laravel.com/img/logomark.min.svg"></Image>
                    </NavbarBrand>

                </Link>

                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="primary" href="/login" variant="flat">
                            Login
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                    <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        {children}
                    </div>
                </section>
            </main>


        </div>
    );
}
