import { motion } from "framer-motion";
import { AlertItemData } from "../data/alertItemData";

export default function AlertItem({ alert, index }: { alert: AlertItemData; index: number }) {
    return (
        <motion.div className="bg-slate-800/50 p-3 rounded-lg flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 }}
            layout
        >
            <div className={`w-2 h-2 rounded-full ${alert.severity === "high" ? "bg-red-500" : alert.severity === "medium" ? "bg-yellow-500" : "bg-blue-500"}`} />
            <div>
                <div className="font-medium">{alert.title}</div>
                <div className="text-xs text-gray-400">{alert.timestamp}</div>
            </div>
        </motion.div>
    );
}
