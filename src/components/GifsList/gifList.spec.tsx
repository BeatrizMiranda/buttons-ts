import { render, screen, waitFor } from "@testing-library/react"
import GifList from "."

jest.mock("../../api/giphy", () => ({
    getGifs: () => ({
        data: [{
            id: '1',
            title: "string",
            images: {
                fixed_height: {
                    url: 'imagem',
                }
            }
        }]
    })
}))

describe('Giflist test', () => {
    it('should show 1 images', async () => {
        render(<GifList />)
        await waitFor(async () => {
            const images = screen.getAllByRole('img')
            expect(images.length).toBe(1)
        })
    })

    it('should show heading', async () => {
        render(<GifList />)
        await waitFor(async () => {
            const h1 = screen.getByRole('heading', { level: 1 })
            expect(h1.textContent).toBe('GifList')
        })
    })
})