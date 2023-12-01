export const v1Libraries = ({ studioEndpointUrl }) => (
  `${studioEndpointUrl}/api/contentstore/v1/home`
);

export const v2Libraries = ({ studioEndpointUrl }) => (
  `${studioEndpointUrl}/api/libraries/v2/`
);

export const libraryMetadata = ({ studioEndpointUrl, libraryId }) => (
  `${studioEndpointUrl}/api/libraries/v2/${libraryId}/`
);

export const libraryContent = ({ studioEndpointUrl, libraryId }) => (
  `${studioEndpointUrl}/api/libraries/v2/${libraryId}/blocks/`
);

export const blockContent = ({ studioEndpointUrl, blockId }) => (
  `${studioEndpointUrl}/library/${blockId}/`
);