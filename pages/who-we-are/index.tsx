import { FC } from "react";
import { Layout, TeamCards, WorkTogether, Achievements, Header } from "../../components";
import { Gallery } from "../../components";
import { Container } from "../../components/ui";
import data from "../../data/data.json";

const WhoWeAre = () => {
  return (
    <div>
      <Header variant="tertiary" props={data.header.headerProps.whoWeAre} />
      <Container>
        <Achievements />
        <TeamCards />
      </Container>

      <Gallery />
      <Container>
        <WorkTogether />
      </Container>
    </div>
  );
};

export default WhoWeAre;

WhoWeAre.Layout = Layout;
