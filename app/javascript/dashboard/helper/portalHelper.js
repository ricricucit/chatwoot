export const buildPortalURL = portalSlug => {
  const { hostURL, helpCenterURL } = window.chatwootConfig;
  const baseURL = helpCenterURL || hostURL || '';
  return `${baseURL}/hc/${portalSlug}`;
};

export const buildPortalArticleURL = (portalSlug, categorySlug, articleId) => {
  const portalURL = buildPortalURL(portalSlug);
  return `${portalURL}/${categorySlug}/${articleId}`;
};
