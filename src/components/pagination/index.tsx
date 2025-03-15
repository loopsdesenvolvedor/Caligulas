import * as S from "./styles";

import Link from "next/link";

const Pagination = () => {
  return (
    <S.Root>
      <S.Content>
        <Link href="/videos?page=5">Anterior</Link>
        <Link className="selected" href="/videos?page=1">
          1
        </Link>
        <Link href="/videos?page=2">2</Link>
        <Link href="/videos?page=3">3</Link>
        <Link href="/videos?page=4">...</Link>
        <Link href="/videos?page=4">Próxima</Link>
      </S.Content>
    </S.Root>
  );
};

export default Pagination;
