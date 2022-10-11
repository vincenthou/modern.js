import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export function getStyledComponentCss({ jsx }: { jsx: React.ReactElement }) {
  const sheet = new ServerStyleSheet();

  const collectedJsx = sheet.collectStyles(jsx);
  return {
    styleSheet: sheet,
    jsx: collectedJsx,
  };
}
