import { useState } from "react";
import Logo from "../../assets/logo.png";

const inputCls =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 dark:border-gray-600 dark:bg-gray-800 dark:text-white";

const Welcome = ({ onSignup, onGuest }) => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (form.name.trim().length < 2) err.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email";
    setErrors(err);
    if (Object.keys(err).length) return;
    onSignup({ name: form.name.trim(), email: form.email.trim() });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
      className="fixed inset-0 z-100 overflow-y-auto bg-primary/70 backdrop-blur-md"
    >
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900 dark:text-white sm:p-8">
          <div className="mb-6 flex flex-col items-center text-center">
            <img src={Logo} alt="Shopsy logo" className="mb-2 w-14" />
            <h1 id="welcome-title" className="text-2xl font-bold sm:text-3xl">
              {showForm ? "Create a demo profile" : "Welcome to Shopsy"}
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              {showForm
                ? "Your name and email are saved in this browser only. No online account is created."
                : "Create a local demo profile, or browse without one."}
            </p>
          </div>

          {!showForm ? (
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="rounded-full bg-secondary px-4 py-3 font-semibold text-white duration-200 hover:scale-[1.02]"
              >
                Create Profile
              </button>
              <button
                type="button"
                onClick={onGuest}
                className="rounded-full border border-gray-300 px-4 py-3 font-medium duration-200 hover:border-secondary hover:text-secondary dark:border-gray-600"
              >
                Skip for now – just browse
              </button>
              <p className="text-center text-xs text-gray-400">
                No account needed to view the store.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="flex flex-col gap-4">
              <div>
                <input name="name" autoFocus autoComplete="name" placeholder="Full name" value={form.name} onChange={change} className={inputCls} />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <input name="email" type="email" autoComplete="email" placeholder="Email address" value={form.email} onChange={change} className={inputCls} />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
              <button type="submit" className="rounded-full bg-secondary px-4 py-3 font-semibold text-white duration-200 hover:scale-[1.02]">
                Create Demo Profile
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="text-sm text-gray-500 hover:text-secondary">
                ← Back
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;