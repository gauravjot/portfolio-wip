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
			<div className="grid grid-cols-3 gap-6 mt-6">
				<hgroup>
					<h3 className="font-bold text-2xl mb-4">Live</h3>
					<p className="text-muted-foreground">
						Images represent me travelling, going on a long run, and sightseeing. I believe that to
						live life to the fullest, one must experience new places, cultures, and adventures.
						<br />
						<br /> I enjoy being on the move and exploring the world around me. My prime wishlist
						includes hiking in the Himalayas, biking through Iceland, and road-tripping across the
						USA.
					</p>
				</hgroup>
				<hgroup>
					<h3 className="font-bold text-2xl mb-4">Grow</h3>
					<p className="text-muted-foreground">
						Personal growth to me is about continuous learning and self-improvement. The images of
						working on a software project and organizing schedules reflects my work ethic and
						dedication to stay on top of my goals.
						<br />
						<br />
						The other images represent fitness goals and the mindset of always thinking bigger. I
						believe that growth is a lifelong journey that requires discipline, focus, and a
						positive attitude.
					</p>
				</hgroup>
				<hgroup>
					<h3 className="font-bold text-2xl mb-4">Achieve</h3>
					<p className="text-muted-foreground">
						The image of a graduation cap represents my academic achievements and the value I place
						on education. The fitness image overlaps with the growth section, as I believe that
						physical health is a key component of overall success.
					</p>
				</hgroup>
			</div>
		</div>
	);
}
