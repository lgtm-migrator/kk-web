import "./style.module.scss";

import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import NoSSR from "react-no-ssr";
import { menu } from "react-icons-kit/icomoon/menu";
import { github } from "react-icons-kit/icomoon/github";

import SquareNavigation, {
  SquareNavigationProps,
} from "components/organisms/SquareNavigation";
import Footer from "components/organisms/Footer";
import Icon from "components/atoms/Icon";
import Main from "components/organisms/Main";
import PrimaryNavigation from "components/molecules/PrimaryNavigation";
import ToggleButton from "components/molecules/ToggleButton";
import useOnClickOutside from "hooks/useOnClickOutside";
import useWindowSize from "hooks/useWindowSize";
import DarkModeContext from "contexts/DarkModeContext";

const Layout: FC = ({ children }) => {
  const { windowHeight } = useWindowSize();
  const style = useMemo(
    () => ({
      minHeight: windowHeight,
    }),
    [windowHeight]
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickOnButton = useCallback<
    NonNullable<JSX.IntrinsicElements["button"]["onClick"]>
  >(() => {
    setMenuOpen(true);
  }, []);
  const handleClickOnLink = useCallback<
    NonNullable<SquareNavigationProps["handleClickOnLink"]>
  >(() => {
    setMenuOpen(false);
  }, []);
  const ref = useRef(null);
  const handler = useCallback(() => {
    setMenuOpen(false);
  }, []);
  const squareNavigation = useMemo(
    () =>
      menuOpen ? (
        <div styleName="square-navigation-wrapper">
          <SquareNavigation
            handleClickOnLink={handleClickOnLink}
            squareNavigationRef={ref}
          />
        </div>
      ) : null,
    [handleClickOnLink, menuOpen, ref]
  );

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
                  href="https://github.com/piro0919/kk-web2"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon icon={github} size={18} />
                </a>
                <ToggleButton checked={value} handleChange={toggle} />
              </div>
            </div>
            <div styleName="main-wrapper">
              <Main>{children}</Main>
            </div>
            <div styleName="footer-wrapper">
              <Footer />
            </div>
            <button onClick={handleClickOnButton} styleName="button">
              <Icon icon={menu} size={30} style={{ color: "#a6dfec" }} />
            </button>
            {squareNavigation}
          </div>
        </NoSSR>
      )}
    </DarkModeContext.Consumer>
  );
};

export default Layout;
