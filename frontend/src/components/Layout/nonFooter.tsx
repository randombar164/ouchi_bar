import { Header } from 'src/components/Layout/Header';

type Props = {
    children: React.ReactNode;
};

export const NonFooterLayout: React.VFC<Props> = ({ children }) => {
    return (
        <div className="flex overflow-y-auto bg-yellow-200 justify-center">
            <Header />
            <div className="overflow-y-auto pt-12 pb-16 h-screen bg-white max-w-[320px]">
                {children}
            </div>
        </div>
    );
};
