import { IconType } from "react-icons";
import { MdError, MdWarning, MdInfo } from "react-icons/md";

export interface AlertItemData {
	title: string;
	severity: string;
	icon?: IconType;
	timestamp?: string;
	id?: string;
}

// Map severity to icon
export const severityIconMap: Record<string, IconType> = {
	high: MdError,
	medium: MdWarning,
	low: MdInfo,
};

const alertItemTypes: AlertItemData[] = [
	{ title: "Phishing Email", severity: "high" },
	{ title: "Suspicious Login", severity: "high" },
	{ title: "Malware Detected", severity: "high" },
	{ title: "Unusual Network Activity", severity: "medium" },
	{ title: "Potential Data Exfiltration", severity: "high" },
	{ title: "Brute Force Attempt", severity: "medium" },
	{ title: "Unauthorized Access", severity: "high" },
	{ title: "Configuration Change", severity: "low" },
	{ title: "Unknown Process Execution", severity: "medium" },
	{ title: "Firewall Breach Attempt", severity: "medium" },
];

export function getRandomAlert() {
	const alertType = alertItemTypes[Math.floor(Math.random() * alertItemTypes.length)];
	const now = new Date();

	return {
		id: Math.random().toString(36).substring(2, 11),
		title: alertType.title,
		severity: alertType.severity,
		icon: severityIconMap[alertType.severity],
		timestamp: `${now.getHours()}:${now
			.getMinutes()
			.toString()
			.padStart(2, "0")}`,
	};
}
