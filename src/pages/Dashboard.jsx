import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useConsents } from "../hooks/useConsents";
import ConsentCard from "../components/layout/ConsentCard";
import AddConsentForm from "../components/layout/AddConsentForm";
import RiskPill from "../components/layout/RiskPill";

export default function Dashboard() {
  const { consents, loading, addConsent } = useConsents();
  const [filter, setFilter] = useState("All");
  const [stats, setStats] = useState({ total: 0, high: 0, medium: 0, low: 0 });
  const [suggestions, setSuggestions] = useState([]);
  const [aiInsight, setAiInsight] = useState("");

  const filtered =
    filter === "All" ? consents : consents.filter((c) => c.riskLevel === filter);

  useEffect(() => {
    if (!consents.length) return;

    const total = consents.length;
    const high = consents.filter((c) => c.riskLevel === "High").length;
    const medium = consents.filter((c) => c.riskLevel === "Medium").length;
    const low = consents.filter((c) => c.riskLevel === "Low").length;

    setStats({ total, high, medium, low });

    // Mock AI logic — replace later with ML API
    if (high / total > 0.4)
      setAiInsight("⚠️ High number of risky consents detected. Review recommended.");
    else if (medium / total > 0.4)
      setAiInsight("⚡ Many consents are medium risk — potential for optimization.");
    else
      setAiInsight("✅ Risk levels are under control. Systems look healthy.");

    // Suggestions for high-risk items
    setSuggestions(
      consents
        .filter((c) => c.riskLevel === "High")
        .map((c) => ({
          id: c.id,
          text: `Review ${c.app} (${c.permission}) — high data-sharing risk.`,
        }))
    );
  }, [consents]);

  if (loading)
    return (
      <div className="p-8 text-center text-gray-500">
        Loading dashboard data...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-8 space-y-10">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-gray-800 tracking-tight">
            Consent Flow Dashboard
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Monitor permissions, predict risks, and take informed actions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {["All", "Low", "Medium", "High"].map((r) => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition
                ${
                  filter === r
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {r}
            </button>
          ))}
        </div>
      </header>

      {/* Grant Permission Form */}
      <section className="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-500">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Grant New Permission
        </h2>
        <AddConsentForm onAdd={addConsent} />
      </section>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
        <div className="p-4 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-xl shadow-md text-center">
          <p className="text-xs opacity-80">Total Consents</p>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>
        <div className="p-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl shadow-md text-center">
          <p className="text-xs opacity-80">High Risk</p>
          <p className="text-2xl font-bold">{stats.high}</p>
        </div>
        <div className="p-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-xl shadow-md text-center">
          <p className="text-xs opacity-80">Medium Risk</p>
          <p className="text-2xl font-bold">{stats.medium}</p>
        </div>
        <div className="p-4 bg-gradient-to-r from-green-400 to-emerald-600 text-white rounded-xl shadow-md text-center">
          <p className="text-xs opacity-80">Low Risk</p>
          <p className="text-2xl font-bold">{stats.low}</p>
        </div>
      </div>

      {/* AI Insights */}
      <section className="bg-white rounded-xl shadow-md p-5 border-l-4 border-blue-500">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">AI Insights</h2>
        <p className="text-gray-600 text-sm">{aiInsight}</p>
      </section>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <section className="bg-white rounded-xl shadow-md p-5 border-l-4 border-purple-500 space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">
            Suggested Actions
          </h2>
          {suggestions.map((s) => (
            <p key={s.id} className="text-gray-600 text-sm">
              • {s.text}
            </p>
          ))}
        </section>
      )}

      {/* Consent Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ConsentCard consent={c} />
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-gray-400 mt-12 text-sm">
          No results found for this filter.
        </div>
      )}
    </div>
  );
}
