class Calc {
  static #value = ''

  static #isDot = false
  static add = (value) => {
    if (isNaN(this.#value[this.#value.length - 2]))
      if (
        Number(this.#value(this.#value.length - 1)) === 0 &&
        this.#isDot == false
      ) {
        return null
      }
    this.#value = this.#value.concat(value)
    this.#output()
  }
  static dot = () => {
    if (
      isNaN(this.#value[this.#value.length - 1]) ||
      this.#isDot
    ) {
      return null
    }
    this.#isDot = true
    this.#value = this.#value.concat('.')
    this.#output()
  }
  static operation = (value) => {
    if (isNaN(this.#value[this.#value.length - 1])) {
      return null
    }
    this.#isDot = false
    this.#value = this.#value.concat(value)
    this.#output()
  }
  static sum = () => {
    this.#isDot = false
    this.#value = String(eval(this.#value))
    this.#output()
  }
  static clear = () => {
    this.#isDot = false
    this.#value = '0'
    this.#output()
  }

  static #output = () => {
    window.output.innerHTML = this.#value
  }
}

window.calc = Calc
