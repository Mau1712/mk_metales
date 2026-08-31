import { Outlet } from "react-router-dom";
import { ScrollToTop } from "@app/router/ScrollToTop";
import { GlobalContainer } from "@shared/ui/containers/globalContainer/GlobalContainer";
import { SiteFooter } from "../siteFooter/SiteFooter";
import { SiteHeader } from "../siteHeader/SiteHeader";
import { WhatsAppFloat } from "../whatsAppFloat/WhatsAppFloat";
import {
  ShellContentElement,
  ShellLayoutElement,
} from "./ShellLayout.elements";

export const ShellLayout = () => {
  return (
    <ShellLayoutElement>
      <ScrollToTop />
      <SiteHeader />
      <ShellContentElement>
        <GlobalContainer fullWidth>
          <Outlet />
        </GlobalContainer>
      </ShellContentElement>
      <SiteFooter />
      <WhatsAppFloat />
    </ShellLayoutElement>
  );
};
