import { FlagType } from "@/types/map.type";

type StatusMessage = {
	message: string;
	color: string;
	trackColor: string;
	flagType: FlagType;
	bySector?: boolean;
	pulse?: number;
	hex: string;
};

type MessageMap = {
	[key: string]: StatusMessage;
};

export const getTrackStatusMessage = (statusCode: number | undefined): StatusMessage | null => {
	const messageMap: MessageMap = {
		1: { message: "Track Clear", color: "bg-emerald-500", flagType: "GREEN", trackColor: "stroke-white", hex: "#34b981" },
		2: {
			message: "Yellow Flag",
			flagType: "YELLOW",
			color: "bg-amber-400",
			trackColor: "stroke-amber-400",
			bySector: true,
			hex: "#fbbf24",
		},
		3: { message: "Flag", flagType: "YELLOW", color: "bg-amber-400", trackColor: "stroke-amber-400", bySector: true, hex: "#fbbf24" },
		4: { message: "Safety Car", flagType: "YELLOW",color: "bg-amber-400", trackColor: "stroke-amber-400", hex: "#fbbf24" },
		5: { message: "Red Flag", flagType: "RED", color: "bg-red-500", trackColor: "stroke-red-500", hex: "#ef4444" },
		6: { message: "VSC Deployed", flagType: "YELLOW", color: "bg-amber-400", trackColor: "stroke-amber-400", hex: "#fbbf24" },
		7: { message: "VSC Ending", flagType: "YELLOW", color: "bg-amber-400", trackColor: "stroke-amber-400", hex: "#fbbf24" },
	};

	return statusCode ? (messageMap[statusCode] ?? messageMap[0]) : null;
};

type FlagStyle = {
	bg: string;
	stroke: string;
	trackHex: string;
	flagHex: string;
};

type ComputedFlagStyle = FlagStyle & { flag: FlagType };

const STYLE_BY_FLAG_TYPE: Record<FlagType, FlagStyle> = {
	GREEN: { stroke: "stroke-white", bg: "bg-emerald-500", flagHex: "#34b981", trackHex: "#fafafa" },
	YELLOW: { stroke: "stroke-yellow-500", bg: "bg-yellow-500", flagHex: "#f59e0c", trackHex: "#f59e0c" },
	RED: { stroke: "stroke-red-500", bg: "bg-red-500", flagHex: "#ef4444", trackHex: "#ef4444" },
};

export function getComputedFlagStyle(flag: FlagType): ComputedFlagStyle {
	return {
		...STYLE_BY_FLAG_TYPE[flag],
		flag,
	};
}