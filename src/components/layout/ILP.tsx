import {Quote} from "lucide-react";
import ilpImage from "@/assets/images/ilp_image.png";

export default function ILP() {
	return (
		<div className="grid grid-cols-5 gap-6">
			<div className="col-span-2 aspect-square bg-muted p-10 rounded-3xl leading-tight tracking-tight shadow-sm text-3xl font-semibold text-secondary-foreground">
				Career + <br />
				Integrative Life Planning
				<img src={ilpImage} alt="ILP Illustration" className="mt-6 w-full h-auto" />
			</div>
			<div className="col-span-3 bg-teal-600 text-white/90 dark:bg-teal-700 rounded-3xl p-10">
				<Quote className="mb-4 h-8 w-8 text-white" />
				<p className="text-lg font-medium mb-4">
					I believe that a fulfilling career is a cornerstone of a meaningful life. Integrative Life
					Planning (ILP) is an approach that combines career development with personal growth,
					helping individuals align their professional paths with their core values and life goals.
				</p>
				<h3 className="text-2xl font-semibold mt-6 mb-4">For me ILP is about:</h3>
				<div className="grid grid-cols-[auto,1fr] gap-4 font-medium">
					<div>Holistic Approach:</div>
					<div>
						Considering all aspects of life, including personal values, relationships, and
						well-being.
					</div>
					<div>Self-Discovery:</div>
					<div>Exploring my strengths and passions.</div>
					<div>Goal Alignment:</div>
					<div>Setting goals to achieve my long-term life aspirations.</div>
					<div>Continuous Growth:</div>
					<div>Pursuing lifelong learning and adaptability.</div>
				</div>
			</div>
		</div>
	);
}
