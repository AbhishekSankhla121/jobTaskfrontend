import React from "react";
// eslint-disable-next-line
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavList = ({ url, title, onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={"ghost"}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme={"yellow"}
        width={"12"}
        height={"12"}
        rounded={"full"}
        position={"fixed"}
        zIndex={"overlay"}
        top={"6"}
        right={"6"}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={"blur(3px)"} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"} onClick={onClose}>
            {" "}
            &lt; Filter Data by
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={"4"} alignItems={"flex-start"}>
              <NavList onClose={onClose} url="/" title="Home"></NavList>
              <NavList onClose={onClose} title={"Browse All Courses"} />
              <NavList onClose={onClose} title={"Request a course"} />
              <NavList onClose={onClose} title={"Contact us"} />
              <NavList onClose={onClose} title={"About us"} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
