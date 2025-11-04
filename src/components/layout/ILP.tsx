import {Quote} from "lucide-react";

export default function ILP() {
	return (
		<div className="grid grid-cols-5 gap-6">
			<div className="col-span-2 aspect-square bg-muted p-10 rounded-3xl leading-tight tracking-tight shadow-sm text-6xl font-semibold text-secondary-foreground">
				Career + <br />
				Integrative <br />
				Life Planning
			</div>
			<div className="col-span-3 bg-teal-600 text-white/90 dark:bg-teal-700 rounded-3xl p-10">
				<Quote className="mb-4 h-8 w-8 text-white" />
				<p className="text-lg font-medium mb-4">
					I believe that a fulfilling career is a cornerstone of a meaningful life. Integrative Life
					Planning (ILP) is an approach that combines career development with personal growth,
					helping individuals align their professional paths with their core values and life goals.
				</p>
				<h3 className="text-2xl font-semibold mt-4 mb-2">For me ILP is about:</h3>
				<div className="grid grid-cols-[auto,1fr] gap-4 font-medium">
					<div>Holistic Approach:</div>
					<div>
						Consider all aspects of life, including personal values, relationships, and well-being.
					</div>
					<div>Self-Discovery:</div>
					<div>Explore my strengths and passions.</div>
					<div>Goal Alignment:</div>
					<div>Set goals to achieve my long-term life aspirations.</div>
					<div>Continuous Growth:</div>
					<div>Pursue lifelong learning and adaptability.</div>
				</div>
			</div>
		</div>
	);
}
