export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'maykbrito',
        name: "Mayk Brito",
        public_repos: '76',
        followers: '120000'
      },
      {
        login: 'diego3g',
        name: "Diego Fernandes",
        public_repos: '76',
        followers: '120000'
      }
    ]

  }


  delete(user) {

    // higher-order functions (map, filter, find, sao funcoes que usamos constancia )

    const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

    console.log(filteredEntries)
  }
}



export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOK = confirm('Tem certeza que deseja deletar essa linh?')
        if (isOK) {
          this.delete(user)
        }
      }


      this.tbody.append(row)
    })

  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td class="user">
      <img
        src=""
        alt=""
      />
      <a href="" target="_blank">
        <p></p>
        <span></span>
      </a>
    </td>
    <td class="repositories"></td>
    <td class="followers"></td>
    <td>
      <button class="remove">&times;</button>
    </td>
    `

    return tr


  }
  removeAllTr() {
    this.tbody.querySelectorAll('tr')

      .forEach((tr) => {
        tr.remove()
      })
  }

}
