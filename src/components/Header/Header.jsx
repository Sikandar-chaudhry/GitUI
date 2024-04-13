import {Link, NavLink} from "react-router-dom";


export default function Header(){
    return(
        <>
            <header className='shadow shadow-purple-300 z-50 sticky top-0'>
                <nav className='bg-green-100  px-4 lg:px-6 py-2.5 '>
                    <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                        <div>
                            <Link to='/'>
                                <svg className='w-10 h-10' viewBox="0 0 59 52" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="7" y="5.2149" width="6" height="27.498"
                                          transform="rotate(-45.1995 7 5.2149)"
                                          fill="#0500FF"/>
                                    <rect x="47" y="1" width="6" height="31.7727" transform="rotate(44.9979 47 1)"
                                          fill="#0500FF"/>
                                    <rect x="58" y="21" width="6" height="31.7727" transform="rotate(89.7108 58 21)"
                                          fill="#0500FF"/>
                                    <rect x="52" y="41.8787" width="6" height="31.7727"
                                          transform="rotate(133.519 52 41.8787)"
                                          fill="#0500FF"/>
                                    <rect x="32" y="51.7712" width="6" height="31.7727"
                                          transform="rotate(179.432 32 51.7712)"
                                          fill="#0500FF"/>
                                    <rect x="29" y="20" width="6" height="31.7727" transform="rotate(45.5206 29 20)"
                                          fill="#0500FF"/>
                                    <rect x="32" y="21" width="6" height="31.7727" transform="rotate(89.7402 32 21)"
                                          fill="#0500FF"/>
                                </svg>
                            </Link>
                        </div>
                        <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
                             id="mobile-menu-2">
                            <ul className='flex flex-col lg:flex-row text-lg font-medium lg:space-x-8'>
                                <li>
                                    <NavLink to="/"
                                        className={({isActive}) =>
                                        `${isActive ? "text-purple-700" : "text-black"} pr-4 pl-3
                                        hover:text-purple-700 duration-200`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/github_stats"
                                             className={({isActive}) =>
                                             `${isActive ? "text-purple-700" : "text-black"} pr-4 pl-3
                                              hover:text-purple-700 duration-200`
                                             }
                                    >
                                        Github Stats
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about"
                                             className={({isActive}) =>
                                             `${isActive ? "text-purple-700" : "text-black"} pr-4 pl-3
                                                hover:text-purple-700 duration-200`
                                             }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact"
                                             className={({isActive}) =>
                                             `${isActive ? "text-purple-700" : "text-black"} pr-4 pl-3
                                                hover:text-purple-700 duration-200`
                                             }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}