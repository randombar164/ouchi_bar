import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import CocktailImg from 'src/components/CocktailImg'
import { ContentWraper } from 'src/components/ContentWrapper'
import { Layout } from 'src/components/Layout'
import { Context } from 'src/utils/contexts/provider'
import { pushHome } from 'src/utils/hooks/pushHome'
import { useGetRecipe } from 'src/utils/hooks/useGetRecipe'

const ToCocktailsLink: React.VFC = () => {
	return (
		<Link href="/cocktails">
			<span className="text-sm text-red-600 underline">
				＜ カクテル一覧ページへ戻る
			</span>
		</Link>
	)
}

export const CocktailRecipe: React.VFC = () => {
	const { uuid } = useContext(Context)
	if (!uuid) pushHome()

	const router = useRouter()
	const cocktailId = Number(router?.query.id)
	const { loading, recipe } = useGetRecipe(cocktailId)

	return (
		<Layout>
			<ContentWraper>
				<ToCocktailsLink />
				<div id="cocktailContent" className="py-3">
					{loading || !recipe ? (
						<p>ローディング中</p>
					) : (
						<>
							<div className="flex p-2 m-4">
								<CocktailImg recipe={recipe} />
								<Typography
									variant="h6"
									gutterBottom
									component="div"
									className="place-self-center"
								>
									{recipe.name}
								</Typography>
							</div>
							<div id="cocktailIngredients" className="py-4">
								<Typography variant="h5" gutterBottom component="div">
									材料
								</Typography>
								<div className="">
									{recipe?.ingredients?.map((ingredient: any, i: number) => {
										return (
											<Box
												key={i}
												sx={{
													display: 'flex',
													justifyContent: 'space-between',
												}}
											>
												<Typography variant="body1" gutterBottom>
													{ingredient.name}
												</Typography>
												<Typography variant="body1" gutterBottom>
													{ingredient.amount}
													{ingredient.unit}
												</Typography>
											</Box>
										)
									})}
								</div>
							</div>
							<div id="cocktaildrinkmethod" className="py-4">
								<Typography variant="h5" gutterBottom component="div">
									材料
								</Typography>
								<Typography variant="h6" gutterBottom component="div">
									{recipe.drinkMethod}
								</Typography>
								<Typography variant="body1" gutterBottom>
									<p>{recipe.explanation}</p>
								</Typography>
							</div>
						</>
					)}
				</div>
				<ToCocktailsLink />
			</ContentWraper>
		</Layout>
	)
}
export default CocktailRecipe
