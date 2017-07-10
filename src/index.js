import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './navigators/AppNavigator';

type Props = {
  dispatch: Function,
  nav: Object
};

class AppNavigation extends Component {
  props: Props;

  render () {
    const { nav, dispatch } = this.props;

    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            state: nav,
            dispatch
          })
        }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppNavigation);


