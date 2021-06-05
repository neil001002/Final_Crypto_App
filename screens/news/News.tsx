import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Left,
  Body,
  Right,
  Title,
} from "native-base";
import Tab1 from "./tabs/tab1";
import Tab2 from "./tabs/tab2";
import Tab3 from "./tabs/tab3";
export default class News extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left />
          <Body>
            <Title style={{ fontWeight: "bold" }}>Crypto News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Crypto">
            <Tab1 />
          </Tab>
          <Tab heading="Bitcoin">
            <Tab2 />
          </Tab>
          <Tab heading="Ethereum">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
