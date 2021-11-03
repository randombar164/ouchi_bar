class Queries::ShowCocktailController < ApplicationController
  def execute
    mock = {
      "cocktail": {
        "id": 1,
        "name": "．50キャリバー",
        "strength": 36,
        "cook_explanation": "氷を入れたハイボールグラスに材料を注ぎステア、最後にソーダを加える。",
        "drink_method_id": 1,
        "glass_type_id": 1,
        "created_at": "2021-08-28T14:07:48.259Z",
        "updated_at": "2021-08-28T14:07:48.259Z",
        "drink_method": {
          "id": 1,
          "name": "Build",
          "created_at": "2021-08-28T14:04:37.344Z",
          "updated_at": "2021-08-28T14:04:37.344Z"
        },
        "glass_type": {
          "id": 1,
          "name": "Long",
          "created_at": "2021-08-28T14:04:37.399Z",
          "updated_at": "2021-08-28T14:04:37.399Z"
        },
        "ingredients": [
          {
            "id": 1,
            "cocktail_id": 1,
            "amount": "60",
            "additional_explanation": nil,
            "unit_id": 1,
            "created_at": "2021-08-28T14:17:05.249Z",
            "updated_at": "2021-08-28T14:17:05.249Z",
            "concrete_ingredient": {
              "id": 671,
              "base_ingredient_id": 1,
              "name": "バーボンウイスキー ジムビーム",
              "tag": "<a href=\"https://www.amazon.co.jp/JIM-BEAM-%E3%82%B8%E3%83%A0%E3%83%93%E3%83%BC%E3%83%A0-%E3%83%90%E3%83%BC%E3%83%9C%E3%83%B3%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC-1750ml/dp/B01H2UMXMI/ref=as_li_ss_il?SubscriptionId=AKIAJUSP4YZBXJNE2YFA&th=1&linkCode=li2&tag=c6tower-22&linkId=8142f541d6c447ed600ae91cf73f909a&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H2UMXMI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B01H2UMXMI\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
              "created_at": "2021-08-28T14:17:25.180Z",
              "updated_at": "2021-08-29T11:50:10.257Z",
              "img_src": "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H2UMXMI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
            },
            "unit": {
              "id": 1,
              "name": "ml",
              "created_at": "2021-08-28T14:04:37.768Z",
              "updated_at": "2021-08-28T14:04:37.768Z"
            }
          },
          {
            "id": 2,
            "cocktail_id": 1,
            "amount": "60",
            "additional_explanation": nil,
            "unit_id": 1,
            "created_at": "2021-08-28T14:17:05.249Z",
            "updated_at": "2021-08-28T14:17:05.249Z",
            "concrete_ingredient": {
              "id": 76,
              "base_ingredient_id": 2,
              "name": "サントリー ビーフィーター ジン",
              "tag": "<a href=\"https://www.amazon.co.jp/BEEFEATER-%E3%83%93%E3%83%BC%E3%83%95%E3%82%A3%E3%83%BC%E3%82%BF%E3%83%BC-%E3%82%B5%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC-%E3%82%B8%E3%83%B340%E5%BA%A6-700ml/dp/B001TYZWKY/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%B8%E3%83%B3&qid=1593354159&s=food-beverage&sr=1-4&linkCode=li2&tag=c6tower-22&linkId=8eab1a3a0df23f9884b26fd77b21ff77&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001TYZWKY&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B001TYZWKY\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
              "created_at": "2021-08-28T14:17:25.180Z",
              "updated_at": "2021-08-29T11:49:55.135Z",
              "img_src": "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001TYZWKY&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
            },
            "unit": {
              "id": 1,
              "name": "ml",
              "created_at": "2021-08-28T14:04:37.768Z",
              "updated_at": "2021-08-28T14:04:37.768Z"
            }
          }
        ]
      }
    }
    render json: mock
  end
end
