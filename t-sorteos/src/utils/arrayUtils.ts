function chunkArray<T>(array: T[], size: number): T[][] {
  return array.reduce((acc: T[][], _, index) => {
    if (index % size === 0) {
      acc.push(array.slice(index, index + size));
    }
    return acc;
  }, []);
}

function shuffleArray<T>(array: readonly T[]): T[] {
  const result = array.slice();

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    const temp = result[i] as T;
    result[i] = result[j] as T;
    result[j] = temp;
  }

  return result;
}

export { 
  chunkArray,
  shuffleArray,
};
