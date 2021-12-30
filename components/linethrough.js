import styled from "styled-components";

const LineThrough = ({width, height, backgroundColor, borderRadius}) => {
  return (
    <LineThroughStyle style={{width: width, height:height, backgroundColor:backgroundColor, borderRadius:borderRadius}} />
  );
}


LineThrough.defaultProps = {
  width: "100%",
  height:"1px",
  backgroundColor: 'black',
  borderRadius: "1px"
}

const LineThroughStyle = styled.div`
  margin: 0 auto;
  transition: background-color 0.3s ease-out;
`
export default LineThrough;

