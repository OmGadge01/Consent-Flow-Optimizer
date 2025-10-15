export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        {/* Logo / Branding */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            C
          </div>
          <h1 className="ml-3 text-2xl font-semibold text-gray-800">Consent Flow</h1>
        </div>

        {/* Login Header */}
        <h2 className="font-display text-2xl font-semibold text-gray-800 mb-6 text-center">
          Sign In
        </h2>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mt-2">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl shadow-lg hover:opacity-90 transition font-medium">
          Sign In
        </button>

        {/* Optional Signup Link */}
        <p className="mt-4 text-center text-gray-500 text-sm">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
