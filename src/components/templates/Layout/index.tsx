/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-shadow */
import './style.module.scss';

import { graphql, Link, useStaticQuery } from 'gatsby';
import Autosuggest from 'react-autosuggest';
import { slack } from 'react-icons-kit/fa/slack';
import { github } from 'react-icons-kit/icomoon/github';
import { menu } from 'react-icons-kit/icomoon/menu';
import { ic_search } from 'react-icons-kit/md/ic_search';
import LinesEllipsisLoose from 'react-lines-ellipsis/lib/loose';
import NoSSR from 'react-no-ssr';
import React, {
  ComponentPropsWithoutRef,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Icon from 'components/atoms/Icon';
import PrimaryNavigation from 'components/molecules/PrimaryNavigation';
import ToggleButton from 'components/molecules/ToggleButton';
import Footer from 'components/organisms/Footer';
import Main from 'components/organisms/Main';
import SquareNavigation, {
  SquareNavigationProps,
} from 'components/organisms/SquareNavigation';
import DarkModeContext from 'contexts/DarkModeContext';
import useOnClickOutside from 'hooks/useOnClickOutside';
import useWindowSize from 'hooks/useWindowSize';

type Edge = {
  node: {
    frontmatter: {
      date: string;
      slug: string;
      title: string;
    };
    rawMarkdownBody: string;
  };
};

type AllBlogData = {
  allMarkdownRemark: { edges?: Edge[] };
};

type Blog = {
  date: string;
  markdown: string;
  title: string;
  slug: string;
};

type Blogs = Blog[];

const Layout: FC = ({ children }) => {
  const { windowHeight } = useWindowSize();
  const style = useMemo(
    () => ({
      minHeight: windowHeight,
    }),
    [windowHeight],
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickOnButton = useCallback<
    NonNullable<ComponentPropsWithoutRef<'button'>['onClick']>
  >(() => {
    setMenuOpen(true);
  }, []);
  const handleClickOnLink = useCallback<
    NonNullable<SquareNavigationProps['handleClickOnLink']>
  >(() => {
    setMenuOpen(false);
  }, []);
  const ref = useRef(null);
  const handler = useCallback(() => {
    setMenuOpen(false);
  }, []);
  const squareNavigation = useMemo(
    () => (menuOpen ? (
      <div styleName="square-navigation-wrapper">
        <SquareNavigation ref={ref} handleClickOnLink={handleClickOnLink} />
      </div>
    ) : null),
    [handleClickOnLink, menuOpen, ref],
  );
  const [inputValue, setInputValue] = useState('');
  const handleChange = useCallback((_, { newValue }) => {
    setInputValue(newValue);
  }, []);
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery<AllBlogData>(graphql`
    query SearchQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            rawMarkdownBody
            frontmatter {
              date
              title
              slug
            }
          }
        }
      }
    }
  `);
  const [blogs, setBlogs] = useState<Blogs>([]);
  const [suggestions, setSuggestions] = useState<Blogs>([]);

  useEffect(() => {
    if (!edges) {
      return;
    }

    setBlogs(
      edges.map(
        ({
          node: {
            frontmatter: { date, slug, title },
            rawMarkdownBody,
          },
        }) => ({
          date,
          markdown: rawMarkdownBody,
          slug,
          title,
        }),
      ),
    );
  }, [edges]);

  useOnClickOutside(ref, handler);

  return (
    <DarkModeContext.Consumer>
      {({ toggle, value }) => (
        <NoSSR>
          <div style={style} styleName="layout">
            <div styleName="navigation-wrapper">
              <div styleName="primary-navigation-wrapper">
                <PrimaryNavigation />
              </div>
              <div styleName="icons">
                <a
                  href="https://join.slack.com/t/kk-webhq/shared_invite/zt-r0qjvw1f-5QCnXyGzW4~OA6574tIipg"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon icon={slack} size={18} />
                </a>
                <a
                  href="https://github.com/piro0919/kk-web"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon icon={github} size={18} />
                </a>
                <ToggleButton checked={value} handleChange={toggle} />
                <div styleName="autosuggest-wrapper">
                  <Autosuggest
                    getSuggestionValue={() => ''}
                    inputProps={{
                      onChange: handleChange,
                      value: inputValue,
                    }}
                    multiSection={false}
                    onSuggestionsClearRequested={() => {
                      setSuggestions([]);
                    }}
                    onSuggestionsFetchRequested={({ value, reason }) => {
                      const values = value.match(/[^\s]+/g);

                      if (!values || reason !== 'input-changed') {
                        return;
                      }

                      setSuggestions(
                        blogs
                          .filter(
                            ({ date, markdown, title }) => values
                              .map(
                                (value) => `${date} ${markdown} ${title}`
                                  .toLowerCase()
                                  .indexOf(value.toLowerCase()) >= 0,
                              )
                              .filter(Boolean).length === values.length,
                          )
                          .filter((_, index) => index < 5),
                      );
                    }}
                    renderInputComponent={({ onChange, ...inputProps }) => (
                      <div styleName="input-wrapper">
                        <Icon icon={ic_search} />
                        <input onChange={onChange as never} {...inputProps} />
                      </div>
                    )}
                    renderSuggestion={({
                      date, markdown, title, slug,
                    }) => (
                      <Link key={slug} to={slug}>
                        <div styleName="date">{date}</div>
                        <div styleName="render-suggestion">
                          <div styleName="title">{title}</div>
                          <div styleName="markdown">
                            <LinesEllipsisLoose maxLine="2" text={markdown} />
                          </div>
                        </div>
                      </Link>
                    )}
                    suggestions={suggestions}
                  />
                </div>
              </div>
            </div>
            <div styleName="main-wrapper">
              <Main>{children}</Main>
            </div>
            <div styleName="footer-wrapper">
              <Footer />
            </div>
            <button onClick={handleClickOnButton} styleName="button">
              <Icon icon={menu} size={30} style={{ color: '#a6dfec' }} />
            </button>
            {squareNavigation}
          </div>
        </NoSSR>
      )}
    </DarkModeContext.Consumer>
  );
};

export default Layout;
