import {
  Navbar,
  Text,
  Avatar,
  Dropdown,
  Input,
  Button,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.js";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.js";
import { Logout, User } from "react-iconly";
import { useRouter } from "next/router";
export default function NavAfterLogin() {
  const router = useRouter();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");
        router.push("./");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Navbar isBordered maxWidth="lg">
      <Link href="/">
        <Navbar.Brand css={{ mr: "$4" }}>
          <Text b color="black" css={{ mr: "$11" }}>
            SECONDY
          </Text>
        </Navbar.Brand>
      </Link>
      <Navbar.Content
        css={{
          "@xsMax": {
            w: "100%",
            jc: "space-between",
          },
        }}
      >
        <Navbar.Item
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <Input
            clearable
            contentLeft={
              <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            }
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px",
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                as="button"
                icon={<User set="broken" primaryColor="black" />}
              />
            </Dropdown.Trigger>
          </Navbar.Item>

          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key="favorite">
              <Link href="./comingSoonPage" style={{ color: "#000000" }}>
                Favorite
              </Link>
            </Dropdown.Item>

            <Dropdown.Item key="myProducts">
              <Link href="./salePage" style={{ color: "#000000" }}>
                My Products
              </Link>
            </Dropdown.Item>

            <Dropdown.Item key="logout" withDivider color="error">
              <Button light color="error" onPress={handleLogOut}>
                <Text color="error">Sign Out</Text>
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  );
}
