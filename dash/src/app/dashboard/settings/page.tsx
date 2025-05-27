"use client";

import SegmentedControls from "@/components/ui/SegmentedControls";
import Button from "@/components/ui/Button";
import Slider from "@/components/ui/Slider";
import Input from "@/components/ui/Input";

import FavoriteDrivers from "@/components/settings/FavoriteDrivers";

import DelayInput from "@/components/DelayInput";
import DelayTimer from "@/components/DelayTimer";
import Toggle from "@/components/ui/Toggle";

import { useSettingsStore } from "@/stores/useSettingsStore";
import { models, useTranscriptionStore } from "@/stores/useTranscriptionStore";

import Footer from "@/components/Footer";
import Select from "@/components/ui/Select";

export default function SettingsPage() {
	const settings = useSettingsStore();
	const transcription = useTranscriptionStore();

	return (
		<div>
			<h1 className="mb-4 text-3xl">Settings</h1>

			<h2 className="my-4 text-2xl">Visual</h2>

			<div className="flex gap-2">
				<Toggle enabled={settings.use3DMap} setEnabled={(v) => settings.setUse3DMap(v)} />
				<p className="text-zinc-500">Use 3D Map (Experimental)</p>
			</div>

			<div className="flex gap-2">
				<Toggle enabled={settings.carMetrics} setEnabled={(v) => settings.setCarMetrics(v)} />
				<p className="text-zinc-500">Show Car Metrics (RPM, Gear, Speed)</p>
			</div>

			<div className="flex gap-2">
				<Toggle enabled={settings.showCornerNumbers} setEnabled={(v) => settings.setShowCornerNumbers(v)} />
				<p className="text-zinc-500">Show Corner Numbers on Track Map</p>
			</div>

			<div className="flex gap-2">
				<Toggle enabled={settings.tableHeaders} setEnabled={(v) => settings.setTableHeaders(v)} />
				<p className="text-zinc-500">Show Driver Table Header</p>
			</div>

			<div className="flex gap-2">
				<Toggle enabled={settings.showBestSectors} setEnabled={(v) => settings.setShowBestSectors(v)} />
				<p className="text-zinc-500">Show Drivers Best Sectors</p>
			</div>

			<div className="flex gap-2">
				<Toggle enabled={settings.showMiniSectors} setEnabled={(v) => settings.setShowMiniSectors(v)} />
				<p className="text-zinc-500">Show Drivers Mini Sectors</p>
			</div>

			<h2 className="my-4 text-2xl">Enable Radio Transcription</h2>

			<p className="mb-4">Only available when the corresponding feature is enabled from server.</p>

			<div className="flex gap-2">
				<Toggle enabled={transcription.enabled} setEnabled={(v) => transcription.setEnabled(v)} />
				<p className="text-zinc-500">Enable Radio Transcription</p>
			</div>

			<div className="flex gap-2">
				<Select placeholder="Model" options={models} selected={transcription.model ?? models[0].value} setSelected={(v) => transcription.setModel(v ?? models[0].value)} />
				<p className="text-zinc-500">Transcription Mode</p>
			</div>

			<h2 className="my-4 text-2xl">Race Control</h2>

			<div className="flex gap-2">
				<Toggle enabled={settings.raceControlChime} setEnabled={(v) => settings.setRaceControlChime(v)} />
				<p className="text-zinc-500">Play Chime on new Race Control Message</p>
			</div>

			{settings.raceControlChime && (
				<div className="flex flex-row items-center gap-2">
					<Input
						value={String(settings.raceControlChimeVolume)}
						setValue={(v) => {
							const numericValue = Number(v);
							if (!isNaN(numericValue)) {
								settings.setRaceControlChimeVolume(numericValue);
							}
						}}
					/>
					<Slider
						className="!w-52"
						value={settings.raceControlChimeVolume}
						setValue={(v) => settings.setRaceControlChimeVolume(v)}
					/>

					<p className="text-zinc-500">Race Control Chime Volume</p>
				</div>
			)}

			<h2 className="my-4 text-2xl">Favorite Drivers</h2>

			<p className="mb-4">Select your favorite drivers to highlight them on the dashboard.</p>

			<FavoriteDrivers />

			<h2 className="my-4 text-2xl">Speed Metric</h2>

			<p className="mb-4">Choose the unit in which you want to display speeds.</p>

			<SegmentedControls
				id="speed-unit"
				selected={settings.speedUnit}
				onSelect={settings.setSpeedUnit}
				options={[
					{ label: "km/h", value: "metric" },
					{ label: "mp/h", value: "imperial" },
				]}
			/>

			<h2 className="my-4 text-2xl">Delay</h2>

			<p className="mb-4">
				Here you have to option to set a delay for the data, it will displayed the amount entered in seconds later than
				on the live edge. On the Dashboard page there is the same delay input field so you can set it without going to
				the settings. It can be found in the most top bar on the right side.
			</p>

			<div className="flex items-center gap-2">
				<DelayTimer />
				<DelayInput />
				<p className="text-zinc-500">Delay in seconds</p>
			</div>

			<Button className="mt-2 bg-red-500!" onClick={() => settings.setDelay(0)}>
				Reset delay
			</Button>

			<Footer />
		</div>
	);
}
