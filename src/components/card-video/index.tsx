import * as S from "./styles";
import Title from "../title";

import { CardVideoType } from "@/@types/Video";
import Image from "next/image";
import Link from "next/link";

import { IoIosHeart } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const CardVideo = ({ title, image, rating, views, author }: CardVideoType) => {
  return (
    <S.Card>
      <Image src={image} alt={title} priority quality={100} />
      <Title tag="h2">
        <Link href="#">{title}</Link>
      </Title>
      <S.CardInfo>
        <Link href="#">
          <RiVerifiedBadgeFill size={14} color="#4C7EDB" />
          {author}
        </Link>
        <div>
          <span>
            <MdOutlineRemoveRedEye size={14} color="#fff" />
            {views}
          </span>
          <span>
            <IoIosHeart size={14} color="#A90015" />
            {rating}
          </span>
        </div>
      </S.CardInfo>
    </S.Card>
  );
};

export default CardVideo;
