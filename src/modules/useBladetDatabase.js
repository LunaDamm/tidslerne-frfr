import { ref } from 'vue'

export const useBladetDatabase = () => {
    const Bladet = ref([
        {
            id: 1,
            pdf: 'Blad-2022-2.pdf',
            thumbnail: 'Blad-2022-2.jpg',
        },
        {
            id: 2,
            pdf: 'Blad-2023-1.pdf',
            thumbnail: 'Blad-2023-1.jpg',
        },
        {
            id: 3,
            pdf: 'Blad-2023-2.pdf',
            thumbnail: 'Blad-2023-2.jpg',
        },
        {
            id: 4,
            pdf: 'Blad-2024-1.pdf',
            thumbnail: 'Blad-2024-1.jpg',
        },
        {
            id: 5,
            pdf: 'Blad-2024-2.pdf',
            thumbnail: 'Blad-2024-2.jpg',
        },
        {
            id: 6,
            pdf: 'Blad-2025-1.pdf',
            thumbnail: 'Blad-2025-1.jpg',
        },

    ])

    return {
        Bladet
    }
}
