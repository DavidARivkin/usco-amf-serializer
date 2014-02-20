var JSZip = require( 'jszip' );

function getZippedContent(inputZipped)
{
  var zip = new JSZip(inputZipped);
  var result = "";
  for(var entryName in zip.files)
  {
    var entry = zip.files[entryName];
    //if( entry._data !== null && entry !== undefined)
    result = entry.asText();
    break;
  }
  return result;
}

module.exports = getZippedContent;
