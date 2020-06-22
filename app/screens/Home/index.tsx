import React from "react";
import { Layout } from "./Layout";

export const Home = ({ navigation }) => {
  // const { setToken } = React.useContext(AuthContext);
  // const { data } = useQuery(gql`
  //   {
  //     me {
  //       fullname
  //       email
  //     }
  //   }
  // `);

  // const handleLogout = async () => {
  //   setToken("");
  // };
  // return <Layout handleLogout={handleLogout}  data={data} />;
  return <Layout navigation={navigation}/>
};
