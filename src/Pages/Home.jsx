import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import AppLayout from "../Components/AppLayouts/AppLayoutThree";
import AppCard from "../Components/AppComponents/AppCard";
import AppCardSmall from "../Components/AppComponents/AppCardSmall";
import AppBarMain from "../Components/AppBars/AppBarMain";
import AppBarRight from "../Components/AppBars/AppBarRight";

function Home() {
  const { LeftLayout, MainLayout, RightLayout } = AppLayout();

  return (
    <>
      <Text> Ini Home </Text>
      <Flex height="99vh">
        {LeftLayout('kodok')}
        {MainLayout(AppBarMain)}
        {RightLayout(AppBarRight
)}
      </Flex>
    </>
  );
}

export default Home;
