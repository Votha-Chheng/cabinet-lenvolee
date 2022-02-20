import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const scrollimagemodal = ({listeImages, selectedImage}) => {

  const [scrolling, setScrolling] = useState(0)

  useEffect(()=>{
    setHorizontalScroll(selectedImage)
    console.log(scrolling)

  }, [selectedImage])

  const setHorizontalScroll = (selectedImage)=> {
    for(let i=0 ; i<listeImages.length ; i++){
      if(listeImages[i]===selectedImage){
        setScrolling(-i*100)
      }
    }  
  }

  const toPreviousImage = (translationXValue)=>{
    setScrolling(translationXValue + 100)
    
  }
  const toNextImage = (translationXValue)=>{
    setScrolling(translationXValue - 100)
    
  }

  return (
    <ScrollContainer >
      <i 
        style={{display:`${scrolling===0 ? 'none' : "block"}`}}
        className="fa-solid fa-circle-chevron-left fa-3x"
        onClick={()=>toPreviousImage(scrolling)}
      />
      <i 
        className="fa-solid fa-circle-chevron-right fa-3x"
        style={{display:`${scrolling<=-500 ? 'none' : "block"}`}}
        onClick={()=>toNextImage(scrolling)}
      />  
      <div 
        className="scroller" 
        style={{display:"flex", transform:`translateX(${scrolling}%)`}}
      >
        {
          listeImages.length>0 &&
          listeImages.map((image, index)=>(
            <div key={index} className="img-container" >
              <Image src={`/images/${image}.jpg`} layout="fill" objectFit="contain" alt={image}/>
            </div>
          )) 
        } 
      </div>
    </ScrollContainer>
  );
}

const ScrollContainer = styled.div`
  position:relative;
  overflow:hidden;

  .scroller{
    display:block;
    transition:all 0.25s ease-out;
  }

  .img-container{
    min-width:100%;
    height:90vh;
    margin:0 auto;
    position:relative;
  }
  
  i{
    position:absolute;
    opacity:0.5;
    display:block;

    &:hover {
      opacity:1;
    }
    &.fa-circle-chevron-left {
      left:0;
      top:50%;    
    }
    &.fa-circle-chevron-right {
      right:0;
      top:50%;
      
    }
  }

`

export default scrollimagemodal;