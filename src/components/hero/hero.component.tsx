import { ButtonPrimary } from "../button-primary";
import { ColourfulBackground } from "../colourful-background";
import { Navbar } from "../navbar";
import { Subtitle, Title } from "../typography";
import Image from "next/image";
import heroImage from "/public/hero-pool.png";

export const Hero = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-16">
            <Navbar />
            <ColourfulBackground />

            <div className="lg:flex lg:items-center lg:justify-between mt-8">
                <div className="max-w-lg">
                    <Title>Aproveite o verão com a Splash</Title>

                    <Subtitle>
                        A Splash é a melhor opção para você aproveitar o verão
                        com a sua família.
                    </Subtitle>

                    <ButtonPrimary>Faça um orçamento</ButtonPrimary>
                </div>

                <div className="w-full px-4 lg:w-6/12">
                    <div className="lg:ml-auto lg:text-right">
                        <div className="relative z-10 inline-block pt-11 lg:pt-0">
                            <Image
                                src={heroImage}
                                alt="hero"
                                className="max-w-full lg:ml-auto"
                                width={500}
                                height={500}
                            />
                            <span className="absolute -left-8 -bottom-8 z-[-1]">
                                <svg
                                    width="93"
                                    height="93"
                                    viewBox="0 0 93 93"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="2.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="2.5"
                                        cy="24.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="2.5"
                                        cy="46.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="2.5"
                                        cy="68.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="2.5"
                                        cy="90.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="24.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="24.5"
                                        cy="24.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="24.5"
                                        cy="46.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="24.5"
                                        cy="68.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="24.5"
                                        cy="90.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="46.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="46.5"
                                        cy="24.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="46.5"
                                        cy="46.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="46.5"
                                        cy="68.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="46.5"
                                        cy="90.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="68.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="68.5"
                                        cy="24.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="68.5"
                                        cy="46.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="68.5"
                                        cy="68.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="68.5"
                                        cy="90.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="90.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="90.5"
                                        cy="24.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="90.5"
                                        cy="46.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="90.5"
                                        cy="68.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="90.5"
                                        cy="90.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
