import type { InputProps } from 'react-aria-components'

import CustomSVG from '@/components/ui/CustomSVG'
import { cc } from '@/utils/combineClasses'
import { Input, Label, SearchField } from 'react-aria-components'
import { useTranslation } from 'react-i18next'

import styles from './styles.module.scss'
import { useSearch } from './useSearch'

interface Props extends Omit<InputProps, 'size'> {
  onSearch: (value: string) => void
  initialValue?: string
  isFocusOnMount?: boolean
  icon?: JSX.Element
  onInputDebounceValue?: (value: string) => void
  onInputValue?: (value: string) => void
  className?: string
}

function Search(props: Props) {
  const { t } = useTranslation(['catalog'])

  const {
    isFocusOnMount = false,
    icon,
    initialValue,
    onSearch,
    onInputValue,
    onInputDebounceValue,
    className,
    placeholder,
    ...otherInputProps
  } = props

  const { inputRef, searchValue, onSearchClick, handleChange } = useSearch(
    onSearch,
    onInputValue,
    onInputDebounceValue,
    initialValue,
    isFocusOnMount,
  )

  return (
    <div className={cc(styles.searchRoot, className)}>
      <SearchField
        className={styles.search}
        defaultValue={searchValue}
        onChange={handleChange}
        onSubmit={onSearchClick}
        aria-label={t('catalog:searchInput')}
      >
        <Label className="visually-hidden" aria-label={t('catalog:searchInput')}>
          {t('catalog:searchInput')}
        </Label>
        <Input
          className={styles.searchInput}
          ref={inputRef}
          placeholder={placeholder}
          {...otherInputProps}
        />
        {icon && <CustomSVG className={styles.icon}>{icon}</CustomSVG>}
      </SearchField>
    </div>
  )
}

export default Search
