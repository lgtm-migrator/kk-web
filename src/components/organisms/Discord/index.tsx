import WidgetBot from '@widgetbot/react-embed';
import React, { FC } from 'react';

const DiscordWidget: FC = () => (
  <WidgetBot
    channel="783321509477220394"
    defer={false}
    server="783321508918460427"
    style={{
      height: '100%',
      maxHeight: '450px',
      maxWidth: '800px',
      width: '100%',
    }}
  />
);

export default DiscordWidget;
