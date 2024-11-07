{
  //

  interface Person {
    name: string;
    age: number;
    email: string;
  }
  const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };

  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    let isTrue: boolean = false;
    for (const element of keys) {
      if (element in obj) {
        isTrue = true;
      } else {
        isTrue = false;
        break;
      }
    }
    return isTrue;
  };

  console.log(validateKeys(person, ["name", "age"]));
}
