class Queries::SearchConcreteIngredientFromCategoryController < ApplicationController
  def execute
    mock = {
      "concrete_ingredients": [
        {
          "id": 670,
          "base_ingredient_id": 1,
          "name": "サントリー ウイスキー",
          "tag": "<a href=\"https://www.amazon.co.jp/%E8%A7%92%E7%93%B6-14999-%E3%82%B5%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC-%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC-700ml/dp/B01CXSRJHI/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC&qid=1593349775&s=food-beverage&sr=1-11&linkCode=li2&tag=c6tower-22&linkId=54b1c73ec0d658b95c5e537d3ea3c1bc&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B01CXSRJHI\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
          "created_at": "2021-08-28T14:17:25.180Z",
          "updated_at": "2021-08-29T11:50:10.230Z",
          "img_src": "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
        },
        {
          "id": 670,
          "base_ingredient_id": 1,
          "name": "サントリー ウイスキー",
          "tag": "<a href=\"https://www.amazon.co.jp/%E8%A7%92%E7%93%B6-14999-%E3%82%B5%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC-%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC-700ml/dp/B01CXSRJHI/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC&qid=1593349775&s=food-beverage&sr=1-11&linkCode=li2&tag=c6tower-22&linkId=54b1c73ec0d658b95c5e537d3ea3c1bc&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B01CXSRJHI\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
          "created_at": "2021-08-28T14:17:25.180Z",
          "updated_at": "2021-08-29T11:50:10.230Z",
          "img_src": "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
        }
      ]
    }
    render json: mock
  end
end
