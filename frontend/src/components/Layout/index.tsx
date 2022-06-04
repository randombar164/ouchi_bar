import { Footer } from "src/components/Layout/Footer"
import { Header } from "src/components/Layout/Header"

type Props = {
	children: React.ReactNode
}

export const Layout: React.VFC<Props> = ({ children }) => {
	return (
		<div className="flex overflow-y-auto justify-center bg-yellow-200">
			<Header />
			<div className="overflow-y-auto pt-12 pb-16 w-[320px] h-screen bg-white">
				{children}
			</div>
			<Footer />
		</div>
	)
}
