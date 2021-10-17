import matter from "gray-matter";
import type { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const blogs = ((context: __WebpackModuleApi.RequireContext) => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key: any, index: number) => {
      const slug = key.replace(/^.*[\\/]/, "").slice(0, -3);
      const value: any = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        slug: slug,
      };
    });
    return data;
  })(require.context("src/static/blogData", true, /\.\/.*\.md$/));

  const sortingArticles = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id;
  });

  return {
    props: {
      blogs: sortingArticles,
    },
  };
};

const BlogList: React.VFC = (props: any) => {
  return (
    <>
      <div className="relative w-full text-center">
        <div className="absolute inset-x-0 top-1/2 z-10 w-full text-base font-bold text-white transform -translate-y-1/2">
          <h1 className="text-xl leading-10">
            持ってるお酒をコレクション
            <br />
            作れるカクテルを見つけよう
          </h1>
        </div>
        <Image
          src="/bar-top.png"
          alt="お家barのイメージ"
          width={750}
          height={856}
          layout="responsive"
        />
      </div>
      <div className="mx-auto w-full max-w-[320px]">
        <p className="py-2 my-4 w-full text-base font-bold text-gray-500 border-b border-gray-400 border-dashed">
          カクテル記事一覧
        </p>
        {props.blogs.map((v: any) => {
          return (
            <Link key={v.frontmatter.id} href={`/blog/${v.slug}`}>
              <div className="p-4 w-full hover:text-barOrange-4 rounded border-b border-gray-400 border-solid">
                <p className="text-sm font-bold">{v.frontmatter.title}</p>
                <p className="pt-2 text-xs text-right">
                  投稿日: {v.frontmatter.date}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
