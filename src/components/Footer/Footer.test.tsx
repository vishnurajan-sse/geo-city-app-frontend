import { render, screen } from '@testing-library/react'
import Footer from './Footer';

describe('Footer Component', () => {
    it('renders the copyright text correctly', () => {
        const footerObj = {
          copyright: 'testing footer text',
          links: []
      };
        render(<Footer  {...footerObj}/>);
        const footerElement = screen.getByText(footerObj.copyright);
        screen.debug();
        expect(footerElement).toBeInTheDocument();
      });

       it('renders the links correctly', () => {
        const footerObj = {
          copyright: 'testing footer text',
          links: [
            {
              label: 'testing link',
              href: '#'
            }
          ]
      };
        render(<Footer  {...footerObj}/>);
        const footerElement = screen.getByText('testing link');
        screen.debug();
        expect(footerElement).toBeInTheDocument();
      });
})