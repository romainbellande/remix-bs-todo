import { useEffect, useState } from 'react'

export default function useIsCollapsed() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      // Update isCollapsed based on window.innerWidth
   
        setIsCollapsed(window.innerWidth < 768 ? false : Boolean(isCollapsed))
      
    }

    // Initial setup
    handleResize()

    
      // Add event listener for window resize
      window.addEventListener('resize', handleResize)
    

    // Cleanup event listener on component unmount
    return () => {
   
        window.removeEventListener('resize', handleResize)
      
    }
  }, [isCollapsed, setIsCollapsed])

  return [isCollapsed, setIsCollapsed] as const
}