import * as S from "./styles";

import Link from "next/link";
import Image from "next/image";

import Container from "../container";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdAlert } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.ContentLeft>
          <button type="button">
            <HiOutlineMenuAlt4 color="#fff" size={30} />
          </button>
          <Link href="/">
            <Image
              src={logo}
              alt="Logo Caligula's"
              width={106}
              height={36}
              priority
              quality={100}
            />
          </Link>
        </S.ContentLeft>
        <S.ContentRight>
          <button type="button">
            <FiSearch color="#fff" size={16} />
          </button>
          <button type="button">
            <IoMdAlert color="#fff" size={16} />
            <span>Entrar</span>
          </button>
        </S.ContentRight>
      </Container>
    </S.Header>
  );
};

export default Header;
