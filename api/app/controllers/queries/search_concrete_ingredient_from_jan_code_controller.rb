class Queries::SearchConcreteIngredientFromJanCodeController < ApplicationController
  def execute
    jan_code = params[:jan_code]
    concrete_ingredients = ConcreteIngredient.find_by(jan_code: jan_code)
    render json: concrete_ingredients if concrete_ingredients.present?

    # DBから見つかったとき
    # mock = {"found_from_database":true,"concrete_ingredient":{"id":670,"base_ingredient_id":1,"name":"サントリー ウイスキー","tag":"<a href=\"https://www.amazon.co.jp/%E8%A7%92%E7%93%B6-14999-%E3%82%B5%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC-%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC-700ml/dp/B01CXSRJHI/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC&qid=1593349775&s=food-beverage&sr=1-11&linkCode=li2&tag=c6tower-22&linkId=54b1c73ec0d658b95c5e537d3ea3c1bc&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B01CXSRJHI\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />","created_at":"2021-08-28T14:17:25.180Z","updated_at":"2021-08-29T11:50:10.230Z","img_src":"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"}}

    # DBから見つからずAmazon商品を検索したとき
    # mock = {"found_from_database":false,"result":[{"ASIN":"B092M6K7BQ","BrowseNodeInfo":{"BrowseNodes":[{"ContextFreeName":"ウイスキー","DisplayName":"ウイスキー","Id":"71626051","IsRoot":false}]},"DetailPageURL":"https://www.amazon.co.jp/dp/B092M6K7BQ?tag=ouchibar09-22&linkCode=osi&th=1&psc=1","Images":{"Primary":{"Medium":{"Height":160,"URL":"https://m.media-amazon.com/images/I/51lWNyPlWdS._SL160_.jpg","Width":160}}},"ItemInfo":{"Title":{"DisplayValue":"【シングルモルト グレーン ブレンデッド ウイスキー飲み比べセット】 白州 知多 碧AO [ ウイスキー 日本 700ml×3本 ]","Label":"Title","Locale":"ja_JP"}}},{"ASIN":"B005VB4IGA","BrowseNodeInfo":{"BrowseNodes":[{"ContextFreeName":"ウイスキー","DisplayName":"ウイスキー","Id":"71626051","IsRoot":false}]},"DetailPageURL":"https://www.amazon.co.jp/dp/B005VB4IGA?tag=ouchibar09-22&linkCode=osi&th=1&psc=1","Images":{"Primary":{"Medium":{"Height":160,"URL":"https://m.media-amazon.com/images/I/41-H2W6qLTL._SL160_.jpg","Width":160}}},"ItemInfo":{"Title":{"DisplayValue":"ブラックニッカ クリア [ ウイスキー 日本 4000ml ]","Label":"Title","Locale":"ja_JP"}}},{"ASIN":"B01D2TERB8","BrowseNodeInfo":{"BrowseNodes":[{"ContextFreeName":"ウイスキー","DisplayName":"ウイスキー","Id":"71626051","IsRoot":false}]},"DetailPageURL":"https://www.amazon.co.jp/dp/B01D2TERB8?tag=ouchibar09-22&linkCode=osi&th=1&psc=1","Images":{"Primary":{"Medium":{"Height":160,"URL":"https://m.media-amazon.com/images/I/41XDMbuEj+L._SL160_.jpg","Width":54}}},"ItemInfo":{"Title":{"DisplayValue":"サントリー ウイスキー 角瓶 [日本 4L ]","Label":"Title","Locale":"ja_JP"}}},{"ASIN":"B013WEDPHU","BrowseNodeInfo":{"BrowseNodes":[{"ContextFreeName":"ウイスキー","DisplayName":"ウイスキー","Id":"71626051","IsRoot":false}]},"DetailPageURL":"https://www.amazon.co.jp/dp/B013WEDPHU?tag=ouchibar09-22&linkCode=osi&th=1&psc=1","Images":{"Primary":{"Medium":{"Height":160,"URL":"https://m.media-amazon.com/images/I/41BgGfkgQkL._SL160_.jpg","Width":55}}},"ItemInfo":{"Title":{"DisplayValue":"サントリー ウイスキー トリス クラシック [日本 4000ml ]","Label":"Title","Locale":"ja_JP"}}},{"ASIN":"B011WPDV70","BrowseNodeInfo":{"BrowseNodes":[{"ContextFreeName":"ウイスキー","DisplayName":"ウイスキー","Id":"71626051","IsRoot":false}]},"DetailPageURL":"https://www.amazon.co.jp/dp/B011WPDV70?tag=ouchibar09-22&linkCode=osi&th=1&psc=1","Images":{"Primary":{"Medium":{"Height":160,"URL":"https://m.media-amazon.com/images/I/41dn1LoGjFL._SL160_.jpg","Width":52}}},"ItemInfo":{"Title":{"DisplayValue":"サントリー ウイスキー 知多 700ml","Label":"Title","Locale":"ja_JP"}}},{"ASIN":"B00FBC99XQ","BrowseNodeInfo":{"BrowseNodes":[{"ContextFreeName":"ウイスキー","DisplayName":"ウイスキー","Id":"71626051","IsRoot":false},{"ContextFreeName":"洋酒・リキュールギフト","DisplayName":"洋酒・リキュールギフト","Id":"4522747051","IsRoot":false}]},"DetailPageURL":"https://www.amazon.co.jp/dp/B00FBC99XQ?tag=ouchibar09-22&linkCode=osi&th=1&psc=1","Images":{"Primary":{"Medium":{"Height":160,"URL":"https://m.media-amazon.com/images/I/51jCAua9nGL._SL160_.jpg","Width":137}}},"ItemInfo":{"Title":{"DisplayValue":"シーバスリーガル ミズナラ 12年 ブレンデッドスコッチ [ ウイスキー スコットランド 700ml ]","Label":"Title","Locale":"ja_JP"}}},{"ASIN":"B09DJVXQJ9","BrowseNodeInfo":{"BrowseNodes":[{"ContextFreeName":"ウイスキー","DisplayName":"ウイスキー","Id":"71626051","IsRoot":false}]},"DetailPageURL":"https://www.amazon.co.jp/dp/B09DJVXQJ9?tag=ouchibar09-22&linkCode=osi&th=1&psc=1","Images":{"Primary":{"Medium":{"Height":160,"URL":"https://m.media-amazon.com/images/I/51uN9hh9jEL._SL160_.jpg","Width":160}}},"ItemInfo":{"Title":{"DisplayValue":"バランタイン シングルモルト グレンバーギー 12年 [ ウイスキー イギリス 700ml ] [ギフトBox入り]","Label":"Title","Locale":"ja_JP"}}},{"ASIN":"B07ZQWNJ1J","BrowseNodeInfo":{"BrowseNodes":[{"ContextFreeName":"ウイスキー","DisplayName":"ウイスキー","Id":"71626051","IsRoot":false}]},"DetailPageURL":"https://www.amazon.co.jp/dp/B07ZQWNJ1J?tag=ouchibar09-22&linkCode=osi&th=1&psc=1","Images":{"Primary":{"Medium":{"Height":160,"URL":"https://m.media-amazon.com/images/I/41kt5c2l+lL._SL160_.jpg","Width":160}}},"ItemInfo":{"Title":{"DisplayValue":"富士乃森（金ラベル） (THE FUJINOMORI WHISKY） 4000ml 37度 ザ フジノモリ ウィスキー 日本国産 ブレンデット ウイスキー 富士乃森","Label":"Title","Locale":"ja_JP"}}},{"ASIN":"B00WSEVQ9A","BrowseNodeInfo":{"BrowseNodes":[{"ContextFreeName":"ウイスキー","DisplayName":"ウイスキー","Id":"71626051","IsRoot":false}]},"DetailPageURL":"https://www.amazon.co.jp/dp/B00WSEVQ9A?tag=ouchibar09-22&linkCode=osi&th=1&psc=1","Images":{"Primary":{"Medium":{"Height":160,"URL":"https://m.media-amazon.com/images/I/51mpT1K0Q1L._SL160_.jpg","Width":153}}},"ItemInfo":{"Title":{"DisplayValue":"サントリー ウイスキー 響 JAPANESE HARMONY カートン付き [日本 700ml ]","Label":"Title","Locale":"ja_JP"}}},{"ASIN":"B01CXSRJHI","BrowseNodeInfo":{"BrowseNodes":[{"ContextFreeName":"ウイスキー","DisplayName":"ウイスキー","Id":"71626051","IsRoot":false}]},"DetailPageURL":"https://www.amazon.co.jp/dp/B01CXSRJHI?tag=ouchibar09-22&linkCode=osi&th=1&psc=1","Images":{"Primary":{"Medium":{"Height":160,"URL":"https://m.media-amazon.com/images/I/41QewqQQyjL._SL160_.jpg","Width":55}}},"ItemInfo":{"Title":{"DisplayValue":"サントリー ウイスキー 角瓶 [日本 700ml ]","Label":"Title","Locale":"ja_JP"}}}]}

    # DBから見つからずかつAmazon商品から見つからなかったとき
    mock = {"found_from_database":false,"result":[]}
    
    render json: mock
  end
end
