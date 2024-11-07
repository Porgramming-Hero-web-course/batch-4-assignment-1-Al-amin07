{
  //
  interface Person {
    name: string;
    age: number;
  }
  const person: Person = {
    name: "Alice",
    age: 30,
  };

  const getProperty = <T, S extends keyof T>(obj: T, key: S): T[S] => {
    return obj[key];
  };
  console.log(getProperty(person, "age"));

  //
}
