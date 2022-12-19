import Image, { StaticImageData } from "next/image";

type Features = {
    name: string;
    description: string;
};

type PoolFeaturesProps = {
    title: string;
    description: string;
    image: StaticImageData;

    features: Features[];
};

export function PoolFeatures(props: PoolFeaturesProps) {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {props.title}
                    </h2>
                    <p className="mt-4 text-gray-500">{props.description}</p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {props.features?.map((feature) => (
                            <div
                                key={feature.name}
                                className="border-t border-gray-200 pt-4"
                            >
                                <dt className="font-medium text-gray-900">
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div>
                    <Image
                        src={props.image}
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
}
