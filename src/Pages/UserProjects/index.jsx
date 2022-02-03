import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Card, Avatar, Button, Table } from "antd";

const UserProjects = ({ repos, setCurrentRepo, goBack }) => {
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Date Created",
			dataIndex: "pushed_at",
			key: "pushed_at",
			render: (data) => new Date(data).toLocaleString(),
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
			ellipsis: true,
			render: data => data || "None"
		},
		{
			title: "Privacy",
			dataIndex: "privacy",
			key: "privacy",
			render: (data) => (data ? "Private" : "Public"),
		},
	];

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
			<div style={{ display: "flex" }}>
				<div>
					<Avatar src={repos[0].owner.avatar_url} alt="user avatar" />
				</div>
				<div style={{ marginLeft: "20px" }}>
					<h3>
						<strong>{repos[0].owner.login}</strong>
					</h3>
				</div>
			</div>
		</div>
	);

	const tableTitle = (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<strong>User Repositories</strong>
		</div>
	);

	return (
		<Card title={title}>
			<Table
				title={() => tableTitle}
				dataSource={repos}
				columns={columns}
				onRow={(row) => ({ onClick: () => setCurrentRepo(row) })}
			/>
		</Card>
	);
};

export default UserProjects;
