export default function WaveTransition() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
      <svg 
        viewBox="0 0 1440 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-[80px]"
      >
        <path 
          d="M0,0 C320,60 720,60 1440,0 L1440 80 L0 80 Z" 
          fill="white"
        />
      </svg>
    </div>
  )
}

