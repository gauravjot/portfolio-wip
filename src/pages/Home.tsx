import Hero from "@/components/layout/Hero";
import ILP from "@/components/layout/ILP";
import Mission from "@/components/layout/Mission";
import Skills from "@/components/layout/Skills";
import Topbar from "@/components/layout/Topbar";

export default function Home() {
	return (
		<div className="container max-w-7xl mx-auto space-y-16">
			<div className="my-4">
				<Topbar />
			</div>
			<Hero />
			<Mission />
			<Skills />
			<ILP />
		</div>
	);
}
