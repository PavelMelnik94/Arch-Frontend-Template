import { useEffect, useRef, useState } from 'react'
import { useDebounce } from 'react-use'

export const useSearch = (
  onSearch: (value: string) => void,
  onInputValue?: (value: string) => void,
  onInputDebounceValue?: (value: string) => void,
  initialValue?: string,
  isFocusOnMount?: boolean
) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string | undefined>(initialValue)

  const onSearchClick = () => {
    onSearch(value || '')
  }

  const handleChange = (newValue: string) => {
    setValue(newValue)
    onInputValue && value !== undefined && onInputValue(newValue)
  }

  useEffect(() => {
    initialValue && onSearch(initialValue)
  }, [initialValue])

  useDebounce(
    () => {
      onInputDebounceValue && value !== undefined && onInputDebounceValue(value)
    },
    500,
    [value]
  )

  useEffect(() => {
    if (isFocusOnMount) {
      inputRef.current?.focus()
    }
  }, [])

  return {
    inputRef,
    searchValue: value,
    onSearchClick,
    handleChange
  }
}
