declare namespace jest {
  interface Matchers<R> {
    toMatchJSX(value: React.ReactNode): CustomMatcherResult
  }
}
