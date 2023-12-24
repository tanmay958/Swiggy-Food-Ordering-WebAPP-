const PaymentSucess = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-gradient-to-r from-gray-200 via-white to-gray-200 animate-gradient-x shadow-lg rounded-lg">
      <header className="p-6">
        <h2 className="text-center text-lg font-semibold">
          Payment Confirmation
        </h2>
      </header>
      <main className="p-6">
        <div className="flex justify-center">
          <CheckCircleIcon className="w-12 h-12 text-green-500" />
        </div>
        <p className="text-center text-gray-600 mt-4">
          Your payment was successfully processed. You will receive a
          confirmation email shortly.
        </p>
      </main>
      <footer className="p-6 flex justify-center">
        <button className="mt-4">View Receipt</button>
      </footer>
    </div>
  );
};

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
export default PaymentSucess;
