import React, { useEffect } from "react";

import "./AnonHomeView.scss";
import Text from "../../styleComponents/Text";
import Button from "src/styleComponents/Button";
import { LOGIN_VIEW_ROUTE } from "src/apps/SkateparksApp/skateparksAppRoutes";
import axios from "axios";

interface IProps {}

export const AnonHomeView: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="AnonHomeView">
      <Text className="AnonHomeView-welcome">Welcome to GrindyLocks!</Text>
      <Text fontSize="small" className="AnonHomeView-paragraph">
        This web app is being built mobile first, which means not all styles are
        optimized for desktop yet... among MANY other things that are not yet
        "optimized" or "functional." So in the mean time, please adjust your
        browser window to a smaller size, or use a mobile view in your dev
        tools.
      </Text>
      <Button linkTo={LOGIN_VIEW_ROUTE}>Login Here</Button>
    </div>
  );
};

export default AnonHomeView;
