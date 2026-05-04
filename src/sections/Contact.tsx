export default function Contact() {
  return (
    <section className="py-20 bg-gray-100 text-center px-6">
      
      <h2 className="text-3xl font-bold text-gray-800">
        Contact Us
      </h2>

      <p className="mt-4 text-gray-600">
        For bulk orders, dealership enquiries or product details
      </p>

      <form className="mt-8 max-w-xl mx-auto flex flex-col gap-4">
        
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-lg"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="p-3 border rounded-lg"
        />

        <textarea
          placeholder="Your Requirement"
          className="p-3 border rounded-lg"
        />

        <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
          Submit Enquiry
        </button>

      </form>

    </section>
  );
}