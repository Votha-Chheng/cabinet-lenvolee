import Image from "next/image"
import styled from "styled-components";

const ImageModal = ({img, getImgId}) => {

  return (
    <PicWrapper className="pic-containers">
      <Image src={`/images/${img}`} layout="fill" objectFit="cover" placeholder="blur" blurDataURL="/images/image-tampon.jpg "id={img} onClick={getImgId}/>
    </PicWrapper>
  );
}

const PicWrapper = styled.div`
  position: relative;
  z-index: -1;
  min-height: 600px;
  width: 450px;
  cursor: pointer;
  
`
 

export default ImageModal;