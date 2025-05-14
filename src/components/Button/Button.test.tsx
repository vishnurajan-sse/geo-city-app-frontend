import { render, screen } from '@testing-library/react'
import Button from './Button';

describe('Button Component', () => {
    it('renders the button correctly', () => {
        const buttonObj  = {
          onClick: ()=>{},
      };
        render(<Button  {...buttonObj}>Testing Button</Button>);
        const footerElement = screen.getByText('Testing Button');
        screen.debug();
        expect(footerElement).toBeInTheDocument();
      });
})