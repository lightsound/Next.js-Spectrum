import { Button } from "@adobe/react-spectrum";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Button variant="cta" onPress={() => alert("Hey there!")}>
        Hello React Spectrum!
      </Button>
    </div>
  );
};

export default Home;
