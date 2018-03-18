export function* paginator(data) {
  for (var i = 0; i < data.length; i = i + 10) {
    if (i + 10 >= data.length) {
      return data.slice(i, i + 10);
    }
    yield data.slice(i, i + 10);
  }
}
