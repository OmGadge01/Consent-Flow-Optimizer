import { useState } from 'react';
import { motion } from 'framer-motion';
import RiskPill from './RiskPill';

export default function ConsentCard({ consent }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Consent Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-5 border border-gray-200 transition transform hover:-translate-y-1"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-lg text-gray-800">{consent.app}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {consent.permission} • {consent.status}
            </p>
          </div>
          <RiskPill level={consent.riskLevel} />
        </div>

        {/* ML Risk Probability */}
        {consent.riskProbability !== undefined && (
          <p className="mt-2 text-xs text-gray-500">
            Predicted Risk Probability: {(consent.riskProbability * 100).toFixed(1)}%
          </p>
        )}

        <p className="mt-3 text-sm text-gray-600 leading-snug">{consent.impact}</p>

        <div className="mt-4 border-t border-gray-200 pt-2 text-xs text-gray-500">
          Granted: {new Date(consent.grantedOn).toLocaleDateString()} <br />
          Last Used: {new Date(consent.lastUsed).toLocaleString()}
        </div>

        <div className="mt-4 flex justify-end">
          <button
            className={`px-3 py-1.5 text-sm rounded-lg text-white shadow ${
              consent.riskLevel === 'High'
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90'
            }`}
            onClick={() => setOpen(true)}
          >
            Manage ▶
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{consent.app} Details</h2>
            <p className="text-gray-600 mb-2">Permission: {consent.permission}</p>
            <p className="text-gray-600 mb-2">Status: {consent.status}</p>
            <p className="text-gray-600 mb-2">Impact: {consent.impact}</p>
            {consent.riskProbability !== undefined && (
              <p className="text-gray-600 mb-2">
                Risk Probability: {(consent.riskProbability * 100).toFixed(1)}%
              </p>
            )}
            <p className="text-gray-600 mb-4">
              Granted: {new Date(consent.grantedOn).toLocaleDateString()}
            </p>

            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
              <button className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">
                Revoke
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
