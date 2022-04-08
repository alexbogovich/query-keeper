import pickByPatterns from '../functions/pickByPatterns'

export const vueQueryKeeper = (config = {}) => {
  const setting = { utm: true, ...config }
  let patterns = []
  if (setting.utm) {
    patterns.push(/^utm_.*/)
  }
  if (setting.patterns) {
    patterns = [...patterns, ...setting.patterns]
  }
  return (to, from, next) => {
    const query = pickByPatterns(from.query, to.query, patterns)
    if (query && Object.keys(query).length > 0) {
      next({ ...to, query: { ...query, ...to.query } })
    } else {
      next()
    }
  }
}

