/* eslint-disable @next/next/no-img-element */
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import styles from "../../../styles/BlogCreation.module.scss"
import {FormEvent, useState} from "react";
import Container from "../../../components/Layout/Container";
import Button from "../../../components/Button/Button";
import { randomUUID } from "crypto";
import Router from "next/router";

const MDEditor = dynamic(
		// @ts-ignore

		() => import("@uiw/react-md-editor").then((mod) => mod.default),
		{ssr: false}
);

const PostBlog = async (e: FormEvent<HTMLDivElement>, title: string, content: string, file: File) => {
	e.preventDefault();
	alert("Blog Posted");
	const result = await fetch(
			"/api/blogs/create",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title,
					content,
					banner: file,
				}),
			}
	)
	const data = await result.json();
	Router.push(`/blogs/${data.blogID}`);
}

export default function BlogCreation() {
	const [value, setValue] = useState("");
	const [title, setTitle] = useState("");
	const [file, setFile] = useState<File | null>(null);

	const generateBlogID = () => {
		return randomUUID()
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			// @ts-ignore
			setFile(URL.createObjectURL(e.target.files[0]));
		}
	}

	// @ts-ignore
	return (
			<Container>
				<div className={styles.blogCreation} onSubmit={e => PostBlog(e, title, value, file! )}>
					{/*@ts-ignore*/}
					<img src={file} alt={"image"}/>
					<form>
						<div className={styles.item}>
							{/* @ts-ignore */}
							<label htmlFor={"title"}>Title</label>
							<input type={"text"} onChange={(e) => setTitle(e.target.value)} value={title} id={"title"}/>
						</div>
						<div className={styles.item}>
							{/*@ts-ignore*/}
							<label htmlFor={"banner"}>Banner</label>
							<input type={"file"} id={"banner"} onChange={e => handleFileChange(e)}/>
						</div>
						{/*@ts-ignore*/}
						<MDEditor value={value} onChange={setValue}/>

						<Button text={"Post"} type={"submit"}/>
					</form>
					{/*// @ts-ignore*/}
				</div>
			</Container>
	);
}

