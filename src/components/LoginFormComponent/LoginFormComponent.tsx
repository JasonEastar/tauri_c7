import { useState } from "react";
import {
  Button,
  Checkbox,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import "./LoginForm.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogin } from "../../features/authSlice";
export default function LoginFormComponent() {
  const [checked, setChecked] = useState(false);
  const navigator = useNavigate();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { name: "", email: "", password: "secret" },
    validate: {
      name: hasLength({ min: 3 }, "Tên đăng nhập phải lớn hơn 3 ký tự"),
      password: hasLength({ min: 3 }, "Mật khẩu nhập phải lớn hơn 3 ký tự"),
      // email: isEmail("Invalid email"),
    },
  });

  const dispatch = useDispatch()

  const handleLogin = (e: any) => {
    console.log("a", e);
    navigator("/");
    dispatch(authLogin(true))
  };

  return (
    <div className="login-form">
      <form onSubmit={form.onSubmit(handleLogin)}>
        <Stack
          bg="var(--mantine-color-body)"
          align="stretch"
          justify="center"
          gap="md"
          className="form-container"
        >
          <TextInput
            {...form.getInputProps("name")}
            key={form.key("name")}
            placeholder="Tên đăng nhập"
          />
          <PasswordInput
            placeholder="Mật khẩu"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          {/* <TextInput
            {...form.getInputProps("email")}
            key={form.key("email")}
            placeholder="Email"
          /> */}
          <Button type="submit">Đăng nhập</Button>

          {/* <Text mt="md">Form values:</Text>
          <Code block>{JSON.stringify(form.values, null, 2)}</Code>

          <Text mt="md">Submitted values:</Text>
          <Code block>
            {submittedValues ? JSON.stringify(submittedValues, null, 2) : "–"}
          </Code> */}
        </Stack>
        <div className="bottom-form">
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            label="Nhớ đăng nhập"
          />
          <Link to={""}>Quên mật khẩu?</Link>
        </div>
      </form>
    </div>
  );
}
