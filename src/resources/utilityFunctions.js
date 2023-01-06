// the following 3 functions are used in the AdditionalInfo & SendMessage components

// api v2 wants a string that has a "name" property on it so we are manually adding it here
export const apiV2CompatibleStrings = (files) => files.map((file) => `${Object.values(file)[0]};name=${Object.keys(file)[0]};`)

export const convertToBase64 = (fileArray) => fileArray.map((file) => new Promise((resolve, reject) => {
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.onload = () => resolve(fileReader.result)
  fileReader.onerror = (error) => reject(new Error(error))
}))
