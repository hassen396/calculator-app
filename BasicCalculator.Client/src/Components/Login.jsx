import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post("https://localhost:5296/api/Auth/login", {
        email,
        password,
      });

      // save token
      localStorage.setItem("token", response.data.token);
      console.log("Login succeeded:", response.data);
      navigate("/home");
    } catch (err) {
      console.log(err.response.data);
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen mb-20">
      <div className="flex w-2/3 flex-col justify-center gap-5 text-left mt-3/5">
        <div className="text-center">
          <img className="inline-block sm:min-w-30 w-20" src="/src/assets/react.svg" alt="User" />
        </div>

        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="block text-sm/6 font-medium">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="username"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white
                       outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 
                       focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white
                       outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 
                       focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="text-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="text-purple-500 hover:text-blue-50 hover:bg-amber-600 
                       border-purple-200 border-2 px-5 py-1.5 rounded-2xl">
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
