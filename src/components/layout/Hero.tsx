import {Map} from "lucide-react";
import {Button} from "../ui/button";
import profilePicture from "@/assets/images/profile_picture.jpg";
import {useNavigate} from "react-router-dom";

export default function Hero() {
	const navigate = useNavigate();

	return (
		<div className="grid grid-cols-2 gap-16 mx-16 my-16 items-center">
			<hgroup>
				<h1 className="text-[6rem] leading-[5.5rem] font-medium">Hi, I'm a software engineer</h1>
				<p className="mt-10 mb-4 text-muted-foreground text-md">
					I specialize in building high-quality web applications and services. Let's work together
					to bring your ideas to life!
				</p>
				<Button
					size="lg"
					onClick={() => {
						navigate("/about");
					}}
					className="rounded-full mt-8 text-base"
				>
					About Me
				</Button>
			</hgroup>
			<div>
				<img
					src={profilePicture}
					alt="Gauravjot Garaya"
					className="rounded-[2rem] shadow-lg aspect-square"
				/>
				<div className="mt-4">
					<Map className="inline-block mr-2 mb-1 size-5 text-primary" />
					<span className="text-muted-foreground">From beautiful city of</span>{" "}
					<span className="font-medium">Surrey, British Columbia</span>
				</div>
			</div>
		</div>
	);
}
