import Home from "../Home/Home.jsx";


export default function Footer(){
    return(
        <footer className='bg-white dark:bg-gray-700 border-t-2 mt-8'>
            <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>

                <div className='md:flex md:justify-between'>
                    <div className="mb-6 md:mb-0">
                        <a className='flex items-center' href={"/"}>
                            <svg className='me-3 h-8' viewBox="0 0 59 52" fill="none"
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
                            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Git UI</span>
                        </a>
                    </div>

                    <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-purple-700 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href={"/"} className="hover:underline">Git UI</a>
                                </li>
                                <li className="">
                                    <a href={"contact/"} className="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-purple-700 uppercase">Follow Us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">LinkedIn</a>
                                </li>
                                <li className="">
                                    <a href="https://github.com/Sikandar-chaudhry" className="hover:underline">Github</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-purple-700 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8'/>

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-auto">© 2023 <a
                        href={"/"} className="hover:underline">Git UI by Sikander™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}