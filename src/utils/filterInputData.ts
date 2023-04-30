export const compareSearchValue = (searchValue: string, data: any, searchableKeys: string[]) => {
  let result = false
  searchableKeys.forEach((key: any) => {
    if (data[key].toLowerCase().includes(searchValue.toLowerCase())) {
      result = true
    }
  })
  return result
}
