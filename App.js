import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import ContentScreen from './src/screens/ContentScreen';
import AccountScreen from './src/screens/AccountScreen';
import ShowStoriesScreen from './src/screens/ShowStoriesScreen';
import CreateStoriesScreen from './src/screens/CreateStoriesScreen';
import ArticleListScreen from './src/screens/ArticleListScreen';
import ArticleDetailScreen from './src/screens/ArticleDetailScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as ArticleProvider } from './src/context/ArticleContext';
import { setNavigator } from './src/navigationRef';
import LoadingScreen from './src/screens/LoadingScreen';

const switchNavigator = createSwitchNavigator({
  Load: LoadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    articleFlow: createStackNavigator({
      ArticleList: ArticleListScreen,
      ArticleDetail: ArticleDetailScreen,
    }),
    contentFlow: createStackNavigator({
      Content: ContentScreen,
      storiesFlow: createStackNavigator({
        Show: ShowStoriesScreen,
        Create: CreateStoriesScreen
      })
    }),
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <ArticleProvider>
      <AuthProvider>
        <App ref={(navigator) => {setNavigator(navigator)}} />
      </AuthProvider>
    </ArticleProvider> 
  );
};
