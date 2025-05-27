import { NextConfig } from "next";

import pack from "./package.json" with { type: "json" };

import "@/env";

const output = process.env.NEXT_STANDALONE === "1" ? "standalone" : undefined;
const compress = process.env.NEXT_NO_COMPRESS === "1";

// const frameDisableHeaders = [
// 	{
// 		source: "/(.*)",
// 		headers: [
// 			{
// 				type: "header",
// 				key: "X-Frame-Options",
// 				value: "SAMEORIGIN",
// 			},
// 			{
// 				type: "header",
// 				key: "Content-Security-Policy",
// 				value: "frame-ancestors 'self';",
// 			},
// 		],
// 	},
// ];

const config: NextConfig = {
	output,
	compress,
	webpack: (
		config,
	) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "sharp$": false,
            "onnxruntime-node$": false,
        }
		return config
	},
	env: {
		version: pack.version,
	},
	// headers: async () => frameDisableHeaders,
};

export default config;
