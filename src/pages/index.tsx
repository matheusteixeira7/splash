import Head from "next/head";
import { Hero } from "../components/hero";
import { PoolFeatures } from "../components/pool-features";
import { PoolFeaturesLeft } from "../components/pool-features-left";
import { ProductList } from "../components/product-list/";
import { Footer } from "../components/footer";
import { GetInTouch } from "../components/get-in-touch";

import splashItaliana from "/public/splash-italiana.png";
import splashTropical from "/public/splash-tropical.png";
import splashTradicional from "/public/splash-tradicional.png";
import splashFarol from "/public/splash-farol.png";

export default function Home() {
    return (
        <>
            <Head>
                <title>Splash Piscinas</title>
                <meta
                    name="Splash, venda de piscinas"
                    content="Splash, a melhor opção para você aproveitar o verão com a sua família."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Hero />

                <PoolFeatures
                    title="Piscina Splash Italiana"
                    description="Um design elegante com formas mais arredondadas e produzida em diferentes tamanhos, é o modelo mais vendido no Brasil da Splash."
                    image={splashItaliana}
                    features={[
                        {
                            name: "Medidas",
                            description:
                                "2,50m x 1,50m x 0,30m até 8,00m X 4,00m X 1,40m",
                        },
                        {
                            name: "Cores",
                            description: "Azul/ Branca",
                        },
                        {
                            name: "Material",
                            description: "Fibra",
                        },
                        {
                            name: "Preço",
                            description: "A partir de R$ 6.863,00",
                        },
                    ]}
                />

                <PoolFeaturesLeft
                    title="Piscina Splash Tropical"
                    description="Uma piscina completa que vem ao encontro de tudo o que você e sua família precisam para relaxar e terem ótimos momentos juntos."
                    image={splashTropical}
                    features={[
                        {
                            name: "Medidas",
                            description:
                                "3,50m x 1,80m x 0,80m até 10,00m X 4,00m X 1,30m",
                        },
                        {
                            name: "Cores",
                            description: "Azul/ Branca",
                        },
                        {
                            name: "Material",
                            description: "Fibra",
                        },
                        {
                            name: "Preço",
                            description: "A partir de R$ 9.597,00",
                        },
                    ]}
                />

                <PoolFeatures
                    title="Piscina Splash Tradicional"
                    description="A Splash Tradicional tem formas retangulares elaboradas para maior aproveitamento de seu espaço. Agora também com pastilhas de porcelana da Atlas nas bordas da piscina em todos os tamanhos, e a novidade é que a partir de Outubro/21 este modelo será produzido com SPA para o tamanho de 6 metros e em Janeiro/22 com SPA no tamanho de 8 metros, e para este tamanho (8m) também com SPA e pastilhas de porcelana."
                    image={splashTradicional}
                    features={[
                        {
                            name: "Medidas",
                            description:
                                "3,50m x 1,80m x 1,00m até 9,00m x 4,00m x 1,40m",
                        },
                        {
                            name: "Cores",
                            description: "Azul/ Branca",
                        },
                        {
                            name: "Material",
                            description: "Fibra",
                        },
                        {
                            name: "Preço",
                            description: "A partir de R$ 10.640,00",
                        },
                    ]}
                />

                <PoolFeaturesLeft
                    title="Piscina Splash Farol da Barra"
                    description="A Splash Farol da Barra é ideal para um espaço exclusivo e seguro, onde a família e amigos podem curtir momentos de descontração neste ambiente criado pela piscina em sua área de lazer."
                    image={splashFarol}
                    features={[
                        {
                            name: "Medidas",
                            description:
                                "4,00m x 2,00m x 1,20m até 10,00m X 4,30*m X 1,40m",
                        },
                        {
                            name: "Cores",
                            description: "Azul/ Branca",
                        },
                        {
                            name: "Material",
                            description: "Fibra",
                        },
                        {
                            name: "Preço",
                            description: "A partir de R$ 12.789,00",
                        },
                    ]}
                />

                <ProductList />

                <GetInTouch />

                <Footer />
            </main>
        </>
    );
}
