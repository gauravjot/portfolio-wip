import Footer from "@/components/layout/Footer";
import Topbar from "@/components/layout/Topbar";

export default function About() {
	return (
		<div className="container max-w-7xl mx-auto space-y-12 relative">
			<div className="py-4 sticky top-0 z-10 bg-gradient-to-b from-background to-transparent">
				<Topbar />
			</div>
			<div>
				<h1 className="text-4xl font-semibold tracking-tight">About Me</h1>
				<div className="flex my-4">
					<div className="flex-1 space-y-4 text-xl text-secondary-foreground font-light my-2">
						<p>
							I am <b>Gauravjot Garaya</b>, a Vancouver based software engineer with over five years
							of experience. I specialize in translating web designs for the browser with focus on
							simplicity and accessibility.
						</p>
						<p>
							I am currently working as Full-Stack Developer at Cascade Aerospace and handle mission
							critical applications used by the hundreds of our highly skilled aerospace personnel.
						</p>
					</div>
					<img
						src="/img/profile_picture.jpg"
						alt="Profile Picture"
						className="w-64 h-64 rounded-3xl shadow-sm ml-8"
					/>
				</div>
				<div className="mt-10">
					<h2 className="text-3xl font-semibold tracking-tight">A fun thing about me...</h2>
					<p className="my-4 text-secondary-foreground font-light text-lg">
						I am fascinated by mountains but I am scared of heights. I love hiking and exploring
						nature but I always make sure to stay on the ground!
					</p>
					<img
						src="/img/mountaineering_me.jpg"
						alt="Mountains Manning Park"
						className="w-full h-[35rem] object-cover shadow-sm"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
