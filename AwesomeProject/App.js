import React from 'react';
import {SafeAreaView, Text, View, TouchableHighlight} from 'react-native';

function Card(props) {
  const cardContent = () => {
    if (props.contentVisible(props.id) === true) {
      return <Text style={styles.cardType}>{props.type.toUpperCase()}</Text>;
    }
    return null;
  };

  return (
    <TouchableHighlight onPress={() => props.onPress(props.type, props.id)}>
      <View style={styles.cardWrapper}>{cardContent()}</View>
    </TouchableHighlight>
  );
}

class Jogo extends React.Component {
  constructor() {
    super();
    this.state = {
      tempVisibleCardIds: [],
      visibleCardIds: [],
    };
  }

  showCard(id) {
    this.hideCard(id);
    this.setState({visibleCardIds: [id, ...this.state.visibleCardIds]});
  }

  showTempCard(id) {
    this.hideTempCard(id);
    this.setState({tempVisibleCardIds: [id, ...this.state.tempVisibleCardIds]});
  }

  hideCard(id) {
    this.setState({
      visibleCardIds: this.state.visibleCardIds.filter(
        (cardId) => cardId !== id,
      ),
    });
  }

  hideTempCard(id) {
    this.setState({
      tempVisibleCardIds: this.state.tempVisibleCardIds.filter(
        (cardId) => cardId !== id,
      ),
    });
  }

  render() {
    const onCardPress = (type, id) => {
      this.showTempCard(id);

      if (this.state.lastCardPressedId && this.state.lastCardPressedId !== id) {
        if (this.state.lastCardPressedType === type) {
          this.showCard(id);
          this.showCard(this.state.lastCardPressedId);
          this.hideTempCard(id);
          this.setState({lastCardPressedId: null, lastCardPressedType: null});
        } else {
          setTimeout(() => {
            this.hideTempCard(id);
            this.hideTempCard(this.state.lastCardPressedId);
          }, 1000);
          this.setState({lastCardPressedId: null, lastCardPressedType: null});
        }
      } else {
        this.setState({lastCardPressedId: id, lastCardPressedType: type});
      }
    };

    const isContentVisible = (id) => {
      return (
        this.state.visibleCardIds.includes(id) ||
        this.state.tempVisibleCardIds.includes(id)
      );
    };

    return (
      <SafeAreaView>
        <Card
          type="a"
          contentVisible={() => true}
          onPress={onCardPress}
          id={1}
        />
        <Card
          type="b"
          contentVisible={(id) => isContentVisible(id)}
          onPress={onCardPress}
          id={2}
        />
        <Card
          type="a"
          contentVisible={(id) => isContentVisible(id)}
          onPress={onCardPress}
          id={3}
        />
        <Card
          type="b"
          contentVisible={(id) => isContentVisible(id)}
          onPress={onCardPress}
          id={4}
        />
        <Card
          type="c"
          contentVisible={(id) => isContentVisible(id)}
          onPress={onCardPress}
          id={5}
        />
        <Card
          type="c"
          contentVisible={(id) => isContentVisible(id)}
          onPress={onCardPress}
          id={6}
        />
        <Card
          type="d"
          contentVisible={(id) => isContentVisible(id)}
          onPress={onCardPress}
          id={7}
        />
      </SafeAreaView>
    );
  }
}

const styles = {
  cardWrapper: {
    width: 100,
    height: 100,
    borderColor: 'black',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardType: {
    fontSize: 36,
  },
};

export default Jogo;
