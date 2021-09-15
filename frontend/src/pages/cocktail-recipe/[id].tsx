import type { VFC } from "react";

let cocktail : {
		id: 1,
		name: "．50キャリバー",
		strength: 36,
		cook_explanation: "氷を入れたハイボールグラスに材料を注ぎステア、最後にソーダを加える。",
		drink_method_id: 1,
		glass_type_id: 1,
		created_at: "2021-08-28T14:07:48.259Z",
		updated_at: "2021-08-28T14:07:48.259Z",
		drink_method: {
			id: 1,
			name: "Build",
			created_at: "2021-08-28T14:04:37.344Z",
			updated_at: "2021-08-28T14:04:37.344Z"
		},
		glass_type: {
			id: 1,
			name: "Long",
			created_at: "2021-08-28T14:04:37.399Z",
			updated_at: "2021-08-28T14:04:37.399Z"
		},
		ingredients: [
			{
				id: 1,
				base_ingredient_id: 1,
				base_drink_id: 1,
				amount: "60",
				additional_explanation: null,
				unit_id: 1,
				created_at: "2021-08-28T14:17:05.249Z",
				updated_at: "2021-08-28T14:17:05.249Z",
				base_ingredient: {
					id: 1,
					name: "ウイスキー",
					created_at: "2021-08-28T14:04:37.494Z",
					updated_at: "2021-08-28T14:04:37.494Z"
				},
				concrete_ingredients: [
					{
						id: 671,
						base_ingredient_id: 1,
						name: "バーボンウイスキー ジムビーム",
						tag: "<a href=\"https://www.amazon.co.jp/JIM-BEAM-%E3%82%B8%E3%83%A0%E3%83%93%E3%83%BC%E3%83%A0-%E3%83%90%E3%83%BC%E3%83%9C%E3%83%B3%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC-1750ml/dp/B01H2UMXMI/ref=as_li_ss_il?SubscriptionId=AKIAJUSP4YZBXJNE2YFA&th=1&linkCode=li2&tag=c6tower-22&linkId=8142f541d6c447ed600ae91cf73f909a&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H2UMXMI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B01H2UMXMI\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
						created_at: "2021-08-28T14:17:25.180Z",
						updated_at: "2021-08-29T11:50:10.257Z",
						img_src: "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H2UMXMI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
					},
					{
						id: 670,
						base_ingredient_id: 1,
						name: "サントリー ウイスキー",
						tag: "<a href=\"https://www.amazon.co.jp/%E8%A7%92%E7%93%B6-14999-%E3%82%B5%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC-%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC-700ml/dp/B01CXSRJHI/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC&qid=1593349775&s=food-beverage&sr=1-11&linkCode=li2&tag=c6tower-22&linkId=54b1c73ec0d658b95c5e537d3ea3c1bc&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B01CXSRJHI\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
						created_at: "2021-08-28T14:17:25.180Z",
						updated_at: "2021-08-29T11:50:10.230Z",
						img_src: "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
					}
				],
				unit: {
					id: 1,
					name: "ml",
					created_at: "2021-08-28T14:04:37.768Z",
					updated_at: "2021-08-28T14:04:37.768Z"
				}
			},
			{
				id: 2,
				base_ingredient_id: 1,
				base_drink_id: 1,
				amount: "60",
				additional_explanation: null,
				unit_id: 1,
				created_at: "2021-08-28T14:17:05.249Z",
				updated_at: "2021-08-28T14:17:05.249Z",
				base_ingredient: {
					id: 1,
					name: "ウイスキー",
					created_at: "2021-08-28T14:04:37.494Z",
					updated_at: "2021-08-28T14:04:37.494Z"
				},
				concrete_ingredients: [
					{
						id: 671,
						base_ingredient_id: 1,
						name: "バーボンウイスキー ジムビーム",
						tag: "<a href=\"https://www.amazon.co.jp/JIM-BEAM-%E3%82%B8%E3%83%A0%E3%83%93%E3%83%BC%E3%83%A0-%E3%83%90%E3%83%BC%E3%83%9C%E3%83%B3%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC-1750ml/dp/B01H2UMXMI/ref=as_li_ss_il?SubscriptionId=AKIAJUSP4YZBXJNE2YFA&th=1&linkCode=li2&tag=c6tower-22&linkId=8142f541d6c447ed600ae91cf73f909a&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H2UMXMI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B01H2UMXMI\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
						created_at: "2021-08-28T14:17:25.180Z",
						updated_at: "2021-08-29T11:50:10.257Z",
						img_src: "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H2UMXMI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
					},
					{
						id: 670,
						base_ingredient_id: 1,
						name: "サントリー ウイスキー",
						tag: "<a href=\"https://www.amazon.co.jp/%E8%A7%92%E7%93%B6-14999-%E3%82%B5%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC-%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC-700ml/dp/B01CXSRJHI/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC&qid=1593349775&s=food-beverage&sr=1-11&linkCode=li2&tag=c6tower-22&linkId=54b1c73ec0d658b95c5e537d3ea3c1bc&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B01CXSRJHI\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
						created_at: "2021-08-28T14:17:25.180Z",
						updated_at: "2021-08-29T11:50:10.230Z",
						img_src: "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
					}
				],
				unit: {
					id: 1,
					name: "ml",
					created_at: "2021-08-28T14:04:37.768Z",
					updated_at: "2021-08-28T14:04:37.768Z"
				}
			},
			{
				id: 3,
				base_ingredient_id: 2,
				base_drink_id: 1,
				amount: "60",
				additional_explanation: null,
				unit_id: 1,
				created_at: "2021-08-28T14:17:05.249Z",
				updated_at: "2021-08-28T14:17:05.249Z",
				base_ingredient: {
					id: 2,
					name: "ジン",
					created_at: "2021-08-28T14:04:37.494Z",
					updated_at: "2021-08-28T14:04:37.494Z"
				},
				concrete_ingredients: [
					{
						id: 76,
						base_ingredient_id: 2,
						name: "サントリー ビーフィーター ジン",
						tag: "<a href=\"https://www.amazon.co.jp/BEEFEATER-%E3%83%93%E3%83%BC%E3%83%95%E3%82%A3%E3%83%BC%E3%82%BF%E3%83%BC-%E3%82%B5%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC-%E3%82%B8%E3%83%B340%E5%BA%A6-700ml/dp/B001TYZWKY/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%B8%E3%83%B3&qid=1593354159&s=food-beverage&sr=1-4&linkCode=li2&tag=c6tower-22&linkId=8eab1a3a0df23f9884b26fd77b21ff77&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001TYZWKY&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B001TYZWKY\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
						created_at: "2021-08-28T14:17:25.180Z",
						updated_at: "2021-08-29T11:49:55.135Z",
						img_src: "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001TYZWKY&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
					}
				],
				unit: {
					id: 1,
					name: "ml",
					created_at: "2021-08-28T14:04:37.768Z",
					updated_at: "2021-08-28T14:04:37.768Z"
				}
			},
			{
				id: 4,
				base_ingredient_id: 3,
				base_drink_id: 1,
				amount: "60",
				additional_explanation: null,
				unit_id: 1,
				created_at: "2021-08-28T14:17:05.249Z",
				updated_at: "2021-08-28T14:17:05.249Z",
				base_ingredient: {
					id: 3,
					name: "ウォッカ",
					created_at: "2021-08-28T14:04:37.494Z",
					updated_at: "2021-08-28T14:04:37.494Z"
				},
				concrete_ingredients: [
					{
						id: 587,
						base_ingredient_id: 3,
						name: "ギルビーウォッカ",
						tag: "<a href=\"https://www.amazon.co.jp/GILBEYS-%E3%82%AE%E3%83%AB%E3%83%93%E3%83%BC-%E3%82%AE%E3%83%AB%E3%83%93%E3%83%BC%E3%82%A6%E3%82%A9%E3%83%83%E3%82%AB-37-5%E5%BA%A6-750ml/dp/B001TZ95FQ/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%A6%E3%82%A9%E3%83%83%E3%82%AB&qid=1593408369&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTzUwR1dISzUzWlExJmVuY3J5cHRlZElkPUExMDE1OTczM0JFQTlFT1Y0UzVHSSZlbmNyeXB0ZWRBZElkPUFVNlNHNjM3V1ZKSDgmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&linkCode=li2&tag=c6tower-22&linkId=4d1771c6fe91ea4bca6b1c218ac8b87c&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001TZ95FQ&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B001TZ95FQ\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
						created_at: "2021-08-28T14:17:25.180Z",
						updated_at: "2021-08-29T11:50:08.259Z",
						img_src: "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001TZ95FQ&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
					}
				],
				unit: {
					id: 1,
					name: "ml",
					created_at: "2021-08-28T14:04:37.768Z",
					updated_at: "2021-08-28T14:04:37.768Z"
				}
			},
			{
				id: 5,
				base_ingredient_id: 4,
				base_drink_id: 1,
				amount: "30",
				additional_explanation: null,
				unit_id: 1,
				created_at: "2021-08-28T14:17:05.249Z",
				updated_at: "2021-08-28T14:17:05.249Z",
				base_ingredient: {
					id: 4,
					name: "レモン・ライム・ソーダ",
					created_at: "2021-08-28T14:04:37.494Z",
					updated_at: "2021-08-28T14:04:37.494Z"
				},
				concrete_ingredients: [
					{
						id: 419,
						base_ingredient_id: 4,
						name: "スプライト",
						tag: "<a href=\"https://www.amazon.co.jp/%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88-%E3%82%B3%E3%82%AB%E3%83%BB%E3%82%B3%E3%83%BC%E3%83%A9-%E3%83%9A%E3%83%83%E3%83%88%E3%83%9C%E3%83%88%E3%83%AB-470ml%C3%9724%E6%9C%AC/dp/B00VPZRMAK/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2Z3F7EIMML18V&dchild=1&keywords=%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88&qid=1593479980&sprefix=supurai,aps,319&sr=8-3&linkCode=li2&tag=c6tower-22&linkId=49d9c08b73ba2ba7ba16bdebd76a919f&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00VPZRMAK&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B00VPZRMAK\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
						created_at: "2021-08-28T14:17:25.180Z",
						updated_at: "2021-08-29T11:50:04.463Z",
						img_src: "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00VPZRMAK&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
					}
				],
				unit: {
					id: 1,
					name: "ml",
					created_at: "2021-08-28T14:04:37.768Z",
					updated_at: "2021-08-28T14:04:37.768Z"
				}
			}
		]
};

export const CocktailRecipe:VFC = () => {

return(
<div>
    <p>＜ 手元のお酒の設定に戻る</p>
    <div id="cocktailContent">
      <p>{ cocktail.name }</p>
        <div id="cocktailIngredients">
        <p>材料</p>
            <div>
            {cocktail.ingredients.map((ingredient, i) => {
              return (
                <div key={i}>
                    <p>{ingredient.base_ingredient.name}</p>
                    <p>{ingredient.amount}</p>
                    <p>{ingredient.unit}</p>
                    <hr/>
                </div>
             );
             })}
            </div>
    </div>
      <div>
        <p>作り方</p>
        <p>{ cocktail.drink_method }</p>
        <p>{ cocktail.cook_explanation }</p>
      </div>
</div>
</div>
    );      
};
export default CocktailRecipe;