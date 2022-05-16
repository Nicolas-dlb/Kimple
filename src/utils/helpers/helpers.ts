export const uniqueId = (): string => {
  const prefix = "id";
  let c = 0;
  const r = Math.floor(Math.random() * 1000);
  const str = `-${c}-${r}`;
  c += 1;
  return prefix + str;
};
export function removeDuplicates(arr: number[]) {
  const unique = arr.reduce((acc: number[], curr: number) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
  return unique;
}
