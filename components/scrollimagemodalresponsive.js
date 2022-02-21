import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const scrollimagemodalresponsive = ({listeImages, selectedImage}) => {
  const [scrolling, setScrolling] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [narrowScreen, setNarrowScreen] = useState(false)


  useEffect(()=>{
    setHorizontalScroll(selectedImage)
    
  }, [selectedImage])

  useEffect(()=>{
    const mediaWatcher = window.matchMedia("(max-width: 500px)")
    setNarrowScreen(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(event) {
      setNarrowScreen(event.matches);
    }
    mediaWatcher.addEventListener('change', updateIsNarrowScreen)

    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
    }

  }, [])

  const setHorizontalScroll = (selectedImage)=> {
    for(let i=0 ; i<listeImages.length ; i++){
      if(listeImages[i]===selectedImage){
        setScrolling(i*500)
      }
    }  
  }

  const handleTouchStart = (event)=>{
    setTouchStart(event.targetTouches[0].clientX)
  
  }
  
  const handleTouchMove = (event)=>{
    setTouchEnd(event.targetTouches[0].clientX)

  }

  const handleTouchEnd = (narrowScr)=>{
    let size

    if(narrowScr){
      size = 360
    }else {
      size = 500
    }

    let XRight = Math.floor(((scrolling/100)*100))-size
    let XLeft = Math.ceil((scrolling/100)*100)+size
    
    if (touchStart - touchEnd >  0) {
      if(XLeft>size*5){
        setScrolling(size*5)

      } else {
        setScrolling(XLeft)

      }  
    } else {
      if(XRight<0){
        setScrolling(0)
        
      } else {
        setScrolling(XRight)

      }
    }
  }


  return (
    <ScrollContainer >
      <div 
        className="scroller-responsive" 
        style={{transform:`translateX(${-scrolling}px)`}}
        onTouchStart={handleTouchStart}
        onTouchEnd={()=>handleTouchEnd(narrowScreen)}
        onTouchMove={handleTouchMove}
      >
        {
          listeImages.length>0 &&
          listeImages.map((image, index)=>(
            <div key={index} className="img-container-res" >
              <Image src={`/images/${image}.jpg`} layout="fill" objectFit="contain" alt={image}/>
            </div>
          )) 
        } 
      </div>
    </ScrollContainer>
  );
}

const ScrollContainer = styled.div`
  width:100%;

  .img-container-res-500{
    min-width:360px;
    height:80vh;
    display:none;
    position:relative;
  }

  .scroller-responsive {
    display:flex;
    flex-direction:row;
    transition:transform 0.1s linear;
  }

  .img-container-res{
    min-width:500px;
    height:90vh;
    position:relative;
    display:block
  }

  @media (max-width:500px){
    .img-container-res{
      min-width:360px;
    }
    
  }
`

export default scrollimagemodalresponsive;