// test for components:
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Cell } from '@/packages/main/components';
import { PlayerMark } from '@/constants';

jest.mock('@/styles/variables', () => ({
  styles: {
    primaryColor: 'blue',
  },
}));

describe('Cell Component', () => {
  const mockOnClick = jest.fn();

  it('should render without crashing', () => {
    render(
      <Cell
        value={null}
        currentPlayer={PlayerMark.CROSS}
        onClick={mockOnClick}
      />
    );
    expect(screen.getByTestId('cell-container')).toBeInTheDocument();
  });

  it('should display value when provided', () => {
    render(
      <Cell
        value={PlayerMark.CROSS}
        currentPlayer={PlayerMark.CROSS}
        onClick={mockOnClick}
      />
    );
    expect(screen.getByText('X')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    render(
      <Cell
        value={null}
        currentPlayer={PlayerMark.CROSS}
        onClick={mockOnClick}
      />
    );
    fireEvent.click(screen.getByTestId('cell-container'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
