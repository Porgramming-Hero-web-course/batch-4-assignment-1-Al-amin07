{
  //
  const countWordOccurrences = (sentence: string, word: string): number => {
    const str: string[] = sentence.split(" ");
    let count = 0;
    for (const element of str) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        count += 1;
      }
    }
    return count;
  };
  const result = countWordOccurrences(
    "TypeScript is great. I love TypeScript!",
    "typescript"
  );
  console.log(result);

  //
}
