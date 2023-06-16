// Pure JavaScript Function
export function testMethod() {
  console.log('Test Method')
  testMethod2('Calling Test Method 2')
}

export function testMethod2(name: string) {
  console.log(`Test Method 2 ${name}`)
}
