import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import ContentPage from './components/ContentPage/ContentPage';


const App = () => {
  return (
    <>
     <div>
        <Header />
        <div style={{display:"flex"}}>
          <Sidebar />
          <ContentPage />
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default App;
