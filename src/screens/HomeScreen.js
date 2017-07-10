import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { fetchCustomerDetails } from '../actions';
import HomeView from '../views/HomeView';

class HomeScreen extends Component {
  props: Props;

  static navigationOptions = {
    title: 'Home',
    headerTitle: 'The Citadel'
  };

  componentWillMount () {
    // @TODO - Investigate why this has stopped working
    // this.props.fetchCustomerDetails();
  }

  render () {
    return <HomeView />;
  }
}

export default HomeScreen;

// export default connect(
//   state => ({
//     customerDetails: state.getIn(['customer', 'details']),
//     isLoading: state.getIn(['customer', 'details', 'isLoading'])
//   }),
//   dispatch => bindActionCreators({ fetchCustomerDetails }, dispatch)
// )(HomeScreen);
