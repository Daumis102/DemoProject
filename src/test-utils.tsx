import {render, RenderOptions} from '@testing-library/react-native';
import React, {FC, ReactElement} from 'react';

import {Provider} from 'react-redux';
import {store} from './redux/store';

const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  render(ui, {wrapper: AllTheProviders, ...options});
  return {store};
}
export * from '@testing-library/react-native';
export {customRender as render};
