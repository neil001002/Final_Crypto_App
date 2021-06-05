import React, { Component } from "react";
import { Dimensions, Modal, Share } from "react-native";
import { WebView } from "react-native-webview";
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Right,
  Icon,
  Title,
  Button,
} from "native-base";

// const webViewHeight = Dimensions.get("window").height - 56;

class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    return this.props.onClose();
  };

  handleShare = () => {
    const { url, title } = this.props.articleData;
    message = `${title}\n\nRead More @ ${url}\n\nShared via Crypto News App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
  };

  render() {
    const { showModal, articleData } = this.props;
    const { url } = articleData;
    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}
        >
          <Container
            style={{ marginBottom: 0, backgroundColor: "white" }}
          >
            <Header style={{ backgroundColor: "#009387" }}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" style={{ color: "white", fontSize: 12 }} />
                </Button>
              </Left>
              <Body>
                <Title
                  children={articleData.title}
                  style={{ color: "white" }}
                />
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{ color: "white", fontSize: 12 }} />
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{ height: "100%", width: "100%" }}>
              <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
                onError={this.handleClose}
                startInLoadingState
                scalePageToFit
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export default ModalComponent;
