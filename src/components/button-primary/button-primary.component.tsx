type ButtonPrimaryProps = {
    children: React.ReactNode;
    link?: string;
};

export const ButtonPrimary = ({ children, link }: ButtonPrimaryProps) => {
    return (
        <a
            href={link || "#"}
            className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
        >
            {children}
        </a>
    );
};
