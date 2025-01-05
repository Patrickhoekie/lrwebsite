import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative pt-20 bg-[#2F4F4F] text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6">
            Loyal Roots
          </h1>
          <p className="text-xl mb-12">
            We groeien samen, vanaf de roots.
          </p>
          <div className="relative w-full max-w-2xl">
            <Image
              src="/laptop-mockup.png"
              alt="Loyal Roots Marketing"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1440 0L1440 120C1440 120 1320 90 720 90C120 90 0 120 0 120L0 0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

