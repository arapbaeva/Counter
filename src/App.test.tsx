import React from 'react';
import {render, screen} from '@testing-library/react';
import {Tablo} from "./components/Tablo/Tablo";


test('renders learn react link', () => {
    render(<Tablo/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
