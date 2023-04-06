import Image from "next/image";
import Layout from "@/components/layout";

import { getSlugs, getSinglePostData } from "@/utils/posts";

export default function Post(prop) {
	const { image, title, date, body } = prop.postData;
	return (
		<Layout>
			<p>{date}</p>
			<h1>{title}</h1>
			<h3>{body}</h3>
			<Image
				src={image}
				width={400}
				height={350}
				alt={title}
			/>
		</Layout>
	);
}

export const getStaticPaths = () => {
	const paths = getSlugs();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = ({ params }) => {
	const postData = getSinglePostData(params.slug);
	return {
		props: {
			postData,
		},
	};
};
