import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const scrollimagemodalresponsive = ({listeImages, selectedImage}) => {
  const [scrolling, setScrolling] = useState(0)
  const [touchStartX, setTouchStartX] = useState(0)
  const [start, setStart] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [translationX, setTranslationX] = useState(null)

  useEffect(()=>{
    setHorizontalScroll(selectedImage)
    
  }, [selectedImage])

  // useEffect(()=>{
  //   console.log(Math.floor(568/100)*100)
  // }, [scrolling])

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

  const handleTouchEnd = ()=>{
    let XRight = Math.floor(((scrolling/100)*100))-500
    let XLeft = Math.ceil((scrolling/100)*100)+500

    if (touchStart - touchEnd >  0) {
      if(XLeft>2500){
        setScrolling(2500)

      } else {
        setScrolling(XLeft)

      }
      
    } else {
      console.log()
      if(XRight<0){
        setScrolling(0)
        
      } else {
        setScrolling(XRight)

      }

    }

    // if(translationX>3000){
    //   setTranslationX(3000)
    // } else if (translationX<0){
    //   setTranslationX(0)
    // }
  }

  return (
    <ScrollContainer >
      <div 
        className="scroller-responsive" 
        style={{transform:`translateX(${-scrolling}px)`}}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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

  .scroller-responsive {
    display:flex;
    flex-direction:row;
    transition:transform 0.1s linear;
  }

  .img-container-res{
    min-width:500px;
    height:90vh;
    position:relative;
  }
`

export default scrollimagemodalresponsive;