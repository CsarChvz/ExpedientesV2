"use client";

import { TextInput, PasswordInput, Button, Text, Stack } from "@mantine/core";
import { signUp } from "../../../lib/auth";
import { useActionState } from "react";

const SignUpForm = () => {
    const [state, action] = useActionState(signUp, undefined);

  return (
    <form action={action}>
      <Stack gap="sm">
        {state?.message && (
          <Text size="sm" c="red">
            {state.message}
          </Text>
        )}

        <TextInput
          label="Email"
          name="email"
          id="email"
          placeholder="john@example.com"
        />
        {state?.error?.email && (
          <Text size="sm" c="red">
            {state.error.email}
          </Text>
        )}

        <PasswordInput
          label="Password"
          name="password"
          id="password"
        />
        {state?.error?.password && (
          <Text size="sm" c="red">
            <p>Password must:</p>
            <ul style={{ paddingLeft: "1rem", marginTop: 0 }}>
              {state.error.password.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </Text>
        )}

        <Button type="submit">Sign Up</Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
