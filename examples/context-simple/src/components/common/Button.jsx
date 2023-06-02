import PropTypes from 'prop-types';

import { useTheme } from '../Theme/ThemeContext';

function Button({ children }) {
  const { theme } = useTheme();
  const className = `button-${theme}`;

  return (
    <button className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
