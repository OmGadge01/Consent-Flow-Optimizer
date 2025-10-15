export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo / Branding */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          C
        </div>
        <h1 className="font-sans text-xl font-semibold text-gray-800">
          Consent Flow Optimizer
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-4">
        <a
          href="/dashboard"
          className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
        >
          Dashboard
        </a>
        <a
          href="/settings"
          className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
        >
          Settings
        </a>
      </nav>
    </header>
  );
}
