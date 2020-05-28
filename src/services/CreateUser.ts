/* Para criar: name, email, password */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>; //Vetor do tipo string OU TechObject .... string [] também funciona.
}

export default function createUser({
  name,
  email,
  password,
  techs,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs,
  };
  return user;
}
