const htmlCleaner = dirtyHtml => {
    return dirtyHtml.replace(/\n/g, "")
      .replace(/&nbsp;+/g, '')
      .replace(/•+/g, '<br/>•')
      .replace(/<br\/>/, '');
};

export { htmlCleaner };