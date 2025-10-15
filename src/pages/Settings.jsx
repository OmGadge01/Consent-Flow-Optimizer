import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="p-6 space-y-8 max-w-3xl mx-auto">
      {/* Page Header */}
      <div>
        <h2 className="font-sans text-3xl font-semibold mb-2 text-gray-800">
          Settings
        </h2>
      </div>

      {/* Account Section */}
      <section className="bg-white shadow rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Account</h3>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label className="text-gray-700 font-medium">Username</label>
            <input
              type="text"
              placeholder="Your username"
              className="mt-1 sm:mt-0 border rounded px-3 py-2 w-full sm:w-1/2"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="mt-1 sm:mt-0 border rounded px-3 py-2 w-full sm:w-1/2"
            />
          </div>
        </div>
      </section>

      {/* Preferences Section */}
      <section className="bg-white shadow rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Preferences</h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-gray-700 font-medium">Dark Mode</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Enable</span>
          </label>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-gray-700 font-medium">Email Notifications</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Receive updates via email</span>
          </label>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-white shadow rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Security</h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <label className="text-gray-700 font-medium">Change Password</label>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Update
          </button>
        </div>
      </section>
    </div>
  );
}
