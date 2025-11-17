export default function VisionBoard() {
	return (
		<div className="bg-muted rounded-3xl p-9 shadow-sm">
			<h2 className="text-4xl font-semibold tracking-tight">Vision Board</h2>
			<p className="my-4 text-secondary-foreground">
				A collection of images and ideas that inspire and guide the design. The central theme is
				about living life to the fullest, growing personally and professionally, and achieving
				dreams.
			</p>
			<img src="/img/vision_board.jpg" alt="Vision Board" className="rounded-lg w-full h-auto" />
		</div>
	);
}
