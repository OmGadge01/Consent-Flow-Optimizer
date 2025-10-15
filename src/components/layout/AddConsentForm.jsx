// src/components/AddConsentForm.jsx
import { useState } from "react";

export default function AddConsentForm({ onAdd }) {
  const [app, setApp] = useState("");
  const [permission, setPermission] = useState("");
  const [riskLevel, setRiskLevel] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!app || !permission) return;

    const newConsent = {
      id: "c" + Math.random().toString(36).substring(2, 6),
      app,
      permission,
      grantedOn: new Date().toISOString(),
      lastUsed: new Date().toISOString(),
      status: "Granted",
      impact: `Permission for ${permission} granted to ${app}`,
      dataFlow: ["Local App Engine"],
      riskLevel,
    };

    onAdd(newConsent);
    setApp("");
    setPermission("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-card rounded-2xl p-4 border border-border flex flex-col gap-3"
    >
      <h3 className="font-medium text-lg text-text-base">Grant Permission</h3>
      <input
        type="text"
        placeholder="App Name (e.g., WhatsApp)"
        value={app}
        onChange={(e) => setApp(e.target.value)}
        className="border border-border rounded-lg px-3 py-2 text-sm"
      />
      <input
        type="text"
        placeholder="Permission (e.g., Location)"
        value={permission}
        onChange={(e) => setPermission(e.target.value)}
        className="border border-border rounded-lg px-3 py-2 text-sm"
      />
      <select
        value={riskLevel}
        onChange={(e) => setRiskLevel(e.target.value)}
        className="border border-border rounded-lg px-3 py-2 text-sm"
      >
        <option value="Low">Low Risk</option>
        <option value="Medium">Medium Risk</option>
        <option value="High">High Risk</option>
      </select>
      <button
        type="submit"
        className="bg-primary px-4 py-2 rounded-lg hover:opacity-90 text-sm"
      >
        Add Consent
      </button>
    </form>
  );
}
