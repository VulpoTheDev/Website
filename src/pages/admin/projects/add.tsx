/* eslint-disable @next/next/no-img-element */
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import styles from "../../../styles/ProjectCreation.module.scss";
import { FormEvent, useState } from "react";
import Container from "../../../components/Layout/Container";
import Button from "../../../components/Button/Button";
import { randomUUID } from "crypto";
import Router from "next/router";

const MDEditor = dynamic(
  // @ts-ignore

  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

const AddProject = async (
  e: FormEvent<HTMLDivElement>,
  projectName: string,
  description: string,
  file: File
) => {
  e.preventDefault();
  alert("Project Added");
  const result = await fetch("/api/projects/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      projectName,
      description,
      icon: file,
    }),
  });
  const data = await result.json();
  Router.push(`/projects/${data.blogID}`);
};

export default function BlogCreation() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [type, setType] = useState("Website");
  const [technologies, setTechnologies] = useState([]);
  const [image, setImage] = useState(null);

  const generateProjectID = () => {
    return randomUUID();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // @ts-ignore
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  // @ts-ignore
  return (
    <Container>
      <div
        className={styles.blogCreation}
        onSubmit={(e) => AddProject(e, title, content, file!)}
      >
        {/*@ts-ignore*/}
        <img src={file} alt={"image"} />
        <form>
          <div className={styles.item}>
            {/* @ts-ignore */}
            <label htmlFor={"title"}>Project Name</label>
            <input
              type={"text"}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              id={"title"}
            />
          </div>
          <div className={styles.item}>
            {/*@ts-ignore*/}
            <label htmlFor={"icon"}>Icon</label>
            <input
              type={"file"}
              id={"icon"}
              onChange={(e) => handleFileChange(e)}
            />
          </div>
          <div className={styles.item}>
            {/* @ts-ignore */}
            <label htmlFor={"description"}>Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id={"description"}
            />
          </div>
          <div className={styles.item}>
            <label htmlFor={"type"}>Project Type</label>
            <select name="type" id="type">
              <option>Discord Bot</option>
              <option>Website</option>
              <option>Website/Discord Bot</option>
              <option>Application</option>
              <option>Other</option>
            </select>
          </div>
          <div className={styles.item}>
            <label htmlFor={"type"}>
              Technologies (Seperated with {'"'},{'"'})
            </label>
            <textarea></textarea>
          </div>
          {/*// @ts-ignore*/}
          <MDEditor value={content} onChange={setContent} />
          <Button text={"Add"} type={"submit"} />
        </form>
      </div>
    </Container>
  );
}
