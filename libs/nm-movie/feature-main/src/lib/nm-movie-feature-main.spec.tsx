import { render } from '@testing-library/react';

import NmMovieFeatureMain from './nm-movie-feature-main';

describe('NmMovieFeatureMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NmMovieFeatureMain />);
    expect(baseElement).toBeTruthy();
  });
});
