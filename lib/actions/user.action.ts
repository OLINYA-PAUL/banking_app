"use server";

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";
import { redirect } from "next/navigation";

export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();

    const response = await account.createEmailPasswordSession(email, password);
    return parseStringify(response);
  } catch (error: any) {
    console.log(error.message);
  }
};

export const signUp = async (userData: SignUpParams) => {
  try {
    const { account } = await createAdminClient();
    const { email, password, firstName, lastName } = userData;

    const newUser = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("bank-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    parseStringify(newUser);

    return redirect("/");
  } catch (error: any) {
    console.log(error.message);
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

export const logoutSession = async () => {
  try {
    const { account } = await createSessionClient();

    cookies().delete("bank-session");

    await account.deleteSession("current");
  } catch (error) {
    return null;
  }
};
