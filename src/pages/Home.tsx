import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import ILP from "@/components/layout/ILP";
import Mission from "@/components/layout/Mission";
import Skills from "@/components/layout/Skills";
import Topbar from "@/components/layout/Topbar";
import TransferrableSkills from "@/components/layout/TransferrableSkills";
import VisionBoard from "@/components/layout/VisionBoard";

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
			<Footer />
		</div>
	);
}
