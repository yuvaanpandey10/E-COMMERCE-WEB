import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const inputCls =
  "w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-secondary dark:border-gray-500 dark:bg-gray-800";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [sent, setSent] = useState(false);

  const close = () => {
    setOrderPopup(false);
    setSent(false);
  };

  useEffect(() => {
    if (!orderPopup) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [orderPopup]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!orderPopup) return null;

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your backend here
    setSent(true);
    setForm({ name: "", email: "", address: "" });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl dark:bg-gray-900 dark:text-white"
      >
        <div className="flex items-center justify-between">
          <h2 id="order-title" className="text-lg font-bold">Order Now</h2>
          <button onClick={close} aria-label="Close">
            <IoCloseOutline className="text-2xl" />
          </button>
        </div>

        {sent ? (
          <div className="py-6 text-center">
            <p className="mb-1 text-lg font-semibold text-secondary">Thank you!</p>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">We received your order request.</p>
            <button onClick={close} className="rounded-full bg-secondary px-5 py-1.5 text-white">Close</button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-4 flex flex-col gap-3">
            <input required name="name" autoFocus placeholder="Name" value={form.name} onChange={change} className={inputCls} />
            <input required type="email" name="email" placeholder="Email" value={form.email} onChange={change} className={inputCls} />
            <input required name="address" placeholder="Address" value={form.address} onChange={change} className={inputCls} />
            <button type="submit" className="mx-auto rounded-full bg-secondary px-6 py-1.5 text-white duration-200 hover:scale-105">
              Order Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Popup;