import {Button} from "../ui/button";
import lightLogo from "@/assets/icons/logo_light.png";
import darkLogo from "@/assets/icons/logo_dark.png";
import {useTheme} from "../theme-provider";
import ThemeToggler from "@/components/utils/ThemeToggler";
import {useNavigate} from "react-router-dom";

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
			<div className="flex gap-4 place-items-center">
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
