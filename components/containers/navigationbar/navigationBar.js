import {
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Input,
  useTheme,
  Button,
} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import { Buy, Heart, User } from "react-iconly";
import { HeartIcon } from "./HeartIcon";
import { SearchIcon } from "./SearchIcon.js";
import { icons } from "./Icons.js";

export default function NavigationBar() {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const { isDark } = useTheme();

  return (
    <Layout>
      <Navbar maxWidth isBordered>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            SECONDY
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Navbar.Item hideIn="xs">
            <Button
              auto
              rounded
              light
              icon={<User set="bold" primaryColor="#616161" />}
            />
          </Navbar.Item>
          <Navbar.Item hideIn="xs">
            <Button
              auto
              rounded
              light
              icon={<Heart set="bold" primaryColor="#616161" />}
            />
          </Navbar.Item>
          <Navbar.Item hideIn="xs">
            <Button
              auto
              rounded
              light
              icon={<Buy set="bold" primaryColor="#616161" />}
            />
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>

      {/* second navigationBar */}
      <Navbar
        maxWidth="fluid"
        css={{
          position: "relative",
          borderTop: "$borderWeights$light solid #606060",
        }}
      >
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="underline-rounded"
          css={{
            w: "100%",
            jc: "center",
          }}
        >
          <Navbar.Link isActive href="#" css={{ color: "#000000" }}>
            ALL PRODUCTS
          </Navbar.Link>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                CATEGORY
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="autoscaling"
                showFullDescription
                description="ACME scales apps to meet user demand, automagically, based on load."
                icon={icons.scale}
              >
                Autoscaling
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                icon={icons.activity}
              >
                Usage Metrics
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="ACME runs on ACME, join us and others serving requests at web scale."
                icon={icons.flash}
              >
                Production Ready
              </Dropdown.Item>
              <Dropdown.Item
                key="99_uptime"
                showFullDescription
                description="Applications stay on the grid with high availability and high uptime guarantees."
                icon={icons.server}
              >
                +99% Uptime
              </Dropdown.Item>
              <Dropdown.Item
                key="supreme_support"
                showFullDescription
                description="Overcome any challenge with a supporting team ready to respond."
                icon={icons.user}
              >
                +Supreme Support
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link href="#">SELL</Navbar.Link>
          <Navbar.Link href="#">ABOUT US</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          showIn="xs"
          css={{
            w: "100%",
            jc: "center",
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
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
