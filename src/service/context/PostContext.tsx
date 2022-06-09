import { createContext, Key, useEffect, useState } from 'react';
import Client from '../../data/client';

const PostContext = createContext<PostContext>({ getPostsByComum: () => { } });

interface PostContext {
	posts?: PostsProps[],
	getPostsByComum: (tech: string | string[]) => void
}

interface PostsProps {
	id?: string
	avatar?: string,
	content?: string,
	email?: string,
	tech?: string,
	likes?: string[],
	userName?: string,
	userNick?: string,
}

export function PostProvider(props: any) {
	const [posts, setPosts] = useState<PostsProps[]>([]);

	async function getPostsByComum(tech: string | string[]) {
		try {
			const data = await Client.post('/post/getByComum', { tech }).then((res) => {
				console.log(res.data)
				setPosts(res.data);
			})
		} catch (error: any) {
			console.log(error.response.data.error)
		}
	}

	return (
		<PostContext.Provider value={{ posts, getPostsByComum }}>
			{props.children}
		</PostContext.Provider>
	)
}

export default PostContext;
