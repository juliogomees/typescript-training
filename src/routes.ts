import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWord(request: Request, response: Response) {
  const user = createUser({
    email: "julio@julio.com.br",
    password: "123456",
    techs: ["React", "ReactNative", "NodeJS", { title: "Java", experience: 2 }],
  });
  //return response.json({ message: "HelloWord" });
  return response.json({ user });
}
