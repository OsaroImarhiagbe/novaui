import { Nav} from "@/utils/types/types";
import {VisaArrowLeftLow, VisaArrowRightLow,} from "@visa/nova-icons-react";
import { Typography } from '@visa/nova-react';
import { sidebar } from "@/utils/data/data";
const NaviBar:React.FC<Nav> = ({isOpen,handleClick}) => {


  return (
    <div className="hidden md:block">
      <div
      className={`fixed top-0 left-0 h-full w-[250px] bg-[#343541] shadow-lg z-[999] transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-36"}`}
      >
        <div className="p-6">
        <button
          onClick={handleClick}
            className='top-[25px] right-0 h-[40px] justify-self-end w-[40px] flex justify-center items-center text-white cursor-pointer'
            >
              {isOpen ?  <VisaArrowLeftLow/>   :  <VisaArrowRightLow/> }
            </button>
          <ul
          style={{
            padding:10
          }}
          >
            {/* Nav Items */}
            {
              sidebar.map((item,i) => {
                return (
                  <li key={i} className="cursor-pointer text-white">
                    <Typography
                    variant="body-1"
                    className="text-lg flex flex-row items-center space-x-10"
                    style={{
                      fontSize:20,
                    }}>{item.icon && <item.icon />} {item.name}</Typography></li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NaviBar;
