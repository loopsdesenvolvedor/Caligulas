"use client";

import * as S from "./styles";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleClick } from "@/redux/slices/on-click";

import Container from "../container";
import Button from "../button";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdAlert } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

import logo from "../../../public/logo.svg";
import Input from "../input";

const Header = () => {
  const dispatch = useDispatch();
  const clicked = useSelector((state: RootState) => state.click.menuOpen);

  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    const isMobileScreen = window.innerWidth <= 768;
    setIsMobile(isMobileScreen);

    if (isMobileScreen) {
      setIsSearchFormVisible(true);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  });

  return (
    <S.Header>
      {clicked && isMobile && isSearchFormVisible ? (
        <Container>
          <S.Form className="form-mobile" action="">
            <Input type="text" placeholder="Faça sua busca..." />
            <Button type="submit" icon={<FiSearch size={14} color="#fff" />} />
            <Button
              type="button"
              text="Cancelar"
              onClick={() => {
                dispatch(toggleClick());
              }}
            />
          </S.Form>
        </Container>
      ) : (
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
          <S.Form className="form-desktop">
            <Input type="text" placeholder="Faça sua busca..." />
            <Button type="submit" icon={<FiSearch size={14} color="#fff" />} />
          </S.Form>
          <S.ContentRight>
            <Button
              type="button"
              icon={<FiSearch color="#fff" size={16} />}
              onClick={() => {
                dispatch(toggleClick());
              }}
            />

            <Button
              type="button"
              icon={<IoMdAlert color="#fff" size={16} />}
              text="Entrar"
            />
          </S.ContentRight>
        </Container>
      )}
    </S.Header>
  );
};

export default Header;
