import React from "react";
import styles from "../../../styles/Home.module.css";
import {
  Grid,
  Card,
  Text,
  Row,
  Input,
  useInput,
  Spacer,
  Checkbox,
  Button,
  Container,
} from "@nextui-org/react";
import GoogleLogo from "../../../public/logos/GoogleLogo";
import FacebookLogo from "../../../public/logos/FacebookLogo";
import { Link } from "@nextui-org/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useRouter } from "next/router";

const SignIn = () => {
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };
  const router = useRouter();
  const [error, setError] = React.useState("");

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  const handleLogUser = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    setError("");
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("./");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
      });
  };
  return (
    <div className={styles.main}>
      <Container>
        <Grid.Container
          justify="center"
          AlignItems="center"
          AlignContent="center"
        >
          <Grid xs={12} sm={6} md={5} xl={3} lg={4}>
            <Card
              css={{
                height: "100%",
                padding: "50px 50px 50px 50px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "40px",
                  fontWeight: "500",
                  marginTop: 0,
                  marginBottom: "0px",
                }}
              >
                SIGN IN
              </h2>
              <Card.Body
                justify="center"
                AlignItems="center"
                AlignContent="center"
                css={{ padding: "30px 10px 10px 10px" }}
              >
                <form
                  method="POST"
                  onSubmit={handleLogUser}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Row>
                    <Input
                      {...bindings}
                      required={true}
                      clearable
                      onClearClick={reset}
                      status={helper.color}
                      color={helper.color}
                      helperColor={helper.color}
                      helperText={helper.text}
                      type="email"
                      label="Email"
                      placeholder="With regex validation"
                      bordered
                      size="lg"
                      fullWidth={true}
                      labelPlaceholder="Email"
                      id="email"
                      name="email"
                    />
                  </Row>
                  <Spacer y={2} />
                  <Row>
                    <Input.Password
                      required={true}
                      clearable
                      bordered
                      size="lg"
                      fullWidth={true}
                      labelPlaceholder="Password"
                      id="password"
                      name="password"
                    />
                  </Row>
                  <Spacer y={1} />
                  {error}
                  <Spacer y={1} />
                  <Link
                    href="/signUpPage"
                    color="success"
                    css={{ textDecoration: "underline" }}
                  >
                    Dont have account ? Register here !
                  </Link>
                  <Spacer y={1} />
                  <Button type="submit" color="gradient">
                    LOG IN
                  </Button>
                  <Spacer y={1} />
                  <Card.Divider />
                  <Spacer y={1} />
                  <Button
                    defaultSelected={true}
                    icon={<GoogleLogo />}
                    color="gradient"
                    css
                  >
                    USE GOOGLE
                  </Button>
                  <Spacer y={1} />
                  <Button
                    defaultSelected={true}
                    icon={<FacebookLogo />}
                    color="gradient"
                  >
                    USE FACEBOOK
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};

export default SignIn;
