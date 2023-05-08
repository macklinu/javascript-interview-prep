import {Stack} from '.'

test('empty', () => {
  const stack = new Stack()
  expect(stack.length).toBe(0)
  expect(stack.peek()).toBe(undefined)
  expect(stack.pop()).toBe(undefined)
  expect(stack.length).toBe(0)
})

test('integration', () => {
  const stack = new Stack(['a', 'b', 'c'])
  expect(stack.length).toBe(3)

  expect(stack.peek()).toBe('c')
  expect(stack.length).toBe(3)

  stack.push('d', 'e', 'f')

  expect(stack.length).toBe(6)
  expect(stack.pop()).toBe('f')
  expect(stack.length).toBe(5)
  expect(stack.peek()).toBe('e')
})
