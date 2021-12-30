import { createContext, useContext, useState } from "react"

const BgColorContext = createContext()

const BgColorProvider = ({children}) =>{
  const [triggerOne, setTriggerOne] = useState(false)
  const [triggerOnce, setTriggerOnce] = useState(false)
  const [show, setShow] = useState(false)

  const triggerInView = (inView, entry)=> setTriggerOne(inView)
  const triggerInViewOnce = (inView, entry)=> inView && setTriggerOnce(true)

  return(
    <BgColorContext.Provider value={{triggerOne, triggerInView, triggerInViewOnce, triggerOnce, show, setShow}}>
      {children}
    </BgColorContext.Provider>
  )
}

export const useTriggerInview = ()=>{
  return useContext(BgColorContext)
}

export {BgColorContext, BgColorProvider}

