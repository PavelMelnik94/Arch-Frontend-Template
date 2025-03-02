interface RegexsType {
  EMAIL: RegExp
  NAME: RegExp
  PHONE: RegExp
}

const Regexs: RegexsType = {
  EMAIL:
    /(?!.*(-|_)\1)^(([^<>()[\]\\!?@#=^$%&*.,;:/\s"]+(\.[^<>()[\]\\!?@#=^$%&*.,;:/\s"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([\w\-]+\.)+[a-z]{2,}))$/i,
  NAME: /(^[а-яА-Яa-zA-Z .-]+$)/,
  PHONE: /^\+\d{11,15}$/,
}

export default Regexs
