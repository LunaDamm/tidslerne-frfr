import { ref } from 'vue'
import fm from 'front-matter'
import { marked } from 'marked'

marked.setOptions({ breaks: true })

const files = import.meta.glob('@/assets/artikler/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
})

export const useArtiklerDatabase = () => {
  const artikler = ref(Object.entries(files).map(([, raw], i) => {
    const { attributes: data, body: content } = fm(raw)

    return {
      id: i + 1,
      name: data.Titel || 'Ingen titel',
      author: data.Forfatter || '',
      authorEmail: data.Email || '',
      date: data.Dato || '',
      tags: data.Tags || [],
      image: data.Billede || '',
      description: data.Beskrivelse || '',
      txt: marked.parse(content)
    }
  }))

  return { artikler }
}
