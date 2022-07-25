
import { Layout, Technologies, CompanyList, WorkTogether } from "../../components";
import { Container } from "../../components/ui";


const Services = () => {
  return (
    <div>
      <Technologies/>
      <CompanyList/>
      <Container>
        <WorkTogether />
      </Container>
    </div>
  )
};

export default Services;

Services.Layout = Layout;
