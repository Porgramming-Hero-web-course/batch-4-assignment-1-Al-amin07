{
  //
  const removeDuplicates = (arr: number[]): number[] => {
    return Array.from(new Set(arr));
  };
  const result = removeDuplicates([1, 2, 3, 4, 3, 2, 4, 2, 1]);
  console.log(result);
  //
}
