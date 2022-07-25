import { Layout, Achievements } from "../components";
import { Header, WorkTogether, Tech } from "../components";
import { Container } from "../components/ui";
import { WeveBuilt } from "../components";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Achievements />

        <WeveBuilt />
        <Tech />
        <WorkTogether />
      </Container>
    </>
  );
};

export default Home;

Home.Layout = Layout;
