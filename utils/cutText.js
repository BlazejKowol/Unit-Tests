module.exports = (content, maxLength) => {
  if(content.length < 1 || maxLength < 1) return 'Error';
  if(content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
