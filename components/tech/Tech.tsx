import { FC } from "react";
import { Grid, Button, Typography } from "../ui";
import Card from "./component/Card";
import data from "../../data/data.json";
import styles from "./Tech.module.css";

const Tech: FC = () => {
  const techData = data.tech;
  return (
    <div>
      <div className="text-center">
        <Typography el="h2" variant="secondary">We have the skills and</Typography>
        <Typography el="h2">experience to serve you</Typography>
      </div>
      <Grid>
        {techData &&
          techData.map((card: any) => <Card key={card.id} card={card} />)}
      </Grid>
      <div className="flex justify-center">
        <Button padding="lg">Learn more</Button>
      </div>
    </div>
  );
};

export default Tech;
