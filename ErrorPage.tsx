import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 p-6">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl p-8 text-center"
      >
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto" />
        <h1 className="text-3xl font-bold mt-4">404 - Page don't found</h1>
        <p className="text-gray-600 mt-2">The URL don't exist</p>
        <Link 
          to="/" 
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Return back
        </Link>
      </motion.div>
    </div>
  );
}

