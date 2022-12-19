type TitleProps = {
    children: React.ReactNode;
};

export const Title = ({ children }: TitleProps) => {
    return (
        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {children}
        </h1>
    );
};
