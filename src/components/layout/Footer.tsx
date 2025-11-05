import {ArrowUp} from "lucide-react";
import {Button} from "../ui/button";

export default function Footer() {
	return (
		<div>
			<footer className="p-6 flex items-center bg-muted rounded-3xl my-4 text-sm">
				<div className="flex-1">
					&copy; {new Date().getFullYear()} Gauravjot Garaya. All rights reserved.
				</div>
				<div>
					<Button
						onClick={() => {
							// go to top of page
							window.scrollTo({top: 0, behavior: "smooth"});
						}}
						variant="link"
					>
						Go to Top <ArrowUp className="ml-2 h-4 w-4" />
					</Button>
				</div>
			</footer>
		</div>
	);
}
