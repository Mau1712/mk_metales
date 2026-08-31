import { ArrowForwardIcon } from "@assets/icons";
import isoLogoBgBlack from "@assets/isoLogo_bg_black.png";
import {
  companyContact,
  footerCopy,
  footerMaterials,
  footerNavItems,
  footerSocialLinks,
} from "../../data";
import {
  SiteFooterBottomElement,
  SiteFooterBrandCopyElement,
  SiteFooterBrandElement,
  SiteFooterBrandLeadElement,
  SiteFooterColumnElement,
  SiteFooterContactCtaElement,
  SiteFooterContactLinkElement,
  SiteFooterContactPromptElement,
  SiteFooterElement,
  SiteFooterGridElement,
  SiteFooterHeadingElement,
  SiteFooterInnerElement,
  SiteFooterLogoElement,
  SiteFooterMetaElement,
  SiteFooterNavElement,
  SiteFooterNavLinkElement,
  SiteFooterRightsElement,
} from "./SiteFooter.elements";

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <SiteFooterElement aria-label="Pie de página">
      <SiteFooterInnerElement>
        <SiteFooterGridElement>
          <SiteFooterBrandElement>
            <SiteFooterLogoElement to="/" aria-label="MK Metales">
              <img
                src={isoLogoBgBlack}
                alt=""
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
              />
            </SiteFooterLogoElement>
            <SiteFooterBrandLeadElement>
              {footerCopy.tagline}
            </SiteFooterBrandLeadElement>
            <SiteFooterBrandCopyElement>
              {footerCopy.description}
            </SiteFooterBrandCopyElement>
          </SiteFooterBrandElement>

          <SiteFooterColumnElement>
            <SiteFooterHeadingElement>Navegación</SiteFooterHeadingElement>
            <SiteFooterNavElement aria-label="Navegación del sitio">
              {footerNavItems.map((item) => (
                <SiteFooterNavLinkElement key={item.path} to={item.path}>
                  {item.label}
                </SiteFooterNavLinkElement>
              ))}
            </SiteFooterNavElement>
          </SiteFooterColumnElement>

          <SiteFooterColumnElement>
            <SiteFooterHeadingElement>Materiales</SiteFooterHeadingElement>
            <SiteFooterNavElement aria-label="Materiales">
              {footerMaterials.map((item) => (
                <SiteFooterNavLinkElement
                  key={item.label}
                  to={item.path}
                >
                  {item.label}
                </SiteFooterNavLinkElement>
              ))}
            </SiteFooterNavElement>
          </SiteFooterColumnElement>

          <SiteFooterColumnElement>
            <SiteFooterHeadingElement>Contacto</SiteFooterHeadingElement>
            {companyContact.phone ? (
              <SiteFooterContactLinkElement href={`tel:${companyContact.phone}`}>
                {companyContact.phone}
              </SiteFooterContactLinkElement>
            ) : null}
            {companyContact.email ? (
              <SiteFooterContactLinkElement href={`mailto:${companyContact.email}`}>
                {companyContact.email}
              </SiteFooterContactLinkElement>
            ) : null}
            {companyContact.whatsappUrl ? (
              <SiteFooterContactLinkElement
                href={companyContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </SiteFooterContactLinkElement>
            ) : null}
            {companyContact.location ? (
              <SiteFooterBrandCopyElement>
                {companyContact.location}
              </SiteFooterBrandCopyElement>
            ) : null}
            <SiteFooterContactPromptElement>
              {footerCopy.contactPrompt}
            </SiteFooterContactPromptElement>
            <SiteFooterContactCtaElement to={footerCopy.contactCta.to}>
              {footerCopy.contactCta.label}
              <ArrowForwardIcon aria-hidden />
            </SiteFooterContactCtaElement>
          </SiteFooterColumnElement>
        </SiteFooterGridElement>

        {footerSocialLinks.length > 0 ? (
          <SiteFooterNavElement aria-label="Redes sociales">
            {footerSocialLinks.map((item) => (
              <SiteFooterContactLinkElement
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </SiteFooterContactLinkElement>
            ))}
          </SiteFooterNavElement>
        ) : null}

        <SiteFooterBottomElement>
          <SiteFooterRightsElement>
            © {year} MK Metales. Todos los derechos reservados.
          </SiteFooterRightsElement>
          <SiteFooterMetaElement>{footerCopy.meta}</SiteFooterMetaElement>
        </SiteFooterBottomElement>
      </SiteFooterInnerElement>
    </SiteFooterElement>
  );
};
