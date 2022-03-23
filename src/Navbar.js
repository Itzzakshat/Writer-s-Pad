import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Navbar = () => {
  const history = useHistory();
  const handleLogoClick  =()=>{
    history.push('/')
  }
 return (
  <nav className="navbar">
   <h1 className = 'logo' style = {{cursor:'pointer'}}onClick={handleLogoClick}>Writer's Pad</h1>
   <div className="links">

     <Link to="/">Home</Link>
     <Link to="/create">New Blog</Link>
    
   </div>
  </nav>
   );
}
 
export default Navbar;