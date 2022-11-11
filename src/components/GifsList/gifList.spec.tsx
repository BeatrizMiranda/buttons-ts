import { render, screen } from "@testing-library/react"
import GifList from ".";

describe('Giflist test', () => {
    it('should show 10 images', () => {
        render(<GifList />)
        const images = screen.getAllByRole('img')
        expect(images.length).toBe(10)
    })
    it('should show heading', () => {
        render(<GifList />)
        const h1 = screen.getByRole('heading', { level: 1 })
        expect(h1.textContent).toBe('GifList')
    })
})