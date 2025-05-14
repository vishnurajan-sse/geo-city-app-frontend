import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('renders the App component', () => {
        render(<App />)
        screen.debug();
    })
    it('renders the Header component in App component', () => {
        const { container } = render(<App />);
        const wrapper = container.querySelector('#app-header');
        expect(wrapper).toBeInTheDocument();
    })
    it('renders the Landing page in App component', () => {
        const { container } = render(<App />);
        const wrapper = container.querySelector('#landing-page-wrapper');
        expect(wrapper).toBeInTheDocument();
    })
    it('renders the Footer component in App component', () => {
        const { container } = render(<App />);
        const wrapper = container.querySelector('#app-footer');
        expect(wrapper).toBeInTheDocument();
    })
})