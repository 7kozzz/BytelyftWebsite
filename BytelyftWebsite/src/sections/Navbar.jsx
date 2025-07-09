import React, { useState } from 'react'
import { motion } from 'motion/react'

function Navigation({ onItemClick }) {
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu after clicking
        if (onItemClick) {
            onItemClick();
        }
    };

    return (
        <ul className='nav-ul'>
            <li className='nav-li'>
                <a 
                    className='nav-link' 
                    href='#games'
                    onClick={(e) => handleSmoothScroll(e, 'games')}
                >
                    Games
                </a>
            </li>
            <li className='nav-li'>
                <a 
                    className='nav-link' 
                    href='#about'
                    onClick={(e) => handleSmoothScroll(e, 'about')}
                >
                    About
                </a>
            </li>
            <li className='nav-li'>
                <a 
                    className='nav-link' 
                    href='#careers'
                    onClick={(e) => handleSmoothScroll(e, 'careers')}
                >
                    Careers
                </a>
            </li>
            <li className='nav-li'>
                <a 
                    className='nav-link' 
                    href='#contact'
                    onClick={(e) => handleSmoothScroll(e, 'contact')}
                >
                    Contact
                </a>
            </li>
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Function to scroll to top smoothly
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsOpen(false); // Close mobile menu
    };

    // Close mobile menu
    const closeMobileMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className='fixed inset-x-0 top-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
            <div className='mx-auto px-3 sm:px-4 max-w-7xl'>
                <div className='flex items-center justify-between py-3 sm:py-4'>
                    <a 
                        href='/' 
                        className='text-lg sm:text-xl font-bold transition-colors text-neutral-400 hover:text-white flex-shrink-0'
                        onClick={scrollToTop}
                    >
                        Bytelyft
                    </a>
                    
                    {/* Mobile menu button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden p-2 -mr-2'
                        aria-label="Toggle navigation menu"
                    >
                        <img 
                            src={isOpen ? 'src/assets/close.svg' : 'src/assets/menu.svg'} 
                            className='w-5 h-5 sm:w-6 sm:h-6' 
                            alt='toggle'
                        />
                    </button>
                    
                    {/* Desktop navigation */}
                    <nav className='hidden sm:flex'>
                        <Navigation/>
                    </nav>
                </div>
            </div>
            
            {/* Mobile navigation overlay */}
            {isOpen && ( 
                <>
                    {/* Backdrop overlay */}
                    <div 
                        className='fixed inset-0 bg-black/50 backdrop-blur-sm sm:hidden'
                        onClick={closeMobileMenu}
                        style={{ top: '60px' }} // Adjust based on navbar height
                    />
                    
                    {/* Mobile menu */}
                    <motion.div 
                        className='fixed left-0 right-0 bg-primary/95 backdrop-blur-lg border-t border-neutral-600/30 sm:hidden'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{ top: '60px' }} // Position below navbar
                    >
                        <nav className='px-4 py-4 max-h-[calc(100vh-60px)] overflow-y-auto'>
                            <Navigation onItemClick={closeMobileMenu} />
                        </nav>
                    </motion.div>
                </>
            )}
        </div>
    )
}

export default Navbar