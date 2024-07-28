// /posts/xxx.md 경로에서 전체 파일을 읽어 드리고 파일명을 id로 한 리스트의 배열을 반환하는 함수
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

const currentFiles = fs.readdirSync(postsDirectory);

console.log(currentFiles.map((file) => file.replace(/\.md$/, "")));
