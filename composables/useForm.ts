export default function <T extends Record<string, unknown>>(initData: T) {
  const keys = Object.keys(initData)
  const formData = ref({ ...initData })
  const errorData = ref({ ...initData })

  const reset = () => {
    Object.assign(formData.value, initData)
  }

  const setErrors = (errors: Partial<T>) => {
    Object.assign(errorData.value, errors)
  }

  watch(
    () => ({ ...formData.value }),
    (newValue, oldValue) => {
      keys.forEach((key) => {
        if (newValue[key] !== oldValue[key]) {
          errorData.value[key] = initData[key]
        }
      })
    }
  )

  return {
    reset,
    formData,
    errorData,
    setErrors,
  }
}
