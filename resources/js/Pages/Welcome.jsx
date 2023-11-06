import React from "react";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/Components/Primitives";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image } from "@nextui-org/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <div className="relative flex flex-col h-screen">

            <Navbar>
                <NavbarBrand>
                    <Image src="https://laravel.com/img/logomark.min.svg"></Image>
                </NavbarBrand>

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
                    <div className="inline-block max-w-lg text-center justify-center">
                        <h1 className={title()}>Make&nbsp;</h1>
                        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
                        <br />
                        <h1 className={title()}>
                            websites regardless of your design experience.
                        </h1>
                        <h2 className={subtitle({ class: "mt-4" })}>
                            Beautiful, fast and modern React UI library.
                        </h2>
                    </div>

                    <div className="flex gap-3">
                        <Link
                            href="https://nextui.org/docs/"
                            className={buttonStyles({ color: "primary", variant: "shadow" })}
                        >
                            Documentation
                        </Link>
                        <Link
                            className={buttonStyles({ variant: "bordered" })}
                            href="https://github.com/nextui-org/nextui"
                        >
                            GitHub
                        </Link>
                    </div>

                    <div className="mt-8">
                        <Snippet hideSymbol hideCopyButton variant="flat">
                            <span>
                                Get started by editing <Code color="primary">Welcome.jsx</Code>
                            </span>
                        </Snippet>
                    </div>
                </section>
            </main>

            <footer className="w-full flex items-center justify-center py-3">
                <div className="flex items-center gap-1 text-current">
                    <span className="text-default-600">Laravel Version: {laravelVersion} & </span>
                    <span className="text-default-600">PHP Version: {phpVersion}</span>
                </div>
            </footer>
        </div>
    );
}
