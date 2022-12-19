import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

import { FaSwimmingPool } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { GiPoolDive, GiFilmSpool } from "react-icons/gi";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import splashLogo from "../../images/splash.svg";
import Image from "next/image";

const pools = [
    {
        name: "Splash Italiana",
        description:
            "Um design elegante com formas mais arredondadas e produzida em diferentes tamanho.",
        href: "#",
        icon: FaSwimmingPool,
    },
    {
        name: "Splash Tropical",
        description:
            "Uma piscina completa que vem ao encontro de tudo o que você e sua família precisam para relaxar e terem ótimos momentos juntos.",
        href: "#",
        icon: MdPool,
    },
    {
        name: "Splash Tradicional",
        description:
            "A Splash Tradicional tem formas retangulares elaboradas para maior aproveitamento de seu espaço.",
        href: "#",
        icon: GiPoolDive,
    },
    {
        name: "Splash Farol da Barra",
        description:
            "A Splash Farol da Barra é ideal para um espaço exclusivo e seguro.",
        href: "#",
        icon: GiFilmSpool,
    },
];
const callsToAction = [
    { name: "Faça um orçamento", href: "#", icon: PhoneIcon },
];
const resources = [
    {
        name: "Faça um orçamento",
        description: "Faça um orçamento conosco.",
        href: "#",
        icon: LifebuoyIcon,
    },
    {
        name: "Sobre nós",
        description: "Saiba tudo sobre nós.",
        href: "#",
        icon: BookmarkSquareIcon,
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export function Navbar() {
    return (
        <Popover className="relative bg-transparent z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <Image
                                className="h-14 w-auto sm:h-14"
                                src={splashLogo}
                                alt="Splash logo"
                            />
                        </a>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group
                        as="nav"
                        className="hidden space-x-10 md:flex"
                    >
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open
                                                ? "text-gray-900"
                                                : "text-gray-500",
                                            "group inline-flex items-center rounded-md bg-transparent text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        )}
                                    >
                                        <span>Piscinas</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open
                                                    ? "text-gray-600"
                                                    : "text-gray-400",
                                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {pools.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                        >
                                                            <item.icon
                                                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                                                aria-hidden="true"
                                                            />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">
                                                                    {item.name}
                                                                </p>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    {
                                                                        item.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                    {callsToAction.map(
                                                        (item) => (
                                                            <div
                                                                key={item.name}
                                                                className="flow-root"
                                                            >
                                                                <a
                                                                    href={
                                                                        item.href
                                                                    }
                                                                    className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                                                >
                                                                    <item.icon
                                                                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                    <span className="ml-3">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <a
                            href="#"
                            className="text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                            Orçamento
                        </a>
                        <a
                            href="#"
                            className="text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                            Sobre
                        </a>

                        <a
                            href="tel:0800000000"
                            className="text-base font-medium text-indigo-600 hover:text-indigo-900 flex"
                        >
                            <PhoneIcon
                                className="h-6 w-6 flex-shrink-0   mr-2"
                                aria-hidden="true"
                            />
                            Vendas 0800 000 000
                        </a>
                    </Popover.Group>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
                >
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>

                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {pools.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                        >
                                            <item.icon
                                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                                aria-hidden="true"
                                            />
                                            <span className="ml-3 text-base font-medium text-gray-900">
                                                {item.name}
                                            </span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
