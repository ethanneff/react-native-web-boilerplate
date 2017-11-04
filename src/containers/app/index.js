import React from "react";
import { Router, AndroidBackButton } from "../../common/routing";
import Window from "../../components/window";
import Welcome from "../welcome";

const main = props => {
  return (
    <Router>
      <AndroidBackButton>
        <Window>
          <Welcome />
        </Window>
      </AndroidBackButton>
    </Router>
  );
};

export default main;
