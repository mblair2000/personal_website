import { useState } from 'react'

/**
 * useForm — lightweight form state + validation hook
 *
 * @param {object} initialValues  - field defaults
 * @param {function} validate     - (values) => errors object
 */
export function useForm(initialValues, validate) {
  const [values,  setValues]  = useState(initialValues)
  const [errors,  setErrors]  = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    // Clear error on change if field was already touched
    if (touched[name] && validate) {
      const newErrors = validate({ ...values, [name]: value })
      setErrors(prev => ({ ...prev, [name]: newErrors[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    if (validate) {
      const newErrors = validate(values)
      setErrors(prev => ({ ...prev, [name]: newErrors[name] }))
    }
  }

  const handleSubmit = (onSubmit) => async (e) => {
    e.preventDefault()
    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, k) => ({ ...acc, [k]: true }), {})
    setTouched(allTouched)

    if (validate) {
      const newErrors = validate(values)
      setErrors(newErrors)
      if (Object.values(newErrors).some(Boolean)) return
    }
    await onSubmit(values)
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return { values, errors, touched, handleChange, handleBlur, handleSubmit, reset }
}
