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
  const artikler = ref(Object.entries(files).map(([path, raw]) => {
    const { attributes: data, body: content } = fm(raw)
    const id = path.split('/').pop().replace('.md', '')

    return {
      id,
      name: data.Titel || 'Ingen titel',
      author: data.Forfatter || '',
      authorEmail: data.Email || '',
      date: data.Dato || '',
      tags: data.Tags || [],
      image: data.Billede || '',
      description: data.Beskrivelse || '',
      source: data.Kilde || '',
      txt: marked.parse(content)
    }
  }))

  return { artikler }
}
