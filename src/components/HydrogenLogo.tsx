import Image from 'next/image'

export function HydrogenLogo({ className = "", animated = true, variant = "auto" }: { className?: string, animated?: boolean, variant?: "light" | "dark" | "auto" }) {
  // Determine which logo to show
  const showLight = variant === "auto" ? "block dark:hidden" : variant === "light" ? "block" : "hidden";
  const showDark = variant === "auto" ? "hidden dark:block" : variant === "dark" ? "block" : "hidden";

  return (
    <>
      <Image 
        src="/hydrogen-logo.svg" 
        alt="Hydrogen - Cloud Intelligence" 
        width={200}
        height={80}
        className={`${className} ${showLight}`}
      />
      <Image 
        src="/hydrogen-logo-dark.svg" 
        alt="Hydrogen - Cloud Intelligence" 
        width={200}
        height={80}
        className={`${className} ${showDark}`}
      />
    </>
  )
}