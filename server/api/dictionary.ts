type Locale = keyof typeof dictionaries

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const locale = (query.locale as Locale) || 'en'

  return dictionaries[locale]
})

const ru = {
  '@sentences': 'Разборы',
  '@sources': 'Источники',
}

const en = {
  '@sentences': 'sentences',
  '@sources': 'sources',
}

const dictionaries = { ru, en }
