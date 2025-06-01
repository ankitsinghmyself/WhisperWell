import React from "react";

const AboutUs = () => {
  return (
    <div
      className="min-h-screen w-full bg-white font-sans"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 py-10">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#141414] mb-4">
            About WhisperWell
          </h1>
          <p className="text-sm md:text-base text-[#141414]">
            WhisperWell is a platform dedicated to fostering genuine human
            connection through shared vulnerability and anonymous expression.
            We believe that everyone deserves a safe space to share their
            thoughts, feelings, and experiences without fear of judgment or
            retribution. Our mission is to create a supportive community where
            individuals can connect with others who understand and empathize
            with their journeys.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#141414] mb-3">
            Our Values
          </h2>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="border border-[#e0e0e0] rounded-lg p-4 bg-white flex flex-col gap-2">
              <div className="text-[#141414]">
                {/* Shield Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-[#141414]">Privacy First</h3>
              <p className="text-sm text-[#757575]">
                Your identity is protected, allowing you to express yourself freely.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-[#e0e0e0] rounded-lg p-4 bg-white flex flex-col gap-2">
              <div className="text-[#141414]">
                {/* Community Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-[#141414]">Community Support</h3>
              <p className="text-sm text-[#757575]">
                We foster a welcoming community with respectful and empathetic interactions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-[#e0e0e0] rounded-lg p-4 bg-white flex flex-col gap-2">
              <div className="text-[#141414]">
                {/* Heart Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,74.6,97.69,125.34,102.85,127.87a7.94,7.94,0,0,0,7.3,0C142.31,219.34,240,168.6,240,94A62.07,62.07,0,0,0,178,32Z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-[#141414]">Empathy & Understanding</h3>
              <p className="text-sm text-[#757575]">
                We believe in empathy through sharing and listening with compassion.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#141414] mb-3">
            Our Story
          </h2>
          <p className="text-sm md:text-base text-[#141414]">
            WhisperWell was born from the idea that true connection comes from
            vulnerability. In a world that often encourages us to present a
            perfect image, we wanted to create a space where authenticity is
            celebrated.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#141414] mb-3">
            Meet the Team
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-32 h-32 bg-center bg-cover rounded-full"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSBfiUyjwuzj-QFat4Jm6Ffl0c3cwPeM40vJ3WcEexLTyljswF7PfHCGDZV5r2n_ezyR8PVSJN2hNrh7MVM63N-28V3jaNnnexGhy9xNqP22Ztkr-hJLBzms3Pq-w6yXTcRs0spiJ8j1EHBu9ejADhSTYAy_FgS8VADrVX2FwtfA1zg1X99k9BHudW64FbHtE6a3CaGv5sgC17OA43oPn2MX2Eb9PUEAXOaPeh3smh0g8dzLn3BN6VVPkyWzFb1QpI8S6cH1UY_dFG")`,
                }}
              />
              <p className="mt-3 font-medium text-[#141414]">Ankit Singh</p>
              <p className="text-sm text-[#757575]">Co-founder & CEO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
