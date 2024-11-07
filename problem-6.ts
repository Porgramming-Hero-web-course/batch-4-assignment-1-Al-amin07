{
  //

  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  const updateProfile = <T>(myProfile: T, obj: Partial<T>) => {
    return {
      ...myProfile,
      ...obj,
    };
  };

  console.log(updateProfile(myProfile, { age: 26 }));

  //
}
