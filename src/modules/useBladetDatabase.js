import { ref } from 'vue'

export const useBladetDatabase = () => {
    const bladet = ref([
        {
            id: 1,
            pdf: '/downloads/Blad-2022-2.pdf',
            thumbnail: '/thumbnails/Blad-2022-2.jpg',
        },
        {
            id: 2,
            pdf: '/downloads/Blad-2023-1.pdf',
            thumbnail: '/thumbnails/Blad-2023-1.jpg',
        },
        {
            id: 3,
            pdf: '/downloads/Blad-2023-2.pdf',
            thumbnail: '/thumbnails/Blad-2023-2.jpg',
        },
        {
            id: 4,
            pdf: '/downloads/Blad-2024-1.pdf',
            thumbnail: '/thumbnails/Blad-2024-1.jpg',
        },
        {
            id: 5,
            pdf: '/downloads/Blad-2024-2.pdf',
            thumbnail: '/thumbnails/Blad-2024-2.jpg',
        },
        {
            id: 6,
            pdf: '/downloads/Blad-2025-1.pdf',
            thumbnail: '/thumbnails/Blad-2025-1.jpg',
        },

    ])

    return {
        bladet
    }
}
