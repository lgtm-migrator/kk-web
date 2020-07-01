import "./style.module.scss";

import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import NoSSR from "react-no-ssr";
import { menu } from "react-icons-kit/icomoon/menu";
import SquareNavigation, {
  SquareNavigationProps,
} from "components/organisms/SquareNavigation";

import Footer from "components/organisms/Footer";
import Icon from "components/atoms/Icon";
import Main from "components/organisms/Main";
import PrimaryNavigation from "components/molecules/PrimaryNavigation";
// import ToggleButton from "components/atoms/ToggleButton";
import useOnClickOutside from "hooks/useOnClickOutside";
import useWindowSize from "hooks/useWindowSize";

const Layout: FC = ({ children }) => {
  const { windowHeight } = useWindowSize();
  const style = useMemo(
    () => ({
      height: windowHeight,
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
    <NoSSR>
      <div style={style} styleName="layout">
        <div styleName="main-wrapper">
          <Main>{children}</Main>
        </div>
        <div styleName="footer-wrapper">
          <Footer />
        </div>
        <div styleName="primary-navigation-wrapper">
          <PrimaryNavigation />
          {/* <ToggleButton /> */}
        </div>
        <button onClick={handleClickOnButton} styleName="button">
          <Icon icon={menu} />
        </button>
        {squareNavigation}
      </div>
    </NoSSR>
  );
};

export default Layout;
