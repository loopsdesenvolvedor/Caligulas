import Container from "@/components/container";
import Grid from "@/components/grid";
import Title from "@/components/title";
import CardVideo from "@/components/card-video";
import Pagination from "@/components/pagination";

import imageTest from "@/assets/test.jpg";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <main>
      <Container>
        <Title tag="h1">
          Vídeos recentes - <span>Brasil</span>
        </Title>
        <Grid $sm={2}>
          <CardVideo
            image={imageTest}
            title="Comi minha patroa  Francus em quanto o patrão viajava e olha só que show de bunda ela"
            views="200k"
            rating="65%"
            author="LoopsAmd"
          />
          <CardVideo
            image={imageTest}
            title="Comi minha patroa  Francus em quanto o patrão viajava e olha só que show de bunda ela"
            views="200k"
            rating="65%"
            author="LoopsAmd"
          />
          <CardVideo
            image={imageTest}
            title="Comi minha patroa  Francus em quanto o patrão viajava e olha só que show de bunda ela"
            views="200k"
            rating="65%"
            author="LoopsAmd"
          />
          <CardVideo
            image={imageTest}
            title="Comi minha patroa  Francus em quanto o patrão viajava e olha só que show de bunda ela"
            views="200k"
            rating="65%"
            author="LoopsAmd"
          />
          <CardVideo
            image={imageTest}
            title="Comi minha patroa  Francus em quanto o patrão viajava e olha só que show de bunda ela"
            views="200k"
            rating="65%"
            author="LoopsAmd"
          />
          <CardVideo
            image={imageTest}
            title="Comi minha patroa  Francus em quanto o patrão viajava e olha só que show de bunda ela"
            views="200k"
            rating="65%"
            author="LoopsAmd"
          />
        </Grid>
        <Pagination />
        <Footer />
      </Container>
    </main>
  );
};

export default Home;
