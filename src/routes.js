import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { HomeScreen } from './screens';

import { checkAccessToken } from './store/oauth/actions';

const createRootNavigator = () => {
  return StackNavigator({
    HomeScreen: {
      screen: HomeScreen
    }
  });
};

class RootNavigator extends React.Component {
  componentWillMount() {
      this.props.checkAccessToken();
  }

  render() {
    const Router = createRootNavigator();
    let { isAuthenticated } = this.props.oauth;

    if (!isAuthenticated) {
      return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
        }}>
          <ActivityIndicator
            size={'large'}
            color={'#0000ff'}
          />
        </View>
      );
    }

    return (
      <Router />
    );
  }
}

const mapStateToProps = state => {
  return {
    oauth: state.oauth
  };
};

export default connect(mapStateToProps, { checkAccessToken })(RootNavigator);
