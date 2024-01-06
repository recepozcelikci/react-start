import { useEffect, useState } from "react"
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Policy from "../components/Layout/Policy/Policy";
import Search from "../components/Modals/Search/Search";
import PropTypes from "prop-types";
import Dialog from "../components/Modals/Dialog/Dialog";

const MainLayout = ({ children }) => {
  const[isSearchShow,setIsSearchShow] = useState(false);
  const[isDialogShow,setIsDialogShow] = useState(false);
  useEffect(()=>{
    const dialogStatus = localStorage.getItem("dialog") ?  JSON.parse(localStorage.getItem("dialog")) : localStorage.setItem("dialog",JSON.stringify(true));
    setTimeout(()=>{
      setIsDialogShow(dialogStatus);
    },2000);
  },[]); // eğer bir kere çalışmasını istiyorsam sayfa yüklendiğinde useEffect []

  return (
    <div className="main-layout">
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}/>
      <Dialog isDialogShow={isDialogShow}  setIsDialogShow={setIsDialogShow}/>
      <Header setIsSearchShow={setIsSearchShow}/>
      {children}
      <Policy/>
      <Footer />
    </div> 
  );
};

export default MainLayout;

MainLayout.protoTypes = {
  children: PropTypes.node
};
