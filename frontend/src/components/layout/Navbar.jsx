// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ChevronDown, ChevronUp } from 'lucide-react';
// import { cn } from '@/lib/utils';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setActiveDropdown(null);
//   }, [location.pathname]);

//   const toggleDropdown = (dropdown) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//   };

//   const navLinks = [
//     {
//       title: 'For Students',
//       dropdown: true,
//       items: [
//         { title: 'Procedure', href: '/students/procedure' },
//         { title: 'Preparation', href: '/students/preparation' },
//         { title: 'FAQ', href: '/students/faq' },
//       ],
//     },
//     {
//       title: 'For Companies',
//       dropdown: true,
//       items: [
//         { title: 'Why Recruit', href: '/companies/why-recruit' },
//         { title: 'Procedure', href: '/companies/procedure' },
//         { title: 'Past Recruiters', href: '/companies/past-recruiters' },
//         { title: 'Profile', href: '/studentdashboard' }
//       ],
//     },
//     { title: 'Placements', href: '/placements' },
//     { title: 'Statistics', href: '/statistics' },
//     { title: 'Contact Us', href: '/contact' },
//   ];

//   return (
//     <nav
//       className={cn(
//         'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6',
//         isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
//       )}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <Link to="/" className="flex items-center space-x-2">
//           <img
//             src="https://www.nitjsr.ac.in/frontend/images/logo.png"
//             alt="NIT Jamshedpur"
//             className="h-10"
//           />
//           <div className="flex flex-col">
//             <span className="text-sm font-semibold text-nitj-700">NIT JAMSHEDPUR</span>
//             <span className="text-xs text-nitj-600">TRAesfsdffINING & PLACEMENT CELL</span>
//           </div>
//         </Link>

//         <div className="flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <div key={link.title} className="relative group">
//               {link.dropdown ? (
//                 <button
//                   onClick={() => toggleDropdown(link.title)}
//                   className="flex items-center text-gray-700 hover:text-nitj-600 font-medium transition-all"
//                 >
//                   {link.title}
//                   {activeDropdown === link.title ? (
//                     <ChevronUp className="h-4 w-4 ml-1" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4 ml-1" />
//                   )}
//                 </button>
//               ) : (
//                 <Link
//                   to={link.href}
//                   className="text-gray-700 hover:text-nitj-600 font-medium transition-all"
//                 >
//                   {link.title}
//                 </Link>
//               )}

//               {link.dropdown && activeDropdown === link.title && (
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
//                   {link.items?.map((item) => (
//                     <Link
//                       key={item.title}
//                       to={item.href}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-nitj-50 hover:text-nitj-600 transition-all"
//                       onClick={() => setActiveDropdown(null)}
//                     >
//                       {item.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
