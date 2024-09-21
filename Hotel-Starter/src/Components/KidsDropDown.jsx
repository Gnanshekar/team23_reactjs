import React, { useContext } from "react";
import { RoomContext } from "../Context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const lis = [
  { name: '0 kids' },
  { name: '1 kid' },
  { name: '2 kids' },
  { name: '3 kids' },
  { name: '4 kids' },
];

const KidsDropDown = () => {
   const { kids, setKids } = useContext(RoomContext);

   return (
    <Menu as="div" className="w-full h-full bg-white relative">
      {/* btn */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {kids === '0 Kids' ? 'No kids' : kids}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      {/* items */}
      <Menu.Items as="ul" className="bg-white absolute w-full flex flex-col z-40">
        {lis.map((li, index) => (
          <Menu.Item
            as="li"
            key={index}
            className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
            onClick={() => setKids(li.name)}
          >
            {li.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropDown;
