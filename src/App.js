import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";
import UserProjects from "./Pages/UserProjects";

import "antd/dist/antd.css";

const App = () => {
	const [repos, setRepos] = useState(null);
	const [currentRepo, setCurrentRepo] = useState(null);
	const myCarouselRef = useRef();

	useEffect(() => {
		const savedUserRepos = localStorage.getItem("user-repos");

		if (savedUserRepos) {
			setRepos(JSON.parse(savedUserRepos));
			myCarouselRef.current.next();
		}
	}, []);

	const showDetailsPage = (repos) => {
		setRepos(repos);
		localStorage.setItem("user-repos", JSON.stringify(repos));
		myCarouselRef.current.next();
	};

	const showReadMePage = (repo) => {
		setCurrentRepo(repo);
		myCarouselRef.current.next();
	};

	const goBack = () => myCarouselRef.current.prev();
	const clearRepos = () => {
		setCurrentRepo(null);
		localStorage.removeItem("user-repos");
		goBack();
	};
	return (
		<Carousel ref={myCarouselRef}>
			<Home setRepos={showDetailsPage} />
			{repos && (
				<UserProjects
					repos={repos}
					setCurrentRepo={showReadMePage}
					goBack={clearRepos}
				/>
			)}
			{currentRepo && (
				<ProjectDetails currentRepo={currentRepo} goBack={goBack} />
			)}
		</Carousel>
	);
};

export default App;
