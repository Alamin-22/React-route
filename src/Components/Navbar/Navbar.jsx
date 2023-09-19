
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' },
        { id: 6, name: 'Not Found', path: '*' }, // '*' is a wildcard to match any path
    ];

    return (


        <nav className="text-white " >
            <div className="md:hidden  p-4" onClick={()=> setOpen(!open)}>
                {open === true? <AiOutlineCloseCircle className="text-2xl cursor-pointer"/>:<AiOutlineMenu className="text-2xl cursor-pointer"/>}
                {/* <AiOutlineMenu className="text-2xl "></AiOutlineMenu> */}
            </div>
            <ul className={`md:flex duration-1000 space-x-5 text-xl font-medium ${open? '': "hidden"}`}>
                {
                    routes.map(rout => <Link key={rout.id} rout={rout}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;