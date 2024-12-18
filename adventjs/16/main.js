function removeSnow(s) {
  const st = []
  for (let c of s) {
    if (st.at(-1) == c) st.pop()
    else st.push(c)
  }
  return st.join('')
}