import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = ({postData, dialogData, messagesData}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/profile" component={ () => <Profile postData={postData}/>} />
          <Route path="/dialogs" component={ () => <Dialogs dialogData={dialogData} messagesData={messagesData} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
