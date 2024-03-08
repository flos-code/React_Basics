import { PropTypes } from "prop-types";

export function Course(props) {
  return (
    <p>
      <strong>{props.title}</strong>
      <hr />
      <mark>{props.author}</mark>
    </p>
  );
}

Course.displayName = "Kurs";

Course.defaultProps = {
  title: "Title unbekannt",
  author: "author unbekannt",
};

Course.propTypes = {
  title: PropTypes.string,
};
