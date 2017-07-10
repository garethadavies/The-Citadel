import React from 'react';
import { ScrollView, View, Text } from 'react-native';

const HomeView = () => {
  // // @TODO - Create a loading HOC and remove this from view
  // if (customerDetails.get('isLoading')) {
  //   return <ActivityIndicator size="large" style={marginUtilStyles.marginTopLarge} />;
  // }

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View>
        <Text>Home view</Text>
      </View>
    </ScrollView>
  );
};

export default HomeView;
