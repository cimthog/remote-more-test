import React, { useState, useEffect } from "react";
import { Button, Card } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ReactMarkdown from "react-markdown";

const ProjectDetails = ({ currentRepo, goBack }) => {
	const [readMe, setReadMe] = useState(null);
	const [loading, setLoading] = useState(false);
	const repoUrl = currentRepo.contents_url;

	useEffect(() => {
		const fetchReadMe = async () => {
			setLoading(true);
			const res = await fetch(`${repoUrl.slice(0, repoUrl.length - 7)}`);
			const data = await res.json();
			const readMe = data.find(
				(content) => content.name.split(".")[0].toLowerCase() === "readme"
			);
			const rawFileLink = readMe.download_url.replace(
				"github.com",
				"raw.githubusercontent.com"
			);
			const readMeData = await fetch(rawFileLink);
			const readMeText = await readMeData.text();
			setReadMe(readMeText);
			setLoading(false);
		};

		fetchReadMe();
	}, [repoUrl]);

	const title = (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				width: "50%",
			}}>
			<Button onClick={goBack} icon={<ArrowLeftOutlined />}>
				Back
			</Button>
			<h3>
				<strong>Read Me</strong>
			</h3>
		</div>
	);

	return (
		<Card title={<strong>{currentRepo.name}</strong>}>
			<Card loading={loading} title={title}>
				{readMe && <ReactMarkdown>{readMe}</ReactMarkdown>}
			</Card>
		</Card>
	);
};

export default ProjectDetails;
