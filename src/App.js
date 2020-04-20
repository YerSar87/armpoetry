import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

import UsersContainer from './components/Users/usersContainer';
import HeaderContainer from "./components/Header/headerContainer";
import LoginContainer from "./components/Login/loginContainer";
import Poems from "./components/Poems/poems";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/preloader";
import store from "./redux/redux-store";
import charentc from "./charentc/poems";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/dialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/profileContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <main className='main'>
                    <Route path='/Profile/:userId?' render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <ProfileContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path='/Dialogs' render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                        <DialogsContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/Poems' render={() => <Poems charentc={this.props.charentc}/>}/>
                    <Route path='/Login' render={() => <LoginContainer/>}/>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const ArmPoetryApp = (props) => {
  return <BrowserRouter>
      <Provider store={store}>
          <AppContainer charentc={charentc}/>
      </Provider>
  </BrowserRouter>
};
export default ArmPoetryApp;