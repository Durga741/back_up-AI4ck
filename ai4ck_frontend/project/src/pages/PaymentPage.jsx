import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PaymentPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (typeof window.Razorpay === "undefined") {
      alert("Razorpay SDK not loaded. Please try again.");
      return;
    }

    const options = {
      key: "rzp_live_WONtbIG5GVVkfH", // Replace with your Razorpay API Key
      amount: 100, // Amount in paise (₹100)
      currency: "INR",
      name: "Ai4CoolKids",
      description: "Enroll in the course",
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);

        // Redirect to the "redirection" page after successful payment
        navigate("/redirection");
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <h2>Enroll in Our Course</h2>
      <p>
        Click the button below to enroll in our course. Payment via UPI or QR Code.
      </p>
      <button
        onClick={handlePayment}
        style={{
          backgroundColor: "#3399cc",
          color: "#fff",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
