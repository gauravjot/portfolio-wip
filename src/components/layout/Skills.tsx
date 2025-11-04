import {CodeXml} from "lucide-react";
import React from "react";

interface Skill {
	name: string;
	description: string;
	Icon: React.ReactNode;
}

export default function Skills() {
	const skills: Skill[] = [
		{
			name: "Frontend Development",
			description:
				"Experienced in building responsive and user-friendly interfaces using React, Vue, and Angular.",
			Icon: <CodeXml />,
		},
		{
			name: "Backend Development",
			description:
				"Proficient in building RESTful APIs and working with databases using Node.js, Express, and MongoDB.",
			Icon: <CodeXml />,
		},
		{
			name: "UI/UX Design",
			description:
				"Skilled in creating intuitive and visually appealing designs using Figma and Adobe XD.",
			Icon: <CodeXml />,
		},
	];

	return (
		<div className="flex">
			<h2 className="text-4xl font-semibold tracking-tight w-[30rem] my-4">My Skills</h2>
			<div className="grid grid-cols-2 gap-5">
				{skills.map((skill) => (
					<div className="p-6 bg-muted rounded-2xl shadow-sm flex gap-4" key={skill.name}>
						<div>
							<div className="text-indigo-600 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900 aspect-square p-2 rounded-full">
								{skill.Icon}
							</div>
						</div>
						<div>
							<h3 className="text-2xl font-medium tracking-tight mb-2">{skill.name}</h3>
							<p className="text-muted-foreground text-sm">{skill.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
