import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Filtro Splash",
        imageSrc:
            "https://cdn.splashpiscinas.com/assets/img/acessorios/Dry-Pump-Splash-pg-inicial.jpg",
        imageAlt: "Imagem do filtro splash",
    },
    {
        id: 2,
        name: "Super Side",
        imageSrc:
            "https://cdn.splashpiscinas.com/assets/img/splash-super-side.jpg",
        imageAlt: "Imagem do super side",
    },
    {
        id: 3,
        name: "Abilight Float",
        imageSrc:
            "https://cdn.splashpiscinas.com/assets/img/abilight-float.jpg",
        imageAlt: "Imagem do abilight float",
    },
    {
        id: 4,
        name: "Estojo de teste líquido",
        imageSrc:
            "https://cdn.splashpiscinas.com/assets/img/tratamento/oxi-estojo-de-teste-liquido.png",
        imageAlt: "Imagem do estojo de teste líquido",
    },
    {
        id: 5,
        name: "Oxi algicida plus",
        imageSrc:
            "https://cdn.splashpiscinas.com/assets/img/tratamento/oxi-algicida-plus.jpg",
        imageAlt: "Image do oxi algicida plus",
    },
    {
        id: 6,
        name: "Solo",
        imageSrc: "https://cdn.splashpiscinas.com/assets/img/solo.jpg",
        imageAlt: "Image do filtro splash",
    },
    // More products...
];

export function ProductList() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Linha de acessórios e tratamento
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    width={500}
                                    height={500}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <span>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            />
                                            {product.name}
                                        </span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
