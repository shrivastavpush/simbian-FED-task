export interface AlertData {
	title: string;
	severity: string;
	timestamp?: string
	id?: string
}

const alertTypes: AlertData[] = [
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
	const alertType = alertTypes[Math.floor(Math.random() * alertTypes.length)];
	const now = new Date();

	return {
		id: Math.random().toString(36).substring(2, 11),
		title: alertType.title,
		severity: alertType.severity,
		timestamp: `${now.getHours()}:${now
			.getMinutes()
			.toString()
			.padStart(2, "0")}`,
	};
}
