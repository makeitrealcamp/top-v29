import PropTypes from 'prop-types';

import { useTheme } from '../Theme/ThemeContext';

function Panel({ title, children }) {
  const { theme } = useTheme();
  const className = `panel-${theme}`;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Panel;
