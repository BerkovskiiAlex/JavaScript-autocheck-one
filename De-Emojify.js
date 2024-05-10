/** @format */

function deEmojify(emojiString) {
  if (emojiString === "") return "";

  const digitToEmote = {
    0: ":)",
    1: ":D",
    2: ">(",
    3: ">:C",
    4: ":/",
    5: ":|",
    6: ":O",
    7: ";)",
    8: "^.^",
    9: ":(",
  };

  const emoteChains = emojiString.split("  ");

  const asciiCodes = emoteChains.map((chain) => {
    const digits = chain
      .split(" ")
      .map((emote) => {
        return Object.keys(digitToEmote).find(
          (key) => digitToEmote[key] === emote
        );
      })
      .join("");
    return parseInt(digits);
  });

  const result = String.fromCharCode(...asciiCodes);

  return result;
}
