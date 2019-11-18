import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <div>
                    这是一个广告
                </div>
               <BrowserRouter basename='example-react'>
               <Route path="/homepage" component={HomePage}></Route>
               <Route path="/login" component={LoginPage}></Route>           
               </BrowserRouter>
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
