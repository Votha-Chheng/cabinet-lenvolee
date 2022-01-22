import Image from "next/image"
import styled from "styled-components";

const ImageModal = ({img, getImgId, height, width, border}) => {

  return (
    <PicWrapper className="pic-containers" style={{height: height, width:width, border:`${border ? "5px solid var(--main-color-text)" : ""}`}}>
      <Image 
        src={`/images/${img}.jpg`} 
        layout="fill" 
        objectFit="cover" 
        placeholder="blur" 
        blurDataURL={`/images/${img}-tampon.jpg`} 
        id={img} 
        onClick={getImgId}
        alt={img}
      />
    </PicWrapper>
  );
}

ImageModal.defaultProps = {
  height : "600px", 
  width :"450px",
  img :"", 
  getImgId :""
}


const PicWrapper = styled.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
  
`
 

export default ImageModal;