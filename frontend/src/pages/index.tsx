import Head from "next/head";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import type {
  HeadingComponent,
  ReactMarkdownNames,
} from "react-markdown/src/ast-to-react";
import rehypeRaw from "rehype-raw";
import { useGetUser } from "src/utils/hooks/useGetUser";

const body = `
# カシスオレンジなどで有名なカシスリキュールについて徹底解説！

カシスリキュールを使ってお家時間をより豊かな時間に

## カシスリキュールやカシスオレンジの「カシス」って？

カシスとはベリー系の果物で、お酒の色と同じ赤黒い色をしています。同じベリー系と呼ばれるブルーベリー、ラズベリーなどとは実は別の科名でブルーベリーはツツジ科、ラズベリーはバラ科でカシスは雪ノ下科スグリ属と分かれています。
カシスは甘味が少なく酸味がとても強いため生食には適しておらず、ジャムやリキュールなどに加工して使われることがほとんどです。

## カシスリキュールってどんなの？

カシスリキュールはカシスを使用したリキュールです。リキュールとはお酒の一種で「蒸留酒と副原料のエキスを足したもの」とされています。つまりカシスを使用したお酒ですね。

## クレーム・ド・カシスってよく見るけど何なの？

クレーム・ド・カシスはカシスリキュールの中でも1Lあたり400g以上の糖を含み、アルコール度数も15度以上のものです。要するに一定の基準以上のカシスリキュールということです。アルコール度数は15度以上と言ってもほとんどが15~20度のためカクテルにすると程よい強さになります。

## どっちがおすすめ？

個人的にはクレーム・ド・カシスをおすすめします。理由としては、より甘いためアルコール感があまり感じられず非常に飲みやすいからです。甘いのが苦手な方はクレーム・ドでない方を選ぶといいと思います。
筆者オススメのカシスリキュールを使ったカクテル3選！

------------------------------------------------

## 1.カシスソーダ

カシスソーダはなんとカシスを無味の炭酸水で割るだけ！カシスの風味と甘さをダイレクトに味わうことの出来るカクテルです！
カシスリキュール：炭酸水 = 3:7 
程度が一般的な比率になっています。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ouchibar09-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B001TP6UHC&linkId=75885737b2da6f1a043b553336ba6e8a"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ouchibar09-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01CNBT7NY&linkId=9121ed76517cad00cfdb4312caac257f"></iframe>

## 2.エル・ディアブロ

「ディアブロ」とは「悪魔」という意味で、他のカシスリキュールを使ったカクテルより度数の高いものです。作り方は
- テキーラ：45ml
- カシスリキュール：15ml
- レモンジュース：10ml
- ジンジャーエール：適量
です。テキーラがあることで敬遠されがちですが、カシスリキュールと混ぜることでテキーラ独特の味がかなり緩和されます。また、レモンジュースやジンジャーエールによって酸味と甘さが増すのでテキーラ嫌いしている方にも飲んで欲しいカクテルです。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ouchibar09-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B00P0KJR2M&linkId=e54d0be085b9012ae54d0b9febe97b6d"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ouchibar09-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B001TP6UHC&linkId=b56411d4b3fb3b2e4968ab2b1d346af9"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ouchibar09-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08MQ6ZXR7&linkId=ae87d8c9ad1e48d7daab21bdb7f7018e"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ouchibar09-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0029VKCME&linkId=7be8628ea353d82b1bee4935b251f3d5"></iframe>

## 3.カーディナル

カーディナルは「キール」というワインとカシスリキュールを使ったカクテルの派生形で、ベースの白ワインを赤ワインに変えたものです。カーディナルは「枢機卿」という意味ですが、名前の由来はカーディナルの深い赤色が高い地位の人が身に纏うケープの色に似ていたからだと言われています。一般的な作り方は
赤ワイン：カシスリキュール = 4:1
です。
ちなみに、本来は赤ワインにはボジョレーヌーヴォーワインを用いるのが正攻法だとか。ただ、ライトからミディアムボディのものでも美味しく仕上がるので色々と試してみると面白そうです。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ouchibar09-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B002JNAK8I&linkId=b015ffb1f8f18acdd464cc5580a288aa"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ouchibar09-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B001TP6UHC&linkId=1f3f9f82ff013670bbd37e62f82cef12"></iframe>

## さいごに

拙文ではありますが、最後までお読みいただきありがとうございました！

外で自由気ままにお酒を飲みにくいご時世、自宅で気軽に楽しくお酒を飲む方法はないかと試行錯誤し、「お家のお酒とコンビニで買えるもので作れるカクテルを探せる」ことをコンセプトにした取り組みを始めました。
noteの更新や、楽しんでもらえるwebアプリのリリースを目指して活動中ですので、気になる方はぜひフォローやシェアなどで温かく見守りいただければと思います！

> 『Amazonアソシエイトプログラム』
> 当ブログはamazon.co.jpを宣伝しリンクすることによって、サイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイト宣伝プログラムである、Amazonアソシエイト・プログラムの参加者です。`;

type MarkdownType = HeadingComponent | ReactMarkdownNames;

const Heading1: MarkdownType = ({ node, children }): JSX.Element => {
  return <h1 className="pt-8 pb-4 text-3xl">{children}</h1>;
};

const Heading2: MarkdownType = ({ node, children }): JSX.Element => {
  return <h2 className="pt-8 pb-4 text-2xl">{children}</h2>;
};

const Heading3: MarkdownType = ({ node, children }): JSX.Element => {
  return <h3 className="pt-8 pb-4 text-lg">{children}</h3>;
};

const Home = () => {
  const router = useRouter();
  const { getUserFn } = useGetUser();
  const handleClick = () => {
    getUserFn();
    router.push("/sakagura");
  };
  return (
    <div className="pt-28">
      <Head>
        <title className="">Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto w-full md:w-3/5">
        <Markdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: Heading1,
            h2: Heading2,
            h3: Heading3,
          }}
        >
          {body}
        </Markdown>
      </div>
    </div>
  );
};

export default Home;
