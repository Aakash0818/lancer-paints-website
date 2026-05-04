export default function About() {
  return (
    <section id="about-us" className="py-24 bg-white px-6">
      
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Elevating Spaces. Defining Excellence.
        </h2>

        <p className="mt-3 text-blue-600 font-semibold tracking-wide">
          Since 2005
        </p>

        {/* About Content */}
        <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
          At <span className="font-semibold text-gray-800">Lancer Paints Pvt. Ltd.</span>, 
          we transform walls into expressions of style and individuality. Rooted in Hyderabad, 
          our journey since 2005 has been shaped by a passion for craftsmanship, innovation, 
          and timeless design.
        </p>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
          We create premium paints that go beyond color—offering rich finishes, smooth textures, 
          and long-lasting performance for those who value quality and detail.
        </p>

      </div>

      {/* Vision & Mission */}
      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Vision */}
        <div className="p-8 rounded-2xl bg-blue-50 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To become a trusted leader in the paint industry by delivering innovative, 
            high-quality, and sustainable coating solutions that enhance and protect 
            spaces while inspiring creativity and excellence.
          </p>
        </div>

        {/* Mission */}
        <div className="p-8 rounded-2xl bg-gray-50 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mission
          </h3>

          <ul className="text-gray-600 space-y-3 text-left">
            <li>• To manufacture and supply superior quality paints for residential, commercial, and industrial needs.</li>
            <li>• To continuously innovate through advanced technology and eco-friendly practices.</li>
            <li>• To ensure customer satisfaction through consistency, reliability, and timely service.</li>
            <li>• To build long-term relationships based on trust and integrity.</li>
            <li>• To promote environmentally responsible products and processes.</li>
          </ul>
        </div>

      </div>

      {/* Trust Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
        
        <div>
          <h3 className="text-3xl font-bold text-blue-600">2005</h3>
          <p className="text-gray-600 mt-2">Established</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">Premium</h3>
          <p className="text-gray-600 mt-2">Quality</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">100+</h3>
          <p className="text-gray-600 mt-2">Projects</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">Trusted</h3>
          <p className="text-gray-600 mt-2">Brand</p>
        </div>

      </div>

    </section>
  );
}