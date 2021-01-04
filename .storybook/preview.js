import { newViewports } from './helpers/ViewportHelper';
import { ResetCSS } from '../src/assets/styles/reset';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: newViewports },
};

export const withGlobalStyle = storyFn => (
  <>
    <ResetCSS />
    {storyFn()}
  </>
);
