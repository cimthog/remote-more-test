import React, { useState } from "react";
import { Card, Input, Form, message } from "antd";

const { Search } = Input;

const getAllRepos = async (username) => {
	const res = await fetch(`https://api.github.com/users/${username}/repos`);
	return await res.json();
};

const Home = ({ setRepos }) => {
	const [loading, setLoading] = useState(false);

	const onSearch = async (username) => {
		setLoading(true);
		getAllRepos(username).then((res) => {
			setLoading(false);
			if (res.message) return message.error(res.message);
			if (res.length === 0) return message.error("User has no repositories");
			return setRepos(res);
		});
	};

	const title = <h2 style={{textAlign: "center"}}>Gitub Repo Finder</h2>

	return (
		<Card title={title} bordered={false}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "40vh",
				}}>
				<Form.Item
					required={true}
					rules={[{ required: true, message: "Please enter a username" }]}>
					<Search
						placeholder="Enter Github username"
						onSearch={onSearch}
						enterButton
						required
						loading={loading}
						width="30%"
						size="large"
					/>
				</Form.Item>
			</div>
		</Card>
	);
};

export default Home;
