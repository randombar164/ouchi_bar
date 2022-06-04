type Props = {
	children: React.ReactNode
}

export const ContentWrapper: React.VFC<Props> = ({ children }) => {
	return <div className="mx-auto w-full max-w-[330px]">{children}</div>
}
