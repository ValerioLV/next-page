import { postsJson } from "@/pages/api/posts/posts";

export const getPosts = () => {
	return postsJson[0];
};

export const getSlugs = () => {
	let slugs = [];
	getPosts().map((post) => {
		slugs.push(`/blog/${post.slug}`);
	});
	return slugs;
};

export const getSinglePostData = (slug) => {
	let onePost = null;
	getPosts().map((post) => {
		if (post.slug == slug) {
			onePost = post;
			return;
		}
	});
	return onePost;
};
