export function assertEqual(actual: any, expected: any, message: string) {
  if (actual === expected) {
    console.log(`✅ ${message}`);
  } else {
    console.error(`❌ ${message}`);
    console.error(`   Expected: ${expected}, but got: ${actual}`);
  }
}