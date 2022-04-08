export default function(source, target, patterns = []) {
  const matched = {}

  for (const pattern of patterns) {
    if (pattern instanceof RegExp) {
      Object.entries(source)
        .filter(([key, value]) => value && value !== target[key] && pattern.test(key))
        .forEach(([key, value]) => {
            matched[key] = value
        })
    } else if (typeof pattern === 'string') {
      const value = source[pattern]
      if (value && target[pattern] !== value) {
        matched[pattern] = value
      }
    }
  }

  return matched
}
