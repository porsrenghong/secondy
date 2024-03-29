import {
  Navbar,
  Text,
  Avatar,
  Dropdown,
  Input,
  useTheme,
  Button,
} from "@nextui-org/react";
import { User } from "react-iconly";
import { SearchIcon } from "./SearchIcon.js";
import Link from "next/link";
export default function NavigationBar() {
  return (
    <Navbar isBordered maxWidth="lg">
      <Link href="/">
        <Navbar.Brand css={{ mr: "$4" }}>
          <Text b color="black" css={{ mr: "$11" }} >
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
          <Link href="/signUpPage">
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="favorite">Favorite</Dropdown.Item>
              <Dropdown.Item key="myProducts">My Products</Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="success">
                <Button light color="success">
                  <Text color="success">Sign In</Text>
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Link>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  );
}
