import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = () : PostMetadata[] => {
    const folder = "post/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    // const slugs = markdownPosts.map((file) => file.replace(".md", "" ));
    // return slugs;
    const post = markdownPosts.map((fileName)=>{
        const fileContents = fs.readFileSync(`post/${fileName}`, "utf-8");
        const matterResult = matter(fileContents);
        return{
            title : matterResult.data.title,
            date : matterResult.data.date,
            subtitle : matterResult.data.subtitle,
            slug : fileName.replace(".md" ,""),
        };

    });

    return post;
}; 

export default getPostMetadata;