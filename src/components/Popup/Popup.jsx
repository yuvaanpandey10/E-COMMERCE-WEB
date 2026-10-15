import { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const close = () => {
    setOrderPopup(false);
  };

  useEffect(() => {
    if (!orderPopup) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOrderPopup(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [orderPopup, setOrderPopup]);

  if (!orderPopup) return null;

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
          <h2 id="order-title" className="text-lg font-bold">Ordering isn’t available yet</h2>
          <button type="button" onClick={close} aria-label="Close">
            <IoCloseOutline className="text-2xl" />
          </button>
        </div>
        <p className="py-6 text-sm text-gray-600 dark:text-gray-300">
          This demo does not process orders or collect payment information.
        </p>
        <button type="button" onClick={close} className="mx-auto block rounded-full bg-secondary px-6 py-1.5 text-white duration-200 hover:scale-105">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;