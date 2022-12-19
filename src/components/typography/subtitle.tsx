type SubtitleProps = {
    children: React.ReactNode;
};

export const Subtitle = ({ children }: SubtitleProps) => {
    return <p className="mt-4 mb-4 text-xl text-gray-500">{children}</p>;
};
