/* All the different routes/scenes the user can navigate */
import React from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import Register from './components/auth/Register';
import ForgotPasswordForm from './components/auth/ForgotPasswordForm';
import SellerMenuProfile from './SellerMenuProfile';
import BuyerMenuProfile from './BuyerMenuProfile';
import {
  KEY_AUTH, KEY_SIGN_UP, KEY_LOGIN, KEY_FORGOT_PASSWORD,
  KEY_PRODUCT_DETAILS, KEY_PRODUCT_LIST,
  KEY_PRODUCT_EDIT, KEY_SELLER_MENU, KEY_SELLER_MENU_PROFILE,
  KEY_BUYER_MENU, KEY_BUYER_MENU_PROFILE, KEY_CHAT, KEY_SELLER_CHAT,
  KEY_BUYER_PRODUCTS_LIST, KEY_SELECTED_PRODUCT, KEY_CART, KEY_PAYMENT,
  KEY_ADDCARD, KEY_REVIEW_ORDER, KEY_PLACE_ORDER
} from './actions/constants';

const RouterComponent = () => {
  return (
    <Router showNavigationBar={false} >
    <Scene key="root">
      <Scene key={KEY_AUTH} initial>
        <Scene
          key={KEY_LOGIN}
          sceneStyle={{ backgroundColor: '#fff' }}
          type='replace'
          component={LoginForm} hideNavBar initial
        />
        <Scene
          key={KEY_SIGN_UP}
          sceneStyle={{ backgroundColor: '#fff' }}
          component={Register} hideNavBar
        />
        <Scene
          key={KEY_FORGOT_PASSWORD}
          sceneStyle={{ backgroundColor: '#fff' }}
          component={ForgotPasswordForm}
        />
      </Scene>
      <Scene key={KEY_SELLER_MENU}>
        <Scene
          key={KEY_SELLER_MENU_PROFILE}
          item='sellerProfile'
          component={SellerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_PRODUCT_DETAILS}
          item='productCreate'
          component={SellerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_PRODUCT_LIST}
          item='productList'
          component={SellerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_PRODUCT_EDIT}
          item='productEdit'
          component={SellerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_SELLER_CHAT}
          item='chat'
          component={SellerMenuProfile} hideNavBar
        />

      </Scene>
      <Scene key={KEY_BUYER_MENU}>
        <Scene
          key={KEY_BUYER_MENU_PROFILE}
          item='sellersList'
          component={BuyerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_BUYER_PRODUCTS_LIST}
          item='buyerProductsList'
          component={BuyerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_CHAT}
          item='chat'
          component={BuyerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_SELECTED_PRODUCT}
          item='selectedProduct'
          component={BuyerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_CART}
          item='addToCart'
          component={BuyerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_PAYMENT}
          item='payment'
          component={BuyerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_ADDCARD}
          item='addCard'
          component={BuyerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_REVIEW_ORDER}
          item='reviewOrder'
          component={BuyerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_PLACE_ORDER}
          item='placeOrder'
          component={BuyerMenuProfile} hideNavBar
        />
      </Scene>
    </Scene>
    </Router>
  );
};

export default RouterComponent;
