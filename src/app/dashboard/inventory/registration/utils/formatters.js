export default function formatBrazilianDate(isoDate) {
  if (!isoDate || !isoDate.includes("-")) return ""
  const [year, month, day] = isoDate.split("-")
  return `${day}/${month}/${year}`
}
