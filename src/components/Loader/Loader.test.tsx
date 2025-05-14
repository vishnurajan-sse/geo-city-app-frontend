import { render, screen } from '@testing-library/react'
import Loader from './Loader';

describe('Loader Component', () => {
    it('renders the Loader correctly', () => {
        const loaderObj = {
          message: 'testing card text',
      };
        render(<Loader  {...loaderObj}/>);
        const footerElement = screen.getByText(loaderObj.message);
        screen.debug();
        expect(footerElement).toBeInTheDocument();
      });
})