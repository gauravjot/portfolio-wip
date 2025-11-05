import {
	ArrowDownNarrowWide,
	CircleArrowUp,
	Clock,
	Hammer,
	HandshakeIcon,
	Search,
	Settings2,
	Speech,
} from "lucide-react";
import React from "react";

interface Skill {
	name: string;
	description: string;
	Icon: React.ReactNode;
	image: string;
}

export default function TransferrableSkills() {
	const skills: Skill[] = [
		{
			name: "Problem Solving",
			description:
				"Being a software developer, you are expected to be good at problem solving. For example, I am working on a new project at my work where we are using a brand-new ERP solution. As with anything brand-new, I have encountered problems that are unique and must be solved such that our new ERP can support our existing operation workflows. This requires effective problem solving and come up with effective solutions usually within a time constrained environment when I have to meet deadlines.",
			Icon: <Settings2 />,
			image: "problem_solving.jpg",
		},
		{
			name: "Attention to Detail",
			description:
				"I have been designing software professionally for over a year now and have developed a keen sense for attention to detail. I am very particular about understanding my audience and what their primary use-case is for my software. For example, at my company’s production line, we have people working in roles ranging from package handlers, machine shop staff, and maintenance personnel and it is valuable to understand which feature each roles need to maximize their efficiency.",
			Icon: <Search />,
			image: "attention_to_detail.jpg",
		},
		{
			name: "Troubleshooting",
			description:
				"I am someone who quickly analyzes business issues and produce ideas to troubleshoot them. As I earlier explained, my job requires me to work with a brand-new ERP solution, and with anything brand-new, problems are an unavoidable part of it. I am very proactive to take initiatives for understanding technical issues and find possible solutions.",
			Icon: <Hammer />,
			image: "troubleshoot.jpg",
		},
		{
			name: "Conflict Resolution",
			description:
				"I believe it happens often enough when two solutions surface to solve one problem. When this happens, I try to not be personal but analytical as to which method is most likely to produce the best outcome for business. I believe the best way to avoid conflicts is to catch them early-on in a process, and you can use real-world data to support decision making.",
			Icon: <HandshakeIcon />,
			image: "conflict_resolution.jpg",
		},
		{
			name: "Continuous Improvement",
			description:
				"I believe in the principle of Japanese term Kaizen. Kai means “change” and zen means “good”. By following this ideology, it helps me strive for continuous improvement through small but incremental changes to better the processes and systems. As a software developer, it usually means learning new techniques and technologies to keep on improving our workflows and enhance our software’s usability and experience.",
			Icon: <CircleArrowUp />,
			image: "cont_improvement.jpg",
		},
		{
			name: "Time Management",
			description:
				"I consider myself someone who organizes their schedule efficiently and plan out time windows for maximum productivity. I take advantage of tools such as Outlook calendar to plan out my day and weeks in advance and make sure that all my priorities get their respective time.",
			Icon: <Clock />,
			image: "time_management.jpg",
		},
		{
			name: "Prioritization",
			description:
				"After working professionally, I have realized that the best way to deliver a successful project is to not tackle the whole thing as one, but to chunk out the work and then prioritize it smartly. This requires building deep understanding of what is most required by the business so I can deliver most value at any time.",
			Icon: <ArrowDownNarrowWide />,
			image: "prioritization.jpg",
		},
		{
			name: "Communication",
			description:
				"I believe one’s work is as good as one can explain it, and thus good communication is necessary at every step of the way. At my workplace, I actively deal with stakeholders for my projects to understand their requirements and pain points. I also deliver the projects when they are finished by giving them live demos to and answer any questions.",
			Icon: <Speech />,
			image: "communication.jpg",
		},
	];

	return (
		<div>
			<div className="my-12 min-w-[20rem] w-[20rem]">
				<h2 className="text-4xl font-semibold tracking-tight">Transferrable Skills</h2>
			</div>
			<div className="space-y-10">
				{skills.map((skill, index) => (
					<div className="flex gap-5" key={skill.name}>
						<div
							className="order-2 flex-1 p-6 bg-muted rounded-2xl shadow-sm flex gap-4"
							key={skill.name}
						>
							<div>
								<div className="text-indigo-600 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900 aspect-square p-2 rounded-full">
									{skill.Icon}
								</div>
							</div>
							<div>
								<h3 className="text-2xl font-medium tracking-tight mb-2">{skill.name}</h3>
								<p className="text-muted-foreground text-md">{skill.description}</p>
							</div>
						</div>
						<img
							src={`/img/${skill.image}`}
							alt={skill.name}
							className={
								(index % 2 === 0 ? "order-1" : "order-2") +
								" w-72 h-56 object-cover rounded-3xl shadow-sm"
							}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
