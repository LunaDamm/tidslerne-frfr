import { ref } from 'vue'

export const useBladetDatabase = () => {
    const Bladet = ref([
        {
            id: 1,
            pdf: 'bladet-1.pdf',
            thumbnail: 'bladet-1.jpg',
        },
        {
            id: 2,
            pdf: 'bladet-1.pdf',
            thumbnail: 'bladet-1.jpg',
        },
        {
            id: 3,
            pdf: 'bladet-1.pdf',
            thumbnail: 'bladet-1.jpg',
        },

    ])

    return {
        Bladet
    }
}
