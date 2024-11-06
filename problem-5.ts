{
  //
  interface Person {
    name: string;
    age: number;
    gender: string;
  }
  const person: Person = {
    name: "Alamin Sujon",
    age: 22,
    gender: "male",
  };

  const getProperty = <T, S extends keyof T>(obj: T, key: S): T[S] => {
    return obj[key];
  };
  const result = getProperty(person, "name");
  console.log(result);

  //
}
