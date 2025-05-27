"use client";

import Footer from "@/components/Footer";
import Select from "@/components/ui/Select";
import { useState } from "react";


type StreamURLs = {
	value: StreamURL;
	label: string;
}[]

export const streamURLs: StreamURLs = [
	{
		value: "https://wikisport.best/embed/skyf1.php",
		label: "Stream #1",
	},
	{
		value: "https://vecloud.eu/stream/d2512439-5bdd-43a6-9c05-75c1bdb5c1e5",
		label: "Stream #2",
	},
	{
		value: "https://embedrun.store/embed/8e1859af-389f-11f0-afb1-ecf4bbdafde4",
		label: "Stream #3",
	},
]

type StreamURL = "https://wikisport.best/embed/skyf1.php" | "https://vecloud.eu/stream/d2512439-5bdd-43a6-9c05-75c1bdb5c1e5" | "https://embedrun.store/embed/8e1859af-389f-11f0-afb1-ecf4bbdafde4";


export default function Page() {
	const [selectedStreamURL, setSelectedStreamURL] = useState<StreamURL | null>(streamURLs[0].value);

	return (
		<div className="flex w-full flex-col h-full gap-2">
			<div className="flex gap-2">
				
				<p className="text-zinc-500">Selected Stream</p>
				<Select
					placeholder="Stream"
					options={streamURLs}
					selected={selectedStreamURL}
					setSelected={(v) => setSelectedStreamURL( v ?? streamURLs[0].value )} 
				/>
			</div>
			<iframe id="player" 
				src={selectedStreamURL!}
				scrolling="no"  allow="encrypted-media; picture-in-picture; fullscreen;" 
				width="100%" height="100%" ></iframe>

			<Footer />
		</div>
	);
}