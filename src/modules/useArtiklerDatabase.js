import { ref } from 'vue'
import folderText from '@/assets/artikler/folder.txt?raw'
import sejlturText from '@/assets/artikler/sejltur.html?raw'

export const useArtiklerDatabase = () => {
  const artikler = ref([
    {
      id: 1,
      name: 'Risiko for ny kræft efter kræftbehandling',
      description: 'Danske læger har undersøgt risikoen for senfølger i form af ny kræft.',
      tags: ['senfølger', 'konventielt'],
      txt: folderText,
      image: 'https://www.tidslerne.dk/wp-content/uploads/2024/06/pink-ribbon-3715345_1280-560x416.jpg',
      date: '2024-06-10',
      author: 'Inge Kellermann',
      authorEmail: 'inge@helsemail.dk',
    },
    {
      id: 2,
      name: 'Tag på sejltur med Tidslerne i september!',
      description: 'Ejerne af 10 danske sejlskibe har doneret en sejltur medlemmer af Tidslerne.',
      tags: ['medlemsfordele'],
      txt: sejlturText,
      image: 'https://www.tidslerne.dk/wp-content/uploads/2024/08/skib_Johanne.jpg',
      date: '2024-08-22',
    },
    {
      id: 3,
      name: 'Ny flot folder til omdeling!',
      description: 'Team Skærebært har lavet en ny flot folder!!!!!',
      tags: ['information'],
      txt: '*TEXT FILE*',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
      date: '2025-05-15',
    },
    {
      id: 4,
      name: 'Episk testartikel',
      description: 'Testartikel til at vise hvordan det ser ud med en længere artikel.',
      tags: ['test'],
      txt: '*TEXT FILE*',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
      date: '2025-05-15',
    },
  ])

  return {
    artikler,
  }
}
