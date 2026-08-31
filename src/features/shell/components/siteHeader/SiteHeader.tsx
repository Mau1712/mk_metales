import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { CloseIcon, MenuIcon } from "@assets/icons";
import isoLogoBgBlack from "@assets/isoLogo_bg_black.webp";
import { OffCanvas } from "@shared/ui/overlays/offCanvas/OffCanvas";
import { navItems } from "../../data";
import {
  CloseButtonElement,
  DesktopNavElement,
  HeaderActionsElement,
  LogoLinkElement,
  LogoImageElement,
  MenuButtonElement,
  MobileMenuHeaderElement,
  MobileNavLinkElement,
  MobileNavListElement,
  NavIndicatorElement,
  NavLinkElement,
  NavListElement,
  SiteHeaderElement,
} from "./SiteHeader.elements";

const getActiveNavIndex = (pathname: string) =>
  navItems.findIndex((item) =>
    item.path === "/" ? pathname === "/" : pathname.startsWith(item.path),
  );

export const SiteHeader = () => {
  const { pathname } = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = getActiveNavIndex(pathname);
      const nav = navRef.current;
      const activeLink = linkRefs.current[activeIndex];

      if (!nav || !activeLink || activeIndex < 0) {
        setIndicator((current) => ({ ...current, ready: false }));
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setIndicator({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        ready: true,
      });
    };

    updateIndicator();

    const resizeObserver = new ResizeObserver(updateIndicator);
    if (navRef.current) {
      resizeObserver.observe(navRef.current);
    }

    window.addEventListener("resize", updateIndicator);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [pathname]);

  return (
    <SiteHeaderElement data-site-header>
      <LogoLinkElement to="/" aria-label="MK Metales">
        <LogoImageElement
          src={isoLogoBgBlack}
          alt=""
          width={384}
          height={256}
          decoding="async"
        />
      </LogoLinkElement>

      <HeaderActionsElement>
        <DesktopNavElement>
          <NavListElement ref={navRef} aria-label="Navegación principal">
            {navItems.map((item, index) => (
              <NavLinkElement
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                ref={(element) => {
                  linkRefs.current[index] = element;
                }}
              >
                {item.label}
              </NavLinkElement>
            ))}
            <NavIndicatorElement
              $left={indicator.left}
              $width={indicator.width}
              $ready={indicator.ready}
            />
          </NavListElement>
        </DesktopNavElement>

        <MenuButtonElement
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon aria-hidden />
        </MenuButtonElement>
      </HeaderActionsElement>

      <OffCanvas
        open={menuOpen}
        onClose={handleCloseMenu}
        side="left"
        aria-label="Menú de navegación"
        closeAriaLabel="Cerrar menú"
      >
        <MobileMenuHeaderElement>
          <LogoLinkElement
            to="/"
            aria-label="MK Metales"
            onClick={handleCloseMenu}
          >
            <LogoImageElement
              src={isoLogoBgBlack}
              alt=""
              width={384}
              height={256}
              decoding="async"
            />
          </LogoLinkElement>
          <CloseButtonElement
            type="button"
            aria-label="Cerrar menú"
            onClick={handleCloseMenu}
          >
            <CloseIcon aria-hidden />
          </CloseButtonElement>
        </MobileMenuHeaderElement>

        <MobileNavListElement aria-label="Navegación principal">
          {navItems.map((item) => (
            <MobileNavLinkElement
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={handleCloseMenu}
            >
              {item.label}
            </MobileNavLinkElement>
          ))}
        </MobileNavListElement>
      </OffCanvas>
    </SiteHeaderElement>
  );
};
