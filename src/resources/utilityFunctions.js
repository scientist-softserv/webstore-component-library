export const convertToBase64 = (fileArray) => fileArray.map((file) => new Promise((resolve, reject) => {
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.onload = () => resolve(fileReader.result)
  fileReader.onerror = (error) => reject(new Error(error))
}))
