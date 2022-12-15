import { Input, Navbar, Button } from "@nextui-org/react";
import { Search } from "react-iconly";

const MainSearchBar = () => {
  return (
    <>
      <Navbar navBarMaxWidth="fluid" disableShadow disableBlur>
        <Navbar.Content
          hideIn="xs"
          css={{
            w: "100%",
            jc: "center",
            "@xsMax": {
              p: 0,
              m: 0,
            },
          }}
        >
          <Input
            clearable
            contentRightStyling={false}
            size="xl"
            hideIn="xs"
            fullWidth
            placeholder="Search anything ..."
            contentLeft={<Search set="light" primaryColor="#616161" />}
            css={{
              "@xsMax": {
                p: 0,
                m: 0,
              },
            }}
          />
          <Button
            size="lg"
            color="gradient"
            auto
            css={{
              width: "20px",
              "@xsMax": {
                p: 0,
                m: 0,
              },
            }}
          >
            SEARCH
          </Button>
        </Navbar.Content>
      </Navbar>
    </>
  );
};

export default MainSearchBar;
