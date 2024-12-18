function findInAgenda(agenda, phone) {
  const db = agenda.split("\n").map(x => {
    const rPhone = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/g
    const rName = /\<([a-zA-Z\s]*)\>/g
    const phoneNum = x.match(rPhone)?.at(0)
    const name = rName.exec(x)?.at(1)

    const dir = x.replace(rPhone, "").replace(rName, "").trim()
    
    return [phoneNum, name, dir]
  })

  const results = db.filter(x => x[0].includes(phone))

  return (results.length == 1) ? results[0][2] : null
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
// // { name: "Juan Perez", address: "Calle Gran Via 12" }

// findInAgenda(agenda, '600-987')
// // { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

// findInAgenda(agenda, '111')
// // null
// // Explicación: No hay resultados

// findInAgenda(agenda, '1')
// // null
// // Explicación: Demasiados resultados
