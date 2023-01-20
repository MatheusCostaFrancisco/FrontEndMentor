import { useMainStore } from '../store'
import validateEmail from './validateEmail'

export default function validateForm() {
  const main = useMainStore()

  const { user } = main

  if (user.name === '') {
    return false
  }

  if (user.email === '' && validateEmail(user.email)) {
    return false
  }

  if (user.phone.length < 10) {
    return false
  }

  return true
}
