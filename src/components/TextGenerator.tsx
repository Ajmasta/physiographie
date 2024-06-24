import React from "react";

type Props = {
  text: string | string[];
  classes?: string;
  span?: boolean;
};

const TextGenerator = ({ text, classes, span }: Props) => {
  const html = { __html: text };
  return !span ? (
    <p className={classes} dangerouslySetInnerHTML={html} />
  ) : (
    <span className={classes} dangerouslySetInnerHTML={html} />
  );
};

export default TextGenerator;
