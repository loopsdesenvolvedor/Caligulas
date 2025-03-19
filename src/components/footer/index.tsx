import * as S from "./styles";

import Image from "next/image";
import logo from "../../../public/logo.svg";

import { FaXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";

import Separator from "./components/separator";
import ListItems from "../list-items";
import Title from "../title";
import Link from "next/link";

const Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        <Image src={logo} alt="Logo Caligula's" height={30} />
        <ul>
          <ListItems
            className="discord-social"
            href="/"
            icon={<BsDiscord color="#fff" size={16} />}
          />
          <ListItems
            className="x-social"
            href="/"
            icon={<FaXTwitter color="#fff" size={16} />}
          />
        </ul>
      </S.Content>

      <S.ContentLinks>
        <div>
          <Title tag="h3">Links</Title>
          <ul>
            <ListItems text="Heterossexual" href="/" />
            <Separator />
            <ListItems text="Gay" href="/" />
            <Separator />
            <ListItems text="Trans" href="/" />
            <Separator />
          </ul>
        </div>
        <div>
          <Title tag="h3">Parceiros</Title>
          <ul>
            <ListItems text="Caligula's Model" href="/" />
            <Separator />
            <ListItems text="Feed Pornô" href="/" />
            <Separator />
            <ListItems text="Amadoras" href="/" />
            <Separator />
          </ul>
        </div>
        <div>
          <Title tag="h3">Premium</Title>
          <ul>
            <ListItems text="Heterossexual" href="/" />
            <Separator />
            <ListItems text="Gay" href="/" />
            <Separator />
            <ListItems text="Trans" href="/" />
            <Separator />
          </ul>
        </div>
      </S.ContentLinks>
      <S.ContentCopyright>
        <span>
          @2025 - caligulas.com.br -
          <Link href={`/`}> Política de Privacidade</Link> e
          <Link href={`/`}> Termos de Uso</Link>
        </span>
      </S.ContentCopyright>
    </S.Footer>
  );
};

export default Footer;
