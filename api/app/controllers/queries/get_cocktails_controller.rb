class Queries::GetCocktailsController < ApplicationController
  def execute
    mock = {
      "cocktails": [
        {
          "id": 1,
          "name": "．50キャリバー",
          "strength": 36,
          "cook_explanation": "氷を入れたハイボールグラスに材料を注ぎステア、最後にソーダを加える。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 496,
          "name": "アデレ・スペシャル",
          "strength": 37.7,
          "cook_explanation": "ステアして、カクテル・グラスに注ぐ。",
          "drink_method_id": 4,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 509,
          "name": "アトランタ・ブレーブ",
          "strength": 28.6,
          "cook_explanation": "シェークしカクテルグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 522,
          "name": "アドリー",
          "strength": 36.4,
          "cook_explanation": "シェークしカクテルグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 1004,
          "name": "アラノフ",
          "strength": 26.7,
          "cook_explanation": "ピッチャーに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 1144,
          "name": "アロハ",
          "strength": 29.1,
          "cook_explanation": "シェークしカクテルグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 1148,
          "name": "アロハ・スクリュードライバー",
          "strength": 7.5,
          "cook_explanation": "氷とともにブレンドしグラスに注ぐ",
          "drink_method_id": 3,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 1149,
          "name": "アロハ・スクリュードライバー",
          "strength": 6.7,
          "cook_explanation": "氷を入れたハイボールグラスに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 2,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 1485,
          "name": "ウイスキー・ オレンジ・ ザ・ イェスペリアン・ ウェイ",
          "strength": 29.3,
          "cook_explanation": "サワーグラスに材料を注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 1518,
          "name": "ウイスキー・ミスト",
          "strength": 22,
          "cook_explanation": "氷とともにシェークして、オールドファッションド・グラスに氷も一緒に入れ、レモンピールを絞りかける。",
          "drink_method_id": 2,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 1552,
          "name": "ウインストン・チャーチル・マティーニ",
          "strength": 36.4,
          "cook_explanation": "ジンをステアしカクテルグラスに注ぐ。",
          "drink_method_id": 4,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 1641,
          "name": "ウォータールー",
          "strength": 13.2,
          "cook_explanation": "氷を入れたタンブラーにラムとジュースを注ぎ、最後にマンダリンを落とす",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 1679,
          "name": "ウオッカ・オレンジ",
          "strength": 9.2,
          "cook_explanation": "氷を入れたハイボールグラスに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 1745,
          "name": "ＡＳＵガール",
          "strength": 13.4,
          "cook_explanation": "氷とともにブレンドしグラスに注ぐ。",
          "drink_method_id": 3,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 1750,
          "name": "エージェント・オレンジ",
          "strength": 13.1,
          "cook_explanation": "氷を入れたハイボールグラスに材料を注ぎステア。",
          "drink_method_id": 2,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 2125,
          "name": "オグデン・スタイル",
          "strength": 33.9,
          "cook_explanation": "シェークし氷を入れたハイボールグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 2193,
          "name": "オレンジ・クライマックス",
          "strength": 8.7,
          "cook_explanation": "シェークしカクテルグラスに注ぎ、生クリームを乗せる。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 2195,
          "name": "オレンジ・クラッシュ",
          "strength": 24.2,
          "cook_explanation": "シェークしカクテルグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 2213,
          "name": "オレンジ・ブロッサム",
          "strength": 27,
          "cook_explanation": "シェークして、カクテル・グラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 2482,
          "name": "カラマズー",
          "strength": 8.9,
          "cook_explanation": "ステアし氷を入れたハイボールグラスに注ぐ。",
          "drink_method_id": 4,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 2760,
          "name": "キャシディー・ミスト",
          "strength": 15,
          "cook_explanation": "氷を入れたオールドファッションド・グラスに注ぎソーダを満たす。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 2905,
          "name": "キューバン・スクリュー",
          "strength": 0,
          "cook_explanation": "氷を入れたタンブラーに材料を注ぎ軽くステア",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 3027,
          "name": "クイック・セックス・オン・ザ・ビーチ",
          "strength": 27.7,
          "cook_explanation": "シェークしカクテルグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 3197,
          "name": "グッド・オールド・ボーイズ",
          "strength": 36.4,
          "cook_explanation": "シェークしカクテルグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 3246,
          "name": "グラン・マルニエ・オレンジ",
          "strength": 11.2,
          "cook_explanation": "氷を入れたグラスに材料を注ぎ軽くステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 3247,
          "name": "グラン・マルニエ・オン・アイス",
          "strength": 15,
          "cook_explanation": "ロックグラスに氷を入れリキュールを注ぎオレンジスライスを飾る。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 3447,
          "name": "ケンタッキー・カクテル",
          "strength": 25.2,
          "cook_explanation": "シェークしカクテルグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 3699,
          "name": "ゴールデン・スクリュー",
          "strength": 15,
          "cook_explanation": "大型のタンブラーにウオッカを注ぎ、オレンジ・ジュースを満たす。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 3712,
          "name": "ゴールデン・ドロップ・マティーニ",
          "strength": 36.8,
          "cook_explanation": "ステアしカクテルグラスに注ぎ、レモンピールを飾る。",
          "drink_method_id": 4,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4008,
          "name": "ザ・ハーフアス・マティーニ",
          "strength": 36.4,
          "cook_explanation": "シェークしカクテルグラスに注ぎオリーブ2個をカクテルピンに指し手飾る。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4054,
          "name": "Ｃ．Ｃ．セブン",
          "strength": 11.2,
          "cook_explanation": "氷を入れたコリンズグラスに材料を入れ軽くステア、レモンスライスを飾る。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4104,
          "name": "シカゴ・マティーニ",
          "strength": 36.9,
          "cook_explanation": "ステアしカクテルグラスに注ぎ、オリーブを飾る。",
          "drink_method_id": 4,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4116,
          "name": "シックス・ワイズマン",
          "strength": 40.8,
          "cook_explanation": "氷を入れたオールドファッションドグラスに材料を注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4135,
          "name": "シナモン・ツイスト",
          "strength": 36.4,
          "cook_explanation": "ステアしカクテルグラスに注ぎ、レッド・ホット・キャンディを沈める。",
          "drink_method_id": 4,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4276,
          "name": "シルク・パンティー",
          "strength": 28.6,
          "cook_explanation": "冷やした材料をショットグラスに注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4297,
          "name": "シルバー・ブレット",
          "strength": 37,
          "cook_explanation": "シェークしカクテルグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4430,
          "name": "ジャック・アンド・デュワニー",
          "strength": 9.7,
          "cook_explanation": "氷を入れたオールドファッションドグラスに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4449,
          "name": "ジャック・スプライト",
          "strength": 11.8,
          "cook_explanation": "氷を入れたグラスに材料を注ぎレモンスライスを飾る。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4453,
          "name": "ジャックナイフ",
          "strength": 13.3,
          "cook_explanation": "氷を入れたオールドファッションド・グラスに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4613,
          "name": "ジンガー",
          "strength": 11.5,
          "cook_explanation": "グラスに材料を注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4709,
          "name": "スウィート・パトゥーティー",
          "strength": 27.3,
          "cook_explanation": "シェークしカクテルグラスに注ぐ",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4730,
          "name": "スカイドライバー",
          "strength": 11.2,
          "cook_explanation": "氷を入れたハイボールグラスに材料を注ぎ、オレンジスライスを飾る。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4753,
          "name": "スクリュードライバー",
          "strength": 12,
          "cook_explanation": "氷を入れたタンブラーに注ぎ、ステアする。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4754,
          "name": "スクリューボール",
          "strength": 9.4,
          "cook_explanation": "氷を入れたハイボールグラスに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 4783,
          "name": "スコッチ・ミスト",
          "strength": 0,
          "cook_explanation": "オールドファッションド・グラスに細かくわった氷を詰め、ウイスキー注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 5002,
          "name": "スモーキー・マティーニ",
          "strength": 42.1,
          "cook_explanation": "ステアしカクテルグラスに注ぎ、オリーブを飾る。",
          "drink_method_id": 4,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 5024,
          "name": "スリー・ワイズ・メン",
          "strength": 37.3,
          "cook_explanation": "ショットグラスに注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 5031,
          "name": "スリッパリー・ノブ",
          "strength": 36.4,
          "cook_explanation": "シェークしカクテルグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 5113,
          "name": "セブン＆セブン",
          "strength": 11.2,
          "cook_explanation": "氷を入れたオールドファッションド・グラスにウイスキーを注ぎ、7-UPを満たす。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 5302,
          "name": "ダーク・マーク",
          "strength": 18.2,
          "cook_explanation": "よく冷やしたワイングラスに材料を注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 5366,
          "name": "ダス・マニング",
          "strength": 26.2,
          "cook_explanation": "氷を入れたグラスに材料を注ぎオレンジジュースを満たす。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 5758,
          "name": "テスト",
          "strength": 20,
          "cook_explanation": "氷を入れたタンブラーに注ぐ",
          "drink_method_id": 4,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 6301,
          "name": "ネイキッド・マティーニ",
          "strength": 36.4,
          "cook_explanation": "カクテルグラスにジンを注ぎ、冷凍庫で冷やし飲む際にオリーブを飾る。",
          "drink_method_id": 1,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 6339,
          "name": "ノーティ・ニック",
          "strength": 11.4,
          "cook_explanation": "氷を入れたグラスに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 6380,
          "name": "ハード・ミック",
          "strength": 15,
          "cook_explanation": "氷を入れたハイボールグラスにウオッカを注ぎ同量のオレンジ・ジュースとマウンテンデューを注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 6447,
          "name": "ハッピー・ハッピー",
          "strength": 15,
          "cook_explanation": "氷を入れたオールドファッションドに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 6521,
          "name": "ハワイアン",
          "strength": 26,
          "cook_explanation": "シェークして、カクテル・グラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 6523,
          "name": "ハワイアン",
          "strength": 22,
          "cook_explanation": "シェークして、カクテル・グラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 6526,
          "name": "ハワイアン・オレンジ・ブロッサム",
          "strength": 20,
          "cook_explanation": "シェークし氷を入れたグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 6531,
          "name": "ハワイアン・スクリュー",
          "strength": 11.2,
          "cook_explanation": "氷を入れたオールドファッションドグラスに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 6691,
          "name": "バーント・マティーニ",
          "strength": 37.3,
          "cook_explanation": "ステアしカクテルグラスに注ぐ",
          "drink_method_id": 4,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 6839,
          "name": "バッド・ハビット",
          "strength": 21.7,
          "cook_explanation": "氷と共にブレンドしオールドファッションドグラスに注ぐ。",
          "drink_method_id": 3,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7105,
          "name": "パーフェクト・キス",
          "strength": 8,
          "cook_explanation": "クラッシュドアイスを入れたマルガリータグラスに材料を注ぎ、スプライトを満たし、イチゴを飾る。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7106,
          "name": "パーフェクト・デイ",
          "strength": 17.1,
          "cook_explanation": "氷を入れたオールドファッションドグラスに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7528,
          "name": "PMS",
          "strength": 0,
          "cook_explanation": "氷を入れたコリンズグラスに材料を注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7562,
          "name": "ピーチ・ボウル",
          "strength": 5.5,
          "cook_explanation": "氷を入れたハイボールグラスに注ぎオレンジスライスを飾る。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7682,
          "name": "フーラ・フーラ",
          "strength": 0,
          "cook_explanation": "シェークして、カクテル・グラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7727,
          "name": "ファジー・ニップル",
          "strength": 10.8,
          "cook_explanation": "シェークし氷を入れたハイボールグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7728,
          "name": "ファジー・ネーブル",
          "strength": 25.5,
          "cook_explanation": "カクテルグラスに表記の順に材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7729,
          "name": "ファジー・ネーブル",
          "strength": 7.4,
          "cook_explanation": "キューブ・アイスをつめたハイボール・グラスに材料を注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7730,
          "name": "ファジー・ネーブル",
          "strength": 4,
          "cook_explanation": "キューブ・アイスをつめたハイボール・グラスに材料を注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7735,
          "name": "ファジー・ピスボム",
          "strength": 12,
          "cook_explanation": "氷を入れたオールドファッションドグラスに注ぎよくステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7736,
          "name": "ファジー・フ●●カー",
          "strength": 10.8,
          "cook_explanation": "ハイボールグラスに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7748,
          "name": "ファジー・ロジック",
          "strength": 18.1,
          "cook_explanation": "シェークし氷を入れたハリケーングラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7959,
          "name": "フライング・ダッチマン",
          "strength": 15.2,
          "cook_explanation": "シェークし氷を入れたロックグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 7972,
          "name": "フラフープ",
          "strength": 18.2,
          "cook_explanation": "シェークしカクテルグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 8005,
          "name": "フルーツ・センセーション",
          "strength": 10.5,
          "cook_explanation": "氷ををいれたコリンズグラスに材料を注ぎステア。",
          "drink_method_id": 2,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 8038,
          "name": "フレッシュ・モーニング",
          "strength": 12.1,
          "cook_explanation": "シェークしサワーグラスに注ぐ",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 8148,
          "name": "ブードゥー・デュー",
          "strength": 21.9,
          "cook_explanation": "氷を入れたグラスに材料を注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 8420,
          "name": "ブルー・グース・マティーニ",
          "strength": 36.4,
          "cook_explanation": "ウオッカをカクテルグラスに注ぎ、ブルーチーズを詰めたオリーブを飾る。",
          "drink_method_id": 1,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 8539,
          "name": "ブローテッド・ バッグ・ オブ・ モンキー・ スパンク",
          "strength": 15.6,
          "cook_explanation": "シェークし氷を入れたコリンズグラスに注ぎ、マラスキーノチェリーを飾る。",
          "drink_method_id": 2,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 8675,
          "name": "へアスプレイ",
          "strength": 22.5,
          "cook_explanation": "氷を入れたハイボールグラスに材料を注ぎ、レモンツイストを飾る。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 8681,
          "name": "ヘアリー・ネーブル",
          "strength": 8.9,
          "cook_explanation": "材料をタンブラーに注ぎ、軽くステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 8682,
          "name": "ヘアリー・ネーブル",
          "strength": 12.6,
          "cook_explanation": "氷と共にブレンドしハイボールグラスに注ぐ。",
          "drink_method_id": 3,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 8684,
          "name": "ヘアリー・ビッチ",
          "strength": 22.5,
          "cook_explanation": "ステアしソーサ型氷を入れたシャンパングラスに注ぐ。",
          "drink_method_id": 4,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 9542,
          "name": "マリブ・デライト",
          "strength": 13.3,
          "cook_explanation": "氷を入れたハイボールグラスに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 9960,
          "name": "ヤンキー・プリンス",
          "strength": 36.4,
          "cook_explanation": "シェークして、カクテル・グラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 9966,
          "name": "ユーコン・デュー・ミー",
          "strength": 8,
          "cook_explanation": "氷を入れたグラスに材料を注ぎステア。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 10321,
          "name": "リアリー・ドライ・マティーニ",
          "strength": 36.4,
          "cook_explanation": "ステアしカクテルグラスに注ぎ、オリーブ2個を飾る。",
          "drink_method_id": 4,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 10341,
          "name": "リッチー５０",
          "strength": 20,
          "cook_explanation": "氷を入れたハリケーングラスに材料を注ぎチェリーを飾る。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 10355,
          "name": "リトル・ディックル・ドゥ",
          "strength": 15.8,
          "cook_explanation": "氷を入れたオールドファッションドグラスに材料を注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 10622,
          "name": "レモンハート・オレンジ",
          "strength": 11.2,
          "cook_explanation": "氷を入れたタンブラーに注ぎ軽くステア",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 10655,
          "name": "ロード・キル",
          "strength": 50.3,
          "cook_explanation": "冷やした材料をショットグラスに注ぐ",
          "drink_method_id": 1,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 10726,
          "name": "ロッキーズ・ジレンマ",
          "strength": 36.4,
          "cook_explanation": "ステアしカクテルグラスに注ぐ。",
          "drink_method_id": 4,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 10729,
          "name": "ロッキー・マウンテン・クーラー",
          "strength": 4.6,
          "cook_explanation": "氷を入れたコリンズグラスに材料を注ぐ。",
          "drink_method_id": 1,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 10798,
          "name": "ワイキキ・ビーチコマー",
          "strength": 27.3,
          "cook_explanation": "シェークしカクテルグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 10865,
          "name": "ヴァイトクス",
          "strength": 27.1,
          "cook_explanation": "シェークしカクテルグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 3,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        },
        {
          "id": 10868,
          "name": "ヴィラ・パーク",
          "strength": 22.5,
          "cook_explanation": "よくシェークし氷を入れたハイボールグラスに注ぐ。",
          "drink_method_id": 2,
          "glass_type_id": 1,
          "created_at": "2021-08-28T14:07:48.259Z",
          "updated_at": "2021-08-28T14:07:48.259Z"
        }
      ]
    }
    render json: mock
  end
end
