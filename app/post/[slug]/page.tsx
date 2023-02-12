import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "components/getPostMetadata";

const getPostContent = (slug: string) => {
    const folder = "post/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () =>{
    const post = getPostMetadata()
    // return [{slug: "LondonPost"}];
    return post.map ((post) =>({
        slug :post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return(
        <div>
            <h1 className="inline-block mt-100 font-medium tracking-wider ">{post.data.title}</h1>
            <article className="prose lg:prose-x3 ">
            <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;