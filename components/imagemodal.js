import Image from "next/image"
import styled from "styled-components";

const ImageModal = ({img, getImgId, height, width}) => {

  return (
    <PicWrapper className="pic-containers" style={{height: height, width:width}}>
      <Image 
        src={`/images/${img}.jpg`} 
        layout="fill" 
        objectFit="cover" 
        placeholder="blur" 
        blurDataURL={`/images/${img}-tampon.jpg`} 
        id={img} 
        onClick={getImgId}
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