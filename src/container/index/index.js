export class Todo {
  static #list = []
  static #count = []
  static #block = null
  static #template = null
  static #input = null
  static #button = null

  static #createTaskDate = (text) => {
    this.#list.push({
      id: ++this.#count,
      text,
      done: false,
    })
  }

  static init = () => {
    this.#template =
      document.getElementById(
        'task',
      ).content.firstElementChild

    this.#block = document.querySelector('.task__list')
    this.#input = document.querySelector('.form__input')
    this.#button = document.querySelector('.form__button')

    this.#button.onclick = this.#handlerAdd
    this.#render()
  }

  static #handlerAdd = () => {
    if (this.#input.value.length === 0) return
    this.#createTaskDate(this.#input.value)
    this.#input.value = ''
    this.#render()
  }
  static #render = () => {
    this.#block.innerHTML = ''

    if (this.#list.length === 0) {
      this.#block.innerText = 'Список задач пустий'
    } else {
      this.#list.forEach((taskData) => {
        const el = this.#createTaskElem(taskData)
        this.#block.append(el)
      })
    }
    this.#saveDate()
  }

  static #createTaskElem = (data) => {
    const el = this.#template.cloneNode(true)

    const [id, text, btnDo, btnCancel] = el.children

    id.innerText = `${data.id}.`
    text.innerText = data.text

    btnDo.onclick = this.#handleDo(data, btnDo, el)
    btnCancel.onclick = this.#handlerCancel(data)

    return el
  }

  static #handlerCancel = (data) => () => {
    const result = this.#deleteById(data.id)
    if (result) this.#render()
  }
  static #deleteById = (id) => {
    this.#list = this.#list.filter((v) => v.id !== id)
    return true
  }

  static #handleDo = (data, btn, el) => () => {
    const result = this.#toggleDone(data.id)
    console.log(result)
    if (result === true || result === false) {
      console.log(result)
      console.log(btn)
      console.log(el)
      el.classList.toggle('task--done')
      btn.classList.toggle('task__button--do')
      btn.classList.toggle('task__button--done')
    }
  }
  static #toggleDone = (id) => {
    const task = this.#list.find((item) => item.id === id)
    if (task) {
      task.done = !task.done
      return task.done
    } else {
      return null
    }
  }

  static #NAME = 'todo'
  static #saveDate = () => {
    localStorage.setItem(
      this.#NAME,
      JSON.stringify({
        list: this.#list,
        count: this.#count,
      }),
    )
  }
}

Todo.init()

window.todo = Todo
