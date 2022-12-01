import { renderHook } from "@testing-library/react"
import useCounter from "./useCounter"

describe('useCounter', () => {
  test('shuld render initialCount', () => {
    const {result} = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })
})