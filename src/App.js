import './App.css';
import Head from './components/Head.js'
import Content from './components/Content.js'
import Sectiontwo from './components/Sectiontwo.js'
import Sectionthree from './components/Sectionthree'
import Footer from './components/Footer.js'
import { FaDollarSign } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import tree from './images/tree.png'

function App() {
  return (
    <div className="App">
      <Head cir = {FaDollarSign } />
      <Content img={tree} />
      < Sectiontwo />
      < Footer one = { FaDollarSign } two = { FaRegEnvelope } three = { FaPaperclip } four = { FaPhoneAlt } sec = { Sectionthree } />
    </div>
    
  );
}


export default App;
