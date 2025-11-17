import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import ILP from "@/components/layout/ILP";
import Mission from "@/components/layout/Mission";
import Skills from "@/components/layout/Skills";
import Topbar from "@/components/layout/Topbar";
import TransferrableSkills from "@/components/layout/TransferrableSkills";
import VisionBoard from "@/components/layout/VisionBoard";
import {Download} from "lucide-react";

export default function Home() {
	return (
		<div className="container max-w-7xl mx-auto space-y-20 relative">
			<div className="py-4 sticky top-0 z-10 bg-gradient-to-b from-background to-transparent">
				<Topbar />
			</div>
			<Hero />
			<Mission />
			<Skills />
			<TransferrableSkills />
			<ILP />
			<VisionBoard />
			<div className="bg-muted rounded-3xl shadow-sm">
				<a
					href="/artifacts/Gauravjot_Resume-1.pdf"
					download
					className=" text-center mx-auto text-secondary-foreground font-medium"
				>
					<div className="flex p-6 hover:bg-accent-700/5 rounded-3xl gap-4 justify-center place-items-center">
						<Download className="h-6 w-6 text-secondary-foreground" />
						<span>Download Resume</span>
					</div>
				</a>
			</div>
			<Footer />
		</div>
	);
}
