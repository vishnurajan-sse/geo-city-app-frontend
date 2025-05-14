import { render, screen } from '@testing-library/react'
import Card from './Card';

describe('Card Component', () => {
    it('renders the copyright text correctly', () => {
        const cardObj = {
          title: 'testing card text',
          description: 'testing card desc'
      };
        render(<Card  {...cardObj}/>);
        const footerElement = screen.getByText(cardObj.title);
        screen.debug();
        expect(footerElement).toBeInTheDocument();
      });
})