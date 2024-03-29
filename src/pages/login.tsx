import React from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../services/black/user-services"

export default function Login() {
    const navigate = useNavigate()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const isDataValid = () => {
        return user.email !== "" && user.password !== ""
    }

    const handleLogin = async () => {
        if (isDataValid()) {
            try {
                const response = await login(user)
                console.log(response)
                window.location.href = "/"
            } catch (error:any) {
                console.log(error)
                setError(error.message)
            }
        }
    }

  return (
    <>
      {/*<!-- Component: Card with form --> */}
      <form className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 lg:w-2/5 m-auto md:w-3/5 sm:w-4/5 xs:w-11/12 w-11/12 mt-12"
      >
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 text-center">
            <h3 className="text-xl font-medium text-slate-700">Login</h3>
          </header>
          <div className="flex flex-col space-y-8">
            {/*      <!-- Error message --> */}
            {error && (
              <div className="p-4 text-red-500 bg-red-100 rounded-md">
                {error}
              </div>
            )}
            {/*      <!-- Input field --> */}
            <div className="relative my-6">
              <input
                id="id-b03"
                type="email"
                name="id-b03"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b03"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your email
              </label>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Type your email address</span>
              </small>
            </div>
            {/*      <!-- Input field --> */}
            <div className="relative my-6">
              <input
                id="id-b13"
                type="password"
                name="id-b13"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="your password"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b13"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your password
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                onClick={() => {
                    const input = document.getElementById("id-b13")
                    if (input) {
                        if (input.getAttribute("type") === "password") {
                        input.setAttribute("type", "text")
                        } else {
                        input.setAttribute("type", "password")
                        }
                    }}
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            </div>
          </div>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-6 ">
          <button
            type="button"
            onClick={handleLogin}
            disabled={!isDataValid() || loading}
           className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Log in</span>
          </button>
        </div>

        {/*  <!-- Footer --> */}
        <footer className="flex justify-center items-center p-6 bg-slate-50">
          <a href="#" className="text-sm text-emerald-500 hover:underline">
            Forgot your password?
          </a>
        </footer>

        {/*  <!-- Create Account --> */}
        <div className="flex justify-center items-center p-6 bg-slate-50">
          <p
            onClick={() => navigate("/create-account")}
            className="text-sm text-emerald-500 hover:underline cursor-pointer"
            >
             don't have an account?
          </p>
        </div>
      </form>
      {/*<!-- End Card with form --> */}
    </>
  )
}
