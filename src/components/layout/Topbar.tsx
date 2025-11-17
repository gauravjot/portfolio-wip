import {Button} from "../ui/button";
import lightLogo from "@/assets/icons/logo_light.png";
import darkLogo from "@/assets/icons/logo_dark.png";
import {useTheme} from "../theme-provider";
import ThemeToggler from "@/components/utils/ThemeToggler";
import {useNavigate} from "react-router-dom";
import {Download} from "lucide-react";

export default function Topbar() {
	const {theme} = useTheme();
	const navigate = useNavigate();

	return (
		<div className="bg-white dark:bg-black px-4 py-4 rounded-2xl flex place-items-center">
			<div className="flex-1 flex gap-4 place-items-center">
				{theme === "light" ? (
					<img src={darkLogo} alt="Logo" className="h-8 w-auto" />
				) : (
					<img src={lightLogo} alt="Logo" className="h-8 w-auto" />
				)}
				<span className="font-medium text-xl">Gauravjot Garaya</span>
			</div>
			<div className="flex gap-2 place-items-center">
				{/*} About me page */}
				<Button
					variant="ghost"
					onClick={() => {
						navigate("/");
					}}
					className="rounded-full font-medium"
				>
					Home
				</Button>
				<a
					href="/artifacts/Gauravjot_Resume-1.pdf"
					download
					className="btn rounded-full px-4 py-2 font-medium flex place-items-center hover:bg-secondary hover:text-secondary-foreground text-foreground"
				>
					<Download className="mr-2 h-4 w-4" />
					Resume
				</a>
				<Button
					variant="default"
					onClick={() => {
						navigate("/about");
					}}
					className="rounded-full font-medium"
				>
					About Me
				</Button>
				<ThemeToggler />
			</div>
		</div>
	);
}
