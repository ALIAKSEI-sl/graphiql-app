function prettifyCode(code: string) {
  const ONE_TAB = "  ";
  const regExComments = /\/\/.*(\n|$)/gm;
  const regExProps = /\b[\s\n]+\b/g;
  const regExLastProp = /\b[\s\n]+}/g;
  const regExSpaces = /[\s\n]/g;

  const oneLineCode = code
    .replaceAll(regExComments, "")
    .replaceAll(regExProps, ",")
    .replaceAll(regExLastProp, ",}")
    .replaceAll(regExSpaces, "");

  let prettyCode = "";
  let padding = "";

  for (const char of oneLineCode) {
    if (char === "{") {
      prettyCode = `${prettyCode}${" "}{\n`;
      padding = padding.concat(ONE_TAB);
      prettyCode = `${prettyCode}${padding}`;
      continue;
    }
    if (char === "}") {
      padding = padding.slice(0, -2);
      prettyCode = prettyCode.trimEnd();
      prettyCode = `${prettyCode}\n${padding}}\n`;
      continue;
    }
    if (char === ",") {
      prettyCode = `${prettyCode}\n${padding}`;
      continue;
    }
    prettyCode = `${prettyCode}${char}`;
  }

  return prettyCode.trim();
}

export default prettifyCode;
