{
  //
  const removeDuplicates = (arr: number[]): number[] => {
    const data = new Set(arr)
    console.log(data)
    return [...data]
    // return Array.from(new Set(arr));
  };
  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(result);
  //
}
