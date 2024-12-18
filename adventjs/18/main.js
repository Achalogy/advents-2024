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