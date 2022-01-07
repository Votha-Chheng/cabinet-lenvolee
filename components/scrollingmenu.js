import styled from "styled-components";
import Link from "next/link"

const ScrollingMenu = ({setSideMenu}) => {
  return (
    <UlWrapper>
      <li onClick={() => setSideMenu(false)}>
        <Link href="/soins">
          <a>Nos soins</a>
        </Link>
      </li>
      <li onClick={() => setSideMenu(false)}>
        <Link href="/hygiene">
          <a>Hygiène dentaire</a>
        </Link>
      </li>
      <li onClick={() => setSideMenu(false)}>
        <Link href="/urgences">
          <a>Urgences</a>
        </Link>
      </li>
      <li onClick={() => setSideMenu(false)}>
        <Link href="/infos">
          <a>Infos pratiques</a>
        </Link>
      </li>
    </UlWrapper>
  );
}

const UlWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li{
    padding:15px 0 15px 15px;
    margin:0;
    font-size:1.3rem;
    font-weight: normal;
    color: var(--main-color-text);
    font-family: var(--serif-font);
    font-weight: 400;
    letter-spacing: 1.75px;
    position: relative;
  }
`

export default ScrollingMenu;