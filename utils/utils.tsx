export function countWords2(s) {
  s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
  s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
  var matches = s.match(/[\w\d\’\'-]+/gi);
  return s.split(/\s+\b/).length;
  return s.split(" ").filter(function (str) {
    return str != "";
  }).length;
  //return s.split(' ').filter(String).length; - this can also be used
}

export function countWords(str: string):number {
  if (str.length === 0) {
    return 0;
  } else {
    return str.split(/\s+\b/).length;
  }
}
