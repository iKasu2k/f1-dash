import Link from "next/link";

export default function Footer() {
	return (
		<footer className="my-8 text-sm text-zinc-500">
			<div className="mb-4 flex flex-wrap gap-2">
				<p>
					Get{" "}
					<Link className="text-blue-500" href="/help">
						Help
					</Link>
					.
				</p>

				<p>Version: {process.env.version}</p>
			</div>

			<p>
				This project/website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA
				ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One
				Licensing B.V
			</p>
		</footer>
	);
}