import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import DiscordWidget from 'components/organisms/Discord';
import Layout from 'components/templates/Layout';
import Seo from 'components/templates/Seo';

export type DiscordProps = PageProps;

const Discord: FC<DiscordProps> = () => (
  <>
    <Seo path="/discord" title="Discord" />
    <Layout>
      <DiscordWidget />
    </Layout>
  </>
);

export default Discord;
