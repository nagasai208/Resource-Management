export const UserNameValidate = value => {
   let shouldShowError
   if (value === '') {
      shouldShowError = 'Required'
      return shouldShowError
   } else {
      return ''
   }
}

export const PasswordValidate = value => {
   let shouldShowError
   if (value === '') {
      shouldShowError = 'Required'
      return shouldShowError
   } else {
      return ''
   }
}

export const ConfirmPasswordValidate = value => {
   let shouldShowError
   if (value === '') {
      shouldShowError = 'Required'
      return shouldShowError
   } else {
      return ''
   }
}
