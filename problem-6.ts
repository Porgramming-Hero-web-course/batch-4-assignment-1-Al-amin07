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
  const updateProfile = (
    myProfile: Profile,
    obj: Partial<Profile>
  ) => {
    return {
      ...myProfile,
      ...obj,
    };
  };
  const result = updateProfile(myProfile, { age: 30 });
  console.log(result);

  //
}
