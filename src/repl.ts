export function cleanInput(input: string): string[] {
  const array = input.toLowerCase().trim().split(' ');
  return array.map(item => item.trim()).filter(item => item.length > 0);
}