import "./App.css";
import { useEffect, useState } from "react";
import Contact from "./components/contact";
import Doctors from "./components/doctors";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Stats from "./components/stats";

import { GraphQLClient, gql } from "graphql-request";

const graphAPI = new GraphQLClient(import.meta.env.VITE_HYGRAPH_PUBLIC_API);

const QUERY = gql`
  {
    doctors {
      id
      name
      specialty
      image {
        id
        url
      }
      monday
      tuesday
      wednesday
      thursday
      friday
      saturday
      sunday
    }
  }
`;

function App() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    graphAPI
      .request(QUERY)
      .then((data) => {
        setDoctors(data.doctors);
      })
      .catch((err) => console.log("oops ", err));
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Doctors doctors={doctors} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
