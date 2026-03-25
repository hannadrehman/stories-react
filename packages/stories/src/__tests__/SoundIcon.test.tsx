import React from 'react';
import { render, screen } from '@testing-library/react';
import { SoundIcon } from '../Components/SoundIcon';

describe('SoundIcon', () => {
  it('should render muted icon when type is "off"', () => {
    const { container } = render(<SoundIcon type="off" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute('width')).toBe('16');
    expect(svg?.getAttribute('height')).toBe('16');
    expect(svg?.getAttribute('fill')).toBe('white');
  });

  it('should render unmuted icon when type is "on"', () => {
    const { container } = render(<SoundIcon type="on" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute('width')).toBe('16');
    expect(svg?.getAttribute('height')).toBe('16');
    expect(svg?.getAttribute('fill')).toBe('white');
  });

  it('should render different SVG paths for "on" and "off"', () => {
    const { container: offContainer } = render(<SoundIcon type="off" />);
    const { container: onContainer } = render(<SoundIcon type="on" />);

    const offPath = offContainer.querySelector('path')?.getAttribute('d');
    const onPath = onContainer.querySelector('path')?.getAttribute('d');

    expect(offPath).toBeTruthy();
    expect(onPath).toBeTruthy();
    expect(offPath).not.toBe(onPath);
  });

  it('should render unmuted icon for any type other than "off"', () => {
    const { container: onContainer } = render(<SoundIcon type="on" />);
    const { container: randomContainer } = render(<SoundIcon type="random" />);

    const onPath = onContainer.querySelector('path')?.getAttribute('d');
    const randomPath = randomContainer.querySelector('path')?.getAttribute('d');

    expect(onPath).toBe(randomPath);
  });

  it('should render unmuted icon when type is empty string', () => {
    const { container: emptyContainer } = render(<SoundIcon type="" />);
    const { container: onContainer } = render(<SoundIcon type="on" />);

    const emptyPath = emptyContainer.querySelector('path')?.getAttribute('d');
    const onPath = onContainer.querySelector('path')?.getAttribute('d');

    expect(emptyPath).toBe(onPath);
  });

  it('should render SVG with correct viewBox', () => {
    const { container } = render(<SoundIcon type="on" />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
  });

  it('should render SVG with correct xmlns', () => {
    const { container } = render(<SoundIcon type="on" />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
  });
});
