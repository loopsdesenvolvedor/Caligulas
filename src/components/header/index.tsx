import * as S from "./styles";

import Link from "next/link";
import Image from "next/image";

import Container from "../container";
import Button from "../button";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdAlert } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.ContentLeft>
          <Button
            type="button"
            icon={<HiOutlineMenuAlt4 color="#fff" size={26} />}
          />

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
          <Button type="button" icon={<FiSearch color="#fff" size={16} />} />
          <Button
            type="button"
            icon={<IoMdAlert color="#fff" size={16} />}
            text="Entrar"
          />
        </S.ContentRight>
      </Container>
    </S.Header>
  );
};

export default Header;
