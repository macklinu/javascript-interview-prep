export class Stack<T> {
  private readonly list: T[]
  constructor(initialEntries: T[] = []) {
    this.list = [...initialEntries]
  }

  get length(): number {
    return this.list.length
  }

  push(...entries: T[]) {
    this.list.push(...entries)
  }

  pop(): T | undefined {
    if (this.length === 0) {
      return undefined
    }

    return this.list.pop()
  }

  peek(): T | undefined {
    return this.list[this.length - 1]
  }
}
