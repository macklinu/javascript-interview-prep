export class Stack<T> {
  private list: T[]
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
    if (this.length === 0) return void 0
    return this.list.pop()
  }

  peek(): T | undefined {
    return this.list[this.length - 1]
  }
}
